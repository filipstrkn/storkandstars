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
import ProjectNewspaper from '~/components/Project/ProjectNewspaper'
import ProjectNewspaperColumn from '~/components/Project/ProjectNewspaperColumn'
import ProjectParagraph from '~/components/Project/ProjectParagraph'
import ProjectPhotoBooth from '~/components/Project/ProjectPhotoBooth'


import IntroHome from '~/components/Intro/IntroHome'
import IntroLeft from '~/components/Intro/IntroLeft'
import IntroColumn from '~/components/Intro/IntroColumn'


// import StepBlock from '~/components/StepBlock'
import StepBlock from '~/components/Steps/StepBlock'

import TextBlock from '~/components/Home/TextBlock'
import Horizont from '~/components/Home/Horizont'
import ProjectUnit from '~/components/Projects/ProjectUnit'
import EventList from '~/components/Lists/EventList'
import Top from '~/components/Home/Top'
import Separator from '~/components/Home/_home/Separator'
import UpperFooter from '~/components/Home/UpperFooter'


import ColorBox from '~/components/ColorBox'



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
Vue.component('p_newspaper', ProjectNewspaper)
Vue.component('p_newspaper_column', ProjectNewspaperColumn)
Vue.component('p_paragraph', ProjectParagraph)




/*
|==========================================================================
| Home Components
|==========================================================================
|
|*/
Vue.component('intro', IntroHome)
Vue.component('intro_left', IntroLeft)
Vue.component('intro_column', IntroColumn)
Vue.component('text_block', TextBlock)
Vue.component('projects', Top)
Vue.component('separator', Separator)
Vue.component('step_block', StepBlock)
Vue.component('color_box', ColorBox)



Vue.component('horizont', Horizont)
Vue.component('project_unit', ProjectUnit)
Vue.component('upperfooter', UpperFooter)



/*
|==========================================================================
| Lists
|==========================================================================
|
|*/
Vue.component('event_list', EventList)

