/*<script>
  let name = document.querySelector("#fname");
  console.log(name.value);

let useremail = document.querySelector("#email");
  console.log(useremail.value);

</script>
*/

// Get the button element
    const button = document.querySelector("#submitBtn");

    // Add click event listener
    button.addEventListener("click", () => {
      const name = document.querySelector("#fname").value;
      const useremail = document.querySelector("#email").value;

      console.log("Name:", name);
      console.log("Email:", useremail);

      // You can now "process" the info — e.g., send to a server
      // Example:
      /*
      fetch("/process", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, useremail })
      })
      .then(res => res.json())
      .then(data => console.log("Server response:", data))
      .catch(err => console.error("Error:", err));
      */
    });
