$(document).ready(function () {
  // Fade-in effect of jumbotron
  setTimeout(() => {
    $(".jumbotron").css("visibility", "visible").addClass("animate__animated animate__fadeIn");
  }, 1000);

  // Fade-in effect of navbar
  setTimeout(() => {
    $(".navbar").css("visibility", "visible").addClass("animate__animated animate__fadeIn");
  }, 1500);

  // Change background image with time interval
  var coverImages = [
    "../assets/IMG_8914-9093-5.jpg",
    "../assets/IMG_6899.jpg",
    "../assets/IMG_8609.jpg",
    "../assets/IMG_6726.jpg",
  ];
  var i = 0;
  setInterval(() => {
    $(".cover-wrapper").css("background-image", `url('${coverImages[i]}')`);
    i++;
    if (i == coverImages.length) {
      i = 0;
    }
  }, 10000);

  // Change in background color of the navbar when scrolling
  $(document).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("#navbar").removeClass("bg-transparent").css("background-color", "#1d1d1ded");
    } else {
      $("#navbar").addClass("bg-transparent").css("background-color", "");
    }
  });

  // Trigger fade-in effect of Animate CSS when scrolling to specific y-coordinate in 'About' Section
  $(document).scroll(function () {
    var windowHeight = window.innerHeight;
    if ($(this).scrollTop() > windowHeight * 0.5) {
      $(".intro-box").css("visibility", "visible").addClass("animate__animated animate__fadeInUp");
    }

    if ($(this).scrollTop() > windowHeight * 0.7) {
      $(".bootcamp-box-1").css("visibility", "visible").addClass("animate__animated animate__fadeInUp");
    }
    if ($(this).scrollTop() > windowHeight * 1) {
      $(".bootcamp-box-2").css("visibility", "visible").addClass("animate__animated animate__fadeInUp");
    }
    if ($(this).scrollTop() > windowHeight * 1.3) {
      $(".bootcamp-box-3").css("visibility", "visible").addClass("animate__animated animate__fadeInUp");
    }
    if ($(this).scrollTop() > windowHeight * 1.6) {
      $(".thought-box").css("visibility", "visible").addClass("animate__animated animate__fadeInUp");
    }
  });

  // Carousel cycling interval
  $(".carousel").carousel({
    interval: 10000,
  });

  // Automatic update of the year in the footer
  let year = new Date().getFullYear();
  $(".year").text(`${year}`);
});
