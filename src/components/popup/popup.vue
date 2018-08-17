<template>
  <mt-popup
  v-model="popupVisible"
  popup-transition="popup-fade" :modal="false">
  <div class="search-wrap">
    <div class="search">
      <icon name="search" width="20" height="20"></icon>
      <mt-field @keydown="searchFriend" v-model="friend" placeholder="搜索朋友" :disableClear='true'>
      </mt-field>
      <div>
      
      </div>
    </div>
    <mt-button @click="close" class="cancel" type="primary" size="small">取消</mt-button>  
  </div>
</mt-popup>
</template>

<script>
import Vue from 'vue'
import { Popup, Field, Button} from 'mint-ui';
Vue.component(Field.name, Field);
Vue.component(Button.name, Button);
Vue.component(Popup.name, Popup);
export default {
  props:{
    popupVisible: Boolean,
    closePopup: Function,
  },
  data(){
    return{
      friend:""
    }
  },
  methods:{
    close: function(){
      this.closePopup(false)
    },
    searchFriend:function(){
      this.$http({
        method: 'GET',
        
      })
    }
  }
}
</script>

<style lang="less" scoped>
.search-wrap{
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #26a2ff;
  overflow: hidden;
  position: relative;
  // .cancel{
  //   position: absolute;
  //   right: 0;
  
  // }
    .mint-button--small{
      height:25px;
      border-radius: 5px;
      // background-color: #fff;
      color: #fff
    }
}
.mint-popup{
  min-height: 100%;
  width: 100%;
}
.mint-popup{
  top:0;
  left: 0;
  transform: translate3d(0,0,0)
}
.search{
  width: 80%;
 overflow: hidden;
  margin: 5px auto;
  background: #fff;
  border-radius: 3px;
  height: 25px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  span{
    margin-left: 3px;
    font-size: 15px;
    line-height: 25px;
    color: #bfbfbf
  }

}
  .mint-cell-wrapper{
    height: 25px;
    margin: 0;
    padding: 0;
    input{
      background-color: #fff;
    }
  }
</style>
