/**
*
* @author GG on 15-06-30
*
*/
var game;
(function (game) {
    /**
    *结果面板
    */
    var Panel = (function (_super) {
        __extends(Panel, _super);
        function Panel() {
            _super.call(this);
            this.skinName = "game.skins.PanelSkin";
            this.horizontalCenter = 0;
            this.verticalCenter = 0;
        }
        var __egretProto__ = Panel.prototype;
        /**
        * override重写getCurrentSkinState方法
        */
        __egretProto__.getCurrentSkinState = function () {
            return this.state;
        };
        __egretProto__.setState = function (state) {
            this.state = state;
            this.invalidateSkinState();
        };
        __egretProto__.childrenCreated = function () {
            this.replayBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onReplay, this);
        };
        __egretProto__.onReplay = function () {
            this.dispatchEventWith('gameReplay');
        };
        Panel.STATE_SUCCESS = 'success';
        Panel.STATE_FAILED = 'failed';
        return Panel;
    })(egret.gui.SkinnableComponent);
    game.Panel = Panel;
    Panel.prototype.__class__ = "game.Panel";
})(game || (game = {}));
