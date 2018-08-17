<template>
  <mt-header fixed  :title="title">
    <a  slot="left">
      <mt-button @click.native="back" icon="back">返回</mt-button>
    </a>
  </mt-header>
</template>
<script>
import Vue from 'vue'
import {Header,Button} from 'mint-ui'
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
export default {
  props:{
    title:{
      type: String,
      default: '标题'
    }
  },
  methods: {
       back: function(){
      this.$router.go(-1)
    }
  }
};
</script>
<style lang="less">
</style>
