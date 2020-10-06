Node.js is an open-source, cross-platform, back-end, JavaScript runtime environment that executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm,[6] unifying web-application development around a single programming language, rather than different languages for server- and client-side scripts.

Though .js is the standard filename extension for JavaScript code, the name "Node.js" doesn't refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[7]

The Node.js distributed development project was previously governed by the Node.js Foundation,[8] and has now merged with the JS Foundation to form the OpenJS Foundation, which is facilitated by the Linux Foundation's Collaborative Projects program.[9]

Corporate users of Node.js software include GoDaddy,[10] Groupon,[11] IBM,[12] LinkedIn,[13][14] Microsoft,[15][16] Netflix,[17] PayPal,[18][19] Rakuten, SAP,[20] Voxer,[21] Walmart,[22] Yahoo!,[23] and Amazon Web Services.[24]

Node.js was written initially by Ryan Dahl in 2009,[25] about thirteen years after the introduction of the first server-side JavaScript environment, Netscape's LiveWire Pro Web.[26] The initial release supported only Linux and Mac OS X. Its development and maintenance was led by Dahl and later sponsored by Joyent.[27]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[28]

Dahl demonstrated the project at the inaugural European JSConf on 8 November 2009.[29][30][31] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[32]

In January 2010, a package manager was introduced for the Node.js environment called npm.[33] The package manager makes it easier for programmers to publish and share source code of Node.js packages and is designed to simplify installation, updating, and uninstallation of packages.[32]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[34] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[35] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[36]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[37][38] Unlike Node.js,[39] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[40]

In February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[41]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[42] This merge brought V8 ES6 features into Node.js and a long-term support release cycle.[43] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merge.[44]

In 2019, the JS Foundation and Node.js Foundation merged to form the OpenJS Foundation.

Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionalities.[29][32][45][46][47] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[32][46][48] Node.js's modules use an API designed to reduce the complexity of writing server applications.[32][46]

JavaScript is the only language that Node.js supports natively, but many compile-to-JS languages are available.[49] As a result, Node.js applications can be written in CoffeeScript,[50] Dart, TypeScript, ClojureScript and others.

Node.js is primarily used to build network programs such as Web servers.[45] The most significant difference between Node.js and PHP is that most functions in PHP block until completion (commands only execute after previous commands finish), while Node.js functions are non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[45]

Node.js is officially supported on Linux, macOS and Microsoft Windows 8.1 and Server 2012 (and later),[3] with tier 2 support for SmartOS and IBM AIX and experimental support for FreeBSD. OpenBSD also works, and LTS versions available for IBM i (AS/400).[53] The provided source code may also be built on similar operating systems to those officially supported or be modified by third parties to support others such as NonStop OS[54] and Unix servers.

Platform architecture

Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[32] Developers can create scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[32] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[32]

Node.js was built on top of the Google V8 JavaScript engine since it was open-sourced under the BSD license. It is proficient with internet fundamentals such as HTTP, DNS, TCP.[29] JavaScript was also a well-known language, making Node.js accessible to the web development community.[29]

Industry support

There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community, including NodeConf, Node Interactive, and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Feathers.js, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[32][55] Various packages have also been created for interfacing with other languages or runtime environments such as Microsoft .NET.[56]

Modern desktop IDEs provide editing and debugging features specifically for Node.js applications. Such IDEs include Atom, Brackets, JetBrains WebStorm,[57][58] Microsoft Visual Studio (with Node.js Tools for Visual Studio,[59] or TypeScript with Node definitions,[60][61][62][63]) NetBeans,[64] Nodeclipse Enide Studio[65] (Eclipse-based), and Visual Studio Code.[66][67] Certain online web-based IDEs also support Node.js, such as Codeanywhere, Codenvy, Cloud9 IDE, Koding, and the visual flow editor in Node-RED.

Node.js is supported across a number of cloud hosting platforms like Jelastic, Google Cloud Platform, AWS Elastic Beanstalk, Joyent and others.

Node.js is a JavaScript runtime environment that processes incoming requests in a loop, called the event loop.

Internals

Node.js uses libuv underhood to handle asynchronous events. Libuv is an abstraction layer for network and file system functionality on both Windows and POSIX-based systems such as Linux, macOS, OSS on NonStop, and Unix.

Threading

Node.js operates on a single-thread event loop, using non-blocking I/O calls, allowing it to support tens of thousands of concurrent connections without incurring the cost of thread context switching.[70] The design of sharing a single thread among all the requests that use the observer pattern is intended for building highly concurrent applications, where any function performing I/O must use a callback. To accommodate the single-threaded event loop, Node.js uses the libuv library—which, in turn, uses a fixed-sized thread pool that handles some of the non-blocking asynchronous I/O operations.[7]

A thread pool handles the execution of parallel tasks in Node.js. The main thread function call posts tasks to the shared task queue, which threads in the thread pool pull and execute. Inherently non-blocking system functions such as networking translate to kernel-side non-blocking sockets, while inherently blocking system functions such as file I/O run in a blocking way on their own threads. When a thread in the thread pool completes a task, it informs the main thread of this, which in turn, wakes up and executes the registered callback.

A downside of this single-threaded approach is that Node.js doesn't allow vertical scaling by increasing the number of CPU cores of the machine it is running on without using an additional module, such as cluster,[51] StrongLoop Process Manager,[71] or pm2.[72] However, developers can increase the default number of threads in the libuv thread pool. The server operating system (OS) is likely to distribute these threads across multiple cores.[73] Another problem is that long-lasting computations and other CPU-bound tasks freeze the entire event-loop until completion.[citation needed]

V8

V8 is the JavaScript execution engine which was initially built for Google Chrome. It was then open-sourced by Google in 2008. Written in C++, V8 compiles JavaScript source code to native machine code at runtime. [7] As of 2016, it also includes Ignition, a bytecode interpreter.

Package management

npm is the pre-installed package manager for the Node.js server platform. It installs Node.js programs from the npm registry, organizing the installation and management of third-party Node.js programs. Packages in the npm registry can range from simple helper libraries such as Lodash to task runners such as Grunt.

Unified API

Node.js can be combined with a browser, a database that supports JSON data (such as Postgres,[74] MongoDB, or CouchDB) and JSON for a unified JavaScript development stack. With the adaptation of what were essentially server-side development patterns such as MVC, MVP, MVVM, etc., Node.js allows the reuse of the same model and service interface between client side and server side.

Event loop

Node.js registers with the operating system so the OS notifies it of connections and issues a callback. Within the Node.js runtime, each connection is a small heap allocation. Traditionally, relatively heavyweight OS processes or threads handled each connection. Node.js uses an event loop for scalability, instead of processes or threads.[75] In contrast to other event-driven servers, Node.js's event loop does not need to be called explicitly. Instead, callbacks are defined, and the server automatically enters the event loop at the end of the callback definition. Node.js exits the event loop when there are no further callbacks to be performed.

WebAssembly

Node.js supports WebAssembly and as of Node 14 has an experimental support of WASI, the WebAssembly System Interface.

Native bindings

NodeJS provides a way to make "addons" via a C-based API called N-API which can be used to produce loadable .node modules from source code written in C/C++.[76] The modules can be directly loaded into memory and executed from within JS environment. The implementation of the N-API relies on internal C/C++ NodeJS and V8 objects requiring users to import (#include) NodeJS specific headers.[76] As NodeJS platform constantly evolves the API compatibility may get broken sometimes by a new version so third parties have introduced open-sourced С/С++ wrappers on top of the API that partially alleviate the problem. They simplify interfaces but as side effect they also introduce undue complexity which developers have to deal with. Even though the core functionality of Node.js resides in a JavaScript library, modules written in C++ can be used to enhance capabilities of applications or to improve performance.

In order to produce such modules one needs to have an appropriate C++ compiler and necessary headers (the latter are typically shipped with NodeJS itself): gcc, clang or MSVC++.

The N-API is similar to Java Native Interface.

In 2015, various branches of the greater Node.js community began working under the vendor-neutral Node.js Foundation. The stated purpose of the organization "is to enable widespread adoption and help accelerate development of Node.js and other related modules through an open governance model that encourages participation, technical contribution, and a framework for long-term stewardship by an ecosystem invested in Node.js' success."[77]

The Node.js Foundation Technical Steering Committee (TSC) is the technical governing body of the Node.js Foundation. The TSC is responsible for the core Node.js repo as well as dependent and adjacent projects. Generally the TSC delegates the administration of these projects to working groups or committees.[78] The LTS group that manages long term supported releases is one such group. Other current groups include Website, Streams, Build, Diagnostics, i18n, Evangelism, Docker, Addon API, Benchmarking, Post-mortem, Intl, Documentation, and Testing.[79]

In August 2017, a third of the TSC members resigned due to a dispute related to the project's code of conduct.[80]