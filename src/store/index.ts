import { createStore } from 'vuex'
import authUserModule from './authUser'
import productsModule from './products'

export interface IState {
  greeting: string;
}

export default createStore({
  state: {
    greeting: ""
  },
    getters: {
  },
    mutations: {
  },
    actions: {
  },
    modules: {
    products: productsModule,
    authUser: authUserModule
    }
})
