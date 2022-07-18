<template>
    <div>
        <div class="labelBirthday">
            <Label inputLabel="" className="defaultLabel phoneLabel" text="Birthday*" />
            <TextComponent text="Please enter your Age" className="mediumLowSize error" id="errorBirthday" />
        </div>
        <div class="datesBody">
            <div class="daySelect">
                <Label text="Day" className="defaultLabel phoneLabel" />
                <select name="day" class="day" @change="valueDay">
                    <option disabled>Day</option>
                    <option style="display:none">01</option>
                    <option id="optionDay" v-for="day in 31" :key="day">
                        {{ padStart(day) }}
                    </option>
                </select>
            </div>
            <div class="monthSelect">
                <Label text="Month" className="defaultLabel phoneLabel" />
                <select name="month" class="month" @change="valueMonth">
                    <option disabled>Month</option>
                    <option style="display:none">01</option>
                    <option id="optionMonth" v-for="month in 12" :key="month">
                        {{ padStart(month) }}
                    </option>
                </select>
            </div>
            <div class="yearSelect">
                <Label text="Year" className="defaultLabel phoneLabel" />
                <select name="year" class="year" @change="valueYears">
                    <option disabled>Year</option>
                    <option style="display:none">1901</option>
                    <option id="optionYear" v-for="year in this.yearsR" :key="year">
                        {{ year + 1900 }}
                    </option>
                </select>
            </div>
            <div class="Age">
                <Label inputLabel="" className="defaultLabel dateLabel" text="Age" />
                <div class="age">
                    <h1 id="ageId" class="resultAge" contentEditable=false data-ph="18">{{ this.$store.state.age }}</h1>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import Label from '../Label/Label.vue';
import TextComponent from '../Text/Text.vue';
export default {
    // eslint-disable-next-line
    name: "Birthday",
    components: { Label, TextComponent },
    data() {
        return {
            day: "",
            month: "",
            year: "",
            age: "",
            yearsR: "",

        };
    },
    methods: {

        valueDay(e) {
            this.day = e.target.value;
            localStorage.setItem("day", this.day);
        },
        valueMonth(e) {
            this.month = e.target.value;
            localStorage.setItem("month", this.month);
        },
        valueYears(e) {
            this.year = e.target.value;
            localStorage.setItem("year", this.year);

            let d = new Date();
            let actualYear = d.getFullYear();
            let actualMonth = d.getMonth() + 1;
            let actualDay = d.getDate();

            let ageUser = actualYear - this.year;


            if (
                actualMonth < this.month ||
                (actualMonth == this.month && actualDay < this.day)
            ) {
                ageUser--;
            }
            this.$store.state.age = ageUser
            localStorage.setItem("age", this.$store.state.age);

        },

        padStart(birthday) {
            return String(birthday).padStart(2, "0");
        },
        vYear() {
            let birthday = new Date()
            this.yearsR = birthday.getFullYear() - 1900
        },
    },
    created() {
        this.vYear();
    },
}
</script>

<style lang="scss" scoped>
@import './birthday.scss';
</style>