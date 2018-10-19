import Vue from 'vue';
import VueRouter from 'vue-router';

//page
import Login from '../views/login/Login';
import Home from '../views/home/Home';

//other
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: "login",
        component: Login
    }, {
        path: "/login",
        name: "login2",
        component: Login
    }, {
        path: "/index",
        name: "index",
        component: Home,
        children:[
            {
                path:"login",
                component:Login
            }
        ]
    }
];
export default new VueRouter({
    //mode:"hash",
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0};
    }
});