var game;
(function (game) {
    var skin;
    (function (skin) {
        var PanelSkin = (function (_super) {
            __extends(PanelSkin, _super);
            function PanelSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [];
                this.__2_i();
                this.result_i();
                this.description_i();
                this.states = [
                    new egret.gui.State("success", [
                        new egret.gui.AddItems("__2", "", "last", ""),
                        new egret.gui.AddItems("result", "", "last", ""),
                        new egret.gui.AddItems("description", "", "last", "")
                    ])
                ];
            }
            var __egretProto__ = PanelSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return PanelSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.description_i = function () {
                var t = new egret.gui.Label();
                this.description = t;
                this.__s(t, ["fontFamily", "left", "right", "size", "text", "textAlign", "textColor", "y"], ["ArAr", 20, 20, 20, "全国排名125位", "center", 0x000000, 215]);
                return t;
            };
            __egretProto__.result_i = function () {
                var t = new egret.gui.Label();
                this.result = t;
                this.__s(t, ["fontFamily", "left", "right", "size", "text", "textAlign", "textColor", "verticalAlign", "y"], ["Arial", 20, 20, 24, "你用了16步抓住神经猫！", "center", 0xFF0000, "middle", 160]);
                return t;
            };
            __egretProto__.__2_i = function () {
                var t = new egret.gui.UIAsset();
                this.__2 = t;
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "victory_png", 0]);
                return t;
            };
            PanelSkin._skinParts = ["result", "description"];
            return PanelSkin;
        })(egret.gui.Skin);
        skin.PanelSkin = PanelSkin;
        PanelSkin.prototype.__class__ = "game.skin.PanelSkin";
    })(skin = game.skin || (game.skin = {}));
})(game || (game = {}));
