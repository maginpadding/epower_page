

    function RotateZoomPic() {
        this.initialize.apply(this, arguments)
    }

    RotateZoomPic.prototype = {
        initialize: function (id) {
            var _this = this;
            this.wrapId = typeof id === "string" ? document.getElementById(id) : id;
            this.picList = this.wrapId.getElementsByTagName("ul")[0];
            this.picWrap = this.wrapId.getElementsByTagName("li");
            this.timer = null;
            this.picSort = [];
            this.defaultLight = 1;
            this._doPrev = function () {return _this.doPrev.apply(_this)};
            this._doNext = function () {return _this.doNext.apply(_this)};
            this.options = [
                {width: 595, height: 342, top: 70, left: 0, zIndex: 100},
                {width: 780, height: 445, top: 20, left: 214, zIndex: 300},
                {width: 595, height: 342, top: 70, left: 595, zIndex: 100}
            ];
            for (var i = 0; i < this.picWrap.length; i++) {
                this.picSort[i] = this.picWrap[i];
            }
            this.picSort.unshift(this.picSort.pop());
            this.setUp();
            this.doImgClick();
            this.timer = setInterval(function () {
                _this.doNext()
            }, 3000);
            this.wrapId.onmouseover = function () {
                clearInterval(_this.timer)
            };
            this.wrapId.onmouseout = function () {
                _this.timer = setInterval(function (){
                    _this.doNext()
                }, 3000);
            }
        },
        doPrev : function () {
            this.picSort.unshift(this.picSort.pop());
            this.setUp()
        },
        doNext : function (){
            this.picSort.push(this.picSort.shift());
            this.setUp()
        },
        doImgClick: function () {
            var _this = this;
            for (var i = 0; i < this.picSort.length; i++) {
                this.picSort[i].onclick = function () {
                    if (this.index > _this.defaultLight) {
                        for (var i = 0; i < this.index - _this.defaultLight; i++) {
                            _this.picSort.push(_this.picSort.shift());
                        }
                        _this.setUp();
                    }else if (this.index < _this.defaultLight) {
                        for (var i = 0; i < _this.defaultLight - this.index; i++) {
                            _this.picSort.unshift(_this.picSort.pop());
                        }
                        _this.setUp();
                    }
                }
            }
        },
        setUp: function () {
            for (var i = 0; i < this.picSort.length; i++) {
                this.picList.appendChild(this.picSort[i]);
            }
            for (i = 0; i < this.picSort.length; i++) {
                this.picSort[i].index = i;
                if (i < 3) {
                    this.css(this.picSort[i], "display", "block");
                    this.doMove(this.picSort[i], this.options[i]);
                }else {
                    this.css(this.picSort[i], "display", "none");
                    this.css(this.picSort[i], "width", 0);
                    this.css(this.picSort[i], "height", 0);
                    this.css(this.picSort[i], "top", 70);
                    this.css(this.picSort[i], "left", this.picList.offsetWidth / 2)
                }
            }
        },
        addEvent: function (oElement, sEventType, fnHandler) {
            return oElement.addEventListener ? oElement.addEventListener(sEventType, fnHandler, false) : oElement.attachEvent("on" + sEventType, fnHandler)
        },
        css: function (oElement, attr, value) {
            if (arguments.length == 2) {
                return oElement.currentStyle ? oElement.currentStyle[attr] : getComputedStyle(oElement, null)[attr]
            }else if (arguments.length == 3) {
                switch (attr) {
                    case "width":
                    case "height":
                    case "top":
                    case "left":
                    case "bottom":
                        oElement.style[attr] = value + "px";
                        break;
                    case "opacity" :
                        oElement.style.filter = "alpha(opacity=" + value + ")";
                        oElement.style.opacity = value / 100;
                        break;
                    default :
                        oElement.style[attr] = value;
                        break;
                }
            }
        },
        doMove: function (oElement, oAttr) {
            var _this = this;
            clearInterval(oElement.timer);
            oElement.timer = setInterval(function () {
                var bStop = true;
                for (var property in oAttr) {
                    var iCur = parseFloat(_this.css(oElement, property));
                    var iSpeed = (oAttr[property] - iCur) / 5;
                    iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
                    if (iCur != oAttr[property]) {
                        bStop = false;
                        _this.css(oElement, property, iCur + iSpeed);
                    }
                }
                if (bStop) {
                    clearInterval(oElement.timer);
                }
            }, 10);
        }
    };
    window.onload = function(){
        new RotateZoomPic("rotate-1");
    }
