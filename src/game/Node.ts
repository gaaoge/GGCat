/**
*
* @author GG on 15-06-30
*
*/

module game {
    /**
    地图节点
    */
    export class Node extends egret.Bitmap {

        public preNode: Node;
        public isFill: boolean = false;
        public posx: number;
        public posy: number;

        public constructor(posx: number,posy: number) {
            super(RES.getRes('pot1_png'));
            this.posx = posx;
            this.posy = posy;
            this.anchorX = this.anchorY = 0.5;
            this.touchEnabled = true;
        }

        public doFill() {
            this.texture = RES.getRes('pot2_png');
            this.isFill = true;
            this.touchEnabled = false;
        }


        public getPos() {
            return [this.posx,this.posy];
        }

    }
}