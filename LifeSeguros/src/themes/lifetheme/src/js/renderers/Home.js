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
    console.log('entra')
  }

  onLeave() {
    super.onLeave();
  }

  onEnterCompleted() {
    super.onEnterCompleted();
    console.log('entra 2')
  }

  onLeaveCompleted() {
    super.onLeaveCompleted();
  }

}
