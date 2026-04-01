# 部署说明 - Eastar-s-website

## 📋 项目信息

- **项目名称**: Eastar-s-website
- **GitHub 仓库**: https://github.com/chenzx060115-commits/Eastar-s-website
- **部署方式**: GitHub Pages + GitHub Actions
- **Base 路径**: `/Eastar-s-website/`
- **网站地址**: https://chenzx060115-commits.github.io/Eastar-s-website/

## 🚀 部署步骤

### 第一步：推送到 GitHub

在您的本地电脑上，进入项目目录并运行：

```bash
# 进入项目目录
cd Eastar-s-website

# 配置远程仓库（如果尚未配置）
git remote add origin https://github.com/chenzx060115-commits/Eastar-s-website.git

# 推送到 GitHub
git push -u origin main
```

### 第二步：配置 GitHub Pages

1. 打开 GitHub 仓库：https://github.com/chenzx060115-commits/Eastar-s-website
2. 点击 **Settings**（设置）
3. 在左侧菜单中找到 **Pages**
4. 在 **Source** 部分，选择：
   - **Deploy from a branch**
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
5. 点击 **Save**

### 第三步：等待自动部署

GitHub Actions 会自动：
1. 检测到 `main` 分支的推送
2. 运行构建流程（`pnpm install` 和 `pnpm build`）
3. 生成 `dist` 文件夹
4. 自动部署到 `gh-pages` 分支
5. 发布到 GitHub Pages

### 第四步：访问网站

部署完成后（通常需要 2-5 分钟），访问：

```
https://chenzx060115-commits.github.io/Eastar-s-website/
```

## ✅ 验证部署

1. **检查 GitHub Actions 状态**：
   - 访问 https://github.com/chenzx060115-commits/Eastar-s-website/actions
   - 查看最新的工作流运行状态

2. **检查网站是否在线**：
   - 访问 https://chenzx060115-commits.github.io/Eastar-s-website/
   - 应该看到网站的首页

3. **检查 GitHub Pages 设置**：
   - 访问 Settings → Pages
   - 应该看到 "Your site is live at..." 的消息

## 🔄 后续更新

每次推送到 `main` 分支时，GitHub Actions 会自动重新构建和部署：

```bash
# 修改代码后
git add .
git commit -m "Update website content"
git push origin main
```

## 📝 项目结构

```
Eastar-s-website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 工作流
├── client/
│   ├── index.html              # HTML 入口
│   └── src/
│       ├── main.tsx            # React 入口
│       ├── App.tsx             # 主应用组件
│       ├── index.css           # 全局样式
│       └── pages/
│           ├── Home.tsx        # 首页
│           └── NotFound.tsx    # 404 页面
├── vite.config.ts              # Vite 配置（base: /Eastar-s-website/）
├── tsconfig.json               # TypeScript 配置
├── package.json                # 项目依赖
└── README.md                   # 项目说明
```

## 🛠️ 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产构建
pnpm preview
```

## ⚙️ 配置说明

### vite.config.ts
- **base**: `/Eastar-s-website/` - GitHub Pages 子路径
- **server.hmr**: 配置了 WebSocket 连接用于热模块替换

### package.json
- 仅包含前端依赖，**没有** esbuild server 或 Node.js 后端构建命令
- 构建命令：`vite build`（纯前端构建）

### .github/workflows/deploy.yml
- 触发条件：推送到 `main` 分支或 PR
- 构建步骤：
  1. 检出代码
  2. 设置 pnpm 和 Node.js
  3. 安装依赖
  4. 构建项目
  5. 上传 dist 文件夹
  6. 部署到 GitHub Pages

## 🔍 故障排除

### 问题 1：GitHub Actions 构建失败

**检查步骤**：
1. 访问 Actions 标签页查看错误日志
2. 常见原因：
   - 依赖安装失败 → 检查 package.json
   - 构建错误 → 检查 TypeScript 类型
   - 权限问题 → 检查 GitHub 设置

### 问题 2：网站显示 404

**解决方案**：
1. 确保 URL 末尾有斜杠：`https://chenzx060115-commits.github.io/Eastar-s-website/`
2. 清除浏览器缓存
3. 等待 GitHub Pages 完成部署（5-10 分钟）
4. 检查 GitHub Pages 设置中的 Source 是否正确

### 问题 3：样式或资源加载失败

**原因**：base 路径配置不正确

**解决方案**：
- 确保 `vite.config.ts` 中的 `base` 设置为 `/Eastar-s-website/`
- 重新构建：`pnpm build`
- 重新推送到 GitHub

## 📞 需要帮助？

如果遇到问题，请检查：
1. GitHub Actions 的错误日志
2. 浏览器开发者工具的控制台错误
3. GitHub Pages 的部署状态
4. 仓库的 Settings → Pages 配置

---

**创建时间**: 2026-04-01  
**项目类型**: 纯前端静态网站  
**部署平台**: GitHub Pages
