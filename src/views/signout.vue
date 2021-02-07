<template>
    <div class="signin">
        <h1>Sign In</h1>
        <button @click="signout">Do Sign Out</button>
    </div>
</template>
<script>
export default {
    methods: {
signout(){
    sessionStorage.removeItem("login");
}
    }
}
</script>