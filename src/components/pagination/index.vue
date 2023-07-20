<template>
  <div class="pagination">
<!--    <h1>{{ startAndEnd }}</h1>-->
    <button :disabled="pageNo===1" @click="$emit('currentPage',pageNo-1)">上一页</button>
    <button v-show="pageNum.start>1" @click="$emit('currentPage',1)">1</button>
    <button v-show="pageNum.start>2">.....</button>

    <!-- 中间连续页码的地方:v-for、数组、对象、数字、字符串 -->
    <button v-for="page in pageNum.end" :key="page" :class="{active:pageNo==page}"
            @click="$emit('currentPage',page)" v-if="page >= pageNum.start">{{ page }}</button>

    <button v-show="pageNum.end<pageTotal-1">......</button>
    <button v-show="pageNum.end<pageTotal" @click="$emit('currentPage',pageTotal)">{{ pageTotal }}</button>

    <button :disabled="pageNo===pageTotal" @click="$emit('currentPage',pageNo+1)">下一页</button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "pagination",
  /**
   * pageNo:当前页数
   * pageSize: 每页展示几条数据
   * total: 总条数
   * continues: 连续页码数
   */
  props:['pageNo','pageSize','total','continues'],
  computed:{
    // 总页码
    pageTotal(){
      return Math.ceil(this.total/this.pageSize)
    },

    // 连续页码
    pageNum(){
      const {pageNo,pageTotal,continues} = this
      let start = 0
      let end = 0
      if(pageTotal<continues){
        start = 1
        end = pageTotal
      }else {
        start = pageNo-parseInt(continues/2)
        end = pageNo+parseInt(continues/2)
        if (start<1){
          start = 1
          end = continues
        }
        if(end>pageTotal){
          start = pageTotal-continues+1
          end = pageTotal
        }
      }
      return {start,end}
    }

  },
}
</script>

<style lang="less" scoped>
.pagination {
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }

  .active{
    background-color: skyblue;
  }
}
</style>