<template>
    <div>
        <header>
                <b-navbar id="nav" toggleable="md" type="dark" variant="info">

                <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

                <b-navbar-brand href="#">
                    <span class="CmPool">CmPool</span>
                    </b-navbar-brand>

                <b-collapse is-nav id="nav_collapse">

                    <b-navbar-nav>
                    <b-nav-item href="#"><router-link to="/login" class="account">你正在使用一个模拟账户,请登录。。。</router-link>    </b-nav-item>
                    </b-navbar-nav>
                    <b-navbar-nav class="ml-auto">

                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
                        <b-button size="sm" class="my-2 my-sm-0 search" type="submit" >Search</b-button>
                    </b-nav-form>

                    <b-nav-item-dropdown text="Lang" right>
                        <b-dropdown-item href="#">CN</b-dropdown-item>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">ES</b-dropdown-item>
                        <b-dropdown-item href="#">RU</b-dropdown-item>
                        <b-dropdown-item href="#">FA</b-dropdown-item>
                        
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right>
                        <!-- Using button-content slot -->
                        <template slot="button-content">
                        <em>User</em>
                        </template>
                        <b-dropdown-item href="#">
                            <i class="fa fa-user fa-lg user"></i>
                            <router-link to="/login"> <span class="login">Login</span> </router-link>
                        </b-dropdown-item>
                        <b-dropdown-item href="#" class="logout">
                            <i class=" fa fa-mail-forward forward"></i>
                            <router-link to="/register"><span class="logout">Logout</span></router-link>
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                    </b-navbar-nav>

                </b-collapse>
                </b-navbar>
        </header>
        
        <router-view></router-view>
    </div> 
</template>
<script>
// import { formatDate } from "../common/filter.js";

export default {
  data() {
    return {
      time: ""
    };
  },
  methods: {
    getDate() {
      this.time = new Date();
    }
  },
  mounted() {
    this.getDate();
  },
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm");
    }
  }
};
</script>

<style>
@import "../../static/css/common.css";
</style>

