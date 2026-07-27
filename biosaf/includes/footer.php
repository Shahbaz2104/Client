<?php

declare(strict_types=1);

$divisions = division_nav();
$nav = site_nav();
?>
    </main>

    <footer class="bg-brand-dark pt-20 pb-8 px-4 sm:px-6 lg:px-8 text-gray-400 border-t-2 border-brand-accent relative overflow-hidden">
        <div class="absolute bottom-0 right-0 w-[30%] h-[30%] bg-[radial-gradient(circle,rgba(211,243,64,0.03),transparent_70%)]"></div>

        <div class="max-w-7xl mx-auto relative z-10">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <div class="space-y-6">
                    <a href="<?= $nav['home'] ?>" class="flex items-center gap-3">
                        <div class="bg-brand-accent text-brand-dark rounded-full p-2">
                            <i class="ph-fill ph-flask text-lg"></i>
                        </div>
                        <span class="text-lg font-black tracking-tight text-white uppercase">BIOSAF <span class="text-brand-accent font-light">ENTERPRISES</span></span>
                    </a>
                    <p class="text-sm leading-relaxed">
                        Delivering Safe Environments, Quality Systems, and Scientific Solutions for a Better Tomorrow. Your comprehensive enterprise partner since 2012.
                    </p>
                    <div class="flex gap-3">
                        <a href="#" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-accent hover:text-brand-dark transition-all duration-300" aria-label="Facebook"><i class="ph-fill ph-facebook-logo text-lg"></i></a>
                        <a href="#" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-accent hover:text-brand-dark transition-all duration-300" aria-label="Twitter"><i class="ph-fill ph-twitter-logo text-lg"></i></a>
                        <a href="#" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-accent hover:text-brand-dark transition-all duration-300" aria-label="Instagram"><i class="ph-fill ph-instagram-logo text-lg"></i></a>
                    </div>
                </div>

                <div>
                    <h4 class="text-white font-extrabold text-sm tracking-wider uppercase mb-6">Business Divisions</h4>
                    <ul class="space-y-3.5 text-sm">
                        <?php foreach ($divisions as $label => $href): ?>
                        <li><a href="<?= e($href) ?>" class="hover:text-brand-accent transition-colors"><?= e($label) ?></a></li>
                        <?php endforeach; ?>
                    </ul>
                </div>

                <div>
                    <h4 class="text-white font-extrabold text-sm tracking-wider uppercase mb-6">Corporate Hub</h4>
                    <ul class="space-y-3.5 text-sm">
                        <li><a href="<?= $nav['about'] ?>" class="hover:text-brand-accent transition-colors">About Our Vision</a></li>
                        <li><a href="<?= $nav['divisions'] ?>" class="hover:text-brand-accent transition-colors">Business Divisions</a></li>
                        <li><a href="<?= $nav['industries'] ?>" class="hover:text-brand-accent transition-colors">Industries We Serve</a></li>
                        <li><a href="<?= $nav['products'] ?>" class="hover:text-brand-accent transition-colors">Products Catalog</a></li>
                        <li><a href="<?= $nav['contact'] ?>" class="hover:text-brand-accent transition-colors">Request a Quote</a></li>
                    </ul>
                </div>

                <div class="space-y-4">
                    <h4 class="text-white font-extrabold text-sm tracking-wider uppercase mb-6">Corporate Newsletter</h4>
                    <p class="text-xs text-gray-500 leading-relaxed">Opt-in to receive system status, safety compliance updates, and new lab technology releases.</p>
                    <form class="space-y-3" action="#" method="post" onsubmit="event.preventDefault();">
                        <input type="email" name="newsletter_email" required placeholder="Enter professional email" class="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-brand-accent">
                        <label class="flex items-start gap-2.5 text-[11px] text-gray-500 cursor-pointer select-none">
                            <input type="checkbox" required class="mt-0.5 rounded bg-white/5 border-white/15 text-brand-accent focus:ring-brand-accent">
                            <span>I opt-in to receive BIOSAF Enterprises system updates.</span>
                        </label>
                        <button type="submit" class="w-full bg-white/10 hover:bg-brand-accent hover:text-brand-dark text-white font-bold py-3 rounded-xl transition-all text-xs tracking-wider uppercase">
                            Join Newsletter
                        </button>
                    </form>
                </div>
            </div>

            <div class="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                <p>&copy; <?= date('Y') ?> <?= e(SITE_NAME) ?>. All rights reserved.</p>
                <div class="flex items-center gap-6">
                    <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
                    <div class="flex items-center gap-1.5 text-brand-accent">
                        <span>ISO Compliant</span>
                        <i class="ph-fill ph-seal-check"></i>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <?php if ($testimonialsData !== null): ?>
    <script>window.BIOSAF_TESTIMONIALS = <?= json_encode($testimonialsData, JSON_UNESCAPED_UNICODE | JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT) ?>;</script>
    <script src="<?= asset('js/testimonials.js') ?>"></script>
    <?php endif; ?>

    <?php foreach ($pageScripts as $script): ?>
    <script src="<?= asset('js/pages/' . ltrim($script, '/')) ?>"></script>
    <?php endforeach; ?>

    <script src="<?= asset('js/core.js') ?>"></script>
</body>
</html>
