<template>

  <div id="app">
    <router-view/>

    <button @click="doLogout">Çıkış</button>
  </div>
</template>
 
<script>
import { mapActions } from 'vuex';
export default {
  name: 'App',
  methods: {
      ...mapActions(['logout']),
      doLogout() {
        this.logout()
        this.$router.push({ name: "Login" });
      }
  }
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
