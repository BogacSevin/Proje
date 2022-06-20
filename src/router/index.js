import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login";
import cPassword from "../components/cPassword";
import ForgotPasswordChange from "../components/ForgotPasswordChange";
import users from "../components/users";
import Profil from "../components/Profil";
import store from "../store"

Vue.use(VueRouter);

const routes = [
	{ name: 'Login', path: "/", component: Login },
	{ name: 'ChangePassword', path: "/ChangePassword", component: cPassword },
	{ name: 'ForgotPasswordChange', path: "/ForgotPasswordChange", component: ForgotPasswordChange },
	{ name: 'Users', path: "/users", component: users},
	{ name: 'Profil', path: "/Profil", component: Profil}
];
const router = new VueRouter({
	mode: "history",
	routes,
});

router.beforeEach((to, _, next) => {
	const authRequiredRoutes = ["Users", 'ChangePassword', 'Profil'];
	const authNotRequiredRoutes = ["Login", "ForgotPasswordChange"];
	const _isAuthenticated = store.getters.getIsLogin;

	if (authNotRequiredRoutes.indexOf(to.name) > -1 && _isAuthenticated) 
		next({ name: "/Login" });

	if (authRequiredRoutes.indexOf(to.name) > -1) {
	  if (_isAuthenticated) next();
	  else next({ name: "Login" });
	} else {
	  next();
	}
  });

export default router;