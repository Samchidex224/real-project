<template>
  <div class="mt-5">
    <form @submit.prevent="handleForm">
    <div class="text-light fw-bold text-center pt-3">CREATE ACCOUNT</div>
    <div class="mb-3">
      <label for="recipient-name" class="col-form-label">FIRST NAME:</label>
      <input type="text" class="form-control"  id="recipient-name" v-model="firstName" />
    </div>
    <div class="mb-3">
      <label for="recipient-name" class="col-form-label">LAST NAME:</label>
      <input type="text" class="form-control"  id="recipient-name" v-model="lastName" />
    </div>
    <div class="mb-3">
      <label for="recipient-name" class="col-form-label">EMAIL:</label>
      <input type="email" class="form-control"  id="recipient-name" v-model="email" />
    </div>
    <div class="mb-3">
      <label for="recipient-name" class="col-form-label">PASSWORD:</label>
      <input type="password" class="form-control"  id="recipient-name" v-model="password" />
    </div>
    <div class="mb-3">
      <label for="recipient-name" class="col-form-label">CONFIRM PASSWORD:</label>
      <input type="password" class="form-control"  id="recipient-name" v-model="confirmPassword" />
    </div>
    <div>
      <small>
        Already have an account? 
        <router-link to="/login">Login</router-link>
      </small>
    </div>
    <br>
    <button type="submit" class="btn btn-secondary">Register</button>
  </form>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
    data() {
      return {
         email: "",
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: ""
      }
    },
    methods: {
      handleForm() {
        if(!this.email || !this.firstName || !this.lastName || !this.password || !this.confirmPassword){
        alert("Fill out these fields")
      }
      if(this.password != this.confirmPassword) {
        alert("Password does not match")
      }

      
        if(this.email && this.firstName && this.lastName && this.password && this.confirmPassword && this.password == this.confirmPassword){
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then((res) => {
          console.log(res)
          res.user.updateProfile({
            displayName: this.firstName + ' ' + this.lastName
          });

          alert("Form Submitted Successfully");
          this.$router.push("/blog");
        })
        .catch((error) => {
          alert(error.message)
        });
      }
      

      }
    },
}
</script>

<style scoped>
 form{
    max-width: 500px;
    margin: 20px auto;
    background: rgb(206, 102, 102);
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