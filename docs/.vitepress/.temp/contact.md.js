import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/image/address.png";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"contact.md","filePath":"contact.md"}');
const _sfc_main = { name: "contact.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>本课题组拟长期开展大模型、自然语言处理相关方面的研究。实验室长期招聘岗位及要求：</p><p>1. 招聘助理研究员、博士后：能够在深度学习、自然语言处理或其他相关理工（如计算机、数学、心理学）领域方面独立开展研究工作，协助指导博士生；</p><p>2. 招聘科研助理：在计算机、心理学或其他等相关（如数学、物理、化学）专业取得硕士或学士学位，要求具有相关工作经验，编程能力强；</p><p>3. 接收访问学生：了解深度学习，要求编程能力强。</p><p>请有意向者发简历到lanzhenzhong@westlake.edu.cn.</p><p><img${ssrRenderAttr("src", _imports_0)} alt="图片"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("contact.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  contact as default
};
