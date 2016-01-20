<span id="top"></span>
<span dir="auto">WebFund 2016W: Tutorial 2</span>
=================================================

From Soma-notes

Jump to: [navigation](#column-one), [search](#searchInput)

**This tutorial is not yet finalized.**

In this tutorial you'll be playing with
[tinywebserver.js](http://homeostasis.scs.carleton.ca/~soma/webfund-2016w/code/tinywebserver.js),
a static file webserver in node.js that has no dependencies outside of
the core node.js modules. It is based on a [tiny node.js web
server](https://github.com/rodw/tiny-node.js-webserver) written by [Rod
Waldhoff](http://heyrod.com/). (Note that the original is written in
[CoffeeScript](http://coffeescript.org/).)

To run it, just type "node tinywebserver.js". It will begin serving on
the web the pages in the same directory as the script. You'll want to
have some files files to serve; to start off, try having it serve
[hello.html](http://homeostasis.scs.carleton.ca/~soma/webfund-2016w/code/hello.html)
from class. Then, move on to saving pages from the web and serving
those. (Note: they probably will be broken in some way by
tinywebserver.)

You can run tinywebserver under the debugger by typing "node debug
tinywebserver.js". See below for instructions on how to use the node
debugger. You may also want to use the browser developer tools to see
how the web browser is interacting with the server.

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><div id="toctitle">
<h2 id="contents">Contents</h2>
</div>
<ul>
<li><a href="#Questions"><span class="tocnumber">1</span> <span class="toctext">Questions</span></a></li>
<li><a href="#Tasks"><span class="tocnumber">2</span> <span class="toctext">Tasks</span></a></li>
<li><a href="#Node_debugger"><span class="tocnumber">3</span> <span class="toctext">Node debugger</span></a></li>
<li><a href="#Browser_developer_tools"><span class="tocnumber">4</span> <span class="toctext">Browser developer tools</span></a></li>
</ul></td>
</tr>
</tbody>
</table>

### <span id="Questions" class="mw-headline">Questions</span>

1.  What port is the web server listening on?
2.  What file is returned when you access a directory? Why?
3.  What sort of URL do you give to get the insecure URL warning (403
    Forbidden response code)?
4.  What URL do you need to get a 500 error?

### <span id="Tasks" class="mw-headline">Tasks</span>

1.  Change the port the server listens on to be 3000.
2.  Change the server to serve files from /home/student/public\_html
    rather than the current directory. Be sure to put some files in it!
    (Hint: you can grab HTML files from any webserver using wget
    or curl.)
3.  Change tinywebserver.js so it returns a simple HTML error page in
    response to 404 errors (page not found).
4.  Make the options object be stored in a file options.json and read on
    server startup. This load may be synchronous! Use
    [JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
    to convert the file data into an object.

<span id="Node_debugger" class="mw-headline">Node debugger</span>
-----------------------------------------------------------------

Node has a [built-in debugger](http://nodejs.org/api/debugger.html).
Start it by running `node debug bin/www`. This will stop on the first
line of the file. Type `n` to step to the next line of the file. Type
`c` to continue to the next breakpoint. Breakpoints are set by adding a
`debugger;` statement to the javascript source.

At any time you can type `repl` into the debugger to drop into a
read-eval-print loop where you can evaluate JavaScript statements in the
current context. Ctrl-C will get you out of the REPL.

For example, consider this source for `test.js`.

1.  var x = 5;

2.  var y = 10;

3.   

4.  debugger;

You can run `node debug test.js` to start the debugger.

It which will stop on the first line of the file (`var x = 5;`). If you
enter `c` node will continue executing until the `debugger;` statement
where it will stop. From here if you enter `repl` you can execute
Javascript in the current context. In the `repl` prompt if you enter
`x;` it will return 5. If you enter `x + y;` it will return 15, etc.

<span id="Browser_developer_tools" class="mw-headline">Browser developer tools</span>
-------------------------------------------------------------------------------------

-   [Firefox developer
    tools](https://developer.mozilla.org/en-US/docs/Tools):
    Tools-&gt;Web Developer-&gt;Toggle Tools
-   [Chrome/Chromium developer
    tools](https://developer.chrome.com/devtools/index):
    Tools-&gt;Developer Tools

The above links have full documentation on the respective developer
tools.

Select the Network tab to see HTTP traffic. Select Inspector (Firefox)
or Elements (Chrome/Chromium) to see the HTML document (DOM).

Retrieved from
"<http://homeostasis.scs.carleton.ca/wiki/index.php?title=WebFund_2016W:_Tutorial_2&oldid=20554>"

##### Views

-   

    [Page](/wiki/index.php/WebFund_2016W:_Tutorial_2 "View the content page [c]")
-   

    [Discussion](/wiki/index.php?title=Talk:WebFund_2016W:_Tutorial_2&action=edit&redlink=1 "Discussion about the content page [t]")
-   

    [View
    source](/wiki/index.php?title=WebFund_2016W:_Tutorial_2&action=edit "This page is protected.
    You can view its source [e]")
-   

    [History](/wiki/index.php?title=WebFund_2016W:_Tutorial_2&action=history "Past revisions of this page [h]")

##### Personal tools

-   

    [Log
    in](/wiki/index.php?title=Special:UserLogin&returnto=WebFund+2016W%3A+Tutorial+2 "You are encouraged to log in; however, it is not mandatory [o]")

[](/wiki/index.php/Main_Page "Visit the main page")

##### Navigation

-   

    [Main page](/wiki/index.php/Main_Page "Visit the main page [z]")
-   

    [COMP 2406
    2016W](/wiki/index.php/Fundamentals_of_Web_Applications_(Winter_2016))
-   

    [COMP 4108
    2016W](/wiki/index.php/Computer_Systems_Security_(Winter_2016))

##### Print/export

-   

    [Create a
    book](/wiki/index.php?title=Special:Book&bookcmd=book_creator&referer=WebFund+2016W%3A+Tutorial+2 "Create a book or page collection")
-   

    [Download as
    PDF](/wiki/index.php?title=Special:Book&bookcmd=render_article&arttitle=WebFund+2016W%3A+Tutorial+2&oldid=20554&writer=rl "Download a PDF version of this wiki page")
-   

    [Printable
    version](/wiki/index.php?title=WebFund_2016W:_Tutorial_2&printable=yes "Printable version of this page [p]")

##### Search

 

##### Tools

-   

    [What links
    here](/wiki/index.php/Special:WhatLinksHere/WebFund_2016W:_Tutorial_2 "A list of all wiki pages that link here [j]")
-   

    [Related
    changes](/wiki/index.php/Special:RecentChangesLinked/WebFund_2016W:_Tutorial_2 "Recent changes in pages linked from this page [k]")
-   

    [Special
    pages](/wiki/index.php/Special:SpecialPages "A list of all special pages [q]")
-   

    [Permanent
    link](/wiki/index.php?title=WebFund_2016W:_Tutorial_2&oldid=20554 "Permanent link to this revision of the page")
-   

    [Cite this
    page](/wiki/index.php?title=Special:Cite&page=WebFund_2016W:_Tutorial_2&id=20554 "Information on how to cite this page")

[![GNU Free Documentation License
1.2](/wiki/skins/common/images/gnu-fdl.png)](http://www.gnu.org/copyleft/fdl.html)

[![Powered by
MediaWiki](/wiki/skins/common/images/poweredby_mediawiki_88x31.png)](//www.mediawiki.org/)

-   

    This page was last modified on 20 January 2016, at 15:31.
-   

    This page has been accessed 219 times.
-   

    Content is available under [GNU Free Documentation License
    1.2](http://www.gnu.org/copyleft/fdl.html) unless otherwise noted.
-   

    [Privacy
    policy](/wiki/index.php/Soma-notes:Privacy_policy "Soma-notes:Privacy policy")
-   

    [About
    Soma-notes](/wiki/index.php/Soma-notes:About "Soma-notes:About")
-   

    [Disclaimers](/wiki/index.php/Soma-notes:General_disclaimer "Soma-notes:General disclaimer")


