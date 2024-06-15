    <?php 
    /*
        Template Name: Thankyou
    */
    ?>
    <?php 
        $metatitle = get_the_title();
        $metadescription = "We'll get back to you as soon as possible.";
    ?>
    <?php include('layout/head.php') ?>
<body>
    <?php include('layout/cursor.php') ?>
    <?php include('layout/header.php') ?>
    <?php include('layout/nav.php') ?>
    <?php include('layout/dna.php') ?>
    <main class="main" role="main" itemscope itemprop="mainContentOfPage" data-router-wrapper>
        <section data-router-view="contact" class="contact" style="overflow-x:hidden;" id="contact">
            <article class="container hero flexblock">
                <div class="flexblock hero__left" style="width: 100%;">
                    <div class="col" style="width: 100%">
                        <label class="label js-s-fade"><?= pll__( 'GET') ?> <?= pll__( 'in') ?> <?= pll__( 'TOUCH') ?></label>
                        <h1 class="title title-t4 js-s-fade">
                        
                        <?php if( pll_current_language() == 'en' ) : ?>

                            Thank you for contacting us

                        <?php else: ?>

                            Danke, dass Sie uns kontaktiert haben

                        <?php endif; ?>
                        </h1>
                        <?php if( pll_current_language() == 'en' ) : ?>

                            <p class="js-s-fade">We'll get back to you as soon as possible.</p>

                        <?php else: ?>

                            <p class="js-s-fade">Wir werden uns so schnell wie möglich bei Ihnen melden.</p>

                        <?php endif; ?>
                    </div>

                    <div class="col rrss js-s-fade">
                        <label class="label"><?= pll__( 'Follow Us') ?></label>
                        <div class="contact_rrss">
                            <a href="https://vimeo.com/frasertheagency/" target="_blank" class="icon_rrss">
                                <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.7116 3.39997C16.6402 4.93278 15.5545 7.03161 13.4473 9.69645C11.2723 12.4808 9.43303 13.873 7.92589 13.873C6.99375 13.873 6.20446 13.0258 5.55804 11.3312C4.30089 6.78903 3.76518 4.1277 2.72589 4.1277C2.60446 4.1277 2.18661 4.37731 1.46875 4.8695L0.71875 3.91325C2.56161 2.32067 4.32232 0.548798 5.42589 0.45036C6.67232 0.330829 7.43661 1.17106 7.72589 2.96403C8.75089 9.34489 9.20446 10.3082 11.0687 7.41833C11.7366 6.3777 12.0973 5.58669 12.1473 5.04177C12.3187 3.42809 10.8687 3.53708 9.88661 3.95192C10.6723 1.41716 12.1759 0.186688 14.3937 0.257001C16.0295 0.299188 16.8045 1.35036 16.7116 3.39997Z" fill="currentColor"/>
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/FraserTheAgency/" target="_blank" class="icon_rrss">
                                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.99146 8.9375L8.39139 6.22285H5.8908V4.46123C5.8908 3.71855 6.24011 2.99463 7.36005 2.99463H8.49686V0.683398C8.49686 0.683398 7.46524 0.5 6.47889 0.5C4.41958 0.5 3.07352 1.8002 3.07352 4.15391V6.22285H0.784424V8.9375H3.07352V15.5H5.8908V8.9375H7.99146Z" fill="currentColor"/>
                                </svg>
                            </a>
                            <a href="https://twitter.com/frasertheagency/" target="_blank" class="icon_rrss">
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.6842 3.02105C13.6935 3.15096 13.6935 3.2809 13.6935 3.41082C13.6935 7.37329 10.6776 11.939 5.16531 11.939C3.46709 11.939 1.88952 11.4471 0.5625 10.5934C0.803785 10.6213 1.03576 10.6305 1.28633 10.6305C2.68756 10.6305 3.97748 10.1573 5.00755 9.34993C3.68981 9.32208 2.5855 8.45906 2.20502 7.27123C2.39063 7.29905 2.57622 7.31762 2.77111 7.31762C3.04022 7.31762 3.30935 7.28049 3.55989 7.21556C2.18648 6.93714 1.15639 5.73077 1.15639 4.27384V4.23673C1.5554 4.45945 2.01944 4.59865 2.51123 4.61718C1.70388 4.07894 1.17495 3.16025 1.17495 2.1209C1.17495 1.56412 1.3234 1.05372 1.58325 0.608288C3.05876 2.42714 5.27665 3.61494 7.76363 3.74488C7.71724 3.52216 7.68939 3.29019 7.68939 3.05819C7.68939 1.40635 9.02569 0.060791 10.6868 0.060791C11.5498 0.060791 12.3293 0.422704 12.8768 1.00734C13.5542 0.877424 14.2038 0.626855 14.7792 0.283509C14.5565 0.979513 14.0832 1.56414 13.4615 1.93531C14.0647 1.87039 14.6493 1.70331 15.1875 1.47134C14.7793 2.06522 14.2688 2.59415 13.6842 3.02105Z" fill="currentColor"/>
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/frasertheagency/" target="_blank" class="icon_rrss">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.92351 4.21518C5.84844 4.21518 4.17468 5.90504 4.17468 8.00006C4.17468 10.0951 5.84844 11.7849 7.92351 11.7849C9.99858 11.7849 11.6723 10.0951 11.6723 8.00006C11.6723 5.90504 9.99858 4.21518 7.92351 4.21518ZM7.92351 10.4607C6.58254 10.4607 5.48628 9.35721 5.48628 8.00006C5.48628 6.64291 6.57928 5.5394 7.92351 5.5394C9.26773 5.5394 10.3607 6.64291 10.3607 8.00006C10.3607 9.35721 9.26447 10.4607 7.92351 10.4607ZM12.7001 4.06036C12.7001 4.55118 12.3086 4.94317 11.8257 4.94317C11.3395 4.94317 10.9513 4.54788 10.9513 4.06036C10.9513 3.57284 11.3428 3.17756 11.8257 3.17756C12.3086 3.17756 12.7001 3.57284 12.7001 4.06036ZM15.183 4.95635C15.1275 3.77378 14.86 2.72627 14.0019 1.86323C13.1471 1.00018 12.1095 0.730071 10.9382 0.670778C9.73104 0.601603 6.11271 0.601603 4.90552 0.670778C3.73748 0.726777 2.69994 0.99689 1.84186 1.85993C0.983768 2.72298 0.719491 3.77049 0.660762 4.95305C0.592246 6.17186 0.592246 9.82497 0.660762 11.0438C0.716228 12.2263 0.983768 13.2738 1.84186 14.1369C2.69994 14.9999 3.73421 15.27 4.90552 15.3293C6.11271 15.3985 9.73104 15.3985 10.9382 15.3293C12.1095 15.2733 13.1471 15.0032 14.0019 14.1369C14.8567 13.2738 15.1243 12.2263 15.183 11.0438C15.2515 9.82497 15.2515 6.17515 15.183 4.95635ZM13.6234 12.3515C13.3689 12.9971 12.8763 13.4945 12.2335 13.7548C11.271 14.1402 8.98714 14.0512 7.92351 14.0512C6.85987 14.0512 4.57273 14.1369 3.61349 13.7548C2.97401 13.4978 2.48134 13.0004 2.22359 12.3515C1.84186 11.3798 1.92995 9.07392 1.92995 8.00006C1.92995 6.9262 1.84512 4.61706 2.22359 3.64861C2.47808 3.00297 2.97075 2.50557 3.61349 2.24534C4.57599 1.85993 6.85987 1.94887 7.92351 1.94887C8.98714 1.94887 11.2743 1.86323 12.2335 2.24534C12.873 2.50227 13.3657 2.99968 13.6234 3.64861C14.0052 4.62035 13.9171 6.9262 13.9171 8.00006C13.9171 9.07392 14.0052 11.3831 13.6234 12.3515Z" fill="currentColor"/>
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/company/frasertheagency/" target="_blank" class="icon_rrss">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.9299 15.3827H0.897824V5.52469H3.9299V15.3827ZM2.41223 4.17997C1.44267 4.17997 0.65625 3.36918 0.65625 2.3903C0.65625 1.9201 0.841254 1.46917 1.17056 1.13669C1.49987 0.804215 1.94651 0.617432 2.41223 0.617432C2.87794 0.617432 3.32458 0.804215 3.65389 1.13669C3.9832 1.46917 4.16821 1.9201 4.16821 2.3903C4.16821 3.36918 3.38146 4.17997 2.41223 4.17997ZM15.278 15.3827H12.2524V10.5839C12.2524 9.44022 12.2296 7.97355 10.676 7.97355C9.09958 7.97355 8.858 9.2161 8.858 10.5015V15.3827H5.82919V5.52469H8.73722V6.86942H8.77965C9.18445 6.09489 10.1733 5.2775 11.6485 5.2775C14.7171 5.2775 15.2812 7.31766 15.2812 9.96757V15.3827H15.278Z" fill="currentColor"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </article>            
            
            <article class="container our-offices">
                <label class="label"> <?= (pll_current_language() == 'en') ? 'OUR OFFICES' : 'UNSERE BÜROS';?> </label>
                <div class="offices-of">
                    <div style="margin-bottom: 30px; width: 45%;" class="offices-of-wrap js-s-fade">
                        <h2 class="title title-t5" style="display: block; margin-bottom: 15px"><?= pll__( 'Berlin' ) ?></h2>
                        <p class="paragraph" style="font-size:1.8rem !important; display: block; margin: 0px !important; width: 80%;"><?= pll__( 'FRASER GmbH, Immanuelkirchstraße 26, 10405 Berlin' ); ?></p>
                    </div>
                    <div style="margin-bottom: 30px; width: 45%;" class="offices-of-wrap js-s-fade">
                        <h2 class="title title-t5" style="display: block; margin-bottom: 15px"><?= pll__( 'Zurich' ) ?></h2>
                        <p class="paragraph" style="font-size:1.8rem !important; display: block; margin: 0px !important; width: 80%;"><?= pll__( 'FRASER of Switzerland GmbH, Beethovenstrasse 48, 8002 Zürich' ); ?></p>
                    </div>
                    <div style="margin-bottom: 30px; width: 45%;" class="offices-of-wrap js-s-fade">
                        <h2 class="title title-t5" style="display: block; margin-bottom: 15px"><?= pll__( 'Cape Town' ) ?></h2>
                        <p class="paragraph" style="font-size:1.8rem !important; display: block; margin: 0px !important; width: 80%;"><?= pll__( 'FRASER of South Africa, Roamwork, 2nd floor, 50 Harrington St, District Six, Cape Town, 7925' ); ?></p>
                    </div>
                </div>
            </article>

            <?php include('layout/footer.php') ?>
        </section>
    </main>

    <script type="text/javascript" src="<?php bloginfo('template_url'); ?>/dist/js/app.js?v=1"></script>
</body>
</html>
