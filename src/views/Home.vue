<template>
  <div class="home">
  <h1>Ahmed Niazy Maher</h1>    
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="goForward">Go Forward</button>
    <button @click="Refresh">Refresh</button>
    <button @click="goToHome">Go To Home</button>
    <a href="#">
    <i class="fab fa-facebook-f fa-2x"></i>
    </a>
    <br>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <router-link :to="{name:'fish' , hash: '#heading2'}" > scroll To Heading Two</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import VueRouter from 'vue-router';
const { isNavigationFailure, NavigationFailureType } = VueRouter;
export default {
  name: "Home",
  components: {
    HelloWorld
  },
   methods: {
    goForward() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    Refresh() {
      this.$router.go(0)
    },
    gotohome(){
  this.router.push('/').catch(failure => {
  if (isNavigationFailure(failure, NavigationFailureType.redirected)) {
    /*console.log("From = ",failure.from.path)
    console.log("To = ",failure.to.path)*/
    console.log("Are You Creazy")
}
})
    }
  }
};
</script>
