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
        props:{
            list:Array
        },
        data(){
            return {
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
                this.list.forEach((item,index)=>{
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