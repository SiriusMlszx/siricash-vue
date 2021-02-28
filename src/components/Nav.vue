<template>
  <nav>
    <router-link to="/Labels" class="item" active-class="selected">
      <Icon name="label"/>
    </router-link>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money"/>
    </router-link>
    <router-link to="/Statistics" class="item" active-class="selected">
      <Icon name="statistic"/>
    </router-link>
  </nav>
</template>

<script lang="ts">


export default {
name: "Nav"
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
nav{
  @extend %outerShadow;
  display: flex;
  flex-direction: row;
  font-size: 12px;
> .item {
  padding: 15px 0;
  width:33.33333%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #FF879D;
  .icon{

    width: 32px;
    height: 32px;
  }
}
  > .item.selected{
    color: #FF2E53;
  }
}
</style>