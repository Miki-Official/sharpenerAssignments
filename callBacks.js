/*
const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li> ${post.title} </li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
    window.setTimeout(printMsg, 5000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error) resolve();
            else { reject('error: something went wrong') }

        }, 2000);
    });
}
//createPost({ title: 'Post Three', body: 'This is post three' })
//  .then(getPosts)
//.catch(err => console.log(err));
const promise1 = Promise.resolve('Hello world');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
    setTimeout(resolve, 2000, 'goodbye')
);
promise.finally([promise1, promise2, promise3]).then(values => console.log(values));*/
const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li> ${post.title} </li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
    window.setTimeout(printMsg, 5000);
}

function printMsg() {
    document.getElementById("op").innerHTML = '5 sec passed';
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}
createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);
createPost({ title: 'Post Four', body: 'This is post four' }, getPosts);