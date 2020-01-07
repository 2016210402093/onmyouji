<template>
<div>
    <div class="header">
        <img v-on:click="choseFengMo" src="../assets/FengMoMiXin.png" :class="blueActive" alt="逢魔密信">
        <img v-on:click="choseXuanShang" src="../assets/XuanShangFengYin.png" :class="redActive" alt="悬赏封印">
    </div>

    <div class="search">
        <input v-model="inputFengMo" @input="updateInput" v-if="FengMo" :placeholder="placeholderFengMo" maxlength="30"/>
        <input v-model="inputXuanShang" @input="updateInput" v-if="XuanShang" :placeholder="placeholderYaoQi" maxlength="30"/>
        <button @click="resetInput()">重置</button>
    </div>

    <router-link to='/myInfo' class="powerBy">PoweredBy——溯~</router-link>
</div>
  
</template>

<script>

export default {
  data(){
      return {
          FengMo: true,
          XuanShang: false,
          blueActive: 'blueActive',  //null表示未选中
          redActive: 'default',         //null表示未选中
          placeholderFengMo: '请输入逢魔密信的一个关键词',
          placeholderYaoQi: '请输入神秘线索关键词(空格隔开)',
          inputFengMo: '',       //逢魔密信内容
          inputXuanShang: ''     //悬赏封印内容
      }
    },
    methods: {
        //选择逢魔密信
        choseFengMo() {
            this.FengMo = true;
            this.XuanShang = false;
            this.blueActive = 'blueActive';
            this.redActive = 'default';
            this.inputXuanShang = '';
            this.updateInput(); //更新信息，并通知父组件
        },

        //选择妖气封印
        choseXuanShang() {
            this.FengMo = false;
            this.XuanShang = true;
            this.blueActive = 'default';
            this.redActive = 'redActive';
            this.inputFengMo = '';
            this.updateInput(); //更新信息，并通知父组件
        },

        //当输入内容发生变化时调用
        updateInput() {
            if (this.inputFengMo!=='' || this.inputXuanShang!==''){ //当有一个不为空的时候触发
                this.$emit('isChange', {
                    isFengMo: this.FengMo,
                    inputFengMo: this.inputFengMo,
                    inputXuanShang: this.inputXuanShang
                })   
            }
        },

        //重置输入
        resetInput() {
            this.inputFengMo = '';
            this.inputXuanShang = '';
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* header */
.header {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
}

.header img {
    width: 46%;
    margin: 2%;
    border-radius: 15px;
    flex: 0 1 auto;
}

.blueActive {
    box-shadow: 0 0 20px #0088FF;
    border: 2px solid rgba(0, 136, 255, 0.562);
}

.redActive {
    box-shadow: 0 0 20px orangered;
    border: 2px solid orange;
}

.default {
    border: 2px solid #E6E6E6
}


/* search */
.search {
    display: flex;
    margin-top: 10px;
}

.search input {
    flex: 6 0 auto;
    padding: 3px;
    height: 35px;
    border-style: unset;
}

.search button {
    flex: 1 0 auto;
    border-style: unset;
    background: #0088FF;
    font-size: 20px;
    color: white;
    font-family: cursive;
    outline: unset;
}

/* poweredBy */
.powerBy {
    margin-top: 10px;
    font-size: 16px;
    color: coral;
    float: right;
    text-align: right;
    text-decoration: unset;
}

.powerBy:hover {
    cursor: pointer;
    /* color: cadetblue; */
}

</style>
