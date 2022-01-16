import Vue from "vue";
import Router from "vue-router";
import index from "../pages/index";
import pay from "../pages/pay"

Vue.use(Router);

const routes = [
    {
        path: "/index",
        name: "index",
        component: index,
        meta:{ title: "首页" }
    }, {
        path: "/pay",
        name: "pay",
        component: pay,
        meta:{ title: "支付" }
    }
]

const router = new Router({
    routes
})

export default router;

