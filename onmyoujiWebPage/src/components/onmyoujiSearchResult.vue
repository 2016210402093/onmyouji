<template>
<div id="searchResult">
    <table class="dataintable">
        <tr v-show="inputData.isFengMo">
          <th class="miXinQuestion">密信问题</th>
          <th class="miXinAnswer">答案</th>
        </tr>
        <tr v-show="inputData.isFengMo" v-for="(item, index) in inputData.queryResult" :key="index">
          <td>{{item.question}}</td>
          <td>{{item.answer}}</td>
        </tr>

        <tr v-show="!inputData.isFengMo">
          <th class="clue">线索</th>
          <th class="shikigami">对应式神</th>
          <th class="recommend">推荐副本</th>
        </tr>
        <tr v-show="!inputData.isFengMo" v-for="item in inputData.queryResult" :key="item.id">
          <td>{{item.clue}}</td>
          <td>{{item.god}}</td>
          <td>{{item.recommend}}</td>
          <!-- <td>╥﹏╥...</td>
          <td>╥﹏╥...</td>
          <td>没有找到显关线索!点击上面的'溯~'联系我吧</td> -->
        </tr>
    </table>
</div>
</template>

<script>

export default {
    name: 'searchResult',

    data() {
        return {
          
        }
    },

     props: ["inputData"], //定义父组件传递过来的输入信息

     methods: {
         test() {
           console.log(this.inputData);
         }
     }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#searchResult {
    margin-top: 40px;
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



