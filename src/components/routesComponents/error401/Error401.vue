<template>
    <div class="errorPage">
        <img src="@/assets/error401.gif" alt="Erro 401" class="errorGif">
        <h3>You will be redirected in {{ time }} seconds...</h3>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line
    name: "Error401",
    data() {
        return {
            time: 5
        }
    },
    methods: {
        redirect() {
            this.time--
            if (this.time == 0) {
                this.$router.push('/')
            }
        }
    },

    mounted() {
        setInterval(() => {
            this.redirect()
        }, 1000);
        localStorage.clear()
        this.$store.state.controlFullname = false
        this.$store.state.controlEmail = false
        this.$store.state.controlGitHub = false
        this.$store.state.controlInstitution = false
        this.$store.state.controlGraduation = false
        this.$store.state.controlTeamName = false
        this.$store.state.controlcontrolAge = false
        this.$store.state.controlCertificates = false
    }
}
</script>

<style lang="scss" scoped>
@import './Error401.scss';
</style>