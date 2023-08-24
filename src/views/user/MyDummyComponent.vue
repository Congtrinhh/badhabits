<template>
  <div id="">
    <div class="list">
      <template v-for="person in people" :key="person.id">
        <div v-if="isVisible(person)" class="list-item">{{ person.name }}</div>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const people: any[] = ref([
  {
    name: 'tqcong',
    age: 18,
    isStudent: true
  },
  {
    name: 'tqcong1',
    age: 20,
    isStudent: true
  },
  {
    name: 'tqcong3',
    age: 22,
    isStudent: false
  }
])

function isVisible(person: any): boolean {
  const isStudent = person.isStudent
  const isAdult = person.age > 18
  let isGoodProgrammer = false

  //
  setTimeout(() => {
    isGoodProgrammer = true
  }, 3000)
  return isStudent || isAdult || isGoodProgrammer
}

function isVisible2(person: any): boolean {
  const isStudent = person.isStudent
  const isAdult = person.age > 18

  if (isStudent || isAdult) return true

  let isGoodProgrammer = false

  //
  setTimeout(() => {
    isGoodProgrammer = true
  }, 3000)
  return isGoodProgrammer
}
</script>

<style lang="scss" scoped></style>
