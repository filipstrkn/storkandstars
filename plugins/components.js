import Vue from 'vue'

// Content Types
import Page from '~/components/Page'
import Form from '~/components/Form'
import ContentBlock from '~/components/ContentBlock'
// import Home from '~/components/Page'

// Blocks
import Post from '~/components/Post'
import FooterBlock from '~/components/Home/Footer'

// Form
import FormStep from '~/components/Form/_form/Step'

// Project
import Thumb from '~/components/Thumb'

import ProjectGallery from '~/components/Project/ProjectGallery'
import ProjectImage from '~/components/Project/ProjectImage'
import ProjectIntro from '~/components/Project/ProjectIntro'
import ProjectNewspaper from '~/components/Project/ProjectNewspaper'
import ProjectNewspaperColumn from '~/components/Project/ProjectNewspaperColumn'
import ProjectParagraph from '~/components/Project/ProjectParagraph'


import Intro from '~/components/Home/Intro'
import TextBlock from '~/components/Home/TextBlock'
import Horizont from '~/components/Home/Horizont'
import ProjectUnit from '~/components/Projects/ProjectUnit'
import WorkshopCalendar from '~/components/Home/WorkshopCalendar'



// import FavoriteLink from '~/components/Draggable/_draggable/FavoriteLink'



/*
|==========================================================================
| Content Types
|==========================================================================
|
|*/
Vue.component('page', Page)
Vue.component('form_page', Form)
Vue.component('content_block', ContentBlock)



/*
|==========================================================================
| Blocks
|==========================================================================
|
|*/
Vue.component('form_step', FormStep)
Vue.component('project_thumb', Thumb)
Vue.component('footer_block', FooterBlock)



/*
|==========================================================================
| Project Components
|==========================================================================
|
|*/
Vue.component('p_gallery', ProjectGallery)
Vue.component('p_image', ProjectImage)
Vue.component('p_intro', ProjectIntro)
Vue.component('p_newspaper', ProjectNewspaper)
Vue.component('p_newspaper_column', ProjectNewspaperColumn)
Vue.component('p_paragraph', ProjectParagraph)




/*
|==========================================================================
| Home Components
|==========================================================================
|
|*/
Vue.component('intro', Intro)
Vue.component('text_block', TextBlock)

Vue.component('calendar', WorkshopCalendar)
Vue.component('horizont', Horizont)
Vue.component('project_unit', ProjectUnit)

