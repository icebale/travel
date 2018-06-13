<template>
    <div class="">
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cities="cities" :hot="hotCities"></city-list>
        <city-alphabet :cities="cities"></city-alphabet>
    </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './compnents/Header' 
import CitySearch from './compnents/Search' 
import CityList from './compnents/List' 
import CityAlphabet from './compnents/Alphabet'
    export default {
        name:"City",
        components:{
            CityHeader,
            CitySearch,
            CityList,
            CityAlphabet
        },
        data(){
            return {
                cities:{},
                hotCities:[]
            }
        },
        methods:{
            getCityInfo(){
                axios.get('/api/city.json')
                .then(this.handleGetCityInfo)
            },
            handleGetCityInfo(res){
                //console.log(res)
                res = res.data
                if(res.ret && res.data){
                    const data = res.data;
                    this.cities = data.cities;
                    this.hotCities = data.hotCities;
                }
            }
        },
        mounted(){
            this.getCityInfo()
        }
    }
</script>

<style lang="stylus" scoped>

</style>