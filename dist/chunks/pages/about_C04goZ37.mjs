import { a as createAstro, c as createComponent, g as renderComponent, m as maybeRenderHead, i as renderSlot, b as renderTemplate, u as unescapeHTML } from '../astro_CfhZ-N1h.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Header, a as $$Sidebar, b as $$Footer, c as $$Layout } from './_page__rzxYW47S.mjs';

const $$Astro = createAstro("https://pagecho.com");
const $$AboutLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AboutLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": frontmatter.title, "description": "\u5173\u4E8E\u9875\u9762" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<div class="side-click icon-arrow-down"></div> <div id="body"> <div class="container"> <div class="col-group"> <div class="col-8" id="main"> <div class="res-cons"> <article class="post single-page"> <header> <h1 class="post-title">${frontmatter.title}</h1> </header> <div class="page-content post-content"> ${renderSlot($$result2, $$slots["default"])} </div> <footer class="post-footer"> <section class="author"> <div class="author-ava"> <img src="/assets/author-head.gif" alt="Xio" width="160" height="160"> </div> <p>一切从简 记录生活</p> </section> </footer> </article> </div> </div> ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} </div> </div> </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/\u5DE5\u4F5C/Github/pagecho.github.io-main/src/layouts/AboutLayout.astro", void 0);

const html = "<h1 id=\"关于我\">关于我</h1>\n<p>一切从简，记录生活。</p>\n<p>这是一个基于 Astro 构建的个人博客，移植自 Typecho Navy 主题。</p>\n<h2 id=\"联系方式\">联系方式</h2>\n<ul>\n<li>邮箱：<a href=\"mailto:your-email@example.com\">your-email@example.com</a></li>\n<li>GitHub：<a href=\"https://github.com/yourusername\">https://github.com/yourusername</a></li>\n</ul>\n<h2 id=\"技术栈\">技术栈</h2>\n<ul>\n<li>Astro</li>\n<li>TypeScript</li>\n<li>CSS3</li>\n<li>HTML5</li>\n</ul>\n<p>感谢您的访问！</p>";

				const frontmatter = {"layout":"../layouts/AboutLayout.astro","title":"关于"};
				const file = "D:/工作/Github/pagecho.github.io-main/src/pages/about.md";
				const url = "/about";
				function rawContent() {
					return "\n# 关于我\n\n一切从简，记录生活。\n\n这是一个基于 Astro 构建的个人博客，移植自 Typecho Navy 主题。\n\n## 联系方式\n\n- 邮箱：your-email@example.com\n- GitHub：https://github.com/yourusername\n\n## 技术栈\n\n- Astro\n- TypeScript\n- CSS3\n- HTML5\n\n感谢您的访问！";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"关于我","text":"关于我"},{"depth":2,"slug":"联系方式","text":"联系方式"},{"depth":2,"slug":"技术栈","text":"技术栈"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$AboutLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
