<template>
<div class="container bg-black w-screen h-screen">
<Nav/>
<Dashboard/>
</div>
</template>

<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Dashboard from '../components/Dashboard.vue'
import Nav from '../components/Nav.vue'

export default {
  components: {
    Nav,
    Dashboard
  }
}
</script>

<style scoped>


</style>