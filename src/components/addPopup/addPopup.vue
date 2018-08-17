<template>
  <mt-popup
  v-model="isAdd"
  popup-transition="popup-fade" :modal="false">
  <div class="search-wrap">
    <div :class="['search',{'addwidth':!isShow}]">
      <icon name="search" width="20" height="20"></icon>
      <mt-field v-cfocus="isShow" v-model="friend" placeholder="搜索朋友" :disableClear='true'>
      </mt-field>
    </div>
    <mt-button :class="['cancel',{isshow:isShow}]" @click.native="cclose"   type="primary" size="small">取消</mt-button>  
  </div>
   <div class="my-account" v-if="!result">
        我的逗比号:{{douAccount}}
    </div>
    <div class="choose">
      <div  v-if="friend.length&&!result" @click="searchFriend" class="search-result">
        搜索结果：<span>{{friend}}</span>
      </div>
      <div class="result" v-if="result">
        该用户不存在
      </div>
    </div>
    <div>

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
    isAdd: Boolean,
    closeFriend: Function,
  },
  data(){
    return{
      friend:"",
      isShow:true,
      result:false
    }
  },
  methods:{
    cclose: function(ev){
      console.log(ev)
      this.closeFriend(false)
    },
    searchFriend:function(){
      const _this = this
      this.$http({
        method: 'GET',
        url: '/api/addFriend',
        params:{
          friendname: _this.friend,
          requestname: _this.douAccount
        }
      }).then(res=>{
        let data = res.data
        console.log(data)
        if(data.success){
          console.log(res)
        }else{
          this.result = true
        }
      })
    }
  },
  computed:{
    douAccount:function(){
      return this.$store.state.userInfo.username
    }
  },
  directives:{
    cfocus:{
      bind: function(el, bind, vnode){
        let inputNode = el.querySelector('input')
        console.log(bind)
        inputNode.onfocus = function(){
          vnode.context[bind.expression] = false
        }
        // inputNode.onblur = function(){
        //   vnode.context[bind.expression] = true
        // }
      }
    }
  },
}
</script>

<style lang="less" scoped>
.choose{
  height: 100px;
}
.result{
  color: #666;
  font-size: 13px;
  text-align: center;
  line-height: 100px;
}
.search-result{
  color: #000;
  width: 80%;
  padding: 10px;
  margin: 0 auto;
  span{
    color: #26a2ff;
  }
}
.cancel{
  &.isshow{
    display: none
  }
}
.my-account{
  color: #666;
  font-size: 12px;
  text-align: center;
  line-height: 30px;
}
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
  width: 96%;
  overflow: hidden;
  margin: 5px auto;
  background: #fff;
  border-radius: 3px;
  height: 25px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &.addwidth{
    width: 80%;
  };
  span{
    margin-left: 3px;
    font-size: 15px;
    line-height: 25px;
    color: #bfbfbf
  }

}
.mint-cell{
  width: 100%;
  min-height: 27px;
}
  .mint-cell-wrapper{
    height: 25px;
    margin: 0;
    padding: 0;
    input{
      background-color: #fff;
      width: 100%;
    }
  }
</style>
