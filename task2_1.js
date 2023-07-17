document.getElementById("registration-form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    const userData = {
      name: name,
      email: email,
      password: password
    };
  
    // Send registration data to the server
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "registration_endpoint_url", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          // Registration success
          document.getElementById("registration-form").classList.add("hidden");
          document.getElementById("registration-success").classList.remove("hidden");
        } else {
          // Registration error
          alert("Registration failed. Please try again later.");
        }
      }
    };
    xhr.send(JSON.stringify(userData));
  });
  