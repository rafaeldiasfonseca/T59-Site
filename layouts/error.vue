<template>
  <div class="error-page">
    <h1>Opa, algo deu errado!</h1>
    <p>volte para o <a href="/">site</a>!</p>
  </div>
</template>

<style scoped>
.error-page {
  text-align: center;
}

.error-page a {
  text-decoration: none;
  color: red;
}

.error-page a:hover,
.error-page a:active {
  color: salmon;
}
</style>