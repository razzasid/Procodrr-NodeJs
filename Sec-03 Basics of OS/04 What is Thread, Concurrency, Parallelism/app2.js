import { Worker } from 'worker_threads'

//* Using with threads
new Worker('./loopOne.js');
new Worker('./loopTwo.js')
new Worker('./loopThree.js')




//* Without creating thread
// console.time()
// for (let i = 0; i <= 1000000000; i++) {
//   if (i % 400000000 == 0) {
//     console.log(`Running Loop 1 ${i}`);
//   }
// }

// for (let i = 0; i <= 1000000000; i++) {
//   if (i % 400000000 == 0) {
//     console.log(`Running Loop  ${i}`);
//   }
// }

// for (let i = 0; i <= 1000000000; i++) {
//   if (i % 400000000 == 0) {
//     console.log(`Running Loop 3 ${i}`);
//   }
// }
// console.timeEnd()