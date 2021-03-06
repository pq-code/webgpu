const webgl = [
  {
    path: "/webgl",
    component: () => import(/* webpackChunkName: "about" */ "../../views/webgl/index.vue"),
    name: "webgl",
    // leaf: true,//只有一个节点
    children: [
      {
        path: "/webgl",
        component: () => import(/* webpackChunkName: "about" */ "../../views/webgl/index.vue"),
      },
    ],
    meta: { hidden: false, title: "webgl" },
  },
  {
    path: "/panoramiciewing",
    component: () => import(/* webpackChunkName: "about" */ "../../views/webgl/panoramiciewing/index.vue"),
    name: "panoramiciewing",
    // leaf: true,//只有一个节点
    meta: { hidden: false, title: "panoramiciewing" },
  },
  {
    path: "/trajectoryMotion",
    component: () => import(/* webpackChunkName: "about" */ "../../views/webgl/trajectoryMotion/index.vue"),
    name: "trajectoryMotion",
    // leaf: true,//只有一个节点
    meta: { hidden: false, title: "trajectoryMotion" },
  },
  {
    path: "/heartOfSteel",
    component: () => import(/* webpackChunkName: "about" */ "../../views/webgl/heartOfSteel/index.vue"),
    name: "heartOfSteel",
    // leaf: true,//只有一个节点
    meta: { hidden: false, title: "heartOfSteel" },
  },
  {
    path: "/forzaHorizonScenes",
    component: () => import(/* webpackChunkName: "about" */ "../../views/webgl/forzaHorizonScenes/index.vue"),
    name: "forzaHorizonScenes",
    // leaf: true,//只有一个节点
    meta: { hidden: false, title: "forzaHorizonScenes" },
  },
]
export default webgl;
