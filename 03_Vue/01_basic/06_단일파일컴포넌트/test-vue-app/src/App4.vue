<template>
    <div>
        <h2>App Component</h2>
        <hr />
        <InputName @name-change="nameChangeHandler" />
        <h3>App Data : {{ parentName }}</h3>
    </div>
</template>

<script setup>
import InputName from './components/InputName.vue';
import { ref } from 'vue';

// 1. 자식 컴포넌트에서 이벤트 발생 (이벤트 이름: change-name)
// 2. 부모 컴포넌트에서 이벤트 감지 ( @name-change ) -> 이 떄 이벤트 객체로 데이터를 전달 받을 수 있음
// 3. 부모 컴포넌트의 이벤트 핸들러 동작 (nameChangeHandler)zx
const parentName = ref('기본값');
const nameChangeHandler = (e) => {
    parentName.value = e.name;
};
</script>

<style lang="scss" scoped></style>
