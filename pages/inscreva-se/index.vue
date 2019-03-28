<template>
  <div class="inscreva-se">
      <section class='container mg-12'>
            <h2 class='title-h2-light center'>Inscrições limitadas</h2>
            <MailChimpForm />  
         

                    
        </section>
  
  </div>
</template>
<script>
import MailChimpForm from '@/components/Forms/MailChimpForm'
export default {
  components: {
    MailChimpForm
  }
  
}
</script>


<style scoped>
  input{
    text-indent: 0.9rem;
  }
 .btn-submit{
  border: 0;
  width: 100%;
  height: 3.5em;
  color: #fff;
  background-color: var(--Sucess);
}
.inscreva-se {
  
  margin-top: -100px;
  text-align: center;
  padding: 30px;  
  background-image: linear-gradient(to right bottom, rgba(17, 17, 17, 0.527),
   rgba(49, 49, 49, 0.8)), url('~assets/imagens/7.jpg');
  background-size: cover;
  background-position: top;
  /* clip-path: polygon(0 0, 100% 0, 100% 80vh, 0 100%); */
  position: relative;  
}


</style>

