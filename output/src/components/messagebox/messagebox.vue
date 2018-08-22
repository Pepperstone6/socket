<template>
  <div>
    <prev-top :title="friendnickname"></prev-top>
    <div class="message-wrap">
      <div class="ul">
      
      </div>
      <div class="tool">
          <van-cell-group class="message-box">
            <van-field
              v-model="message"
              type="textarea"
              rows="1"
              :border='false'
              autosize
            />
          </van-cell-group>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import io from "socket.io-client";
import PrevTop from "com/prevTop/prevTop";
import { Field, CellGroup } from "vant";

Vue.use(Field);
Vue.use(CellGroup);
export default {
  data() {
    return {
      friendnickname: "",
      message: ""
    };
  },
  mounted() {
    let friendname = this.$route.params.friendname;
    this.friendnickname = this.$route.params.friendnickname;
    let socket = io("http://localhost:3001");
  },
  components: {
    PrevTop
  }
};
</script>

<style lang="less" >
.tool {
  background: #d6d6d6;
  padding: 5px 0;
  .van-cell-group {
    margin: 0 2%;

    padding: 0;
    overflow: hidden;
  }
  .van-cell {
    padding: 0;
  }
  .message-box {
    textarea {
      border-radius: 3px;
      padding: 5px 3px;
      font-size: 14px;
      line-height: 20px;
      box-sizing: border-box;
      caret-color: #26a2ff;
    }
    textarea:focus {
      border: 2px solid #26a2ff;
      box-sizing: border-box;
    }
  }
}
.message-wrap {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
