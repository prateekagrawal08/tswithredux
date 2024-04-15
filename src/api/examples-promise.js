
export const promiseExample = () => {
    p1 = Promise.resolve(50);
    p2 = 200;
    p3 = new Promise((resolve, reject)=> {
        setTimeout(()=>{
         resolve();
        }, 100);
    })
    Promise.all(p1, p2, p3).then((values)=>{
        console.log(values);
    });
}
