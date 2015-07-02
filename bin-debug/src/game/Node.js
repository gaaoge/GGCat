/**
*
* @author GG on 15-06-30
*
*/
var game;
(function (game) {
    /**
    地图节点
    */
    var Node = (function (_super) {
        __extends(Node, _super);
        function Node(posx, posy) {
            _super.call(this, RES.getRes('pot1_png'));
            this.isFill = false;
            this.posx = posx;
            this.posy = posy;
            this.anchorX = this.anchorY = 0.5;
            this.touchEnabled = true;
        }
        var __egretProto__ = Node.prototype;
        __egretProto__.doFill = function () {
            this.texture = RES.getRes('pot2_png');
            this.isFill = true;
            this.touchEnabled = false;
        };
        __egretProto__.getPos = function () {
            return [this.posx, this.posy];
        };
        return Node;
    })(egret.Bitmap);
    game.Node = Node;
    Node.prototype.__class__ = "game.Node";
})(game || (game = {}));
