import { Store } from 'vuex'


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
                top: [],
                contactForm: {
                    body: {
                        user: null,
                        message: null
                    },
                    status: null,
                    stages: {
                        PROCESSING: 'processing',
                        SUCCESS: 'success',
                        FAIL: 'fail'
                    }
                }
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
                }


            },



            // ================================================================
            // Actions
            // ================================================================
            actions: {


                // ------------------------------------------------------------
                //  Fetching Top Projects
                // ------------------------------------------------------------
                async loadTop({ commit, ctx }) {
                    await this.$storyapi.get(`cdn/stories`,
                    {
                        version: 'draft',
                        starts_with: 'projects/',
                        with_tag: 'top'
                    })
                    .then(res => {
                        const topThree = res.data.stories.splice(0, 3)
                        commit('setTopProjects', topThree)
                    })
                }


            },



            // ================================================================
            //  Getters
            // ================================================================
            getters: {
                isMessageSent(state) {
                    return state.contactForm.status === 'success'
                }
            }
        }

    )

}