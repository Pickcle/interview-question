function A(cb) {
  let userId = getUserId();
  cb && cb(userId);
}

function B(cb) {
  let movieId = getMovieId();
  cb && cb(movieId);
}

function C(userId, movieId, cb) {
  let result = getResult(userId, movieId);
  cb && cb(result);
}

let promiseA = convertToPromiseFn(A);
let promiseB = convertToPromiseFn(B);
let promiseC = convertToPromiseFn(C);

Promise.all([promiseA(), promiseB()]).then((params) => {
  promiseC(params[0], params[1]).then((result) => {
    console.log(result);
  })
})

function convertToPromiseFn(fn) {
  return function (...args) {
    let self = this;
    return new Promise((resolve, reject) => {
      args.push(resolve);
      fn.apply(self, args);
    })
  }
}

function sleep(seconds) {
  let time = Date.now();
  while (Date.now() - seconds < time) {

  }
  return;
}

function getUserId() {
  sleep(1000);
  return 'userId'
}

function getMovieId() {
  sleep(1000);
  return 'movieId'
}

function getResult(userId, movieId) {
  sleep(1000);
  return userId + movieId;
}
