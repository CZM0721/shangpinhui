<template>
  <div>
    <type-nav></type-nav>
    <list-container></list-container>
    <today-recommend></today-recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor"></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import listContainer from "@/pages/home/listContainer";
import typeNav from "@/components/typeNav";
import todayRecommend from "@/pages/home/todayRecommend";
import Rank from "@/pages/home/rank";
import Like from "@/pages/home/like";
import Floor from "@/pages/home/floor";
import Brand from "@/pages/home/brand";
import {mapState} from "vuex";

export default {
  components: {
    listContainer,
    typeNav,
    todayRecommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  data() {
    return {};
  },
  computed:{
    ...mapState({
      floorList:state => state.home.floorList
    })
  },
  mounted() {
    this.$store.dispatch('getFloorList')
  },
  methods: {
  },
}
</script>

<style scoped>

</style>