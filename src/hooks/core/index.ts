/**
 * 节流
 * @param fn 需要被包装的函数
 * @param time 等待的时间
 * @returns 
 */
function useThrottleFn(fn: Function, time: number) {
    let prevTime = 0
    return function (this: any, ...args: any[]) {
        let nowTime = Date.now()
        if (nowTime - prevTime >= time) {
            fn.apply(this, args)
            prevTime = nowTime
        }
    }
}
/**
 * 防抖
 * @param fn 需要被包装的函数
 * @param delay 需要延迟的时间
 * @returns 
 */
function useDebounceFn(fn: Function, delay: number) {
    let timer: any = null
    return function (this: any, ...args: any[]) {
        if (timer) {
            clearTimeout(timer)
            timer = null
        }
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}


export { useThrottleFn, useDebounceFn }