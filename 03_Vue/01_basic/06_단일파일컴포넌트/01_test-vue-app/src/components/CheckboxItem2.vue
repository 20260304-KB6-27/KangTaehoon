<template>
    <li><input type="checkbox" v-model="idol.checked" />{{ idol.name }}</li>
</template>

<script>
export default {
    name: 'CheckboxItem2',
    props: ['idol'],
    data() {
        return {
            checked: false,
        };
    },
};
</script>
