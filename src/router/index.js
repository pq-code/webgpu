import { createRouter, createWebHashHistory } from "vue-router"
import lingo3D from "./branch/lingo3D";
import webgpu from "./branch/webgpu";
import webgl from "./branch/webgl";
import pmaoUI from "./branch/pmaoui";
import pmaoUIhome from  "./branch/pmao-ui"
// import three from "./branch/three";

const routes = [
    {
        path: "/",
        component: () => import(/* webpackChunkName: "about" */ "../views/home/frontPage.vue"),
        name: "frontPage",
        meta: { hidden: false, title: "首屏" },
    },
    {
        path: "/home",
        component: () => import(/* webpackChunkName: "about" */ "../views/home/home.vue"),
        name: "home",
        // leaf: true,//只有一个节点
        children: [
            ...lingo3D,
            ...webgpu,
            ...webgl,
            ...pmaoUI
            // ...three,
        ],
        meta: { hidden: false, title: "首页" },
    },
    ...pmaoUIhome
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
