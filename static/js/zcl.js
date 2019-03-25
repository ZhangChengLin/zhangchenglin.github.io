


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

//canvas-nest.js
(function () {
    const canvasNestArea = document.querySelector("#canvasNestArea");
    const count = 200;
    const color = randomRgb();
    const pointColor = randomRgb();
    const canvasConfig = {
        count: count,
        color: color,
        pointColor: pointColor,
        opacity: 1,
        zIndex: -1,
    };

    function channel() {
        return ('00' + (Math.random() * 256 << 0)).substr(-3);
    }

    function randomRgb() {
        return channel() + ', ' + channel() + ', ' + channel();
    }


    let canvasNest = new CanvasNest(canvasNestArea, canvasConfig);
    const canvasNestControl_add = document.querySelector("#canvasNestControl_add");
    const canvasNestControl_destroy = document.querySelector("#canvasNestControl_destroy");
    canvasNestControl_add.addEventListener("click", function () {
        canvasNest = new CanvasNest(canvasNestArea, canvasConfig);
    });
    canvasNestControl_destroy.addEventListener("click", function () {
        canvasNest_destroy();
    });

    function canvasNest_destroy() {
        // canvasNest.destroy();

        // noinspection LoopStatementThatDoesntLoopJS
        for (let i = canvasNestArea.childElementCount; i--;) {
            canvasNestArea.removeChild(canvasNestArea.childNodes[i]);
            break;
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

