<template>
  <div id="app" class="container">
    <nav class="navbar navbar-expand-sm bg-light">
      <ul class="navbar-nav">
        <li>Layout Main</li>
        <li class="nav-item">
          <router-link :to="{ name: 'CreateInfo' }" class="nav-link">Create Info</router-link>
        </li>
       <li class="nav-item">
          <router-link :to="{ name: 'ListingInfo' }" class="nav-link">Listing Info</router-link>
        </li>
      </ul>
    </nav> 
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'MainLayout',
}
</script>
<style>
.logo{
  width: 50px;
  height: 50px;
}

</style>
