import Vue from 'vue'
import Router from 'vue-router'
import heroindex from '@/components/heroindex'
import hero from '@/components/hero'
import items from '@/components/items'
import matchhistory from  '@/components/matchhistory'
import overview from '@/components/overview'
import matchdetail from '@/components/matchdetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/heroindex',
      name: 'heroindex',
      component: heroindex
    },
    {
      path: '/hero/:name',
      name: 'hero',
      component: hero,
      props: true
    },
    {
      path: '/items',
      name: 'items',
      component: items,
    },
    {
      path: '/matches',
      name: 'matches',
      component: matchhistory,
    },
    {
      path: '/overview/:matchid',
      name: 'overview',
      component: overview,
      props: true
    },
    {
      path: '/matchdetail/:matchid',
      name: 'matchdetail',
      component: matchdetail,
      props: true
    },
  ]
})
