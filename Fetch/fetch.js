const requestUrl = "https://randomuser.me/api/";

fetch(requestUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const user = data.results[0];

    document.getElementById('userImage').src = user.picture.large;
    document.getElementById('userName').textContent = `${user.name.first} ${user.name.last}`;
    document.getElementById('userGender').textContent = `Gender: ${user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}`;
    document.getElementById('userEmail').textContent = `Email: ${user.email}`;
    document.getElementById('userPhone').textContent = `Phone: ${user.phone}`;
    document.getElementById('userLocation').textContent = `Location: ${user.location.city}, ${user.location.country}`;
  })
  .catch(error => {
    console.error('Error fetching user data:', error);
  });
