const form = document.querySelector('.github-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Retrieve the value of the search input field
  const searchInput = document.getElementById('search').value;
  console.log(searchInput);

  // Construct the URL for the GitHub User Search Endpoint
  const url = `https://api.github.com/search/users?q=${searchInput}`;
  console.log(url);
  //fetch
  fetch(url)
.then(response=>response.json())
.then(data=>{
    createUserList(data.items);
})
})


//create user card 
function createUserList(data){
    const userList = document.getElementById('user-list');

    for (const user of data) {
        const username = user.login;
        const avatarUrl = user.avatar_url;
        const profileUrl = user.html_url;
    
        // HTML elements for user
        const userElement = document.createElement('div');
        const usernameElement = document.createElement('h3');
        const avatarElement = document.createElement('img');
        const profileLinkElement = document.createElement('a');
    
        // Set values and attributes for the elements
        usernameElement.textContent = username;
        avatarElement.src = avatarUrl;
        avatarElement.alt = `${username}'s avatar`;
        profileLinkElement.href = profileUrl;
        profileLinkElement.textContent = 'View Profile';
    
        // Append elements to the user list container
        userElement.appendChild(usernameElement);
        userElement.appendChild(avatarElement);
        userElement.appendChild(profileLinkElement);
        userList.appendChild(userElement);
      }
    }


    /*
    fetch())
    .then(response=>response.json())
    .then(data=>{
        createUserList(data.items);
    })
    */