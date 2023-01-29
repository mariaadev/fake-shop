import { IState } from ".."
import { Module } from "vuex"
import actions from "./actions"
import getters from "./getters"
import mutations from "./mutations"
import state, { ProductsStateInterface } from "./state"

const productsModule: Module<ProductsStateInterface, IState> = {
    namespaced: true,
    state,
    mutations,
    getters,
    actions,
}

export default productsModule