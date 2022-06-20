<template>
    <div>    
        <div  v-if="selectedUser">
            <button class="btn btn-primary" id="button" @click="selectedUser = null">Geri</button>
            <profil :account="selectedUser"></profil>  
            <button  class="btn btn-primary" id="button1" @click="doLogout">Çıkış</button>             
        </div>
        <div v-else>
            <table class="table">
  <thead>
    <tr>
    <th scope="col">FirstName</th>
    <th scope="col">EmailName</th>
    <th scope="col">LastName</th>
    <th scope="col">CustomerId</th>
    </tr>
  </thead>
  
  <tbody>
    <tr v-for="(accont, index) in acconts" :key="index">
    <td>{{accont.FirstName}}</td>
    <td>{{accont.LastName}}</td>
    <td>{{accont.Email}}</td>
    <td> <button type="button" class="btn btn-primary color --white" @click="setUser(accont)">{{accont.CustomerId}}</button></td>
    </tr>

  </tbody>

</table>
        </div>

    </div>
</template>
<script>
import axios from 'axios';
import profil from './Profil.vue';
import { mapActions } from 'vuex';


export default {
    name: 'users',
    
      data() {   
    return {
        selectedUser: null,
        acconts:null,
        result:null,
   form: {
          Action: 'GetCustomer',
          Version: '1',
          Parameters: '{}',
        }, 
    }
  },
  components: {
      profil
  },
  mounted(){
      this.Api();
  },
  methods:{
      ...mapActions(['logout']),
      doLogout() {
        this.logout()
        this.$router.push({ name: "Login" });
      },
    setUser(user) {
        console.table(user)
    this.selectedUser = user;
  },
      Api() {
        let formData = new FormData();
        formData.append('Action', this.form.Action);    
        formData.append('Version', this.form.Version);    
        formData.append('Parameters', this.form.Parameters);
        axios.post("https://dev-smoothie-api.fintechyazilim.com/api/v1/FinTech/Execute", formData).then((res) => {
        this.acconts = res.data.Result;
        //console.log(this.countrys);
      });
    },
  },
    
}
</script>
<style>
.table{
    width: 1000px;
    height: 800px;
    border: 1px solid;
    margin-left: 20%;
}
#button{
float: left;
margin-top: 663px;
}
#button1{
float: left;
margin-left: 10px;
}
</style>