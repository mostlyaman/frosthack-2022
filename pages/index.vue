<template>
    <div>
        <!-- Insert Home Page here -->
        Home
        <Nuxt-link to="/app">App</Nuxt-link>
        
        <div class="container">
 <p class="font-weight-white text t1">
     OUR PLATFORM 
   
    </p>
    <br>
    <br>

    <p class="font-weight-white text t2">
     FEATURES  <br>
    </p>

   <br>
<p class="font-weight-white text t3">
     ABOUT US  <br>
    </p>

    <div class="shape-blob"></div>
	<div class="shape-blob one"></div>
	<div class="shape-blob two"></div>


</div>


    </div>
</template>







<style >
@import url('https://fonts.googleapis.com/css2?family=Clicker+Script&family=Londrina+Shadow&family=Poppins:wght@200;300;400;500;600&family=Roboto:wght@300&display=swap');

/* body {
	margin: 0;
	padding: 0;
} */

 .text{
  font-size: 70px;
  padding-top: 30px;
  text-align: center;
  font-family:Londrina Shadow;
  color: white;
  text-shadow:
   -1px -1px 0 #000,  
    1px -1px 0 #000,
    -1px 1px 0 #000,
     1px 1px 0 #000;
}
  

  .text:hover{
    -webkit-text-stroke: 1px white;
   color: white;
   text-shadow:
       3px 3px 0 #fff,
     -1px -1px 0 #fff,  
      1px -1px 0 #fff,
      -1px 1px 0 #fff,
       1px 1px 0 #fff;
  }

  .container  {
	background: #000;
	min-height: 40vh;
  max-width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	position: relative;
}

.container .t1 {
  padding-bottom: 400px;
  padding-left:400px;

}

.container .t2{
    text-align:center
}

.container .t3{
   padding-top: 400px;

 
}

/* .container .t3 {
  /* padding-top: 200px; */
  /* padding-left: 400px; */


.shape-blob {
	background:#c3cac2;
	height: 200px;
	width: 200px;
	border-radius: 30% 50% 20% 40%;
  	animation: 
		transform 20s ease-in-out infinite both alternate,
		movement_one 40s ease-in-out infinite both;
	opacity:.7;
	position: absolute;
	left: 70%;
	top: 50%;
}
.shape-blob.one{
	height: 500px;
	width: 500px;
	left: -200px;
	top: -150px;
	transform: rotate(-180deg);
	animation: transform 30s ease-in-out infinite both alternate, movement_two 60s ease-in-out infinite both;
}

.shape-blob.two{
	height: 350px;
	width: 350px;
	left: 500px;
	top: -150px;
	transform: rotate(-180deg);
	animation: transform 30s ease-in-out infinite both alternate, movement_two 60s ease-in-out infinite both;
}

@keyframes transform
{
    0%,
  100% { border-radius: 33% 67% 70% 30% / 30% 30% 70% 70%; } 
   20% { border-radius: 37% 63% 51% 49% / 37% 65% 35% 63%; } 
   40% { border-radius: 36% 64% 64% 36% / 64% 48% 52% 36%; } 
   60% { border-radius: 37% 63% 51% 49% / 30% 30% 70% 70%; } 
   80% { border-radius: 40% 60% 42% 58% / 41% 51% 49% 59%; } 
}


@keyframes movement_one
{
    0%,
  100% { transform: none; }
   50% { transform: translate(50%, 20%) rotateY(10deg) scale(1.2); }
}

@keyframes movement_two
{
    0%,
  500% { transform: none; }
   50% { transform: translate(50%, 20%) rotate(-200deg) scale(1.2);}
}

  /* .img{
     height: 90vh;
    background:linear-gradient(rgba(240,240,240,0.144),rgba(255,255,255,0.3)) ,url("./bg_image.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    max-width: 100%;
  } */



#about{
  min-height: 50vh;
}

</style>


<script>
export default {
    name: "Index",
    layout: "home"
}
</script>
