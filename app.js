// Sample data

  
const posts = [
  // Add more posts here...

];


//adding user Postings to the posts array.
  
const handlePost = (event) => {
  event.preventDefault()
  const inp = document.getElementById('input');
  if (inp.value == '') {
    alert("Please share something to add ON!")
  } else {
    posts.push({
      title: inp.value.toLowerCase(),
      like: 0,
      comments: []
    });
   
    displayPosts();
    inp.value = ''
  }
  
}
//function for likes
const handleLike = (postId) => {
  posts[postId].like++; // Increment the like count for the corresponding post
  
  displayPosts(); // Update the UI with the updated like count
};

const handleComment = (postId) => {
  const commentInput = document.getElementById(`comment-${postId}`);
  const comment = commentInput.value.trim();
  if (comment !== '') {
    posts[postId].comments.push(comment); // Add comment to the corresponding post
    displayPosts(); // Update the UI with the new comment
  }
};

//function to display posts
function displayPosts() {
  const postsContainer = document.getElementById("posts");
  postsContainer.innerHTML = '';

  posts.forEach((post,index) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `<h2>${post.title}</h2>
                            <p>Likes: ${post.like}</p>`;

    const likeBtn = document.createElement('button');
    likeBtn.className = 'likeBtn';
    likeBtn.innerHTML = '<span class="material-symbols-outlined">favorite</span>';
    likeBtn.style.border = 'none'
    likeBtn.style.color = 'red'
    likeBtn.style.background = 'transparent'
    likeBtn.style.outline = 'none'
    const label = document.createElement('label')
    label.textContent = 'comment'
    
    likeBtn.addEventListener('click', () => handleLike(index))
    const d = document.createElement('div')
    d.id = 'c-d'
    const comment = document.createElement('textarea');
    comment.id = `comment-${index}`
    const commentBtn = document.createElement('button')
    commentBtn.className = 'c-b'
    commentBtn.textContent = 'comment'
    commentBtn.addEventListener('click', () => handleComment(index));

    const commentsContainer = document.createElement('div');
    commentsContainer.classList.add('comments-container');
    
    post.comments.forEach(comment => {
      const p = document.createElement('p');
      p.id = 'commentPara'
      p.textContent = `Comment: ${comment}`;
      commentsContainer.appendChild(p);
    });

    postElement.appendChild(likeBtn);
    postElement.appendChild(d)
    d.appendChild(comment);
    d.appendChild(commentBtn);
    postElement.appendChild(commentsContainer);

    postsContainer.appendChild(postElement);
  });

}

const postBtn = document.querySelector('#postBtn');
postBtn.addEventListener('click', handlePost)
 








