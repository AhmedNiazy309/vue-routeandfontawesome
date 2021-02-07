<template>
    <div>
       <!-- <h1>User {{$route.params.id}}</h1>
        <input type="checkbox" v-model="toggle" />
        <button @click="toggle=!toggle">Toggle</button>
    -->
          <router-link :to="'/profile'">See Profile</router-link>
          <router-link :to="$route.params.id + '/emails'">See emails</router-link>

    <h2>User {{ $route.params.id }}</h2>
      <router-view />
    </div>
</template>
<script>
export default {
    name : "test",
    data(){
        return{
            toggle : false,
        }
    },
     watch: {
    $route(to, from) {
      console.log("To : ", to)
      console.log("From : ", from)
      this.toggle = true
    }
  }
}
</script>