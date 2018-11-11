import Vue from 'vue'

// Content Types
import Page from '~/components/Page'
import HorizontalPage from '~/components/HorizontalPage'

// Blocks
import Intro from '~/components/Intro'
import Special from '~/components/Special'
import HomeProjects from '~/components/HomeProjects'
import HomePosts from '~/components/HomePosts'



/*
|==========================================================================
| Content Types
|==========================================================================
|
|*/
Vue.component('page', Page)
Vue.component('horizontal_page', HorizontalPage)



/*
|==========================================================================
| Blocks
|==========================================================================
|
|*/
Vue.component('home_intro', Intro)
Vue.component('home_special', Special)
Vue.component('home_projects', HomeProjects)
Vue.component('home_posts', HomePosts)



