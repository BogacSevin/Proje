<template>
  <div v-if="getIsLogin">
	<button type="submit" class="btn btn-danger" @click="logout">Logout</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
	computed: {
		...mapGetters(['getIsLogin'])
	},
	methods: {
		...mapActions(['logoutStore']),
		logout() {
			this.logoutStore();
		}
	}
}
</script>

<style>
</style>
 <!-- Vue Router  -->
<!--
const router = new VueRouter({
  routes: [
    {
      path: '/user/:id',
      component: User,
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'profile',
          component: UserProfile
        },
        {
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          path: 'posts',
          component: UserPosts
        }
      ]
    }
  ]
}) 
-->