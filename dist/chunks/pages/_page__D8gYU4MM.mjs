import { prependForwardSlash } from '@astrojs/internal-helpers/path';
import { A as AstroError, U as UnknownContentCollectionError, c as createComponent, d as renderUniqueStylesheet, e as renderScriptElement, f as createHeadAndContent, g as renderComponent, b as renderTemplate, u as unescapeHTML, a as createAstro, h as addAttribute, r as renderHead, i as renderSlot, m as maybeRenderHead, F as Fragment } from '../astro_CfhZ-N1h.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */
import { S as SITE } from './404_BF8Q7jXY.mjs';
import { slug } from 'github-slugger';
/* empty css                          */

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://pagecho.com", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/2012-08-03.md": () => import('../2012-08-03_CneuDbde.mjs'),"/src/content/blog/2012-11-28.md": () => import('../2012-11-28_BTFqWiIW.mjs'),"/src/content/blog/2013-10-21.md": () => import('../2013-10-21_DFvDnXCt.mjs'),"/src/content/blog/2013-10-26.md": () => import('../2013-10-26_DX6WiiQ_.mjs'),"/src/content/blog/2013-10-27.md": () => import('../2013-10-27_BC0wkIDp.mjs'),"/src/content/blog/2016-08-02.md": () => import('../2016-08-02_D0IkIiY0.mjs'),"/src/content/blog/2020-05-20.md": () => import('../2020-05-20_Chx3a3b5.mjs'),"/src/content/blog/2021-10-25.md": () => import('../2021-10-25_Dz5bL7W3.mjs'),"/src/content/blog/2025-05-30.md": () => import('../2025-05-30_YY5_sA9R.mjs'),"/src/content/blog/2025-06-02.md": () => import('../2025-06-02_CxLvTUbY.mjs'),"/src/content/blog/2025-06-15.md": () => import('../2025-06-15_DUFJ2boL.mjs'),"/src/content/blog/2025-07-03.md": () => import('../2025-07-03_Cq_A2sdt.mjs'),"/src/content/blog/2025-07-08.md": () => import('../2025-07-08_BkQkkfNy.mjs'),"/src/content/blog/2025-07-26.md": () => import('../2025-07-26_ByGm-0BF.mjs'),"/src/content/blog/pjblog-2006-07-23.md": () => import('../pjblog-2006-07-23_Bcc6DlWw.mjs'),"/src/content/blog/pjblog-2007-03-01.md": () => import('../pjblog-2007-03-01_CZREZvwk.mjs'),"/src/content/blog/pjblog-2007-03-04.md": () => import('../pjblog-2007-03-04_8VWRh6XG.mjs'),"/src/content/blog/pjblog-2007-03-16.md": () => import('../pjblog-2007-03-16_Cck9rGI5.mjs'),"/src/content/blog/pjblog-2007-03-17.md": () => import('../pjblog-2007-03-17_DImEF51J.mjs'),"/src/content/blog/shijidazhan.md": () => import('../shijidazhan_2SoTMQZg.mjs'),"/src/content/blog/typecho-2011-09-25.md": () => import('../typecho-2011-09-25_CTfHwo7L.mjs'),"/src/content/blog/typecho-2012-11-07.md": () => import('../typecho-2012-11-07_BTdqau8B.mjs'),"/src/content/blog/typecho-2012-11-09.md": () => import('../typecho-2012-11-09_CrrJZXTK.mjs'),"/src/content/blog/typecho-2012-11-12.md": () => import('../typecho-2012-11-12_CN5BAynI.mjs'),"/src/content/blog/typecho-2012-12-10.md": () => import('../typecho-2012-12-10_Bhz13tEh.mjs'),"/src/content/blog/typecho-2013-11-19.md": () => import('../typecho-2013-11-19_B0KUfSoI.mjs'),"/src/content/blog/typecho-2014-08-30.md": () => import('../typecho-2014-08-30_DqNXkP62.mjs'),"/src/content/blog/typecho-2014-11-29.md": () => import('../typecho-2014-11-29_BjfPPs40.mjs'),"/src/content/blog/typecho-2019-11-08.md": () => import('../typecho-2019-11-08_QIZY6tJ9.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"2012-08-03":"/src/content/blog/2012-08-03.md","2013-10-26":"/src/content/blog/2013-10-26.md","red":"/src/content/blog/2012-11-28.md","jiaxiao":"/src/content/blog/2013-10-21.md","solo-trip":"/src/content/blog/2013-10-27.md","time-to-end-and-begin":"/src/content/blog/2016-08-02.md","2020-05-20":"/src/content/blog/2020-05-20.md","2025-05-30":"/src/content/blog/2025-05-30.md","investment-ten-years":"/src/content/blog/2021-10-25.md","model-y-dream-car":"/src/content/blog/2025-06-02.md","ziyouboke":"/src/content/blog/2025-07-03.md","2025-06-15":"/src/content/blog/2025-06-15.md","typecho2astro":"/src/content/blog/2025-07-08.md","2025-07-26":"/src/content/blog/2025-07-26.md","pjblog-2006-07-23":"/src/content/blog/pjblog-2006-07-23.md","pjblog-2007-03-01":"/src/content/blog/pjblog-2007-03-01.md","pjblog-2007-03-04":"/src/content/blog/pjblog-2007-03-04.md","pjblog-2007-03-16":"/src/content/blog/pjblog-2007-03-16.md","pjblog-2007-03-17":"/src/content/blog/pjblog-2007-03-17.md","shijidazhan":"/src/content/blog/shijidazhan.md","naxiechunzhendewangshi":"/src/content/blog/typecho-2011-09-25.md","kanqiushiyizhongxinliboyitebieshimailezuqiucaipiaoderen":"/src/content/blog/typecho-2012-11-07.md","shiwangdebisaishangxindecaimin":"/src/content/blog/typecho-2012-11-09.md","yangguangxiadezhuimengren":"/src/content/blog/typecho-2012-11-12.md","emengyibanquexiwangzhishigeemeng":"/src/content/blog/typecho-2013-11-19.md","suisuiyu":"/src/content/blog/typecho-2012-12-10.md","shimian":"/src/content/blog/typecho-2014-08-30.md","aobuqiye":"/src/content/blog/typecho-2014-11-29.md","zucailumanmanbijibunengwang":"/src/content/blog/typecho-2019-11-08.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/2012-08-03.md": () => import('../2012-08-03_-HQvNVnS.mjs'),"/src/content/blog/2012-11-28.md": () => import('../2012-11-28_B_IKMZpf.mjs'),"/src/content/blog/2013-10-21.md": () => import('../2013-10-21_D5Q73hwC.mjs'),"/src/content/blog/2013-10-26.md": () => import('../2013-10-26_DhqzGog2.mjs'),"/src/content/blog/2013-10-27.md": () => import('../2013-10-27_Bo4Arbh1.mjs'),"/src/content/blog/2016-08-02.md": () => import('../2016-08-02_C3oSTueO.mjs'),"/src/content/blog/2020-05-20.md": () => import('../2020-05-20_C6CuqH01.mjs'),"/src/content/blog/2021-10-25.md": () => import('../2021-10-25_PHs99bF9.mjs'),"/src/content/blog/2025-05-30.md": () => import('../2025-05-30_nWwjA4ub.mjs'),"/src/content/blog/2025-06-02.md": () => import('../2025-06-02_BLda00xM.mjs'),"/src/content/blog/2025-06-15.md": () => import('../2025-06-15_BHs4KpxI.mjs'),"/src/content/blog/2025-07-03.md": () => import('../2025-07-03_US69t2oa.mjs'),"/src/content/blog/2025-07-08.md": () => import('../2025-07-08_D0VRim6A.mjs'),"/src/content/blog/2025-07-26.md": () => import('../2025-07-26_CRImfNCj.mjs'),"/src/content/blog/pjblog-2006-07-23.md": () => import('../pjblog-2006-07-23_B2fNIryH.mjs'),"/src/content/blog/pjblog-2007-03-01.md": () => import('../pjblog-2007-03-01_B2w4YHWE.mjs'),"/src/content/blog/pjblog-2007-03-04.md": () => import('../pjblog-2007-03-04_CSXoGiSo.mjs'),"/src/content/blog/pjblog-2007-03-16.md": () => import('../pjblog-2007-03-16_iyMLYKyB.mjs'),"/src/content/blog/pjblog-2007-03-17.md": () => import('../pjblog-2007-03-17_DyEA_-9c.mjs'),"/src/content/blog/shijidazhan.md": () => import('../shijidazhan_CmiE0UtT.mjs'),"/src/content/blog/typecho-2011-09-25.md": () => import('../typecho-2011-09-25_K0_4ob71.mjs'),"/src/content/blog/typecho-2012-11-07.md": () => import('../typecho-2012-11-07_9HXv-aLF.mjs'),"/src/content/blog/typecho-2012-11-09.md": () => import('../typecho-2012-11-09_GF_ghlk8.mjs'),"/src/content/blog/typecho-2012-11-12.md": () => import('../typecho-2012-11-12_ATMPR_pV.mjs'),"/src/content/blog/typecho-2012-12-10.md": () => import('../typecho-2012-12-10_BSvtXYsl.mjs'),"/src/content/blog/typecho-2013-11-19.md": () => import('../typecho-2013-11-19_iBSnZtGM.mjs'),"/src/content/blog/typecho-2014-08-30.md": () => import('../typecho-2014-08-30_Bcxq2FB8.mjs'),"/src/content/blog/typecho-2014-11-29.md": () => import('../typecho-2014-11-29_Bb7YqSAn.mjs'),"/src/content/blog/typecho-2019-11-08.md": () => import('../typecho-2019-11-08_BwW_Jwno.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const slugifyStr = (str) => slug(str);
const slugifyAll = (arr) => arr.map((str) => slugifyStr(str));

const $$Astro$5 = createAstro("https://pagecho.com");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    author = "Xio",
    description = "\u4E00\u5207\u4ECE\u7B80\uFF0C\u8BB0\u5F55\u751F\u6D3B\u3002",
    ogImage = "/assets/logo.png",
    canonicalURL = new URL(Astro2.url.pathname, Astro2.site).href
  } = Astro2.props;
  return renderTemplate`<html lang="zh-CN" class="astro-sckkx6r4"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,user-scalable=no"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="canonical"${addAttribute(canonicalURL, "href")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- General Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><meta name="author"${addAttribute(author, "content")}><link rel="sitemap" href="/sitemap-index.xml"><!-- Open Graph / Facebook --><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:image"${addAttribute(ogImage, "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(canonicalURL, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(ogImage, "content")}><!-- Navy Theme Styles --><link rel="stylesheet" href="/assets/normalize.min.css">${renderHead()}</head> <body class="astro-sckkx6r4"> <div class="move-block astro-sckkx6r4"> ${renderSlot($$result, $$slots["default"])} </div> <p class="link-back2top astro-sckkx6r4"><a href="#" title="返回顶部" class="astro-sckkx6r4">返回顶部</a></p>  </body> </html>`;
}, "D:/\u5DE5\u4F5C/Github/pagecho.github.io-main/src/layouts/Layout.astro", void 0);

const $$Astro$4 = createAstro("https://pagecho.com");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  const currentPath = new URL(Astro2.request.url).pathname;
  return renderTemplate`${maybeRenderHead()}<header id="header" class="clearfix"> <div class="container"> <div class="col-group"> <div class="site-name"> ${currentPath === "/" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <a id="logo" href="/">
Xio<span>'s</span> </a> <h1>${SITE.title}</h1> ` })}` : renderTemplate`<a id="logo" href="/"> ${SITE.title} </a>`} <p class="description">一切从简，记录生活。</p> </div> <div> <nav id="nav-menu" class="clearfix"> <a${addAttribute(currentPath === "/" || currentPath.startsWith("/posts/") ? "current" : "", "class")} href="/">
博客
</a> <a${addAttribute(currentPath === "/about" ? "current" : "", "class")} href="/about">
关于
</a> <a${addAttribute(currentPath === "/links" ? "current" : "", "class")} href="/links">
邻居
</a> <a${addAttribute(currentPath === "/archives" ? "current" : "", "class")} href="/archives">
归档
</a> </nav> </div> </div> </div> </header>`;
}, "D:/\u5DE5\u4F5C/Github/pagecho.github.io-main/src/components/Header.astro", void 0);

const $$Astro$3 = createAstro("https://pagecho.com");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer id="footer"> <div class="container">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} <a rel="nofollow" href="/">${SITE.title}</a>.
</div> </footer>`;
}, "D:/\u5DE5\u4F5C/Github/pagecho.github.io-main/src/components/Footer.astro", void 0);

const postFilter = ({ data }) => {
  const isPublishTimePassed = Date.now() > new Date(data.pubDatetime).getTime() - SITE.scheduledPostMargin;
  return !data.draft && isPublishTimePassed;
};

const getSortedPosts = (posts) => {
  posts.forEach((post) => {
    const html = post.body;
    post.data.description = html;
  });
  return posts.filter(postFilter).sort(
    (a, b) => Math.floor(
      new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() / 1e3
    ) - Math.floor(
      new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime() / 1e3
    )
  );
};

const getUniqueTags = (posts) => {
  const tags = posts.filter(postFilter).flatMap((post) => post.data.tags).map((tag) => ({ tag: slugifyStr(tag), tagName: tag })).filter(
    (value, index, self) => self.findIndex((tag) => tag.tag === value.tag) === index
  ).sort((tagA, tagB) => tagA.tag.localeCompare(tagB.tag));
  return tags;
};

const getUniqueCategories = (posts) => {
  const categories = posts.flatMap((post) => post.data.categories).map((category) => slugifyStr(category)).filter(
    (value, index, self) => self.indexOf(value) === index
  ).sort(
    (categoryA, categoryB) => categoryA.localeCompare(categoryB)
  );
  return categories.map((category) => {
    return {
      category,
      categoryName: posts.flatMap((post) => post.data.categories).find((c) => slugifyStr(c) === category)
    };
  });
};

const $$Astro$2 = createAstro("https://pagecho.com");
const $$Sidebar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Sidebar;
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);
  const recentPosts = sortedPosts.slice(0, 5);
  const uniqueTags = getUniqueTags(posts).slice(0, 12);
  const uniqueCategories = getUniqueCategories(posts);
  return renderTemplate`${maybeRenderHead()}<div class="col-4 astro-ssfzsv2f" id="secondary"> <div class="sidebar astro-ssfzsv2f"> <!-- 搜索 --> <section class="widget astro-ssfzsv2f"> <form id="search" method="get" action="/search" class="astro-ssfzsv2f"> <input type="text" name="q" class="text astro-ssfzsv2f" placeholder="搜索..."> <button type="submit" class="submit icon-search astro-ssfzsv2f">搜索</button> </form> </section> <!-- 最新文章 --> <section class="widget astro-ssfzsv2f"> <div class="widget-title astro-ssfzsv2f">最新文章</div> <ul class="widget-list widget-list2 astro-ssfzsv2f"> ${recentPosts.map((post) => renderTemplate`<li class="astro-ssfzsv2f"> <h3 class="astro-ssfzsv2f"> <a${addAttribute(`/posts/${post.slug}`, "href")} class="astro-ssfzsv2f">${post.data.title}</a> </h3> </li>`)} </ul> </section> <!-- 标签云 --> <section class="widget astro-ssfzsv2f"> <div class="widget-title astro-ssfzsv2f"> <a href="/tags" class="astro-ssfzsv2f">标签云</a> </div> <div class="tag-cloud astro-ssfzsv2f"> ${uniqueTags.map((tag) => renderTemplate`<a${addAttribute(`/tags/${tag.tag}`, "href")} class="tag-link astro-ssfzsv2f">${tag.tagName}</a>`)} </div> </section> <!-- 分类 --> <section class="widget astro-ssfzsv2f"> <div class="widget-title astro-ssfzsv2f">分类</div> <div class="category-grid astro-ssfzsv2f"> ${uniqueCategories.map((category) => renderTemplate`<a${addAttribute(`/categories/${category.category}`, "href")} class="category-link astro-ssfzsv2f">${category.categoryName}</a>`)} </div> </section> <!-- 其它 --> <section class="widget astro-ssfzsv2f"> <div class="widget-title astro-ssfzsv2f">其它</div> <ul class="widget-list widget-list2 astro-ssfzsv2f"> <li class="astro-ssfzsv2f"> <h3 class="astro-ssfzsv2f"> <a href="/rss.xml" class="astro-ssfzsv2f">文章 RSS</a> </h3> </li> <li class="astro-ssfzsv2f"> <h3 class="astro-ssfzsv2f"> <a href="https://astro.build" class="astro-ssfzsv2f">Astro</a> </h3> </li> </ul> </section> </div> </div> `;
}, "D:/\u5DE5\u4F5C/Github/pagecho.github.io-main/src/components/Sidebar.astro", void 0);

const getPageNumbers = (numberOfPosts) => {
  const numberOfPages = numberOfPosts / Number(SITE.postPerPage);
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(numberOfPages); i++) {
    pageNumbers = [...pageNumbers, i];
  }
  return pageNumbers;
};

const getPagination = ({
  posts,
  page,
  isIndex = false
}) => {
  const totalPagesArray = getPageNumbers(posts.length);
  const totalPages = totalPagesArray.length;
  const currentPage = isIndex ? 1 : page && !isNaN(Number(page)) && totalPagesArray.includes(Number(page)) ? Number(page) : 0;
  const lastPost = isIndex ? SITE.postPerPage : currentPage * SITE.postPerPage;
  const startPost = isIndex ? 0 : lastPost - SITE.postPerPage;
  const paginatedPosts = posts.slice(startPost, lastPost);
  return {
    totalPages,
    currentPage,
    paginatedPosts
  };
};

const $$Astro$1 = createAstro("https://pagecho.com");
const $$TagPosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TagPosts;
  const { currentPage, totalPages, paginatedPosts, tag, tagName } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Tag: ${tagName} | ${SITE.title}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<div class="side-click icon-arrow-down"></div> <div id="body"> <div class="container"> <div class="col-group"> <div class="col-8" id="main"> <div class="res-cons"> <article class="post"> <header> <h1 class="post-title">标签: ${tagName}</h1> </header> <div class="post-content"> <p>包含标签 "${tagName}" 的所有文章。</p> <div class="tag-posts"> ${paginatedPosts.map((post) => renderTemplate`<article class="post"> <date class="post-meta"> ${new Date(post.data.pubDatetime).toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </date> <header> <h2 class="post-title"> <a${addAttribute(`/posts/${post.slug}`, "href")}>${post.data.title}</a> </h2> </header> <div class="post-content"> <p>${post.data.description}</p> <div class="more"> <a${addAttribute(`/posts/${post.slug}`, "href")}>阅读剩余部分 -</a> </div> </div> </article>`)} </div> </div> </article> </div> </div> ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} </div> </div> </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/\u5DE5\u4F5C/Github/pagecho.github.io-main/src/layouts/TagPosts.astro", void 0);

const getPostsByTag = (posts, tag) => getSortedPosts(
  posts.filter((post) => slugifyAll(post.data.tags).includes(tag))
);

const $$Astro = createAstro("https://pagecho.com");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  const tags = getUniqueTags(posts);
  return tags.flatMap(({ tag, tagName }) => {
    const tagPosts = getPostsByTag(posts, tag);
    const totalPages = getPageNumbers(tagPosts.length);
    return totalPages.map((page) => ({
      params: { tag, page },
      props: { tag, tagName }
    }));
  });
}
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const { page } = Astro2.params;
  const { tag, tagName } = Astro2.props;
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const postsByTag = getPostsByTag(posts, tag);
  const pagination = getPagination({
    posts: postsByTag,
    page
  });
  return renderTemplate`${renderComponent($$result, "TagPosts", $$TagPosts, { ...pagination, "tag": tag, "tagName": tagName })}`;
}, "D:/\u5DE5\u4F5C/Github/pagecho.github.io-main/src/pages/tags/[tag]/[page].astro", void 0);

const $$file = "D:/工作/Github/pagecho.github.io-main/src/pages/tags/[tag]/[page].astro";
const $$url = "/tags/[tag]/[page]";

const _page_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$page,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Header as $, _page_ as _, $$Sidebar as a, $$Footer as b, $$Layout as c, getSortedPosts as d, getUniqueCategories as e, getPagination as f, getCollection as g, getPageNumbers as h, getUniqueTags as i, getPostsByTag as j, $$TagPosts as k, slugifyStr as s };
