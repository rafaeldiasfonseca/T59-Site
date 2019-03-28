<template>
     <form @submit.prevent="onSave">
        <AppControlInput v-model="editedPost.author">Nome do Autor</AppControlInput>        
        <AppControlInput v-model="editedPost.title">Título</AppControlInput>        
        <AppControlInput v-model="editedPost.thumbnail">Link da Imagem</AppControlInput>        
        <AppControlInput
            control-type="textarea"
            v-model="editedPost.content">Conteúdo</AppControlInput>
            <AppControlInput
            control-type="textarea"
            v-model="editedPost.previewText">Prévia do Post</AppControlInput>          
        <AppButton type="submit">Save</AppButton>        
        <AppButton
            type="button"
            style="margin-left: 10px"
            btn-style="cancel"
            @click="onCancel">Cancel
        </AppButton>
    </form>
</template>
<script>
import AppControlInput from '@/components/UI/AppControlInput'
import AppButton from '@/components/UI/AppButton'

export default {
    components: {
        AppControlInput,
        AppButton
    },
    props: {
        post: {
            type: Object,
            required: false
        }
    },
    data() {
        return {
            editedPost: this.post ? {...this.post } : {
              author: '',
              title: '',
              thumbnail: '',
              content: '',
              previweText: ''
            }
        }
    },
    methods: {
        onSave() {
            // salvando o post
            this.$emit('submit', this.editedPost)
        },
        onCancel() {
            // cancelando o post
            this.$router.push('/admin')
        }
    }
}
</script>


<style scoped>

 AppControlInput {
    color: #111;
 }
</style>
