<template>
  <div class="nav">
    <router-link to="/money" >记账
    <svg>
      <use xlink:href="#label"/>
    </svg>
    </router-link>
    |
    <router-link to="/Labels" >标签</router-link>
    |
    <router-link to="/Statistics" >统计</router-link>
  </div>
</template>

<script lang="ts">
import x from '@/assets/icons/label.svg';

console.log(x);
export default {
name: "Nav"
}
</script>

<style lang="scss" scoped>
.nav{border: 1px solid #ff0000;}
</style>