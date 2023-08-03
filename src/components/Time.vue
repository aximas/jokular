<template>
  <div class="hello">
    <h1>{{ showHours + ':' + showMinutes + ':' + showSeconds }}</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    hours: Number,
    minutes: Number,
    seconds: Number
  },
  computed: {
    showSeconds() {
     return this.getTwoStringUnits(this.seconds)
    },
    showMinutes() {
      return this.getTwoStringUnits(this.minutes)
    },
    showHours() {
      return this.getTwoStringUnits(this.hours)
    }
  },
  methods: {
    getTwoStringUnits(number: number): string {
      if( number < 10) return '0' + number.toString()
      return number.toString()
    }
  }
})
export default class Time extends Vue {
  hours!: number;
  minutes!: number;
  seconds!: number;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
