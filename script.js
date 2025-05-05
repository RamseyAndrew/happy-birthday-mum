document.getElementById('confettiButton').addEventListener('click', () => {
    for (let i = 0; i < 150; i++) {
      createConfetti();
    }
  });
  
  function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    const colors = ["red","yellow","green","blue","pink","purple","orange","teal","bisque"];
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.animationDuration = `${Math.random() * 4}s`;
    confetti.style.opacity = Math.random();
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
  
    document.getElementById('confetti-container').appendChild(confetti);
  
    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
  
  // Add basic confetti styles
  const style = document.createElement('style');
  style.innerHTML = `
    .confetti {
      position: absolute;
      width: 10px;
      height: 20px;
      top: -20px;
      animation: fall linear;
    }
  
    @keyframes fall {
      to {
        transform: translateY(100vh) rotate(720deg);
      }
    }
  `;
  document.head.appendChild(style);
  