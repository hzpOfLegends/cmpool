<template>
    <div class="">
        <!-- <header>
        <div class="login row">
            <div class="character col-lg-6" lg='6'>
                <a href="javascript:;">你正在使用一个模拟账户</a>
            </div>
            <div class="register col-lg-6" lg="6">
                <router-link to="/login"><i class="fa fa-user fa-lg user"></i>登录</router-link>
                <router-link to="/register"><i class=" fa fa-mail-forward forward"></i>注册</router-link>         
            </div>
        </div>
    </header>   -->
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
        <div class="nav">
            <div class="times">
                <span><i class="fa fa-calendar-times-o"></i>{{time | formatDate}}&nbsp;</span>
                <span> 2.0000Eh/s &nbsp;</span>
                <span> <i class="fa fa-btc"></i>Bitcoin &nbsp;</span>
                <span>CNY: 95327.44</span>
                <span>EUR: 12194.91</span>
                <span>GBP: 10830.9</span>
                <span>USD: 14665.13</span>
            </div>
            <nav>
                <div class="navs">
                    <div class="navsLeft">
                        
                            <a>
                                CMPOOL
                            </a>
                            <span>
                                &nbsp;   Demo Account
                            </span>
                    </div>
                    <div class="navsRight row">
                        <div class="col-lg-3"></div>
                        <span class="col-lg-1">
                            
                                <strong>HomePage
                                    <br>
                                    News
                                </strong>
                                <ul class="pulldown">
                                <li><router-link to=""><i class="fa fa-home fa-fw"></i>主页</router-link></li>
                                <li><router-link to="/commons"><i class="fa fa-newspaper-o fa-fw"></i>新闻</router-link></li>
                                <li><router-link to="/commons/group"><i class="fa fa-group fa-fw"></i>组</router-link></li>
                                <li><router-link to=""><i class="fa fa-file-text fa-fw"></i>博客</router-link></li>
                                </ul>
                            
                        </span>
                        <span class="col-lg-1">
                            
                                <strong>矿池统计
                                    <br>
                                    公开数据
                                </strong>
                                <ul class="pulldown">
                                <li><router-link to=""><i class="fa fa-bar-chart fa-fw"></i>系统 统计</router-link></li>
                                <li><router-link to=""><i class="fa fa-balance-scale fa-fw"></i>Hash速率证明</router-link></li>
                                <li><router-link to=""><i class="fa fa-history fa-fw"></i>矿区历史</router-link></li>
                                <li><router-link to=""><i class="fa fa-trophy fa-fw"></i>名人堂</router-link></li>
                                <li><router-link to=""><i class="fa fa-bar-chart fa-fw"></i>Json统计</router-link></li>
                                </ul>
                            
                            
                        </span>
                        <span class="col-lg-1">
                            
                                <strong>帮助中心
                                    <br>
                                     开发角
                                </strong>
                                <ul class="pulldown">
                                <li><router-link to=""><i class="fa fa-life-ring fa-fw"></i>帮助中心</router-link></li>
                                <li><router-link to=""><i class="fa fa-code fa-fw"></i>开发角</router-link></li>
                                <li><router-link to=""><i class="fa fa-gavel fa-fw"></i>服务条款</router-link></li>
                                </ul>
                            
                            
                        </span>
                        <span class="col-lg-1">
                            
                                <strong>我的账户
                                    
                                    
                                </strong>
                                <strong>私人专区</strong>
                                
                                <ul class="pulldown">
                                <li><router-link to=""><i class="fa fa-th-large fa-fw"></i>仪表盘</router-link></li>
                                <li><router-link to=""><i class="fa fa-cogs fa-fw"></i>矿工</router-link></li>
                                <li><router-link to=""><i class="fa fa-line-chart fa-fw"></i>监控</router-link></li>
                                <li><router-link to=""><i class="fa fa-btc fa-fw"></i>报酬</router-link></li>
                                <li><router-link to=""><i class="fa fa-usd fa-fw"></i>报酬支付历史</router-link></li>
                                <li><router-link to=""><i class="fa fa-book fa-fw"></i>活动日志</router-link></li>
                                <li><router-link to=""><i class="fa fa-cog fa-fw"></i>设置</router-link></li>
                                </ul>
                            
                        </span>
                        <span class="col-lg-1">
                            <router-link to="">
                                <strong>退出
                                    <br>
                                <i class="fa fa-user"></i>DEMO
                                </strong>
                            </router-link>
                        </span>
                        <span class="col-lg-1">
                            
                                <strong>function...
                                    <br>
                                <i class="fa fa-user"></i>DEMO
                                </strong>
                                
                                <ul class="pulldown">
                                <li><router-link to="">。。。</router-link></li>
                                <li><router-link to="">。。。</router-link></li>
                                <li><router-link to="">。。。</router-link></li>
                                <li><router-link to="">。。。</router-link></li>
                                </ul>   
                            
                        </span>
                        
                    </div>
                </div>
            </nav>
            <div class="content">               
                <div class="content_title row">
                    <div class="col-lg-8">
                        <div class=" BtcBtn row">
                            <div class="col-lg-6">
                                <a href="javascript:;">
                                    <i class="fa fa-bitcoin"></i>
                                    <span>Setup 
                                        <strong>Bitcoin</strong>
                                        mining
                                    </span>
                                </a>
                            </div>
                            <div class="col-lg-6">
                                <a href="javascript:;">
                                    <i class="fa fa-dollar"></i>
                                    <span>Setup 
                                        <strong>Zcash</strong>
                                        mining
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div class="content_ind row">
                            <div class="col-lg-6 ind_class">
                                <div class="iconf">
                                    <i class="fa fa-users"></i>
                                </div>
                                <p>传统&信任</p>
                                <ul>
                                    <li>世界上第一个比特币矿池</li>
                                    <li>自2010年12月开始运作</li>
                                    <li>自2010年12月起有超过1,000,000比特币已被挖</li>
                                    <li>长期稳定和准确的报酬支付历史</li>
                                </ul>
                            </div>
                            <div class="col-lg-6 ind_class">
                                <div class="iconf">
                                    <i class="fa fa-keyboard-o"></i>
                                </div>
                                <p>传统&信任</p>
                                <ul>
                                     <li>新特性已添加。请从发布说明获取更多信息。</li>
                                    <li>由您的hash 速率驱动的开发提议</li>
                                    <li>提交您对矿池改进的建议并让大家参与投票</li>
                                    
                                </ul>
                            </div>
                            <div class="col-lg-6 ind_class">
                                <div class="iconf">
                                    <i class="fa fa-bitcoin"></i>
                                </div>
                                <p>传统&信任</p>
                                <ul>
                                    <li>Our pool stays politically neutral. As such, our voting system is giving a voice to every single miner. Simply direct your Hash Rate towards your favourite protocol proposal.</li>
                                    
                                </ul>
                            </div>
                            <div class="col-lg-6 ind_class">
                                <div class="iconf">
                                    <i class="fa fa-globe"></i>
                                </div>
                                <p>传统&信任</p>
                                <ul>
                                   <li>我们的服务器分布全球。 智能的负载平衡 和 故障转移系统 确保您在99.9%的时间挖矿进行中。</li>
                                    
                                </ul>
                            </div>
                            <div class="col-lg-6 ind_class">
                                <div class="iconf">
                                    <i class="fa fa-shield "></i>
                                </div>
                                <p>传统&信任</p>
                                <ul>
                                    <li>整个基础设施运行在 高度安全的服务器 上。 您的钱包可以由 双重认证 (2FA) 保护</li>
                                    
                                </ul>
                            </div>
                            <div class="col-lg-6 ind_class">
                                <div class="iconf">
                                    <i class="fa fa-comments-o"></i>
                                </div>
                                <p>传统&信任</p>
                                <ul>
                                    <li>我们的技术支持小组在这里 全年每天24小时 为您服务。我们为给您在任何情况下提供有用的答复正非常努力地工作着。</li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 news">
                        <div class="title">
                            <i class="fa fa-facebook-f fa-lg"></i>
                            <strong><a href="javascript:;">FaceBook News</a></strong>
                        </div>
                        <div class="news_content">
                            <div class="date">
                                <span>
                                    <a href="javascript:;">
                                        Dec 22,2017
                                    </a>
                                </span>
                                <i class="fa fa-external-link"></i>
                            </div>
                            <div class="contents">
                                Remember what you did on December 16, 2010? We mined our first block!
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

    </div>
</template>
<script>
import { formatDate } from "../common/filter.js";
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
@import '../../static/css/common';
.content {
  width: 100%;
}
.content .BtcBtn {
  text-align: center;
}
.content .BtcBtn a {
  width: 200px;
  height: 70px;
  display: inline-block;
  text-align: center;
  line-height: 70px;
  border: 1px solid rgb(1, 187, 255);
  border-radius: 5%;
  color: rgb(1, 187, 255);
}
.content .BtcBtn a .fa-dollar,
.fa-bitcoin {
  font-size: 25px;
  font-weight: 600;
}
.content .BtcBtn a:hover {
  text-decoration: none;
}
.content_ind .ind_class .iconf {
  font-size: 60px;
  text-align: center;
}
.content_ind .ind_class p {
  font-weight: 600;
  font-size: 20px;
  text-align: center;
}
.content_ind .ind_class ul {
  text-align: center;
}
.content_ind .ind_class .fa-bitcoin {
  font-size: 50px;
}
.news {
  padding: 30px 30px 0 30px;
}
.news .title .fa-facebook-f {
  color: blue;
}
.news .title a {
  color: black;
}
.news .news_content a {
  text-decoration: none;
  color: gray;
  font-weight: 600;
}
</style>
