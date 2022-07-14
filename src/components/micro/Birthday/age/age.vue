<template>
  <div>
    <Label inputLabel="age" className="defaultLabel dateLabel" text="Age" />
    <div class="age">
      <h1 contentEditable=false data-ph="18" id="ageId" class="resultAge">{{ $store.state.age }}</h1>
    </div>
  </div>
</template>

<script>
import Label from '../../Label/Label.vue'
import { mapActions } from 'vuex';
export default {
  // eslint-disable-next-line
  name: "Age",
  components: { Label },
  data() {
    return {
      age: "",

    }
  },
  methods: {
    ...mapActions(["setAge","calc"]),
    valueAge() {
      this.setAge(this.$store.state.age)
      this.calc(this.$store.state.calc)
    },
  },
  created() {
    this.valueAge()
  }

}
</script>

<style lang="scss" scoped>
@import "./age.scss";
</style>