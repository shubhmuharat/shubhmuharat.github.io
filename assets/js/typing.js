document.addEventListener("DOMContentLoaded", function () {
  const text = document.getElementById("typed-author")
  if (!text) return

  const authorName = text.dataset.author || ""
  const speed = parseInt(text.dataset.speed, 10) || 25 // reduced default delay (ms)
  let i = 0

  // clear any existing content before typing
  text.innerHTML = ""

  function typeWriter() {
    if (i < authorName.length) {
      text.innerHTML += authorName.charAt(i)
      i++
      setTimeout(typeWriter, 30)
    }
  }

  typeWriter()
})
