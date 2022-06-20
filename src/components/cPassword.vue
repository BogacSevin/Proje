<template>
   <div style="
   margin-left: auto;
   margin-right: auto;
   width: 60em; 
   margin-top: 15%;
   max-width: 440px;
   margin-bottom: 15%;
   padding: 30px;
   text-align: left;
   border: 1px solid #ccc;">
  <div>
      <b-form>  
    <b-form-group
      id="fieldset-horizontal"
      content-cols-lg="7"
      label-for="input-horizontal"
    >
    <div id="input-horizontal"  class="form-group first">
    <label for="username">Email</label>
    <input type="text" class="form-control" placeholder="your-email@gmail.com" id="username">
  </div>
    <div id="input-horizontal"  class="form-group first">
    <label for="username">Current Password</label>
    <input type="password" class="form-control" placeholder="your-email@gmail.com" id="username">
  </div>
  <div id="input-horizontal"  class="form-group first">
    <label for="username">New Password</label>
    <input type="password" class="form-control" placeholder="your-email@gmail.com" id="username">
  </div>
    </b-form-group>
    <b-button class="mt-1" id="input-button" @click="changePassword" variant="outline-primary">Change Password</b-button>
    </b-form>
  </div>
</div>
</template>
<script>
import axios from 'axios';
export default ({
    name: 'cPassword',
    data(){
         return {
        form: {
          password: '',
        }, 
      }
    },
    methods:{
        changePassword(){
        let formData = new FormData();
        formData.append('Password', this.form.password);    
        axios
        .post(
          'https://dev-smoothie-api.fintechyazilim.com/api/User/ChangePassword',
          formData
        ).then(response => {
          console.log(response);
        }).catch((error) => {
          console.log(error)
        })
      },
    },
})
</script>
<style>
#input-horizontal{
    margin-left: 35%;
    width: 230px;
}
#input-button{
    margin-left: 28%
}
</style>