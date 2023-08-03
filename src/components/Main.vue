<script lang="ts">

import {reactive} from 'vue'

interface IPerson {
  id: number;
  title: string;
  male: boolean
}

export default {
  setup() {
    // const ref = ref();

    const person: IPerson = reactive({id: 778, title: 'Title', male: false})

    const setPersonTitle = (title: string) => person.title = title
    console.log('person', person)

    setPersonTitle('chico')
    console.log('person', person)
  }
}
</script>

<template>
  <main>Main tag</main>
</template>
