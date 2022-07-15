<template>

  <div class="header">
    <Header />
    <div id="formThird">
      <div class="sectionForm">
        <div class="divTitle">
          <Title type="h1" tMessage="Team sign Up" nameClass="titleDefault" />
        </div>
        <div class="buttonsTop">
          <Button text="Basic" classButton="Border" :clickButton="pushToFormOne" />
          <Button text="Social" classButton="Border" :clickButton="pushToFormSecond"/>
          <Button text="Certificates" classButton="Border selected" />
        </div>

        <div class="divBody">
          <div class="certificatesBody">
            <Label inputLabel="certificates" className="defaultLabel" text="Certificates" />
            <Inputs inputClass="inputBorder bigInput" id="certificates"
              placeHolder="https://www.linkedin.com/in/foo-bar-3a0560104/" />
            <div class="divCertificateButtons">
              <!-- <select text="Certificates" classButton="certificates"/> -->
              <div class="errorSelect">
                <select name="certificates" id="certificatesSelect">
                  <option value="-1" disabled hidden unselectable selected type="radio" > Certificates</option>
                  <option :value="index" v-for="(certificate, index) in this.$store.state.certificates" :key="index" class="item" >
                    {{certificate}} <Button text="X" :clickButton="test" />
                  </option> 
                </select>
              </div>
              <div class="errorMore">
                <Button text="+ More >" classButton="more" :clickButton="addCertificate" />
                <TextComponent text="Empty certificate is not allowed" className="mediumLowSize error" id="errorCertificate"/>
                <TextComponent text="Sorry, only 5 certificates are allowed. You can remove one certificate instead" className="mediumLowSize error" id="bigError"/>
              </div>
            </div>
          </div>

          <div class="teamBody">
            <div class="separationName">
            <Label inputLabel="team" className="defaultLabel" text="Team Name *" />
            <TextComponent text="Please enter your Team Name" className="mediumLowSize error" id="errorTeam"/>
            </div>
            <Inputs inputClass="inputBorder bigInput" id="team"
              placeHolder="https://www.linkedin.com/in/foo-bar-3a0560104/" />
          </div>

          <div class="institutionBody">
            <div class="separationName">
            <Label inputLabel="institution" className="defaultLabel" text="Institution *" />
            <TextComponent text="Please enter your Institution" className="mediumLowSize error" id="errorInstitution"/>
            </div>
            <Inputs inputClass="inputBorder bigInput" id="institution" placeHolder="Universidade Federal da Paraíba" />
          </div>

          <div class="graduationBody">
            <div class="separationName">
            <Label inputLabel="graduation" className="defaultLabel" text="Graduation *" />
            <TextComponent text="Please enter your Graduation" className="mediumLowSize error" id="errorGraduation"/>
            </div>
            <Inputs inputClass="inputBorder bigInput" id="graduation" placeHolder="Ciências da Computação" />
          </div>

        </div>

        <div class="divFooter">
          <Button text="Finish " classButton="next" :clickButton="formThirdValidate" />
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
import { mapActions } from 'vuex'

export default {
  name: "FormSecond",
  components: {
    Header, Title, Button, Label, Inputs, TextComponent
  },

  data() {
    return {
      certificateAmmount: 0
    }
  },

  methods: {
    ...mapActions(["setCertificates"]),

    test() {
      console.log("OPTION ELEMENT REMOVED")
    },
    
      formThirdValidate(){ 
        let isOK = true
        console.log('controlTeam =', this.$store.state.controlTeam)
        console.log('controlInstitution =', this.$store.state.controlInstitution)
        console.log('controlGraduation =', this.$store.state.controlGraduation)

        if(this.$store.state.controlTeam == false) {
            console.log("aaa")
            document.getElementById('errorTeam').style.display = 'flex';
            isOK = false
        }
        else {
          document.getElementById('errorTeam').style.display = 'none';
        }

        if(this.$store.state.controlInstitution == false) {
          document.getElementById('errorInstitution').style.display = 'flex';
          isOK = false
        }
        else {
          document.getElementById('errorInstitution').style.display = 'none';
        }

        if(this.$store.state.controlGraduation == false) {
          document.getElementById('errorGraduation').style.display = 'flex';
          isOK = false
        }
        else {
          document.getElementById('errorGraduation').style.display = 'none';
        }

        if(isOK) {
          this.$router.push('/formSuccess')
        }
    },

    checkCertificate() {
      console.log(this.certificateAmmount)
      if(this.certificateAmmount > 4) {
        document.getElementById('bigError').style.display = 'flex'
        return;
      } 

      this.certificateAmmount++;

      this.setCertificates(this.$store.state.certificate)

      console.log("TESTE", this.$store.state.certificates, this.$store.state.certificates.length)
      
      if(this.certificateAmmount > 0) {
        document.getElementById('certificatesSelect').style.display = 'flex'
      }
    },

    addCertificate() {
      console.log('controlCertificates =', this.$store.state.controlCertificates)
      if(this.$store.state.controlCertificates == false) {
            console.log("aaa")
            document.getElementById('errorCertificate').style.display = 'flex';
          }
          else {
            document.getElementById('errorCertificate').style.display = 'none';
            this.checkCertificate();
          }
    },

        pushToFormOne(){
      this.$router.push('/')
    },

        pushToFormSecond(){
      this.$router.push('/FormSecond')
    }

  } 
}

</script>

<style lang="scss" scoped>
@import './FormThird.scss'
</style>