import { ActionTree } from "vuex"
import { AuthUser } from "@/models/authUser"
import { AxiosResponse } from "axios"
import { IAuthUserState } from "./state"
import { IState } from ".."
import { UserRequest } from "@/models/userRequest"
import fakePlatziApi from "@/api/fakePlatziApi"
import router from "@/router"


const actions: ActionTree<IAuthUserState, IState> = {
    async fetchToken({commit}, body: UserRequest){
        try {
            const { data } = await fakePlatziApi.post('/auth/login', body)
            commit('setToken', data)
            localStorage.setItem('token', data.access_token)
            router.push({name: 'home'})
        } catch(error: any) {
            alert(`${error.message}. Unauthorized user.`)
        }
    },

    async fetchAuthUser({commit}){
        commit('setIsLoading', true)
        const {data} = await fakePlatziApi.get<unknown, AxiosResponse<AuthUser>>('/auth/profile')
        commit('setIsLoading', false)
        commit('setAuthUser', data)
    },

    deleteToken({commit}){
        commit('deleteToken')
        localStorage.removeItem('token')
        router.push({name: 'login'})
    },
}

export default actions