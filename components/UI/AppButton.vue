<template>
  <button
    class="button"
    :class="btnStyle"
    v-bind="$attrs"
    v-on="$listeners"><slot /></button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    btnStyle: {
      type: String,
      default: ''
    }
  }
}
</script>


<style scoped>


.button {
  font-family: 'Kalam', sans-serif;       
  font-size: 1.5rem;
  background-color: var(--Sucess);
  color: white;
  padding: 0.9em 3.7em;
  cursor: pointer;
  border: 0;
  
}

.button:hover,
.button:active {
  background-color: var(--Sucess);
 
}

.inverted {
  background-color: white;
  color: black;
}

.inverted:hover,
.inverted:active {

  background-color: white;  
}

.cancel {
  background-color: red;
  color: white;  
}

.cancel:hover,
.cancel:active {
  background-color: salmon; 
  color: white;
}
</style>
