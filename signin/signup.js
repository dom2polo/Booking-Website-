document.addEventListener('DOMContentLoaded', function () {
    var signupForm = document.getElementById('signupForm');
    var passwordInput = document.getElementById('password');
    var repeatPasswordInput = document.getElementById('repeat-password');
    var passwordMismatchMessage = document.getElementById('passwordMismatch');
  
    signupForm.addEventListener('submit', function (event) {
      // Check if passwords match
      if (passwordInput.value !== repeatPasswordInput.value) {
        // Prevent form submission
        event.preventDefault();
  
        // Show error message
        passwordMismatchMessage.innerText = 'Passwords do not match';
      } else {
        // Clear error message if passwords match
        passwordMismatchMessage.innerText = '';
  
        // For simplicity, you might want to perform actual authentication here
        // You can send the data to your server using AJAX or fetch API for real authentication
        alert('Signup successful!');
      }
    });
  });
  