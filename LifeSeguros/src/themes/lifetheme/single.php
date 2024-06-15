    <?php 
    /*
        Template Name: Jobs
    */
    ?>
    <?php 
        $globalDigital = get_field('global_digital');
        
        $metatitle = get_the_title();
        $metadescription = $globalDigital['title_global'];
    ?>
    <?php include('layout/head.php') ?>
<body>
    <?php include('layout/cursor.php') ?>
    <?php include('layout/header.php') ?>
    <?php include('layout/nav.php') ?>
    <?php include('layout/dna.php') ?>
    <main class="main" role="main" itemscope itemprop="mainContentOfPage" data-router-wrapper>
        <section data-router-view="detail" class="detail" id="detail">

            <article class="container hero">
                <h1 class="title title-t2 bar js-s-fade">
                    <?php the_title(); ?>
                </h1>
            </article>

            <figure class="container-full js-s-mask">
                <?php $imgHero = get_field('hero_image'); ?>
                <img class="js-s-mask-hero-scale" src="<?= $imgHero['url'] ?>" alt="<?php the_title(); ?>" >
            </figure>
            
            <article class="container step-one">
                <?php
                if( $globalDigital ):
                    $labelGlobal = $globalDigital['label_global'];
                    $titleGlobal = $globalDigital['title_global'];
                    $textGlobal = $globalDigital['paragraph_global'];
                ?>
                    <label class="label"><?= $labelGlobal; ?></label>
                    <h2 class="title title-t4 js-s-lines"><?= $titleGlobal; ?></h2>
                    <p class="js-s-fade paragraph"><?= $textGlobal; ?></p>
                
                <?php endif; ?>
            </article>

            <?php

            // Check value exists.
            if( have_rows('flexible_blocks') ):

                // Loop through rows.
                while ( have_rows('flexible_blocks') ) : the_row();

                    // Case: image_floating layout.
                    if( get_row_layout() == 'floating_images' ):
                        $images = get_sub_field('image_floating');
                    ?>

                    <article class="container-full images-project">
                        <?php 
                        $smooth = 20;
                        foreach ($images as $img):
                            if($img['video']):
                        ?>
                        <div style="overflow:hidden"  class="video-module js-s-image-reveal">
                            <div style="overflow:hidden"  class="full-detail imageClip js-image-mask">
                                <video controls scrolling="no" style="overflow:hidden" src="<?= $img['video']['url'] ?>" autoplay loop muted playsinline class="w-full h-full js-image-mask" data-speed="<?=$smooth?>">
                                    <p>Su navegador no soporta vídeos HTML5.</p>
                                </video>
                            </div>
                        </div>
                            <?php else: ?>
                        <div class="detail-images_single js-s-image-reveal">
                            <div class="full-detail imageClip js-image-mask">
                                <img src="<?= $img['image']['url'] ?>" alt="<?php the_title(); ?>" class="full-detail js-image-scale" data-speed="<?=$smooth?>">
                            </div>
                        </div>
                        <?php
                            endif;
                            $smooth += 16;
                        endforeach;
                        ?>
                    </article>

                    <?php
                    // Case: Download layout.
                    elseif( get_row_layout() == 'marquee' ): 
                        $firstLine = get_sub_field('first_line_text');
                        $secondLine = get_sub_field('second_line_text');
                    ?>
                    <div class="container work">   
                        <label class="label">
                        <?php if( pll_current_language() == 'en' ): ?>
                            WORK
                        <?php else: ?>
                            UMSETZUNGEN
                        <?php endif; ?>
                        </label>
                    </div>

                    <div class="marquee" data-direction="left">
                        <?php
                            for($i = 0; $i < 5;$i++):?>
                                <p> <?= $firstLine ?> </p>
                        <?php
                            endfor;
                        ?>
                        
                    </div>

                    <div class="marquee" data-direction="right">
                        <?php
                            for($i = 0; $i < 5;$i++):?>
                                <p> <?= $secondLine ?> </p>
                        <?php
                            endfor;
                        ?>
                    </div>
                    <?php
                    elseif( get_row_layout() == 'what_we_did' ): 
                        $titleWwd = get_sub_field('title_wwd');
                        $imageWwd = get_sub_field('image_wwd');
                        $videoWwd = get_sub_field('video_wwd');
                    ?>
                    <article class="container what-we-did">
                            <label class="label">
                                <?php if( pll_current_language() == 'en' ): ?>
                                    WHAT WE DID
                                <?php else: ?>
                                    DAS HABEN WIR GETAN
                                <?php endif; ?>
                            </label>
                            <h3 class="title title-t5"><?= $titleWwd ?></h3>

                            <?php
                            if($videoWwd):?>

                            <div class="video-module js-s-image-reveal">
                                <div class="full-detail imageClip js-image-mask">
                                    <video controls src="<?= $videoWwd['url'] ?>" autoplay loop muted playsinline class="full-detail js-image-scale what-we-did__image">
                                        <p>Su navegador no soporta vídeos HTML5.</p>
                                    </video>
                                </div>
                            </div>

                            <?php elseif($imageWwd): ?>
                                <div class="video-module js-s-image-reveal">
                                    <div class="full-detail imageClip js-image-mask">
                                        <figure class="what-we-did__image">
                                            <img class="full-detail js-image-scale" src="<?= $imageWwd['url'] ?>" alt="WHAT WE DID">
                                        </figure>
                                    </div>
                                </div>
                            <?php endif; ?>
                    
                    </article>
                    <?php
                    elseif( get_row_layout() == 'result' ): 
                        $textResult = get_sub_field('text_result');
                        $labelPercentsResult = get_sub_field('label_percents_result');
                        $percentsResult = get_sub_field('percent_result');
                    ?>
                    <article class="result container">
                        
                        <div class="content-bar">
                            <img class="graphic__result" src="<?php bloginfo('template_url'); ?>/assets/images/FRASER_website_Results_Graphic.svg" alt="FRASER website Results Graphic">
                        </div>

                        <div class="result-text">
                            <label class="label">
                                <?php if( pll_current_language() == 'en' ): ?>
                                    RESULTS
                                <?php else: ?>
                                    ERGEBNISSE
                                <?php endif; ?>
                            </label>
                            <h3 class="title title-t5"><?= $textResult ?></h3>
                        </div>

                    </article>
                    <?php
                    elseif( get_row_layout() == 'press' ): 
                        $titlePress = get_sub_field('title_press');
                        $textPress = get_sub_field('text_press');
                        $images = get_sub_field('images_press');
                    ?>
                    <article class="container press">
                            <label class="label">
                                <?php if( pll_current_language() == 'en' ): ?>
                                    Press
                                <?php else: ?>
                                    Presse
                                <?php endif; ?>
                            </label>
                            <h3 class="title title-t5"><?= $titlePress ?></h3>
                            <p class="paragraph"><?= $textPress ?></p>
                            <div class="grid-logos">
                                <?php if(isset($images) && $images != ''): 
                                    foreach ($images as $img):?>

                                    <figure class="logo">
                                        <a <?php if($img['link_ip']){ echo 'href="'.$img['link_ip'].'"';}?> target="_blank">
                                            <?php if($img['image_ip']): ?>
                                                <img src="<?= $img['image_ip']['url'] ?>" alt="<?= $img['name_ip']?>">
                                            <?php else: ?>
                                                <h5><?= $img['name_ip']?></h5>
                                            <?php endif; ?>
                                        </a>
                                    </figure>                                
                                <?php endforeach;
                                 endif; ?>
                            </div>
                    </article>
                    <?php
                    elseif( get_row_layout() == 'carousel' ): 
                        $imagesCarousel = get_sub_field('images_carousel');
                    ?>
                    <article class="carousel-detail">
                        <?php if(count($img) > 1){ ?>
                            <label class="swipe-to-more js-s-fade">
                                <?php if( pll_current_language() == 'en' ): ?>
                                    Swipe to see more
                                <?php else: ?>
                                    Swipe, um mehr zu sehen
                                <?php endif; ?>
                            </label>
                        <?php } ?>
                        <div class="embla">
                            <div class="embla__container">
                            
                                <?php 
                                    foreach ($imagesCarousel as $img):
                                        if($img["image_car"]):
                                    ?>
                                    <div class="embla__slide">
                                        <div class="video-module js-s-image-reveal">
                                            <div class="full-detail imageClip js-image-mask">
                                                <div class="js-image-scale">
                                                    <img src="<?= $img["image_car"]['url'] ?>" alt="<?php the_title(); ?>">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <?php else:?>
                                        <div class="embla__slide">
                                            <div class="video-module js-s-image-reveal">
                                                <div class="full-detail imageClip js-image-mask">
                                                    <div class="js-image-scale">
                                                        <video controls scrolling="no" style="overflow:hidden" src="<?= $img["video_car"]['url'] ?>" autoplay loop muted playsinline>
                                                            <p>Su navegador no soporta vídeos HTML5.</p>
                                                        </video>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    <?php
                                        endif;
                                    endforeach; 
                                ?>
                            </div>
                        </div>
                    </article>
                    <?php
                    elseif( get_row_layout() == 'next_project' ): 
                        $NextProject = get_sub_field('project_next');
                        //var_dump($NextProject[0]);
                        $post_thumbnail_id = get_post_thumbnail_id( $NextProject[0]->ID );
                        $thumbnail_url = wp_get_attachment_image_url( $post_thumbnail_id, 'large' );
                    ?>
                    <div class="gradient-fade">
                        <article class="next-project">
                            <div class="next-project__content">
                                <label class="label">
                                    <?php if( pll_current_language() == 'en' ): ?>
                                        Next project
                                    <?php else: ?>
                                        NÄCHSTES PROJEKT
                                    <?php endif; ?>
                                </label>
                                <h2 class="title title-t2"><a href="<?= get_permalink($NextProject[0]->ID) ?>"><?= $NextProject[0]->post_title ?></a></h2>
                            </div>
                            <figure class="js-np-item-y next-project__image">
                                <img src="<?= $thumbnail_url ?>" alt="<?= $NextProject[0]->post_title ?>">
                            </figure>
                        </article>
                    </div>

                    <?php
                    elseif( get_row_layout() == 'vimeo_code' ): 
                        $code = get_sub_field('code');
                    ?>
                    <article class="container vimeo_content js-s-image-reveal">
                        <div class="full-detail imageClip js-image-mask">
                            <iframe controls scrolling="no" style="overflow:hidden"  class="full-detail js-image-scale" src="https://player.vimeo.com/video/<?=$code?>?autoplay=1&loop=1&autopause=0&muted=1" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                        </div>
                    </article>
                    <?php
                    endif;

                // End loop.
                endwhile;

            endif;
            ?>
            
            <?php include('layout/footer.php') ?>
        </section>
    </main>

    <script type="text/javascript" src="<?php bloginfo('template_url'); ?>/dist/js/app.js?v=1"></script>
</body>
</html>