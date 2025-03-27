document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('typed-text');
  const text = 
"I'm a software developer who enjoys solving problems and building practical, well-designed applications. I focus on writing clean, efficient code and continuously learning to improve my skills.";
  let index = 0;
  const speed = 25; // Typing speed in milliseconds

  function typeWriter() {
    if (index < text.length) {
      element.innerHTML += text.charAt(index); // Add one character at a time
      index++;
      setTimeout(typeWriter, speed); // Continue typing with delay
    }
  }

  typeWriter(); // Start typing the text
});

