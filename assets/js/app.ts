import { DefineComponent, createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'

import '../css/index.css'

const pages = import.meta.glob('./pages/**/*.vue')

document.addEventListener('DOMContentLoaded', () => {
    InertiaProgress.init({ showSpinner: true })

    createInertiaApp({
        resolve: async name => {
            const page = (await pages[`./pages/${name}.vue`]())
            return page as Promise<DefineComponent>
        },
        setup({ el, app, props, plugin }) {
            createApp({ render: () => h(app, props) })
                .use(plugin)
                .mount(el)
        }
    })
})
