function httpGetAsync(theUrl, resolve) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) resolve(xmlHttp);
    };
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

const currentPromise = new Promise((resolve, reject) => {
    httpGetAsync("https://picsum.photos/200/300", resolve);
});
const promise2 = new Promise((resolve, reject) => {
    httpGetAsync("https://picsum.photos/200/300", resolve);
});

const promise3 = new Promise((resolve, reject) => {
    httpGetAsync("https://picsum.photos/200/300", resolve);
});

const executeAsync = async () => {
    try {
        const response1 = await currentPromise;
        console.log(response1);
        document
            .getElementById("img_1")
            .setAttribute("src", response1.responseURL);

        const response2 = await promise2;
        console.log(response2);
        document
            .getElementById("img_2")
            .setAttribute("src", response2.responseURL);

        const response3 = await promise3;
        console.log(response3);
        document
            .getElementById("img_3")
            .setAttribute("src", response3.responseURL);
    } catch (error) {}
};

executeAsync();

// currentPromise
//     .then((data) => {
//         document.getElementById("img_1").setAttribute("src", data.responseURL);
//         return promise2;
//     })
//     .then((data) => {
//         document.getElementById("img_2").setAttribute("src", data.responseURL);
//         return promise3;
//     })
//     .then((data) => {
//         document.getElementById("img_3").setAttribute("src", data.responseURL);
//         return promise3;
//     })
//     .catch((err) => {
//         console.log(err);
//     });
