<template>
  <div>
    <b-table :sort-by.sync="sortBy"
             :sort-desc.sync="sortDesc"
             :items="items"
             :fields="fields">
    </b-table>
    
  </div>
</template>
<script>
export default {
  data () {
    return {
      sortBy: 'age',
      sortDesc: false,
      fields: [
        { key: 'Blockchain投票意向', sortable: true },
        { key: '用户', sortable: true },
        { key: "%", sortable: true },
        { key: 'Hash速率', sortable: false },
        { key: '"%"', sortable: false },
        { key: '描述', sortable: false }
      ],
      items: [
        { Hash速率: '1.036Eh/s', '%': 40, 用户: 'Dickerson', Blockchain投票意向: 'Macdonald',"%":'40%',描述:'偏好Bitcoin core当前规定的用户=他们的hash速率用于挖Bitcoin Core矿区。'},
        { Hash速率: '1.036Eh/s', '%': 21, 用户: 'Larsen', Blockchain投票意向: 'Shaw' ,"%":'40%',描述:'没有任何偏好的用户=他们的hash速率按比例分散分配给所有不同矿区大小的提议'},
        { Hash速率: '1.036Eh/s', '%': 89, 用户: 'Geneva', Blockchain投票意向: 'Wilson' ,"%":'40%',描述:'没有任何偏好的用户=他们的hash速率按比例分散分配给所有不同矿区大小的提议'},
        { Hash速率: '1.036Eh/s', '%': 38, 用户: 'Jami', Blockchain投票意向: 'Carney',"%":'40%' ,描述:'没有任何偏好的用户=他们的hash速率按比例分散分配给所有不同矿区大小的提议'}
      ]
    }
  }
}
</script>
