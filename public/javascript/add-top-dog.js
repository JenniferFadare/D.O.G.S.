async function topDogInputHandler(event) {
  event.preventDefault();

  // snag user_id from the URL (should be app.com/users/1 => 1)
  const user_id = document.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const dog_id = document.querySelector("#top-dog-picker").value;

  if (user_id && dog_id) {
    const response = await fetch("/api/topdog/", {
      method: "post",
      body: JSON.stringify({
        user_id,
        dog_id,
      }),
      headers: {
        "Content-Type": "application/json"
      },
    }) ;

    if (response.ok) {
      console.log("success");
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

document 
  .querySelector(".top-dog-form")
  .addEventListener("submit", topDogInputHandler);