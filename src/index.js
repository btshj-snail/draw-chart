"use strict";
exports.__esModule = true;
var DrawChart = /** @class */ (function () {
    function DrawChart(options) {
        this.options = Object.assign({}, DrawChart.defaultOptions, options);
        var scene = this.options.scene;
        this.setSceneEl(scene);
        this.createSvgContainer(this.sceneEl);
        this.createSnap(this.svgEl);
    }
    /**
     * 设置scene对象
     * @param id
     */
    DrawChart.prototype.setSceneEl = function (id) {
        if (typeof id === 'string') {
            var el = document.querySelector("#" + id);
            if (!el)
                throw "\u6307\u5B9A\u7684" + id + "\u4E0D\u5B58\u5728";
            this.sceneEl = el;
        }
        else if (id instanceof HTMLElement) {
            this.sceneEl = id;
        }
        else {
            throw "\u8BF7\u6307\u5B9AHTML\u5143\u7D20\u4E3Ascene";
        }
    };
    /**
     * 创建svg容器
     * @param el HTMLElement
     */
    DrawChart.prototype.createSvgContainer = function (el) {
        var svgEl = document.createElement('svg');
        svgEl.style.width = '100%';
        svgEl.style.height = '100%';
        el.appendChild(svgEl);
        this.svgEl = svgEl;
    };
    DrawChart.prototype.createSnap = function (el) {
        this.snap = new Snap(el);
    };
    DrawChart.prototype.draw = function () { };
    DrawChart.defaultOptions = {
        scene: document.querySelector('body')
    };
    return DrawChart;
}());
exports["default"] = DrawChart;
