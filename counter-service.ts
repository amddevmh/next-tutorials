let counter = 0

export const counterService = {
    getCounterValue():Promise<number>{
        return new Promise((resolve, reject)=>{
            resolve(counter); 
        })
    },
    incrementCounter() {
        console.log('incrementCounter is called')
        return new Promise((resolve, reject) => {
            counter++;
            console.log("new counter value is",counter)
            resolve(counter); 
        });
    }
};