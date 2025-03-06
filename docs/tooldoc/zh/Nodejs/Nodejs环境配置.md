# Node.js 环境配置指南：配置 `node_global` 和 `node_cache`

## 目录
1. [为什么需要配置](#为什么需要配置)
2. [安装 Node.js](#安装-nodejs)
3. [配置全局目录](#配置全局目录)
   - 3.1 [创建全局目录](#31-创建全局目录)
   - 3.2 [配置环境变量](#32-配置环境变量)
4. [验证配置](#验证配置)
5. [注意事项](#注意事项)

---

## 为什么需要配置
默认情况下，Node.js 全局安装的包会存储在系统目录中，可能导致：
- **权限问题**：需要 `sudo` 权限（Linux/macOS）
- **路径混乱**：全局包分散在系统目录
- **版本管理困难**：难以区分不同项目的全局依赖

配置 `node_global` 和 `node_cache` 可以：
- 将全局包集中管理
- 避免权限问题
- 方便后续维护清理

---

## 安装 Node.js
1. 访问 [Node.js 官网](https://nodejs.org) 下载安装包
2. 推荐选择 **LTS 版本**（长期支持版）
3. 安装时勾选以下选项（Windows）：
   - ✅ `Add to PATH`
   - ✅ `Automatically install necessary tools`

---

## 配置全局目录

### 3.1 创建全局目录
```bash
# 创建存放全局模块的目录（任意位置，推荐在用户目录下）
mkdir ~/node_global  # macOS/Linux
md C:\node_global    # Windows

# 创建缓存目录
mkdir ~/node_cache   # macOS/Linux
md C:\node_cache     # Windows
```

### 3.2 配置环境变量
#### Windows 系统
1. 右键「此电脑」→「属性」→「高级系统设置」
2. 点击「环境变量」
3. 在「用户变量」中：
   - 新建变量 `NODE_HOME`，值：`C:\Program Files\nodejs\node_global` （你的地址）
4. 在「Path」中添加：
   - `C:\Program Files\nodejs\node_global`
   - `C:\Program Files\nodejs\node_cache`

#### macOS/Linux 系统
```bash
# 编辑配置文件（根据使用的shell选择）
nano ~/.bashrc       # Bash
nano ~/.zshrc        # Zsh
nano ~/.profile      # 通用

# 添加以下内容
export NODE_GLOBAL_HOME="$HOME/node_global"
export NODE_CACHE_HOME="$HOME/node_cache"
export PATH="$NODE_GLOBAL_HOME/bin:$PATH"
export NODE_PATH="$NODE_GLOBAL_HOME/lib/node_modules"

# 使配置生效
source ~/.bashrc   # 或对应配置文件
```

---

## 验证配置
```bash
# 查看配置是否生效
npm config get prefix    # 应显示 node_global 路径
npm config get cache     # 应显示 node_cache 路径

# 测试全局安装
npm install -g yarn

# 检查安装位置
which yarn               # 应显示 node_global 中的路径
```

---

## 注意事项
1. **权限问题**：确保对目录有读写权限
   ```bash
   chmod -R 755 ~/node_global  # Linux/macOS
   ```
2. **跨平台开发**：建议将目录配置到非系统盘（Windows）
3. **团队协作**：可将配置写入项目文档统一规范
4. **清理缓存**：定期清理缓存目录
   ```bash
   npm cache clean --force
   ```

> 配置完成后，所有 `npm install -g` 安装的包都会存储到 `node_global`，缓存文件将存放到 `node_cache`