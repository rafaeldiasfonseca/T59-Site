<template>
    <section class='apoio container'>
        <h2 class="title-h2 Color_01 center">Apoio e Patrocínios</h2>   
   
    <div class='galeria-apoio'>
        
            <img src='../../assets/imagens/apoio/apoio_t59enterprise.png' class='apoio-img'>       
        
            <img src='../../assets/imagens/apoio/apoio_t59enterprise.png' class='apoio-img' alt="agencia kpax">       
        
            <img src='../../assets/imagens/apoio/apoio_t59enterprise.png' class='apoio-img'>       
        
            <img src='../../assets/imagens/apoio/apoio_t59enterprise.png' class='apoio-img'>
            <img src='../../assets/imagens/apoio/apoio_t59enterprise.png' class='apoio-img'>       
        
            <img src='../../assets/imagens/apoio/apoio_t59enterprise.png' class='apoio-img'>
        
    </div>


     </section>
</template>


<script>
export default {
    name:'Apoio'
}
</script>

<style scoped>

 .galeria-apoio{
 max-width: 104rem;
  margin: 9em auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 30px;
  grid-template-rows: auto;
   }
   .title-h2{
       margin: 2em 0 3.4em 0;
   }

@media (max-width: 700px) {
   .galeria-apoio{

  max-width: 380px;
  display: grid;
  align-items: center;
  align-content: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 2.5em;
  grid-template-rows: auto;
   }
   .apoio-img{
       margin: 0 auto;
       width: 95%;
       height: auto;
   }
   .title-h2{
       max-width: 380px;
       margin: 2em auto;
   }}


</style>


