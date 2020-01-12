<template>
<div id="searchResult">
    <table class="dataintable">
        <tr v-show="isFengMo">
          <th class="miXinQuestion">密信问题</th>
          <th class="miXinAnswer">答案</th>
        </tr>
        <tr v-show="isFengMo" v-for="item in queryResult" :key="item.id+900">
          <td>{{item.question}}</td>
          <td>{{item.answer}}</td>
        </tr>

        <tr v-show="!isFengMo">
          <th class="clue">线索</th>
          <th class="shikigami">对应式神</th>
          <th class="recommend">推荐副本</th>
        </tr>
        <tr v-show="!isFengMo" v-for="item in queryResult" :key="item.id+500">
          <td>{{item.clue}}</td>
          <td>{{item.god}}</td>
          <td>{{item.recommend}}</td>
        </tr>
    </table>
</div>
</template>

<script>

import {mapState} from "vuex"

export default {
    name: 'searchResult',
    
    computed: {
      ...mapState('search',{
        isFengMo: state => state.isFengMo,
        inputFengMo: state => state.inputFengMo,
        inputXuanShang: state => state.inputXuanShang
      })
    },

    data() {
        return {
          queryResult:[]
        }
    },

    watch: {
      inputFengMo(){
        if(this.inputFengMo!==''){
          this.$api.queryFengMo.queryFengMoByKeyWords({
            keyword: this.inputFengMo
            })
          .then((res)=>{
            if(res.data.length === 0){
              this.queryResult = [{
                id:1000,
                question:`没有找到显关线索!点击上面的'溯~'联系我吧`,
                answer: '╥﹏╥...'
              }]
            }
            else{
              this.queryResult = res.data;
            }         
          })
          .catch((err)=>{
            alert(err);
          })
        }
      },
      inputXuanShang(){
        if(this.inputXuanShang !== ''){
          this.$api.queryXuanShang.queryXuanShangByKeyWords({
              keyword: this.inputXuanShang
            })
          .then((res)=>{
            if(res.data.length === 0){
              this.queryResult = [{
                id:166666,
                clue:'╥﹏╥...',
                god: '╥﹏╥...',
                recommend: `没有找到显关线索!点击上面的'溯~'联系我吧`
                }]
            }
            else{
              this.queryResult = res.data;
            }   
          })
          .catch((err)=>{
            alert(err);
          })
        }
      }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#searchResult {
    margin-top: 40px;
    padding: 8px;
}


/* 表格基本样式 */
.dataintable {
  margin-top:15px;
  border-collapse:collapse;
  border:1px solid #aaa;
  width:100%;
}
.dataintable th {
  vertical-align:baseline;
  padding:5px 15px 5px 6px;
  background-color:#3F3F3F;
  border:1px solid #3F3F3F;
  text-align:left;
  color:#fff;
}
.dataintable td {
  vertical-align:text-top;
  padding:6px 15px 6px 6px;
  border:1px solid #aaa;
  word-break: break-all;
}

奇数行和偶数行显示不同颜色
.dataintable tr:nth-child(odd) {
  background-color:#F5F5F5;
}
.dataintable tr:nth-child(even) {
  background-color:#fff;
}


/* 表格具体处理 */
.miXinQuestion {
  width: 70%;
}

.miXinAnswer {
  width: 30%
}

.clue {
  width: 25%;
}

.shikigami {
  width: 25%;
}

.recommend {
  width: 50%;
}

</style>



