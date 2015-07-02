var game;
(function (game) {
    var skins;
    (function (skins) {
        var PanelSkin = (function (_super) {
            __extends(PanelSkin, _super);
            function PanelSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.currentState = "failed";
                this.elementsContent = [this.__3_i(), this.result_i(), this.description_i(), this.__4_i(), this.replayBtn_i()];
                this.states = [
                    new egret.gui.State("success", []),
                    new egret.gui.State("failed", [
                        new egret.gui.SetProperty("__3", "source", "failed_png"),
                        new egret.gui.SetProperty("result", "left", 20),
                        new egret.gui.SetProperty("result", "right", 20),
                        new egret.gui.SetProperty("result", "y", 195),
                        new egret.gui.SetProperty("description", "left", 20),
                        new egret.gui.SetProperty("description", "right", 20),
                        new egret.gui.SetProperty("description", "y", 253)
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
            __egretProto__.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["shareBTN_png", 20, 365]);
                return t;
            };
            __egretProto__.description_i = function () {
                var t = new egret.gui.Label();
                this.description = t;
                this.__s(t, ["fontFamily", "left", "right", "size", "text", "textAlign", "textColor", "y"], ["Arial", 20, 20, 20, "全国排名125位", "center", 0x000000, 224]);
                return t;
            };
            __egretProto__.replayBtn_i = function () {
                var t = new egret.gui.UIAsset();
                this.replayBtn = t;
                this.__s(t, ["source", "x", "y"], ["replay_png", 223, 365]);
                return t;
            };
            __egretProto__.result_i = function () {
                var t = new egret.gui.Label();
                this.result = t;
                this.__s(t, ["fontFamily", "left", "right", "size", "text", "textAlign", "textColor", "y"], ["Arial", 20, 20, 28, "你用了16步抓住神经猫！", "center", 0xFF0000, 167]);
                return t;
            };
            __egretProto__.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__3 = t;
                this.__s(t, ["left", "source"], [0, "victory_png"]);
                return t;
            };
            PanelSkin._skinParts = ["result", "description", "replayBtn"];
            return PanelSkin;
        })(egret.gui.Skin);
        skins.PanelSkin = PanelSkin;
        PanelSkin.prototype.__class__ = "game.skins.PanelSkin";
    })(skins = game.skins || (game.skins = {}));
})(game || (game = {}));
