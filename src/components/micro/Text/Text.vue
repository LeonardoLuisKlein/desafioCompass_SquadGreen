<template>
  <div>
    <p :class="className" :placeholder="place">{{ text }}</p>
  </div>
</template>

<script>
export default {
   name: "TextComponent",
    props: {
        text: {
            type: String,
            default: ""
        },
        className: {
            type: String
        },
        place: {
          type: String,
          default: ""
        }
    }
}
</script>

<style lang="scss" scoped>
@import './Text.scss'
</style>