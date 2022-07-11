<template>
    <div class="header">
    <Header />
    <div id="formSuccess">
      <div class="sectionForm">
        
        <div class="formBody">
            <TextComponent text="Your data has been sent successfully!"/> 
            <TextComponent text="Full Name: "/> 
            <TextComponent text="Email: "/> 
            <TextComponent text="Birthday: "/> 
            <TextComponent text="Age: "/> 
            <TextComponent text="GitHub: "/> 
            <TextComponent text="Certificates: "/> 
            <TextComponent text="Team Name: "/> 
            <TextComponent text="Institution: "/> 
            <TextComponent text="Graduation: "/>

            
        </div> 
        

        <div class="formButton">
            <Button text="Return" classButton="next"/>
        </div>

        
        

      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/experience-fragments/Header/Header.vue'
import TextComponent from '@/components/micro/Text/Text.vue'
import Button from '@/components/micro/Button/Button.vue'

export default {
    name: "FormSuccess",
    components: {
        Header,
        TextComponent,
        Button
    }
}

</script>

<style lang="scss" scoped>

@import './FormSuccess.scss'

</style>