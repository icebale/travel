<template>
    <div>
        <div class="banner">
            <img class="banner-img" :src="bannerImg" @click="handleGallaryShow" alt="">
            <div class="banner-info">
                <div class="banner-title">{{sightName}}</div>
                <div class="banner-num">
                    <span class="iconfont banner-icon">&#59026;</span>{{imgs.length}}
                </div>
            </div>
        </div>
        <fade-animation>
            <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose" ></common-gallary>
        </fade-animation>
    </div>
</template>

<script>
    import CommonGallary from 'common/gallary/Gallary'
    import FadeAnimation from 'common/fade/FadeAnimation'
    export default {
        name:"DetailBanner",
        components:{
            CommonGallary,
            FadeAnimation
        },
        props:{
            sightName:String,
            bannerImg:String,
            imgs:Array
        },
        data(){
            return {
                showGallary:false
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