<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Main />
  <Time :hours="hours" :minutes="minutes" :seconds="seconds"/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Time from '@/components/Time.vue'
import Main from '@/components/Main.vue'

@Options({
  components: {
    Time,
    Main
  },
  created() {
    setInterval(this.updateTime, 1000)
  },
  data(){
    return {
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
      seconds: new Date().getSeconds(),
    }
  },
  methods: {
    updateTime() {
        this.hours = new Date().getHours();
        this.minutes = new Date().getMinutes();
        this.seconds = new Date().getSeconds();
    }
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
