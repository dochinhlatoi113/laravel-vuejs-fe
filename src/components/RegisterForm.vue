<template>
  
  <div class="hello">    
      <h1>Register</h1>
        <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">
          Create
        </el-button>
        <el-button type="primary">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import axios from 'axios'
  // import routers from"../routes"
export default {
  name: 'RegisterForm',
  // props: {
  //   msg: String
  // }

  data() {
      return {
        form: {
          name: '',
          email:'',
          password:''
        }
      }
    },
    methods: {
      onSubmit() {
       

        axios.post('http://127.0.0.1:8000/api/authen/store',this.form)
                    .then((res) => {
                      console.log(res)
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
