<template>
  <div>
    <h1 :class="nameClass" v-if="type === 'h1'">{{ tMessage }}</h1>
    <h2 :class="nameClass" v-else-if="type === 'h2'">{{ tMessage }}</h2>
    <h3 :class="nameClass" v-else-if="type === 'h3'">{{ tMessage }}</h3>
    <h4 :class="nameClass" v-else-if="type === 'h4'">{{ tMessage }}</h4>
    <h5 v-else-if="type === 'h5'">{{ tMessage }}</h5>
    <h6 v-else-if="type === 'h6'">{{ tMessage }}</h6>
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line
    name: "Title",
    props:{
      type: {
            type: String,
            require: true,
        },
        nameClass: {
            type: String,
        },
        tMessage:{
            type: String,
            default: 'null',
        },
    },
}
</script>

<style lang="scss" scoped>
@import "./Title.scss"
</style>