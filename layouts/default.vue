<template>
  <div>
    <KNav />
    <!-- <TheHeader @sidenavToggle="displaySidenav =!displaySidenav" />
    <TheSidenav
      :show="displaySidenav"
      @close="displaySidenav = false" /> -->
    <nuxt />
  </div>
</template>

<script>
import KNav from '~/components/Navigation/KNav'

export default {  
  components: {
    KNav    
  },
  data() {
    return {
      displaySidenav: false
    }

  }
}
</script>

<style>
html {
  font-family: 'Open Sans', sans-serif;     
}



</style>
