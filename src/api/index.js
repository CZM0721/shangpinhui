import requests from "@/api/request";
import mockAjax from "@/api/mockAjax";

// 三级分类api地址
// /api/product/getBaseCategoryList
export const getBaseCategoryList = () => requests({url:'/product/getBaseCategoryList',method:'get'})

// 轮播图数据
export const getBannerList = () => mockAjax({url:'/banner',method:'get'})

export const getFloorList = ()=> mockAjax({url:'/floor',method:'get'})

//获取搜索模块数据
export const getSearchInfo = (params)=> requests({url:'/list',method:'post',data:params})
