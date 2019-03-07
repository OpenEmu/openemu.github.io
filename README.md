openemu.github.io
=================

openemu.org website 

### Changes

**03/07/2019**

* Decompressed the HTML output
* Added a true asset pipeline so future HTML/CSS/JS revisions will not require a cache flush or hard refresh from the user
* Removed the BrowserSync option since it is not compatible with an asset pipeline. Now you will have to manually click refresh in your browser when developing/testing locally

**09/03/2018**  

* Complete rewrite
* Assets now fully compressed
* CSS is now responsive and functional using TailwindCSS
* Most data is templated via Vue.js
* Now uses a gulp build process ~~which includes a mini web server that auto reloads as you edit the CSS, JS, HTML~~

### Usage

**One-time:**

* Install node.js
* Clone repo
* Open a Terminal in the `/_src` folder
* Type: `npm install`

**From this point forward whenever you want to edit the base site:**

* Open `/index.html` in your browser of choice
* In your Terminal app type: `./node_modules/.bin/gulp`
* Edit the code in the `/_src` folder, which will trigger the build process and move the processed files to the root `/` area
* After each change manually refresh your browser loaded with the `/index.html` to see the result

**Editing/Updating Content**

* Content that could change often or that is repeatable is located in `/data.js` for ease of maintenance. You can edit this file without having to go through the entire build process.
