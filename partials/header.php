<!-- Navegação -->
<nav class="fixed top-0 w-full bg-gray-50/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300" id="navbar"
    role="navigation" aria-label="Menu principal">
    <div class="max-w-6xl mx-auto px-6 py-4">
        <div class="grid grid-cols-3 items-center">
            <div class="flex items-center">
                <h1 class="text-2xl font-bold text-blue-700">CorteAzulTea</h1>
            </div>

            <!-- Links -->
            <div class="flex justify-center">
                <div class="hidden md:flex items-center space-x-8">
                    <a href="#sobre" class="nav-link">Sobre</a>
                    <a href="#diferenciais" class="nav-link">Diferenciais</a>
                    <a href="#precos" class="nav-link">Preços</a>
                    <a href="#depoimentos" class="nav-link">Depoimentos</a>
                    <a href="#contato" class="nav-link">Contato</a>
                    <a href="https://www.instagram.com/corteazultea" target="_blank" rel="noopener"
                        aria-label="Instagram" class="ml-6 md:ml-10 inline-flex items-center space-x-2">
                        <span class="text-black">Instagram</span>
                        <img src="assets/img/instagram.svg" alt="Instagram" class="h-6 w-6" />
                    </a>
                </div>
            </div>

            <!--botão mobile (aparece apenas em telas pequenas) -->
            <div class="flex justify-end">
                <div class="md:hidden">
                    <button id="mobile-menu-btn" class="text-gray-600 hover:text-blue-600"
                        aria-label="Abrir menu de navegação" aria-controls="mobile-menu" aria-expanded="false">
                        <i class="fas fa-bars text-xl"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Menu Mobile -->
    <div id="mobile-menu" class="hidden md:hidden bg-gray-50 border-t">
        <div class="px-6 py-4 space-y-4">
            <a href="#sobre" class="block py-2 text-gray-600 hover:text-blue-600">Sobre</a>
            <a href="#diferenciais" class="block py-2 text-gray-600 hover:text-blue-600">Diferenciais</a>
            <a href="#precos" class="block py-2 text-gray-600 hover:text-blue-600">Preços</a>
            <a href="#depoimentos" class="block py-2 text-gray-600 hover:text-blue-600">Depoimentos</a>
            <a href="#contato" class="block py-2 text-gray-600 hover:text-blue-600">Contato</a>
            <a href="https://www.instagram.com/corteazultea" target="_blank" rel="noopener"
                class="block py-2 text-gray-600 hover:text-pink-600" aria-label="Instagram">
                <i class="fab fa-instagram"></i> Instagram
            </a>
        </div>
    </div>
</nav>