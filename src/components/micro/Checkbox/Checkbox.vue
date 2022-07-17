<template>
    <div>
        <Inputs type="checkbox" inputClass="checkbox" :v-model="text" id="checkbox"/>
        <label for="checkbox">{{ text }}</label>
    </div>
</template>

<script>
import Inputs from '@/components/micro/Inputs/Inputs.vue'

export default {
    name: "CheckboxComponent",
    components:{ 
        Inputs
    },
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