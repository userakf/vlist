<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { onMounted, reactive } from 'vue';
import { VlistConfig } from './components/vlist/index';
import Vlist from './components/vlist/index.vue'
import { getVList } from './api/sys/vlist'

const dataConfig:VlistConfig = reactive({
  list:[],
  itemHeight:100,
  maxVisibleHieght:500,
  listCount:0
})
/** 数据初始化 */
async function initData(){
  const { data } = await getVList()
  dataConfig.listCount = data.length
  dataConfig.list = data
}
onMounted(() => {
  initData()
})

</script>

<template>
  <div>
    <Vlist :data="dataConfig"/>
  </div>
</template>

<style scoped>

</style>
