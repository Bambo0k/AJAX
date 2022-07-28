function fetchAnton(x) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", x);
        xhr.onreadystatechange = function() {
            if (xhr.readyState !== 4 || xhr.status !== 200) {
                return;
            }
            resolve(JSON.parse(xhr.response));
        };
        xhr.send();
    });
}
module.exports = fetchAnton;