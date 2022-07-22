<template>
    <div class="infinite-list-container" ref="infiniteListRef" :style="{ height: data.maxVisibleHieght + 'px' }">
        <div :style="styleObj">
            <Item :height="data.itemHeight" :value="it.value" :id='it.id' v-for="it in visibList" :key="it.id" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useThrottleFn } from '../../hooks/core'
import { VlistConfig } from './index'
import Item from './Item.vue'
// 1.获取传入数据和参数配置

/**
 * 父传参
 */
const props = defineProps<{
    data: VlistConfig
}>()
// 2.根据配置计算最大显示个数

/** 计算最大可视区域项目个数 */
let maxVisibleCount = computed(() => {
    return ~~(props.data.maxVisibleHieght / props.data.itemHeight) + 2
})
// 3.定义所需变量根据最大显示个数计算结束下标，padding值

/** 滚动实例 */
const infiniteListRef = ref<HTMLElement>()
/** 截取列表的开始下标 */
let startIdx = ref(0)
/** 截取列表的结束下标 */
let endIdx = computed(() => {
    return startIdx.value + maxVisibleCount.value
})
/**
 * 容器动态样式
 * 计算padding，模拟全渲染
 */
const styleObj = computed(() => {
    return {
        paddingTop: startIdx.value * props.data.itemHeight + 'px',
        paddingBottom: (props.data.listCount - (endIdx.value + 1)) * props.data.itemHeight + 'px',
    }
})

// 4.根据下标计算出渲染列表

/** 渲染可视列表 */
let visibList = computed(() => {
    return props.data.list.slice(startIdx.value, endIdx.value)
})

// 5.绑定滚动事件计算开始下标
// const throttledFn = useThrottleFn(function (this: any) {
//     startIdx.value = ~~(this.scrollTop / props.data.itemHeight)
// }, 500)

/** 滚动计算开始坐标 */
onMounted(() => {
    infiniteListRef.value?.addEventListener('scroll', function (this: any) {
        startIdx.value = ~~(this.scrollTop / props.data.itemHeight)
    })
})

</script>

<style scoped>
.infinite-list-container {
    overflow: scroll;
}
</style>