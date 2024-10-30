//task 01 : Iterating with Async/Await: Write an async function iterateWithAsyncAwait that takes an array of values and logs each value with a delay of 1 second between logs.
async function iterateWithAsyncAwait(array) {
    for (const item of array) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(item);
    }
}

// Test the function
iterateWithAsyncAwait([1, 2, 3, 4, 5]);




//task 02: Awaiting a Call: Create an async function awaitCall that simulates fetching data from an API. Use await to wait for the API response and then log the data
async function awaitCall() {
    const fetchData = () => new Promise(resolve => {
        setTimeout(() => resolve({ data: 'Fetched data' }), 2000);
    });

    const response = await fetchData();
    console.log(response.data);
}

// Test the function
awaitCall();

//task 03:
// Handling Errors with Async/Await: Modify the awaitCall function to handle errors gracefully. If the API call fails, catch the error and log a user-friendly error message.
//Chaining Async/Await: Write a function chainedAsyncFunctions that calls three separate async functions sequentially. Each function should log a message after a delay of 1 second. Chain these functions using await.

async function awaitCall() {
    const fetchData = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) reject(new Error('Failed to fetch data'));
            else resolve({ data: 'Fetched data' });
        }, 2000);
    });

    try {
        const response = await fetchData();
        console.log(response.data);
    } catch (error) {
        console.log('An error occurred:', error.message);
    }
}

// Test the function 
awaitCall();
