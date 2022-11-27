import firebase from 'firebase/app'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({ 
        user: null, 
    }),
    // getters: {
    //   doubleCount: (state) => state.count * 2,
    // },
    actions: {
        GetLoggedInUser() {
            const response = firebase.auth().currentUser;
            console.log("🚀 ~ file: user.js ~ line 13 ~ GetLoggedInUser ~ response", response)
            if(response){
                this.user = response
            }
        }
    },
  });