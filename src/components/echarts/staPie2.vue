<template>
  <div>
      <div id="mypie2" style="width: 500px;height:400px;"></div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.pie();
  },
  methods: {
    pie() {
      let mypie2 = this.$echarts.init(document.getElementById("mypie2"));
      mypie2.setOption({
        title: {
          text: "由当前的Hash速率",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
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

