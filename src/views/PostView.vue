<template>
    <div class="container mt-5">
        <div class="card">
          <div class="card-header"> <strong>Title:</strong> {{ post.title }}</div>
          <div class="card-body">
            <p class="card-text">
                <strong>Description:</strong>
              {{ post.body }}
            </p>
          </div>
        </div>
    </div>
</template>

<script>
export default {
   data() {
    return {
      post: {}  
    }
   },
   methods: {
    getSinglePost(id) {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(res => res.json())
        .then(response => this.post = response);
    }
   }, 
   mounted() {
    if(this.$route.params.id) {
        this.getSinglePost(this.$route.params.id)
    }
   },
}
</script>