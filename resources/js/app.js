import "./bootstrap";
import "../css/app.css";

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m";
import {
    FaHome,
    FaMapMarkedAlt,
    FaCalendarAlt,
    FaNetworkWired,
    FaSearch,
    FaUserCircle,
} from "oh-vue-icons/icons";
import { OhVueIcon, addIcons } from "oh-vue-icons";

addIcons(
    FaHome,
    FaMapMarkedAlt,
    FaCalendarAlt,
    FaNetworkWired,
    FaSearch,
    FaUserCircle
);

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        ),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .component("v-icon", OhVueIcon)
            .mount(el);
    },
    progress: {
        color: "#4B5563",
    },
});
