<template>
    <div>
      <ul class="top-nav">
          <li><router-link exact to="/">首页</router-link></li>
          <li><router-link to="/topic">榜单</router-link></li>
          <li><router-link to="/mine">我的</router-link></li>
          <li><router-link to="/search">搜索</router-link></li>
      </ul>
    </div>
  </template>
  
<script>
export default {
  
}
</script>
<style scoped lang="less">
.top-nav{
  display:flex;
  background:#fff;
  li{
    flex:1;
    text-align:center;
    padding-top:10px;
    a{
      display:block;
      padding-bottom:8px;
    }
    .active{
      border-bottom:2px solid #ff0000;
    }
  }
}
// 这段代码是一个使用Less预处理语言编写的CSS样式表。Less是一种动态样式表语言，它扩展了CSS的语法，使CSS具有更多的功能，如变量、混合（mixin）、函数等。
// 定义了一个CSS样式，适用于一个类名为top-nav的元素。这个元素使用flex布局，背景色为白色。
// 在这个导航条中，每个列表项（<li>）都设置为等分空间，文本居中对齐，并且每个列表项内的链接（<a>）以块级显示，底部有8像素的内边距。
// 对于当前激活的列表项，还为其添加了一个红色的底部边框。
</style>