<template>
    <div class='Cta-01'>      
        <div class='container'>  
         <h2 class='title-h2 center'>Inscrições Abertas</h2>
        <nuxt-link to="/inscreva-se" class='btn btn--white btn--animated'>Eu quero participar</nuxt-link>
        </div>
    </div>
</template>


<script>
export default {
    name: "Inscricoes"
}
</script>


<style scoped>
    .Cta-01 {  
    background-image: linear-gradient(to right bottom, rgba(17, 17, 17, 0.555),
   rgba(49, 49, 49, 0.8)), url('~assets/imagens/2.jpg');
      background-attachment: fixed;
     background-position: center;
     background-repeat: no-repeat;
     background-size: cover;
  /* clip-path: polygon(0 0, 100% 0, 100% 80vh, 0 100%); */
    position: relative;
     }    
     .container {
        height: 85vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
     }
     .title-h2 {         
         letter-spacing: 0001rem;
         font-weight: 800;         
         font-size: 3rem;
         line-height: 6rem;
         color: #fff;
         margin-bottom: 4.4em;
     }
     span {
         font-family: Poppins;
         letter-spacing: 01rem;
         font-size: 6rem;
         color: #fff;
         font-weight: bolder;
         margin-bottom: 1.5em;
     }

     
         
     
</style>
