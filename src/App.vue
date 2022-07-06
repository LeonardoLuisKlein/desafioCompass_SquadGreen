<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: "App",
  components:{

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
