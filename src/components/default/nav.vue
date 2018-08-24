<template lang="html">
  <div class="nav">
    <div class="logo">
      <a href="#/admin"><p>集慧</p></a>
    </div>
    <el-menu
      :default-active="active"
      class="navBar"
      :router='false'
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="/product">
        <i class="el-icon-edit-outline"></i>
        <span slot="title">商品信息</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group title="分组1">
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">商品信息</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="/examine">
        <i class="el-icon-search"></i>
        <span slot="title">订单审核</span>
      </el-menu-item>
      <el-menu-item index="/admin/user">
        <i class="iconfont icon-people" style="margin-right: 5px;text-align: center;font-size: 24px;"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'mynav',
  data() {
    return {
      active: this.$route.path
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  created(){

  }
}
</script>

<style lang="scss">

</style>
