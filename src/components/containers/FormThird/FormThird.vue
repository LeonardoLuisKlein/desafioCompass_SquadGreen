<template>

    <div class="header">
    <Header />
    <div id="formThird">
      <div class="sectionForm">
        <div class="divTitle">
            <Title type="h1" tMessage="Team sign Up" nameClass="titleDefault"/>
        </div>
        <div class="buttonsTop">
            <Button text="Basic" classButton="Border"/>
            <Button text="Social" classButton="Border"/>
            <Button text="Certificates" classButton="Border selected"/>
        </div>

        <div class="divBody"> 
          <div class="certificatesBody">
            <Label inputLabel="linkedin" className="defaultLabel" text="Certificates"/>
            <Inputs inputClass="inputBorder bigInput" id="linkedin" placeHolder="https://www.linkedin.com/in/foo-bar-3a0560104/"/>
            <div class="divCertificateButtons">
                <!-- <select text="Certificates" classButton="certificates"/> -->
                <select name="certificates" class="certificates">
                    <option value="" disabled selected>   Certificates</option>
                </select>
                <Button text="+ More >" classButton="more"/>
            </div>
          </div>
            
          <div class="teamBody">
            <Label inputLabel="team" className="defaultLabel" text="Team Name *"/>
            <Inputs inputClass="inputBorder bigInput" id="team" placeHolder="https://www.linkedin.com/in/foo-bar-3a0560104/"/>
          </div>

          <div class="institutionBody">
            <Label inputLabel="institution" className="defaultLabel" text="Institution *"/>
            <Inputs inputClass="inputBorder bigInput" id="institution" placeHolder="Universidade Federal da Paraíba"/>
          </div>
          
        <div class="graduationBody">
            <Label inputLabel="graduation" className="defaultLabel" text="Graduation *"/>
            <Inputs inputClass="inputBorder bigInput" id="graduation" placeHolder="Ciências da Computação"/>
          </div>

        </div>
        
        <div class="divFooter">
          <Button text="Finish " classButton="next"/>
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

@import './FormThird.scss'

</style>