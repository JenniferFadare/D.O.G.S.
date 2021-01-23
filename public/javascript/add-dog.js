async function newDogFormHandler(event) {
  event.preventDefault();

  // take user id from browser URL (should be /users/1 )
  const userId = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const name = document.querySelector('#dog-name').value.trim();
  const breed = document.querySelector('#dog-breed').value.trim();
  const temperament = document.querySelector("#dog-temperament").value.trim();

  const response = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({
      userId,
      name,
      breed,
      temperament,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-dog-form")
  .addEventListener("submit", newDogFormHandler);