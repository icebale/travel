<template>
    <div>
        <div class="banner">
            <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_600x330_75d1925c.jpg" @click="handleGallaryShow" alt="">
            <div class="banner-info">
                <div class="banner-title">颐和园（AAAAA级景区）</div>
                <div class="banner-num">
                    <span class="iconfont banner-icon">&#59026;</span>11
                </div>
            </div>
        </div>
        <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose" ></common-gallary>
    </div>
</template>

<script>
    import CommonGallary from 'common/gallary/Gallary'

    export default {
        name:"DetailBanner",
        components:{
            CommonGallary
        },
        data(){
            return {
                showGallary:false,
                imgs:["http://img1.qunarzz.com/sight/p0/1408/28/e98c88b6d7472d15660d60833b2898d1.jpg_r_800x800_f6182f45.jpg","http://img1.qunarzz.com/sight/p0/1408/28/c3d9d39adcb581fff6731a86522dced8.jpg_r_800x800_ca45c72f.jpg"]
            }
        },
        methods:{
            handleGallaryShow(){
                this.showGallary=true;
            },
            handleGallaryClose(){
                this.showGallary=false;
            }
        }
     
    }
</script>

<style lang="stylus" scoped>
.banner
    overflow :hidden
    height :0
    padding-bottom :55%
    position :relative
    .banner-img
        width :100%
    .banner-info
        display :flex
        position :absolute
        left :0
        right :0
        bottom :0
        line-height :0.6rem
        color :#fff
        background-image :linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
        .banner-title
            flex :1
            font-size :.32rem
            padding : 0 .2rem
        .banner-num
            padding :0 .4rem
            height :.32rem
            line-height :.32rem
            margin-top :.14rem
            border-radius :.2rem
            background :rgba(0,0,0,.8)
            font-size :.24rem
            .banner-icon
                font-size :.24rem
</style>