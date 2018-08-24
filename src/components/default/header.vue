<template lang="html">
  <div class="heads">
    <!-- <span class="logOut"><el-button @click="loginOut">退出</el-button></span>     -->
    <el-button @click="loginOut" class="logout">退出</el-button>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    name: 'myheader',
    data() {
      return {
        a: 1
      };
    },
    methods: {
      loginOut(){
        this.$router.push('/')
      }
    }
  }

</script>

<style lang="scss">


</style>
