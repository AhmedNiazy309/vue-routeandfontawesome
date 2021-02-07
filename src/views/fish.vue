<template>
    <div class="post">
    <div v-if="loading" class="loading">
      Loading...
    </div>
    <div v-if="error" class="error">
      {{ error }}
    </div>
    <div v-if="user" class="content">
      <h2>{{ user}}</h2>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <div id="heading2">
    <h2>Heading Two</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde voluptates vero temporibus minima debitis libero, quas doloribus quam quos aut perspiciatis ea quod voluptatum! Magni eum quibusdam itaque quidem.</p>
    </div>
    </div>
</template>
<script>
    import get from "../router/script/get.js"
export default {
  data () {
    return {
      loading: false,
      post: null,
      error: null
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.error = this.post = null
      this.loading = true
      //const fetchedId = this.$route.params.id
      get((err, user) => {
       // if (this.$route.params.id !== fetchedId) return
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.user = user
        }
      })
    }
  }
}</script>