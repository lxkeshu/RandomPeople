const requestUrl = "https://randomuser.me/api/";
const xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl);

xhr.onreadystatechange = function () {
  try {
    console.log(
      "Request state changed. ReadyState:",
      xhr.readyState,
      "Status:",
      xhr.status
    );

    if (xhr.readyState === 4 && xhr.status === 200) {
      try {
        const data = JSON.parse(this.responseText);
        document.getElementById("userImage").src = data.results[0].picture.large;
        document.getElementById("userName").textContent = `${data.results[0].name.first} ${data.results[0].name.last}`;
        document.getElementById("userGender").textContent = `Gender: ${data.results[0].gender.charAt(0).toUpperCase() + data.results[0].gender.slice(1)}`;
        document.getElementById("userEmail").textContent = `Email: ${data.results[0].email}`;
        document.getElementById("userPhone").textContent = `Phone: ${data.results[0].phone}`;
        document.getElementById("userLocation").textContent = `Location: ${data.results[0].location.city}, ${data.results[0].location.country}`;
      } catch (e) {
        console.error("Error parsing JSON response:", e);
      }
    }
  } catch (e) {
    console.error("Error with request or response:", e);
  }
};

xhr.send();
