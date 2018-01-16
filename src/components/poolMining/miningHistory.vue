<template>
  <div class="container">
      <div class="row">
          <div class="col-lg-12">
              <min-table/>
          </div>
          <div class="col-lg-12">
              <minreward/>
          </div>
      </div>
  </div>
</template>
<script>
import minTable from '../table/miningTable.vue'
import minreward from '../echarts/minreward.vue'
export default {
  components:{
    minTable,
    minreward
  }
}
</script>

