import fetch from 'node-fetch'
import { Store } from 'vuex'
import { GLOBALS } from '~/config/globals'

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
                loading: {
                    page: false,
                    preloading: true,
                    pageReady: false
                },
                menu: false,
                theme: {
                    text: null,
                    background: null,
                    pallete: ['#78EFFF', '#FFF679', '#9FFFD5', '#FFF7B3', '#0EEBDD']
                    // pallete: ['#cbe7fd', '#ffc5c8', '#bff9f2', '#19d8e9', '#FF5964', '#FFE74C', '#3AB795', '#35A7FF']
                },
                projects: {
                    top: [],
                    all: []
                },
                events: [],
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
                process: 0
            },




            // ================================================================
            // Mutations
            // ================================================================
            mutations: {



                // ------------------------------------------------------------
                //  Loading
                // ------------------------------------------------------------
                setLoading(state, payload) {
                    state.loading = {
                        ...state.loading,
                        ...payload
                    }
                },


                // ------------------------------------------------------------
                //  Project
                // ------------------------------------------------------------
                setTopProjects(state, payload) {
                    state.projects.top = payload
                },
                setAllProjects(state, paylaod) {
                    state.projects.all = paylaod
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

                setProgress(state, payload) {
                    state.scrolls.progress = payload
                },


                setFollower(state, payload) {
                    state.follower = payload
                },



                setTheme(state, theme) {
                    state.theme = {
                        ...state.theme,
                        ...theme
                    }
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
                //  Toggleling Navigation Menu
                // ------------------------------------------------------------
                toggleMenu(state, payload) {
                    if (payload !== undefined) state.menu = payload
                    else state.menu = !state.menu
                },



                // ------------------------------------------------------------
                //  Setting Events in Events Calendar
                // ------------------------------------------------------------
                setEvents(state, events) {
                    let final = []
                    const today = new Date()

                    // Sorting and organizing events in array
                    const sorted = events.stories
                        .sort((a, b) => {
                            const aa = new Date(a.content.from.split(" ")[0])
                            const bb = new Date(b.content.from.split(" ")[0])
                            return bb - aa
                        })
                        .filter(event => {
                            const eventDate = new Date(event.content.from.split(" ")[0])
                            return eventDate > today
                        })
                        .reverse()

                    // getting only the content of events
                    sorted.map( event => final.push(event.content))

                    // setting to the store's state
                    state.events = final
                }




            },






            // ================================================================
            // Actions
            // ================================================================
            actions: {



                // ------------------------------------------------------------
                //  Fetching Events
                // ------------------------------------------------------------
                getEvents({ commit }) {

                    // if event are not yet fetched -> fetch them from API
                    if (Array.isArray(this.state.events) && this.state.events.length === 0) {
                        this.$storyapi
                            .get(`cdn/stories`,
                            {
                                version: 'draft', // here it needs to be set to publish
                                starts_with: 'events/workshops'
                            })
                            .then(res => {
                                commit('setEvents', res.data)
                            })
                    }

                },

                // ------------------------------------------------------------
                //  Fetching Top Projects
                // ------------------------------------------------------------
                async getAllProjects({ commit, ctx }) {
                    if (this.state.projects.all === undefined || this.state.projects.all.length === 0) {
                        console.log('There is nothing')
                        await this.$storyapi.get(`cdn/stories`,
                        {
                            version: 'draft',
                            starts_with: 'projects/'
                        })
                        .then(res => {
                            commit('setAllProjects', res.data.stories)
                        })
                    }
                },



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
                recentEvents(state) {
                    return state.events.slice(0, 3)
                }
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