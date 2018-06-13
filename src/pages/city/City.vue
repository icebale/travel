<template>
    <div class="">
        <city-header></city-header>
        <city-search></city-search>
    </div>
</template>

<script>
import CityHeader from './compnents/Header' 
import CitySearch from './compnents/Search'
    export default {
        name:"City",
        components:{
            CityHeader,
            CitySearch
        }
    }
</script>

<style lang="stylus" scoped>

</style>