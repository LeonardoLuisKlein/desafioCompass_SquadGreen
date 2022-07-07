<template>
  <div>
    <label :for="inputLabel" :class="className">{{ text }}</label>
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line
    name: "Label",
    props:{
        text: {
            type: String,
            default: ""
        },
        className: {
            type: String,
            default: ""
        },
        inputLabel: {
            type: String,
            default: ""
        }
    },
}
</script>

<style lang="scss" scoped>
@import './Label.scss'
</style>