<template>

    <div class="header">
    <Header />
    <div id="FormSecond">
      <div class="sectionForm">
        <div class="divTitle">
            <Title type="h1" tMessage="Team sign Up" nameClass="titleDefault"/>
        </div>
        <div class="buttonsTop">
            <Button text="Basic" classButton="Border"/>
            <Button text="Social" classButton="Border selected"/>
            <Button text="Certificates" classButton="Border"/>
        </div>
        <div class="divBody"> 
          <div class="linkedinBody">
            <Label inputLabel="linkedin" className="defaultLabel" text="Linkedin"/>
            <Inputs inputClass="inputBorder bigInput" id="linkedin" placeHolder="https://www.linkedin.com/in/foo-bar-3a0560104/"/>
          </div>

          <div class="githubBody">
            <Label inputLabel="github" className="defaultLabel" text="Github *"/>
            <Inputs inputClass="inputBorder bigInput" id="gihub" placeHolder="https://github.com/foobar"/>
          </div>
        </div>
        
        <div class="divFooter">
          <Button text="Next >" classButton="next"/>
        </div>

      </div>
    </div>
  </div>

</template>

<script>

import Header from '@/components/experience-fragments/Header/Header.vue'
import Title from '@/components/micro/Title/Title.vue'
import Button from '../../micro/Button/Button.vue'
import Label from '@/components/micro/Label/Label.vue'
import Inputs from '@/components/micro/Inputs/Inputs.vue'
export default {
    name: "FormSecond",
    components: {
        Header, Title, Button, Label, Inputs
    }
}

</script>

<style lang="scss" scoped>

@import './FormSecond.scss'

</style>