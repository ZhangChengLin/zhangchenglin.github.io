const UA = window.navigator.userAgent;

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

//bootstrap-modal-js-video
bootstrap_modal_js_video();

//control
(function () {
    const control = document.querySelector("#control");

    control.addEventListener("focusin", control_icon);
    control.addEventListener("focusout", control_icon);

    function control_icon() {
        const icon = control.querySelector("i");
        icon.classList.toggle("fa-spin");
    }
})();

const all_popover = $("[id^='popover']");

function dispose_all_popover() {
    all_popover.popover("dispose");
}

function disable_all_popover() {
    all_popover.popover("disable");
}

(function () {

    $("#control").popover({
        trigger: "click",
        content: document.querySelector("#controlArea"),
        html: true,
        placement: "bottom",
    });
    $("#control_canvasNest").popover({
        trigger: "focus",
        content: document.querySelector("#canvasNestControl"),
        html: true,
        placement: "bottom",
    });
})();

