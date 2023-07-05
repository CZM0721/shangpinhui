import Mock from 'mockjs';
import banner from './banner.json';
import floor from "./floor";

// mock数据：第一个参数是请求地址；第二个参数是请求数据
Mock.mock('/mock/banner',{data: banner, code: 200})
Mock.mock('/mock/floor',{data: floor, code: 200})