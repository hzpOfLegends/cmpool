<template>
  <b-table striped hover :items="items"></b-table>
</template>
<script>
const items = [
  { 用户名: true, Hash速率峰值: 354.5 +'&nbsp;'+'<strong>Ph/s</strong>'	, 已加入: "2017-08-08" },
  { 用户名: false, Hash速率峰值: 354.5 +'&nbsp;'+'<strong>Ph/s</strong>', 已加入: "2017-08-08"},
  { 用户名: false, Hash速率峰值: 354.5 +'&nbsp;'+'<strong>Ph/s</strong>', 已加入: "2017-08-08" },
  { 用户名: true, Hash速率峰值: 354.5 +'&nbsp;'+'<strong>Ph/s</strong>', 已加入: "2017-08-08"}
];

export default {
  data() {
    return {
      items: items
    };
  }
};
</script>
