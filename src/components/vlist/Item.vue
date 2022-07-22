<template>
    <div class="infinite-list-item" :style="{ height:height + 'px' }">
        <p><strong> id: {{ id }}</strong> value: {{ value }} </p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    value: string,
    id:number,
    height:number | undefined
}>()
</script>

<style scoped>
.infinite-list-item {
    width: 500px;
}

p {
    color: #efefef;
    margin: 0;
}
</style>