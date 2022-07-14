<template>
    <div>
        <Label inputLabel="month" className="defaultLabel dateLabel" text="Month" />
        <select v-model="monthSelect" class="month" @change="valueMonth">
            <option disabled value="01">Month</option>
            <option disabled value="" style="display:none">1</option>
            <option id="optionMonth" v-for="option in options" v-bind:key="option.month">{{ option.month }}</option>
        </select>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import Label from '../../Label/Label.vue'
export default {
    // eslint-disable-next-line
    name: "Month",
    data() {
        return {
            monthSelect: "1",
            options: [
                { month: 1 },
                { month: 2 },
                { month: 3 },
                { month: 4 },
                { month: 5 },
                { month: 6 },
                { month: 7 },
                { month: 8 },
                { month: 9 },
                { month: 10 },
                { month: 11 },
                { month: 12 },
            ]
        };
    },
    components: { Label },
    methods: {
        ...mapActions(["setMonth"]),
        valueMonth(e) {
            this.setMonth(e.target.value)
        },
    },
}
</script>
<style lang="scss" scoped>
@import "./month.scss";
</style>