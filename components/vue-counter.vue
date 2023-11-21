<script setup>
import { ref, onMounted } from 'vue'

// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
	count.value++
}

// lifecycle hooks
onMounted(() => {
	console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
	<h2> VueJs Counter: {{ count }} </h2>
	<button @click="increment">Increment</button>
</template>
