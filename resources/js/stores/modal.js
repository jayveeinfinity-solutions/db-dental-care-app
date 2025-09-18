import { defineStore } from "pinia"
import { useAuthStore } from '../stores/auth';

export const useModalStore = defineStore("modal", {
    state: () => ({
        modals: {},
    }),
    actions: {
        register(name, modal) {
            this.modals[name] = modal
        },
        open(name) {
            const authStore = useAuthStore();

            if (!authStore.user) {
                console.log('Guest mode')
                return this.modals["loginModal"]?.open();
            }

            this.modals[name]?.open()
        },
        close(name) {
            this.modals[name]?.close()
        },
    },
})