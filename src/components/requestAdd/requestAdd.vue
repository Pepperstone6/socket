<template>
  <div id="requestAdd">
    <prev-top title="添加通讯录"></prev-top>
    <div class="form-wrap">
      <div class="hint">
        你需要发送验证申请，等对方通过
      </div>
      <mt-field attr="{autofocus:autofocus}" ></mt-field>
      <mt-button  type="primary" size="large" @click.prevent="fly">发送</mt-button>
    </div>
  </div>
</template>

<script>
import PrevTop from 'com/prevTop/prevTop'
import Vue from 'vue'
import {Field, Button} from 'mint-ui'
Vue.component(Button.name, Button)
Vue.component(Field.name, Field)
export default {
  mounted(){

  },
  components:{
    PrevTop
  }
}
</script>

<style>
#requestAdd{
  overflow: hidden;
  width: 100%;
  height:100%;
}
.hint{
  color: #666;
  font-size: 12px;
  padding-left: 20px;
}
.form-wrap{
  /* margin-top: 50px; */
  width: 90%;
  margin: 50px auto 0;
}
.fly{
  width: 90%;
  margin: 50px auto 0;
}
</style>
