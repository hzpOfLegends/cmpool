<template>
  <div>
      <div id="hashBar" style="width:1000px;height:500px"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        a:"时间",
        b:"难度值"
    };
  },
  mounted() {
    this.hashBar();
  },
  methods: {
    hashBar() {
      let hashBar = this.$echarts.init(document.getElementById("hashBar"));

      hashBar.setOption({
        title: {
          text: "每分钟最大难度值",
          subtext: this.a+this.b
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["网络难度", "以发现矿区"]
        },
        toolbox: {
          show: true,
          feature: {
            // dataView: { show: true, readOnly: false },
            // magicType: { show: true, type: ["line", "bar"] },
            // restore: { show: true },
            // saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            data: [
              "09:00",
              "09:00",
              "09:00",
              "09:00",
              "09:00",
              "09:00",
              "09:00",
              "09:00",
              "09:00",
              "09:00",
              "09:00",
              "09:00"
            ]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
        //   {
        //     name: "蒸发量",
        //     type: "bar",
        //     data: [
        //       2.0,
        //       4.9,
        //       7.0,
        //       23.2,
        //       25.6,
        //       76.7,
        //       135.6,
        //       162.2,
        //       32.6,
        //       20.0,
        //       6.4,
        //       3.3
        //     ],
        //     markPoint: {
        //       data: [{ type: "max", name: "最大值" }, { type: "min", name: "最小值" }]
        //     },
        //     markLine: {
        //       data: [{ type: "average", name: "平均值" }]
        //     }
        //   },
          {
            name: "降水量",
            type: "bar",
            data: [
              2.6,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3
            ],
            markPoint: {
              data: [
                { name: "年最高", value: 182.2, xAxis: 7, yAxis: 183 },
                { name: "年最低", value: 2.3, xAxis: 11, yAxis: 3 }
              ]
            },
            // markLine: {
            //   data: [{ type: "average", name: "平均值" }]
            // }
          }
        ]
      });
    }
  }
};
</script>

