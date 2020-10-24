<template>
  <a-layout id="main-layout">
    <a-layout-header class="px-0" style="background: #001529">
      <a-row type="flex">
        <div class="logo"></div>
        <a-menu theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
          <a-menu-item key="1"> nav 1 </a-menu-item>
          <a-menu-item key="2"> nav 2 </a-menu-item>
          <a-menu-item key="3"> nav 3 </a-menu-item>
        </a-menu>
      </a-row>
    </a-layout-header>
    <a-layout-content>
      <router-view />
    </a-layout-content>
    <a-layout-footer class="text-center"> Ant Design Footer </a-layout-footer>
  </a-layout>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px;
}
</style>
