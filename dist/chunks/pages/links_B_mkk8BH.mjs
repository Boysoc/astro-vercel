import { c as createComponent, a as createAstro, g as renderComponent, b as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../astro_CfhZ-N1h.mjs';
import 'kleur/colors';
import { $ as $$Header, b as $$Footer, c as $$Layout } from './_page__rzxYW47S.mjs';
/* empty css                          */

const $$Astro = createAstro("https://pagecho.com");
const $$Links = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Links;
  const links = [
    {
      name: "Astro",
      url: "https://astro.build",
      description: "\u73B0\u4EE3\u5316\u7684\u9759\u6001\u7AD9\u70B9\u751F\u6210\u5668"
    },
    {
      name: "GitHub",
      url: "https://github.com",
      description: "\u5168\u7403\u6700\u5927\u7684\u4EE3\u7801\u6258\u7BA1\u5E73\u53F0"
    },
    {
      name: "Typecho",
      url: "http://typecho.org",
      description: "\u7B80\u6D01\u9AD8\u6548\u7684\u535A\u5BA2\u7A0B\u5E8F"
    },
    {
      name: "MDN",
      url: "https://developer.mozilla.org",
      description: "Web \u5F00\u53D1\u8005\u8D44\u6E90"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u90BB\u5C45 - \u53CB\u60C5\u94FE\u63A5", "description": "\u53CB\u60C5\u94FE\u63A5\u9875\u9762", "class": "astro-au7rboj5" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "class": "astro-au7rboj5" })} ${maybeRenderHead()}<div class="side-click icon-arrow-down astro-au7rboj5"></div> <div id="body" class="astro-au7rboj5"> <div class="container astro-au7rboj5"> <div class="col-group astro-au7rboj5"> <div class="col-12 astro-au7rboj5" id="main"> <div class="res-cons astro-au7rboj5"> <article class="post astro-au7rboj5"> <header class="astro-au7rboj5"> <h1 class="post-title astro-au7rboj5">邻居</h1> </header> <div class="page-content post-content astro-au7rboj5"> <p class="astro-au7rboj5">这里是一些有趣的网站和朋友们的博客。</p> <div class="links-container astro-au7rboj5"> ${links.map((link) => renderTemplate`<div class="link-item astro-au7rboj5"> <h3 class="astro-au7rboj5"> <a${addAttribute(link.url, "href")} target="_blank" rel="noopener noreferrer" class="astro-au7rboj5"> ${link.name} </a> </h3> <p class="astro-au7rboj5">${link.description}</p> </div>`)} </div> <hr class="astro-au7rboj5"> <h3 class="astro-au7rboj5">申请友链</h3> <p class="astro-au7rboj5">如果你想和我交换友情链接，请确保：</p> <ul class="astro-au7rboj5"> <li class="astro-au7rboj5">网站内容积极向上</li> <li class="astro-au7rboj5">能够正常访问</li> <li class="astro-au7rboj5">最好是技术、生活或其他有趣的内容</li> </ul> <p class="astro-au7rboj5">可以通过邮件或者在文章下留言的方式联系我。</p> </div> </article> </div> </div> </div> </div> </div> ${renderComponent($$result2, "Footer", $$Footer, { "class": "astro-au7rboj5" })} ` })}  `;
}, "D:/\u5DE5\u4F5C/Github/pagecho.github.io-main/src/pages/links.astro", void 0);

const $$file = "D:/工作/Github/pagecho.github.io-main/src/pages/links.astro";
const $$url = "/links";

export { $$Links as default, $$file as file, $$url as url };
