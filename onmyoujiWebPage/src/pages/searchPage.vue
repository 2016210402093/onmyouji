<template>
  <div>
    <onmyoujiHead ref="headComponent" @isChange="getIsQuery"></onmyoujiHead>

    <!-- 会频繁发生切换,使用v-show -->
    <onmyoujiPicChange v-show="!isQuery"></onmyoujiPicChange>
    <onmyoujiSearchResult v-show="isQuery" v-bind:inputData="inputData" ></onmyoujiSearchResult>
  </div>
</template>

<script>
import onmyoujiHead from '../components/onmyoujiHead.vue'
import onmyoujiPicChange from '../components/onmyoujiPicChange'
import onmyoujiSearchResult from '../components/onmyoujiSearchResult'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    onmyoujiHead,
    onmyoujiPicChange,
    onmyoujiSearchResult
  },
  data() {
    return {
      isQuery: false,     //判断是否有内容输入
      inputData: {},      //输入的信息
    }
  },
  methods: {
    getIsQuery(data){
      this.isQuery = data.inputFengMo.length>0||data.inputXuanShang.length>0;
      this.inputData = data;
      
      switch (this.inputData.isFengMo) {
        case true:
          axios.post('http://localhost:8090/queryFengMo', {
            keyword: this.inputData.inputFengMo
            })
          .then((res)=>{
            if(res.data.data.length === 0){
              this.inputData = Object.assign({}, this.inputData, {queryResult: [{
                id:1000,
                question:`没有找到显关线索!点击上面的'溯~'联系我吧`,
                answer: '╥﹏╥...'
                }]
              })
            }
            else{
              this.inputData = Object.assign({}, this.inputData, {queryResult: res.data.data})
            }         
          })
          .catch((err)=>{
            alert(err);
          })
          break;
        
        case false:
          axios.post('http://localhost:8090/queryXuanShang', {
            keyword: this.inputData.inputXuanShang
            })
          .then((res)=>{
            if(res.data.data.length === 0){
              this.inputData = Object.assign({}, this.inputData, {queryResult: [{
                id:166666,
                clue:'╥﹏╥...',
                god: '╥﹏╥...',
                recommend: `没有找到显关线索!点击上面的'溯~'联系我吧`
                }]
              })
            }
            else{
              this.inputData = Object.assign({}, this.inputData, {queryResult: res.data.data})
            }   
          })
          .catch((err)=>{
            alert(err);
          })
          break;
      }

    }
  },
  mounted(){
    
  }
}
</script>

<style>
</style>
