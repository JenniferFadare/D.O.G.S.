async function editDogFormHandler(event) {
  event.preventDefault();

  const dog_id = document.querySelector("#edit-dog-id").value
  const name = document.querySelector("#edit-dog-name").value.trim();
  const breed = document.querySelector("#edit-dog-breed").value.trim();
  const temperament = document.querySelector("#edit-dog-temperament").value.trim();
  console.log(dog_id, name, breed, temperament)

  if (name || breed || temperament) {

    const response = await fetch(`/api/dog/${dog_id}`, {
      method: "put",
      body: JSON.stringify({
        name,
        breed,
        temperament
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