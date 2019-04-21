<template>
    <div class='Cta-01'>
        <div class='vagas-limitadas container flex-col mg10'>        
        <h2 class='title-h2 Color_02 center'>Vagas restantes:</h2>
      <span>128</span>
     <nuxt-link to="/inscreva-se" class='btn btn--white btn--animated'>Não vou perder</nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VagasLimitadas'
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
     .vagas-limitadas {
        height: 85vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
     }
     .title-h2 {         
         letter-spacing: 0001rem;
         font-weight: 800;         
         font-size: 3.3rem;
         line-height: 6rem;         
         margin-bottom: 1.9em;
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


