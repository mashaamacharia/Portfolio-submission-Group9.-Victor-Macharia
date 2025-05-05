function updateGreeting() {
    const greetingElement = document.getElementById("greeting");
    const hour = new Date().getHours();
  
    let message = "Hello!";
    if (hour < 12) {
      message = "Good morning!";
    } else if (hour < 17) {
      message = "Good afternoon!";
    } else {
      message = "Good evening!";
    }
  
    greetingElement.textContent = message;
  }
  
  updateGreeting();
  