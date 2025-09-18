import { defineStore } from 'pinia'
import { usePage } from '@inertiajs/vue3'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: null
    }),
    getters: {
        isAuth: (state) => !!state.user,
    },
    actions: {
        initUser() {
            const page = usePage()
            this.user = page.props.auth?.user || null
        },
        setUser(user) {
            this.user = user
        },
        setToken(token) {
            this.token = token
        },
        clearAuth() {
            this.user = null
            this.token = null
        },
    },

    persist: true
})