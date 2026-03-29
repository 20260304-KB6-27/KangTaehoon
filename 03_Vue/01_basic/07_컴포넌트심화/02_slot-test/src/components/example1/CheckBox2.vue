<template>
    <div>
        <input
            type="checkbox"
            :value="item.id"
            :checked="item.checked"
            @check-changed="onChange"
        />
        <!-- 부모 컴포넌트에서 정의한 템플릿 요소들이 들어오는 장소 -->
        <slot>
            <!-- {{ label }} 부모에서 템플릿을 정의하지 않았을 경우 표시될 기본값 -->
            {{ item.label }}</slot
        >
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
