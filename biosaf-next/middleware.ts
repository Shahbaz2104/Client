import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

async function verifyJwtToken(token: string, secret: string): Promise<boolean> {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return false;

    const [headerB64, payloadB64, signatureB64] = parts;
    
    // Base64Url decode payload
    const base64Payload = payloadB64.replace(/-/g, '+').replace(/_/g, '/');
    const paddedPayload = base64Payload.padEnd(base64Payload.length + (4 - (base64Payload.length % 4)) % 4, '=');
    const payloadJson = JSON.parse(atob(paddedPayload));
    
    if (payloadJson.exp && Date.now() >= payloadJson.exp * 1000) {
      return false;
    }

    const encoder = new TextEncoder();
    const keyData = encoder.encode(secret);
    const data = encoder.encode(`${headerB64}.${payloadB64}`);

    const cryptoKey = await crypto.subtle.importKey(
      'raw',
      keyData,
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify']
    );

    const base64Sig = signatureB64.replace(/-/g, '+').replace(/_/g, '/');
    const paddedSig = base64Sig.padEnd(base64Sig.length + (4 - (base64Sig.length % 4)) % 4, '=');
    const sigStr = atob(paddedSig);
    const sigBuf = new Uint8Array(sigStr.length);
    for (let i = 0; i < sigStr.length; i++) {
      sigBuf[i] = sigStr.charCodeAt(i);
    }

    return await crypto.subtle.verify('HMAC', cryptoKey, sigBuf, data);
  } catch {
    return false;
  }
}

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value;
  const { pathname } = request.nextUrl;

  const isValid = token ? await verifyJwtToken(token, JWT_SECRET) : false;

  if (pathname.startsWith('/admin')) {
    if (!isValid) {
      const loginUrl = new URL('/login', request.url);
      const response = NextResponse.redirect(loginUrl);
      if (token) {
        response.cookies.delete('auth_token');
      }
      return response;
    }
  }

  if (pathname === '/login' && isValid) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/login"],
};
