// Sign In Form Submission
document.getElementById('sign-in-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;
    
    // Basic client-side validation
    if (email && password) {
      alert('Sign In successful!');
      // Add further authentication logic here
    } else {
      alert('Please fill out all fields.');
    }
  });
  
  // Sign Up Form Submission
  document.getElementById('sign-up-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
  
    // Basic client-side validation
    if (name && email && password && confirmPassword) {
      if (password === confirmPassword) {
        alert('Sign Up successful!');
        // Add further registration logic here
      } else {
        alert('Passwords do not match.');
      }
    } else {
      alert('Please fill out all fields.');
    }
  });
  