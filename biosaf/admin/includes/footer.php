<?php
declare(strict_types=1);
?>

        </main>

        <!-- Footer -->
        <footer class="px-6 py-4 border-t border-slate-200 bg-white">
            <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p class="text-sm text-slate-500">
                    &copy; <?= date('Y') ?> BIOSAF Enterprises. All rights reserved.
                </p>
                <p class="text-xs text-slate-400">
                    Version 1.0.0
                </p>
            </div>
        </footer>
    </div>

    <!-- Scripts -->
    <script>
        // Mobile Menu Toggle
        const sidebar = document.getElementById('sidebar');
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const sidebarOverlay = document.getElementById('sidebarOverlay');

        function toggleSidebar() {
            sidebar.classList.toggle('-translate-x-full');
            sidebarOverlay.classList.toggle('hidden');
        }

        mobileMenuBtn.addEventListener('click', toggleSidebar);
        sidebarOverlay.addEventListener('click', toggleSidebar);

        // Close sidebar on link click for mobile
        document.querySelectorAll('#sidebar nav a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 1024) {
                    toggleSidebar();
                }
            });
        });

        // Initialize sidebar position
        if (window.innerWidth < 1024) {
            sidebar.classList.add('-translate-x-full');
        }
    </script>
</body>
</html>
