import { IState } from ".."
import { Module } from "vuex"
import actions from "./actions"
import getters from "./getters"
import mutations from "./mutations"
import state, { IAuthUserState } from "./state"


const authUserModule: Module<IAuthUserState, IState> = {
    namespaced: true,
    state,
    mutations,
    getters,
    actions,
}

export default authUserModule