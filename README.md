# Eastar's Portfolio - 赛博朋克风格作品集

一个现代化、高性能的个人作品集网站，采用赛博朋克风格设计。

## 🎨 设计特点

- **深色赛博朋克主题**：深黑背景 + 霓虹紫色强调
- **液态玻璃效果**：Glassmorphism 设计
- **流畅动画**：Framer Motion 提供的平滑过渡
- **呼吸灯效果**：紫色霓虹呼吸灯动画
- **视差滚动**：页面滚动时的视差效果
- **Bento Box 布局**：创意网格项目展示
- **响应式设计**：完美适配各种设备

## 🛠️ 技术栈

- **React 19** - 用户界面框架
- **Vite** - 快速构建工具
- **TypeScript** - 类型安全
- **Tailwind CSS 4** - 样式框架
- **Framer Motion** - 动画库
- **Wouter** - 轻量级路由库

## 📦 项目结构

```
.
├── client/
│   ├── index.html              # HTML 入口
│   ├── public/
│   │   └── 404.html            # SPA 路由重定向
│   └── src/
│       ├── main.tsx            # React 入口
│       ├── App.tsx             # 主应用组件
│       ├── index.css           # 全局样式
│       └── pages/
│           ├── Home.tsx        # 首页
│           └── NotFound.tsx    # 404 页面
├── vite.config.ts              # Vite 配置
├── tsconfig.json               # TypeScript 配置
└── package.json                # 项目配置
```

## 🚀 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

访问 `http://localhost:5173`

### 构建生产版本

```bash
pnpm build
```

构建输出在 `dist` 文件夹中。

## 📝 内容部分

- **关于我**：技术栈、经验、教育背景
- **工作经验**：班长经验、销售专业背景
- **精选项目**：Bento Box 布局展示
- **联系方式**：邮件、GitHub、LinkedIn

## 🌐 部署

### GitHub Pages 部署

1. 构建项目：`pnpm build`
2. 推送到 `gh-pages` 分支
3. 在 GitHub 仓库设置中启用 GitHub Pages

网站地址：`https://chenzx060115-commits.github.io/Eastar-s-website/`

## 📄 许可证

MIT License - 详见 LICENSE 文件

---

**作者**：Eastar  
**最后更新**：2026 年 4 月
