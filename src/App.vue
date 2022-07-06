<template>
  <div id="app">
    <Title 
    class="blueTitle"
    type="h1"
    tMessage="First Tab"
    />
    <Inputs
    type="text"
    inputClass="smallInput inputBorder"
    placeHolder="bom dia"
    />
  </div>
</template>

<script>
import Title from './components/micro/Title/Title.vue';
import Inputs from './components/micro/Inputs/Inputs.vue';
export default {
  name: "App",
  components:{
    Title,
    Inputs
}
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Nunito:ital,wght@0,400;0,700;1,400;1,700&display=swap');

html,
body,
#app {
  height: 100%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.disable-select {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
