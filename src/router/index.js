import Vue from 'vue'
import Mint from 'mint-ui'
import Router from 'vue-router'
import Content from '@/components/Content'
import Footer from '@/components/Footer'
import Chyx from '@/components/Chyx'
import Wdcp from '@/components/Wdcp'
import Own from '@/components/Own'
import Log from '@/components/Log'
import Holiday from '@/components/active/Holiday'

Vue.use(Router)
Vue.use(Mint)

export default new Router({
  linkActiveClass: '',
  linkExactActiveClass: 'active',
  routes: [
    {
      	path: '/',
      	name: 'home',
      	component:Content
      	
    },
    {
      	path: '/chyx',
      	name: 'chyx',
      	component:Chyx
    },
    {
    	path: '/wdcp',
    	name: 'wdcp',
    	component:Wdcp
    },
    {
    	path: '/own',
    	name:'own',
    	component:Own
    },
    {
      path: '/active/Holiday',
      name:'holiday',
      component:Holiday
    },
    {
      path: '/log',
      name:'log',
      component:Log
    }
  ],
  mode: "history"
})
