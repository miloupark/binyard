<template>
  <div ref="target" style="width: 100%; height: 500px"></div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import sdk from "@stackblitz/sdk"; // NPM 설치된 모듈 사용

const props = defineProps({
  projectId: { type: String, required: true },
  openFile: { type: String, default: "main.js" },
  view: { type: String, default: "editor" },
  theme: { type: String, default: "dark" },
});

const target = ref(null);

onMounted(() => {
  if (!target.value) {
    console.warn("❗️ target DOM not found");
    return;
  }

  sdk.embedProjectId(target.value, props.projectId, {
    forceEmbedLayout: true,
    openFile: props.openFile,
    view: props.view,
    theme: props.theme,
  });
});
</script>
