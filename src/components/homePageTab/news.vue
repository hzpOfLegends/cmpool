<template>
  <div class="container-fuild">
      <div class="row ">
          <div class="col-lg-2"></div>
          <div class="col-lg-8 news">
            <div class="row">
              <div class="date_wrap  col-lg-4">
                <div class="date">
                <div class="months" v-show="a">
                  1月
                </div>
                <div class="days" >
                  1111-11-11 11：11：11
                </div>
              </div>
            </div>
            <div class="content col-lg-8">
              <h5>
                
                    Bitcoin Gold Will Not Be Supported On Slush Pool
                
              </h5>
              <p>Dear Miners,</p>
              <p>&nbsp; &nbsp;as you might notice, there is an another hard fork coming up called Bitcoin Gold. It changes the PoW algorithm to Equihash and also modify the difficulty adjustment rules. We currently have no plans to support the hard fork, respectively the newly created coin, as the interest in Bitcoin Gold seems to be quite low.</p>
              <footer>
                <div class="left"><router-link to=''>阅读更多&nbsp;></router-link></div>
                <div class="right">
                  <b-button variant="info"><i class="fa fa-signing"></i>Tweet</b-button>
                  <b-button variant="primary"><i class="fa fa-facebook-official"></i> Share</b-button>
                </div>
              </footer>
            </div>
            </div>
          </div>
          <div class="col-lg-2"></div>
      </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      a:true
    }
  },
  methods:{
    toggle(){
      this.a= false;
    },
    toggles(){
      this.a =true
    }

  }
};
</script>
<style>
.container{
  margin: 0;
}
.news {
  padding: 0;
  margin: 0;
}
.news > .row {
  border: 1px solid rgb(32, 168, 216);
  height: 240px;
  margin-top: 20px;
  border-radius: 1%;
}

.date {
  width: 100%;
  /* height: 100%; */
  padding: 0;
  height: 30px;
  overflow: hidden;
  /* float: left; */
}
.date_wrap{
  padding: 0;
  background-color: rgb(32, 168, 216);
}
.date .months,
.days {
  width: 100%;
  height: 30px;
  line-height: 30px;
  background-color: rgb(56, 64, 66);
  color: white;
  text-align: center;
  transition: all 2s;
}

.content {
  padding: 0;
  /* float: left; */
}
.content footer {
  width: 100%;
  height: 79px;
  position: relative;
}
.content footer .left {
  float: left;
  /* line-height: 80px; */
  position: absolute;
  top:10px;
}
.content footer .right {
  position: absolute;
  right: 5px;
  top: 10px;
}
</style>

