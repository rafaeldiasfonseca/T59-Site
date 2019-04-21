<template>
    <section class="premios">                    
        <h2 class="title-h2 center">Premios</h2>
        <div class="col-04">
            <!--card 01-->
            <div class="card">
                <div class="card__side card__side--front">
                    <div class="card__picture card__picture--1">&nbsp;</div>
                    <h4 class="card__heading">
                        <span class="heading-span card__heading-span--2 center">1º Lugar</span>
                    </h4>
                    <div class="card__details">
                        <ul>                            
                            <li>Troféu Circuito 013</li>
                            <li>1 Prancha</li>
                            <li>30% Desconto no site</li>
                            <li>Camiseta do Evento</li>
                            <li>Desc.|Festa do Evento</li>
                        </ul>


                    </div>
                </div>
                <div class="card__side card__side--back card__side--back-1">
                    <div class="card__cta">
                        <div class="card___price-box">
                            <p class="card__price-only Color_02">Somente</p>
                            <p class="card__price-value Color_02">R$ 70,00</p>
                        </div>
                        <nuxt-link to="/inscreva-se" class="btn btn--white">Inscreva-se já</nuxt-link>
                    </div>                           
                    </div>                       
            </div>   
            
            <!--card 02-->
            <div class="card">
                <div class="card__side card__side--front">
                    <div class="card__picture card__picture--2">&nbsp;</div>
                    <h4 class="card__heading">
                        <span class="heading-span card__heading-span--2">2º Lugar</span>
                    </h4>
                    <div class="card__details">
                        <ul>
                            <li>Troféu Circuito 013</li>
                            <li>Bloco C-Four Epoxy</li>
                            <li>20% Desconto no site</li>
                            <li>Camiseta do Evento</li>
                            
                            
                        </ul>
                    </div>
                </div>
                <div class="card__side card__side--back card__side--back-2">
                        <div class="card__cta">
                                <div class="card___price-box">
                                    <p class="card__price-only Color_02">Somente</p>
                                    <p class="card__price-value Color_02">R$ 70,00</p>
                                </div>
                                <nuxt-link to="/inscreva-se" class="btn btn--white">Inscreva-se já</nuxt-link>
                            </div>  
                        </div>
                    </div>                            
            <!--card 03-->
            <div class="card">
                <div class="card__side card__side--front">
                    <div class="card__picture card__picture--3">&nbsp;</div>
                    <h4 class="card__heading">
                        <span class="heading-span card__heading-span--2">3º Lugar</span>
                    </h4>
                    <div class="card__details">
                        <ul>
                            <li>Troféu Circuito 013</li>
                            <li>Camisa do Evento</li>
                            <li>Leash, Quilha, Parafina</li>                            
                        </ul>
                    </div>
                </div>
                <div class="card__side card__side--back card__side--back-3">
                    <div class="card__cta">
                        <div class="card___price-box">
                            <p class="card__price-only Color_02">Somente</p>
                            <p class="card__price-value Color_02">R$ 70,00</p>
                        </div>
                        <nuxt-link to="/inscreva-se" class="btn btn--white">Inscreva-se já</nuxt-link>
                    </div>     
                </div>
            </div>

               <!--card 04-->
            <div class="card">
                <div class="card__side card__side--front">
                    <div class="card__picture card__picture--4">&nbsp;</div>
                    <h4 class="card__heading">
                        <span class="heading-span card__heading-span--2">4º Lugar</span>
                    </h4>
                    <div class="card__details">
                        <ul>
                            <li>Troféu Circuito 013</li>
                            <li>Camisa do Evento</li>
                            <li>Kit Praia | Circuito 013</li>  
                        </ul>
                    </div>
                </div>
                <div class="card__side card__side--back card__side--back-4">
                    <div class="card__cta">
                        <div class="card___price-box">
                            <p class="card__price-only Color_02">Somente</p>
                            <p class="card__price-value Color_02">R$ 70,00</p>
                        </div>
                        <nuxt-link to="/inscreva-se" class="btn btn--white">Inscreva-se já</nuxt-link>
                    </div>                           
                    </div>                       
            </div> 
        </div>
       
    </section>
</template>

<script>

export default {
    name: "Premios"
}
</script>

<style scoped>

.col-04 {
  width: 120rem;
  margin: 2em auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-template-rows: auto; }




.premios {
  margin: 14rem;
  margin-top: 55px; 
  
  }
@media (max-width: 700px) { 
  .col-04{
    display: grid;    
    align-items: center;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    grid-row-gap: 40px;
     max-width: 300px;
  }
  .premios{
    max-width: 300px;
    display: grid;    
    align-items: center;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
   
  }
   .card {  
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  margin: 0 0;
  height: 32rem; 
  width: 300px;}}



  .card {  
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  height: 52rem; }
  .card__side {
    height: 52rem;
    transition: all .8s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    backface-visibility: hidden;
    border-radius: 3px;
    overflow: hidden;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.692); }
    .card__side--front {
      
      background-color: #fff; }
    .card__side--back {      
      transform: rotateY(180deg); }
      /* Trazeira do Card */
      .card__side--back-1 {
         background-image: linear-gradient(to right bottom, rgba(17, 17, 17, 0.527),
   rgba(0, 0, 0, 0.856)), url('~assets/imagens/card_primeiro_lugar.jpg');
  background-size: cover;
  background-position: 0;  } 
  .card__side--back-2 {
         background-image: linear-gradient(to right bottom, rgba(17, 17, 17, 0.527),
   rgba(0, 0, 0, 0.856)), url('~assets/imagens/card_segundo_lugar.jpg');
  background-size: cover;
  background-position: 0;  } 
      .card__side--back-3 {
         background-image: linear-gradient(to right bottom, rgba(17, 17, 17, 0.527),
   rgba(49, 49, 49, 0.8)), url('~assets/imagens/card_terceiro_lugar.jpg');
  background-size: cover;
  background-position: 0; }
      .card__side--back-4 {
         background-image: linear-gradient(to right bottom, rgba(17, 17, 17, 0.527),
   rgba(49, 49, 49, 0.8)), url('~assets/imagens/card_quarto_lugar.jpg');
  background-size: cover;
  background-position: 0; }


  .card:hover .card__side--front {
    transform: rotateY(-180deg); }
  .card:hover .card__side--back {
    transform: rotateY(0); }
  .card__picture {    
    background-size: cover;
    height: 23rem;
    background-blend-mode: screen;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 92%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 92%, 0 100%);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px; }

    /* Frente do card */
    .card__picture--1 {
     background-image: linear-gradient(to right bottom, rgba(0, 0, 0, 0.945),
   rgba(0, 0, 0, 0.856)), url('~assets/imagens/card_primeiro_lugar.jpg');
  background-size: cover;
  background-position: 0;  } 
    .card__picture--2 {
     background-image: linear-gradient(to right bottom, rgba(0, 0, 0, 0.849),
   rgba(0, 0, 0, 0.74)), url('~assets/imagens/card_segundo_lugar.jpg');
  background-size: cover;
  background-position: 0;  } 
    .card__picture--3 {
      background-image: linear-gradient(to right bottom, rgba(0, 0, 0, 0.849),
    rgba(0, 0, 0, 0.74)), url('~assets/imagens/card_terceiro_lugar.jpg');
      background-size: cover;
       background-position: 0;  } 
      .card__picture--4 {
     background-image: linear-gradient(to right bottom, rgba(0, 0, 0, 0.849),
   rgba(0, 0, 0, 0.74)), url('~assets/imagens/card_quarto_lugar.jpg');
   background-position: 0;}




  .card__heading {    
    text-align: center;
    font-size: 2.8rem;
    font-weight: 300;
    text-transform: uppercase;
    text-align: right;
    color: #fff;
    position: absolute;
    top: 12rem;
    right: 2rem;
    width: 75%; }
  .card__heading-span {
    
    padding: 1rem 1.5rem;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone; }
    .card__heading-span--1 {
      
      background-image: linear-gradient(to right bottom, rgba(255, 185, 0, 0.85), rgba(255, 119, 48, 0.85)); }
    .card__heading-span--2 {
      background-image: linear-gradient(to right bottom, rgba(49, 49, 49, 0.85), rgba(0, 0, 0, 0.85)); }
    .card__heading-span--3 {
      background-image: linear-gradient(to right bottom, rgba(41, 152, 255, 0.85), rgba(86, 67, 250, 0.85)); }
  .card__details {
    padding: 3rem; }
    .card__details ul {
      list-style: none;
      width: 80%;
      margin: 0 auto; }
      .card__details ul li {
        text-align: center;
        font-size: 1.5rem;
        text-align: center;
        padding: 1rem; }
        .card__details ul li:not(:last-child) {
          border-bottom: 1px solid #ccc; }
  .card__cta {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    text-align: center; }
  .card__price-box {
    
    text-align: center;
    color: #fff;
    margin-bottom: 8rem; }
  .card__price-only {
   
    font-size: 1.9rem;
    font-weight: bold;
    text-transform: uppercase; }
  .card__price-value {
     line-height: 9rem;
    font-size: 6rem;
    font-weight: 100; 
    text-align: center;
  }

</style>

