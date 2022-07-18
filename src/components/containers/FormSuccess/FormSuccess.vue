<template>
    <div class="header">
        <Header />
        <div id="formSuccess">
            <div class="sectionForm">



                <div class="formBody">
                    <TextComponent text="Your data has been sent successfully!" />
                    <TextComponent text="Full Name:" :cText="this.fullname" />
                    <TextComponent text="Email: " :cText="this.email" />
                    <TextComponent text="Birthday: " :cText="this.birthday"/>
                    <TextComponent text="Age: " :cText="this.age" />
                    <TextComponent text='GitHub: ' :cText="this.github" />
                    <TextComponent text="Certificates: " :cText="this.certificates" />
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
            teamName: "",
            institution: "",
            graduation: "",
            certificates: [],
        }
    },

    methods: {
        getLocalStorage() {
            const day = localStorage.getItem("day");
            const month = localStorage.getItem("month");
            const year = localStorage.getItem("year");
            this.fullname = localStorage.getItem("name")
            this.email = localStorage.getItem("email")
            this.age = localStorage.getItem("age")
            this.birthday = `${day}/${month}/${year}`
            this.github = localStorage.getItem("github")
            this.teamName = localStorage.getItem("teamName")
            this.institution = localStorage.getItem("institution")
            this.graduation = localStorage.getItem("graduation")
            this.certificates = localStorage.getItem("certificates")
        },

        clearLocalStorage() {
            localStorage.clear()
            this.$router.push('/')
            this.$store.state.controlFullname = false
            this.$store.state.controlEmail = false
            this.$store.state.controlGitHub = false
            this.$store.state.controlInstitution = false
            this.$store.state.controlGraduation = false
            this.$store.state.controlTeamName = false
            this.$store.state.controlcontrolAge = false
            this.$store.state.controlCertificates = false
        }
    },

    mounted() {
        this.getLocalStorage();
        if (this.$store.state.controlFullname == false || this.$store.state.controlEmail == false || this.$store.state.controlGitHub == false
            || this.$store.state.controlInstitution == false || this.$store.state.controlGraduation == false || this.$store.state.controlTeamName == false
            || this.$store.state.controlcontrolAge == false) {
            this.$router.push('/error401')
        }
    },
}

</script>

<style lang="scss" scoped>
@import './FormSuccess.scss'
</style>