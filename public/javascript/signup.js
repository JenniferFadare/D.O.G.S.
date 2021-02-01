async function signupFormHandler(event) {
  event.preventDefault();

  // grab information from signup form
  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  // city needs to be added to sign up form, or we could find another way to allocate user's city
  const city = document.querySelector("#city-signup").value.trim();

  if (username && email && password) {
    // send information to database
    const response = await fetch("api/users/", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
        city,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("success");
      // login after signing up
      const response2 = await fetch("/api/users/login", {
        method: "post",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (response2.ok) {
        document.location.replace("/");
      } else {
        alert(response2.statusText);
      }
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
