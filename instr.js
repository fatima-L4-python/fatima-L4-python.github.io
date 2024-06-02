function openModal(character) {
    var modalId = character + "Modal";
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
  }

  function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
  }

  var findMoreButtons = document.querySelectorAll('.find-more');
  findMoreButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      var characterId = this.getAttribute('data-character');
      openModal(characterId);
    });
  });

  var closeButtons = document.querySelectorAll('.close');
  closeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      var modalId = this.parentNode.id;
      closeModal(modalId);
    });
  });

let mybutton = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "flex"; 
    } else {
        mybutton.style.display = "none";
    }
}

mybutton.addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
