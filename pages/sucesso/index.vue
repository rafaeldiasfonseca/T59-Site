 <template>
  <div class='sucess-page'>    
    <h1 class='title-h1 center'><b class='center'>Parabens, falta pouco!</b></h1>
    <h2 class='title-h3 center'>Aguarde nosso email com o boleto ou clique no icone baixo para gerar o seu boleto manualmente</h2>   
  
  <div class='center buttons-sucesso'>
    <a class='btn btn--animated' href='/'>Voltar para o site</a>     
      <div class='boleto'>
                   <form action="https://www.boletobancario.com/boletofacil/integration/button/checkout.html" method="post">
                    <input type="hidden" name="code" value="FD9F8502A2392189" />
                    <input type="image" src="https://www.boletobancario.com/boletofacil/img/payment-buttons/button-box-medium.png" name="submit" alt="Pague com Boleto Banc&aacute;rio!" />
                    </form>
                </div>      
    </div>
  </div>
</template>


<style scoped>
.sucess-page {       
   height: 104vh;
  background-image: linear-gradient(to right bottom, rgba(17, 17, 17, 0.527),
   rgba(49, 49, 49, 0.8)), url('~assets/imagens/2.jpg');
  background-size: cover;
  background-position: top;
  /* clip-path: polygon(0 0, 100% 0, 100% 80vh, 0 100%); */
  position: relative;
  display: grid;
  justify-content: center;
  align-content: center;  
  margin-top: -100px;
  position: relative;
}
.title-h1 {
    font-size: 4rem;    
}

.title-h3 {    
    margin-bottom: 2em;    
    font-size: 1.9rem;
    line-height: 2.5rem;
    font-family: 'Kalam', cursive;
    color: #ccc;
    max-width: 53rem;
}
.congratulations {
    font-size: 4.2rem;
    color: var(--Sucess);
    font-weight: 800;
}
.btn{
    background: var(--Sucess);
    color: var(--Color_02);
}
.buttons-sucesso {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

</style>
