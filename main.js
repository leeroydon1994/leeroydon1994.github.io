$(document).ready(function() {
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

    // Trigger fade-in effect of Animate CSS when scrolling to specific y-coordinate in 'About' Section
    $(document).scroll(function () { 
        var windowHeight = window.innerHeight;
        if ($(this).scrollTop() > windowHeight * 0.5) {
            $(".intro-box")
                .css("visibility", "visible")
                .addClass("animate__animated animate__fadeInUp")
        } 
        if ($(this).scrollTop() > windowHeight * 1) {
            $(".bootcamp-box")
                .css("visibility", "visible")
                .addClass("animate__animated animate__fadeInUp")
        } 
        if ($(this).scrollTop() > windowHeight * 1.5) {
            $(".thought-box")
                .css("visibility", "visible")
                .addClass("animate__animated animate__fadeInUp")
        } 
    })

    // Carousel cycling interval
    $('.carousel').carousel({
        interval: 10000
      })

    // Automatic update of the year in the footer
    let year = new Date().getFullYear();
    $(".year").text(`${year}`);
})
