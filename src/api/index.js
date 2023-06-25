import requests from "@/api/request";

// 三级分类api地址
// /api/product/getBaseCategoryList
export const getBaseCategoryList = () => requests({url:'/product/getBaseCategoryList',method:'get'})