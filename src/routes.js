// import loginForm from "./components/LoginForm.vue";
import RegisterForm from "./components/RegisterForm.vue";
import LoginForm from "./components/LoginForm.vue";
import DetailUser from "./components/DetailUser.vue";
import ListStore from "./components/ListStore.vue";
import CreateStore from "./components/CreateStore.vue";
const routers = [
  {
    path: "/register",
    name: "userRegister",
    component: RegisterForm,
  },
  {
    path: "/login",
    name: "useLogin",
    component: LoginForm,
  },
  {
    path: "/detail-user",
    name: "detailUser",
    component: DetailUser,
  },
  {
    path: "/list-store",
    name: "ListStore",
    component: ListStore,
  },
  {
    path: "/create-store",
    name: "CreateStore",
    component: CreateStore,
  },
];
export default routers;
