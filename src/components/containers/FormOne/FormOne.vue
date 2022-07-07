<template>
  <div class="header">
    <Header />
    <div id="formOne">
      <div class="sectionForm">
        <div class="divTitle">
            <Title type="h1" tMessage="Team sign Up" nameClass="titleDefault"/>
        </div>
        <div class="buttonsTop">
            <Button text="Basic" classButton="Border"/>
            <Button text="Social" classButton="Border"/>
            <Button text="Certificates" classButton="Border"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Header from '../../experience-fragments/Header/Header.vue'
import Title from '@/components/micro/Title/Title.vue'
import Button from '../../micro/Button/Button.vue'

export default {
  name: "formOne",
  components: { Header, Title, Button }
}
</script>

<style lang="scss" scoped>
@import './FormOne.scss';
</style>