<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import axios from 'axios'
import { onMounted } from 'vue'
import Vlist from './components/vlist/index.vue'

onMounted(() => {
  axios.get('/api/getUserInfo').then(res => { console.log(res.data) })
})
</script>

<template>
  <div>
    <Vlist />
  </div>
</template>

<style scoped>

</style>
