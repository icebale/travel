<template>
    <div class="wrapper">
       <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
            <!-- slides -->
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" :alt="item.id">
            </swiper-slide>
            
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
    
</template>

<script>
 export default {
    name: 'HomeHeader',
    data () {
      return {
        swiperOption: {
         pagination:'.swiper-pagination',
         loop:true
        },
        swiperList:[{
            id:'0001',
            imgUrl:'https://imgs.qunarzz.com/piao/fusion/1707/3f/2bb116feb72c5002.jpg_890x330_ef323aff.jpg'
        },{
            id:'0002',
            imgUrl:'https://imgs.qunarzz.com/piao/fusion/1803/30/cea146e3d2eda002.jpg_890x330_f72cb574.jpg'
        },{
            id:'0003',
            imgUrl:'https://imgs.qunarzz.com/piao/fusion/1806/cf/eb8c2dfa395d7e02.jpg_890x330_e5cedf73.jpg'
        },{
            id:'0004',
            imgUrl:'https://imgs.qunarzz.com/piao/fusion/1510/cc/24c060215c5cc9.jpg_890x330_db363e47.jpg'
        }]
      }
    }
  }
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
      background:#fff
    .wrapper
      width:100%
      height:0
      overflow :hidden
      padding-bottom:37.08%
      background:#eee
      .swiper-img
        width:100%
   
</style>