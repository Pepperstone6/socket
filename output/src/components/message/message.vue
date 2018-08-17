<template>
  <div>
    <message-header></message-header>
    <div class="search">
      <icon name="search" width="20" height="20"></icon><span>搜索</span>  
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import MessageHeader from 'com/messageHeader/messageHeader'
import { Search } from 'mint-ui';
Vue.component(Search.name, Search);
export default {
  components:{
    MessageHeader
  }
}
</script>
<style lang="less" scoped>
.search{
  width: 98%;
  margin: 5px auto;
  background: #F0F0F0;
  border-radius: 3px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  span{
    margin-left: 3px;
    font-size: 15px;
    line-height: 25px;
    color: #bfbfbf
  }
}
</style>
