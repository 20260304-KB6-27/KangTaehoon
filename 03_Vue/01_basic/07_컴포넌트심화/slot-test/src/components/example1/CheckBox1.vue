<template>
    <div>
        <input
            type="checkbox"
            :value="item.id"
            :checked="item.checked"
            @check-changed="onChange"
        />
        <span
            v-if="item.checked === true"
            style="color: blue; text-decoration: underline"
        >
            <i>{{ item.label }}</i>
        </span>
        <span v-else style="color: gray">
            <i>{{ item.label }}</i>
        </span>
    </div>
</template>

<script setup>
const props = defineProps({
    item: {
        type: Object,
    },
});

const emit = defineEmits(['check-changed']);

const onChange = (e) => {
    emit('check-changed', {
        id: props.item.id,
        checked: e.target.checked,
    });
};
</script>

<style scoped></style>
