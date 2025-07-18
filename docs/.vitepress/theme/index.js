// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import DefaultTheme from "vitepress/theme";

import Comment from "../components/Comment.vue";
import StackblitzEmbed from "../components/StackblitzEmbed.vue";
import "./style.css";

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    app.component("Comment", Comment); // 댓글 컴포넌트
    app.component("StackblitzEmbed", StackblitzEmbed); // 스택블리츠 컴포넌트
  },
};
