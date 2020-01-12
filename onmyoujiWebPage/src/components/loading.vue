<template>
    <div class="box">
        <h1 data-text="Loading...">Loading...</h1>
    </div>
</template>

<script>
export default {
    name: 'loading',
    data(){
        return {};
    },
    state:{
          isShow:false
    }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');

* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	font-family: 'Poppins', sans-serif;
}

.box {
	display: flex;
	justify-content: center;
	align-items: center;
	/* min-height: 100vh; */
    /* min-width: 100%; */
    height: 100%;
    width: 100%;
    max-width: 450px;
	background: #000;
    position: absolute;
    z-index: 99999;
    opacity: 0.9;
}

h1 {
	position: relative;
	font-size: 2em;
	color: #222;
	text-transform: uppercase;
	border-bottom: 16px solid #222;
	letter-spacing: 0.05em;
	line-height: 1.2em;
}

h1:before {
	content: attr(data-text);
	position: absolute;
	top: 0;
	left: 0;
	width: 50%;
	color: #03a9f4;
	overflow: hidden;
	border-bottom: 16px solid #03a9f4;
	animation: animate 5s linear infinite;
}

@keyframes animate {
	0% {
		width: 0;
	}

	100% {
		width: 100%;
	}
}
</style>