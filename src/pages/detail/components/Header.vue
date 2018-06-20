<template>
    <div>
        <router-link to="/" tag="div" class="header-abs" v-show="absShow">
            <div class="iconfont header-abs-back">&#xe624;</div>
        </router-link>
        <div class="header-fixed" v-show="!absShow" :style="opacityStyle">
            <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe624;</div>
            </router-link>
            景点详情
        </div>
    </div>
</template>

<script>
export default {
    name:"DetailHeader",
    data () {
        return {
            absShow:true,
            opacityStyle:{
                opacity:0
            }
        }
    },
    methods: {
        handleScroll () {
            const top = document.documentElement.scrollTop
            //console.log(top)
            if(top>50){
                let opacity = top/120;
                opacity = opacity > 1 ? 1 : opacity ;
                this.opacityStyle = {
                    opacity
                }
                this.absShow = false
            }else{
                this.absShow = true
            }
        }
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll)
    },
    unmounted () {
        window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-abs
    position :absolute
    top :.2rem
    left :.2rem
    width :.8rem
    height :.8rem
    line-height :.8rem
    text-align :center
    border-radius :.4rem
    background :rgba(0,0,0,.6)
    color :#fff
    .header-abs-back
        color :#fff
        font-size :.3rem
.header-fixed
    z-index:2
    position :fixed
    top:0
    left :0
    right :0
    height :$headerHeight
    line-height :$headerHeight
    color:#fff
    text-align :center
    background :$bgColor
    font-size:.32rem
    .header-fixed-back
        position :absolute
        top :0px
        left :0
        width:0.64rem
        text-align :center
        font-size :.4rem
        color :#fff
</style>


