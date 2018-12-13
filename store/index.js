import fetch from 'node-fetch'
import { Store } from 'vuex'
import { GLOBALS } from '~/config/globals'
import Scrollbar from 'smooth-scrollbar'

/*
|==============================================================================
| Store
|==============================================================================
|
| Vuex store
| ---
| Exporting a function that creates a new Vuex instance
| is a Nuxt way of doing things
|
|*/
/**
 * @description Stork&Stars application store
 * store
 */

export default function createStore() {



    return new Store(
        {



            // ----------------------------------------------------------------
            // States
            // ----------------------------------------------------------------
            state: {
                mode: true,
                // cache: {},
                forms: {},
                // contactForm: {
                //     // total: 0,
                //     // current: {},
                //     // values: [],
                //     // status: null,
                //     steps: 0,
                //     step: 0,
                //     body: {
                //         user: null,
                //         message: null
                //     },
                //     status: null,
                //     stages: {
                //         PROCESSING: 'processing',
                //         SUCCESS: 'success',
                //         FAIL: 'fail'
                //     }
                // },
                scroll: {},
                scrolls: {
                    progress: 0,
                    walking: false,
                    scrollPosition: 0,
                    history: {},
                    current: {
                        isDown: false,
                        startX: null,
                        scrollLeft: null
                    }
                },
                follower: {
                    position: {
                        top: 0,
                        left: 0
                    },
                    clickable: false
                },
                process: 0,
                sidelink: null
            },




            // ================================================================
            // Mutations
            // ================================================================
            mutations: {



                // ------------------------------------------------------------
                //  Top Project
                // ------------------------------------------------------------
                setTopProjects(state, payload) {
                    state.top = payload
                },


                // ------------------------------------------------------------
                //  Updating Contact Form
                // ------------------------------------------------------------
                updateMessage(state, payload) {
                    state.contactForm.body.message = payload
                },
                updateUser(state, payload) {
                    state.contactForm.body.user = payload
                },
                updateStatus(state, payload) {
                    state.contactForm.status = payload
                },
                setFormVisibility(state, payload) {
                    state.contactForm.visible = payload
                },

                setWalk(state, payload) {
                    state.scrolls = {
                        ...state.scrolls,
                        ...payload
                    }
                },

                // resetProgress(state, payload) {
                //     state.scrolls.progress = payload
                // },
                setProgress(state, payload) {
                    state.scrolls.progress = payload
                },


                setFollower(state, payload) {
                    state.follower = payload
                },



                setMode(state, mode) {
                    // console.log('Setting mode')
                    state.mode = mode
                },

                nextStep(state, form) {
                    state.forms[form].current++
                    console.log('STEPING')
                },
                previousStep(state, form) {
                    state.forms[form].current--
                },
                saveStep(state, { form, name, value }) {
                    state.forms[form].values[name] = value
                },



                // ------------------------------------------------------------
                //  Scrollbar
                // ------------------------------------------------------------
                setScrollbar(state, el) {
                    state.scroll = Scrollbar.init(el)
                }



            },






            // ================================================================
            // Actions
            // ================================================================
            actions: {


                // ------------------------------------------------------------
                //  Fetching Top Projects
                // ------------------------------------------------------------
                // async loadTop({ commit, ctx }) {
                //     await this.$storyapi.get(`cdn/stories`,
                //     {
                //         version: 'draft',
                //         starts_with: 'projects/',
                //         with_tag: 'top'
                //     })
                //     .then(res => {
                //         const topThree = res.data.stories.splice(0, 3)
                //         commit('setTopProjects', topThree)
                //     })
                // }



                submitForm({ commit }, { action, form }) {
                    switch (action) {
                        case 'proposal':
                            this.dispatch('_sendProject', form)
                            break;


                        default:
                            console.error('Set a submit action of the form')
                            break;
                    }
                },

                _sendProject({ commit }, payload) {
                    console.log('SENDING')
                    // getting stage names and values
                    // const { SUCCESS, PROCESS, FAIL } = GLOBALS

                    // // Defining body of the request
                    // const BODY = {
                    //     message: this.message,
                    //     user: this.email
                    // }

                    // // Defining header of the request
                    // const HEADER = {
                    //     'Accept': 'application/json',
                    //     'Content-type': 'application/json'
                    // }

                    // // Setting form status to being processed
                    // this.commit('updateStatus', PROCESS)

                    // // ----------------------------------------------------------------
                    // // Request
                    // // ----------------------------------------------------------------
                    // fetch(`http://localhost:3000/api/new_message`,
                    // {
                    //     method: 'POST',
                    //     headers: HEADER,
                    //     body: JSON.stringify(BODY)
                    // })
                    // .then( res => res.status === 200 && res.json())
                    // .then(json => {
                    //     (json.message === 200)
                    //     ? this.$store.commit('updateStatus', SUCCESS)
                    //     : this.$store.commit('updateStatus', FAIL)
                    //     this.state.contactForm.step = 0
                    // })
                    // .catch( err => {
                    //     this.$store.commit('updateStatus', fail)
                    //     console.error(err)
                    //     this.state.contactForm.step = 0
                    // })

                },


            },



            // ================================================================
            //  Getters
            // ================================================================
            getters: {
                // isMessageSent(state) {
                //     return state.contactForm.status === 'success'
                // },
                // currentStep(state) {
                //     return state.contactForm.step
                // },
                // totalSteps(state) {
                //     return state.contactForm.steps > 0 ? state.contactForm.steps - 1 : state.contactForm.steps
                // }
            }
        }

    )

}