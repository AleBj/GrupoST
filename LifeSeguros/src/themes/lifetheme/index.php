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
        </section>
    </main>
    <?php include('layout/footer.php') ?>

    <script type="text/javascript" src="./dist/js/app.js?v=1"></script>
</body>
</html>