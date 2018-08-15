<template>
  <mt-tabbar v-model="selected">
      <mt-tab-item  id="message">
        <div @click="toLink(0)">
          <icon width="25" height="25" name="message"></icon>  
          <div>消息</div> 
        </div>
      </mt-tab-item>
      <mt-tab-item id="relative">
       <div  @click="toLink(1)">
         <icon width="25" height="25" name="relative"></icon>  
        <div>联系人</div> 
       </div>
      </mt-tab-item>
      <mt-tab-item  id="look">
       <div @click="toLink(2)">
         <icon width="25" height="25" name="look"></icon>  
        <div>看点</div> 
       </div>
      </mt-tab-item>
      <mt-tab-item  id="dong">
        <div @click="toLink(3)">
          <icon width="25" height="25" fill="#d6d6d6" name="dong"></icon>  
        <div>动态</div> 
        </div>
      </mt-tab-item>
    </mt-tabbar>
</template>
<script>
import Vue from "vue";
import { Tabbar, TabItem } from "mint-ui";

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
export default {
   data(){
    return {
      selected: "",
      url:[
        '/index/message',
        '/index/relative',
        '/index/look',
        '/index/dong'
      ]
    }
  },
  methods:{
    toLink: function(index){
      console.log(index)
      const _this = this
      this.$router.push(_this.url[index])
    }
  }
}
</script>
<style>
</style>

