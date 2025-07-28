import { a as createAstro, c as createComponent, g as renderComponent, m as maybeRenderHead, h as addAttribute, b as renderTemplate, u as unescapeHTML } from '../astro_CfhZ-N1h.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Header, a as $$Sidebar, b as $$Footer, c as $$Layout, s as slugifyStr, g as getCollection, e as getUniqueCategories, f as getPagination, h as getPageNumbers, d as getSortedPosts, i as getUniqueTags, j as getPostsByTag, k as $$TagPosts } from './_page__D8gYU4MM.mjs';
import { S as SITE } from './404_BF8Q7jXY.mjs';
/* empty css                          */
import { marked } from 'marked';

const $$Astro$8 = createAstro("https://pagecho.com");
const $$CategoryPosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$CategoryPosts;
  const { currentPage, totalPages, paginatedPosts, category, categoryName } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `\u5206\u7C7B: ${categoryName} | ${SITE.title}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<div class="side-click icon-arrow-down"></div> <div id="body"> <div class="container"> <div class="col-group"> <div class="col-8" id="main"> <div class="res-cons"> <article class="post"> <header> <h1 class="post-title">分类: ${categoryName}</h1> </header> <div class="post-content"> <p>包含分类 "${categoryName}" 的所有文章。</p> <div class="category-posts"> ${paginatedPosts.map((post) => renderTemplate`<article class="post"> <date class="post-meta"> ${new Date(post.data.pubDatetime).toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </date> <header> <h2 class="post-title"> <a${addAttribute(`/posts/${post.slug}`, "href")}>${post.data.title}</a> </h2> </header> <div class="post-content"> <p>${post.data.description}</p> <div class="more"> <a${addAttribute(`/posts/${post.slug}`, "href")}>阅读剩余部分 -</a> </div> </div> </article>`)} </div> </div> </article> </div> </div> ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} </div> </div> </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/\u5DE5\u4F5C/Github/pagecho.github.io-main/src/layouts/CategoryPosts.astro", void 0);

const getPostsByCategory = (posts, category) => posts.filter(
  (post) => post.data.categories.some((c) => slugifyStr(c) === category)
);

const $$Astro$7 = createAstro("https://pagecho.com");
async function getStaticPaths$2() {
  const posts = await getCollection("blog");
  const categories = getUniqueCategories(posts);
  return categories.map(({ category, categoryName }) => {
    return {
      params: { category },
      props: { category, categoryName, posts }
    };
  });
}
const $$Index$6 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Index$6;
  const { category, categoryName, posts } = Astro2.props;
  const postsByCategory = getPostsByCategory(posts, category);
  const pagination = getPagination({
    posts: postsByCategory,
    page: 1,
    isIndex: true
  });
  return renderTemplate`${renderComponent($$result, "CategoryPosts", $$CategoryPosts, { ...pagination, "category": category, "categoryName": categoryName })}`;
}, "D:/\u5DE5\u4F5C/Github/pagecho.github.io-main/src/pages/categories/[category]/index.astro", void 0);

const $$file$6 = "D:/工作/Github/pagecho.github.io-main/src/pages/categories/[category]/index.astro";
const $$url$6 = "/categories/[category]";

const index$6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$6,
  file: $$file$6,
  getStaticPaths: getStaticPaths$2,
  url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$6 = createAstro("https://pagecho.com");
const $$PostDetails = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$PostDetails;
  const { post } = Astro2.props;
  const { title, description, ogImage, canonicalURL, pubDatetime, tags } = post.data;
  const { Content } = await post.render();
  function formatDate(date) {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "ogImage": ogImage, "canonicalURL": canonicalURL }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<div class="side-click icon-arrow-down"></div> <div id="body"> <div class="container"> <div class="col-group"> <div class="col-8" id="main"> <div class="res-cons"> <article class="post single-page"> <date class="post-meta"> ${formatDate(new Date(pubDatetime))} </date> <header> <h1 class="post-title">${title}</h1> </header> <div class="post-content"> ${renderComponent($$result2, "Content", Content, {})} </div> <footer class="post-footer"> <section class="author"> <div class="author-ava"> <img src="/assets/author-head.gif" alt="Xio" width="160" height="160"> </div> <p>一切从简 记录生活</p> </section> </footer> </article> </div> </div> ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} </div> </div> </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/\u5DE5\u4F5C/Github/pagecho.github.io-main/src/layouts/PostDetails.astro", void 0);

const $$Astro$5 = createAstro("https://pagecho.com");
async function getStaticPaths$1() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const postResult = posts.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
  const pagePaths = getPageNumbers(posts.length).map((pageNum) => ({
    params: { slug: String(pageNum) }
  }));
  return [...postResult, ...pagePaths];
}
const $$Index$5 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index$5;
  const { post } = Astro2.props;
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);
  getPagination({
    posts: sortedPosts,
    page: 1,
    isIndex: true
  });
  return renderTemplate`${renderComponent($$result, "PostDetails", $$PostDetails, { "post": post })}`;
}, "D:/\u5DE5\u4F5C/Github/pagecho.github.io-main/src/pages/posts/[slug]/index.astro", void 0);

const $$file$5 = "D:/工作/Github/pagecho.github.io-main/src/pages/posts/[slug]/index.astro";
const $$url$5 = "/posts/[slug]";

const index$5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$5,
  file: $$file$5,
  getStaticPaths: getStaticPaths$1,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro("https://pagecho.com");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  const tags = getUniqueTags(posts);
  return tags.map(({ tag, tagName }) => {
    return {
      params: { tag },
      props: { tag, tagName, posts }
    };
  });
}
const $$Index$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index$4;
  const { tag, tagName, posts } = Astro2.props;
  const postsByTag = getPostsByTag(posts, tag);
  const pagination = getPagination({
    posts: postsByTag,
    page: 1,
    isIndex: true
  });
  return renderTemplate`${renderComponent($$result, "TagPosts", $$TagPosts, { ...pagination, "tag": tag, "tagName": tagName })}`;
}, "D:/\u5DE5\u4F5C/Github/pagecho.github.io-main/src/pages/tags/[tag]/index.astro", void 0);

const $$file$4 = "D:/工作/Github/pagecho.github.io-main/src/pages/tags/[tag]/index.astro";
const $$url$4 = "/tags/[tag]";

const index$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$4,
  file: $$file$4,
  getStaticPaths,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro("https://pagecho.com");
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$3;
  const posts = await getCollection("blog");
  const categories = getUniqueCategories(posts);
  const categoriesWithCount = categories.map(({ category, categoryName }) => {
    const count = posts.filter(
      (post) => post.data.categories.some((c) => c === categoryName)
    ).length;
    return { category, categoryName, count };
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `\u5206\u7C7B | ${SITE.title}`, "class": "astro-dzaffv5d" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "class": "astro-dzaffv5d" })} ${maybeRenderHead()}<div class="side-click icon-arrow-down astro-dzaffv5d"></div> <div id="body" class="astro-dzaffv5d"> <div class="container astro-dzaffv5d"> <div class="col-group astro-dzaffv5d"> <div class="col-8 astro-dzaffv5d" id="main"> <div class="res-cons astro-dzaffv5d"> <article class="post astro-dzaffv5d"> <header class="astro-dzaffv5d"> <h1 class="post-title astro-dzaffv5d">分类</h1> </header> <div class="post-content astro-dzaffv5d"> <p class="astro-dzaffv5d">所有文章分类。</p> <div class="categories-list astro-dzaffv5d"> ${categoriesWithCount.map(({ category, categoryName, count }) => renderTemplate`<div class="category-item astro-dzaffv5d"> <h3 class="astro-dzaffv5d"> <a${addAttribute(`/categories/${category}`, "href")} class="astro-dzaffv5d">${categoryName}</a> <span class="count astro-dzaffv5d">(${count})</span> </h3> </div>`)} </div> </div> </article> </div> </div> ${renderComponent($$result2, "Sidebar", $$Sidebar, { "class": "astro-dzaffv5d" })} </div> </div> </div> ${renderComponent($$result2, "Footer", $$Footer, { "class": "astro-dzaffv5d" })} ` })} `;
}, "D:/\u5DE5\u4F5C/Github/pagecho.github.io-main/src/pages/categories/index.astro", void 0);

const $$file$3 = "D:/工作/Github/pagecho.github.io-main/src/pages/categories/index.astro";
const $$url$3 = "/categories";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$3,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro("https://pagecho.com");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);
  function formatDate(date) {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `\u6587\u7AE0\u5217\u8868 - ${SITE.title}`, "description": "\u6240\u6709\u6587\u7AE0\u5217\u8868" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<div class="side-click icon-arrow-down"></div> <div id="body"> <div class="container"> <div class="col-group"> <div class="col-8" id="main"> <div class="res-cons"> <h2 class="archive-title">文章列表</h2> ${sortedPosts.map((post) => renderTemplate`<article class="post"> <date class="post-meta"> ${formatDate(new Date(post.data.pubDatetime))} </date> <header> <h2 class="post-title"> <a${addAttribute(`/posts/${post.slug}`, "href")}>${post.data.title}</a> </h2> </header> <div class="post-content"> <p>${post.data.description}</p> <div class="more"> <a${addAttribute(`/posts/${post.slug}`, "href")}>阅读剩余部分 -</a> </div> </div> </article>`)} </div> </div> ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} </div> </div> </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/\u5DE5\u4F5C/Github/pagecho.github.io-main/src/pages/posts/index.astro", void 0);

const $$file$2 = "D:/工作/Github/pagecho.github.io-main/src/pages/posts/index.astro";
const $$url$2 = "/posts";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://pagecho.com");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const posts = await getCollection("blog");
  const tags = getUniqueTags(posts);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u6807\u7B7E", "description": "\u6240\u6709\u6807\u7B7E" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<div class="side-click icon-arrow-down"></div> <div id="body"> <div class="container"> <div class="col-group"> <div class="col-8" id="main"> <div class="res-cons"> <article class="post single-page"> <header> <h1 class="post-title">标签</h1> </header> <div class="page-content post-content"> <div class="tag-cloud"> ${tags.map((tag) => renderTemplate`<a${addAttribute(`/tags/${tag.tag}`, "href")} style="font-size: 1.2em; margin: 0.5em; display: inline-block; padding: 0.3em 0.6em; background: #f5f5f5; border-radius: 3px; color: #666;"> ${tag.tagName} </a>`)} </div> </div> </article> </div> </div> ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} </div> </div> </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/\u5DE5\u4F5C/Github/pagecho.github.io-main/src/pages/tags/index.astro", void 0);

const $$file$1 = "D:/工作/Github/pagecho.github.io-main/src/pages/tags/index.astro";
const $$url$1 = "/tags";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

marked.setOptions({
  breaks: true,
  gfm: true
});
function getPostExcerpt(content, maxLines = 20) {
  const contentWithoutFrontmatter = content.replace(/^---[\s\S]*?---\n/, "");
  const lines = contentWithoutFrontmatter.split("\n");
  const nonEmptyLines = lines.filter((line) => line.trim() !== "");
  if (nonEmptyLines.length <= maxLines) {
    const markdownContent = contentWithoutFrontmatter.trim();
    return {
      excerpt: marked(markdownContent),
      hasMore: false
    };
  }
  let lineCount = 0;
  let excerptLines = [];
  for (const line of lines) {
    excerptLines.push(line);
    if (line.trim() !== "") {
      lineCount++;
      if (lineCount >= maxLines) {
        break;
      }
    }
  }
  const markdownExcerpt = excerptLines.join("\n").trim();
  return {
    excerpt: marked(markdownExcerpt),
    hasMore: true
  };
}

const $$Astro = createAstro("https://pagecho.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);
  function formatDate(date) {
    return date.toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
  const postsWithExcerpts = sortedPosts.map((post) => {
    const { excerpt, hasMore } = getPostExcerpt(post.body, 20);
    return {
      ...post,
      excerpt,
      hasMore
    };
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": SITE.title, "description": SITE.desc }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<div class="side-click icon-arrow-down"></div> <div id="body"> <div class="container"> <div class="col-group"> <div class="col-8" id="main"> <div class="res-cons"> ${postsWithExcerpts.map((post) => renderTemplate`<article class="post"> <date class="post-meta"> ${formatDate(new Date(post.data.pubDatetime))} </date> <header> <h2 class="post-title"> <a${addAttribute(`/posts/${post.slug}`, "href")}>${post.data.title}</a> </h2> </header> <div class="post-content"> <div>${unescapeHTML(post.excerpt)}</div> ${post.hasMore && renderTemplate`<div class="more"> <a${addAttribute(`/posts/${post.slug}`, "href")}>阅读剩余部分 -</a> </div>`} </div> </article>`)} </div> </div> ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} </div> </div> </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/\u5DE5\u4F5C/Github/pagecho.github.io-main/src/pages/index.astro", void 0);

const $$file = "D:/工作/Github/pagecho.github.io-main/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$5 as a, index$4 as b, index$3 as c, index$2 as d, index$1 as e, index as f, index$6 as i };
