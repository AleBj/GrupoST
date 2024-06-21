import Base from './Base'
import gsap from 'gsap'

import { evt, utils, store } from '@/core'

const { qs, qsa } = utils
const { dom, bounds, device } = store

import CardMobile from '../components/CardMobile'
import Grid from '../components/Grid'

export default class extends Base {
	onEnter() {
		super.onEnter()
	}

	onLeave() {
		super.onLeave()
	}

	onEnterCompleted() {
		super.onEnterCompleted()

		this._GetCategories()

		store.Highway.attach(qs('#js-grid'))

	}

	onLeaveCompleted() {
		super.onLeaveCompleted()
	}

	_fetchWP(cats){
		console.log('lang', document.getElementsByTagName('html')[0].getAttribute('lang'))
		const lang = document.getElementsByTagName('html')[0].getAttribute('lang')
		//http://localhost:8888/fraser //&lang=en
		let posts = new Array()
		fetch("https://frasertheagency.com/wp-json/wp/v2/posts?_embed&per_page=100")
		.then(res => res.ok ? res.json() : Promise.reject(res))
		.then(json =>{
			let allPost;
			if(lang == 'de'){
				allPost = json.filter(p => p.link.includes('/de/'))
			}else{
				allPost = json.filter(p => !p.link.includes('/de/'))
			}
			allPost.forEach(post => {
				console.log(post)
				let CatName = cats.filter(e => e.id == post.categories[0])
				let thumb =  (post._embedded['wp:featuredmedia'])? post._embedded['wp:featuredmedia'][0].source_url : '/share-image.jpg'
				let singlePost = { "id":post.id, "category":CatName[0]?.name || "", "title": post.title.rendered, "thumb_src": thumb,"link": post.link}
				posts.push(singlePost);
			});
			if(device.isMobile){
				new CardMobile(posts, document.getElementById( "js-grid"))
			}else{
				this.initGrid(posts)
			}
		})
	}

	async _GetCategories(){
		await fetch('https://frasertheagency.com/wp-json/wp/v2/categories')
		.then(res => res.ok ? res.json() : Promise.reject(res))
		.then(json =>{
			this._fetchWP(json);
		})
	}

	initGrid(posts){
		if(document.getElementById( "js-grid")){
			let grid = new Grid( document.getElementById( "js-grid"), posts );
			grid.init();
		}
	}
}