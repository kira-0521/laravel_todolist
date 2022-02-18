<script setup>
import axios from "axios";
import { ref } from "vue";
import AddItemForm from "./addItemForm.vue";
import listView from "./listView.vue";

const items = ref([]);
const getList = () => {
    axios
        .get("api/items")
        .then((res) => {
            items.value = res.data;
        })
        .catch((err) => {
            console.log(err);
        });
};
getList();
</script>

<template>
    <div class="title">TodoList</div>
    <AddItemForm />
    <list-view :items="items" />
</template>

<style scoped>
.title {
    margin: 0 auto;
    text-align: center;
}
</style>
