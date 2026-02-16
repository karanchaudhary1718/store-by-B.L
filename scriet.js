// Smooth scroll
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Send message (email)
function sendMessage(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const mailtoLink =
    `mailto:karanchaudhary1817@gmail.com?subject=Message from ${name}&body=${message}%0A%0AFrom: ${email}`;

  window.location.href = mailtoLink;
}
