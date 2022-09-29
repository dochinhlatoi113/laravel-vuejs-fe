<template>
  <div class="hello">
        <el-form ref="form" :model="form" label-width="120px">     
      <el-form-item label="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
       
        <el-button type="primary " @click="onSubmit">Login User</el-button>
      </el-form-item>
    </el-form>
    <el-form ref="form" :model="form" label-width="120px">   
    <router-link to="/register">register</router-link>  
  </el-form>
  
  </div>
  
</template>

<script>
 import axios from 'axios'
 import Auth from "../Auth.js"
export default {
  name: 'LoginForm',
  // props: {
  //   msg: String
  // }

  data() {
      return {
        form: {         
          email:'',
          password:''
        }
      }
    },
    
    methods: {
      
      onSubmit() {
      
        axios.post('http://127.0.0.1:8000/api/authen/login',this.form)
                    .then((res) => {
                      // console.log(res.data.access_token)
                      console.log(res)
                    
                      Auth.login(res.data.access_token,res.data.user.id)
                     
                        // this.$router.push('/login');
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            
      
       }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
