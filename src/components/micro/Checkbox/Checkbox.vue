<template>
    <div>
        <input type="checkbox" id="checkbox" :v-model="text">
        <label for="checkbox">{{ text }}</label>
    </div>
</template>

<script>

export default {
    name: "CheckboxComponent",
    props: {
        text: {
            type: String
        }
    }
}

</script>

<style lang="scss" scoped>
@import './Checkbox.scss'

</style>