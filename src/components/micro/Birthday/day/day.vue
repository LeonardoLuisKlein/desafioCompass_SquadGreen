<template>
    <div>
        <Label inputLabel="day" className="defaultLabel dateLabel" text="Day" />
        <select v-model="daySelect" class="day" @change="valueDay">
            <option disabled value="01">Day</option>
            <option disabled value="" style="display:none">1</option>
            <option id="optionDay" v-for="option in options" v-bind:key="option.day" :value="option.day">{{ option.day
            }}
            </option>
        </select>
    </div>

</template>

<script>
import { mapActions } from 'vuex';
import Label from '../../Label/Label.vue';

export default {
    // eslint-disable-next-line
    name: "Day",
    data() {
        return {
            daySelect: "",
            options: [
                { day: 1 },
                { day: 2 },
                { day: 3 },
                { day: 4 },
                { day: 5 },
                { day: 6 },
                { day: 7 },
                { day: 8 },
                { day: 9 },
                { day: 10 },
                { day: 11 },
                { day: 12 },
                { day: 13 },
                { day: 14 },
                { day: 15 },
                { day: 16 },
                { day: 17 },
                { day: 18 },
                { day: 19 },
                { day: 20 },
                { day: 21 },
                { day: 22 },
                { day: 23 },
                { day: 24 },
                { day: 25 },
                { day: 26 },
                { day: 27 },
                { day: 28 },
                { day: 29 },
                { day: 30 },
                { day: 31 },
            ],
        };
    },
    components: { Label },
    methods: {
        ...mapActions(["setDay"]),
        valueDay(e) {
            this.setDay(e.target.value)
        },
    },
}
</script>

<style lang="scss" scoped>
@import "./day.scss";
</style>