# Text-Processing
Problems for exercise from my training in Softuni

## **1. Print Characters**

Write a function that **receives a** **string** and **prints all the**
**characters** on separate lines.

### Input / Output

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>'AWord'</td>
<td><p>A</p>
<p>W</p>
<p>o</p>
<p>r</p>
<p>d</p></td>
</tr>
<tr class="even">
<td>'Sentence'</td>
<td><p>S</p>
<p>e</p>
<p>n</p>
<p>t</p>
<p>e</p>
<p>n</p>
<p>c</p>
<p>e</p></td>
</tr>
</tbody>
</table>

## **2. Substring**

Write a function that **receives a string** and **two numbers**. The
numbers will be a **starting index** and **count** of elements to
substring. Print the result.

### Input / Output

| **Input**         | **Output** |
| ----------------- | ---------- |
| 'ASentence', 1, 8 | Sentence   |
| 'SkipWord', 4, 7  | Word       |


## **3. Censored Words**

Write a function that **receives a text as** a first parameter and a
**single word** as a second. Find **all occurrences** of that word in
the text and replace them with the corresponding count of **'\*'**.

### Input / Output

| **Input**                                   | **Output**                            |
| ------------------------------------------- | ------------------------------------- |
| 'A small sentence with some words', 'small' | A \*\*\*\*\* sentence with some words |
| 'Find the hidden word', 'hidden'            | Find the \*\*\*\*\*\* word            |


## **4. Count String Occurrences**

Write a function that **receives a text** and a **single word** **that
you need to search**. Print the number of all occurrences of this word
in the text.

### Input / Output

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>'This is a word and it also is a sentence',</p>
<p>'is'</p></td>
<td>2</td>
</tr>
<tr class="even">
<td><p>'softuni is great place for learning new programming languages',</p>
<p>'softuni'</p></td>
<td>1</td>
</tr>
</tbody>
</table>

## **5. Reveal Words**

Write a function, which receives **two parameters**.

The first parameter will be a string with some words **separated by ',
'**.

The second parameter will be a string that contains **templates
containing '\*'**.

Find the word with the **same length** as the **template** and
**replace** it.

### Example

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><strong>'great',</strong></p>
<p><strong>'softuni is ***** place for learning new programming languages'</strong></p></td>
<td>softuni is great place for learning new programming languages</td>
</tr>
<tr class="even">
<td><p><strong>'great, learning',</strong></p>
<p><strong>'softuni is ***** place for ******** new programming languages'</strong></p></td>
<td>softuni is great place for learning new programming languages</td>
</tr>
</tbody>
</table>

## **6. Modern Times of \#(HashTag)**

The input will be a **single string.**

**Find all** special words **starting with \#**. If the found special
word does not consist only of letters, then it is invalid and should not
be printed.

Finally, print out all the special words you found without the label
**(\#)** on a new line.

### Example

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>'Nowadays everyone uses # to tag a #special word in #socialMedia'</strong></td>
<td><p>special</p>
<p>socialMedia</p></td>
</tr>
<tr class="even">
<td><strong>'</strong>The symbol # is known <strong>#variously</strong> in English-speaking <strong>#regions</strong> as the #<strong>number sign'</strong></td>
<td><p>variously</p>
<p>regions</p>
<p>number</p></td>
</tr>
</tbody>
</table>

## **7. Extract File**

Write a function that receives a single string - the path to a file (the
'**\\**' character is escaped)

Your task is to subtract the **file name** and its **extension**.
(Beware of files like **template.bak.pptx,** as **template.bak** should
be the file name, while **pptx** is the extension).

### Example

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>'C:\\Internal\\training-internal\\Template.pptx'</td>
<td><p>File name: Template</p>
<p>File extension: pptx</p></td>
</tr>
<tr class="even">
<td>'C:\\Projects\\Data-Structures\\LinkedList.cs'</td>
<td><p>File name: LinkedList</p>
<p>File extension: cs</p></td>
</tr>
</tbody>
</table>

## **8. String Substring**

The input will be given as **two** separated strings (a **word** as a
first parameter and a **text** as a second).

Write a function that checks given text for containing a given word. The
comparison should be **case insensitive.** Once you find a match,
**print** the word and **stop** the program.

If you don't find the word print: **"{word} not found\!"**

### Example

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>'javascript',</strong><br />
<strong>'JavaScript is the best programming language'</strong></td>
<td>javascript</td>
</tr>
<tr class="even">
<td><p><strong>'python',</strong></p>
<p><strong>'JavaScript is the best programming language'</strong></p></td>
<td>python not found!</td>
</tr>
</tbody>
</table>

## **9. Replace Repeating Chars**

Write a function that receives a single string and **replace** any
sequence of the **same letters** with a single corresponding letter.

### Examples

| **Input**                 | **Output** |
| ------------------------- | ---------- |
| 'aaaaabbbbbcdddeeeedssaa' | abcdedsa   |
| 'qqqwerqwecccwd'          | qwerqwecwd |

## **10. Pascal-Case Splitter**

You will receive a **single** **string**.

This string is written in **PascalCase format.** Your task here is to
split this string by **every word in it**.

Print them joined by **comma and space.**

### Examples

| **Input**                            | **Output**                                               |
| ------------------------------------ | -------------------------------------------------------- |
| 'SplitMeIfYouCanHaHaYouCantOrYouCan' | Split, Me, If, You, Can, Ha, Ha, You, Cant, Or, You, Can |
| 'HoldTheDoor'                        | Hold, The, Door                                          |
| **'ThisIsSoAnnoyingToDo'**           | **This, Is, So, Annoying, To, Do**                       |

## **11. Cut and Reverse**

The input will be a **single string.**

Write a function that cuts the given string **into half** and
**reverse** **the two halves.**

Print each half on a **separate line.**

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>'tluciffiDsIsihTgnizamAoSsIsihT'</td>
<td><p>ThisIsDifficult</p>
<p>ThisIsSoAmazing</p></td>
</tr>
<tr class="even">
<td>'sihToDtnaCuoYteBIboJsihTtAdooGoSmI'</td>
<td><p>IBetYouCantDoThis</p>
<p>ImSoGoodAtThisJob</p></td>
</tr>
</tbody>
</table>

## **12. \*Hard Words**

You will receive an **array**, which holds the **string and another
array**.

The string is a letter from a young boy who does not yet know some words
and you have to help him. The letter has a few **holes**, these holes
are the words unknown to the boy and you must fill them with **strings
from the array** you receive at the second index.

If the **length of the hole is 4 you have to replace it with string with
the same length** and so on…

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>[<strong>'Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious.</strong> <strong>I hope this year Santa will _____ me a robot.'</strong>,<br />
[<strong>'pie'</strong>, <strong>'bring'</strong>, <strong>'glad'</strong>, <strong>'During'</strong>, <strong>'amazing'</strong>, <strong>'pharmacist'</strong>, <strong>'sprained'</strong>]]</td>
</tr>
<tr class="even">
<td><strong>Output</strong></td>
</tr>
<tr class="odd">
<td>Hi, grandma! I'm so glad to write to you. During the winter vacation, so amazing things happened. My dad bought me a sled. Mom started a new job as a pharmacist. My brother's ankle is sprained, and now it bothers me even more. Every night Mom cooks pie on your recipe because it is the most delicious. I hope this year Santa will bring me a robot.</td>
</tr>
</tbody>
</table>

## **13. \*Password Generator**

For this problem, you have to write a function, which generates a
password depending on input information. As such, you will be given an
**array** of **three strings.** The first two strings will be at least
**10 characters long**, the third one will be **one word.**

Your task here is to concatenate the first two strings and replace all
**vowels** in the **concatenated string** with symbols from the third
string. **The first vowel** must be replaced with the **first
character** from the third string, the **second vowel** with the
**second character** from that string, and so on. If the third string is
less than the vowels count in the newly formed string you need to start
over with the **character on the 0 index.** When you replace all vowels
**reverse** the new password and print it on the console in a format:

**'Your generated password is {password}'**

<span class="underline">**Note:** All replaced vowels with the
characters from the third string must be upper-case, the rest of the
characters are lower-case.</span>

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>[</p>
<p>'ilovepizza', 'ihatevegetables',</p>
<p>'orange'</p>
<p>]</p></td>
<td>Your generated password is sElbGtNgAvRtOhEGzzNpAvRlO</td>
</tr>
<tr class="even">
<td><p>[</p>
<p>'easymoneyeazylife', 'atleasttencharacters', 'absolute'</p>
<p>]</p></td>
<td>Your generated password is srTtcUrLhcnOttsSBltAEfTlyzULyOnSmysBA</td>
</tr>
<tr class="odd">
<td><p>[</p>
<p>'areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'</p>
<p>]</p></td>
<td>Your generated password is SIytsDrtDtEbBtRUqtTnSnIsDhttDEbBRrUsTSyIrD</td>
</tr>
</tbody>
</table>

## **14. \*Letters Change Numbers**

John likes Math. But he also likes the English alphabet a lot. He
invented a game with numbers and letters from the **English** alphabet.
The game is simple. You get a string consisting of a **number between
two letters**. Depending on whether the letter was in front of the
number or after it you would perform different mathematical operations
on the number to achieve the result.

**First,** you start with the letter **before** the number:

  - If it's **uppercase** you **divide** the number by the letter's
    **position** in the alphabet

<!-- end list -->

  - If it's **lowercase** you **multiply** the number with the letter's
    **position** in the alphabet

**Then** you move to the **letter after** the number:

  - If it's **uppercase** you **subtract** its position from the
    resulted number

<!-- end list -->

  - If it's **lowercase** you **add** its position to the resulted
    number

But the game became too easy for John is quick. He decided to complicate
it a bit by doing the same but with **multiple** strings keeping track
of only the **total sum** of all results. Once he started to solve this
with more strings and bigger numbers it became quite hard to do it only
in his mind. So he kindly asks you to write a program that **calculates
the sum of all numbers after the operations on each number have been
done**.

**For example,** You are given the sequence "**A12b s17G**":

We have two strings - **"A12b"** and **"s17G"**. We do the operations on
each and sum them. We start with the letter before the number on the
first string. **A is Uppercase** and its position in the alphabet is
**1**. So we divide the number 12 with position 1 (**12/1 = 12)**. Then
we move to the letter after the number. **b is lowercase** and its
position is 2. So we add 2 to the resulting number (**12+2=14)**.
Similarly for the second string **s is lowercase** and its position is
19 so we multiply it with the number (**17\*19 = 323)**. Then we have
Uppercase G with position 7, so we subtract it from the resulted
number (**323 - 7 = 316)**. Finally, we sum the 2 results and we get
**14 + 316=330**.

**Input**

The input comes as a **text, holding the sequence of strings**. Strings
are separated by **one or more white spaces**.

The input data will always be valid and in the format described. There
is no need to check it explicitly.

**Output**

Print on the console a single number: the **total sum of all processed
numbers** rounded up to **two digits** after the decimal separator.

**Constraints**

  - The **count** of the strings will be in the range **\[1 … 10\].**

  - The numbers between the letters will be integers in the range **\[1
    … 2 147 483 647\].**

  - > Time limit: 0.3 sec. Memory limit: 16 MB.

### Examples

| **Input**              | **Output** | **Comment**                                             |
| ---------------------- | ---------- | ------------------------------------------------------- |
| 'A12b s17G'            | 330.00     | 12/1=12, 12+2=14, 17\*19=323, 323-7=316, **14+316=330** |
| 'P34562Z q2576f H456z' | 46015.13   |                                                         |
| 'a1A'                  | 0.00       |                                                         |

## **15. Value of a String**

Write a function, which finds the **sum** of the **ASCII** **codes** of
the **letters** in a given **string**. Your tasks will be a bit harder
because you will have to find the **sum** of **either** the
**lowercase** or the **uppercase** letters.

On the **first** line, you will receive the **string**.

On the **second** line, you will receive **one of two possible inputs**:

  - > If you receive "**UPPERCASE**" find the **sum** of **all**
    > **uppercase** **English** **letters** in the previously received
    > string

  - > If you receive "**LOWERCASE**" find the **sum** of **all**
    > **lowercase** **English** **letters** in the previously received
    > string

You should **not** sum the **ASCII** codes of any characters, which are
**not** letters.

At the end print the sum in the following format:

  - > The total sum is: {sum}

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><strong>['HelloFromMyAwesomePROGRAM',</strong></p>
<p><strong>'LOWERCASE']</strong></p></td>
<td><strong>The total sum is: 1539</strong></td>
</tr>
<tr class="even">
<td><p><strong>['AC/DC',</strong></p>
<p><strong>'UPPERCASE']</strong></p></td>
<td><strong>The total sum is: 267</strong></td>
</tr>
</tbody>
</table>

## **16. Serialize String**

You have been tasked to serialize a string. The serialization is done
specially, in which a character from that string is saved with the
indexes at which it is found.

The input will consist array, containing a single string, which may
consist of **ANY ASCII** characters. Your task is to serialize the
string in the following way:

{char}:{index1}/{index2}/{index3}

The **char** will be the **character**, and the **indexes** will be the
**indexes** it is **found** at in the **string**.

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>["abababa"]</strong></td>
<td><p><strong>a:0/2/4/6</strong></p>
<p><strong>b:1/3/5</strong></p></td>
</tr>
<tr class="even">
<td><strong>["avjavamsdmcalsdm"]</strong></td>
<td><p><strong>a:0/3/5/11</strong></p>
<p><strong>v:1/4</strong></p>
<p><strong>j:2</strong></p>
<p><strong>m:6/9/15</strong></p>
<p><strong>s:7/13</strong></p>
<p><strong>d:8/14</strong></p>
<p><strong>c:10</strong></p>
<p><strong>l:12</strong></p></td>
</tr>
</tbody>
</table>

## **17. Deserialize String**

Write a function, which takes the **output** from the **previous task**
and turns it back into a **string**.

Until you receive the line “**end**”, you will receive several lines of
input on the console, in the following format:

  - > "**{letter}:{index1}/{index2}/{index…}/{indexN}**"

Your task is to take every **letter** and its **index** and **form a
string** out of them.

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><strong>['a:0/2/4/6',</strong></p>
<p><strong>'b:1/3/5',</strong></p>
<p><strong>'end']</strong></p></td>
<td><strong>abababa</strong></td>
</tr>
<tr class="even">
<td><p><strong>['a:0/3/5/11',</strong></p>
<p><strong>'v:1/4',</strong></p>
<p><strong>'j:2',</strong></p>
<p><strong>'m:6/9/15',</strong></p>
<p><strong>'s:7/13',</strong></p>
<p><strong>'d:8/14',</strong></p>
<p><strong>'c:10',</strong></p>
<p><strong>'l:12',</strong></p>
<p><strong>'end']</strong></p></td>
<td><strong>avjavamsdmcalsdm</strong></td>
</tr>
</tbody>
</table>

## **18. Ascii Sumator**

Write a function that prints a **sum of all characters between two given
characters** (their **ASCII code**). On the **first line,** you will get
a **character**. On the **second line,** you get **another character**.
On the **last line**, you get a **random string**. Find all the
characters **between the two given** and **print their ASCII sum**.

### Example

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><strong>['.',</strong></p>
<p><strong>'@',</strong></p>
<p><strong>'dsg12gr5653feee5']</strong></p></td>
<td><strong>363</strong></td>
</tr>
<tr class="even">
<td><p><strong>['?',</strong></p>
<p><strong>'E',</strong></p>
<p><strong>'@ABCEF']</strong></p></td>
<td><strong>262</strong></td>
</tr>
<tr class="odd">
<td><p><strong>['a',</strong></p>
<p><strong>'1',</strong></p>
<p><strong>'jfe392$#@j24ui9ne#@$']</strong></p></td>
<td><strong>445</strong></td>
</tr>
</tbody>
</table>

## **19. Treasure Finder**

Write a function that **decrypts a message** by a given **key** and
gathers information about the hidden **treasure type** and its
**coordinates.** On the **first line,** you will receive a **key
(sequence of numbers).**

On the **next few lines until you receive "find"** you will get lines of
**strings**. You have to **loop through every string** and **decrease
the ASCII code of each character** with a **corresponding number of the
key** sequence. The way you choose a key number from the sequence is by
just **looping through it**. If the **length of the key** sequence is
**less than the string** sequence, you start **looping from the
beginning of the key.** For more clarification see the example below.
**After decrypting** the message, you will **get a type of treasure and
its coordinates.** The **type** will be **between** the symbol **'&'**
and the coordinates will be between the symbols **'\<'** and **'\>'**.
For each line, **print the type and the coordinates** in the format:  
**\`Found {type} at {coordinates}\`**

### Example

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th><strong>Comment</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><strong>['1 2 1 3',</strong></p>
<p><strong>'ikegfp'jpne)bv=41P83X@',</strong></p>
<p><strong>'ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA',</strong></p>
<p><strong>'find']</strong></p></td>
<td><p><strong>Found gold at 10N70W</strong></p>
<p><strong>Found Silver at 32S43W</strong></p></td>
<td><p>We start looping through the first string and the key. When we reach the end of the key we start looping from the beginning of the key, but we continue looping through the string. (until the string is over)</p>
<p>The first message is: <strong>"hidden&amp;gold&amp;at&lt;10N70W&gt;"</strong> so we print we found gold at the given coordinates</p>
<p>We do the same for the second string</p>
<p><strong>"thereIs&amp;Silver&amp;atCoordinates&lt;32S43W&gt;"</strong>(starting from the beginning of the key and the beginning of the string)</p></td>
</tr>
<tr class="even">
<td><p><strong>['1 4 2 5 3 2 1',</strong></p>
<p><strong>'Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC',</strong></p>
<p><strong>'tsojPqsf$(lrne'$CYfqpshksdvfT$&gt;634O57YC',</strong></p>
<p><strong>''stj)&gt;34W68Z@',</strong></p>
<p><strong>'find']</strong></p></td>
<td><p><strong>Found gold at 0S123E</strong></p>
<p><strong>Found gold at 102N43W</strong></p>
<p><strong>Found ore at 23S43W</strong></p></td>
<td></td>
</tr>
</tbody>
</table>

## **20. Melrah Shake**

You are given a **string** of random characters and a **pattern** of
random characters. You need to “shake off” (**remove**) all of the
**border** occurrences of that pattern, in other words, the **very**
**first** **match** and the **very last match** of the pattern you find
in the string.

When you successfully shake off a match, you **remove** from the pattern
the character which corresponds to the **index** equal to **the
pattern’s length / 2**. Then you continue to shake off the border
occurrences of the new pattern until the pattern becomes **empty** or
until there is **less** than the - needed for a shake, matches in the
remaining string.

In case you have found at least **two** matches, and you have
successfully shaken them off, you print "**Shaked it.**" on the console.
Otherwise, you print "**No shake.**", the remains of the main string,
and you end the program. See the examples for more info.

### Input

  - The input will consist only of two lines

  - On the first line, you will get a string of random characters

  - On the second line, you will receive the pattern and that ends the
    input sequence

### Output

  - You must print "**Shaked it.**" for every time you successfully do
    the melrah shake

  - If the melrah shake fails, you print "**No shake.**", and on the
    next line you print what has remained of the main string

### Constraints

  - The two strings may contain **ANY** ASCII character

  - Allowed time/memory: 250ms/16MB

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><strong>['astalavista baby',</strong></p>
<p><strong>'sta']</strong></p></td>
<td><p><strong>Shaked it.</strong></p>
<p><strong>No shake.</strong></p>
<p><strong>alavi baby</strong></p></td>
</tr>
<tr class="even">
<td><p><strong>['##mtm!!mm.mm*mtm.#',</strong></p>
<p><strong>'mtm']</strong></p></td>
<td><p><strong>Shaked it.</strong></p>
<p><strong>Shaked it.</strong></p>
<p><strong>No shake.</strong></p>
<p><strong>##!!.*.#</strong></p></td>
</tr>
</tbody>
</table>
