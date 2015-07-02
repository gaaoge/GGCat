/**
*
* @author GG on 15-06-30
*
*/
var game;
(function (game) {
    var Cat = (function (_super) {
        __extends(Cat, _super);
        function Cat() {
            _super.call(this);
            this.staymc = game.Utils.createMC('stay');
            this.weizhumc = game.Utils.createMC('weizhu');
            this.anchorX = 0.5;
            this.anchorY = 1;
            this.stay();
        }
        var __egretProto__ = Cat.prototype;
        /*站定*/
        __egretProto__.stay = function () {
            this.isWeizhu = false;
            this.removeChildren();
            this.addChild(this.staymc);
            this.staymc.play(-1);
        };
        /*围住*/
        __egretProto__.weizhu = function () {
            this.isWeizhu = true;
            this.removeChildren();
            this.addChild(this.weizhumc);
            this.weizhumc.play(-1);
        };
        /*行走*/
        __egretProto__.run = function (node) {
            this.node = node;
            this.x = node.x;
            this.y = node.y;
        };
        return Cat;
    })(egret.Sprite);
    game.Cat = Cat;
    Cat.prototype.__class__ = "game.Cat";
})(game || (game = {}));
