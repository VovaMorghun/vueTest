import VueRouter from 'vue-router'
import home from './components/home'
import select from './components/select'
import result from './components/result'
import history from './components/history'

export default new VueRouter({
    routes: [
        {
            path: '',//localhost:8080
            component: home
        },
        {
            path: '/select',//localhost:8080/select
            component: select
        },
        {
            path: '/result',//localhost:8080/result
            component: result
        },
        {
            path: '/history',//localhost:8080/result
            component: history
        },
    ],
    mode: 'history'
})