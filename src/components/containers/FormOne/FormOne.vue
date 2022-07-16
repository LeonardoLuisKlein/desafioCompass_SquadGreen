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
          <Button text="Social" classButton="Border" />
          <Button text="Certificates" classButton="Border" />
        </div>
        <div class="divBody">
          <div class="nameBody">
            <Label inputLabel="name" className="defaultLabel" text="Full Name *" />
            <Inputs inputClass="inputBorder bigInput" id="name" placeHolder="Foo Bar" />
          </div>

          <div class="nickNameBody">
            <Label inputLabel="nickName" className="defaultLabel" text="NickName *" />
            <Inputs inputClass="inputBorder bigInput" id="nickName" placeHolder="Juanito" />
          </div>

          <div class="emailPhoneBody">
            <div class="emailBody">
              <Label inputLabel="email" className="defaultLabel emailLabel" text="Email *" />
              <Inputs inputClass="inputBorder bigInput" id="email" placeHolder="foo@bar.com" />
            </div>

            <div class="phoneBody">
              <Label inputLabel="phone" className="defaultLabel phoneLabel" text="Phone *" />
              <Inputs inputClass="inputBorder bigInput" id="phone" placeHolder="(83) 00000-0000" />
            </div>
          </div>

          <Birthday />
          
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


export default {
  name: "formOne",
  components: { Header, Title, Button, Label, Inputs, Birthday }
}
</script>

<style lang="scss" scoped>
@import './FormOne.scss';
</style>