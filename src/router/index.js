import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import login from '@/components/login'
import homePage from '@/components/homePage'
// import hpcontent from '@/components/content/homeoagect'


// homePage components
import news from '@/components/homePageTab/news'
import group from '@/components/homePageTab/group'

// helpCenter components
import help from '@/components/helpCenter/help'
import exploit from '@/components/helpCenter/exploit'
import serve from '@/components/helpCenter/serve'

// myAccount components
import activity from '@/components/myAccount/activity'
import instrumentPanel from '@/components/myAccount/instrumentPanel'
import miner from '@/components/myAccount/miner'
import monitoring from '@/components/myAccount/monitoring'
import reward from '@/components/myAccount/reward'
import rewardHistory from '@/components/myAccount/rewardHistory'
import set from '@/components/myAccount/set'

// poolMining components
import hash from '@/components/poolMining/hash'
import json from '@/components/poolMining/json'
import miningHistory from '@/components/poolMining/miningHistory'
import person from '@/components/poolMining/person'
import statistics from '@/components/poolMining/statistics'

// helpCenter Components
import mining_begin from '@/components/helpComs/mining_begin'

import common from '@/components/common'
import header from '@/components/Header/header'
import commons from '@/containers/commons'
export default new Router({
  routes: [{
      path: '/',
      name: 'homePage',
      redirect: '/homePage'
    },
    {
      path: '/homePage',
      component: homePage,
    },
    {
      path: '/commons',
      name: 'commons',
      component: commons,
      children: [{
          path: 'news',
          name: "news",
          component: news
        },
        {
          path: "group",
          name: 'group',
          component: group
        },
        {
          path: 'hash',
          name: 'hash',
          component: hash
        },
        {
          path: 'json',
          name: 'json',
          component: json
        },
        {
          path: 'miningHistory',
          name: 'miningHistory',
          component: miningHistory
        }, ,
        {
          path: 'person',
          name: 'person',
          component: person
        },
        {
          path: 'statistics',
          name: 'statistics',
          component: statistics
        },
        {
          path: 'activity',
          name: 'activity',
          component: activity
        },
        {
          path: 'instrumentPanel',
          name: 'instrumentPanel',
          component: instrumentPanel
        },
        {
          path: 'miner',
          name: 'miner',
          component: miner
        },
        {
          path: 'monitoring',
          name: 'monitoring',
          component: monitoring
        },
        {
          path: 'reward',
          name: 'reward',
          component: reward
        },
        {
          path: 'rewardHistory',
          name: 'rewardHistory',
          component: rewardHistory
        },
        {
          path: 'set',
          name: 'set',
          component: set
        },
        {
          path: 'exploit',
          name: 'exploit',
          component: exploit
        },
        {
          path: 'help',
          name: 'help',
          component: help,
          children:[{
            path:'mining_begin',
            component:mining_begin
          }]
        },
        {
          path: 'serve',
          name: 'serve',
          component: serve
        },
      ]
    },

    {
      path: '/common',
      component: common,




    },
    {
      path: '/login',
      component: login
    }

  ]
})
