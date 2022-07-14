<template>
  <div>
    <Label inputLabel="age" className="defaultLabel dateLabel" text="Age" />
    <div  class="age">
      <h1 contentEditable=false data-ph="18" id="ageId" class="resultAge">{{ $store.state.age }}</h1>
    </div>
  </div>
</template>

<script>
import Label from '../../Label/Label.vue'
export default {
  // eslint-disable-next-line
  name: "Age",
  components: { Label },
}
</script>

<style lang="scss" scoped>
@import "./age.scss";
</style>