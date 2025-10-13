<script>
  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // stop normal form submission

    // Collect the form data
    const formData = new FormData(this);

    // Send it somewhere (example: your server endpoint)
    fetch("https://example.com/submit", {
      method: "POST",
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      console.log("Success:", data);
      alert("Form submitted successfully!");
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Something went wrong!");
    });
  });
</script>
