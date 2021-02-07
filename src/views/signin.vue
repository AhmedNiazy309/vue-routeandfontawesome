<template>
    <div class="signin">
        <h1>Sign In</h1>
        <button @click="signin">Do Sign In</button>
    </div>
</template>
<script>
export default {
    methods: {
signin(){
    sessionStorage.setItem("signin",true);
}
    }
}
</script>