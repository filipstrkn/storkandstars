import { Store } from 'vuex'


/*
|==========================================================================
| Store
|==========================================================================
|
| Vuex store
|
|*/
/**
 * @description Stork&Stars application store
 * store
 */

export default function createStore() {

    // const baseURL = `api.storyblok.com/v1/cdn`

    return new Store(
        {



            // --------------------------------------------------------------------
            // States
            // --------------------------------------------------------------------
            state: {
                baseUrl: 'api.storyblok.com/v1/cdn',
                top: [],
            },



            // --------------------------------------------------------------------
            // Mutations
            // --------------------------------------------------------------------
            mutations: {
                setTop(state, payload) {
                    state.top = payload
                }

            },



            actions: {
                async loadTop({ commit, ctx }) {
                    const top = await this.$storyapi.get(`cdn/stories`, {version: 'draft', starts_with: 'projects/', with_tag: 'top'})
                        .then(res => {
                            const topSection = res.data.stories.splice(0, 3)
                            commit('setTop', topSection)
                        } )
                }
            },

            getters: {
                top(state) {
                    return state.top
                }
            }
        }

    )

}



// // exporting a function that creates a new Vuex instance is a Nuxt way of doing things
// export default () => new Vuex.Store(store)