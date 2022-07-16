<template>
  <div class="header">
    <Header />
    <div id="formOne">
      <div class="sectionForm">
        <div class="divTitle">
          <Title type="h1" tMessage="Team sign Up" nameClass="titleDefault" />
        </div>
        <div class="buttonsTop">
          <Button text="Basic" classButton="Border selected" />
          <Button text="Social" classButton="Border" :clickButton="pushToFormSecond" />
          <Button text="Certificates" classButton="Border" :clickButton="pushToFormThird" />
        </div>
        <div class="divBody">
          <div class="nameBody">
            <div class="separationName">
              <Label inputLabel="name" className="defaultLabel" text="Full Name*" />
              <TextComponent text="Please enter your Name" className="mediumLowSize error" id="errorFullname" />
            </div>
            <Inputs inputClass="inputBorder bigInput" id="name" placeHolder="Foo Bar" />
          </div>

          <div class="nickNameBody">
            <Label inputLabel="nickName" className="defaultLabel" text="NickName" />
            <Inputs inputClass="inputBorder bigInput" id="nickName" placeHolder="Juanito" />
          </div>

          <div class="emailPhoneBody">
            <div class="emailBody">

              <div class="separationName">
                <Label inputLabel="email" className="defaultLabel emailLabel" text="Email*" />
                <TextComponent text="Please enter your Email" className="mediumLowSize error" id="errorEmail" />
              </div>
              <Inputs inputClass="inputBorder bigInput" id="email" placeHolder="foo@bar.com" />
            </div>

            <div class="phoneBody">
              <Label inputLabel="phone" className="defaultLabel phoneLabel" text="Phone" />
              <Inputs inputClass="inputBorder bigInput" id="phone" placeHolder="(83) 00000-0000" />
            </div>
          </div>

          <Birthday />
          <div class="separationName">
            <Checkbox text="I accept the terms and privacy" />
            <TextComponent text="Please accpet the terms" className="mediumLowSize error" id="errorTerms" />

          </div>
          <div class="divFooter">
            <Button text="Next >" classButton="next" :clickButton="formOneValidate" />
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Header from '../../experience-fragments/Header/Header.vue'
import Title from '@/components/micro/Title/Title.vue'
import Button from '../../micro/Button/Button.vue'
import Label from '@/components/micro/Label/Label.vue'
import Inputs from '@/components/micro/Inputs/Inputs.vue'
import Birthday from '@/components/micro/Birthday/birthday.vue'
import TextComponent from '@/components/micro/Text/Text.vue'
import Checkbox from '@/components/micro/Checkbox/Checkbox.vue'

export default {
  name: "formOne",
  components: { Header, Title, Button, Label, Inputs, TextComponent, Birthday, Checkbox },
  methods: {
    formOneValidate() {
      let isOK = true
      if (this.$store.state.controlFullname == false) {
        document.getElementById('errorFullname').style.visibility = "visible";
        isOK = false
      }
      else {
        document.getElementById('errorFullname').style.visibility = "hidden";
      }
      if (this.$store.state.controlEmail == false) {
        document.getElementById('errorEmail').style.visibility = "visible";
        isOK = false
      }
      else {
        document.getElementById('errorEmail').style.visibility = "hidden";
      }
      if (isOK) {
        this.$router.push('/formSecond')
      }
    },

    pushToFormSecond() {
      if (this.$store.state.controlFullname == true || this.$store.state.controlEmail == true) {
        this.$router.push('/formSecond')
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import './FormOne.scss';
</style>