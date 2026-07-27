# BIOSAF Enterprises - Next.js Foundation

## Overview
This is the modern Next.js foundation for the BIOSAF Enterprises website, built using the approved architecture.

## Project Structure
```
biosaf-next/
├── app/
│   ├── (admin)/          # Admin route group (protected)
│   ├── (auth)/         # Auth route group
│   ├── api/             # API routes
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   ├── globals.css      # Global styles
│   ├── error.tsx       # Error boundary
│   └── not-found.tsx   # 404 page
├── components/
│   ├── layout/          # Layout components (Navbar, Footer)
│   ├── ui/             # UI components (Loader, EmptyState)
│   └── ui/             # shadcn/ui components (to be added)
├── lib/
│   ├── prisma.ts       # Prisma client singleton
│   └── utils.ts        # Utility functions (cn)
├── prisma/
│   └── schema.prisma   # Prisma schema
├── actions/             # Server Actions
├── public/             # Static assets
├── .env                # Environment variables
├── .env.example       # Example env vars
├── tsconfig.json       # TypeScript config
├── tailwind.config.ts  # Tailwind config
└── package.json       # Dependencies
```

## Tech Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Prisma ORM
- MySQL
- Zod
- React Hook Form
- Framer Motion
- Lucide React
- ESLint / Prettier

## Remaining Tasks
1. Install dependencies using npm install --legacy-peer-deps
2. Initialize shadcn/ui components using npx shadcn@latest init and add needed components
3. Create AdminSidebar and AdminTopbar components
4. Configure Prisma Client generation: npx prisma generate
5. Test the build using npm run dev

## Environment Variables
```env
NODE_ENV=development
DATABASE_URL="mysql://root:1234@localhost:3306/biosaf_db"
```

## License
Proprietary - BIOSAF Enterprises
