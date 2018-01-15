<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <hash-table/>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <hash-bar/>
      </div>
    </div>
  </div>
</template>
<script>
import hashTable from '../table/hashTable.vue'
import hashBar from '../echarts/hashBar.vue'
export default {
  components :{
    hashTable,
    hashBar
  }
}
</script>
