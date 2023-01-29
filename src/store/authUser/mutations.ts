import { AuthUser } from '@/models/authUser'
import { IAuthUserState } from './state'
import { MutationTree } from 'vuex'
import { Token } from '@/models/token'
import router from '@/router'

const mutations: MutationTree<IAuthUserState> = {
    setToken(state: IAuthUserState, token: Token) {
        state.token = token
    },
    setAuthUser(state: IAuthUserState, authUser: AuthUser) {
        state.authUser = authUser
    },
    setIsLoading(state: IAuthUserState, value: boolean){
        state.isLoading = value
    },
    deleteToken(state: IAuthUserState) {
        state.token = null
    }
}

export default mutations