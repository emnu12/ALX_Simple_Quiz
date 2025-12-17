const apiUrl = "https://jsonplaceholder.typicode.com/users";

async function fetchUserData() {
  const dataContainer = document.getElementById("api-data");

  try {
    const response = await fetch(apiUrl);
    const users = await response.json();

    dataContainer.innerHTML = "";

    const userList = document.createElement("ul");

    users.forEach(function (user) {
      const listItem = document.createElement("li");
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    dataContainer.appendChild(userList);

  } catch (error) {
    dataContainer.textContent = "Error loading user data.";
  }
}

document.addEventListener("DOMContentLoaded", fetchUserData);
