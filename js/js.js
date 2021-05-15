let btn = document.getElementById('btn1'),
    body = document.getElementById("body1"),
    loading = document.getElementById('hed'),
    bodyMain = document.getElementById('body-main');



setTimeout(() => {
    body.style.display = "block";
    loading.style.display = "none";
    bodyMain.style.background = "#fff";
}, 3000);