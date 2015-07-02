/**
*
* @author GG on 15-06-30
*
*/

module game {
    /*地图*/
    export class Map extends egret.DisplayObjectContainer {

        public tapCount: number = 0; //点击次数
        private map: any[] = [];
        private mapsize: number = 9;
        private mapcenterX: number = 4;
        private mapcenterY: number = 4;
        private blockRate: number = 0.2; //block比例
        
        public constructor() {
            super();
            this.init();
        }

        public init() {
            this.tapCount = 0;
            this.removeChildren();
            for(var i: number = 0;i < this.mapsize;i++) {
                this.map[i] = [];
                for(var j: number = 0;j < this.mapsize;j++) {
                    var node = new Node(i,j);
                    node.x = i * 48 + (j % 2) * 24;
                    node.y = j * 44;
                    this.map[i][j] = node;
                    node.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onNodeClick,this);
                    this.addChild(node);

                    if(i != this.mapcenterX && j != this.mapcenterY && Math.random() < this.blockRate) {
                        node.doFill();
                    }
                }
            }
        }

        private onNodeClick(e: egret.TouchEvent) {
            var node: Node = e.target;
            node.doFill();
            node.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onNodeClick,this);
            this.tapCount++;
            this.dispatchEventWith("nodeClick");
        }

        public getCenterNode() {
            return this.map[this.mapcenterX][this.mapcenterY];
        }

        public findPath(node: Node) {
            var posx = node.posx;
            var posy = node.posy;
            var arounds = [
                [posx + 1,posy],
                [posx - 1,posy],
                [posx,posy + 1],
                [posx,posy - 1]
            ];

            if(posy % 2 == 0) {
                arounds.push([posx - 1,posy + 1]);
                arounds.push([posx - 1,posy - 1]);
            } else {
                arounds.push([posx + 1,posy + 1]);
                arounds.push([posx + 1,posy - 1]);
            }

            var results = [];
            for(var i = 0;i < arounds.length;i++) {
                if(this.isExit(arounds[i])) {
                    results = null;
                    break;
                } else if(!this.map[arounds[i][0]][arounds[i][1]].isFill) {
                    results.push(arounds[i]);
                }
            }
            
            if(!results) { 
                return -1;
            }else if(results.length == 0) {
                return 0;
            } else {
                return results[Math.floor(Math.random() * results.length)];
             }   
        }
        
        public isExit(pos:number[]):boolean { 
            if(pos[0] < 0 || pos[0] >= this.mapsize || pos[1] < 0 || pos[1] >= this.mapsize) { 
                return true;
            }
            return false;
        }
        
        public getNodeByPos(pos: number[]) { 
            return this.map[pos[0]][pos[1]];
        }
        

    }
}
