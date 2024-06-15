import Base from './Base';
import Swiper from 'swiper/swiper-bundle.min';
import 'swiper/swiper-bundle.min.css';
import { evt, utils, store } from '@/core';

const { qs, qsa } = utils;
const { dom, bounds } = store;

import { scrollAnim } from '@/components';
export default class extends Base {
  onEnter() {
    super.onEnter();
    const prevSlider = qs('.prevSlide');
    const nextSlider = qs('.nextSlide');

    const swiper = new Swiper('#hero-slider', {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 800,
      loop: true,
    });

    prevSlider &&
      prevSlider.addEventListener('click', () => {
        swiper.slidePrev();
      });
    nextSlider &&
      nextSlider.addEventListener('click', () => {
        swiper.slideNext();
      });
  }

  onLeave() {
    super.onLeave();
  }

  onEnterCompleted() {
    super.onEnterCompleted();
    const storiesImages = qsa('.grid-stories img');
    const nucleoImages = qsa('.nucleo_grid img');

    let circle = qs('.hero .textCircle');
    let h1 = qs('.hero h1').getBoundingClientRect();

    circle.style.top = h1.top - 60 + 'px';
    circle.style.left = h1.width - 200 + 'px';

    this._DetectImageOrientation(storiesImages);
    this._DetectImageOrientation(nucleoImages);

    this._GetPostMedium();
  }

  onLeaveCompleted() {
    super.onLeaveCompleted();
  }

  async _GetPostMedium() {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    await fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@frasertheagency'
    )
      .then((res) => res.json())
      .then((data) => {
        const news = data.items.slice(0, 3);
        let post = '';
        let nucleoGrid = qs('.nucleo_grid');
        news.forEach((e) => {
          let date = new Date(e.pubDate);
          post += `<div class=" nucleo_news">
				<figure class="nucleo_news--figure ">
					<div class="image ">
						${e.thumbnail && `<img src="${e.thumbnail}" alt="This is Nucleo">`}
					</div>
				</figure>
				<div class="nucleo_news--copy">
					<h5 class="">${
            months[date.getMonth()]
          } ${date.getDate()}, ${date.getFullYear()}.</h5>
					<h3 class="title title-t6 js-s-lines">${e.title}</h3>
					<a href="${e.link}" target="_blank" class="primary-button">
						<i>Read more</i>
						<span>
							<svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M7.64232 8.65642C7.25179 9.04694 6.61863 9.04694 6.2281 8.65642L0.74281 3.17112C0.352286 2.7806 0.352286 2.14744 0.74281 1.75691L1.79271 0.707015C2.18323 0.316491 2.8164 0.316491 3.20692 0.707015L8.69221 6.19231C9.08274 6.58283 9.08274 7.216 8.69221 7.60652L7.64232 8.65642Z" fill="#11CA83"/>
								<path d="M8.69222 6.19255C9.08274 6.58308 9.08274 7.21624 8.69222 7.60677L3.20692 13.0921C2.8164 13.4826 2.18323 13.4826 1.79271 13.0921L0.742812 12.0422C0.352288 11.6516 0.352289 11.0185 0.742812 10.6279L6.22811 5.14265C6.61863 4.75213 7.25179 4.75213 7.64232 5.14265L8.69222 6.19255Z" fill="#11CA83"/>
							</svg>
						</span>
					</a>
				</div>
				</div>`;
        });
        nucleoGrid.innerHTML = post;
      });
  }

  _DetectImageOrientation(imgs) {
    imgs.forEach((i) =>
      i.naturalWidth > i.naturalHeight
        ? i.classList.add('landscape')
        : i.classList.add('portrait')
    );
  }
}
