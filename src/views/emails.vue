<template>
    <div class="emails">
    <label for="email">Enter your Email : </label>
        <input type="email" name="" id="">
            <button @click="goBack" >Go Back</button>
    </div>
</template>
<script>
export default {
   methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
}
}
</script>