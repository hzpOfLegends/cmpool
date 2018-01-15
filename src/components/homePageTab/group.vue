<template>
      <div class="row wrap">
        <div class="col-lg-12">
          <h1>CMPOOL Group</h1>
          <span>HandSome Boy</span>
          <div class="picture">
            <img src="/static/img/timg.jpg" alt="">
          </div>
          <div class="personIntro row">
            <div class="col-lg-3" v-for="(items) in item">
              <ul>
                <li><img v-bind:src="items.src" alt=""></li>
                <li>{{items.name}}</li>
                <li>{{items.obligation}}</li> 
              </ul>
            </div>
          </div>
        </div>

      </div>
</template>
<script>
export default {
  data() {
    return {
      item:[
        {src:"/static/img/timg.jpg",name:"Leslie Cheung",obligation:"legendary figure"},
        {src:"/static/img/timg.jpg",name:"Leslie Cheung",obligation:"legendary figure"},
        {src:"/static/img/timg.jpg",name:"Leslie Cheung",obligation:"legendary figure"},
        {src:"/static/img/timg.jpg",name:"Leslie Cheung",obligation:"legendary figure"},
        {src:"/static/img/timg.jpg",name:"Leslie Cheung",obligation:"legendary figure"},
        {src:"/static/img/timg.jpg",name:"Leslie Cheung",obligation:"legendary figure"},
        {src:"/static/img/timg.jpg",name:"Leslie Cheung",obligation:"legendary figure"},
        {src:"/static/img/timg.jpg",name:"Leslie Cheung",obligation:"legendary figure"}
      ]
    };
  }
};
</script>

<style>
.container {
  width: 100%;
}
.wrap {
  /* padding: 50px 0; */
  width: 100%;
  text-align: center;
  margin: 0 auto;
}
.wrap .picture {
  width: 800px;
  margin: 0 auto;
}
.wrap .personIntro{
  margin-top: 50px;
  text-align: center;
}
.wrap .personIntro ul li:first-child{
    margin : 0 auto;
}
.wrap .personIntro img{
  width: 300px;

}
</style>

