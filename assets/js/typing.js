document.addEventListener("DOMContentLoaded", function () {
  const text = document.getElementById("typed-author")
  if (!text) return

  const authorName = text.dataset.author || ""
  const contextText = text.dataset.context || "" // optional static prefix
  // allow fractional ms via parseFloat; defaults follow user's request
  const charDelay = parseFloat(text.dataset.speedChar) || 0.1 // ms per character (default 0.1)
  const lineDelay = parseFloat(text.dataset.speedLine) || 0.05 // ms when hitting a newline (default 0.05)
  let i = 0

  // render context and a separate span for the typed text (for accessibility and stable prefix)
  const prefix = contextText ? contextText + " " : ""
  text.innerHTML = `<span class="typing-context">${prefix}</span><span class="typing-text" aria-live="polite"></span>`
  const typedSpan = text.querySelector(".typing-text")
  typedSpan.innerHTML = ""

  function typeWriter() {
    if (i >= authorName.length) return

    const ch = authorName.charAt(i)
    let delay = charDelay

    if (ch === "\n") {
      // insert a real line break node for correct rendering
      typedSpan.appendChild(document.createElement("br"))
      delay = lineDelay
    } else {
      typedSpan.appendChild(document.createTextNode(ch))
    }

    i++
    setTimeout(typeWriter, delay)
  }

  typeWriter()
})
