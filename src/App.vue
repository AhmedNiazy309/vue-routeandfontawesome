<template>
<div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <a href="">
      <router-link to="/about">About</router-link>|
      </a>
      <router-link to="/login">log in</router-link>|
      <router-link to="/settigs">settigs</router-link>|
      <router-link to="/profile">profile</router-link>|
      <router-link to="/test/:id">Test(one)</router-link>|
      <router-link to="/test/id">Test(two)</router-link>|
      <router-link to="/signout">signout</router-link>|
      <router-link to="/fish">fish</router-link>|
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  components: {
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>