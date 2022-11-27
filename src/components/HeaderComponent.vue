<template>
    <nav class="navbar navbar-expand-md navbar-light fixed-top bg-secondary">
      <div class="container">
        <a class="navbar-brand text-light fw-bold" href="#">LIGHT</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li class="nav-item">
            <router-link to="/" class="text-light btn me-3 fw-bold btn">HOME</router-link>
            </li>
            <li class="nav-item">
              <router-link to="project" class="text-light btn me-3 fw-bold btn">PROJECT</router-link>
            </li>
            <li class="nav-item">
              <router-link to="blog" class="text-light btn me-3 fw-bold btn">BLOG</router-link>
            </li>
            <li class="nav-item">
              <router-link to="about" class="text-light btn me-3 fw-bold btn">ABOUT</router-link>
            </li>
          </ul>
            <form class="d-flex" v-if="!user">
              <router-link to="register" class="text-light btn me-3 fw-bold">REGISTER</router-link>
            </form>
            <form class="d-flex" v-if="!user">
              <router-link to="login" class="text-light btn me-3 fw-bold">LOGIN</router-link>
            </form>
        </div>
      </div>
    </nav>
</template>

<script>
import { mapState } from 'pinia'
import { mapActions } from 'pinia'
import { useUserStore } from '@/stores/user';

export default {
    data() {
        return {
            
        }
    },
    computed: {
        ...mapState(useUserStore, ['user']),
        ...mapActions(useUserStore, ['GetLoggedInUser'])
    },
    mounted(){
        this.GetLoggedInUser
        console.log('user', this.user)
    }
}
</script>