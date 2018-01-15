<template>
  <div>
      <div id="mypie1" style="width: 1000px;height:400px;"></div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.pie();
  },
  methods: {
    pie() {
      let mypie1 = this.$echarts.init(document.getElementById("mypie1"));
      mypie1.setOption({
        title: {
          text: "By Active Users",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["未投票", "矿池决定", "Bitcoin Core"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "未投票" },
              { value: 310, name: "矿池决定" },
              { value: 234, name: "Bitcoin Core" },
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
    }
  }
};
</script>

