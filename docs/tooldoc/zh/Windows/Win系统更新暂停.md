# 设置 Windows 更新暂停天数

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
   
## 注意事项

- **谨慎操作**：修改注册表可能会对系统稳定性产生影响。在操作前，请确保备份注册表。
- **备份注册表**：在修改注册表之前，建议通过 **`文件`** > **`导出`** 功能备份当前注册表。
- **适用范围**：此方法适用于 **Windows 10** 和 **Windows 11** 系统。
- **恢复默认设置**：如果需要恢复默认设置，可以将 **`FlightSettingsMaxPauseDays`** 的值设置为 **`0`** 或删除该键值。