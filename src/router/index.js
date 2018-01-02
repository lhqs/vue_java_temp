import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import testOne from '@/components/test/testOne'
import OtherItem from '@/components/test/OtherItem'
import UserName from '@/components/test/UserName'
import ChartShow from '@/components/test/ChartShow'
import Echarts from '@/components/test/Echarts'
import PictureTable from '@/components/test/PictureTable'
import pic from '@/components/test/pic'
import CookieTest from '@/components/test/CookieTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld

    }, {
      path: '/test1',
      name: 'test1',
      component: testOne
    }, {
      path: '/other',
      name: 'other',
      component: OtherItem
    }, {
      path: '/username',
      name: 'username',
      component: UserName
    },{
      path: '/chart',
      name: 'chart',
      component: ChartShow
    }
    ,{
      path: '/echarts',
      name: 'chart',
      component: Echarts
    },{
    path:'/pictureDemo',
      name:'/pictureDemo',
      component:PictureTable
    },{
    path:'/pic',
      name:'/pic',
      component:pic
    },{
    path:'/cookie',
      name:'cookie',
      component:CookieTest
    }

  ]
})
