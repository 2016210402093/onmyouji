<template>
  <div class="authorInfo">

    <img src="../assets/author.jpg" alt="作者丑照">

    <p>网易-心意相通</p>
    <p>游戏ID：养生道徒</p>
    <p>QQ: 806815937</p>
    <p>WX: xwy806815937</p>
    <p>github：https://github.com/2016210402093</p>

    <textarea disabled rows="4">个人介绍：这个人很懒，什么都懒得写;</textarea>

    <router-link class="goBack" to="/search">继续查询</router-link>

  </div>
</template>

<script>

export default {
  name: 'myInfoPage',
  components: {
    
  },
  data() {
    return {
      
    }
  },
  methods: {
  }
}
</script>

<style>

.authorInfo {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.authorInfo p {
  margin: unset;
  padding-bottom: 15px;
  word-break: break-all
}

.authorInfo img {
    margin-top: 50px;
    width: 80px;
    height: 80px;
    margin-bottom: 30px;
    border-radius: 8px;
    border: 1px solid gray;
    box-shadow: 0px 0px 5px gray;
}

.authorInfo textarea {
  width: 94%;
  margin: 0 2% 0 2%;
  font-size: 16px;
  padding: 2%;
  border-radius: 6px;
  margin-bottom: 30px;
}

.goBack {
  color: blueviolet;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
}

.goBack :hover {
  cursor: pointer;
}

</style>
