<template>
  <div>
    <loading v-if="isLoading"></loading>
    <onmyoujiHead ref="headComponent"></onmyoujiHead>

    <!-- 会频繁发生切换,使用v-show -->
    <onmyoujiPicChange v-show="!isQuery"></onmyoujiPicChange>
    <onmyoujiSearchResult v-show="isQuery"></onmyoujiSearchResult>
  </div>
</template>

<script>
import onmyoujiHead from '../components/onmyoujiHead.vue'
import onmyoujiPicChange from '../components/onmyoujiPicChange'
import onmyoujiSearchResult from '../components/onmyoujiSearchResult'
import loading from '../components/loading'
import {mapState} from "vuex"

export default {
  name: 'app',
  components: {
    onmyoujiHead,
    onmyoujiPicChange,
    onmyoujiSearchResult,
    loading
  },
  computed: {
    ...mapState('search',{
      isQuery: state => state.isQuery,
      isLoading: state => state.isLoading
      })
  },

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
