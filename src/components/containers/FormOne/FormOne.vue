<template>
  <div class="header">
    <Header />
    <div id="formOne">
      <div class="sectionForm">
        <div class="divTitle">
            <Title type="h1" tMessage="Team sign Up" nameClass="titleDefault"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Header from '../../experience-fragments/Header/Header.vue'
import Title from '@/components/micro/Title/Title.vue'

export default {
  name: "formOne",
  components: { Header, Title }
}
</script>

<style lang="scss" scoped>
@import './FormOne.scss';
</style>