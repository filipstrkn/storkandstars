import Vue from 'vue'

// Content Types
import HorizontalPage from '~/components/HorizontalPage'
import Page from '~/components/Page'
// import Home from '~/components/Page'

// Blocks
import Intro from '~/components/Intro'
import Special from '~/components/Special'
import TopProjects from '~/components/TopProjects'
import TopArticles from '~/components/TopArticles'
import Post from '~/components/Post'
import ContactForm from '~/components/ContactForm'
import Thumb from '~/components/Thumb'
// import FavoriteLink from '~/components/Draggable/_draggable/FavoriteLink'



/*
|==========================================================================
| Content Types
|==========================================================================
|
|*/
Vue.component('home_page', HorizontalPage)
Vue.component('project', Page)



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
Vue.component('article_unit', Post)
Vue.component('contact_form', ContactForm)
Vue.component('project_thumb', Thumb)
// Vue.component('favorite_link', FavoriteLink)



