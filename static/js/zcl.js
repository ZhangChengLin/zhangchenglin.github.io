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

bootstrap_modal_js_video();

//canvas-nest.umd.js
(function () {
    const canvasNestArea = document.querySelector("#canvasNestArea");
    const count = 200;
    const step = 5;

    document.addEventListener("load", canvasNestInit(step));

    function canvasNestInit(step) {
        for (let i = 1; i <= step; i++) {
            canvasNest();
        }
    }

    function canvasNest() {
        const color = randomRgb();
        const pointColor = randomRgb();

        const canvasConfig = {
            count: count,
            color: color,
            pointColor: pointColor,
            opacity: 1,
            zIndex: -1,
        };
        new CanvasNest(canvasNestArea, canvasConfig);
    }

    function channel() {
        return ('00' + (Math.random() * 256 << 0)).substr(-3);
    }

    function randomRgb() {
        return channel() + ', ' + channel() + ', ' + channel();
    }


    const canvasNestControl_add = document.querySelector("#canvasNestControl_add");
    const canvasNestControl_destroy = document.querySelector("#canvasNestControl_destroy");
    const canvasNestControl_destroy_all = document.querySelector("#canvasNestControl_destroy_all");
    canvasNestControl_add.addEventListener("click", function () {
        canvasNest();
    });
    canvasNestControl_destroy.addEventListener("click", function () {
        canvasNest_destroy();
    });
    canvasNestControl_destroy_all.addEventListener("click", function () {
        canvasNest_destroy_all();
    });

    function canvasNest_destroy() {
        // canvasNest.destroy();

        // noinspection LoopStatementThatDoesntLoopJS
        for (let i = canvasNestArea.childElementCount; i--;) {
            canvasNestArea.removeChild(canvasNestArea.childNodes[i]);
            break;
        }
    }

    function canvasNest_destroy_all() {
        while (canvasNestArea.firstElementChild) {
            canvasNestArea.removeChild(canvasNestArea.firstElementChild);
        }
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

