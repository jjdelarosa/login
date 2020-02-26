<template>
  <div class="min-h-screen bg-blue-500">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar'
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>