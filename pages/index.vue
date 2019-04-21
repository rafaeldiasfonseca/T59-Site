<template>
 <div class='home-page'>
   <section class='intro'>     
    <div class="header__text-box">
        <div class="heading-primary">
          <div class="logo">
           <nuxt-link to="/"><img class='logo-home' src="~assets/imagens/t59enterprise_alternative_logo.svg"></nuxt-link>
           </div>
            <h1 class="title-h1-slide heading-primary--main"><b>Circuito de Surf 013 </b></h1>
            <span class='heading-primary--sub'>2º Etapa</span>
        </div>                
        <nuxt-link to="/inscreva-se" class='btn btn--white btn--animated'>Você esta pronto?</nuxt-link>
    </div>     
   </section>      
   <About />
   <Inscricoes />
   <Premios />
   <VagasLimitadas />
   <nuxt-link to="/inscreva-se" class='btn btn--animated inscreva-se-btn'>Inscreva-se</nuxt-link>
   <!-- <div class='container'>
     <div class='blog'>
     <h2 class='title-h2 Color_01 center'>Fique por dentro das novidades!</h2>  
    </div>
   
       
      <PostList :posts="loadedPosts" />
   </div> -->
      
   <Apoio />
   <footer>
     <div class='container'>
       <div class="logo-footer center">
           <nuxt-link to="/"><img class='img-responsive' width="102rem" heigh="auto" src="~assets/imagens/t59enterprise_logo.svg"></nuxt-link>
           </div>

     </div>


     <p class='Copyright center'>&copy; T59-Enterprise. Todos os Direitos Reservados</p></footer>
    

 </div>
</template>



<script>
import Premios from '@/components/HomeComponents/Premios'
import About from '@/components/HomeComponents/About'
import Inscricoes from '@/components/HomeComponents/Inscricoes'
import Apoio from '@/components/HomeComponents/Apoio'
import VagasLimitadas from '@/components/HomeComponents/VagasLimitadas'


export default {
  components: {    
    Premios,
    About,
    Inscricoes,
    Apoio,
    VagasLimitadas,
   
  }, 
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }    
  },
  
  // data() {
  //   return {
  //     loadedPosts: []
  //   };
  // },  
};
</script>

<style scoped>

.intro {  
  margin-top: -60px;
  height: 100vh;
  background-image: linear-gradient(to right bottom, rgba(17, 17, 17, 0.527),
   rgba(49, 49, 49, 0.8)), url('~assets/imagens/circuito-de-surf-013.jpg');
  background-size: cover;
  background-position: top;
  /* clip-path: polygon(0 0, 100% 0, 100% 80vh, 0 100%); */
  position: relative; }
  .header__logo-box {
    position: absolute;
    top: 4rem;
    left: 4rem; }
  .header__logo {
    height: 3.5rem; }
  .header__text-box {
    width: 82rem;    
    position: absolute;
    top: 49%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center; 
    
    }

    .header__text-box {
    position: absolute;
    top: 49%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
     }

   .fullScreen-container{
     width: 100%;
   }

   .inscreva-se-btn {
     font-family: 'Kalam', cursive;
     padding: 15px 30px;
     border-radius: 100px;
     position: fixed;
     right: 50px;
     top: 42px;
     background: var(--Color_02);
     color: var(--Color_01);
   }
  
.logo {
  padding-bottom: 8em;
  margin: 0 auto;
  z-index: 9;
  position: relative;  
}
.logo nuxt-link {
  z-index: 20;
  text-decoration: none;
  color: white;  
}

.logo-home {
  margin: 0 auto;
  width: 138px;
  height: auto;
}
@media (max-width: 700px) { 
.logo-home {
  margin: 0 auto;
  width: 82px;
  height: auto;
}
.logo {
  padding-bottom: 4.5em;
  }}

.featured-posts {
  display: flex;
  padding: 17px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.inscreva-se{
  width: 100%;
  background-color: #111;
 
}
.title-h1-slide{
  font-size: 5rem;
  line-height: 4rem;
  letter-spacing: 0.9rem;  
  font-family: 'Nothing You Could Do', cursive;
  font-weight: 800;
  text-transform: none;
  color: #f7f7f7de;
  line-height: 1.2em;
}
.inscreva-se {
  padding: 5em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.Copyright{
  margin: 2em 0 .3em 0;
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--Color_01);
}

.blog{
  margin: 4em 0
}
.blog .title-h2{
  line-height: 1.7em;
}


.logo-footer{
  margin-top: 3em;
}

/* Mobile */
@media (max-width: 700px) {  
  .intro{
    background-image: linear-gradient(to right bottom, rgba(17, 17, 17, 0.527),
   rgba(49, 49, 49, 0.8)), url('~assets/imagens/circuito-de-surf-013_mobile.jpg');
  }
  
    .header__text-box {
    width: 50em;     
  }  
.btn, .btn--white btn--animated{
  display: none;
}
.intro {
  overflow-x: hidden;
  margin-top: -60px;
  height: 100vh;
  min-height: 100vh; /* Isso aqui serve pra imagem inicial carregar rápido */  
  z-index: -1; 
  background-size: cover;
  background-position: top;
  /* clip-path: polygon(0 0, 100% 0, 100% 80vh, 0 100%); */
  position: relative; }
.title-h1-slide{
  margin: 0 auto;
  max-width: 350px;
  font-size: 3.5rem;  
  letter-spacing: 0.8rem;  
  font-family: 'Nothing You Could Do', cursive;
  font-weight: 800;
  text-transform: none;
  color: #f7f7f7de;
  line-height: 1.9em;
}

.heading-primary--sub{
  font-size: 2.4rem;
}
}




</style>

