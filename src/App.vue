<template>
  <div id="app">
    <div v-if="!token">
    <router-link to="/register">Register</router-link> |
    <router-link to="/login">Login</router-link> |
    </div>
    <div v-if="token">
      <router-link to="/detail-user">Details User</router-link> |
      <router-link to="/list-store">Store</router-link> 
    </div>
    <router-view></router-view>
    
  
  </div>
</template>

<script>
// import LoginForm from './components/LoginForm.vue'

// import RegisterForm from './components/RegisterForm.vue';
export default {
  name: 'App',
  components: {
    // LoginForm,
    // RegisterForm,
   
},

data () {
  // let userToken = localStorage.getItem('this is tokens')
   let token = localStorage.getItem('this is tokens')

  return {
    token:token    
  }
},

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
