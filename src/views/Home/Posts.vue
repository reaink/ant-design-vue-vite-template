<template>
  <a-list>
    <a-list-item v-for="(item, index) in posts" :key="index">{{ item }}</a-list-item>
  </a-list>
</template>

<script lang="ts" setup>
export const posts: string[] = [
  'Nisi reprehenderit ipsum qui deserunt sit.',
  'Esse ex proident nostrud exercitation  enim.',
  'Magna sit ea deserunt exercitation deserunt.',
  'Tempor elit ipsum in ut incididunt mollit.',
  'Minim tempor amet ullamco non commodo do nostrud culpa aute tempor do.',
  'Magna ad laboris irure irure cillum Lorem dolor deserunt.',
]
</script>
