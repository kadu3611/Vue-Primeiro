<template>
<div id="nav">

<router-link to="/home"> Home </router-link>
<router-link to="/about"> About </router-link>
<router-link to="/config"> Config </router-link>
</div>

</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      msg: 'Primeiro App-Vue'
    }
  }
}
</script>
