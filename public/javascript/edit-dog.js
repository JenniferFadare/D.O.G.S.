async function editDogFormHandler(event) {
  event.preventDefault();

  const name = document.querySelector("#edit-dog-name").value.trim();
  const breed = document.querySelector("#edit-dog-breed").value.trim();
  const temperament = document.querySelector("#edit-dog-temperament").value.trim();

  if (name || breed || temperament) {


    const response = await fetch("api/dog/", {
      method: "put",
      body: JSON.stringify({
        // create function that only puts truthy variables in body
      }),
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
  .querySelector(".edit-dog-form")
  .addEventListener("submit", editDogFormHandler);