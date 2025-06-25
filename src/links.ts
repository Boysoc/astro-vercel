export interface Link {
  name: string;
  href: string;
  logo: string;
  darkLogo?: string;
  description?: string;
  inactive?: boolean; // 新增字段：是否不活跃
}

export const links: Link[] = [
  {
    name: "Cho",
    href: "https://frynut.com/",
    logo: "https://frynut.com/assets/logo.svg.svg",
    description: "一束光",
  },
  {
    name: "Zimoo`s",
    href: "https://zimoo.me/",
    logo: "https://cravatar.cn/avatar/1fa37bd1ff014dd0df4178b0cebcfc13?s=32&r=G&d=",
    description: "一位蜀国人",
  },
  {
    name: "晚餐",
    href: "https://frynut.com/",
    logo: "src/assets/links/jiangxixi.svg",
    description: "有名教主。（切尔西的夏天）",
    inactive: true, // 👉 加上这个字段表示此人“停更”或“下线”
  },
  {
    name: "小剧客栈",
    href: "http://bh-lay.com/",
    description: "有戏的博客"
  },
  {
    name: "面条",
    href: "http://miantiao.me/",
    description: "面条的自留地"
  },
  {
    name: "山炮不二",
    href: "http://xsinger.me/",
    description: "歌者与生活"
  },
  {
    name: "咚门",
    href: "http://www.dearzd.com/",
    description: "设计师生活"
  },
  {
    name: "Huiris's Blog",
    href: "http://huiris.com/",
    description: "Huiris 的数字空间"
  },
  {
    name: "设计笔记",
    href: "https://biji.io/",
    description: "界面设计师分享"
  },
  {
    name: "小剧客栈",
    href: "http://bh-lay.com/",
    description: "有戏的博客"
  },
  {
    "name": "liruifengv",
    "href": "https://liruifengv.com",
    "logo": "https://bucket.liruifengv.com/avatar.jpg",
    "description": "Web 开发者，Astro 项目成员，开源爱好者。"
  }
];
