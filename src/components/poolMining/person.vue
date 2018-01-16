<template>
  <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h4>名人堂</h4>
          <p>根据hash速率和发现的矿区排出的前50名</p>
        </div>
        
      </div>
      <div class="row">
        <div class="col-lg-6">
          <person-table1/>
        </div>
        <div class="col-lg-6">
          <person-table2/>
        </div>
      </div>
  </div>
</template>
<script>
import personTable1 from '../table/personTable1.vue'
import personTable2 from '../table/personTable2.vue'

export default {
  components:{
    personTable1,
    personTable2
  }
}
</script>

<style>
h4{
  font-weight: 600;
}
</style>

