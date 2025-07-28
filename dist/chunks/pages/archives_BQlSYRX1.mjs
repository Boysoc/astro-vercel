import { c as createComponent, a as createAstro, g as renderComponent, b as renderTemplate, m as maybeRenderHead, F as Fragment, h as addAttribute } from '../astro_CfhZ-N1h.mjs';
import 'kleur/colors';
import { g as getCollection, d as getSortedPosts, $ as $$Header, a as $$Sidebar, b as $$Footer, c as $$Layout } from './_page__rzxYW47S.mjs';

const $$Astro = createAstro("https://pagecho.com");
const $$Archives = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Archives;
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);
  const archivesByYear = sortedPosts.reduce((acc, post) => {
    const date = new Date(post.data.pubDatetime);
    const year = date.getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {});
  const years = Object.keys(archivesByYear).map(Number).sort((a, b) => b - a);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u5F52\u6863", "description": "\u6587\u7AE0\u5F52\u6863\u9875\u9762" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<div class="side-click icon-arrow-down"></div> <div id="body"> <div class="container"> <div class="col-group"> <div class="col-8" id="main"> <div class="res-cons"> <article class="post"> <div class="post-content-pages"> <div id="archives"> ${years.map((year) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <div class="al_year">${year} 年</div> <ul class="al_mon_list"> ${archivesByYear[year].map((post) => renderTemplate`<li> ${new Date(post.data.pubDatetime).toLocaleDateString("zh-CN", {
    month: "2-digit",
    day: "2-digit"
  })} <a${addAttribute(`/posts/${post.slug}`, "href")}>${post.data.title}</a> </li>`)} </ul> ` })}`)} </div> </div> </article> </div> </div> ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} </div> </div> </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/\u5DE5\u4F5C/Github/pagecho.github.io-main/src/pages/archives.astro", void 0);

const $$file = "D:/工作/Github/pagecho.github.io-main/src/pages/archives.astro";
const $$url = "/archives";

export { $$Archives as default, $$file as file, $$url as url };
