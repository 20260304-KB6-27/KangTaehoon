<template>
    <div>
        <h3>당신이 경함한 프론트엔드기술은?(Slot 사용 O)</h3>

        <CheckBox
            v-for="item in items"
            :key="item.id"
            :item="item"
            @check-changed="checkBoxChanged"
            ><span>내용 추가</span></CheckBox
        >
    </div>
</template>

<script setup>
import CheckBox from './CheckBox2.vue';
import { ref } from 'vue';

const items = ref([
    { id: 'V', checked: true, label: 'Vue' },
    { id: 'A', checked: false, label: 'Angular' },
    { id: 'R', checked: false, label: 'React' },
    { id: 'S', checked: false, label: 'Svelte' },
]);

function checkBoxChanged(e) {
    let item = items.value.find((item) => item.id === e.id);
    item.checked = e.checked;
}
</script>

<style lang="scss" scoped></style>
