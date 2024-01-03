        window.onscroll = function () {
            scrollFunction();
        };

        function scrollFunction() {
            var scrollToTopBtn = document.getElementById("scrollToTopBtn");
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollToTopBtn.style.display = "block";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        }

        function scrollToTop() {
            var scrollStep = -window.scrollY / (1000 / 15);
            function scroll() {
                if (window.scrollY > 0) {
                    window.scrollBy(0, scrollStep);
                    requestAnimationFrame(scroll);
                } else {
                    scrollTo(0, 0);
                }
            }
            scroll();
        }
