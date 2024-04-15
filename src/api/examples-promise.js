export const promiseExample = () => {
  const p1 = Promise.resolve(50);
  const p2 = 200;
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("testing");
    }, 100);
  });
  Promise.all([p1, p2, p3]).then((result) => {
    console.log(result);
  });

  const p4 = Promise.resolve(50);
  const p5 = new Promise((resolve, reject) => setTimeout(reject, 100, "testing"));
  const prm = [p4, p5];

  Promise.allSettled(prm).then((results) =>
    results.forEach((result) => {
        console.log('results');
      console.log(results);
    })
  );
};
