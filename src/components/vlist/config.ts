import { ListItem } from "../../api/sys/model/vlistModel";

/**
 * 虚拟列表配置参数
 */
export interface VlistConfig {
    // 数据源
    list: ListItem[],
    // 每一项高度
    itemHeight: number,
    // 容器最大可视高度
    maxVisibleHieght:number,
    // 数据真实高度
    listCount:number
}
