document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('modal');
    var modalImg = document.getElementById('modal-img');
    var closeBtn = document.getElementsByClassName('close')[0];
    var galleryItems = document.getElementsByClassName('galeri-item');

    for (var i = 0; i < galleryItems.length; i++) {
        galleryItems[i].onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.getElementsByTagName('img')[0].src;
        }
    }

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    let prevScrollPos = window.pageYOffset;
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;

    window.onscroll = function() {
        const currentScrollPos = window.pageYOffset;
        if (prevScrollPos > currentScrollPos) {
            header.style.top = "0";
        } else {
            header.style.top = `-${headerHeight}px`;
        }
        prevScrollPos = currentScrollPos;
    }
});
