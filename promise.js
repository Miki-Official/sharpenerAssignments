/*console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie = async() => {

    const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000);
    });
    const getPopcorn = new Promise((resolve, reject) => {
        setTimeout(() => resolve('popcorn'), 3000);
    });

    const getCandy = new Promise((resolve, reject) => {
        setTimeout(() => resolve('candy'), 3000);
    });

    const getCoke = new Promise((resolve, reject) => {
        setTimeout(() => resolve('coke'), 3000);
    });
    const getButter = new Promise((resolve, reject) => {
        setTimeout(() => resolve('butter'), 3000);
    });

    let ticket = await person3PromiseToShowTicketWhenWifeArrives;

    let [popcorn, candy, coke, butter] =
    await Promise.all([getPopcorn, getCandy, getCoke, getButter]);

    console.log(`got ${popcorn}, ${candy}, ${coke},${butter}`);


    return ticket;

};

preMovie().then((t) => console.log(`person4 shows ${t}`));

console.log('person4 shows ticket');*/
console.log('person1 shows ticket');
console.log('person2 shows ticket');

const promiseWifeBringTicket = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ticket');
    }, 3000)
});

const getPopcorn = promiseWifeBringTicket.then((t) => {
    console.log('husband:we should go in');
    console.log('wife: i am not hungry');
    rreturn new Promise((resolve, reject) => resolve('${t} popcorn'))
});
const getButter = getPopcorn.then((t) => {
    console.log('husband:we should go in');
    console.log('wife:I need butter on my popcorn');
    return new Promise((resolve, reject) => ('${t} butter'));
});

console.log('person4 shows ticket');
console.log('person5 shows ticket');
