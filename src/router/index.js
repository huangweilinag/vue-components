import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/examples/Home'
import Alert from '@/examples/Alert'
import Modal from '@/examples/Modal'
import Page from '@/examples/Page'
import Table from '@/examples/Table'
import Tabs from '@/examples/Tabs'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            children:[
                {
                    path: 'alert',
                    name: 'Alert',
                    component: Alert
                },
                {
                    path: 'modal',
                    name: 'Modal',
                    component: Modal
                },
                {
                    path: 'page',
                    name: 'Page',
                    component: Page
                },
                {
                    path: 'table',
                    name: 'Table',
                    component: Table
                },
                {
                    path: 'tabs',
                    name: 'Tabs',
                    component: Tabs
                }
            ]
        },
        //地址不配置时，重定向到/hello
        {
            path: '*', 
            redirect: '/'
            
        }
  ]
  
})
