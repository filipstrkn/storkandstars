import Vue from 'vue'

// Content Types
import Page from '~/components/Page'
import HorizontalPage from '~/components/HorizontalPage'

// Blocks
import HorizontalContent from '~/components/HorizontalContent'
import Brick from '~/components/Brick'
import HeaderBlock from '~/components/HeaderBlock'



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
Vue.component('brick', Brick)
Vue.component('header_block', HeaderBlock)



