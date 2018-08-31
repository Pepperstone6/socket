<template>
  <div>
    <prev-top :title="friendnickname"></prev-top>
    <div class="message-wrap">
      <div class="ul">
      
      </div>
      <div class="tool">
          <van-cell-group class="message-box">
            <van-field
              v-sendMessage="message"
              v-model="message"
              type="textarea"
              rows="1"
              :border='false'
              autosize
              icon="user"
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

// import AgreeFriendInfo from 'com/agreeFriendInfo/agreeFriendInfo'
Vue.use(Field);
Vue.use(CellGroup);
export default {
  data() {
    return {
      friendnickname: "",
      friendname: '',
      message: "",
      username: '',
      socket: ""
    };
  },
  methods: {
    send: function() {
       const _this = this
       this.socket.emit(_this.username, {id: _this.socket.id, friendname:_this.friendname, msg: _this.message})
      console.log(this.socket,_this.username, _this.friendname)
      this.message = ''
    }
  },
  mounted() {
    const _this = this
    this.friendname = this.$route.params.friendname;
    this.friendnickname = this.$route.params.friendnickname;
    this.username = this.$store.state.userInfo.username
    console.log(this.socket)
    this.socket = this.$store.state.socket
      this.socket.on(this.username, function(friendname,data){
        console.log(data)
      // console.log(friendname,data, 123132)
    })
  },
  components: {
    PrevTop
  },
  directives: {
    sendMessage: {
      bind: function(el, bind, vnode) {
        let textareaNode = el.querySelector("textarea");
        textareaNode.onkeydown = function(ev) {
          if (ev.keyCode == 13 && ev.ctrlKey) {
            vnode.context[bind.expression] = this.value + "\n";
          } else if (ev.keyCode === 13) {
            ev.preventDefault();
            if (vnode.context.send) {
              vnode.context.send();
            }
          }
        };
      }
    }
  }
};
</script>

<style lang="less" >
.tool {
  background: #d6d6d6;
  padding: 5px 0;
  box-sizing: border-box;
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
  }
}
.message-wrap {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
