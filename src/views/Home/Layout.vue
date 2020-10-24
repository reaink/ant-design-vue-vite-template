<template>
  <a-row class="mt-2">
    <router-view />
    <a-row type="flex" justify="center">
      <a-button @click="toRoute('Home')">Home</a-button>
      <a-button @click="toRoute('Posts')">Posts</a-button>
      <a-button @click="toRoute('About')">About</a-button>
    </a-row>
  </a-row>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

export function toRoute(name) {
  router.push({ name })
}
</script>
