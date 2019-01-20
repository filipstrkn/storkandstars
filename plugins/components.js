import Vue from 'vue'

// Content Types
import Page from '~/components/Page'
import ProjectPage from '~/components/ProjectPage'
import EventPage from '~/components/EventPage'
import Form from '~/components/Form'

// Form
import FormStep from '~/components/Form/_form/Step'

import ProjectGallery from '~/components/Project/ProjectGallery'
import ProjectImage from '~/components/Project/ProjectImage'
import ProjectIntro from '~/components/Project/ProjectIntro'
import ProjectNewspaper from '~/components/Project/ProjectNewspaper'
import ProjectNewspaperColumn from '~/components/Project/ProjectNewspaperColumn'
import ProjectParagraph from '~/components/Project/ProjectParagraph'
import ProjectPhotoBooth from '~/components/Project/ProjectPhotoBooth'
import NextProject from '~/components/Project/NextProject'


import Intro from '~/components/Home/Intro'
import TextBlock from '~/components/Home/TextBlock'
import Horizont from '~/components/Home/Horizont'
import ProjectUnit from '~/components/Projects/ProjectUnit'
import EventList from '~/components/Lists/EventList'
import Top from '~/components/Home/Top'
import Separator from '~/components/Home/_home/Separator'



// import FavoriteLink from '~/components/Draggable/_draggable/FavoriteLink'



/*
|==========================================================================
| Content Types
|==========================================================================
|
|*/
Vue.component('page', Page)
Vue.component('project_page', ProjectPage)
Vue.component('event_page', EventPage)
Vue.component('form_page', Form)



/*
|==========================================================================
| Blocks
|==========================================================================
|
|*/
Vue.component('form_step', FormStep)



/*
|==========================================================================
| Project Components
|==========================================================================
|
|*/
Vue.component('p_gallery', ProjectGallery)
Vue.component('p_photobooth', ProjectPhotoBooth)
Vue.component('p_image', ProjectImage)
Vue.component('p_intro', ProjectIntro)
Vue.component('p_newspaper', ProjectNewspaper)
Vue.component('p_newspaper_column', ProjectNewspaperColumn)
Vue.component('p_paragraph', ProjectParagraph)
Vue.component('next_project', NextProject)




/*
|==========================================================================
| Home Components
|==========================================================================
|
|*/
Vue.component('intro', Intro)
Vue.component('text_block', TextBlock)
Vue.component('projects', Top)
Vue.component('separator', Separator)


Vue.component('horizont', Horizont)
Vue.component('project_unit', ProjectUnit)



/*
|==========================================================================
| Lists
|==========================================================================
|
|*/
Vue.component('event_list', EventList)

