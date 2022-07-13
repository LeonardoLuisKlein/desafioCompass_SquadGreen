<template>
  <div>
    <input 
    :type="type"
    :class="inputClass"
    :placeholder="placeHolder"
    @input="getValue"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  // eslint-disable-next-line
  name: "Inputs",
  props:{
    type: String,
    inputClass: String,
    placeHolder: String,
  },

   methods: {
    ...mapActions(["setGitHub"]),

    getValue(e) {
      if (this.type === "text") {
        this.setGitHub(e.target.value);
        console.log(e.target.value)
      }
    }
   }
}
</script>

<style lang="scss" scoped>
  @import "./Inputs.scss";
</style>