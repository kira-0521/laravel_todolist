<script setup>
import { ref } from "vue";
import AddItemForm from "./addItemForm.vue";

const name = ref("tanaka");
</script>

<template>
    <div class="title">TodoList</div>
    <AddItemForm />
</template>

<style scoped>
.title {
    margin: 0 auto;
    text-align: center;
}
</style>
