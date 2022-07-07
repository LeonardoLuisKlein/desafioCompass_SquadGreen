<template>
  <div id="divHeader">
    <section class="sectionTitle">
      <Title type="h1" tMessage="Forms" class="smallTitle" />
      <Title type="h2" tMessage="First Tab" class="blueTitle" />
    </section>
  </div>
</template>

<script>
import Title from '@/components/micro/Title/Title.vue';
export default {
  // eslint-disable-next-line
  name: "Header",
  components: { Title }
}
</script>

<style lang="scss" scoped>
@import './Header.scss';
</style>