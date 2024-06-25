    <?php 
    /*
        Template Name: Contact
    */
    ?>
    
    <?php include('layout/head.php') ?>
<body>
    <?php include('layout/header.php') ?>
    <main class="main" role="main" itemscope itemprop="mainContentOfPage" data-router-wrapper>
        <section data-router-view="contact" id="contact">
        <h2 class="h2">main <strong>Contact</strong></h2>
        </section>
    </main>
    <?php include('layout/footer.php') ?>

    <script type="text/javascript" src="<?=bloginfo('template_url')?>/dist/js/app.js?v=1"></script>
</body>
</html>