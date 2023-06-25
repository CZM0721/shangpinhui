// home的store
import {getBaseCategoryList} from "@/api";
// state:仓库存储数据的地方
const state={
    categoryList:[]
}

// mutations:修改state属性的唯一手段
const mutations={
    getAnvList(state,categoryList){
        state.categoryList = categoryList
    }
}

// actions:处理action,可以书写自己业务逻辑,也可以处理异步
const actions={
    async getAnvList({commit}) {
        let result = await getBaseCategoryList()
        if (result.code === 200){
            commit('getAnvList',result.data)
        }
    }
}
const getters ={}

// 对外暴露一个Store实例对象
export default {
    state,
    mutations,
    actions,
    getters
}