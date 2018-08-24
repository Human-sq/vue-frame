<template lang="html">
  <el-container>
    <el-aside style="width:200px"><router-view name="nav"></router-view></el-aside>
    <el-container>
      <el-header style="height: 50px;"><router-view name="header"></router-view></el-header>
      <el-main style="background-color: rgb(244, 244, 244);"><router-view name="content"></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'headd',
  data() {
      return {a:1};
  },
  methods: {
  }
}
</script>

<style lang="scss">


</style>