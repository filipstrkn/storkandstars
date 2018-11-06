import Vuex from 'vuex'


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
const store = {



    // --------------------------------------------------------------------
    // States
    // --------------------------------------------------------------------
    state: {
        test: true
    },



    // --------------------------------------------------------------------
    // Mutations
    // --------------------------------------------------------------------
    mutations: {}
}


// exporting a function that creates a new Vuex instance is a Nuxt way of doing things
export default () => new Vuex.Store(store)