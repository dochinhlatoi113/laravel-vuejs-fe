<template>
  <div>
    <h1>This is List Store</h1>
    <el-table
      :data="tableData"
      style="width: 100%">
      <div v-for="itemA in item" :key="itemA.id">
        {{itemA.name}}
      </div>
      <el-table-column       
        label="Id"
      
        >
        
      </el-table-column>
      <el-table-column       
        label="Name"
        prop="name"
        >
      </el-table-column>
      <el-table-column    
        >
        <el-button type="success">Delete</el-button>
        <el-button type="info">Edit</el-button>
      </el-table-column>
    </el-table>
    <el-button type="success">
      <router-link to="/create-store">Create Store</router-link>  
    </el-button>
  </div>  
</template>

<script>
import axios from 'axios';

// import Auth from "../Auth.js"      

            
export default{
 name:"DetailUser",
 mounted (){
  this.getListStore()
 },
 methods: {      
    getListStore(){
      axios.get('http://127.0.0.1:8000/api/admin/show')
        .then((res) => {
          // console.log(res.data.access_token)
          console.log(res)      
          this.tableData = res.data.listStoreUser           
                              
            // this.$router.push('/login');
        })
        .catch((error) => {
            console.log(error);
});
    }

      
       
    },
 data() {
  //  let userToken = localStorage.getItem('this is tokens')
  //  let id = localStorage.getItem('this is users')
  
       return {
         tableData: []
         
       }
     }
     
   
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
