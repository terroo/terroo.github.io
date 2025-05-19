---
layout: post
title: "15 Game Engines Made with CSharp"
date: 2025-05-19 18:51:53
image: '/assets/img/csharp/csharp-engines/csharp-engines.png'
description: "🎮 In addition to a comparison table, more bindings and engines that have CSharp as their scripting language."
tags:
- csharp
- gamedev
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

[C#](https://terminalroot.com/tags#csharp) is a popular language in [game development](https://terminalroot.com/tags#gamedev), widely used thanks to [Unity](https://terminalroot.com/top-100-cpp-game-engines#03-unity), but it is not limited to it.

In this article, I present <b>15 game engines developed with C#</b>, showing various alternatives for those who want to explore new options beyond the most well-known ones, as well as a comparison table, more bindings and engines that have C# as a scripting language.

---

## 01. [MonoGame](https://github.com/MonoGame/MonoGame)
![MonoGame](/assets/img/csharp/csharp-engines/01.png)

C# framework based on XNA. Focus on multiplatform.
**Main games:** *Stardew Valley*, *Fez*, *Axiom Verge*.

---

## 02. [SharpGDX](https://github.com/SharpGDX/SharpGDX)
![SharpGDX](/assets/img/csharp/csharp-engines/02.png)

C# port of libGDX. Incomplete and outdated project.
**Main games:** None known.

---

## 03. [MoonWorks](https://github.com/MoonsideGames/MoonWorks)
![MoonWorks](/assets/img/csharp/csharp-engines/03.png)

Modern game engine in C#, based on FNA, with functional design and focus on performance.

---

## 04. [ShapeEngine](https://github.com/DaveGreen-Games/ShapeEngine)
![ShapeEngine](/assets/img/csharp/csharp-engines/04.png)

2D C# engine for simple games with basic physics and UI support.
**Main games:** None known.

---

## 05. [OSU Framework](https://github.com/ppy/osu-framework)
![OSU](/assets/img/csharp/csharp-engines/05.png)

C# framework used to create the game *osu!lazer*. Advanced UI and animation support.
**Main games:** *osu!lazer*.

---

## 06. [FlatRedBall](https://github.com/vchelaru/FlatRedBall)
![FlatRedBall](/assets/img/csharp/csharp-engines/06.png)

2D C# engine with educational focus and integration with MonoGame.
**Main games:** *The Incredible Baron*, *Tiled Map Editor integrations*.

---

## 07. [FNA](https://github.com/FNA-XNA/FNA)
![FNA](/assets/img/csharp/csharp-engines/07.png)

Reimplementation of XNA in C#. High compatibility and stability for game porting.
**Main games:** *Celeste*, *Axiom Verge*, *FEZ* (ported).

---

## 08. [Murder](https://github.com/isadorasophia/murder)
![Murder](/assets/img/csharp/csharp-engines/08.png)

2D ECS game engine in C# with built-in editor. Focus on productivity.
**Main games:** Internal/experimental, no major releases yet.

---

## 09. [Prowl](https://github.com/ProwlEngine/Prowl)
![Prowl](/assets/img/csharp/csharp-engines/09.png)

Modern 3D engine in C#, still in development. Uses Vulkan via Veldrid.
**Main games:** None published yet.

---

## 10. [Stride](https://github.com/stride3d/stride)
![Stride](/assets/img/csharp/csharp-engines/10.png)

Full 3D engine in C#. Support for VR, PBR, C# scripting and robust editor.
**Main games:** *Children of the Galaxy*, independent projects.

---

## 11. [Duality](https://github.com/AdamsLair/duality)
![Duality](/assets/img/csharp/csharp-engines/11.png)

2D C# engine with modular editor and plugin system.
**Main games:** No notable commercials.

---

## 12. [RogueSharp](https://github.com/FaronBracy/RogueSharp)
![RogueSharp](/assets/img/csharp/csharp-engines/12.png)

C# library for creating roguelikes (maps, FOV, pathfinding). It is not a complete engine.
**Main games:** Used in prototypes and personal projects.

---

## 13. [SadConsole](https://github.com/Thraka/SadConsole)
![SadConsole](/assets/img/csharp/csharp-engines/13.png)

C# library for console/roguelike games. Based on ASCII grids and tiles.
**Main games:** None publicly known.

---

## 14. [StereoKit](https://github.com/StereoKit/StereoKit) (with C++)
![StereoKit](/assets/img/csharp/csharp-engines/14.png)

AR/VR framework in C# and C++. Support for OpenXR, HoloLens, Quest.
**Main games:** Used in XR experiences, not commercial games.

---

## 15. [NeoAxis](https://github.com/NeoAxis/NeoAxisEngine) (with C++)
![NeoAxis](/assets/img/csharp/csharp-engines/15.png)

3D C# + C++ engine with integrated editor, focused on visualizations and games.
**Main games:** None of great importance.

---

## Comparison Table

| Name              | Language | 2D | 3D | Editor Included | Active? | Known Games                            | Link                                                     |
| ----------------- | -------- | -- | -- | --------------- | ------- | -------------------------------------- | -------------------------------------------------------- |
| **MonoGame**      | C#       | ✔️ | ✖️ | ✖️              | ✔️      | *Stardew Valley*, *Fez*, *Axiom Verge* | [GitHub](https://github.com/MonoGame/MonoGame)           |
| **SharpGDX**      | C#       | ✔️ | ✔️ | ✖️              | ✖️      | None                                   | [GitHub](https://github.com/SharpGDX/SharpGDX)           |
| **MoonWorks**     | C#       | ✔️ | ✖️ | ✖️              | ✔️      | None                                   | [GitHub](https://github.com/MoonsideGames/MoonWorks)     |
| **ShapeEngine**   | C#       | ✔️ | ✖️ | Partial         | ✔️      | None                                   | [GitHub](https://github.com/DaveGreen-Games/ShapeEngine) |
| **osu!framework** | C#       | ✔️ | ✖️ | ✔️              | ✔️      | *osu!lazer*                            | [GitHub](https://github.com/ppy/osu-framework)           |
| **FlatRedBall**   | C#       | ✔️ | ✖️ | ✔️              | ✔️      | *The Incredible Baron*                 | [GitHub](https://github.com/vchelaru/FlatRedBall)        |
| **FNA**           | C#       | ✔️ | ✖️ | ✖️              | ✔️      | *Celeste*, *Axiom Verge*, *FEZ*        | [GitHub](https://github.com/FNA-XNA/FNA)                 |
| **Murder**        | C#       | ✔️ | ✖️ | ✔️              | ✔️      | None public                            | [GitHub](https://github.com/isadorasophia/murder)        |
| **Prowl**         | C#       | ✖️ | ✔️ | Partial         | ✔️      | None                                   | [GitHub](https://github.com/ProwlEngine/Prowl)           |
| **Stride**        | C#       | ✔️ | ✔️ | ✔️              | ✔️      | *Children of the Galaxy*               | [GitHub](https://github.com/stride3d/stride)             |
| **Duality**       | C#       | ✔️ | ✖️ | ✔️              | Partial | None                                   | [GitHub](https://github.com/AdamsLair/duality)           |
| **RogueSharp**    | C#       | ✔️ | ✖️ | ✖️              | ✔️      | None                                   | [GitHub](https://github.com/FaronBracy/RogueSharp)       |
| **SadConsole**    | C#       | ✔️ | ✖️ | Partial         | ✔️      | None                                   | [GitHub](https://github.com/Thraka/SadConsole)           |
| **StereoKit**     | C#/C++   | ✖️ | ✔️ | Partial         | ✔️      | XR demos                               | [GitHub](https://github.com/StereoKit/StereoKit)         |
| **NeoAxis**       | C#/C++   | ✔️ | ✔️ | ✔️              | ✔️      | None relevant                          | [GitHub](https://github.com/NeoAxis/NeoAxisEngine)       |

* "Editor Included" refers to a visual or scene editor.
* "Partial" means it includes some level of editor but not a full one.
* "Active?" refers to recent activity on GitHub (last few months).

---

## Libraries that have *bindings* for C#
> Or that have CSharp as their scripting language.

### 01. [SFML](https://terminalroot.com/tags#sfml)
[SFML.NET](https://www.sfml-dev.org/download/sfml.net/) is the official SFML binding for the .NET family of languages ​​(C#, VB.NET, C++/CLI, etc.).

It is built on top of the C, CSFML binding, to ensure maximum compatibility between platforms. The SFML.NET API is close to C++ One, but in the .NET style: Naming conventions are different, event handling uses native event support, etc.

Official address: <https://www.sfml-dev.org/download/sfml.net/>

---

### 02. [Raylib](https://terminalroot.com/tags#raylib)
There are several CSharp bindings for Raylib, among them:

+ [raylib-cs](https://github.com/raylib-cs/raylib-cs)
+ [Raylib-CsLo](https://github.com/NotNotTech/Raylib-CsLo)
+ [Raylib-CSharp-Vinculum](https://github.com/ZeroElectric/Raylib-CSharp-Vinculum)
+ [Raylib-CSharp](https://github.com/MrScautHD/Raylib-CSharp)

---

### 03. [SDL](https://terminalroot.com/tags#sdl)
[SDL](https://terminalroot.com/tags#sdl) also has bindings for CSharp, in two versions:

+ For **SDL2.0**: [SDL2-CS](https://github.com/flibitijibibo/SDL2-CS)
+ And for **SDL 3.0**: [SDL3-CS](https://github.com/flibitijibibo/SDL3-CS)

---

### 04. [Allegro](https://terminalroot.com/tags#allegro)
[AllegroDotNet](https://github.com/sub-c/AllegroDotNet) is a library for .*NET Standard 2.0* or *.NET 6+* for Allegro 5. Compatible with native AOT (.NET 8).

---

### 05. Engines that have CSharp for scripting
These are engines made with [C++](https://terminalroot.com/tags#cpp), but have CSharp as a scripting language for game development:

+ [UnrealSharp](https://github.com/UnrealSharp/UnrealSharp)
+ [Unity](https://terminalroot.com/top-100-cpp-game-engines/#03-unity)
+ [Godot C#](https://docs.godotengine.org/en/stable/tutorials/scripting/c_sharp/index.html)

---

## See also
### [Top 100 Game Engines C++](https://terminalroot.com/top-100-cpp-game-engines/)

