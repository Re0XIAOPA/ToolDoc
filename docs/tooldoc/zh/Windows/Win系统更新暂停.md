# 设置 Windows 更新暂停天数

<!-- 下载按钮 -->
<div style="display: flex; flex-direction: column; align-items: center; gap: 10px; margin: 20px;">
    <p style="font-size: 16px; color: #34D399; text-align: center;">
        直接下载注册表文件运行禁用
    </p>
    <div style="display: flex; gap: 10px;">
        <a href="https://yemiao.lanzout.com/i6VcZ2szx03c" target="_blank"
           style="background-color: #007bff; color: white; border: 2px solid #007bff; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-size: 14px; cursor: pointer; transition: background-color 0.3s, border-color 0.3s;"
           onmouseover="this.style.backgroundColor='#0056b3'; this.style.borderColor='#0056b3';"
           onmouseout="this.style.backgroundColor='#007bff'; this.style.borderColor='#007bff';">
            禁用系统更新(延长禁用天数)
        </a>
        <a href="https://yemiao.lanzout.com/iWHd32szx05e" target="_blank"
           style="background-color: #007bff; color: white; border: 2px solid #007bff; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-size: 14px; cursor: pointer; transition: background-color 0.3s, border-color 0.3s;"
           onmouseover="this.style.backgroundColor='#0056b3'; this.style.borderColor='#0056b3';"
           onmouseout="this.style.backgroundColor='#007bff'; this.style.borderColor='#007bff';">
            禁用系统更新延长99999天
        </a>
    </div>
</div>

:::tip 下载注意事项
**禁用系统更新(延长禁用天数)** ：延长禁用天数(大概可禁用20年)  
**禁用系统更新延长99999天** ：天数过大、win11部分电脑在筛选禁用周数可能会设置卡顿
:::

通过修改注册表，可以控制 Windows 更新的暂停天数。以下是详细步骤：

## 1\. 打开注册表编辑器

1. 按下 **`Win + R`** 组合键，打开“运行”对话框。
2. 在对话框中输入 **`regedit`**，然后按 **回车键** 打开注册表编辑器。

## 2\. 导航到目标路径

在注册表编辑器中，依次展开以下路径：  

HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsUpdate\UX\Settings

```bash
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsUpdate\UX\Settings
```

## 3\. 新建 DWORD(32位) 值

1. 在 **`Settings`** 项下，右键点击空白处，选择 **`新建`** > **`DWORD (32位) 值`**。
2. 将新建的值命名为 **`FlightSettingsMaxPauseDays`**。

## 4\. 修改数值

1. 新建 **`FlightSettingsMaxPauseDays`**，打开其属性对话框。
2. 在 **`数值数据`** 中输入你希望的暂停天数（十进制格式）。
3. 点击 **`确定`** 保存设置。
   
## 5\. 禁用系统更新天数
- 设置 -> Windows更新里暂停天数。

## 注意事项

- **谨慎操作**：修改注册表可能会对系统稳定性产生影响。在操作前，请确保备份注册表。
- **备份注册表**：在修改注册表之前，建议通过 **`文件`** > **`导出`** 功能备份当前注册表。
- **适用范围**：此方法适用于 **Windows 10** 和 **Windows 11** 系统。
- **恢复默认设置**：如果需要恢复默认设置，可以将 **`FlightSettingsMaxPauseDays`** 的值设置为 **`0`** 或删除该键值。