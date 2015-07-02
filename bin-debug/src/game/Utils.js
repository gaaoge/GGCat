var game;
(function (game) {
    var Utils = (function () {
        function Utils() {
        }
        var __egretProto__ = Utils.prototype;
        Utils.createBitmapByName = function (name) {
            var result = new egret.Bitmap();
            var texture = RES.getRes(name);
            result.texture = texture;
            return result;
        };
        Utils.createMC = function (name) {
            var data = RES.getRes(name + '_json');
            var texture = RES.getRes(name + '_png');
            var mcFactory = new egret.MovieClipDataFactory(data, texture);
            return new egret.MovieClip(mcFactory.generateMovieClipData(name));
        };
        return Utils;
    })();
    game.Utils = Utils;
    Utils.prototype.__class__ = "game.Utils";
})(game || (game = {}));
