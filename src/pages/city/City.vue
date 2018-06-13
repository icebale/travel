<template>
    <div class="">
        <city-header></city-header>
        <city-search></city-search>
        <city-list></city-list>
        <city-alphabet></city-alphabet>
    </div>
</template>

<script>
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
        }
    }
</script>

<style lang="stylus" scoped>

</style>