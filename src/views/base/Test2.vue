<template>
  <div class="about">
    <h1>{{ userId }}</h1>
  </div>
</template>

<script>
export default ({
  props: ['userId'],
  mounted() {
    console.log(this.$route)
  }
})
</script>
