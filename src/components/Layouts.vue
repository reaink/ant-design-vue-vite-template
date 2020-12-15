<template>
  <component :is="currentLayout" />
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  name: 'VueExtendLayout2',
  props: {
    layout: {
      type: String,
      default: 'default',
    },
    loading: {
      type: String,
      default: null,
    },
    prefix: {
      type: String,
      default: '',
    },
    path: {
      type: String,
      default: 'layouts',
    },
  },
  data() {
    return {
      layoutName: 'default',
    }
  },
  computed: {
    currentLayout() {
      if (!this.layoutName) return
      const ln = this.prefix + this.layoutName
      return defineAsyncComponent(() => import(`../${this.path}/${ln}.vue`))
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler(route) {
        const newLayout = route.meta.layout
        if (!newLayout && !this.$route.name) {
          this.layoutName = this.loading
          return
        }
        if (!newLayout) {
          this.layoutName = this.layout || 'default'
          return
        }
        this.layoutName = newLayout
      },
    },
  },
}
</script>
