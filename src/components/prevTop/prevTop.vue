<template>
  <mt-header fixed  :title="title">
    <router-link to="/" slot="left">
      <mt-button icon="back">返回</mt-button>
    </router-link>
  </mt-header>
</template>
<script>
import Vue from 'vue'
import {Header} from 'mint-ui'
Vue.component(Header.name, Header);
export default {
  props:{
    title:{
      type: String,
      default: '标题'
    }
  }
};
</script>
<style lang="less">
</style>
