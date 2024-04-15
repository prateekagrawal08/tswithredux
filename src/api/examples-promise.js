
export const promiseExample = () => {
    const p1 = Promise.resolve(50);
    const p2 = 200;
    const p3 = new Promise((resolve, reject)=> {
        setTimeout(()=>{
            resolve("geek");
        }, 100);
    })
    Promise.all([p1, p2, p3]).then((values)=>{
        console.log(values);
    }).catch((error)=>{
        console.log(error);
    });
}
