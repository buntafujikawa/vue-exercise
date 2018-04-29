<template>
  <div id="app">
    <Navigation />
    <Friends />
    <FooterComponent />
    <!--<img src="./assets/logo.png">-->
    <!--<router-link to="friends">Friends</router-link>-->
    <!--<router-link to="account">Account</router-link>-->
    <!--<router-link to="contact">Contact</router-link>-->
    <!--<router-view/>-->
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import Friends from './components/Friends'
import FooterComponent from './components/Footer'

export default {
  name: 'App',
  components: {
    Navigation,
    Friends,
    FooterComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
