<script setup>
import axios from "axios";
import { reactive } from "vue";

const item = reactive({
    name: "",
});

const addItem = () => {
    if (item.name === "") return;

    axios
        .post("api/item/store", {
            item,
        })
        .then((res) => {
            if (res.status === 201) {
                item.name = "";
            }
        })
        .catch((err) => {
            console.log(err);
        });
};
</script>

<template>
    <div class="addItem">
        <input class="addItem__input" type="text" v-model="item.name" />
        <font-awesome-icon
            icon="plus-square"
            :class="[item.name ? 'active' : 'inactive', 'plus']"
            @click="addItem"
        />
    </div>
</template>

<style scoped>
.addItem {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
}
.addItem__input {
    margin-right: 10px;
    outline: none;
}
.plus {
    font-size: 20px;
}
.active {
    color: #00ce25;
}
.inactive {
    color: #999999;
}
</style>
