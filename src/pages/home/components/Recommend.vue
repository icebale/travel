<template>
    <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom"  v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
    </div>
</template>

<script>
export default {
    name:"HomeRecommend",
    data(){
        return {
            recommendList:[{
                id:"001",
                imgUrl:"http://img1.qunarzz.com/sight/p0/1507/36/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_200x200_0938a8f2.jpg",
                title:"北京野生动物园",
                desc:"北京野生动物园集动物保护、野生动物驯养繁殖及科普教育为一体，汇集了世界各地珍稀野生动物200多种10000余头。"
            },{
                id:"002",
                imgUrl:"http://img1.qunarzz.com/sight/p0/1507/36/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_200x200_0938a8f2.jpg",
                title:"北京野生动物园",
                desc:"北京野生动物园集动物保护、野生动物驯养繁殖及科普教育为一体，汇集了世界各地珍稀野生动物200多种10000余头。"
            },{
                id:"003",
                imgUrl:"http://img1.qunarzz.com/sight/p0/1507/36/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_200x200_0938a8f2.jpg",
                title:"北京野生动物园",
                desc:"北京野生动物园集动物保护、野生动物驯养繁殖及科普教育为一体，汇集了世界各地珍稀野生动物200多种10000余头。"
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
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff 
</style>