    <?php 
    /*
        Template Name: Home
    */
    ?>
    <?php include('layout/head.php') ?>
<body>
    <?php include('layout/header.php') ?>
    <main class="main" role="main" itemscope itemprop="mainContentOfPage" data-router-wrapper>
        <section data-router-view="default" id="home">

            
        <h1 class="h1">main <strong>alta</strong>: h1 - 72px</h2>
        <h2 class="h2">main <strong>alta</strong>: h2 - 50px</h2>
        <h2 class="h2Plus">main <strong>alta</strong>: h2 - 48px</h2>
        <h3 class="h3">main <strong>alta</strong>: h3 - 40px</h3>
        <h4 class="h4">main <strong>alta</strong>: h4 - 37px</h4>

        <a href="https://google.com" class="primary-button filled aqua">
            <span>Conocé todos los productos</span>
            <svg viewBox="0 0 25.286 25.23">
                <g transform="translate(1.414 1.414)">
                    <path d="M5.338,32.9,27.8,10.5" transform="translate(-5.338 -10.5)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                    <path d="M10.5,10.5H22.365V22.365" transform="translate(0.093 -10.5)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </g>
            </svg>
        </a>

        <a href="https://google.com" class="primary-button solid aqua small">
            <span>Conocé todos los productos</span>
            <svg viewBox="0 0 25.286 25.23">
                <g transform="translate(1.414 1.414)">
                    <path d="M5.338,32.9,27.8,10.5" transform="translate(-5.338 -10.5)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                    <path d="M10.5,10.5H22.365V22.365" transform="translate(0.093 -10.5)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </g>
            </svg>
        </a>

        <h2 class="h2">¿Por qué lo usamos?</h2>
        <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).</p>


        <h2 class="h3">¿De dónde viene?</h2>
        <p class="small">Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras más oscuras de la lengua del latín, "consecteur", en un pasaje de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus Bonorum et Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una linea en la sección 1.10.32</p>

        <p>El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo para aquellos interesados. Las secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" por Cicero son también reproducidas en su forma original exacta, acompañadas por versiones en Inglés de la traducción realizada en 1914 por H. Rackham.</p>

        <h4 class="h4">¿Dónde puedo conseguirlo?</h4>
        <p>Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto. Todos los generadores de Lorem Ipsum que se encuentran en Internet tienden a repetir trozos predefinidos cuando sea necesario, haciendo a este el único generador verdadero (válido) en la Internet. Usa un diccionario de mas de 200 palabras provenientes del latín, combinadas con estructuras muy útiles de sentencias, para generar texto de Lorem Ipsum que parezca razonable. Este Lorem Ipsum generado siempre estará libre de repeticiones, humor agregado o palabras no características del lenguaje, etc.</p>

        </section>
    </main>
    <?php include('layout/footer.php') ?>

    <script type="text/javascript" src="<?=bloginfo('template_url')?>/dist/js/app.js?v=<?= date('s') ?>"></script>
</body>
</html>