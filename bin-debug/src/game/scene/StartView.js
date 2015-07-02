/**
*
* @author GG on 15-06-30
*
*/
var game;
(function (game) {
    /**
    * 开始界面
    */
    var StartView = (function (_super) {
        __extends(StartView, _super);
        function StartView() {
            _super.call(this);
            this.skinName = "game.skins.StartViewSkin";
            this.horizontalCenter = 0;
            this.verticalCenter = 0;
        }
        var __egretProto__ = StartView.prototype;
        __egretProto__.childrenCreated = function () {
            this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStart, this);
        };
        __egretProto__.onStart = function () {
            this.dispatchEventWith('gameStart');
        };
        return StartView;
    })(egret.gui.SkinnableComponent);
    game.StartView = StartView;
    StartView.prototype.__class__ = "game.StartView";
})(game || (game = {}));
