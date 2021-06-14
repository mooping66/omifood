$(document).ready(function () {
  /* -----TEST----- 
  $("h1").click(function () {
    $(this).css("background-color", "#ff0000");
  }); */

  /* For the sticky navigation http://imakewebthings.com/waypoints/guides/jquery-zepto/ ($.fn.waypoint)*/
  $(".js--section-features").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "25%",
    }
  );

  /* Scroll on buttons */
  $(".js--scroll-to-plans").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".js--section-plans").offset().top,
      },
      1000
    );
  });

  $(".js--scroll-to-start").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".js--section-features").offset().top,
      },
      1000
    );
  });

  /* Navigation scroll https://css-tricks.com/snippets/jquery/smooth-scrolling/ */
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                // Adding tabindex for elements not focusable
                $target.attr("tabindex", "-1");
                // Set focus again
                $target.focus();
              }
            }
          );
        }
      }
    });

  /* Animations on scroll https://github.com/animate-css/animate.css (fadeIn)*/
  $(".js--wp-1").waypoint(
    function () {
      $(".js--wp-1").addClass("animate__animated animate__fadeIn");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-2").waypoint(
    function () {
      $(".js--wp-2").addClass("animate__animated animate__fadeInUp");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-3").waypoint(
    function () {
      $(".js--wp-3").addClass("animate__animated animate__fadeIn");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-4").waypoint(
    function () {
      $(".js--wp-4").addClass("animate__animated animate__pulse");
    },
    {
      offset: "50%",
    }
  );

  /* Mobile navigation */
  $(".js--nav-icon").click(function () {
    var nav = $(".js--main-nav");
    // var icon = $(".js--nav-icon ion-icon");

    nav.slideToggle(200);

    if ($("#nav-mobile").attr("name") == "menu-outline") {
      $("#nav-mobile").attr("name", "close-outline");
    } else if ($("#nav-mobile").attr("name", "close-outline")) {
      $("#nav-mobile").attr("name", "menu-outline");
    }
  });
});
