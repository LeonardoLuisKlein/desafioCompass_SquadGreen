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

          <div class="datesBody">
            <div class="datesBodyHeader">
              <Label inputLabel="" className="defaultLabel phoneLabel" text="Birthday *" />
            </div>

            <div class="dates">
              <div class="days">
                <Day />
              </div>
              <div class="months">
                <Month />
              </div>
              <div class="years">
                <Year />
              </div>
              <div class="ages">
                <Age />
              </div>
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
import Day from '@/components/micro/Birthday/day/day.vue'
import Month from '@/components/micro/Birthday/month/month.vue'
import Year from '@/components/micro/Birthday/year/year.vue'
import Age from '@/components/micro/Birthday/age/age.vue'

export default {
  name: "formOne",
  components: { Header, Title, Button, Label, Inputs, Day, Month, Year, Age }
}
</script>

<style lang="scss" scoped>
@import './FormOne.scss';
</style>