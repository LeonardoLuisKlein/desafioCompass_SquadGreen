<template>

  <div class="header">
    <Header />
    <div id="formThird">
      <div class="sectionForm">
        <div class="divTitle">
          <Title type="h1" tMessage="Team sign Up" nameClass="titleDefault" />
        </div>
        <div class="buttonsTop">
          <Button text="Basic" classButton="Border" />
          <Button text="Social" classButton="Border" />
          <Button text="Certificates" classButton="Border selected" />
        </div>

        <div class="divBody">
          <div class="certificatesBody">
            <Label inputLabel="linkedin" className="defaultLabel" text="Certificates" />
            <Inputs inputClass="inputBorder bigInput" id="linkedin"
              placeHolder="https://www.linkedin.com/in/foo-bar-3a0560104/" />
            <div class="divCertificateButtons">
              <!-- <select text="Certificates" classButton="certificates"/> -->
              <div class="errorSelect">
              <select name="certificates" class="certificates">
                <option value="" disabled selected> Certificates</option>
              </select>
              </div>
              <div class="errorMore">
                <Button text="+ More >" classButton="more" />
                <TextComponent text="Empty certificate is not allowed" className="mediumLowSize error" id="smallError"/>
                <TextComponent text="Sorry, only 5 certificates are allowed. You can remove one certificate instead" className="mediumLowSize error" id="bigError"/>
              </div>
            </div>
          </div>

          <div class="teamBody">
            <div class="separationName">
            <Label inputLabel="team" className="defaultLabel" text="Team Name *" />
            <TextComponent text="Please enter your Team Name" className="mediumLowSize error" />
            </div>
            <Inputs inputClass="inputBorder bigInput" id="team"
              placeHolder="https://www.linkedin.com/in/foo-bar-3a0560104/" />
          </div>

          <div class="institutionBody">
            <div class="separationName">
            <Label inputLabel="institution" className="defaultLabel" text="Institution *" />
            <TextComponent text="Please enter your Institution" className="mediumLowSize error" />
            </div>
            <Inputs inputClass="inputBorder bigInput" id="institution" placeHolder="Universidade Federal da Paraíba" />
          </div>

          <div class="graduationBody">
            <div class="separationName">
            <Label inputLabel="graduation" className="defaultLabel" text="Graduation *" />
            <TextComponent text="Please enter your Graduation" className="mediumLowSize error" />
            </div>
            <Inputs inputClass="inputBorder bigInput" id="graduation" placeHolder="Ciências da Computação" />
          </div>

        </div>

        <div class="divFooter">
          <Button text="Finish " classButton="next" />
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
import TextComponent from '@/components/micro/Text/Text.vue'

export default {
  name: "FormSecond",
  components: {
    Header, Title, Button, Label, Inputs, TextComponent
  }
}

</script>

<style lang="scss" scoped>
@import './FormThird.scss'
</style>