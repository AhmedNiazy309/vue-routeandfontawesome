<template>
    <div>
            <h1>Log IN</h1>        
        <button @click="login">Do Sign In</button>
    </div>
</template>
<script>
export default {
    methods: {
login(){
    sessionStorage.setItem("login",true);
}
    }
}
</script>