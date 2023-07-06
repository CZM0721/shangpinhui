// serach的store
import {getSearchInfo} from "@/api";
// state:仓库存储数据的地方
const state={
    // 搜索数据
    searchList:{}
}

// mutations:修改state属性的唯一手段
const mutations={
    getSearchList(state,searchList){
        state.searchList=searchList
    }
}

// actions:处理action,可以书写自己业务逻辑,也可以处理异步
const actions={
    async getSearchList({commit},params){
        let result = await getSearchInfo(params);
        if (result.code === 200){
            commit("getSearchList",result.data)
        }
    }
}

const getters ={
    goodsList:state=> state.searchList.goodsList||[],
    attrsList:state=> state.searchList.attrsList||[],
    trademarkList:state=> state.searchList.trademarkList||[],
}

// 对外暴露一个Store实例对象
export default {
    state,
    mutations,
    actions,
    getters
}