
import { MockMethod } from 'vite-plugin-mock';

import Mock from 'mockjs'

let data = Mock.mock({
    'list|1-100': [{
        'id|+1': 1,
        'value': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quaerat, repellat excepturi totam dicta consequuntur debitis deleniti perferendis, suscipit magnam itaque assumenda facere rerum iusto, quidem maiores saepe. Rerum, repudiandae?'
    }]
})

export default [
    {
        url: '/api/getVList',
        method: 'get',
        response: () => (data.list)
    }
] as MockMethod[]

