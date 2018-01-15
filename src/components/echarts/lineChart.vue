<template>
  <div>
      <div id="lChart" style="width:1000px;height:500px"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.lChart();
  },
  methods: {
    lChart() {
      let lChart = this.$echarts.init(document.getElementById("lChart"));
      lChart.setOption({
        title: {
          text: "每个位置的Hash速率"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
            bottom:0,
          data: ["CN-02", "CN-03", "EU-01", "EU-04", "EU-04-T","EU-06","SG-01","US-01","US-02","US-03","US-05"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00","08:00","09:00","10:00","11:00"]
        },
        yAxis: {
          type: "log",
          boundaryGap: false,
          data:["---","50.00 Ph/s","100.00 Ph/s","150.00 Ph/s","200.00 Ph/s","250.00 Ph/s","300.00 Ph/s","350.00 Ph/s","400.00 Ph/s","450.00 Ph/s","500.00 Ph/s","550.00 Ph/s"]
        },
        series: [
          {
            name: "CN-02",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 100,50,50,200,300  ]
          },
          {
            name: "CN-03",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 0, 230, 100,100,200]
          },
          {
            name: "EU-01",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 0, 230, 100,150,300]
          },
          {
            name: "EU-04",
            type: "line",
            stack: "总量",
            data: [320, 332, 301, 334, 390, 330, 320, 230, 100,200,500]
          },
          {
            name: "EU-04-T",
            type: "line",
            stack: "总量",
            data: [820, 932, 901, 934, 1290, 1330, 1320, 230, 100,250,100]
          },
          {
            name: "EU-06",
            type: "line",
            stack: "总量",
            data: [820, 932, 901, 934, 1290, 1330, 1320, 230, 100,300,200]
          },
          {
            name: "SG-01",
            type: "line",
            stack: "总量",
            data: [820, 932, 901, 934, 1290, 1330, 1320, 230, 100,350,200]
          },
          {
            name: "US-01",
            type: "line",
            stack: "总量",
            data: [820, 932, 901, 934, 1290, 1330, 1320, 230, 100,400,200]
          },
          {
            name: "US-02",
            type: "line",
            stack: "总量",
            data: [820, 932, 901, 934, 1290, 1330, 1320, 230, 100,420,200]
          },
          {
            name: "US-03",
            type: "line",
            stack: "总量",
            data: [820, 932, 901, 934, 1290, 1330, 1320, 230, 100,455,500]
          },
          {
            name: "US-05",
            type: "line",
            stack: "总量",
            data: [820, 932, 901, 934, 1290, 1330, 1320, 230, 100,500,350]
          },    

        ]
      });
    }
  }
};
</script>
