<template>
  <a-row class="mt-2">
    <router-view />
    <a-row class="w-100" type="flex" justify="center">
      <a-button @click="toRoute('Home')">Home</a-button>
      <a-button @click="toRoute('Posts')">Posts</a-button>
      <a-button @click="toRoute('About')">About</a-button>
    </a-row>
  </a-row>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function toRoute(name) {
  router.push({ name })
}
</script>
