<template>
  <div id="app" class="container">
    <nav class="navbar navbar-expand-sm bg-light">
      <ul class="navbar-nav">
        <li><img class="logo" alt="Vue logo" src="./assets/logo.png"></li>
        <li><router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link></li>
      </ul>
    </nav> 
    <router-view></router-view>
    <notifications group="foo" />
  </div>
</template>

<script>
export default {
  name: 'App',
 
}
</script>
<style>
.logo{
  width: 50px;
  height: 50px;
}

</style>
