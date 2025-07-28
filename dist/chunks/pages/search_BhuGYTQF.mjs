import { c as createComponent, a as createAstro, g as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../astro_CfhZ-N1h.mjs';
import 'kleur/colors';
import 'clsx';
import { s as slugifyStr, g as getCollection, d as getSortedPosts, $ as $$Header, a as $$Sidebar, b as $$Footer, c as $$Layout } from './_page__D8gYU4MM.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import Fuse from 'fuse.js';
import { useMemo, useRef, useState, useEffect } from 'react';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
import { S as SITE } from './404_BF8Q7jXY.mjs';
/* empty css                           */

function Datetime({
  pubDatetime,
  modDatetime,
  size = "sm",
  className
}) {
  return /* @__PURE__ */ jsx("div", { className: `date-box ${className ?? ""}`, children: /* @__PURE__ */ jsx("span", { className: `italic ${size === "sm" ? "text-sm" : "text-base"}`, children: /* @__PURE__ */ jsx(
    FormattedDatetime,
    {
      pubDatetime,
      modDatetime
    }
  ) }) });
}
const FormattedDatetime = ({ pubDatetime, modDatetime }) => {
  const myDatetime = new Date(
    modDatetime && modDatetime > pubDatetime ? modDatetime : pubDatetime
  );
  const date = myDatetime.toISOString().substring(0, 10);
  const [year, month, day] = date.split("-");
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  const monthIndex = parseInt(month) - 1;
  const monthAbbreviation = monthNames[monthIndex];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    monthAbbreviation,
    " ",
    day,
    ", ",
    year
  ] });
};

const md = new MarkdownIt({
  html: true,
  breaks: true,
  linkify: true
});
function Card({ href, slug = "none-slug", frontmatter, secHeading = true }) {
  const { title, pubDatetime, modDatetime, description } = frontmatter;
  const headerProps = {
    style: { viewTransitionName: slugifyStr(slug) },
    className: "card-title-link"
  };
  const renderedDescription = useMemo(() => {
    if (!description) return "";
    const htmlContent = md.render(description);
    return sanitizeHtml(htmlContent, {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
      allowedAttributes: {
        ...sanitizeHtml.defaults.allowedAttributes,
        img: ["src", "alt", "title"]
      }
    });
  }, [description]);
  return /* @__PURE__ */ jsxs("li", { className: "card-list-li", children: [
    /* @__PURE__ */ jsx("div", { className: "card-meta", children: /* @__PURE__ */ jsx(Datetime, { pubDatetime, modDatetime }) }),
    /* @__PURE__ */ jsx("a", { href, className: "card-title", children: secHeading ? /* @__PURE__ */ jsx("h2", { ...headerProps, children: title }) : /* @__PURE__ */ jsx("h3", { ...headerProps, children: title }) }),
    description && /* @__PURE__ */ jsx(
      "div",
      {
        className: "card-description",
        dangerouslySetInnerHTML: { __html: renderedDescription }
      }
    )
  ] });
}

function SearchBar({ searchList }) {
  const inputRef = useRef(null);
  const [inputVal, setInputVal] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const handleChange = (e) => {
    setInputVal(e.currentTarget.value);
  };
  const fuse = useMemo(
    () => new Fuse(searchList, {
      keys: ["title", "description", "data.tags", "data.categories"],
      includeMatches: true,
      minMatchCharLength: 1,
      threshold: 0.5
    }),
    [searchList]
  );
  useEffect(() => {
    if (inputVal.length > 0) {
      const searchResult = fuse.search(inputVal);
      setSearchResults(searchResult);
    } else {
      setSearchResults(null);
    }
  }, [fuse, inputVal]);
  const clearSearch = () => {
    setInputVal("");
    setSearchResults(null);
    inputRef.current?.focus();
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("label", { className: "relative block", children: [
      /* @__PURE__ */ jsx("span", { className: "absolute inset-y-0 left-0 flex items-center pl-2 opacity-75", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "m19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" }) }) }),
      /* @__PURE__ */ jsx(
        "input",
        {
          className: "block w-full rounded border border-skin-fill \n        border-opacity-40 bg-skin-fill py-3 pl-10 pr-3 placeholder:italic\n        placeholder:text-opacity-75 focus:border-skin-accent \n        focus:outline-none",
          placeholder: "搜索文章...",
          type: "text",
          name: "search",
          value: inputVal,
          onChange: handleChange,
          autoComplete: "off",
          ref: inputRef
        }
      ),
      inputVal && /* @__PURE__ */ jsx(
        "button",
        {
          className: "absolute inset-y-0 right-2 flex items-center justify-center",
          onClick: clearSearch,
          title: "清空搜索",
          children: /* @__PURE__ */ jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "h-6 w-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              strokeWidth: 2,
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M6 18L18 6M6 6l12 12"
                }
              )
            }
          )
        }
      )
    ] }),
    inputVal.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
      "找到 ",
      searchResults?.length ?? 0,
      " 个",
      searchResults?.length === 1 ? "结果" : "结果",
      inputVal && ` "${inputVal}"`
    ] }),
    /* @__PURE__ */ jsx("ul", { className: "search-results", children: searchResults && searchResults.map(({ item, refIndex }) => /* @__PURE__ */ jsx(
      Card,
      {
        href: `/posts/${item.slug}/`,
        frontmatter: item.data,
        slug: item.slug
      },
      `${refIndex}-${item.slug}`
    )) })
  ] });
}

const $$Astro = createAstro("https://pagecho.com");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);
  const searchList = sortedPosts.map((post) => ({
    title: post.data.title,
    description: post.data.description || "",
    data: post.data,
    slug: post.slug
  }));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `\u641C\u7D22 | ${SITE.title}`, "class": "astro-ipsxrsrh" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "class": "astro-ipsxrsrh" })} ${maybeRenderHead()}<div class="side-click icon-arrow-down astro-ipsxrsrh"></div> <div id="body" class="astro-ipsxrsrh"> <div class="container astro-ipsxrsrh"> <div class="col-group astro-ipsxrsrh"> <div class="col-8 astro-ipsxrsrh" id="main"> <div class="res-cons astro-ipsxrsrh"> <article class="post astro-ipsxrsrh"> <header class="astro-ipsxrsrh"> <h1 class="post-title astro-ipsxrsrh">搜索</h1> </header> <div class="post-content astro-ipsxrsrh"> ${renderComponent($$result2, "SearchBar", SearchBar, { "searchList": searchList, "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/Search", "client:component-export": "default", "class": "astro-ipsxrsrh" })} </div> </article> </div> </div> ${renderComponent($$result2, "Sidebar", $$Sidebar, { "class": "astro-ipsxrsrh" })} </div> </div> </div> ${renderComponent($$result2, "Footer", $$Footer, { "class": "astro-ipsxrsrh" })} ` })}  `;
}, "D:/\u5DE5\u4F5C/Github/pagecho.github.io-main/src/pages/search.astro", void 0);

const $$file = "D:/工作/Github/pagecho.github.io-main/src/pages/search.astro";
const $$url = "/search";

export { $$Search as default, $$file as file, $$url as url };
