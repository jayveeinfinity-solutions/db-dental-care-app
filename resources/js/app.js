import './bootstrap';

import { createApp, h } from 'vue';
import { createInertiaApp, Head, Link } from '@inertiajs/vue3';
import { Ziggy } from './ziggy';
import { route } from 'ziggy-js'
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import AppLayout from './layouts/AppLayout.vue';
import AdminLayout from './layouts/AdminLayout.vue';

window.route = (name, params, absolute) => route(name, params, absolute, Ziggy)

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

createInertiaApp({
    title: (title) => `${title} · ${appName}`,
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
        let page = pages[`./Pages/${name}.vue`]

        if (!page.default.layout) {
            page.default.layout = name.startsWith('Admin/')
                ? AdminLayout
                : AppLayout
        }

        return page
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(pinia)
            .component("Head", Head)
            .component("Link", Link)
            .mount(el)
    },
})