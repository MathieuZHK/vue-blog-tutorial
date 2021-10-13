<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="navbar">
    <h1>The Vue Blog</h1>
    <div class="links">
      <RouterLink to="/" exact-active-class="is--active">Home</RouterLink>
      <RouterLink to="/create-post" exact-active-class="is--active">
        Create Post
      </RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  padding: 20px;
  display: flex;
  align-items: center;
  max-width: 960px;
  margin: 0 auto;
  border-bottom: 1px solid #f2f2f2;
}

.navbar h1 {
  font-weight: 700;
  color: #059669;
}

.navbar .links {
  margin-left: auto;
}

.navbar a {
  margin-left: 16px;
  text-decoration: none;
  padding: 6px;
}

.navbar a:hover {
  color: #059669;
}

.navbar a.is--active {
  color: #059669;
}
</style>
