<template>
    <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom"  v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
         <img class="item-img" :src="item.imgUrl" /> 
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
    </div>
</template>

<script>
export default {
    name:"HomeWeenkend",
    data(){
        return {
            recommendList:[{
                id:"001",
                imgUrl:"http://img1.qunarzz.com/sight/source/1507/18/2d554e22faa25f.jpg_r_640x214_2a966a54.jpg",
                title:"爱上庄园",
                desc:"庄园让臭美的你秒变白富美，高富帅"
            },{
                id:"002",
                imgUrl:"http://img1.qunarzz.com/sight/source/1507/18/2d554e22faa25f.jpg_r_640x214_2a966a54.jpg",
                title:"爱上庄园",
                desc:"庄园让臭美的你秒变白富美，高富帅"
            },{
                id:"003",
                imgUrl:"http://img1.qunarzz.com/sight/source/1507/18/2d554e22faa25f.jpg_r_640x214_2a966a54.jpg",
                title:"爱上庄园",
                desc:"庄园让臭美的你秒变白富美，高富帅"
            }]
        }
    }
}
</script>

<style lang="stylus" scoped>
 @import '~styles/mixins.styl'
.title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
.item-img-wrapper
    overflow :hidden
    height:0
    padding-bottom: 37.4375%
    .item-img
      width: 100%
.item-info
    padding: .14rem .2rem .2rem .2rem
    min-width: 0
    .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
    .item-desc
        line-height: .4rem
        color: #616161
        ellipsis()
</style>