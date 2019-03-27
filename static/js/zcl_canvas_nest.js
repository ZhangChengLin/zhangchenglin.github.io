import {is_mobile} from "./zcl_bowser";

import("./zcl_bowser.mjs");


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
