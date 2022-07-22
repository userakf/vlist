<template>
    <div class="item">
        <p> {{ msg }} </p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    msg: string
}>()
</script>

<style scoped>
.item {}

p {
    color: #efefef;
}
</style>