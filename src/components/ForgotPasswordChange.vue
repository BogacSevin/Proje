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
      <b-form-input id="input-horizontal" type="password" placeholder="Please Enter Password"></b-form-input>
      <b-form-input id="input-horizontal" type="password" v-model="form.password" class="mt-2" placeholder="Verify Your Password "></b-form-input>
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
          token: '45696FC3-3EA2-4405-A10B-782B5D078BC2',
          email: 'fintechtestuser@yandex.com',
          password: '99salman99*',
        }, 
      }
    },
    methods:{
        changePassword(){
        let formData = new FormData();
        formData.append('ForgotPasswordRequestId', this.form.token);    
        formData.append('Email', this.form.email);    
        formData.append('Password', this.form.password);    
        axios
        .post(
          'https://dev-smoothie-api.fintechyazilim.com/api/User/ForgotPasswordChange',
          formData
        ).then(response => {
          this.$swal('Şifre Değiştirme Talebi Başarılı');
          console.log(response);
        }).catch((error) => {
          console.log(error)
        })
      },
    },
//       computed: {
//     // Mix your getter(s) into computed with the object spread operator
//     ...mapGetters([
//       'getParams'
//       // ...
//     ]),
//     // Create another computed property to call your mapped getter while passing the argument
//     getParams () {
//       return this.getParams($vm0.$route.query.param("60E49343-9B46-4CFA-8E3E-F2CCE5F37D5E"))
//     }
//   }
})
</script>
<style>
#input-horizontal{
    margin-left: 35%
}
#input-button{
    margin-left: 28%
}
</style>