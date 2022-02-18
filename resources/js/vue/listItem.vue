<script setup>
import axios from "axios";

const props = defineProps({
    item: {
        type: Object,
        required: true,
    },
});
const { item } = props;
const emit = defineEmits();

const updateCheck = () => {
    axios
        .put(`api/item/${item.id}`, {
            item,
        })
        .then((res) => {
            if (res.status === 200) {
                emit("itemChanged");
            }
        })
        .catch((err) => console.log(err));
};

const removeItem = () => {
    axios
        .delete("api/item/" + item.id)
        .then((res) => {
            if (res.status === 200) {
                emit("itemChanged");
            }
        })
        .catch((err) => console.log(err));
};
</script>

<template>
    <div class="item">
        <input
            type="checkbox"
            @change="updateCheck"
            v-model="item.completed"
            :checked="item.completed"
        />
        <span :class="[item.completed ? 'completed' : '', 'itemText']">{{
            item.name
        }}</span>
        <button @click="removeItem" class="trashcan">
            <font-awesome-icon icon="trash" />
        </button>
    </div>
</template>

<style scoped>
.completed {
    text-decoration: line-through;
    color: #999;
}
.itemText {
    width: 100%;
    margin-left: 20px;
}
.item {
    display: flex;
    justify-content: center;
    align-items: center;
}
.trashcan {
    background: #e6e6e6;
    border: none;
    color: #ff0000;
    outline: none;
}
</style>
