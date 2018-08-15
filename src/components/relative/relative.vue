<template>
  <div>
    <div class="relative-header">
      <h2>通讯录</h2>
    </div>
    <div class="search">
      <icon name="search" width="20" height="20"></icon><span>搜索</span>  
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="less">
.relative-header{
  width: 100%;
  height: 50px;
  background:#26a2ff;
  overflow: hidden;
  h2{
    font-size: 18px;
    color: #fff;
    line-height: 50px;
    margin: 0 auto;
    font-weight: normal;
    text-align: center;
  }
}
.search{
  width: 98%;
  margin: 5px auto;
  background: #F0F0F0;
  border-radius: 3px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  span{
    margin-left: 3px;
    font-size: 15px;
    line-height: 25px;
    color: #bfbfbf
  }
}
</style>
