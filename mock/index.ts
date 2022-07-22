import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

import vlistModule from './source/vlist'

export function setupProdMockServer(){
    createProdMockServer([...vlistModule])
}