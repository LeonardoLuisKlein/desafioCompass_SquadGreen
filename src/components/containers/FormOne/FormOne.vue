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
              <Label inputLabel="name" className="defaultLabel" text="Full Name *" />
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
                <Label inputLabel="email" className="defaultLabel emailLabel" text="Email *" />
                <TextComponent text="Please enter your Email" className="mediumLowSize error" id="errorEmail" />
              </div>
              <Inputs inputClass="inputBorder bigInput" id="email" placeHolder="foo@bar.com" />
            </div>

            <div class="phoneBody">
              <Label inputLabel="phone" className="defaultLabel phoneLabel" text="Phone" />
              <Inputs inputClass="inputBorder bigInput" id="phone" placeHolder="(83) 00000-0000" />
            </div>
          </div>

          <div class="datesBody">
            <div class="datesBodyHeader">
              <div class="separationName">
                <Label inputLabel="" className="defaultLabel phoneLabel" text="Birthday *" />
                <TextComponent text="Please enter your Age" className="mediumLowSize error" />
              </div>
            </div>

            <div class="datesDay">
              <Label inputLabel="day" className="defaultLabel dateLabel" text="Day" />
            </div>

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
import TextComponent from '@/components/micro/Text/Text.vue'

export default {
  name: "formOne",
  components: { Header, Title, Button, Label, Inputs, TextComponent },
  methods: {
    formOne() {
      let isOK = true
      if (this.$store.state.controlFullname == true) {
        this.isOk = true;
      } else {
        document.getElementById('errorFullname').style.display = 'block';
        this.isOk = false;
      }
      if (this.$store.state.controlEmail == true) {
        this.isOk = true;
      } else {
        document.getElementById('errorEmail').style.display = 'block';
        this.isOk = false;
      }

      if (isOK) {
        this.$router.push('/formSecond')
      }
    },

    pushToFormSecond() {
      if (this.$store.state.controlFullname == true || this.$store.state.controlEmail == true) {
        this.$router.push('/formSecond')
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@import './FormOne.scss';
</style>