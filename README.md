# About-me site

This About-me website mainly utilise HTML/CSS, Javascript/JQuery, Bootstrap, Animate CSS and Smooth Scroll plug-in, as well as Google Fonts, Adobe Fonts and Font Awesome.

The whole site is in responsive design. The elements automatically change their positions with respect to the width of the window.

Each main part contains id with prefix 'nav-'.

Favicon is made for this website, from https://www.favicon.cc/.

Vector images are obtained by license-free Undraw: https://undraw.co/illustrations.

## 'Cover' Section, Navbar

This website consists of four main parts. The one on the top is the Cover section, which contains a jumbotron, with all elements horizontally centered. 

Fade-in animation is used in displaying the fixed navigation bar at the top and the jumbotron, powered by the setTimeOut() method. For each node, after the specific time period, the class name for fade-in effect is added, and the 'visibility' property is changed to 'visible' so that it 'actually' appears.

``` Javascript
    // Fade-in effect of jumbotron
    setTimeout(() => {
        $(".jumbotron")
        .css("visibility", "visible")
        .addClass("animate__animated animate__fadeIn") 
    }, 1000);

    // Fade-in effect of navbar
    setTimeout(() => {
        $(".navbar")
        .css("visibility", "visible")
        .addClass("animate__animated animate__fadeIn") 
    }, 1500);
```


The links at the right of the navbar cooperate with Smooth Scroll plug-in, enabling smooth scrolling to the respective section (id with prefix 'nav-'). 

By adding 'header:"[data-scroll-header]"' to the propety of Smooth Scroll, and 'data-scroll-header' into the <nav> tag, the plug-in automatically offset scroll distances by the header height, and prevents anchor links from scrolling behind the navbar. 
    
Also, in the script line of Smooth Scroll, 'a[href*="#nav"]' replaces the default one to ensure ONLY the links of the navbar utilise the function of Smooth Scroll, excluding the two buttons in the album carousel.

```Javascript
    var scroll = new SmoothScroll('a[href*="#nav"]', {
      speed: 1500,
      speedAsDuration: true,
      header:'[data-scroll-header]'
    });
  </script>

```


By default, when the width of the window decreases to 768 pixels or below, the links are replaced by a menu icon, with the links being hidden.

Besdies, the background color of the navbar changes from transparent to dark black with little opacity when scrolling down, and change back when scrolling back to the top. It is made by 'scroll()' method of JQuery. Two conditions are set, one is the situation when the page is scrolled by more than 50 pixels from the top, and one opposite.

(But after fixing it, I found that I can actually use Animate on Scroll code. I am replacing the code for the coming version.🥺)

```Javascript
    // Change in background color of the navbar when scrolling
    $(document).scroll(function () { 
        if ($(this).scrollTop() > 50) {
            $("#navbar")
                .removeClass("bg-transparent")
                .css("background-color", "#1d1d1ded")
        } else {
            $("#navbar")
                .addClass("bg-transparent")
                .css("background-color", "")
        }
    })
```

The color of the navbar link changes according to the scrolling location by default, and transition effect is added for beautification.

Transition effects of the navbar and the background images are made by CSS lines. Using CSS is much easier to tackle (-webkit-/-moz/-o- prefixes are also used for compatability of different browsers).

```CSS
.navbar {
    /* ... */
    transition: background-color 0.5s ease;
    -webkit-transition: background-color 0.5s ease;
    -moz-transition:background-color 0.5s ease;
    -o-transition:background-color 0.5s ease;
    /* ... */
  }
```


The background image changes every 10 seconds with fade-in and fade-out transition effect. This can be done by setInterval() method to change the url link of the 'background-image' property in CSS.

```Javascript
    // Change background image with time interval
        var coverImages = [
            "IMG_8914-9093-5.jpg",
            "IMG_6899.jpg",
            "IMG_8609.jpg",
            "IMG_6726.jpg"
        ];
        var i = 0;
        setInterval(() => {
            $(".cover-wrapper").css("background-image", `url('${coverImages[i]}')`)
            i++;
            if (i == coverImages.length) {
                i = 0;
            }
        }, 10000);
```


## 'About' Section

The About Section divdes into three minor parts, explaining my background, the reasons of joining this bootcamp, and my expectations. 

Fade-in animation is again applied in each minor part. Rather than setting the pixels of scrolling in order to trigger the animation, I adjust the thresold by using 'window.innerHeight', in order to assign the values with respective to the current height of the window. They come out one by one when scrolling down gently. As aforementioned, the 'visibility' propety is changed from 'hidden' to 'visible', to ensure they appear by fade-in effect.

```Javascript
    // Trigger fade-in effect of Animate CSS when scrolling to specific y-coordinate in 'About' Section
    $(document).scroll(function () { 
        var windowHeight = window.innerHeight;
        if ($(this).scrollTop() > windowHeight * 0.5) {
            $(".intro-box")
                .css("visibility", "visible")
                .addClass("animate__animated animate__fadeInUp")
        } 
        ...   
    } 
```


For each minor part, I apply bootstrap's grid system to arrange the postions of the text and the image. In order to display them with a narrower width, only 10 columns are used. 

## 'Hobbies' Section

This section consists of two divs, one is to display my art works, and one is a photo. In this part I choose not to add any animation stuff, as too much animations may undermine the user experience, and get annoyed easily.

Each photo div seizes half of the height of the window (i.e. 50vh) at maximum. The widths of two divs are set to 100% to ensure the images adjust their seizes automatically with respect to teh width of the window.

```CSS
    .drawing, .photography {
      max-height: 50vh;
      width: 100%;
      object-fit: cover;
    }
```


## 'Album' Section

Bootstrap's carousel module is utilised. The widths of the carousel and the photos inside are set to 100%, making the whole carousel responsive. The photos are cycled with an interval of 10 seconds by adjusting in Javascript.

```Javascript
    // Carousel cycling interval
    $('.carousel').carousel({
        interval: 10000
      })
```


## Footer

In the footer section, the icons are arranged by Bootstrap's grid system. When the window gets narrower, the icons reposition from 1x4 to 2x2, and finally 4x1.

```HTML
     <div class="container-icon text-center col-sm-12 col-md-6 col-lg">
```


In the copyright claim sentence, the year refresh itself by getting the current year value in Javascript.

```Javascript
    // Automatic update of yhe year in the footer
    let year = new Date().getFullYear();
    $(".year").text(`${year}`);
```

