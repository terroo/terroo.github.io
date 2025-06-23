---
layout: post
title: "50 GNU Commands X 50 PowerShell Commands"
date: 2025-06-23 09:39:49
image: '/assets/img/powershell/gnu-vs-powershell.jpg'
description: "🐂 🆚 ✴️ Everyday terminal commands used in GNU and their PowerShell equivalents."
tags:
- powershell
- gnu
- commands
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---  

In the world of task automation, mastering the command line is an essential skill. Whether using traditional **[GNU commands](https://terminalroot.com/tags#gnu)** or navigating the [Windows](https://terminalroot.com/tags#windows) ecosystem with the powerful **[PowerShell](https://terminalroot.com/tags#powershell)**, knowing the right tools can transform your productivity.  

In this post, we’ll compare **50 GNU commands** with their **PowerShell equivalents**.  


<!-- SQUARE - GAMES ROOT -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---  

## 💻 01. Delete a Directory Recursively  
### 🐂 GNU  
{% highlight bash %}
rm -rf /home/$USER/folder  
{% endhighlight %}

### ✴️ PowerShell  
{% highlight bash %}
Remove-Item -Path "C:\folder" -Recurse -Force  
{% endhighlight %}

---  

## 💻 02. Get the Name of a Running Process  
### 🐂 GNU  
{% highlight bash %}
ps aux | grep apache2 # httpd  
{% endhighlight %}
> systemd: `systemctl status apache2`  

### ✴️ PowerShell  
{% highlight powershell %}
Get-Service | Where-Object { $_.DisplayName -like "*Apache*" }  
{% endhighlight %}

---  

## 💻 03. Stop a Service  
{% highlight bash %}
sudo kill -9 $(pidof apache2) # httpd  
{% endhighlight %}
> systemd: `sudo systemctl stop apache2`  

### ✴️ PowerShell  
{% highlight powershell %}
Stop-Service -Name "Apache2.4"  
{% endhighlight %}

---  

## 💻 04. Remove an Environment Variable  
### 🐂 GNU  
{% highlight bash %}
unset VARIABLE_NAME  
{% endhighlight %}

### ✴️ PowerShell `C:\App\bin`  
{% highlight powershell %}
# Get the current value of the system Path environment variable  
$envPath = [Environment]::GetEnvironmentVariable("Path", [EnvironmentVariableTarget]::Machine)  

# Split paths into an array  
$paths = $envPath -split ';'  

# Filter to remove the unwanted path  
$newPaths = $paths | Where-Object { $_ -ne "C:\App\bin" }  

# Rebuild the Path environment variable (without the unwanted path)  
$newPathString = ($newPaths -join ';').TrimEnd(';')  

# Update the system environment variable  
[Environment]::SetEnvironmentVariable("Path", $newPathString, [EnvironmentVariableTarget]::Machine)  
{% endhighlight %}

---  

## 💻 05. Check if a Command Exists  
### 🐂 GNU  
{% highlight bash %}
which mycommand  
{% endhighlight %}

### ✴️ PowerShell  
{% highlight powershell %}
Get-Command mycommand  
{% endhighlight %}

---  

## 💻 06. Create a Folder/Directory  
### 🐂 GNU  
{% highlight bash %}
mkdir my-project  
{% endhighlight %}

### ✴️ PowerShell  
{% highlight powershell %}
New-Item -ItemType Directory "MyProject"  
{% endhighlight %}

---  

## 💻 07. Create a Folder/Directory Recursively  
### 🐂 GNU  
{% highlight bash %}
mkdir -p my-project/folder/new  
{% endhighlight %}

### ✴️ PowerShell  
{% highlight powershell %}
New-Item -Path "C:/MyProject/folder/new" -ItemType Directory  
{% endhighlight %}

---  

## 💻 08. Move a Folder/Directory  
### 🐂 GNU  
{% highlight bash %}
mv folder new/path/  
{% endhighlight %}

## 💻 PowerShell  
{% highlight powershell %}
Move-Item -Path "folder" -Destination "C:\new\path\"  
{% endhighlight %}

---  

## 💻 09. Enter a Folder/Directory  
### 🐂 GNU  
{% highlight bash %}
cd folder/  
{% endhighlight %}

### ✴️ PowerShell  
{% highlight powershell %}
Set-Location folder  
{% endhighlight %}

---  

## 💻 10. Copy Files and Directories  
### 🐂 GNU  
{% highlight bash %}
cp file path/to/dest  
cp -r folder/ path/to/dest  
{% endhighlight %}

### ✴️ PowerShell  
{% highlight powershell %}
Copy-Item file path\to\dest  
Copy-Item folder\ -Recurse -Destination path\to\dest  
{% endhighlight %}

---  

## 💻 11. Get the Home Directory and/or Username  
### 🐂 GNU  
{% highlight bash %}
$HOME  
# echo $HOME  

$USER  
# echo $USER  
{% endhighlight %}

### ✴️ PowerShell  
{% highlight powershell %}
$env:USERPROFILE  
# Write-Host $env:USERPROFILE  

$env:USERNAME  
# Write-Host $env:USERNAME  
{% endhighlight %}

---  

## 💻 12. List Files and Directories  

### 🐂 GNU  

{% highlight bash %}
ls -la  
{% endhighlight %}

### ✴️ PowerShell  

{% highlight powershell %}
Get-ChildItem -Force  
{% endhighlight %}

---  

## 💻 13. Display Text File Content  

### 🐂 GNU  

{% highlight bash %}
cat file.txt  
{% endhighlight %}

### ✴️ PowerShell  

{% highlight powershell %}
Get-Content file.txt  
{% endhighlight %}

---  

## 💻 14. Search for Text Inside Files  

### 🐂 GNU  

{% highlight bash %}
grep "term" file.txt  
{% endhighlight %}

### ✴️ PowerShell  

{% highlight powershell %}
Select-String -Pattern "term" -Path file.txt  
{% endhighlight %}

---  

## 💻 15. Show Disk Usage  

### 🐂 GNU  

{% highlight bash %}
df -h  
{% endhighlight %}

### ✴️ PowerShell  

{% highlight powershell %}
Get-PSDrive -PSProvider FileSystem  
{% endhighlight %}

---  

## 💻 16. Check Memory Usage  

### 🐂 GNU  

{% highlight bash %}
free -h  
{% endhighlight %}

### ✴️ PowerShell  

{% highlight powershell %}
Get-CimInstance Win32_OperatingSystem | Select-Object TotalVisibleMemorySize,FreePhysicalMemory  
{% endhighlight %}

---  

## 💻 17. Display Environment Variables  

### 🐂 GNU  

{% highlight bash %}
printenv  
{% endhighlight %}

### ✴️ PowerShell  

{% highlight powershell %}
Get-ChildItem Env:  
{% endhighlight %}

---  

## 💻 18. Rename File/Directory  

### 🐂 GNU  

{% highlight bash %}
mv oldname newname  
{% endhighlight %}

### ✴️ PowerShell  

{% highlight powershell %}
Rename-Item -Path oldname -NewName newname  
{% endhighlight %}

---  

## 💻 19. Run Command as Administrator/Root  

### 🐂 GNU  

{% highlight bash %}
sudo command  
{% endhighlight %}

### ✴️ PowerShell (run shell as admin)  

{% highlight powershell %}
Start-Process powershell -Verb runAs  
{% endhighlight %}

---  

## 💻 20. Check Network/Interfaces  

### 🐂 GNU  

{% highlight bash %}
ip addr show  
{% endhighlight %}

### ✴️ PowerShell  

{% highlight powershell %}
Get-NetIPAddress  
{% endhighlight %}

---  

## 💻 21. Create an Environment Variable  
> Example for [Terlang](https://github.com/terroo/terlang): `C:\Program Files\Terlang\bin` (Windows) and `${HOME}/.local/terlang/bin/` (GNU)  

### 🐂 GNU  
{% highlight bash %}
export PATH="${PATH}:${HOME}/.local/terlang/bin/"  
{% endhighlight %}

### ✴️ PowerShell  
{% highlight powershell %}
[System.Environment]::SetEnvironmentVariable("Path", $env:Path + ";C:\Program Files\Terlang\bin", [System.EnvironmentVariableTarget]::Machine)  
{% endhighlight %}

---  

## 💻 22. Display Last Lines of a File (tail)  

### 🐂 GNU  

{% highlight bash %}
tail -n 20 file.log  
{% endhighlight %}

### ✴️ PowerShell  

{% highlight powershell %}
Get-Content file.log -Tail 20  
{% endhighlight %}

---  

## 💻 23. Monitor Processes in Real-Time (top)  

### 🐂 GNU  

{% highlight bash %}
top  
{% endhighlight %}

### ✴️ PowerShell  

{% highlight powershell %}
Get-Process | Sort-Object CPU -Descending | Select-Object -First 10  
{% endhighlight %}
> *(not real-time, but shows a snapshot of top CPU-consuming processes)*  

---  

## 💻 24. Find and Kill a Process by Name  

### 🐂 GNU  

{% highlight bash %}
pkill -f process  
{% endhighlight %}

### ✴️ PowerShell  

{% highlight powershell %}
Get-Process -Name process | Stop-Process -Force  
{% endhighlight %}

---  

## 💻 25. Monitor File Changes (tail -f)  

### 🐂 GNU  

{% highlight bash %}
tail -f file.log  
{% endhighlight %}

### ✴️ PowerShell  

{% highlight powershell %}
Get-Content file.log -Wait  
{% endhighlight %}


<!-- RECTANGLE LARGE -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Informat -->
<ins class="adsbygoogle"
style="display:block"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="2327980059"
data-ad-format="auto"
data-full-width-responsive="true"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---  

## 💻 26. Compress Files (tar gzip)  

### 🐂 GNU  

{% highlight bash %}
tar -czvf archive.tar.gz folder/  
{% endhighlight %}

### ✴️ PowerShell  

{% highlight powershell %}
Compress-Archive -Path folder\* -DestinationPath archive.zip  
{% endhighlight %}

---  

## 💻 27. Extract Zip File  

### 🐂 GNU  

{% highlight bash %}
unzip archive.zip  
{% endhighlight %}

### ✴️ PowerShell  

{% highlight powershell %}
Expand-Archive -Path archive.zip -DestinationPath destination\  
{% endhighlight %}

---  

## 💻 28. View Specific Environment Variables  

### 🐂 GNU  

{% highlight bash %}
echo $VARIABLE  
{% endhighlight %}

### ✴️ PowerShell  

{% highlight powershell %}
$env:VARIABLE  
{% endhighlight %}

---  

## 💻 29. Set Environment Variable for Current Session  

### 🐂 GNU  

{% highlight bash %}
export VARIABLE=value  
{% endhighlight %}

### ✴️ PowerShell  

{% highlight powershell %}
$env:VARIABLE="value"  
{% endhighlight %}

---  

## 💻 30. Display System Information (kernel, OS)  

### 🐂 GNU  

{% highlight bash %}
uname -a  
{% endhighlight %}

### ✴️ PowerShell  

{% highlight powershell %}
Get-CimInstance Win32_OperatingSystem | Select-Object Caption, Version, OSArchitecture  
{% endhighlight %}

---  

## 💻 31. Check Current Date and Time  

### 🐂 GNU  

{% highlight bash %}
date  
{% endhighlight %}

### ✴️ PowerShell  

{% highlight powershell %}
Get-Date  
{% endhighlight %}

---  

## 💻 32. Show Logged-In Users  

### 🐂 GNU  

{% highlight bash %}
who  
{% endhighlight %}

### ✴️ PowerShell  

{% highlight powershell %}
query user  
{% endhighlight %}

---  

## 💻 33. Check Open TCP Ports and Associated Processes  

### 🐂 GNU  

{% highlight bash %}
sudo netstat -tulpn  
{% endhighlight %}

### ✴️ PowerShell  

{% highlight powershell %}
Get-NetTCPConnection | Select-Object LocalAddress,LocalPort,OwningProcess  
{% endhighlight %}

---  

## 💻 34. Search for Files by Name  

### 🐂 GNU  

{% highlight bash %}
find /path -name "file.txt"  
{% endhighlight %}

### ✴️ PowerShell  

{% highlight powershell %}
Get-ChildItem -Path C:\path -Recurse -Filter "file.txt"  
{% endhighlight %}

---  

## 💻 35. Schedule a Task (cron / Task Scheduler)  

### 🐂 GNU  

{% highlight bash %}
crontab -e  
{% endhighlight %}

### ✴️ PowerShell  

{% highlight powershell %}
# Simple example to create a scheduled task via PowerShell  
$action = New-ScheduledTaskAction -Execute "notepad.exe"  
$trigger = New-ScheduledTaskTrigger -At 9am -Daily  
Register-ScheduledTask -TaskName "OpenNotepad" -Action $action -Trigger $trigger  
{% endhighlight %}

---  

## 💻 36. Clear Screen  

### 🐂 GNU  

{% highlight bash %}
clear  
{% endhighlight %}

### ✴️ PowerShell  

{% highlight powershell %}
Clear-Host  
{% endhighlight %}

---  

## 💻 37. Show System Variables (with name and value)  

### 🐂 GNU  

{% highlight bash %}
env  
{% endhighlight %}

### ✴️ PowerShell  

{% highlight powershell %}
Get-ChildItem Env:  
{% endhighlight %}

---  

## 💻 38. Compare Files Line by Line  

### 🐂 GNU  

{% highlight bash %}
diff file1 file2  
{% endhighlight %}

### ✴️ PowerShell  

{% highlight powershell %}
Compare-Object (Get-Content file1) (Get-Content file2)  
{% endhighlight %}

---  

## 💻 39. Run Local Script (bash / PowerShell)  

### 🐂 GNU  

{% highlight bash %}
./script.sh  
{% endhighlight %}

### ✴️ PowerShell  

{% highlight powershell %}
.\script.ps1  
{% endhighlight %}

---  

## 💻 40. Stop Command Execution (Ctrl + C)  

### 🐂 GNU  

{% highlight bash %}
Ctrl + C  
{% endhighlight %}

### ✴️ PowerShell  

{% highlight powershell %}
Ctrl + C  
{% endhighlight %}

---  

## 💻 41. Get Command History for Current Session  

### 🐂 GNU  

{% highlight bash %}
history  
{% endhighlight %}

### ✴️ PowerShell  

{% highlight powershell %}
Get-History  
{% endhighlight %}

---  

## 💻 42. Get File with Command History  

### 🐂 GNU  

{% highlight bash %}
cat ~/.bash_history  
{% endhighlight %}

### ✴️ PowerShell  

{% highlight powershell %}
Get-Content (Get-PSReadlineOption).HistorySavePath  
{% endhighlight %}

---  

## 💻 43. Search Text in Command History  

### 🐂 GNU  

{% highlight bash %}
history | grep term  
{% endhighlight %}

### ✴️ PowerShell  

{% highlight powershell %}
Get-History | Where-Object CommandLine -Match "term"  
{% endhighlight %}

---  

## 💻 44. Display Variables Defined in Current Session  

### 🐂 GNU  

{% highlight bash %}
set  
{% endhighlight %}

### ✴️ PowerShell  

{% highlight powershell %}
Get-Variable  
{% endhighlight %}

---  

## 💻 45. Define Local Variable (shell/session)  

### 🐂 GNU  

{% highlight bash %}
VARIABLE=value  
{% endhighlight %}

### ✴️ PowerShell  

{% highlight powershell %}
$VARIABLE = "value"  
{% endhighlight %}

---  

## 💻 46. Limit Command Output (pager)  

### 🐂 GNU  

{% highlight bash %}
command | less  
{% endhighlight %}

### ✴️ PowerShell  

{% highlight powershell %}
command | Out-Host -Paging  
{% endhighlight %}

---  

## 💻 47. Define Alias (command shortcut)  

### 🐂 GNU  

{% highlight bash %}
alias ll='ls -la'  
{% endhighlight %}

### ✴️ PowerShell  

{% highlight powershell %}
Set-Alias ll Get-ChildItem  
{% endhighlight %}

---  

## 💻 48. Remove Alias  

### 🐂 GNU  

{% highlight bash %}
unalias ll  
{% endhighlight %}

### ✴️ PowerShell  

{% highlight powershell %}
Remove-Item Alias:ll  
{% endhighlight %}

---  

## 💻 49. Show CPU Information  

### 🐂 GNU  

{% highlight bash %}
lscpu  
{% endhighlight %}

### ✴️ PowerShell  

{% highlight powershell %}
Get-CimInstance Win32_Processor | Select-Object Name,NumberOfCores,NumberOfLogicalProcessors  
{% endhighlight %}

---  

## 💻 50. Open Text Editor in Terminal  

### 🐂 GNU  

{% highlight bash %}
vim file.txt  
{% endhighlight %}

### ✴️ PowerShell  

{% highlight powershell %}
notepad file.txt  
{% endhighlight %}

---  

### 🍖 Bonus:  
Download a File:  
+ GNU:  
{% highlight bash %}
wget https://url.com/file.zip  
# Or: wget https://url.com/file.zip -O newname.zip  
{% endhighlight %}

+ PowerShell:  
{% highlight powershell %}
Invoke-WebRequest -Uri "https://url.com/file.zip" -OutFile "file.zip"  
{% endhighlight %}

## 👓 See Also:  
### 🔗 [7 PowerShell Usage Examples](https://terminalroot.com/7-powershell-usage-examples/)  
### 🔗 [Discover 7 GNU Tools That Power the Command Line](https://terminalroot.com/meet-7-gnu-tools-that-are-the-power-of-the-command-line/)  
### 🔗 [10 Tips for GNU GCC Flags and Parameters](https://terminalroot.com/10-flags-and-parameters-tips-for-gnu-gcc/)  
### 🔗 [Customize Your PowerShell Like a Pro](https://terminalroot.com/customize-your-powershell-like-a-pro/)  

