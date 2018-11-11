import Vue from 'vue'

// Content Types
import Page from '~/components/Page'

// Blocks
import Intro from '~/components/Intro'
import Special from '~/components/Special'
import TopProjects from '~/components/TopProjects'
import TopArticles from '~/components/TopArticles'



/*
|==========================================================================
| Content Types
|==========================================================================
|
|*/
Vue.component('home_page', Page)
Vue.component('product_page', Page)
Vue.component('listing_page', Page)



/*
|==========================================================================
| Blocks
|==========================================================================
|
|*/
Vue.component('intro', Intro)
Vue.component('special', Special)
Vue.component('top_projects', TopProjects)
Vue.component('top_articles', TopArticles)



