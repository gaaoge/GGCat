module game {

    export class Utils {

        public static createBitmapByName(name: string): egret.Bitmap {
            var result: egret.Bitmap = new egret.Bitmap();
            var texture: egret.Texture = RES.getRes(name);
            result.texture = texture;
            return result;
        }

        public static createMC(name: string) {
            var data = RES.getRes(name + '_json');
            var texture = RES.getRes(name + '_png');
            var mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data,texture);
            return new egret.MovieClip(mcFactory.generateMovieClipData(name));
        }
    }
}
