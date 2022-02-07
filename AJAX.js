function fetchAnton(x) {
  const promise1 = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", x);
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4 || xhr.status !== 200) {
        return;
      }
      const response = JSON.parse(xhr.response);
      resolve(response);
    };
    xhr.send();
  });
  return promise1;
}
