openemu.github.io
=================

openemu.org website 

### Changes

**05/17/2019**

* Removed build requirement
* Switched to Twind css-in-js

**03/07/2019**

* ~~Decompressed the HTML output~~
* ~~Added a true asset pipeline so future HTML/CSS/JS revisions will not require a cache flush or hard refresh from the user~~
* ~~Removed the BrowserSync option since it is not compatible with an asset pipeline. Now you will have to manually click refresh in your browser when developing/testing locally~~

**09/03/2018**  

* ~~Complete rewrite~~
* ~~Assets now fully compressed~~
* ~~CSS is now responsive and functional using TailwindCSS~~
* ~~Most data is templated via Vue.js~~
* ~~Now uses a gulp build process (which includes a mini web server that auto reloads as you edit the CSS, JS, HTML)~~

### Usage

* Clone repo
* Edit detail/info located in `/data.js` for ease of maintenance