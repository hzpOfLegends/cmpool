<template>
  <div class="app">
      <AppHeader/>
      <div class="app-body">
      <Sidebar :navItems="nav"/>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import nav from '../_nav'
// import { Header as AppHeader, Sidebar } from '../components'
import AppHeader from '@/components/Header/Header'
import Sidebar from '@/components/Sidebar/Sidebar'
export default {
  name:'commons',
  components:{
      AppHeader,
      Sidebar
  },
  data(){
      return {
          nav: nav.items
      }
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched
    }
  }
}
</script>
<style>

</style>
