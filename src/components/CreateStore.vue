<template>
  
  <div class="hello">    
      <h1>Create Store</h1>
        <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="description">
        <el-input v-model="form.description"></el-input>
      </el-form-item>
   
      <el-form-item>
        <el-button type="primary" @click="onSubmit">
          Create
        </el-button>        
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
   import axios from 'axios'
  // import routers from"../routes"
  
  
export default {
  name: 'CreateStore',
  // props: {
  //   msg: String
  // }
  
  data() {
      return {

        form: {
          name: '',
          description:'',
          users_id:localStorage.getItem('this is users')
         
        }
      }
    },
    methods: {
      onSubmit() {
       
     

        axios.post('http://127.0.0.1:8000/api/admin/store',this.form)
                    .then((res) => {
                      console.log(res)
                      console.log('this is store',this.form.users_id)
                    
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
