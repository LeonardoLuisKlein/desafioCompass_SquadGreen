<template>
  <div id="divHeader">
    <section class="sectionTitle">
      <Title v-if="this.$route" type="h1" tMessage="Forms" class="smallTitle" />
      <Title v-if="this.$route.name === 'FormOne'" type="h2" tMessage="First Tab" class="blueTitle" />
      <Title v-if="this.$route.name === 'FormSecond'" type="h2" tMessage="Second Tab" class="blueTitle" />
      <Title v-if="this.$route.name === 'FormThird'" type="h2" tMessage="Third Tab" class="blueTitle" />
      <Title v-if="this.$route.name === 'FormSuccess'" type="h2" tMessage="Success Tab" class="blueTitle" />
    </section>
  </div>
</template>

<script>
import Title from '@/components/micro/Title/Title.vue';
export default {
  // eslint-disable-next-line
  name: "Header",
  components: { Title },
}
</script>

<style lang="scss" scoped>
@import './Header.scss';
</style>