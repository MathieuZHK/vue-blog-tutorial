<script setup lang="ts">
import NavBar from "@/presentation/components/NavBar.vue";
</script>

<template>
  <main>
    <NavBar />
    <div class="content">
      <router-view></router-view>
    </div>
  </main>
</template>

<style>
@import "../index.css";
</style>
