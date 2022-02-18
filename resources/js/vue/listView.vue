<script setup>
import listItem from "./listItem.vue";
const props = defineProps({
    items: {
        type: Array,
        required: true,
    },
});
</script>

<template>
    <ul>
        <li v-for="(item, index) in props.items" :key="index">
            <list-item :item="item" class="item" />
        </li>
    </ul>
</template>
