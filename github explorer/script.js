document.getElementById('searchBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const userDetails = document.getElementById('userDetails');
    const errorMessage = document.getElementById('errorMessage');
    
    if (username) {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('User not found');
                }
            })
            .then(data => {
                userDetails.classList.remove('hidden');
                errorMessage.classList.add('hidden');
                
                document.getElementById('userName').textContent = `Name: ${data.name || 'N/A'}`;
                document.getElementById('repoCount').textContent = `Public Repositories: ${data.public_repos}`;
                document.getElementById('followersCount').textContent = `Followers: ${data.followers}`;
                document.getElementById('profileLink').href = data.html_url;
            })
            .catch(error => {
                userDetails.classList.add('hidden');
                errorMessage.classList.remove('hidden');
            });
    } else {
        alert('Please enter a GitHub username');
    }
});
