<template>
    <div class="header">
      <div class="header-left">
          <div class="iconfont back-icon">&#xe624;</div>
      </div>
      <div class="header-input">
          <span class="iconfont">&#xe632;</span>
          输入城市/景点/游玩主题
      </div>
      <router-link to="/city">
      <div class="header-right">
          {{this.city}}
          <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
        </router-link>
    </div>
    
</template>

<script>
export default {
    name:'HomeHeader',
    props:{
        city:String
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    .header
      display:flex
      background :$bgColor
      color:#fff
      line-height:$headerHeight
      .back-icon
        font-size:.4rem
    .header-left
      float:left
      width:.64rem
      text-align:center
    .header-input
      flex:1
      background:#fff
      height: 0.64rem
      line-height:0.64rem
      margin-top:.12rem
      margin-left:.2rem
      padding-left:.2rem
      border-radius:.1rem
      color :#ccc
    .header-right
      float:right
      width:1.24rem
      text-align:center
      color:#fff
      .arrow-icon
        font-size:.24rem
        margin-left:-0.04rem
</style>