import axios from 'axios'
import { ListItem } from './model/vlistModel'

enum Api {
    GetVList = '/api/getVList'
}

export function getVList() {
    return axios.get<ListItem[]>(Api.GetVList)
}