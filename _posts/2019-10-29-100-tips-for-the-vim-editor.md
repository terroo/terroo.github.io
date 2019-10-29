---
layout: post
title: "100 Tips for the VIM Editor"
date: 2019-10-29 14:57:03
image: '/assets/img/vim/100-tips-vim.png'
description: 'To speak of Vim is to speak of MULTIPLE FACILITIES with simple keystrokes and useful commands.'
featured-img: ../vim/100-tips-vim.png
tags:
- vim
- vimscript
- editor
- tips
---

![100 Tips for the VIM Editor](/assets/img/vim/100-tips-vim.png)

To speak of the [Vim](https://www.udemy.com/course/curso-de-vim-moderno-e-vimscript/) editor is to speak of MULTIPLE FACILITIES with simple keystrokes and useful commands. This Cheat Sheet is one of those to bookmark and consult whenever necessary.

<!-- RETANGULO LARGO -->
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

## Navigation

| Keys | Description |
|---|---|
| **`h`** | Use the h command to navigate to the left side of the Vim console. This is analogous to the left arrow on your keyboard. |
| **`l`** | Commands help you navigate right and replace the right arrow key. |
| **`k`** | Use the lowercase k command to move up. Similar to the up arrow key. |
| **`j`** | The j command takes you down and is a substitute for the down arrow key. |
| **`H`** | This command takes the cursor in the upper region of the screen. |
| **`M`** | Will place the cursor in the middle of the Vim screen. |
| **`L`** | The capital letter places the cursor at the bottom of the screen. |
| **`0`**  or **[HOME]** | Entering 0 or the [HOME] button will take you to the beginning of the line. |
| **`^`** | This is one of the most commonly used Vim commands to get the first nonblank character of a line. |
| **`$`** | This command takes the cursor at the end of the current line. |
| **`b`** | The lowercase b command returns tokens. |
| **`w`** | This command helps you to advance through tokens. |
| **`B`** | The capital variant of b allows you to return by words. |
| **`W`** | This command allows you to advance by words. |
| **`ctrl+u`** | This Vim command is basically a Page Up command. However, it moves the screen in half and keeps the current cursor position. |
| **`ctrl+d`** | The Page Down variant of the above command works the same way. |
| **`G`** | Prefix G with a number to jump directly to a specific line number.Suppose that if you have line numbering enabled and are writing a shell script, you can go to line 10 simply by typing 10G. |
| **`#`** | Given, # is the number of a specific line, entering this command will take you directly to that line. It is one of Vim's most commonly used commands to jump from one line to another. |
| **`“`** | This command (two ticks back) takes you where you were. |
| **`)`** | You can access at the beginning of the following sentence with this command. |
| **`(`** | Go to at the beginning of the previous sentence. |
| **`}`** | Used to go to the beginning of the next block of text. |
| **`{`** | Get the cursor at the beginning of the previous text block. Vim Commands for Editing Text |

<!-- RETANGULO LARGO 2 -->
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

***

## Command Mode

| Keys | Description |
|---|---|
| **`i`** | Pressing i on the console takes you to insert mode. Now you can start typing your texts in Vim. The text you type will appear in front of the cursor key. |
| **`a`** | There are other commonly used Vim commands you can use to enter text. Text will be appended right after the cursor. |
| **`I`** | Do you want to place your text at the beginning of the current line? The l command allows you to enter text directly at the desired location. |
| **`A`** | This is one of my favorite Vim commands for adding text at the end of my current line. It also fits the Vim commands used to enter text. |
| **`o`** | Pressing the lower case letter o creates a new line just after the current line you are on. |
| **`O`** | The uppercase variant creates the new line before the current line. |
| **`gf`** | You can use this little command to open your files under the cursor. |
| **`gi`** | One of my favorite Vim commands, gi restarts insert mode at the last insertion point you used. |
| **`wq`** | Entering long text strings does not matter if you cannot save them for future use. Enter the wq command in command mode to save your file and exit Vim. |
| **`q!`** | Often, you find yourself in a position where you are not satisfied with the text you typed and would like to close the editor without saving its contents. By typing q! In command mode, you can do just that. if by the console |
| **`yy`** | The yy command lets you copy an entire line. This is something you often use during your time with Vim. |
| **`yw`** | This is one of the most widely used Vim commands for copying a word in the editor. |
| **`y$`** | One of my all-time favorite Vim commands offers users the ability to copy text from the current cursor position to the end of a line. |
| **`v`** | The v command can be used to highlight a single character at a time in combination with the arrow keys (arrows / hjkl). |
|→ Almost the same as the previous one, but instead of a word, this command will highlight an entire line.|→ You can paste the contents of your clipboard into the unnamed registry with this handy little command. |
| **`d`** | This is one of the most commonly used Vim commands to delete highlighted texts. |
| **`dd`** | Do you want to delete an entire line with a single command from Vim? The dd command is created especially for this purpose. |
| **`dw`** | You can delete a single word quickly with the dw command. |
| **`D`** | One of the most powerful Vim commands of all time, the D command deletes everything from the current cursor location to the end of the line. |
| **`d0`** | This command is used to delete everything from the current cursor position to the beginning of the line. |
| **`dgg`** | You can use this command to delete everything from your current cursor position to the beginning of the file. |
| **`dG`** | This command erases everything from your current cursor position to the end of the file. |
| **`x`** | Use the x command whenever you need to delete a single character. |
| **`u`** | The u command is among the Vim commands most widely used by many to undo the last operation. Combining with a postfix, users can undo several actions. Then you undo the last number of actions. |
| **`ctrl+r`** | Use the command above to redo the last undo operation. |
| **`.`** | The dot (.) Command is one of those useful Vim commands that significantly reduces your workload by repeating the last action whenever you need this functionality. |
| **`cc`** | You can use the cc command to change lines by clearing and entering insert mode at the same time. The cursor is placed at the current level of indentation. Vim's useful commands for replacing text |

***

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

## Visual Mode

| Keys | Description |
|---|---|
| **`r`** | The r command is a very useful tool for changing a single character. Follow it with [character] and it will change the current character under the cursor with [character]. |
| **`R`** | Uppercase OR opens the input mode, but instead of entering text, you can replace it with this command. |
| **`~`** | The tilda (~) command is very useful when you need to change the box of one character in your document. Follow it with a number to invert as many characters. |
| **`t[caractere]`** | Type t [character] to select up to, but not including, the next [character] on a specific line. |
| **`f[caractere]`** | Press f [character] to select up to and including the next [character] in a line. |
| **`i[caractere]`** | Do you want to select everything between parentheses or another unique character? Type i [character] to select everything between two consecutive [characters]. |
| **`a[caractere]`** | This command is identical to the previous one, but includes the [character] at both ends of the text. Commands I came most commonly used to search in a document |

***

## Search and Replacement

| Keys | Description |
|---|---|
| **`/`** | The slash command is the most commonly used command to search large text files in Vim. Just type / and proceed with the text you want Vim to look for you and look at the bottom corner of the console. |
| **`/\c`** | The option, when directed to the search (/) command, allows users to search for case-sensitive text. Wise use of this command can save hours of hard work. |
| **`?[pattern]`** | This is one of Vim's most useful commands for searching previous texts for a given [pattern]. |
| **`n`** | The n command searches in the direction of your last search. Use this command if you know which direction the search item is in. |
| **`N`** | Almost identical to the above command, but searches in the opposite direction to your last search. |
| **`:%s/[pattern]/[replacement]/g`** | The above command uses regular expression to search for all occurrences of [pattern] and replaces it with [replacement] without prompting. |
| **`:%s/[pattern]/[replacement]/gc`** | Same as previous command, but prompts for confirmation before replacing each instance of [default] with [replacement]. |
| **`:s/[pattern]/[replacement]/g`** | Instead of replacing all instances of [default] in your file, this Vim command will only replace those [default] that are on the current line with [replacement]. |
| **`:bufdo /[pattern]`** | This is one of Vim's powerful commands that allows users to search for [pattern] in all currently opened buffers. This will increase your productivity and significantly shorten your search time. |
| **`:g/string/d`** | This is one of the useful Vim commands that will be useful whenever you want to delete all lines containing string from your document. Linux Command Tips Sheet for Working with Multiple Files in Vim |


<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

***

## Screen Manipulation and Editing

| Keys | Description |
|---|---|
| **`:sp [filename]`** | Use this command to create a new file and split the console screen horizontally to show the two different buffers. |
| **`:vsp [filename]`** | The functionality of this Vim command is essentially identical to the above command, but instead of splitting the console horizontally, it splits the screen vertically. |
| **`:bn`** | This Vim command will change its editor to the next buffer. It is among the few fundamental Vim commands without which you will not be able to work with multiple documents in Vim. |
| **`:bp`** | Identical to the previous command, but switches to the previous buffer instead of advancing. |
| **`:bd`** | Use this Vim command when closing a specific buffer. Save your data using the appropriate Vim commands. |
| **`:ls`** | This is one of the useful Vim commands that will present users with a list of all open buffers. |
| **`ctrl+ws`** | If you want to split Vim windows horizontally, this is the command you are looking for. |
| **`ctrl+wv`** | Instead of splitting windows horizontally, this Vim command will split it vertically. |
| **`ctrl+ww`** | Use this command to switch between multiple windows directly from command mode. |
| **`ctrl+wq`** | You can use this useful Vim command to exit a specific window. |
| **`ctrl+wh`** | This command moves your cursor location to the left window. |
| **`ctrl+wl`** | Same as the previous command, but instead of moving the cursor to the left, this command will point to the right window. |
| **`ctrl+wj`** | Use this command whenever you want to move a window below the existing window. |
| **`ctrl+wk`** | Same as above, but takes the cursor to the window above the current one. Vim's useful commands when working with multiple tabs |
| **`:tabnew`** | You can use the: tabnew command to create a new tab and work with another document without leaving the current file. |
| **`gt`** | The gt command will show you the next tab you open. |
| **`:tabfirst`** | The above command shows the first tab you opened in a specific session. |
| **`:tablast`** | Same as the previous command, but instead of showing the first tab, it will display the last tab. |
| **`tabm n(position)`** | This powerful Vim command will be useful whenever you feel the need to rearrange your existing tabs. |
| **`tabdo %s/foo/bar/g`** | You can use the above command whenever you want to execute a command on all open tabs at the same time. |
| **`:tab ball`** | This Vim command is one of my favorite Vim commands and puts each open file in one [CODE]:tab ball`**  . |
| **`:new abc.txt`** | This is one of Vim's commands that allows you to open a new file called abc.txt in a new window without leaving the current document. |
| **`:w`** | Pressing this command Vim in command mode saves the current document, but there is no existing session. |
| **`:q`** | This command exits the current session without saving your changes. Note that you will see error E37 if you have unsaved changes to your document. In such scenarios, you need to override this command and use q! instead. |
| **`:help [command]`** | The help command performs a search operation on the command you entered and displays relevant information about them directly in the console. |
| **`:e [file]`** | This command will open a file named [file] and create a new one if it no longer exists in your file system. |
| **`:w [filename]`** | Use this command to save the existing document directly to a new file named [filename]. |
| **`:stop`** | Writing this command in command mode will suspend your current Vim session. You can also do this by pressing ctrl + z at the same time. |
| **`:browse e`** | Use this command whenever you want to call the graphics file explorer from your Vim console. |
| **`:%!fmt`** | Writing this command will align each line of your current file. |
| **`!}fmt`** | Use it whenever you need to align all lines at the current position of your cursor. |
| **`:set autoindent`** | This is one of the most commonly used Vim commands that you will use during your time in Vim. It sets autoindent for your current session. Final thoughts |

Meet our [Vim Moderno and Vimscript Course at Udemy](https://www.udemy.com/course/curso-de-vim-moderno-e-vimscript/). Although the classes are in the Portuguese language, Udemy offers automatic translation if you are interested. Link:

## <https://www.udemy.com/course/curso-de-vim-moderno-e-vimscript/>

Thanks for reading!
