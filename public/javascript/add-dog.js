async function addDogFormHandler(event) {
  event.preventDefault();

  // snag user_id from the URL (should be app.com/users/1 => 1)
  const user_id = document.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const name = document.querySelector("#dog-name").value.trim();
  const breed = document.querySelector("#dog-breed").value.trim();
  const temperament = document.querySelector("#dog-temperament").value.trim();

  if (user_id && name && breed && temperament) {
    const response = await fetch("api/dog", {
      method: "post",
      body: {
        user_id,
        name,
        breed,
        temperament,
      },
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("success");
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".dog-form")
  .addEventListener("submit", addDogFormHandler);
