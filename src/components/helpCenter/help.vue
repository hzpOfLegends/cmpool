<template>
  <div class="container">
      <div class="row">
          <div class="col-lg-3"></div>
          <div class="col-lg-6">
              <b-nav pills>
                  <b-nav-item-dropdown text="入门准备">
                      <b-dropdown-item>
                        <b-link to="/commons/help/mining_begin">挖矿入门</b-link>
                      </b-dropdown-item>
                      <b-dropdown-item>
                        <b-link to="">Getting Started -Bitoin</b-link>
                      </b-dropdown-item>
                      <b-dropdown-item>
                        <b-link to="">Getting Started -Zcash</b-link>
                      </b-dropdown-item>
                      <b-dropdown-item>
                        <b-link to="">高级挖矿设置</b-link>
                      </b-dropdown-item>
                      <b-dropdown-item>
                        <b-link to="">阶层挖矿代理</b-link></b-dropdown-item>  
                  </b-nav-item-dropdown>
                  <b-nav-item-dropdown text="急救">
                      <b-dropdown-item>
                        <b-link to="">信息资源</b-link>
                      </b-dropdown-item>
                      <b-dropdown-item>
                        <b-link to="">Troubieshooting</b-link>
                      </b-dropdown-item>
                      <b-dropdown-item>
                        <b-link to="">FAQ:Mining Setup</b-link>
                      </b-dropdown-item>
                      <b-dropdown-item>
                        <b-link to="">FAQ:Mered Mining</b-link>
                      </b-dropdown-item>
                      <b-dropdown-item>
                        <b-link to="">FAQ:Mining</b-link>
                      </b-dropdown-item>
                      <b-dropdown-item>
                        <b-link to="">FAQ:Rewards & Payouts</b-link>
                      </b-dropdown-item>
                      <b-dropdown-item>
                        <b-link to="">FAQ:Pool features</b-link>
                      </b-dropdown-item>  
                  </b-nav-item-dropdown>
                  <b-nav-item-dropdown text="用户指南">
                      <b-dropdown-item>
                        <b-link to="">Pool Terminology</b-link>
                      </b-dropdown-item>
                      <b-dropdown-item>
                        <b-link to="">Reward System</b-link>
                      </b-dropdown-item>
                      <b-dropdown-item>
                        <b-link to="">Pool Payouts</b-link>
                      </b-dropdown-item>
                      <b-dropdown-item>
                        <b-link to="">Device Monitoring</b-link>
                      </b-dropdown-item>
                      <b-dropdown-item>
                        <b-link to="">Worker Management</b-link>
                      </b-dropdown-item>
                      <b-dropdown-item>
                        <b-link to="">Strtum Protocol</b-link>
                      </b-dropdown-item>
                      <b-dropdown-item>
                        <b-link to="">Hash速率证明</b-link>
                      </b-dropdown-item>  
                  </b-nav-item-dropdown>
                  <b-nav-item-dropdown id="nav7_ddown" text="Contacks" right>
                      <b-dropdown-item>
                        <b-link to="">Contacts</b-link>
                      </b-dropdown-item>
                      <b-dropdown-item>
                        <b-link to="">Feedback</b-link>
                      </b-dropdown-item>
                      <b-dropdown-item>
                        <b-link to="">Development proposals</b-link>
                      </b-dropdown-item>
                      <b-dropdown-item>
                        <b-link to="">transiation</b-link>
                      </b-dropdown-item>
                  </b-nav-item-dropdown>
            </b-nav>
          </div>
          <div class="col-lg-3"></div>
      </div>
      <div class="row">
          <div class="col-lg-12">
              <router-view/>
          </div>  
      </div>
  </div>
</template>
<script>
export default {
  
}
</script>

