/**
*
* @author GG on 15-06-30
*
*/
var game;
(function (game) {
    /*地图*/
    var Map = (function (_super) {
        __extends(Map, _super);
        function Map() {
            _super.call(this);
            this.tapCount = 0; //点击次数
            this.map = [];
            this.mapsize = 9;
            this.mapcenterX = 4;
            this.mapcenterY = 4;
            this.blockRate = 0.2; //block比例
            this.init();
        }
        var __egretProto__ = Map.prototype;
        __egretProto__.init = function () {
            this.tapCount = 0;
            this.removeChildren();
            for (var i = 0; i < this.mapsize; i++) {
                this.map[i] = [];
                for (var j = 0; j < this.mapsize; j++) {
                    var node = new game.Node(i, j);
                    node.x = i * 48 + (j % 2) * 24;
                    node.y = j * 44;
                    this.map[i][j] = node;
                    node.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNodeClick, this);
                    this.addChild(node);
                    if (i != this.mapcenterX && j != this.mapcenterY && Math.random() < this.blockRate) {
                        node.doFill();
                    }
                }
            }
        };
        __egretProto__.onNodeClick = function (e) {
            var node = e.target;
            node.doFill();
            node.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onNodeClick, this);
            this.tapCount++;
            this.dispatchEventWith("nodeClick");
        };
        __egretProto__.getCenterNode = function () {
            return this.map[this.mapcenterX][this.mapcenterY];
        };
        __egretProto__.findPath = function (node) {
            var posx = node.posx;
            var posy = node.posy;
            var arounds = [
                [posx + 1, posy],
                [posx - 1, posy],
                [posx, posy + 1],
                [posx, posy - 1]
            ];
            if (posy % 2 == 0) {
                arounds.push([posx - 1, posy + 1]);
                arounds.push([posx - 1, posy - 1]);
            }
            else {
                arounds.push([posx + 1, posy + 1]);
                arounds.push([posx + 1, posy - 1]);
            }
            var results = [];
            for (var i = 0; i < arounds.length; i++) {
                if (this.isExit(arounds[i])) {
                    results = null;
                    break;
                }
                else if (!this.map[arounds[i][0]][arounds[i][1]].isFill) {
                    results.push(arounds[i]);
                }
            }
            if (!results) {
                return -1;
            }
            else if (results.length == 0) {
                return 0;
            }
            else {
                return results[Math.floor(Math.random() * results.length)];
            }
        };
        __egretProto__.isExit = function (pos) {
            if (pos[0] < 0 || pos[0] >= this.mapsize || pos[1] < 0 || pos[1] >= this.mapsize) {
                return true;
            }
            return false;
        };
        __egretProto__.getNodeByPos = function (pos) {
            return this.map[pos[0]][pos[1]];
        };
        return Map;
    })(egret.DisplayObjectContainer);
    game.Map = Map;
    Map.prototype.__class__ = "game.Map";
})(game || (game = {}));
