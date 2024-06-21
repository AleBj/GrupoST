    <?php 
    /*
        Template Name: Home
    */
    ?>
    <?php include('layout/head.php') ?>
<body>
    <?php include('layout/header.php') ?>
    <?php include('layout/nav.php') ?>
    <main class="main" role="main" itemscope itemprop="mainContentOfPage" data-router-wrapper>
        <section data-router-view="home" id="home">
        <h2 class="h2">main <strong>alta</strong></h2>
        <a href="" class="primaryButton">
            <span>Conocé todos los productos</span>
            <svg viewBox="0 0 25.286 25.23">
                <g transform="translate(1.414 1.414)">
                    <path d="M5.338,32.9,27.8,10.5" transform="translate(-5.338 -10.5)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                    <path d="M10.5,10.5H22.365V22.365" transform="translate(0.093 -10.5)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </g>
            </svg>
        </a>
        </section>
    </main>
    <?php include('layout/footer.php') ?>

    <script type="text/javascript" src="<?=bloginfo('template_url')?>/dist/js/app.js?v=3"></script>
</body>
</html>