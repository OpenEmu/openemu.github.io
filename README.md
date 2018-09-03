openemu.github.io
=================

openemu.org website 

### Changes

**09/03/2018**  

* Complete rewrite
* Assets now fully compressed
* CSS is now responsive and functional using TailwindCSS
* Most data is templated via Vue.js
* Now uses a gulp build process which includes a mini web server that auto reloads as you edit the CSS, JS, HTML

### Usage

* Install node.js
* Clone repo
* Open a Terminal in the `/_src` folder
* Type: `npm install`
* Type: `./node_modules/.bin/gulp`
* Edit the code in the `/_src` folder to trigger the build process which moves the processed files to the `../` folder
* Content that could change often or that is repeatable is located in `/data.js`