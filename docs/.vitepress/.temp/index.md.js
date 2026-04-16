import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/image/%E5%B0%81%E9%9D%A2.png";
const _imports_1 = "/image/profile-portrait.jpg";
const _imports_2 = "/image/%E5%9B%BE3.png";
const _imports_3 = "/image/%E5%9B%BE4.jpg";
const _imports_4 = "/image/%E5%9B%BE5.png";
const __pageData = JSON.parse('{"title":"Deep Learning Lab","description":"","frontmatter":{"layout":"home","title":"Deep Learning Lab"},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><section class="landing-shell"><figure class="landing-cover"><img${ssrRenderAttr("src", _imports_0)} alt="深度学习实验室封面图"></figure><section class="profile-panel"><div class="profile-copy"><div class="profile-heading"><h1 class="profile-title">蓝振忠 博士</h1><p class="profile-role">西湖大学深度学习实验室 PI</p></div><p class="profile-summary"> 研究方向聚焦大模型、自然语言处理、计算机视觉与心理健康智能体，致力于推动通用人工智能与社会服务场景的深度结合。 </p><div class="profile-tags" aria-label="研究关键词"><span>Large Language Models</span><span>NLP</span><span>Computer Vision</span><span>Mental Health AI</span></div><div class="profile-actions"><a class="profile-action profile-action--primary" href="/research">Research</a><a class="profile-action" href="https://scholar.google.com/citations?user=tlDABkgAAAAJ&amp;hl=en&amp;oi=ao" target="_blank" rel="noreferrer"> Google Scholar </a></div></div><aside class="profile-side"><figure class="profile-portrait"><img${ssrRenderAttr("src", _imports_1)} alt="蓝振忠"></figure></aside></section></section><section class="news-section"><div class="news-section__header"><p class="news-section__eyebrow">Media Coverage</p><h2 class="news-section__title">新闻资讯</h2><p class="news-section__intro"> 聚焦实验室在心理健康大模型与通用人工智能方向的最新媒体报道。 </p></div><div class="news-grid"><article class="news-card"><a class="news-card__media" href="https://mp.weixin.qq.com/s/eFnv3Mkz8QMtkgHUq1vGew" target="_blank" rel="noreferrer" aria-label="阅读新闻"><img${ssrRenderAttr("src", _imports_2)} alt="图3新闻封面"></a><div class="news-card__content"><h3 class="news-card__title"><a href="https://mp.weixin.qq.com/s/eFnv3Mkz8QMtkgHUq1vGew" target="_blank" rel="noreferrer"> ALBERT一作蓝振忠：从谷歌离职回到西湖大学，只为打造一个24小时在线的「心理咨询师」 </a></h3><a class="news-card__link" href="https://mp.weixin.qq.com/s/eFnv3Mkz8QMtkgHUq1vGew" target="_blank" rel="noreferrer"> 跳转阅读 </a></div></article><article class="news-card"><a class="news-card__media" href="https://mp.weixin.qq.com/s?__biz=MzkyMjM4NjI2OQ==&amp;mid=2248489721&amp;idx=7&amp;sn=eac97626002dad8f8238cd1d3c88b845&amp;source=41&amp;poc_token=HEfq3Wmj6YrqH6AzVw4t5eyBkI1XwE1z_opaMgCR" target="_blank" rel="noreferrer" aria-label="阅读新闻"><img${ssrRenderAttr("src", _imports_3)} alt="图4新闻封面"></a><div class="news-card__content"><h3 class="news-card__title"><a href="https://mp.weixin.qq.com/s?__biz=MzkyMjM4NjI2OQ==&amp;mid=2248489721&amp;idx=7&amp;sn=eac97626002dad8f8238cd1d3c88b845&amp;source=41&amp;poc_token=HEfq3Wmj6YrqH6AzVw4t5eyBkI1XwE1z_opaMgCR" target="_blank" rel="noreferrer"> 西湖大学研发了一个“暖心”的心理咨询机器人，欢迎来找它聊天 </a></h3><a class="news-card__link" href="https://mp.weixin.qq.com/s?__biz=MzkyMjM4NjI2OQ==&amp;mid=2248489721&amp;idx=7&amp;sn=eac97626002dad8f8238cd1d3c88b845&amp;source=41&amp;poc_token=HEfq3Wmj6YrqH6AzVw4t5eyBkI1XwE1z_opaMgCR" target="_blank" rel="noreferrer"> 跳转阅读 </a></div></article><article class="news-card"><a class="news-card__media" href="https://mp.weixin.qq.com/s/HB1qD6qoHM1c51oMmfqr-A" target="_blank" rel="noreferrer" aria-label="阅读新闻"><img${ssrRenderAttr("src", _imports_4)} alt="图5新闻封面"></a><div class="news-card__content"><h3 class="news-card__title"><a href="https://mp.weixin.qq.com/s/HB1qD6qoHM1c51oMmfqr-A" target="_blank" rel="noreferrer"> 蓝振忠 准备下一个AGI「战斗」 </a></h3><a class="news-card__link" href="https://mp.weixin.qq.com/s/HB1qD6qoHM1c51oMmfqr-A" target="_blank" rel="noreferrer"> 跳转阅读 </a></div></article></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
