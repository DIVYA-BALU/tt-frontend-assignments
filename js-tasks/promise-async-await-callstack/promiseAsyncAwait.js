// function tatkalBook() {
//     return new Promise((resolve, reject) => {
//         let status = true;

//         if (status)
//             resolve(500)

//         else reject()
//     }) 
// }

// tatkalBook().then((amount) => console.log(`Ticket Booked Rs.${amount}`))           
// .catch(() => console.log("Failure"))      



let reachA = new Promise((resolve, reject) => {
    const reached = false;

    if (reached)
        setTimeout(resolve, 3000, "PersonA reached")

    else reject("PersonA not reached")
})

let reachB = new Promise((resolve, reject) => {
    const reached = true;

    if (reached)
        setTimeout(resolve, 1000, "PersonB reached")

    else reject("PersonB not reached")
})

let reachC = new Promise((resolve, reject) => {
    const reached = false;

    if (reached)
        setTimeout(resolve, 2000, "PersonC reached")

    else reject("PersonC not reached")
})

// all() - WAITS UNTIL ALL THE PROMISES PASS SUCCESSFULLY AND DISPLAY EVERYTHING, 
//         OR IF A CERTAIN CONDITION FAILS THEN RETURN THE PARTICULAR FAILED CONDITION IMMEDIATELY

// allSettled() - RETURNS EACH OUTPUT STATUS 

// any() - RETURNS THE FIRST SUCCESS CONDITION, FAILS AT ALL THE CASES FAILURE

// race() - RETURNS THE FIRST SETTLED CONDITON IS TRUE OR FALSE

Promise.allSettled([reachA, reachB, reachC])
.then((message) => console.log(message))
.catch((message) => console.log(message));  

console.log('Async Await: ');

async function checkStatus() {
    console.log('Hi');

    try {
        result = await reachA;
        console.log(result);
    }

    catch(err) {
        console.log(err);
    }

    console.log('Bye');
}

checkStatus();