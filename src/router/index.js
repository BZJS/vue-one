import Vue from 'vue'
import VueRouter from 'vue-router'

import Miste from 'views/miste/Miste'
import Order from 'views/order/Order'
import Profile from 'views/profile/Profile'
import Search from 'views/search/Search'

Vue.use(VueRouter)

const routes = [{
        path: '/miste',
        component: Miste
    },
    {
        path: '/order',
        component: Order
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/search',
        component: Search
    },
    {
        path: '/',
        redirect: '/miste'
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router