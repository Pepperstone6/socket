<template>
  <div class="header">
      <div class="icon-wrap">
        <img src="@/assets/images/avatar.jpg" alt="">
      </div>
      <h2>消息</h2>
      <div>123</div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="less">
.header{
  width: 100%;
  height: 50px;
  background: #26a2ff;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  h2{
    color: #fff;
    font-size: 18px;
    font-weight: normal;
  }
  .icon-wrap{
    width: 40px;
    height: 40px;
    border-radius: 20px;
    box-sizing: border-box;
    overflow: hidden;
    img{
      width: 100%;
    }
  }
}
</style>

