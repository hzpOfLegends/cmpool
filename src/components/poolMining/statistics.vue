<template>
  <!-- <div class=""> -->
      <!-- <div class="container"> -->
      <div class="row">
        <div class="col-lg-1"></div>
        <div class="col-lg-5">
          <div class="hash">
            <div class="hash_num">
            <div class="num"><span>1.867&nbsp;&nbsp;</span>Eh/s</div>
            <span class="hash_character">矿池有效Hash速率（30分钟平均值）</span>
          </div>
          <div class="line"></div>
          <div class="hash_miner pr clearfix">
            <div class="fl">
              <div>73947</div>
              <div class="small">激活的矿工</div>
            </div>
            <div class="fr">
              <div>16435</div>
              <div class="small">Active Users</div>
            </div>           
          </div>
          <div class="">
              <div class="clearfix">
                <div class="fl">矿区号码</div>
                <div class="fr">503821</div>
              </div>
              <div>
                <div class="fl">矿区难度</div>
                <div class="fr">1111111111111</div>
              </div>
            </div>
          </div>
          </div>
          <div class="col-lg-1"></div>
          <div class="col-lg-5">
            <div class="diggins">
              <div class="diggins_num">
                <div class="num"><span>00:00:00&nbsp;&nbsp;</span></div>
                <span class="diggins_character">
                  本轮持续时间
                  <router-link to=""><i class="fa fa-external-link"></i></router-link>
                </span>
              </div>
              <div class="line"></div>
              <div class="diggins_miner pr clearfix">
                <div class="fl">
                  <div>106.65 <span class="small">%</span></div>
                  <div class="small">前10个矿区</div>
                </div>
                <div class="fl num2">
                  <div>92.20 <span class="small">%</span></div>
                  <div class="small">前50个矿区</div>
                </div>
                <div class="fr">
                  <div>91.44 <span class="small">%</span></div>
                  <div class="small">前250个矿区</div>
                </div>
                </div>
                <div class="">
                  <b-progress height="10px" :value="99" variant="info" striped :animated="animate" show-progress class="mb-2"></b-progress>
                    <div class="clearfix">
                      <div class="fl">轮平均时间</div>
                      <div class="fr">1 Hour 14 Minutes</div>
                    </div>
                    <div>
                      <div class="fl">Current Round Start</div>
                      <div class="fr">2018-01-12 12:49</div>
                    </div>
                </div>
              </div>
          </div>
          <div class="row kWrite">
            <div class="col-lg-2"></div>
            <div class="col-lg-8">
              <draw-line/>
            </div>
            <div class="col-lg-2"></div>
          </div>
          <div class="row">
            <div class="col-lg-2"></div>
            <div class="col-lg-8">
              <sta-table/>
            </div>
            <div class="col-lg-2"></div>
          </div>
          <div class="row">
            <div class="col-lg-1"></div>
            <div class="col-lg-5">
              <pie1/>
            </div>
            <div class="col-lg-5">
              <pie2/>
            </div>
            <div class="col-lg-1"></div>
          </div>
          <div class="row">
            <div class="col-lg-2"></div>
            <div class="col-lg-8">
              <lChart/>
            </div>
            <div class="col-lg-2"></div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              sbr <br>
              sbr <br>
              sbr <br>
              sbr <br>
              sbr <br>
              sbr <br>
              sbr <br>
              sbr <br>
            </div>
          </div>
        </div>
      <!-- </div> -->
  <!-- </div> -->
</template>
<script>
import drawLine from '../echarts/KWire.vue'
import staTable from '../table/statisticsTable.vue'
import pie1 from '../echarts/staPie1.vue'
import pie2 from '../echarts/staPie2.vue'
import lChart from '../echarts/lineChart.vue'
export default {
  data() {
    return {
      animate: true
    };
  },
  components:{
    drawLine,
    staTable,
    pie1,
    pie2,
    lChart
  },
  mounted() {
    this.drawLines();
  },
  methods:{
    drawLines:function(){
      drawLine()
    }
  }
};
</script>

<style>
.row {
  width: 100%;
  text-align: center;
  margin: 0 auto;
}
.hash {
  margin-top: 50px;
  /* margin-top: 50px; */
  padding: 20px;
  width: 480px !important;
  height: 270px;
  border: 1px solid rgb(129, 129, 129);
  box-shadow: -2px 6px 13px rgb(129, 129, 129);
}
.diggins {
  margin-top: 50px;
  padding: 20px;
  width: 480px;
  height: 270px;
  border: 1px solid rgb(129, 129, 129);
  box-shadow: -2px 6px 13px rgb(129, 129, 129);
}
.hei {
  height: 20px;
}
.hash_num {
  text-align: center;
  margin-bottom: 20px;
}
.diggins_num {
  text-align: center;
  margin-bottom: 20px;
}
.hash_num .num {
  font-weight: 600;
  font-size: 25px;
  color: rgb(129, 129, 129);
}
.hash_character,
.diggins_character {
  color: rgb(129, 129, 129);
}
.diggins_num .num {
  font-weight: 600;
  font-size: 25px;
  color: rgb(129, 129, 129);
}
.hash_num .num > span {
  color: black;
  font-size: 30px;
}
.num2 {
  margin-left: 40px;
}
.diggins_num .num > span {
  color: black;
  font-size: 30px;
}

.line {
  margin: 0 70px 20px 70px;
  border-bottom: 1px solid rgb(129, 129, 129);
  box-shadow: 0 1px 2px rgb(129, 129, 129);
}
.diggins_miner {
  font-size: 30px;
  padding: 0 30px;
}
.hash_miner {
  font-size: 30px;
  padding: 0 30px;
  margin-bottom: 20px;
}
.small {
  color: rgb(129, 129, 129);
  font-size: 16px;
}
.kWrite{
  text-align: center;
  margin: 0 auto;
}
</style>

