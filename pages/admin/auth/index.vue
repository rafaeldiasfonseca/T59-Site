<template>
  <div class="admin-auth-page">
   <div class="center logo">
      <nuxt-link to="/"><img width="104rem"  height="auto" class='img-responsive' src="~assets/imagens/t59enterprise_alternative_logo.svg"></nuxt-link>
    </div>
     <div class="container">
        <h2 class='title-h2-light center' style="letter-spacing: 0.5em; opacity: 0.8;">Login</h2>

     
    <div class="auth-container">
     
      <form @submit.prevent="onSubmit">
        <AppControlInput type="email" v-model="email">Email</AppControlInput>
        <AppControlInput type="password" v-model="password">Senha</AppControlInput>        
        <AppButton type="submit">{{ isLogin ? 'Entrar' : 'Registrar' }}</AppButton>
        <AppButton
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin">{{ isLogin ? 'Registrar' : 'Entrar' }}</AppButton>
      </form>
      <fb:login-button 
      scope="public_profile,email"
      onlogin="checkLoginState();">
      </fb:login-button>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "AdminAuthPage",
  layout: "admin",
  data() {
    return {
      isLogin: true,
      email: "",
      password: ""
    };
  },
    methods: {
    checkLoginState() {
    FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
    });
    },
    onSubmit() {
      this.$store.dispatch("authenticateUser", {
        isLogin: this.isLogin,
        email: this.email,
        password: this.password
      })
      .then(() => {
        this.$router.push('/painel-de-controle');
      });
    }
  }
};
</script>

<style scoped>

.logo {
  margin-top: -10em;
}


 
.admin-auth-page {     
  height: 100vh;
  background-image: linear-gradient(to right bottom, rgba(17, 17, 17, 0.527),
   rgba(49, 49, 49, 0.8)), url('~assets/imagens/2.jpg');
  background-size: cover;
  background-position: top;
  /* clip-path: polygon(0 0, 100% 0, 100% 80vh, 0 100%); */
  position: relative;
  display: grid;
  justify-content: center;
  align-content: center;  
   }
.auth-container {  
  height: 100%;  
  color: #fff;
}


</style>
