/**
*
* @author GG on 15-06-30
*
*/

module game {

    export class Cat extends egret.Sprite {

        public node: Node;
        private isWeizhu: boolean;
        private staymc: egret.MovieClip;
        private weizhumc: egret.MovieClip;

        public constructor() {
            super();
            this.staymc = Utils.createMC('stay');
            this.weizhumc = Utils.createMC('weizhu');
            this.anchorX = 0.5;
            this.anchorY = 1;
            this.stay();
        }
        
        /*站定*/
        public stay() {
            this.isWeizhu = false;
            this.removeChildren();
            this.addChild(this.staymc);
            this.staymc.play(-1);
        }
        
        /*围住*/
        public weizhu() {
            this.isWeizhu = true;
            this.removeChildren();
            this.addChild(this.weizhumc);
            this.weizhumc.play(-1);
         }

         /*行走*/
        public run(node:Node) {
            this.node = node;
            this.x = node.x;
            this.y = node.y;
        }        
    }
}
