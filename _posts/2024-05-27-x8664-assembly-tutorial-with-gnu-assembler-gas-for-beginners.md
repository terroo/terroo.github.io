---
layout: post
title: "x86_64 Assembly Tutorial with GNU Assembler (GAS) for Beginners"
date: 2024-05-27 11:25:14
image: '/assets/img/assembly/gas.jpg'
description: "In addition to showing the basic differences in GAS and NASM."
tags:
- gnu
- assembly
---

![{{ page.title }}]({{ page.image }} '{{ page.description }}')

---

**GNU Assembler**, commonly known as **gas** or **as**, is the assembler developed by the [GNU Project](https://terminalroot.com/tags#gnu). 

It is the standard *back-end* of [GCC](https://terminalroot.com/tags#gcc). 

It is used to assemble the [GNU operating system](https://en.wikipedia.org/wiki/GNU) and the [Linux](https://terminalroot.com/tags#gnulinux) kernel, and various other software. 

It is part of the [GNU Binutils](https://www.gnu.org/software/binutils/) package.

GAS is cross-platform and can be run and mounted on many different computer architectures.

It is [free software](https://terminalroot.com/tags#freesoftware) released under the [GNU General Public License v3](https://www.gnu.org/licenses/gpl-3.0.html) .

The default extension is `.s` (ideally for identification), but you can use any extension as long as there is only GAS code within the file, examples: `.gas`, `.as` and `.S`.

---

## Initial concept of Registrars
Registers in assembly `x86_64` are used to store temporary data and perform arithmetic and logical operations. Are they:

### General Purpose Registers (64 bits)
+ **RAX (Accumulator Register)**: Used for arithmetic operations and function returns.
+ **RBX (Base Register)**: Can be used to access data in memory.
+ **RCX (Counter Register)**: Used as a counter in loops and repetition operations.
+ **RDX (Data Register)**: Used in arithmetic and I/O operations.
+ **RSI (Source Index)**: Used as a source pointer in string operations.
+ **RDI (Destination Index)**: Used as destination pointer in string operations.
+ **RBP (Base Pointer)**: Used to point to the base of a stack frame.
+ **RSP (Stack Pointer)**: Points to the top of the stack.
+ **R8-R15**: Additional general purpose registers.

### Segment Registers (16 bits)
+ **CS (Code Segment)**: Code segment.
+ **DS (Data Segment)**: Data segment.
+ **SS (Stack Segment)**: Stack segment.
+ **ES, FS, GS**: Additional segments used in specific data operations.

### Special Purpose Recorders
+ **RIP (Instruction Pointer)**: Points to the next instruction to be executed.
+ **RFLAGS (Flags Register)**: Contains status and control flags, such as carry, zero, sign, overflow, etc.

### General Purpose Registers (32 bits)
+ **EAX, EBX, ECX, EDX, ESI, EDI, EBP, ESP**: 32-bit versions of 64-bit registers.
+ **R8D-R15D**: 32-bit versions of registers R8-R15.

### General Purpose Registers (16 bits)
+ **AX, BX, CX, DX, SI, DI, BP, SP**: 16-bit versions of 64-bit registers.
+ **R8W-R15W**: 16-bit versions of registers R8-R15.

### General Purpose Registers (8 bits)
+ **AH, AL, BH, BL, CH, CL, DH, DL**: Subdivisions of 16-bit registers (AX, BX, CX, DX).
+ **R8B-R15B**: 8-bit versions of registers R8-R15.
+ **SPL, BPL, SIL, DIL**: 8-bit versions of SP, BP, SI, DI registers.

### Vector/SIMD Registers
+ **XMM0-XMM15**: Used for 128-bit SIMD (Single Instruction, Multiple Data) operations.
+ **YMM0-YMM15**: 256-bit versions of the XMM registers.
+ **ZMM0-ZMM31**: 512-bit versions of the XMM registers, used in AVX-512.
+ **Examples of Use**:
+ **RAX**: Save result of a multiplication operation.
+ **RSI and RDI**: Used in memory copy operations (movsb, movsw, movsd, movsq).
+ **RCX**: Used as a loop counter.

These are the main registers in GAS/NASM for `x86_64`. They are essential for manipulating data, controlling flow, and executing operations in assembly programs.

---

## Difference between GAS and NASM registers
Registers have the same concept and basic functionality in both NASM and GNU Assembler (GAS) for the `x86_64` architecture. The main difference between NASM and GAS is the syntax used to write the programs, but the registers and their uses remain consistent.

### General Purpose Registers (64 bits)
+ **NASM**: `rax`, `rbx`, `rcx`, `rdx`, `rsi`, `rdi`, `rbp`, `rsp`, `r8-r15`
+ **GAS**: `%rax`, `%rbx`, `%rcx`, `%rdx`, `%rsi`, `%rdi`, `%rbp`, `%rsp`, `%r8 -%r15`

### General Purpose Registers (32 bits)
+ **NASM**: `eax`, `ebx`, `ecx`, `edx`, `esi`, `edi`, `ebp`, `esp`, `r8d-r15d`
+ **GAS**: `%eax`, `%ebx`, `%ecx`, `%edx`, `%esi`, `%edi`, `%ebp`, `%esp`, `%r8d- %r15d`

### General Purpose Registers (16 bits)
+ **NASM**: `ax`, `bx`, `cx`, `dx`, `si`, `di`, `bp`, `sp`, `r8w-r15w`
+ **GAS**: `%ax`, `%bx`, `%cx`, `%dx`, `%si`, `%di`, `%bp`, `%sp`, `%r8w -%r15w`

### General Purpose Registers (8 bits)
+ **NASM**: `ah`, `al`, `bh`, `bl`, `ch`, `cl`, `dh`, `dl`, `spl`, `bpl`, `sil` , `dil`, `r8b-r15b`
+ **GAS**: `%ah`, `%al`, `%bh`, `%bl`, `%ch`, `%cl`, `%dh`, `%dl`, `%spl `, `%bpl`, `%sil`, `%dil`, `%r8b-%r15b`

### Segment Registers (16 bits)
+ **NASM**: `cs`, `ds`, `ss`, `es`, `fs`, `gs`
+ **GAS**: `%cs`, `%ds`, `%ss`, `%es`, `%fs`, `%gs`

### Special Purpose Recorders
+ **NASM**: `rip`, `rflags`
+ **GAS**: `%rip`, %rflags

### Vector/SIMD Registers
+ **NASM**: `xmm0-xmm15`, `ymm0-ymm15`, `zmm0-zmm31`
+ **GAS**: `%xmm0-%xmm15`, `%ymm0-%ymm15`, `%zmm0-%zmm31`

---

## Installation
To install the GNU Assembler (GAS) you must install the [binutils](https://www.gnu.org/software/binutils/) package , which includes the as assembler (part of the GNU Binutils toolset). 

You can download it directly from the page: <https://www.gnu.org/software/binutils/> or use your package manager, for example in [Ubuntu](https://terminalroot.com/tags#ubuntu):
```bash
sudo apt install binutils
```

On Windows you must use [MinGW](https://terminalroot.com/how-to-install-gcc-gpp-mingw-on-windows/) and do [download here](https://sourceforge.net/projects/mingw/files/MinGW/Base/binutils/binutils-2.28/) from binutils.

---

## Examples
Now we will see some basic code examples to adapt how the syntax is used.

### 01. Creating a "Hello, World!"

```nasm
.section.data
hello:
     .ascii "Hello, World!\0"

.section.text
.globl_start

_start:
     mov $1, %rax # syscall: sys_write
     mov $1, %rdi # file descriptor: stdout
     mov $hello, %rsi # string address
     mov $13, %rdx # string length
     syscall # calls the kernel

     mov $60, %rax # syscall: sys_exit
     xor %rdi, %rdi # exit status: 0
     syscall # calls the kernel
```

+ `.section .data`: Declares the data section, where variables and *strings* are stored.
+ `hello: .ascii "Hello, World!\0"`: Defines a null-terminated string (`0`).
+ `.section .text`: Declares the code section, where the executable code is stored.
+ `.globl _start`: Makes the `_start` label visible to the linker.
+ `_start`: Program entry point.
+ `mov $1, %rax`: Places the *syscall sys_write* number in the `rax` register.
+ `mov $1, %rdi`: Places the descriptor file number (*stdout*) in the `rdi` register.
+ `mov $hello, %rsi`: Places the address of the *string* `hello` in the `rsi` register.
+ `mov $13, %rdx`: Places the length of the string in the `rdx` register.
+ `syscall`: Calls the kernel to execute `syscall`.
+ `mov $60, %rax`: Places the *syscall sys_exit* number in the `rax` register.
+ `xor %rdi, %rdi`: Clears the `rdi` register to set the exit status to `0`.
+ `syscall`: Calls the kernel to terminate the program.

Compile and run:
```bash
as --64 -o hello.o hello.s
ld -o hello hello.o
./hello
```
> On Windows it is `hello.exe` instead of `./hello`.

After running, note that `Hello, World!` will paste with *prompt*:
```bash
Hello, World!$prompt> 
```

To resolve this, replace `\0` with `\n`:
```bash
# .ascii "Hello, World!\0"
.ascii "Hello, World!\n"
```

And increase the length of the string to 14 bytes (13 characters + 1 for the line break `\n`):
```bash
# mov $13, %rdx
mov $14, %rdx
```

Recompile and run!

---

## Comparison of GAS with NASM
> Same code, but with NASM:

```nasm
section.data
     msg db 'Hello, World!', 0

section.text
     global _start
_start:
     mov rax, 1 ; syscall: write
     mov rdi, 1 ; file descriptor: stdout
     mov rsi, msg ; pointer to message
     mov rdx, 13 ; message length
     syscall; make the syscall
     mov rax, 60 ; syscall: exit
     xor rdi, rdi ; status: 0
     syscall; make the syscall
```
> To compile and run NASM:

```bash
# First install NASM, e.g.: sudo apt install nasm
nasm -f elf64 hello.asm
ld -s -o hello hello.o
./hello
```

**Note**: In addition to the symbol `%`(from GAS) *in front* of the registers and the comments being `#`(GAS) and `;`(NASM), GAS can also comment style [C](https://terminalroot.com/tags#clanguage): `/* Comment for multiple lines */`, in addition to other forms depending on the architecture, examples: 
+ `;` — AMD 29k family, ARC, H8/300 family, HPPA, PDP-11, picoJava, Motorola and M32C
+ `@` — ARM 32-bit
+ `//` — AArch64
+ `|` — M680x0
+ `!` — Renesas SH
+ `#` — i386, x86-64, i960, 68HC11, 68HC12, VAX, V850, M32R, PowerPC, MIPS, M680x0, and RISC-V

Although the syntax is different (**NASM** uses a more "*intel*" approach while **GAS** uses a "*AT&T*" approach), the registers perform the same functions in both assemblers.

---

## There are other Assemblers
In addition to **GNU Assembler (GAS)** and **NASM (Netwide Assembler)**, there are several other well-known and widely used assemblers. Here are some of the most notable:

#### MASM (Microsoft Macro Assembler):
+ Mainly used for development on Windows platforms.
+ Supports multiple syntax versions and is often used to develop drivers and other low-level components.

#### FASM (Flat Assembler):
+ An open source and cross-platform assembler.
+ Known for its speed and ability to compile itself.

#### TASM (Turbo Assembler):
+ Developed by Borland.
+ It was popular in the 80s and 90s and often used in conjunction with Turbo C and other Borland tools.

#### YASM:
+ A low-level assembler compatible with NASM syntax.
+ Supports x86 and x86-64 and is designed to be fast and extensible.

#### A86/A386:
+ A shareware DOS assembler for x86 programming.
+ Known for being easy to use and efficient.

#### HLA (High-Level Assembler):
+ Developed by Randall Hyde, known for his book "The Art of Assembly Language".
+ Provides a high-level syntax that makes the assembly easier to learn and use.

#### SPIM:
+ An assembler and simulator for the MIPS architecture.
+ Often used in university courses to teach MIPS assembly.

#### Keil Assembler:
+ Part of the Keil toolset for microcontrollers, especially popular for ARM development.

#### TASM (Turbo Assembler):
+ Developed by Borland, it is an old assembler that was widely used in the 80s and 90s.
+ These assemblers are used in different contexts, from embedded systems development to low-level application programming on various platforms. Each has its own characteristics and syntax that may be better suited for certain tasks and development environments.

These assemblers are used in different contexts, from embedded systems development to low-level application programming on various platforms. Each has its own characteristics and syntax that may be better suited for certain tasks and development environments.

---

### 02. Creating "Hello, World!" with Variable

```nasm
.section .bss
     .lcomm buffer, 13 # reserves 13 bytes for the buffer

.section.data
hello:
     .ascii "Hello, World!\0"

.section.text
.globl_start

_start:
     mov $buffer, %rdi # buffer address
     mov $hello, %rsi # string address
     call copy_string # calls the function to copy the string

     mov $1, %rax # syscall: sys_write
     mov $1, %rdi # file descriptor: stdout
     mov $buffer, %rsi # buffer address
     mov $13, %rdx # string length
     syscall # calls the kernel

     mov $60, %rax # syscall: sys_exit
     xor %rdi, %rdi # exit status: 0
     syscall # calls the kernel

copy_string:
     mov $13, %rcx # string length
.loop:
     mov (%rsi), %al # reads one byte from the string
     mov %al, (%rdi) # writes to buffer
     inc %rsi # advances to the next byte of the string
     inc %rdi # advances to the next byte of the buffer
     loop .loop # repeat until all bytes are copied
     ret # returns to _start
```

+ `.lcomm buffer, 13`: Reserves 13 bytes for the *buffer* in the *BSS* section.
+ `call copy_string`: Calls the `copy_string` function to copy the *string* `hello` to the *buffer*.
+ `copy_string`: Function that copies the *string* to the *buffer*.
+ `mov $13, %rcx`: Sets the repetition counter to the length of *string*.
+ `loop .loop`: Repeating loop to copy each *byte* of the *string*.

---

### 03. Creating a Function that prints: "Hello, World!"

```nasm
.section.data
hello:
     .ascii "Hello, World!\0"

.section.text
.globl_start

_start:
     call print_hello # calls the function to print the string

     mov $60, %rax # syscall: sys_exit
     xor %rdi, %rdi # exit status: 0
     syscall # calls the kernel

print_hello:
     mov $1, %rax # syscall: sys_write
     mov $1, %rdi # file descriptor: stdout
     mov $hello, %rsi # string address
     mov $13, %rdx # string length
     syscall # calls the kernel
     ret # returns to _start
```

+ `call print_hello`: Calls the `print_hello` function to print the *string* `hello`;
+ `print_hello`: Function that executes the *syscall sys_write* to print the *string*.

---

### 04. Writing code that: Sum of Two Numbers
> And it prints on the screen with line break/new line (without pasting at the prompt)!

```nasm
.section.data
smash:
     .ascii "\n" # to skip/break a line
num1:
     .quad 5 # defines the first number
num2:
     .quad 10 # defines the second number
result:
     .quad 0 # reserves space for the result
buffer:
     .space 2 # space for number string (2 digits)

.section.text
.globl_start

_start:
     mov num1(%rip), %rax # load num1 into rax
     add num2(%rip), %rax # add num2 to rax
     mov %rax, result(%rip) # stores the result

     # code to print the result
     mov result(%rip), %rax # load the result into rax
     mov $buffer + 2, %rsi # points to the end of the buffer (2 digits)
     call int_to_string # convert number to string

     mov $1, %rax # syscall: sys_write
     mov $1, %rdi # file descriptor: stdout
     lea buffer(%rip), %rsi # string address
     mov $2, %rdx # maximum string length (2 digits)
     syscall # calls the kernel

     mov $1, %rax # syscall: sys_write
     mov $1, %rdi # file descriptor: stdout
     mov $break, %rsi # break address
     mov $1, %rdx # break length(1 digit)
     syscall # calls the kernel

     mov $60, %rax # syscall: sys_exit
     xor %rdi, %rdi # exit status: 0
     syscall # calls the kernel

int_to_string:
     # convert %rax to decimal string and store it in %rsi
     mov %rax, %rcx # copy number to rcx
     mov $10, %rbx # decimal base

     convert_loop:
         xor %rdx, %rdx # clear rdx (dividend)
         div %rbx # divide rax by 10
         add $'0', %dl # converts the rest to ASCII characters
         dec %rsi # move buffer pointer backward
         mov %dl, (%rsi) # stores the character in the buffer
         test %rax, %rax # checks if rax is 0
         jnz convert_loop # if not 0, continue the loop

     ret # returns to _start
```

+ `num1: .quad 5` and `num2: .quad 10`: Defines the numbers to be added.
+ `result: .quad 0`: Reserves space to store the result.
+ `add num2(%rip), %rax`: Adds `num2` to the value of `num1` stored in `rax`.
+ `mov %rax, result(%rip)`: Stores the result of the sum.
+ `call print_result`: Calls the `print_result` function to print the result.

---

For more information and complete GNU Assembler documentation visit: <https://sourceware.org/binutils/docs-2.42/as.html>.
