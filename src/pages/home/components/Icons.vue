<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" :alt="item.desc">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
           <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>

    </div>
</template>

<script>
    export default {
        name:"HomeIcons",
        data(){
            return {
                iconList:[{
                    id:"0001",
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                    desc:"景点门票"
                },{
                    id:"0002",
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
                    desc:"必游榜单"
                },{
                    id:"0003",
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png",
                    desc:"踏青赏花"
                },{
                    id:"0004",
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
                    desc:"一日游"
                },{
                    id:"0005",
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
                    desc:"动植物园"
                },{
                    id:"0006",
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png",
                    desc:"故宫"
                },{
                    id:"0007",
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png",
                    desc:"主题乐园"
                },{
                    id:"0008",
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/ed/cf572be30fc32f02.png",
                    desc:"Q+精选"
                },{
                    id:"0009",
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png",
                    desc:"演出"
                },{
                    id:"0010",
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png",
                    desc:"自然风光"
                },{
                    id:"0011",
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png",
                    desc:"名胜古迹"
                },{
                    id:"0012",
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/dd/cce1231836f10a02.png",
                    desc:"周边游"
                },{
                    id:"0013",
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png",
                    desc:"城市观光"
                },{
                    id:"0014",
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
                    desc:"游乐场"
                }],
                swiperOption: {
                    // pagination:".swiper-pagination",
                    autoplay:false,
                    loop:false
                }
            }
        },
        computed:{
            pages (){
                const pages = [];
                this.iconList.forEach((item,index)=>{
                    const page = Math.floor(index/8);
                    if(!pages[page]){
                        pages[page]=[];
                    }
                    pages[page].push(item);
                })
                return pages;
            }
        }
    }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons>>>.swiper-container
    height:0
    padding-bottom:50%
  .icon
    position:relative
    width:25%
    float:left
    height:0
    padding-bottom:25%
    overflow:hidden
    background:#fff
    .icon-img
      position:absolute
      top:0
      left:0
      right:0
      bottom:0.44rem
      box-sizing:border-box
      padding:.1rem
      .icon-img-content
        display:block
        height:100%
        margin: 0 auto
    .icon-desc
      position:absolute
      bottom:0
      left:0
      right:0
      height:0.44rem
      line-height :0.44rem
      text-align:center
      color:$darkTextColor
      ellipsis()
</style>