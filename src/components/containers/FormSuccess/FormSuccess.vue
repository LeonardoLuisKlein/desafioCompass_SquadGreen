<template>
    <div class="header">
        <Header />
        <div id="formSuccess">
            <div class="sectionForm">



                <div class="formBody">
                    <TextComponent text="Your data has been sent successfully!" />
                    <TextComponent text="Full Name:" :cText="this.fullname" />
                    <TextComponent text="Email: " :cText="this.email" />
                    <TextComponent text="Birthday: " />
                    <TextComponent text="Age: " :cText="this.age" />
                    <TextComponent text='GitHub: ' :cText="this.github" />
                    <TextComponent text="Certificates: " />
                    <TextComponent text="Team Name: " :cText="this.teamName" />
                    <TextComponent text="Institution: " :cText="this.institution" />
                    <TextComponent text="Graduation: " :cText="this.graduation" />


                </div>


                <div class="formButton">
                    <Button text="Return" classButton="next" :clickButton="clearLocalStorage" />
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
    },
    data() {
        return {
            fullname: "",
            email: "",
            birthday: "",
            age: "",
            github: "",
            certificates: "",
            teamName: "",
            institution: "",
            graduation: "",
        }
    },

    methods: {
        getLocalStorage() {
            this.fullname = localStorage.getItem("fullname")
            this.email = localStorage.getItem("email")
            this.age = localStorage.getItem("age")
            this.github = localStorage.getItem("github")
            this.teamName = localStorage.getItem("teamName")
            this.institution = localStorage.getItem("institution")
            this.graduation = localStorage.getItem("graduation")
        },

        clearLocalStorage() {
            localStorage.clear()
            this.$router.push('/')
        }
    },

    mounted() {
        this.getLocalStorage();
        if (this.$store.state.controlFullname == false || this.$store.state.controlEmail == false || this.$store.state.controlGitHub == false
            || this.$store.state.controlInstitution == false || this.$store.state.controlGraduation == false || this.$store.state.controlTeamName == false) {
            this.$router.push('/error401')
        }
    },
}

</script>

<style lang="scss" scoped>
@import './FormSuccess.scss'
</style>