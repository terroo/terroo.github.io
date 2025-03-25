---
layout: post
title: "How to Install and Use LaTeX"
date: 2025-03-25 17:28:12
image: '/assets/img/tips/latex.jpg'
description: "🚀 Procedure for Ubuntu and Windows."
tags:
- latex
- tips
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

[LaTeX](https://latex-project.org/) is a high-quality document preparation system, especially used for scientific, technical and mathematical texts. It allows the creation of documents with precise formatting, complex equations, automatic bibliographic references and professional structuring.

LaTeX is an abbreviation of **La**mport **TeX**) was developed in the 1980s by [Leslie Lamport](https://www.youtube.com/watch?v=tsSDvflzJbc). When writing, the writer uses plain text, rather than the *formatted text* found in [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG) word processors such as [Microsoft Word](https://www.microsoft.com/en-us/microsoft-365/word), [LibreOffice](https://pt-br.libreoffice.org/baixe-ja/libreoffice-novo/) Writer, and Apple Pages.

The writer uses markup *tagging* conventions to: define the overall structure of the document (such as an article, [book](https://terminalroot.com/tags#books), or letter), to format text throughout a document (such as **bold** and *italics*), and to add citations and cross-references.

A **TeX** typesetting system, such as *TeX Live* or *MiKTeX*, is used to produce an output article (electronic publication such as *PDF* or `DVI`) suitable for printing or digital distribution. It is also used for the production of personal letters, articles and books on various subjects.

Within the typesetting system, its name is stylized as LaTeX. Currently in the version called: `LaTeX 2e`.


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

## Installation

In [Ubuntu](https://terminalroot.com/tags#ubuntu) install **TeX Live** using APT:
{% highlight bash %}
sudo apt install texlive-latex-base
{% endhighlight %}

If you want a complete installation with fonts and extras, run:
{% highlight bash %}
sudo apt install texlive-latex-base texlive-fonts-recommended \
texlive-fonts-extra texlive-latex-extra
{% endhighlight %}
> This will install almost 1GB of data, so it's not that interesting for beginners.

You can also choose to install the editor **TeXstudio** (graphical editor for LaTeX):
{% highlight bash %}
sudo apt install texstudio
{% endhighlight %}
> For more information, visit the address: <https://www.texstudio.org/>.

On [Windows](https://terminalroot.com/tags#windows):
- Download and install **MiKTeX** ([miktex.org](https://miktex.org/)) or **TeX Live** ([tug.org/texlive](https://www.tug.org/texlive/)).
- Or **TeXstudio** ([texstudio.org](https://www.texstudio.org/)) or **Overleaf** (online version).

You can also use [WinGet](https://winget.run/pkg/TeXstudio/TeXstudio) in [PowerShell](https://terminalroot.com/tags#powershell):
{% highlight powershell %}
winget install -e --id TeXstudio.TeXstudio
{% endhighlight %}


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

## Basic example of using LaTeX
Create a file with the extension `.tex`, for example: `file.tex` and insert the content below:

{% highlight latex %}
\documentclass{article}
\usepackage[utf8]{inputenc}

\title{My First Document}
\author{Your Name}
\date{\today}

\begin{document}

\maketitle

\section{Introduction}
Hello, world! This is my first document in LaTeX.

\section{Mathematics}
The quadratic formula is:
\[ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} \]

\end{document}
{% endhighlight %}

To compile, just use the `pdflatex` command:
{% highlight bash %}
pdflatex file.tex
{% endhighlight %}
> It may ask you some questions and at the end there will be a question mark: `?`, just press **ENTER** (several times) and it will finish creating the document anyway.

Then just open the `file.pdf` in your PDF viewer by clicking on it or running it in the terminal:
{% highlight bash %}
xdg-open file.pdf
{% endhighlight %}
> This is in Ubuntu and similar.

It will also generate intermediate files such as: `file.aux` and `file.log`, just remove them if you want, next time `pdflatex` will overwrite them anyway.
{% highlight bash %}
rm file.aux file.log
{% endhighlight %}

If you are in TeXstudio, press the **Compile** button (usually a green arrow in TeXstudio):
- LaTeX will generate a PDF file with the result.

Differences between compilers:
- **PDFLaTeX**: Generates PDF directly (recommended for simple texts).
- **LaTeX + DVI**: Generates an intermediate file (.dvi) before the PDF.
- **BibTeX**: Used to manage bibliographic references.

---

## How to Use LaTeX in Everyday Life?
- **Equations:** Use `$...$` (inline) or `\[...\]` (highlight).
- **Tables:** Use environments such as `tabular`.
- **Images:** Add with `\includegraphics` (package `graphicx`).
- **References:** Use `\cite{key}` and BibTeX for bibliographies.

---

## Useful links
+ <https://latex-project.org/>
+ <https://pt.wikipedia.org/wiki/LaTeX>
+ <https://www.overleaf.com/>
+ <https://en.wikibooks.org/wiki/LaTeX>

