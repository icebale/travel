<template>
    <div class="icons">
        <div class="icon"></div>
        <div class="icon"></div>
        <div class="icon"></div>
        <div class="icon"></div>
        <div class="icon"></div>
        <div class="icon"></div>
        <div class="icon"></div>
        <div class="icon"></div>
    </div>
</template>

<script>
    export default {
        name:"HomeIcons"
    }
</script>

<style lang="stylus" scoped>
  .icons
    overflow :hidden
    width:100%
    height:0
    padding-bottom:50%
    background:#eee
    .icon
      width:25%
      float:left
      padding-bottom:25%
      background:red
</style>
