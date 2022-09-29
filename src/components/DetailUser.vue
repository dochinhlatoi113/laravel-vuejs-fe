<template>
   <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column       
        label="Id"
        prop="id"
       >
       
      </el-table-column>
      <el-table-column       
        label="Name"
        prop="name"
       >
      </el-table-column>
      <el-table-column
    
        label="Email">
      </el-table-column>
    </el-table>
</template>

<script>
// import axios from 'axios';
// import Auth from "../Auth.js"
export default{
  name:"DetailUser",
  methods: {     
    
    
    },
  data() {
    let userToken = localStorage.getItem('this is tokens')
    let id = localStorage.getItem('this is users')
   
        return {
          tableData: [{
            
            id: id,
            userToken: userToken
          }]
        
        }
      }
      
    
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
