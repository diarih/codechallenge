export const getPosts = async () => {
  // EDIT HERE
  try {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await posts.json()
    const data = await json
    return data;
  } catch (error) {
    console.log('getPosts error', error);
    throw error;
  }
};

export const getPost = async (post_id) => {
  // EDIT HERE
}
export const getPostComments = async (post_id) => {
  try {
    const commentList = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    return commentList.json();
  }
  catch(error) {
    console.log('getPost',error);
    throw error;
  }
};

export const getAuthor = async (user_id) => {
  try {
    const author = await fetch('https://jsonplaceholder.typicode.com/users')
    return author.json();
  }
  catch(error) {
    console.log('getPost',error);
    throw error;
  }
};

export const getPostsByAuthor = async (author_id) => {
  // EDIT HERE
};

export const getRandomPic = async () => {
  try {
    const image = await fetch('https://source.unsplash.com/random/720x480');
    return image.url;
  } catch (error) {
    console.log('getRandomPic', error);
    throw error;
  }
};

export const getRandomProfile = async () => {
  try {
    const image = await fetch('https://source.unsplash.com/480x480/?profile');
    return image.url;
  } catch (error) {
    console.log('getRandomProfile', error);
    throw error;
  }
};
