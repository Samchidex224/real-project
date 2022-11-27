<template>
    <div class="mt-5">
        <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">EMAIL:</label>
            <input type="email" class="form-control" id="recipient-name" v-model="email" />
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">PASSWORD:</label>
            <input type="password" class="form-control" id="recipient-name" v-model="password" />
          </div>
          <button type="submit" class="btn btn-secondary" data-bs-dismiss="modal">Login</button>
        </div>
        <div>
            <small class="text-light fw-bold">
            Forgot Password? 
            <router-link to="/forgot" class="text-light fw-bold">FORGOT PASSWORD</router-link>
            </small>
        </div>
      </form>
    </div>
</template>

<script>
import firebase from "firebase/app";


export default {
    data() {
      return{
        email: "",
        password: "",
        isLoggedIn: null
      }
    },
    methods: {
      handleSubmit() {
        if(!this.email || !this.password) {
          alert("Email and Password Required")
        }
        if(this.email && this.password){
          firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then((data) => {
                    console.log(data);
                    this.$router.push('/blog')
                })
                .catch((error) => {
                  alert(error.message)
                })
        }
      }
    },
}
</script>

<style scoped>
 form{
    max-width: 500px;
    margin: 20px auto;
    background: rgb(172, 83, 83);
    text-align: left;
    padding: 10px;
    border-radius: 10px;
}
label{
    color: rgb(255, 255, 255);
    display: inline-block;
    margin: 20px 0 15px;
    font-size: 1em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input{
    display: block;
    padding: 5px 5px;
    width: 100%;
    box-sizing: border-box;
    color: #555;

}
button{
    background: blue;
    border: 0;
    font-size: 15px;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
}
</style>