<template>
    <div>
        <div class="search">
            <input v-model="keyWord" class="search-input" type="text" placeholder="输入城市名或拼音">
        </div>
        <div class="search-content" ref="search" v-show="keyWord">
            <ul>
                <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
                <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name:"CitySearch",
        props:{
            cities:Object
        },
        data(){
            return {
                keyWord:'',
                list:[],
                timer:null
            }
        },
        computed:{
            hasNoData(){
                return !this.list.length
            }
        },
        methods:{
            handleCityClick(city){
                this.$store.commit("changeCityMu",city);
                this.$router.push('/');
            }
        },
        watch:{
            keyWord(){
                if(this.timer){
                    clearTimeout(this.timer)
                }
                if(!this.keyWord){
                    this.list = [];
                    return;
                }
                this.timer=setTimeout(()=>{
                    const result = [];
                    for (let i in this.cities) {
                        this.cities[i].forEach(value => {
                            
                            if (value.spell.indexOf(this.keyWord)>-1 ||value.name.indexOf(this.keyWord)>-1) {
                                result.push(value)
                                
                            }
                        });
                    }
                    this.list = result;
                },16)
            }
        },
        mounted(){
            this.scroll = new BScroll(this.$refs.search)
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
    height :0.72rem
    padding :0.1rem
    background :$bgColor
    .search-input
        box-sizing :border-box
        width:100%
        height 0.62rem
        padding :0 0.1rem
        line-height:0.62rem
        text-align center
        border-radius :0.06rem
        color :#666
.search-content
    overflow :hidden
    position :absolute
    top :1.78rem
    left:0
    right:0
    bottom:0
    z-index :1
    background :#eee
    .search-item
        background :#fff
        line-height :.62rem
        color:#666
        padding-left :.2rem
</style>