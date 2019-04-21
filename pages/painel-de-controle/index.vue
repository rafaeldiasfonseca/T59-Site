<template>
  <div class="admin-post-page">
    <section class="update-form">     
      
    </section>
  </div>
</template>

<script>

export default {
  layout: "admin",
  middleware: ['check-auth','auth']   
}  
  
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>





