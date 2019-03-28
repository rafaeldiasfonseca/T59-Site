<template>
  <div class="admin-page">
      
      <div class='container'>
        <div class="card" v-for="cadastroUser in cadastroUsers" :key="cadastroUser.id">
          <div class="card-content">
            <h2>{{ cadastroUser.nome }}</h2>
          </div>
        
        </div>
      </div>




      <!-- <div class='login-info'>
        teste

      </div>
    <section class="new-post">
      <AppButton @click="$router.push('/admin/new-post')">Publicar</AppButton>
      <AppButton style="margin-left: 10px" @click="onLogout">Logout</AppButton>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <PostList
        isAdmin
        :posts="loadedPosts" />
    </section>-->
  </div> 
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['check-auth','auth'],

  data() {
    return{
      cadastroUsers: [
        { nome: 'NomeDeUsuario', slug: 'slug' , telefone: '(DD)XXXXX-XXXX', categoria: 'Categoria', dadosPessoais: ['RG', 'CPF', 'dataDeNasc' ], id: '33' },
        { nome: 'NomeDeUsuario2', slug: 'slug2' , telefone: '(DD)XXXXX-XXXX', categoria: 'Categoria', dadosPessoais: ['RG', 'CPF', 'dataDeNasc' ], id: '34' }
    ]   }
    },
  



  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
            
    }
  },
  methods: {
    onLogout(){
     this.$store.dispatch('logout');
     this.$router.push('/admin/auth');
    }
  },
  
  head: {
    title: 'T59 Enterprise Painel de controle',
    meta: [
      { hid: 'description', name: 'description', content: 'Painel de controle' }
    ]

    
}}
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>

