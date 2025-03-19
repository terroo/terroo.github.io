---
layout: post
title: "7 PowerShell Usage Examples"
date: 2025-03-19 14:30:34
image: '/assets/img/windows/powershell.jpg'
description: "🚀 A cheat sheet style for quick information."
tags:
- powershell
- windows
- csharp
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

[PowerShell](https://terminalroot.com/tags#powershell) is a task-based [command-line](https://terminalroot.com/tags#shell) and [scripting language](https://terminalroot.com.br/mylang) developed in [.NET](https://terminalroot.com/tags#csharp). Initially, it was just a Windows component.

It was written with [C#](https://terminalroot.com/tags#csharp) and its source code is [available on GitHub](https://github.com/PowerShell/PowerShell)

---

## Installation
PowerShell is already available for [Windows](https://terminalroot.com/tags#windows) 10 and 11, so you don't need to install anything. But, if you are on another [operating system](https://terminalroot.com/tags#os), such as [Ubuntu](https://terminalroot.com/tags#ubuntu), for example, you can use [snap]():

{% highlight bash %}
sudo snap install powershell --classic
{% endhighlight %}

After installing, just confirm the installation by checking the version, e.g.:
{% highlight bash %}
pwsh --version
PowerShell 7.5.0
{% endhighlight %}

Below are some usage examples.


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

## 01. Creating a [Hello, World!](https://terminalroot.com/hello-world-in-25-programming-languages-proposal-docs-and-links/)
Create a file with the extension `.ps1`, for example: `main.ps1` and insert the content below:
{% highlight powershell %}
# Basic program with PowerShell
Write-Host 'Hello, World!'
{% endhighlight %}
> Comments can be made using the *tralha*: `#`

Save and run with the command:
{% highlight bash %}
pwsh main.ps1
{% endhighlight %}
> The output should be: **Hello, World!**.

---

## 02. Downloading a file from the Web:
Example: downloading the file [81by.txt](http://0x0.st/81by.txt) and saving it with the name: `logo-ps.png`.
> It is always necessary to direct to a local file with `-OutFile`.

{% highlight powershell %}
Invoke-WebRequest -Uri "http://0x0.st/81by.txt" -OutFile "logo-ps.png"
{% endhighlight %}

---

## 03. Create and use variables and concatenate:
You need the *dollar sign* in [PHP](https://terminalroot.com/tags#php) and [Perl](https://terminalroot.com/tags#perl) style.
{% highlight powershell %}
$url = "http://0x0.st/81by.txt"
$file = "logo-ps.png"
Write-Host "The url is: " + $url + " and the file: " $file
{% endhighlight %}
> The concatenation operator: `+` (plus) is optional, it could also be:
{% highlight powershell %}
Write-Host "The url is: " $url " and the file: " $file
{% endhighlight %}

---

## 04. Using `if else`
Check if the file was saved successfully:

{% highlight powershell %}
$url = "http://0x0.st/81by.txt"
$file = "logo-ps.png"

Write-Host "The url is: " + $url + " and the file: " $file
Invoke-WebRequest -Uri $url -OutFile $file

if(Test-Path $file 2>$null && (Get-Content $file 2>$null)){
    Write-Host "File was downloaded successfully!"
}else{
    Write-Host "File download failed or file is empty."
}
{% endhighlight %}

Also note the use of:
+ `&&` logical operator
+ `2>$url` similar to `2>/dev/null`
+ In addition to the declarations: `Test-Path` and `Get-Content`

---

## 05. Creating functions
Adding functions to optimize routines. Everything we did before, but now inside a function that we can change the URL and the file name, always needing to rewrite whenever we want to reuse it for other purposes.

{% highlight powershell %}
$url = "http://0x0.st/81by.txt"
$file = "logo-ps.png"

Function SaveFile {
    param($url, $file)
        Write-Host "The url is: " + $url + " and the file: " $file
        Invoke-WebRequest -Uri $url -OutFile $file

        if(Test-Path $file 2>$null && (Get-Content $file 2>$null)){
            Write-Host "File was downloaded successfully!"
        }else{
            Write-Host "Failed to download file or file is empty."
        }
}

SaveFile $url $file
{% endhighlight %}

Some details in this code:
+ The function parameters need to use the function: `param()` that is inside the curly braces block
+ In this specific case we need to call [Bash](https://terminalroot.com/tags#bash) style parameters side-by-side the function name: `SaveFile $1 $2` and not: `SaveFile($1, $2)`, but in some other cases, like *integers* we can use the style of most programming languages, for example:
{% highlight powershell %}
Function IncNumber {
    param($x)
        ++$x
        Write-Host $x
}

IncNumber(2) # 3
{% endhighlight %}

In this other example, also note the use of the `++` operator on the left side to increment.


<!-- RECTANGLE 2 - OnParagragraph -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:block; text-align:center;"
data-ad-layout="in-article"
data-ad-format="fluid"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="8549252987"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

---

## 06. Getting content from a file
In this case, we will see the content of the file itself: `main.ps1`, command style [cat](https://terminalroot.com/meet-the-kat-command/):
> We comment out the function call: `SaveFile` and add another line with:
{% highlight powershell %}
Get-Content "main.ps1"
{% endhighlight %}

The output will be:
{% highlight powershell %}
$url = "http://0x0.st/81by.txt"
$file = "logo-ps.png"

Function SaveFile {
    param($url, $file)
        Write-Host "The url is: " + $url + " and the file: " $file
        Invoke-WebRequest -Uri $url -OutFile $file

        if(Test-Path $file 2>$null && (Get-Content $file 2>$null)){
            Write-Host "File was downloaded successfully!"
        }else{
            Write-Host "Failed to download file or file is empty."
        }
}

#SaveFile $url $file
Get-Content "main.ps1"
{% endhighlight %}

---

## 07. Interacting with the user
Asking for confirmation to see if he really wants to see the file:
{% highlight powershell %}
$response = Read-Host "Do you want to view the file? (yes/no)"

if ($response -eq "yes" -or $response -eq "y") {
    Get-Content "main.ps1"
} else {
    Write-Host "You chose not to display the file."
}
{% endhighlight %}

Also note the use of the `-or` operator (equivalent to `||`) to determine whether the response is `yes` or `y`.

---

For more information [download this PDF](https://download.microsoft.com/download/2/1/2/2122f0b9-0ee6-4e6d-bfd6-f9dcd27c07f9/ws12_quickref_download_files/powershell_langref_v3.pdf) and access the links below:
+ <https://learn.microsoft.com/en-us/powershell/>
+ <https://github.com/2KU77B0N3S/NatMappingManager>
+ <https://learn.microsoft.com/en-us/powershell/scripting/learn/ps101/09-functions?view=powershell-7.5>

