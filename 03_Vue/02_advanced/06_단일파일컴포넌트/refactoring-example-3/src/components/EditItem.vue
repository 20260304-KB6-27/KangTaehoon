<template>
    <div class="post-content">
        <input type="text" v-model.trim="editingPost.title" />
        <br />
        <textarea v-model.trim="editingPost.content"></textarea>
        <br />

        <button @click.stop="saveHandler">저장</button>
        <!-- 취소 -->
        <button @click.stop="cancelHandler">취소</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
    post: { type: Object },
});
const editingPost = ref({
    title: props.post.title,
    content: props.post.content,
});
const emit = defineEmits(['save', 'edit']);

const cancelHandler = () => {
    emit('edit', props.post.no);
    editingPost.value = {
        title: props.post.title,
        content: props.post.content,
    };
};
const saveHandler = () => {
    emit('save', {
        no: props.post.no,
        ...editingPost.value,
    });
};
</script>

<style lang="scss" scoped></style>
