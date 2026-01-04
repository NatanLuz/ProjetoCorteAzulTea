<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <?php include __DIR__ . '/../partials/head.php'; ?>
    <?php ?>
</head>

<body class="font-sans bg-gray-50 text-black scroll-smooth">
    <a href="#conteudo" class="skip-link">Pular para o conteúdo principal</a>
    <?php include __DIR__ . '/../partials/header.php'; ?>
    <main id="conteudo">
        <?php 
include __DIR__ . '/../sections/hero.php';
include __DIR__ . '/../sections/sobre.php';
include __DIR__ . '/../sections/diferenciais.php';
include __DIR__ . '/../sections/precos.php';
include __DIR__ . '/../sections/video_atendimento.php';
include __DIR__ . '/../sections/video_atendimento_podcast.php';
include __DIR__ . '/../sections/noticias.php';
include __DIR__ . '/../sections/depoimentos.php';
include __DIR__ . '/../sections/reportagem.php';
include __DIR__ . '/../sections/contato.php';
?>
    </main>
    <?php include __DIR__ . '/../partials/footer.php'; ?>
    <script src="assets/js/script.js" defer></script>
    <script src="assets/js/depoimentos.js" defer></script>
</body>

</html>