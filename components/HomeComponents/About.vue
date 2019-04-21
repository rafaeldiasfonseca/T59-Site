
<template>    
       <!--Conteudo Principal-->
    <section id='Conteudo-Principal'>       	    
    <!--About 01-->
        <div class='about container'>                  				
            <div class='container'>
            <h2 class='title-h2 Color_01 sm-mb'>Circuito de surf 013</h2>     				 
                <p class='p-about'>O Circuito de Surf 013 tem como principal objetivo divulgar o <b>Surf</b> na nossa região.
                Organizamos o circuito para todos os amantes deste esporte. Na verdade
                não consideramos o surf como esporte, mas sim como um estilo de vida. Esse campeonato é para homenagear o
                <b>surf</b> Caiçara e Brasileiro!.</p>                                
                <nuxt-link to='/posts/circuito-013' class=''></nuxt-link>
        </div> 
                <img class='img-responsive' src="../../assets/imagens/circuito_de_surf_013_about.png" alt='Circuito de surf 013'>     
        </div>
       
    
    <!-- About-02 -->
    <div class='about container'>		
        <img class='img-responsive about-2-img' src="../../assets/imagens/circuito_de_surf_013_about-3.png" alt='Circuito de surf 013'>     
        <div class='container'>
            <h2 class='title-h2 Color_01'>Onde será realizado?</h2>               
            <p class='p-about'> O campeonato será realizado no mês de Julho em Santos - SP no Canal 4, pois o swell de inverno favorecem as ondas
                no pico, trazendo maior projeção aos atletas. Entre nessa onda com a gente, Circuito de Surf 013 no Canal 4. Não fique fora dessa!</p>
                
            <nuxt-link to='/posts/localizacao-evento' class=''></nuxt-link>	 		    
        </div> 
                      		
    </div>  
    </section> 
                
</template>
<script>
export default {
    name: 'About'
}
</script>


<style scoped>

.about{
	  margin: 8em auto;     
    grid-column-gap: 70px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(420px, 1fr))       
 }
 p {
     font-family: 'Kalam', cursive;
     font-size: 1.5rem;
     line-height: 3.9rem;
 }
 .img-responsive {
  margin: 0 auto;
 width: 80%;
 }

/* Desktop */
@media (max-width: 1500px) {
  .p-about{    
    font-size: 2.4rem;
    line-height: 3.5rem;
  }
}
/* Mobile */
@media (max-width: 700px) {
  .about{
    margin: 1.3em auto;   
    display: grid;
    justify-content: center; 
    align-items: center;   
    grid-row-gap: 0px;
    display: grid;
    grid-template-columns: 1fr;       
 }
  .title-h2 {
      font-size: 2.3rem;
      text-align: center;
      margin: 10px auto;
  }
    .p-about{
    margin-top: 0;
    font-size: 1.8rem;
    line-height: 3.5rem;
    text-align: center;    
    text-align: justify;
    -moz-text-align-last: center;
    text-align-last: center;
    margin-bottom: 1em;
  }
  .img-responsive {
    width: 70%;
    margin: 0 auto;  
  }
.img-responsive{
    display: none;
}}
</style>


      






