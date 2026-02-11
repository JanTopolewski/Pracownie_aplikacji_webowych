async function getPosts(){
    return await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
}