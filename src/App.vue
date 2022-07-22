<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Axios from 'axios';
import { onMounted, reactive } from 'vue';
import { VlistConfig } from './components/vlist/index';
import Vlist from './components/vlist/index.vue'

const dataConfig:VlistConfig = reactive({
  list:[],
  itemHeight:100,
  maxVisibleHieght:500,
  listCount:0
})

async function getList(){
  const { data } = await Axios.get('/api/getUserInfo')
  dataConfig.listCount = data.length
  dataConfig.list = data
}
onMounted(() => {
  getList()
})

</script>

<template>
  <div>
    <Vlist :data="dataConfig"/>
  </div>
</template>

<style scoped>

</style>
