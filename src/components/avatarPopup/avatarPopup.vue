<template>
<mt-popup
  v-model="popupVisible"
  pop-transition='popup-fade'	 @click.native="close" >
  <div class="avatar-wrap">
    <img :src="pic" alt="">
  </div>
</mt-popup>
</template>
<script>
import Vue from 'vue'
import { Popup } from 'mint-ui';

Vue.component(Popup.name, Popup);
export default {
  props:{
    avatar: String,
    popupVisible:Boolean,
    closePopup: Function
  },
  data(){
    return{
      pic: null
    }
  },
  mounted(){
    console.log(this.avatar)
    this.pic=this.avatar;
  },

  methods:{
    close: function(){
      this.closePopup(false)
    }
  }
}
</script>

<style lang="less" scoped>
.mint-popup{
  height: 100%;
  width: 100%;
  background: #000;
}
.mint-popup{
  top:0;
  left: 0;
  transform: translate3d(0,0,0)
}
.avatar-wrap{
  position: relative;
  width: 100%;
  height: 100%;
}
img{
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  display: block;
  width: 100%
}
</style>
