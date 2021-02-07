<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="goBack" >Go Back</button>
    <button @click="goPage">Go Page</button>
  </div>
</template>
<script>
export default {
  name: "About",
   methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    goPage(){
     this.$router.push({name: 'login'}) //بتسجل الموقع ف ال History
     //this.$router.replace("/details") //لا تسجل المحتوي ف ال History
    },
  },
  /* Second
      beforeRouteEnter: (to, from, next) => {
      console.log("Success");
      let s = sessionStorage.getItem("login");
      return s ? next() : next("/login");
    }
    */

}
</script>