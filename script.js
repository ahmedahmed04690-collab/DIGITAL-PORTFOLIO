// Form Handling Script

document.getElementById("infoForm").addEventListener("submit", function(event) {

    event.preventDefault();

    // Collect values

    let name = document.getElementById("username").value;

    let email = document.getElementById("useremail").value;

    let message = document.getElementById("message").value;

    // Display output

    let outputDiv = document.getElementById("formOutput");

    outputDiv.innerHTML = `

        <h3>Submitted Information:</h3>

        <p><b>Name:</b> ${name}</p>

        <p><b>Email:</b> ${email}</p>

        <p><b>Message:</b> ${message}</p>

    `;

    // Clear form

    document.getElementById("infoForm").reset();

});