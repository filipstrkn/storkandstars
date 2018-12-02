import Vue from 'vue'

// Content Types
import HorizontalPage from '~/components/HorizontalPage'
import Page from '~/components/Page'
import Form from '~/components/Form'
// import Home from '~/components/Page'

// Blocks
import Intro from '~/components/Intro'
import Special from '~/components/Special'
import TopProjects from '~/components/TopProjects'
import TopArticles from '~/components/TopArticles'
import Post from '~/components/Post'

// Form
// import NewProjectForm from '~/components/Form/NewProjectForm'
import FormStep from '~/components/Form/_form/Step'

// Project
import Thumb from '~/components/Thumb'

import ProjectGallery from '~/components/Project/ProjectGallery'
import ProjectImage from '~/components/Project/ProjectImage'
import ProjectIntro from '~/components/Project/ProjectIntro'
import ProjectNewspaper from '~/components/Project/ProjectNewspaper'
import ProjectNewspaperColumn from '~/components/Project/ProjectNewspaperColumn'
import ProjectParagraph from '~/components/Project/ProjectParagraph'



// import FavoriteLink from '~/components/Draggable/_draggable/FavoriteLink'



/*
|==========================================================================
| Content Types
|==========================================================================
|
|*/
Vue.component('home_page', HorizontalPage)
Vue.component('project_page', Page)
Vue.component('form_page', Form)



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
// Vue.component('contact_form', ContactForm)
Vue.component('form_step', FormStep)
// Vue.component('form_new_project', NewProjectForm)
Vue.component('project_thumb', Thumb)
// Vue.component('favorite_link', FavoriteLink)



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



