const form = document.getElementById('enrollmentForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission for now
  // You can add further logic here to handle form submission (e.g., AJAX request)
  
  // For demo purposes, just log the form data
  const formData = new FormData(form);
  console.log('Form Data:', formData);
  
  // Optional: Show a success message or redirect to another page
});
