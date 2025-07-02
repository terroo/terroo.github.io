---
layout: post
title: "Create Beautiful Terminal Interfaces with This Go Library"
date: 2025-07-02 20:33:57
image: '/assets/img/go/bubbles-go.jpg'
description: "🫧 Your TUI experience will reach another dimension!"
tags:
- go
- cli
- tui
- terminal
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---  

One of the things that has always fascinated me is terminal utilities, whether in [CLI](https://terminalroot.com/tags#cli) mode or [TUI](https://terminalroot.com/tags#tui). It’s no coincidence this blog has its name 😃.  

And one of the coolest libraries out there is **Charmbracelet Bubbles**.  

I’ve been testing it for a few years, but this year I decided to actually learn it. Even though I do a lot with [C++](https://terminalroot.com/tags#cpp), Bubbles is for [Go](https://terminalroot.com/tags#go), and I still need to mature my Golang skills. That’s one of the reasons I created this [series](https://terminalroot.com.br/tags#series-go) on the blog—I’ll be using it frequently for quick references! 😎  

**Bubbles** is a collection of TUI components that makes building terminal interfaces easier with reactive logic and an attractive visual design.  

It includes:  

* Spinners (activity indicators)  
* Text input and textarea  
* Progress bar  
* Paginator  
* Viewport (content scrolling)  
* Filterable/paginated lists  
* File picker  
* Timer / Stopwatch  
* Mini help  
* Keybindings management  


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

## Usage  
To see how amazing it really is, let’s compile this **Textarea** example with **Bubbles**:  

### 01. Create a basic project and initialize a module  
{% highlight bash %}
mkdir textarea  
cd textarea  
go mod init textarea  
go get github.com/charmbracelet/bubbles/textarea  
{% endhighlight %}

Now, still inside your project, create a file (e.g., `main.go`) and paste the following content:  

{% highlight go %}
package main  

// A simple program demonstrating the textarea component from the Bubbles  
// component library.  

import (  
	"fmt"  
	"log"  

	"github.com/charmbracelet/bubbles/textarea"  
	tea "github.com/charmbracelet/bubbletea"  
)  

func main() {  
	p := tea.NewProgram(initialModel())  

	if _, err := p.Run(); err != nil {  
		log.Fatal(err)  
	}  
}  

type errMsg error  

type model struct {  
	textarea textarea.Model  
	err      error  
}  

func initialModel() model {  
	ti := textarea.New()  
	ti.Placeholder = "Once upon a time..."  
	ti.Focus()  

	return model{  
		textarea: ti,  
		err:      nil,  
	}  
}  

func (m model) Init() tea.Cmd {  
	return textarea.Blink  
}  

func (m model) Update(msg tea.Msg) (tea.Model, tea.Cmd) {  
	var cmds []tea.Cmd  
	var cmd tea.Cmd  

	switch msg := msg.(type) {  
	case tea.KeyMsg:  
		switch msg.Type {  
		case tea.KeyEsc:  
			if m.textarea.Focused() {  
				m.textarea.Blur()  
			}  
		case tea.KeyCtrlC:  
			return m, tea.Quit  
		default:  
			if !m.textarea.Focused() {  
				cmd = m.textarea.Focus()  
				cmds = append(cmds, cmd)  
			}  
		}  

	// We handle errors just like any other message  
	case errMsg:  
		m.err = msg  
		return m, nil  
	}  

	m.textarea, cmd = m.textarea.Update(msg)  
	cmds = append(cmds, cmd)  
	return m, tea.Batch(cmds...)  
}  

func (m model) View() string {  
	return fmt.Sprintf(  
		"Tell me a story.\n\n%s\n\n%s",  
		m.textarea.View(),  
		"(ctrl+c to quit)",  
	) + "\n\n"  
}  
{% endhighlight %}

Compile and run:  
{% highlight bash %}
go build main.go  
./main  
{% endhighlight %}

The output will be similar to the GIF below. Try typing something—pressing *[enter]* creates a new line.  

![Textarea Charmbracelet Bubbles](/assets/img/go/bubbles-go.gif)  

Amazing, right?  

> Go modules are usually created in a directory under your user’s home. Some files have system permissions, so to remove the directory, run:  
> `sudo rm -rf ~/go/`  

---  

Bubbles uses the Elm architecture: `model`, `init`, `update`, `view`, and provides ready-to-use components. You just need to integrate them into the [Bubble Tea](https://github.com/charmbracelet/bubbletea) model. The example we saw was taken from [here](https://github.com/charmbracelet/bubbletea/blob/main/examples/textarea/main.go).  

For more info, visit: <https://github.com/charmbracelet/bubbles>.  

