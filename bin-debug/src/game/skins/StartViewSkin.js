var game;
(function (game) {
    var skins;
    (function (skins) {
        var StartViewSkin = (function (_super) {
            __extends(StartViewSkin, _super);
            function StartViewSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__3_i(), this.startBtn_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var __egretProto__ = StartViewSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return StartViewSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "btn_start_png", 0]);
                return t;
            };
            __egretProto__.startBtn_i = function () {
                var t = new egret.gui.Rect();
                this.startBtn = t;
                this.__s(t, ["fillAlpha", "height", "width", "x", "y"], [0, 69, 187, 106, 479]);
                return t;
            };
            StartViewSkin._skinParts = ["startBtn"];
            return StartViewSkin;
        })(egret.gui.Skin);
        skins.StartViewSkin = StartViewSkin;
        StartViewSkin.prototype.__class__ = "game.skins.StartViewSkin";
    })(skins = game.skins || (game.skins = {}));
})(game || (game = {}));
