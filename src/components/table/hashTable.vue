<template>
        <b-card :header="caption">
            
        <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage">
          <template slot="status" slot-scope="data">
            <b-badge :variant="getBadge(data.item.status)">{{data.item.status}}</b-badge>
          </template>
        </b-table>
        <nav>
          <b-pagination :total-rows="getRowCount(items)" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
        </nav>
      </b-card>
</template>

<script>
/**
   * Randomize array element order in-place.
   * Using Durstenfeld shuffle algorithm.
   */

export default {
  props: {
    caption: {
      type: String,
      default: "Hash Rate Proof"
    },
    hover: {
      type: Boolean,
      default: false
    },
    striped: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
      items: [
        {
          时段末: "2012/01/01",
          已证实的平均Hash速率: "1.967 Ph/s",
          网络难度: "Member",
          最高以达难度值: "Active",
          "Proof Data": "11111.zip"
        },
        {
          时段末: "2012/01/01",
          已证实的平均Hash速率: "1.967 Ph/s",
          网络难度: "Staff",
          最高以达难度值: "Banned",
          "Proof Data": "11111.zip"
        },
        {
          时段末: "2012/01/01",
          已证实的平均Hash速率: "1.967 Ph/s",
          网络难度: "Admin",
          最高以达难度值: "Inactive",
          "Proof Data": "11111.zip"
        },
        {
          时段末: "2012/01/01",
          已证实的平均Hash速率: "1.967 Ph/s",
          网络难度: "Member",
          最高以达难度值: "Pending",
          "Proof Data": "11111.zip"
        },
        {
          时段末: "2012/01/01",
          已证实的平均Hash速率: "1.967 Ph/s",
          网络难度: "Staff",
          最高以达难度值: "Active",
          "Proof Data": "11111.zip"
        },
        {
          时段末: "2012/01/01",
          已证实的平均Hash速率: "1.967 Ph/s",
          网络难度: "Member",
          最高以达难度值: "Active",
          "Proof Data": "11111.zip"
        },
        {
          时段末: "2012/01/01",
          已证实的平均Hash速率: "1.967 Ph/s",
          网络难度: "Staff",
          最高以达难度值: "Banned",
          "Proof Data": "11111.zip"
        },
        {
          时段末: "2012/01/01",
          已证实的平均Hash速率: "1.967 Ph/s",
          网络难度: "Admin",
          最高以达难度值: "Inactive",
          "Proof Data": "11111.zip"
        },
        {
          时段末: "2012/01/01",
          已证实的平均Hash速率: "1.967 Ph/s",
          网络难度: "Member",
          最高以达难度值: "Pending",
          "Proof Data": "11111.zip"
        },
        {
          时段末: "2012/01/01",
          已证实的平均Hash速率: "1.967 Ph/s",
          网络难度: "Staff",
          最高以达难度值: "Active",
          "Proof Data": "11111.zip"
        },
        {
          时段末: "2012/01/01",
          已证实的平均Hash速率: "1.967 Ph/s",
          网络难度: "Member",
          最高以达难度值: "Active",
          "Proof Data": "11111.zip"
        },
        {
          时段末: "2012/01/01",
          已证实的平均Hash速率: "1.967 Ph/s",
          网络难度: "Staff",
          最高以达难度值: "Banned",
          "Proof Data": "11111.zip"
        },
        {
          时段末: "2012/01/01",
          已证实的平均Hash速率: "1.967 Ph/s",
          网络难度: "Admin",
          最高以达难度值: "Inactive",
          "Proof Data": "11111.zip"
        },
        {
          时段末: "2012/01/01",
          已证实的平均Hash速率: "1.967 Ph/s",
          网络难度: "Member",
          最高以达难度值: "Pending",
          "Proof Data": "11111.zip"
        },
        {
          时段末: "2012/01/01",
          已证实的平均Hash速率: "1.967 Ph/s",
          网络难度: "Staff",
          最高以达难度值: "Active",
          "Proof Data": "11111.zip"
        },
        {
          时段末: "2012/01/01",
          已证实的平均Hash速率: "1.967 Ph/s",
          网络难度: "Member",
          最高以达难度值: "Active",
          "Proof Data": "11111.zip"
        },
        {
          时段末: "2012/01/01",
          已证实的平均Hash速率: "1.967 Ph/s",
          网络难度: "Staff",
          最高以达难度值: "Banned",
          "Proof Data": "11111.zip"
        },
        {
          时段末: "2012/01/01",
          已证实的平均Hash速率: "1.967 Ph/s",
          网络难度: "Admin",
          最高以达难度值: "Inactive",
          "Proof Data": "11111.zip"
        },
        {
          时段末: "2012/01/01",
          已证实的平均Hash速率: "1.967 Ph/s",
          网络难度: "Member",
          最高以达难度值: "Pending",
          "Proof Data": "11111.zip"
        },
        {
          时段末: "2012/01/01",
          已证实的平均Hash速率: "1.967 Ph/s",
          网络难度: "Staff",
          最高以达难度值: "Active",
          "Proof Data": "11111.zip"
        },
        {
          时段末: "2012/01/01",
          已证实的平均Hash速率: "1.967 Ph/s",
          网络难度: "Member",
          最高以达难度值: "Active",
          "Proof Data": "11111.zip"
        },
        {
          时段末: "2012/01/01",
          已证实的平均Hash速率: "1.967 Ph/s",
          网络难度: "Staff",
          最高以达难度值: "Banned",
          "Proof Data": "11111.zip"
        },
        {
          时段末: "2012/01/01",
          已证实的平均Hash速率: "1.967 Ph/s",
          网络难度: "Admin",
          最高以达难度值: "Inactive",
          "Proof Data": "11111.zip"
        },
        {
          时段末: "2012/01/01",
          已证实的平均Hash速率: "1.967 Ph/s",
          网络难度: "Staff",
          最高以达难度值: "Active",
          "Proof Data": "11111.zip"
        },
        {
          时段末: "2012/01/01",
          已证实的平均Hash速率: "1.967 Ph/s",
          网络难度: "Member",
          最高以达难度值: "Pending",
          "Proof Data": "11111.zip"
        }
      ],
      fields: [
        { key: "时段末" },
        { key: "已证实的平均Hash速率" },
        { key: "网络难度" },
        { key: "最高以达难度值" },
        { key: "Proof Data" }
      ],
      currentPage: 1,
      perPage: 10,
      totalRows: 0
    };
  },
  methods: {
    getRowCount(items) {
      return items.length;
    }
  }
};
</script>
