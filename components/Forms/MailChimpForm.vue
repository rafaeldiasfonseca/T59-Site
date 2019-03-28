<template>
<div class="container">
   <!-- Begin Mailchimp Signup Form -->
<div id="mc_embed_signup">
<form action="https://rafaeldiasfonseca.us20.list-manage.com/subscribe/post?u=ce92b1d60e9dce08295e908b6&amp;id=de6b7e110b" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
		
		<div class='form-02-columns'>	
			<!-- Nome e Sobrenome -->
			<input type="text" placeholder="Nome" value="" name="FNAME" class="" id="mce-FNAME">					
			<input type="text" placeholder="Sobrenome" value="" name="LNAME" class="" id="mce-LNAME">			
		</div>
    <!-- Email e Idade -->
      <div class='form-02-columns'>		
        <input type="email" placeholder="Email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
        <input type="text" value="" placeholder="Idade" name="MMERG5" class="" id="mce-MMERGE5">		       
      </div>
		
		<div class="form-02-columns">			
		<input type="text" placeholder="RG" value="" name="MMERGE7" class="" id="mce-MMERGE7">
		<input type="text" value="" placeholder="CPF" name="MMERGE8" class="" id="mce-MMERGE8">
		</div>
	<h2 class='title-h2-light'>Qual é a sua Categoria?</h2>
	<div class='form-02-columns'>		
  

	<div class="inputGroup">
		<input type="radio" value="Categoria1" name="MMERGE6" id="mce-MMERGE6-1"><label for="mce-MMERGE6-1">Junior - Masc. Até 18 anos</label>
	</div>
	<div class="inputGroup">
		<input type="radio" value="Categoria2" name="MMERGE6" id="mce-MMERGE6-2"><label for="mce-MMERGE6-2">Junior - Fem. Até 18 anos</label>
	</div>
	
	<div class="inputGroup">
		<input type="radio" value="Categoria3" name="MMERGE6" id="mce-MMERGE6-3"><label for="mce-MMERGE6-3">Profissional. 18 anos +</label>
	</div>
	<div class="inputGroup">
		<input type="radio" value="Categoria4" name="MMERGE6" id="mce-MMERGE6-4"><label for="mce-MMERGE6-4">Master Surf. 18 anos +</label>
	</div>
	
	<div class="inputGroup">
		<input type="radio" value="Categoria5" name="MMERGE6" id="mce-MMERGE6-5"><label for="mce-MMERGE6-5">G.Master. 45 anos +</label>
	</div>
	<div class="inputGroup">
		<input type="radio" value="Categoria6" name="MMERGE6" id="mce-MMERGE6-6"><label for="mce-MMERGE6-6">Long Board</label>
	</div></div>


	  <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_ce92b1d60e9dce08295e908b6_de6b7e110b" tabindex="-1" value=""></div>
</div>
    <div class="clear"><input type="submit" style="font-size:1.5rem;" value="Eu estou Pronto" name="subscribe" id="mc-embedded-subscribe" class="btn"></div>
    
</form>
 <!-- INICIO BOTAO BOLETO FACIL - NAO EDITAR -->
<form action="https://www.boletobancario.com/boletofacil/integration/button/checkout.html" method="post">
<input type="hidden" name="code" value="FD9F8502A2392189" />
<input type="image" src="https://www.boletobancario.com/boletofacil/img/payment-buttons/button-box-medium.png" name="submit" alt="Pague com Boleto Banc&aacute;rio!" />
</form>
<!-- FINAL BOTAO BOLETO FACIL -->
</div>

<!--End mc_embed_signup-->
</div>

<!--End mc_embed_signup-->







<!--End mc_embed_signup-->

</template>
<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[6]='MMERGE6';ftypes[6]='radio';fnames[7]='MMERGE7';ftypes[7]='number';fnames[8]='MMERGE8';ftypes[8]='text';fnames[9]='MMERGE9';ftypes[9]='number';fnames[10]='MMERGE10';ftypes[10]='number';fnames[5]='MMERGE5';ftypes[5]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
<!--End mc_embed_signup-->

<script>
export default {
    name:'MailChimpForm'
}
</script>


<style scoped>

input {

  background-color: #fff;
  display: block;
  margin: 10px 0;
  position: relative;
}

label{
	text-align: left;
	font-size: 1.2rem;
	font-weight: 300;
	color: #ccc;
}
.form-02-columns {
	display: grid;
	grid-template-columns:  1fr 1fr;
	grid-gap: 1.4em;
}
.datefield {
	display: grid;
	grid-template-columns: 1fr 1fr;
	/* grid-template-rows: auto; */
	grid-gap: 1.4em;
}
.cat-input {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	font-size: 2rem;
	font-weight: 800;
}


.inputGroup {
  background-color: #fff;
  display: block;
  margin: 10px 0;
  position: relative;
}
.inputGroup label {
  padding: 12px 30px;
  width: 100%;
  display: block;
  text-align: left;
  color: #3C454C;
  cursor: pointer;
  position: relative;
  z-index: 2;
  transition: color 200ms ease-in;
  overflow: hidden;
}
.inputGroup label:before {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  content: '';
  background-color: #5562eb;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%) scale3d(1, 1, 1);
          transform: translate(-50%, -50%) scale3d(1, 1, 1);
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  z-index: -1;
}
.inputGroup label:after {
  width: 32px;
  height: 32px;
  content: '';
  border: 2px solid #D1D7DC;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E ");
  background-repeat: no-repeat;
  background-position: 2px 3px;
  border-radius: 50%;
  z-index: 2;
  position: absolute;
  right: 30px;
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  cursor: pointer;
  transition: all 200ms ease-in;
}
.inputGroup input:checked ~ label {
  color: #fff;
}
.inputGroup input:checked ~ label:before {
  -webkit-transform: translate(-50%, -50%) scale3d(56, 56, 1);
          transform: translate(-50%, -50%) scale3d(56, 56, 1);
  opacity: 1;
}
.inputGroup input:checked ~ label:after {
  background-color: #54E0C7;
  border-color: #54E0C7;
}
.inputGroup input {
  width: 32px;
  height: 32px;
  order: 1;
  z-index: 2;
  position: absolute;
  right: 30px;
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  cursor: pointer;
  visibility: hidden;
}

.form {
  padding: 0 16px;
  max-width: 550px;
  margin: 50px auto;
  font-size: 18px;
  font-weight: 600;
  line-height: 36px;
}
.btn{
	background-color: rgb(35, 165, 94);
}


code {
  background-color: #9AA3AC;
  padding: 0 8px;
}


@media (max-width: 800px) {
  
    .form-02-columns {
	display: grid;
	grid-template-columns:  1fr;
	grid-gap: 1.4em;
}
    
    
  }

</style>
