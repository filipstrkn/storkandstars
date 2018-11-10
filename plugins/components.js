import Vue from 'vue'

// Content Types
import Page from '~/components/Page'
import HorizontalPage from '~/components/HorizontalPage'

// Blocks
import HorizontalContent from '~/components/HorizontalContent'
import Special from '~/components/Special'
import Thumb from '~/components/Thumb'
import Post from '~/components/Post'
import HeaderBlock from '~/components/HeaderBlock'
import Block from '~/components/Block'



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
Vue.component('horizontal_content', HorizontalContent)
Vue.component('special', Special)
Vue.component('thumb', Thumb)
Vue.component('post', Post)
Vue.component('header_block', HeaderBlock)
Vue.component('block', Block)



