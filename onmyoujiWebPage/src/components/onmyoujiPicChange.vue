<template>
<div id="changeBox">
    <img class="boxImg0" :src="defaultImg0" alt="">
    <transition :enter-active-class="inTransition" :leave-active-class="outTransition">
        <img v-if="flag" class="boxImg1" :src="defaultImg1" alt="">
    </transition>
</div>
  
</template>

<script>

import pic0 from '../assets/pic0.jpg'
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'
import pic4 from '../assets/pic4.jpg'
import pic5 from '../assets/pic5.jpg'
import pic6 from '../assets/pic6.jpg'


export default {
    name:'changeBox',
    data() {
        return {
            imgSrc: [
                pic0,
                pic1,
                pic2,
                pic3,
                pic4,
                pic5,
                pic6,
            ],
            InTransitionArray: [
                'animated rotateIn',
                'animated fadeIn',
                'animated flipInY',
                'animated lightSpeedIn',
                'animated rotateInDownRight',
                'animated zoomIn',
            ],
            OutTransitionArray: [
                'animated rotateOut',
                'animated fadeOut',
                'animated flipOutY',
                'animated lightSpeedOut',
                'animated rotateOutDownRight',
                'animated zoomOut',
            ],
            inTransition: 'animated rotateIn',
            outTransition: 'animated rotateOut',
            imgNum: 7,         //图片数量
            currentImg: 0,     //当前图片
            currentTransition: 0, //当前动画
            transitionNum: 6,  //动画数量
            flag: false,
            timer: '',
            delay: '',
            defaultImg0: pic0,
            defaultImg1: pic1
        }
    },
    //加载完成之后启动图片切换动画
    mounted: function(){
        this.timer = setInterval(this.play, 5000);
    },
    methods: {
        TEST (){
            this.flag = !this.flag;
            clearInterval(this.timer);
            clearTimeout(this.delay);
        },
        play (){

            //获取随机不重复图片
            let temp = Math.floor(Math.random() * this.imgNum);
            while(temp == this.currentImg) {
                temp = Math.floor(Math.random() * this.imgNum);
            }
            this.currentImg = temp;

            //获取随机不重复动画
            temp = Math.floor(Math.random() * this.transitionNum);
            while(temp == this.currentTransition) {
                temp = Math.floor(Math.random() * this.transitionNum);
            }
            this.currentTransition = temp;


            this.flag = !this.flag;
            this.delay = setTimeout(this.changeImg, 1500);
        },
        changeImg () {

            if(this.flag) { //如果是上面的default1展示，换掉下面的default0
                this.defaultImg0 = this.imgSrc[this.currentImg];
                this.inTransition = this.InTransitionArray[this.currentTransition];
            }
            else{  //否则换掉上面隐藏的default1
                this.defaultImg1 = this.imgSrc[this.currentImg];
                this.outTransition = this.OutTransitionArray[this.currentTransition];
            }
            clearTimeout(this.delay);
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#changeBox {
    position: relative;
    margin-top: 40px;
    width: 90%;
    padding: 5%;
    text-align: center;
    border-radius: 8px;
}



.boxImg0 {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    z-index: 1;
    left: 0;
    top: 0;
    position: absolute;
    margin-bottom: 30px;
    box-shadow:0px 15px 15px #3d3d3d;
    border-radius: 5px;
    border: 1px solid #3d3d3d;
}

.boxImg1 {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    z-index: 2;
    left: 0;
    top: 0;
    position: absolute;
    margin-bottom: 30px;
    border-radius: 5px;
    border: 1px solid gray;
}

</style>



