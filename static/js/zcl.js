(function () {
    const hitokoto = document.querySelector("#hitokoto");
    hitokoto.addEventListener("click", function () {
        fetch('https://v1.hitokoto.cn')
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                const hitokoto = document.querySelector('#hitokoto');
                hitokoto.innerText = data.hitokoto;
            })
            .catch(function (err) {
                console.error(err);
            })
    })
})();

bootstrap_modal_js_video();

