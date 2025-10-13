<script>
	function sendData() {
 	 	let form = document.getElementById("contact-info");
  		let data = new FormData(form);

  		fetch("https://example.com/submit", {
    	method: "POST",
    	body: data
  });


</script>