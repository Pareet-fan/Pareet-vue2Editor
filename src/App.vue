
<template>
  <section>
    <router-view/>
  </section>
</template>

<script>
export default {
  name: 'App',
}
</script>


<style lang="less" scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 35px;
}
</style>
