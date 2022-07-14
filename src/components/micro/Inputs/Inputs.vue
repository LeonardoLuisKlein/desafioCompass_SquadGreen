<template>
  <div>
    <input :type="type"  :class="inputClass" :placeholder="placeHolder" />
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "Inputs",
  props: {
    type: String,
    inputClass: String,
    placeHolder: String,
  },
}

</script>

<style lang="scss" scoped>
@import "./Inputs.scss";
</style>