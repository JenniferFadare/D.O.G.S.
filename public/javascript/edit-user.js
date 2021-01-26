async function editUserFormHandler(event) {
  event.preventDefault();

  // grab information from signup form
  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  // city needs to be added to sign up form, or we could find another way to allocate user's city
  const city = document.querySelector("#city-signup").value.trim();

  if (username || email || password || city) {
    const response = await fetch("api/users/", {
      method: "put",
      body: JSON.stringify({
        // create function to only put truthy values into body
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("success");
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".edit-user-form")
  .addEventListener("submit", signupFormHandler);