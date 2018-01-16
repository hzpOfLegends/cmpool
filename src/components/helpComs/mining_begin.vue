<template>
  <div>
      <div class="col-lg-12">
        <h3>欢迎来到我们的帮助中心</h3>
        <p>挖矿者您好</p>
        <p>我们的帮助中心正是您可以学到怎样 <b-link to="">开始挖矿</b-link> ，<b-link>挖矿故障排除</b-link> ，或仅 <b-link>了解更多</b-link> 在我们矿池挖矿相关内容的地方。我们也感谢任何 <b-link>反馈</b-link> 。</p>
        <p>同样也是 <b-link>告诉我们</b-link> 您的好点子</p>
      </div>
      <div class="row">
          <div class="col-lg-6" v-for="items in item">
              <b-link class="box">
                  {{items.title}}
                  <br>
                  <span>{{items.subhead}}</span>
                  <i v-bind:class="items.icons"></i>
              </b-link>
          </div>
          <div class="col-lg-12">
              <b-link class="box">
                  开发提议
                  <br>
                  <span>参与</span>
                  <i class="fa fa-fw fa-code"></i>
              </b-link>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  data(){
      return {
          item:[
              {icons:"fa fa-fw fa-graduation-cap",title:"新手导航",subhead:"想要看看大局？"},
              {icons:"fa fa-fw fa fa-binoculars",title:"故障排除",subhead:"有什么地方出错了吗？"},
              {icons:"fa fa-fw fa-btc",title:"报酬历史",subhead:"您获得多少"},
              {icons:"fa fa-fw fa-question-circle",title:"常见问题",subhead:"常见问题"}
          ]
      }
  }
}
</script>

<style>
h3{
    font-weight: 600;
}
.box {
  position: relative;
  display: block;
  height: 200px;
  width: 100%;
  overflow: hidden;
  margin: 15px 0;
  padding: 15px;
  border: 1px solid silver;
  color: black;
  font-size: 3rem;
  text-decoration: none;
  transition: border 150ms linear;
}
.box:hover {
  text-decoration: none;
}
.box:hover i{
    color:rgb(32, 168, 216);
    right: -2rem;
    bottom:-2rem;
}
.box span {
  font-size: 1rem;
  opacity: 0.7;
}
.box i {
  position: absolute;
  font-size: 7rem;
  right: -2.2rem;
  bottom: -2.2rem;
  -webkit-transform: rotate(-15deg);
  -moz-transform: rotate(-15deg);
  -ms-transform: rotate(-15deg);
  -o-transform: rotate(-15deg);
  transform: rotate(-15deg);
  opacity: 0.2;
  -webkit-transition: all 150ms ease-in-out;
  -moz-transition: all 150ms ease-in-out;
  -o-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
}
</style>

