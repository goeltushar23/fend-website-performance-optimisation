## Website Performance Optimization portfolio project

### Getting started

1. Check out the repository

2. This project uses gulp to build tasks. The build files have been provided in the `dist` folder already. But if you want to make some changes and test, then run the following commands:
  
  ```bash
  $> npm install
  $> gulp build
  ``` 

3. To inspect the site on your desktop/phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

3. Open a browser and visit localhost:8080/dist/index.html
4. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  ```

5. Copy the public URL ngrok gives you and try running it(__ngrok public URL__/dist/index.html) through [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)


### Change Log

#### Part 1: Changes done to Optimize PageSpeed Insights score for **index.html**

Following changes have been done to achieve PageSpeed score for 94/95 on Mobile/Desktop.

* Optimised images using ImageOptim to remove bloated metadata and resized the images according to page requirements.

* Minified and Inlined `style.css`

* added `media="print"` to `print.css`

* Used Gulp tools to `minify HTML` file

* Minified and inlined `perfmatters.js`

* Added `async` to the Google analytics script so it doesn't block rendering

* Replaced the Google Font CSS file request to a JS script at the bottom of the body, so downloading the fonts will not block rendering.


#### Part 2: Changes done to Optimize Frames per Second in pizza.html

* **main.js**: In `updatePositions` function moved `document.body.scrollTop` out of forLoop to render the page with 60fps while scrolling

* **main.js**: Changed `resizePizzas` function to reduce the time (< 5 ms) to resize pizzas
