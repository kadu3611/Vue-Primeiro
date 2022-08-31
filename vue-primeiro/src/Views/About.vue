<template>
<div class='center'>
A forma mais simples de testar Vue.js é usando o exemplo de Olá Mundo no CodeSandbox. Sinta-se à vontade para abrí-lo em outra aba e acompanhar conosco durante alguns exemplos básicos.
<div>
<router-link to="/config"> Próximo </router-link>
</div>
</div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: 'About'
    }
  }
}
</script>
<style src="./style.css" scoped />
