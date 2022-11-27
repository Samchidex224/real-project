<template>
    <div class="mt-5">
        <form @submit.prevent="sendEmail">
        <div class="mb-3">
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">EMAIL:</label>
            <input type="email" class="form-control" id="recipient-name" v-model="email" />
          </div>
          <button type="submit" class="btn btn-secondary">RESET PASSWORD</button>
        </div>
      </form>
    </div>
</template>


<script>
import firebase from "firebase";
export default {
    data() {
        return {
            email: "",
            error: null,
            emailSending: false
        }
    },
    methods: {
        sendEmail() {
            if(!this.email) {
                this.error = "Please enter a valid email address"
            }
            this.error = null;
            this.emailSending = true;
            firebase
            .auth()
            .sendPasswordResetEmail(this.email)
            .then(() => {
                this.emailSending = true;
                console.log(this.emailSending)
                alert("Check mail for reset link")
            })
            .catch(error => {
                this.emailSending = false;
                this.error = error.message;
            });
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