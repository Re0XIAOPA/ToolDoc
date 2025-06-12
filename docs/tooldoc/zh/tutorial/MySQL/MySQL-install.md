# MySQL的安装和环境配置

## 1. 下载

> 程序版本：[点击下载](https://dev.mysql.com/downloads/mysql/)
> Windows (x86, 64-bit), MSI Installe
>
> 压缩包版：[点击下载](https://dev.mysql.com/downloads/mysql/)
> Windows (x86, 64-bit), ZIP Archive

:::tip 提示
当新版本有问题可以尝试降低版本使用
:::

## 2. 安装

> 程序版本：直接安装，有可视化界面提示，跟着提示进行操作即可
>
> 压缩包版：自行放置且解压，如 D:\MySQL\mysql-8.0.28-winx64

## 3. 环境配置

### 程序版本

该版本选择 MSI 程序安装，默认会将环境添加到 PATH 中，跟着软件操作步骤安装

### 压缩包版

- 第一种

搜索 **`编辑系统环境变量`** 打开 **`环境变量`** -> **`系统变量`** -> **`新建`**

> 将 **`D:\MySQL\mysql-8.0.28-winx64\bin`** 添加到 PATH 中

- 第二种

搜索 **`编辑系统环境变量`** 打开 **`环境变量`** -> **`系统变量`** -> **`新建`**

> 新建一个环境变量，变量名：**`MYSQL_HOME`**，变量值：**`D:\MySQL\mysql-8.0.28-winx64`**

**`系统变量`** -> **`Path`** -> **`新建`**

> 将 **`%MYSQL_HOME%\bin`** 添加到 PATH 中
::: code-group
```bash [复制]
%MYSQL_HOME%\bin
```
:::

## 添加配置文件

1. 创建一个配置文件，如：**`my.ini`** 创建在 **`mysql-8.0.28-winx64`** 根目录下
2. 将如下任意内容复制到配置文件中，路劲需修改为实际路径

::: code-group
```bash [配置一]
[mysqld]

# Remove leading # and set to the amount of RAM for the most important data
# cache in MySQL. Start at 70% of total RAM for dedicated server, else 10%.
# innodb_buffer_pool_size = 128M

# Remove leading # to turn on a very important data integrity option: logging
# changes to the binary log between backups.
# log_bin

# These are commonly set, remove the # and set as required.
# 设置MYSQL的安装目录
basedir=D:\MySQL\mysql-8.0.28-winx64
# 设置MYSQL的数据目录
datadir=D:\MySQL\mysql-8.0.28-winx64\data
# 设置端口
port=3306
# server_id = .....

# Remove leading # to set options mainly useful for reporting servers.
# The server defaults are faster for transactions and fast SELECTs.
# Adjust sizes as needed, experiment to find the optimal values.
# join_buffer_size = 128M
# sort_buffer_size = 2M
# read_rnd_buffer_size = 2M 
#设置SQL模式
sql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES
```

```bash [配置二]
[mysqld]
# 自定义设置3306端口，建议采用默认；如果已存在可以设置其它端口号
port=3306
# 设置mysql的安装目录
# 切记此处一定要用双斜杠\\，单斜杠可能这里会出错(根据情况而定)
basedir=C:\\Software\\MySQL8.0\\mysql-8.4.0-winx64
# 设置mysql数据库的数据的存放目录
datadir=C:\\Software\\MySQL8.0\\mysql-8.4.0-winx64\\data
# 允许最大连接数
max_connections=200
# 允许连接失败的次数。这是为了防止有人从该主机试图攻击数据库系统
max_connect_errors=10
# 服务端使用的字符集默认为UTF8
character-set-server=utf8mb4
# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB
[mysql]
# 设置mysql客户端默认字符集
default-character-set=utf8mb4
[client]
# 设置mysql客户端连接服务端时默认使用的端口，要与第三行的port保持一致
port=3306
default-character-set=utf8mb4
```

```bash [配置三]
[mysql]
# 设置mysql客户端默认字符集
default-character-set=utf8
[mysqld]
#设置3306端口
port = 3306
# 设置mysql的安装目录
basedir=D:\mysql\mysql-5.6.33-winx64
# 设置mysql数据库的数据的存放目录
datadir=D:\mysql\mysql-5.6.33-winx64\data
# 允许最大连接数
max_connections=200
# 服务端使用的字符集默认为8比特编码的latin1字符集
character-set-server=utf8
# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB
```
:::

## MySQL 安装步骤

## 先进入安装的磁盘
比如在 D盘管理员打开cmd 就输入(英文输入法输入)

:::code-group
```bash [第一步]
<!-- 进入D盘 -->
D:
```
```bash [第二步]
cd D:\SQL\mysql-8.0.28-winx64\bin
```
::: tip 提示
(D:\SQL\mysql-8.0.28-winx64\bin这个是路劲)
:::

## 初始化

```bash
mysqld --initialize-insecure --user=mysql
```


## 安装MySQL

```bash
mysqld --install MySQL --defaults-file="D:\SQL\mysql-8.0.28-winx64\my.ini"
```

:::tip 提示
--defaults-file="这里是my.ini的路劲"
:::

## 启动MySQL（命令行）

```bash
net start mysql
```

:::tip 提示
也可以直接搜索服务打开MySQL服务
:::

## 登录MySQL

```bash
mysql -h localhost -u root -p
```
:::tip 提示
根据步骤来的默认无需密码，除非你使用了mysqld --initialize --console 生成了初始密码
:::

## 设置密码

```bash
SET PASSWORD FOR root@localhost = '123456';
```

:::tip 提示
-h 后面参数是主机地址  
-u 后面是用户名  
-p 后面是用户的登录密码  
=  等号后面是密码
:::

## 退出mysql

::: code-group
```bash [第一种]
\q
```
```bash [第二种]
quit
```
```bash [第三种]
exit
```
:::

## 卸载MySQL服务

```bash
mysqld remove MySQL
```

## 重置密码（什么？你说你忘记密码了？）

1. 关闭MySQL服务
```bash
net stop mysql
```

2. 跳过密码输入授权，免密登录
```bash
mysqld --console --skip-grant-tables --shared-memory
```

3. 再打开一个cmd管理员窗口，重置密码
4. 依次执行命令（会直接进入不用输入密码）
```bash
mysql
```
```bash
use mysql
```

5. 修改更新 root 用户的密码
```bash
UPDATE user SET authentication_string = PASSWORD('123456') WHERE User = 'root';
```

:::tip 提示
不过需要注意的是，在 MySQL 8.0 及之后的版本中，PASSWORD() 函数已被移除，你可以使用 ALTER USER 语句来重置密码，示例如下：
:::

```bash
ALTER USER 'root'@'localhost' IDENTIFIED BY '123456';
```

6. 刷新权限使更改生效
```bash
FLUSH PRIVILEGES;
```

7. 完成

关闭窗口启动MySQL服务（用修改的密码登录）
