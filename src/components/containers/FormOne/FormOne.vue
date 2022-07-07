<template>
  <div class="header">
    <Header />
    <div id="formOne">
      <div class="sectionForm">
        
      </div>
    </div>
  </div>
</template>

<script>

import Header from '../../experience-fragments/Header/Header.vue'

export default {
  name: "formOne",
  components: { Header }
}
</script>

<style lang="scss" scoped>
@import './FormOne.scss';
</style>