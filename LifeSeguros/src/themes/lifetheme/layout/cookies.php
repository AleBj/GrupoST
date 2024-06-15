<div class="cookies">
    <span>This website uses <a href="<?= ( pll_current_language() == 'en' ) ? '/gpdr' : '/de/gpdr-deutch' ?>" target="_blank">cookies</a></span>
    <button class="primary-button" onclick="hideCookies(true)" style="margin-right: 20px">
        <i>Accept</i>
        <span>
            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.64232 8.65642C7.25179 9.04694 6.61863 9.04694 6.2281 8.65642L0.74281 3.17112C0.352286 2.7806 0.352286 2.14744 0.74281 1.75691L1.79271 0.707015C2.18323 0.316491 2.8164 0.316491 3.20692 0.707015L8.69221 6.19231C9.08274 6.58283 9.08274 7.216 8.69221 7.60652L7.64232 8.65642Z" fill="#11CA83"/>
                <path d="M8.69222 6.19255C9.08274 6.58308 9.08274 7.21624 8.69222 7.60677L3.20692 13.0921C2.8164 13.4826 2.18323 13.4826 1.79271 13.0921L0.742812 12.0422C0.352288 11.6516 0.352289 11.0185 0.742812 10.6279L6.22811 5.14265C6.61863 4.75213 7.25179 4.75213 7.64232 5.14265L8.69222 6.19255Z" fill="#11CA83"/>
            </svg>
        </span>
    </button>
    <button class="primary-button" onclick="hideCookies()">
        <i>Deny</i>
    </button>
</div>

<style>
    .cookies {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        padding: 10px 20px;
        border-radius: 100px;
        display: flex;
        align-items: baseline;
        z-index: 1000;
        width: max-content;
        backdrop-filter: blur(7.5px);
        background: hsla(0,0%,100%,.05);
        border: 1px solid rgba(17,202,131,.6);
        transition: all .5s;
        opacity: 0;
        pointer-events: none;
    }

    .cookies a {text-decoration: underline}

    .cookies.show {
        opacity: 1;
        bottom: 10px;
        pointer-events: auto;
    }

    .cookies > span {
        margin-right: 20px;
        font-family: Barlow Condensed,sans-serif;
    }

    .cookies i {
        margin-right: 5px;
    }
    .cookies .primary-button span {
        width: 25px;
        height: 25px;
    }
    .cookies .primary-button span svg {
        width: 7px;
    }

    .cookies button {outline: none !important;}
</style>

<script>
    const ls = localStorage.getItem('fraser_cookies_2');
    if(!ls){
        setTimeout(() => {
            document.querySelector('.cookies').classList.add('show');
        }, 1000);
    }

    function hideCookies(accept) {
        if(accept){
            gtag('consent', 'update', {
                analytics_storage: 'granted',
            });
        }
        localStorage.setItem('fraser_cookies_2', true)
        document.querySelector('.cookies').classList.remove('show');
    }
</script>