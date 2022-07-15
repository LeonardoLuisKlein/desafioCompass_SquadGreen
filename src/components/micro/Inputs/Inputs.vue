<template>
  <div>
    <input :type="type" :class="inputClass" :placeholder="placeHolder" :id="id" @input="getValue" />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  // eslint-disable-next-line
  name: "Inputs",
  props: {
    type: String,
    inputClass: String,
    placeHolder: String,
    id: String
  },

  methods: {
    ...mapActions(["setGitHub", "setTeamName", "setInstitution", "setGraduation", "setCertificate", "setFullname", "setEmail"]),

    getValue(e) {
      switch (this.id) {
        case "github":
          this.setGitHub(e.target.value);
          break;
        case "team":
          this.setTeamName(e.target.value);
          break;
        case "institution":
          this.setInstitution(e.target.value);
          break;
        case "graduation":
          this.setGraduation(e.target.value);
          break;
        case "certificates":
          this.setCertificate(e.target.value);
          console.log(e.target.value)
          break;
        case "name":
          this.setFullname(e.target.value);
          break;
        case "email":
          this.setEmail(e.target.value);
          break;

      }
      /*if (this.id === "github") {
        this.setGitHub(e.target.value);
        console.log(e.target.value)
      }else if(this.id === "team") {
        this.setTeamName(e.target.value);
        console.log(e.target.value);
      }else if(this.id === "institution") {
        this.setInstitution(e.target.value);
        console.log(e.target.value);
      } else if(this.id === "graduation") {
        this.setGraduation(e.target.value);
        console.log(e.target.value)
      }*/
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./Inputs.scss";
</style>