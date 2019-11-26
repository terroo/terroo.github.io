---
layout: post
title: "Examples of functions: fread(), fwrite(), remove() and others in C"
date: 2019-11-26 16:46:37
image: '/assets/img/dev/c.jpg'
description:
featured-img: ''../dev/c.jpg''
tags:
- c
- language-c
- c-programming
---

![Examples of functions: fread(), fwrite(), remove() and others in C](/assets/img/dev/c.jpg)

## `fread()`

We can write and read blocks of data. For that, we have the functions `fread()` and `fwrite()`. The `fread()` prototype is:

> `unsigned fread (void *buffer, int numero_de_bytes, int count, FILE *fp);`

The **buffer** is the memory region where the read data will be stored. The number of bytes is the size of the drive to be read. count indicates how many units to read. This means that the total number of bytes read is:

> `byte_number * count`

The function returns the number of units actually read. This number may be less than count when the end of file is encountered or an error occurs. When the file is opened for binary data, fread can read any data type.

Example:

> There must be a file in the directory before you will run the program, for example: `echo "This content will be read" >> the_file.txt`

{% highlight c %}
#include <stdio.h>
#include <stdlib.h>

int main() {
      // We declare a pointer (link to memory address) to file name: 'pf'
      FILE *pf;
      char content[100];

      pf = fopen("the_file.txt", "rb"); /* Open file again for reading */

      fread(&content, sizeof(char), 100,pf); /* Reads the value of the previously stored variable pf */

      printf("\nThe the_file.txt content is':\n %s \n", content);

      fclose(pf);

      return(0);
}
{% endhighlight %}

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

## `fwrite()`

The `fwrite()` function works like your companion `fread()`, but writing to the file. Your prototype is:

> `unsigned fwrite(void *buffer,int byte_number,int count,FILE *fp);`

The function returns the number of items written. This value will be equal to count unless an error occurs.

Example:

{% highlight c %}
#include <stdio.h>
#include <stdlib.h>
int main() {
        FILE *pf;
        int NUM = 88; 
        int pilido;
        if((pf = fopen("files/file.bin", "wb")) == NULL){ /* Open binary file for writing */
                printf("Error opening file");
                exit(1);
        }   
        if(fwrite(&NUM, sizeof(int), 1,pf) != 1)     /* Write variable NUM | the sizeof operator, which returns the size in bytes of the variable or data type. */
                printf("Error writing file.");
        fclose(pf);                                    /* Close the file */
        if((pf = fopen("files/file.bin", "rb")) == NULL){ /* Open file again for reading */
                printf("Error opening file.");
                exit(1);
        }   
        if(fread(&pilido, sizeof(int), 1,pf) != 1) /* Reads the value of the previously stored variable */
                printf("Error reading file.");
        printf("\nThe value of NUM read from file is:' %d \n\n", pilido);
        fclose(pf);
        return(0);
}
{% endhighlight %}

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

## `remove()`

Prototype:

> `int remove (char *filename);`

Deletes a specified file.

Example:

{% highlight c %}
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main(){      
/*  0 (zero) is true, and 1 (one) is false, numbers are used in C! */
if(remove("removed_file.txt") == 0){
      printf("File successfully removed!\n");
}else{
      printf("Not removed, may not exist.\n");
}
      return(0);
}
{% endhighlight %}

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

## `fprintf()` and `fscanf()`

Standard file streams allow the programmer to read and write files in the standard way we read and wrote them on screen.

+ `fprintf()`: The fprintf() function works like the `printf()` function. The difference is that the output of `fprintf()` is a file and not the computer screen.

Prototype:

> `int fprintf (FILE *fp,char *str,…);`

As we might expect, the only difference from the `fprintf()` prototype to the `printf()` prototype is the specification of the target file through the file pointer.

+ `fscanf()`: The **fscanf()** function works like the **scanf()** function. The difference is that **fscanf()** reads from a file and not from the computer keyboard.

Fprintf and fscanf example:

> A **warning** may appear on your compiler, but it will work!

{% highlight c %}
#include <stdio.h>
#include <stdlib.h>
int main() {
   FILE *p;
   char str[80], c;
   /* Read a name for the file to open: */
   printf("\nEnter a file name: ");
   scanf("%s", &str); /* don't get() but scanf like this */
   if (! (p = fopen(str, "w") ) ) { /* If an error occurs while opening the file .. */
       /* program aborts automatically */
       printf("Error! Unable to open file! \n");
       exit(1);
   }
   /* If no error, print to file, close ... */
   fprintf (p, "This is a file called (with or without path and format): \n%s\n", str);
   fclose(p);
   /* opens again for reading */
   p = fopen(str, "r");
   while( ! feof(p) ) {
       fscanf(p, "%c", &c);
       printf ("%c", c);
   }
   fclose (p);
   return (0);
}
{% endhighlight %}

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

## `fputs()`

The **C** function library int fputs (`const char * str, FILE * stream`) writes a string to the specified stream up to, but not including, the null character.

Declaration

Following is the statement for the fputs() function:

> `int fputs (const char * str, FILE * stream)`

Parameters

+ **str** - This is an array containing the null terminating string of characters to be written.
+ **stream** - This is the pointer to a file object that identifies the stream where the string is to be written.

Return value

Writes a string to a file. This function returns a non-negative value plus, in case of error returns `EOF`.

Example:

{% highlight c %}
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
      FILE *fp;

      fp = fopen("my_file.txt", "w+");

      fputs("This is programming C.", fp);
      fputs("This is a system programming language.\n", fp);

      fclose(fp);

      return(0);
}
{% endhighlight %}

Then run at the terminal (even if you didn't create the file before): `cat my_file.txt` and look at the content created with your **C** code! =)

<!-- QUADRADO -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:336px;height:280px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

## `fgets()`

To read a string in a file we can use fgets() whose prototype is:

> `char *fgets (char *str, int the_size,FILE *fp);`

The function takes 3 arguments: the string to read, the upper limit of characters to read, and the pointer to **FILE**, which is associated with the file from which the string will be read. The function reads the string until a newline character. either read or length-1 characters have been read. If the newline character ('`\n`') is read, it will be part of the string, which was not the case with gets. The resulting string will always end with '`\0`' (so only 1 character length maximum will be read). The fgets function is similar to the `gets()` function, but in addition to being able to read from a data file and including the newline character in the string, it still specifies the maximum length of the input string. As we have seen, the gets function did not have this control, which could lead to “buffer overflow” errors. Therefore, given that the fp pointer can be replaced by stdin, as we saw above, an alternative to using gets is to use the following construct:

> `fgets (str, the_size, stdin);`

where str is the string being read and size must be equal to the size allocated for the string subtracted from 1, because of the `\0`.

Example:

{% highlight c %}
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main() {
    FILE *p;
    char str[30], phrase[] = "This is a file called: ", resp[80];
    int i;
    /* Reads a name for the file to open: */
    printf("\nEnter a file name: ");
    fgets(str,29,stdin);                                    /* Use fgets like gets */
    for(i=0; str[i]; i++) if(str[i]=='\n') str[i]=0;        /* Delete \n from read string */
    if (!(p = fopen(str,"w")))                              /* If there is an error opening the file..*/
    {                                                       /* the program automatically aborts */
       printf("Error! Unable to open file!\n");
       exit(1);
    }
    /* If there was no error, print to file, and close it ...*/
    fputs(phrase, p);
    fputs(str,p);
    fclose(p);
    /* open again and read */
    p = fopen(str,"r");
    fgets(resp, 79, p);
    printf("\n\n%s\n", resp);
    fclose(p);                       /* Close the file */
    remove(str);                     /* Delete file */
    return(0);
}
{% endhighlight %}


## `ferror()` and `perror()`

Ferror Prototype:

> `int ferror (FILE *fp);` . The function returns zero if no errors occurred and a nonzero number if any errors occurred while accessing the file. `ferror()` becomes very useful when we want to verify that each access to a file has been successful so that we can ensure the integrity of our data. In most cases, if a file can be opened, it can be read or written. However, there are situations where this does not occur. For example, you may run out of disk space while recording, or the disk may be bad and unable to read, etc. One function that can be used in conjunction with `ferror()` is the `perror()` (**p**rint **error**) function, whose argument is a string that usually indicates where in the program the problem occurred.

Example:

{% highlight c %}
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(){
	FILE *pf;
	char string[100];
	if((pf = fopen("the_file.txt","w")) ==NULL){
	      printf("\nI can't open the_file! ");
	      exit(1);
	} do {
	      printf("\nEnter a new string. To finish, type <enter>: ");
	      scanf("%s", &string); /* you don't use the get() function but scanf this way */
	      fputs(string, pf);
	      putc('\n', pf);
	      if(ferror(pf)) {
		      perror("Recording Error.");
		      fclose(pf);
		      exit(1);
	      }
	} while (strlen(string) > 0);
	fclose(pf);
}
{% endhighlight %}

<!-- LISTA MIN -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
style="display:inline-block;width:730px;height:95px"
data-ad-client="ca-pub-2838251107855362"
data-ad-slot="5351066970"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

## `fseek()`

To make random searches and accesses in files use the function `fseek()`. It moves the current read or write position in the file to a specified value from a specified point. Your prototype is:

> `int fseek (FILE *fp,long numbytes,int origin );`

The source parameter determines where the move numbytes will be counted from. Possible values are defined by macros in stdio.h

## `rewind()`

The prototype rewind() function:

> `void rewind (FILE *fp);`

returns the current file position to the beginning.
