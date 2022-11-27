<template>
  <div class="container mt-5">
    <h1 class="text-dark fw-bold text-warning">This is an about page</h1>
    <div class="list-group">
      <router-link v-for="post in posts" :key="post.id" :to="{ name: 'ViewPost', params: { id: post.id } }" class="list-group-item list-group-item-action" aria-current="true">
        <h5 class="mb-1">{{ post.title }}</h5>
        <small> {{ post.body.substring(0,15) + '...' }} </small>
      </router-link>
    </div>

    
    
  </div>
</template>

<script>
export default {
  data(){
    return{
      posts: [] 
    }
  },
  methods: {
    getpost() {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(resp => resp.json())
      .then(resp => this.posts = resp);
    }
  },
  created() {
    this.getpost();
  }
}
</script>
