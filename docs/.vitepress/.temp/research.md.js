import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/image/%E5%9B%BE6.png";
const _imports_1 = "/image/%E5%9B%BE7.png";
const _imports_2 = "/image/%E5%9B%BE8.png";
const __pageData = JSON.parse('{"title":"Research","description":"","frontmatter":{"layout":"doc","title":"Research"},"headers":[],"relativePath":"research.md","filePath":"research.md"}');
const _sfc_main = { name: "research.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><section class="research-page"><header class="research-page__header"><p class="research-page__eyebrow">AI Products</p><h1 class="research-page__title">研究与产品</h1><p class="research-page__intro"> 实验室围绕生成式人工智能、对话系统与心理健康智能体，持续推动面向真实场景的产品落地。 </p></header><div class="research-grid"><article class="research-card"><a class="research-card__media" href="https://zmrj.art/" target="_blank" rel="noreferrer" aria-label="打开造梦日记"><img${ssrRenderAttr("src", _imports_0)} alt="造梦日记产品封面"></a><div class="research-card__content"><span class="research-card__eyebrow">AI智能绘画工具</span><h2 class="research-card__title">造梦日记</h2><p class="research-card__description"> 输入文字秒变精美画作，多种风格可选，还支持AI视频生成和企业级定制，用AI赋能视觉创作。 </p><div class="research-card__actions"><a class="research-card__link" href="https://zmrj.art/" target="_blank" rel="noreferrer"> 即刻体验 </a></div></div></article><article class="research-card"><a class="research-card__media" href="https://heyfriday.cn/home" target="_blank" rel="noreferrer" aria-label="打开FRIDAY"><img${ssrRenderAttr("src", _imports_1)} alt="FRIDAY产品封面"></a><div class="research-card__content"><span class="research-card__eyebrow">AI智能写作助手</span><h2 class="research-card__title">FRIDAY</h2><p class="research-card__description"> 短短几秒钟即可生成原创佳作，支持文章续写、改写、扩写等多种功能和企业级定制。 </p><div class="research-card__actions"><a class="research-card__link" href="https://heyfriday.cn/home" target="_blank" rel="noreferrer"> 即刻体验 </a></div></div></article><article class="research-card"><div class="research-card__media"><img${ssrRenderAttr("src", _imports_2)} alt="聊会小天产品封面"></div><div class="research-card__content"><span class="research-card__eyebrow">AI对话机器人</span><h2 class="research-card__title">聊会小天</h2><p class="research-card__description"> 小天是一位人工智能心理咨询师，搭载前沿AI算法，帮助每个需要疗愈的心灵，同时提供心理测评、专家心理咨询等多种心理服务项目。 </p><div class="research-card__actions"><span class="research-card__hint">微信小程序搜索“聊会小天”</span></div></div></article></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("research.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const research = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  research as default
};
