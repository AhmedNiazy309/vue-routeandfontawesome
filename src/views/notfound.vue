<template>
    <div>
        <h1>EROR 404</h1>
        <button @click="goBack" >Go Back</button>
    </div>
</template>
<script>
export default {
       methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }

}
</script>