// Your JavaScript logic goes here
document.addEventListener('DOMContentLoaded', function() {
    // Example logic for displaying posts
    const posts = [
        { user: 'user1', content: 'This is post 1' },
        { user: 'user2', content: 'This is post 2' },
        { user: 'user3', content: 'This is post 3' }
    ];

    const postsContainer = document.getElementById('posts');

    function displayPosts() {
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h3>${post.user}</h3>
                <p>${post.content}</p>
            `;
            postsContainer.appendChild(postElement);
        });
    }

    displayPosts();
});