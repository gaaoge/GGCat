/**
*
* @author GG on 15-06-30
*
*/

module game {
	/**
	 * 游戏舞台
	 */
    export class Stage extends egret.DisplayObjectContainer {

        private map: Map;
        private cat: Cat;
        private uiStage: egret.gui.UIStage;
        private startView: StartView;
        private panel: Panel;

        public constructor() {
            super();
            this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
        }

        private onAddToStage() {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
            this.createGameScene();
        }
        
        /**创建游戏场景*/
        private createGameScene() {
            this.map = new Map();
            this.map.x = 35;
            this.map.y = this.stage.stageHeight - 460;
            this.map.addEventListener('nodeClick',this.onNodeClick,this);
            this.addChild(this.map);

            this.uiStage = new egret.gui.UIStage();
            this.addChild(this.uiStage);
                      
            //开始界面
            this.startView = new StartView();
            this.startView.addEventListener('gameStart',this.gameStart,this);
            
            //结果面板
            this.panel = new Panel();
            this.panel.addEventListener('gameReplay',this.gameReplay,this);

            egret.gui.PopUpManager.modalAlpha = 0;
            egret.gui.PopUpManager.addPopUp(this.startView,true);
        }

        private gameStart() {
            egret.gui.PopUpManager.removePopUp(this.startView);
            this.cat = new Cat();
            this.map.addChild(this.cat);
            this.cat.run(this.map.getCenterNode());
        }

        private gameReplay() {
            egret.gui.PopUpManager.removePopUp(this.panel);
            this.map.init();
            this.cat = new Cat();
            this.map.addChild(this.cat);
            this.cat.run(this.map.getCenterNode());
        }

        private onNodeClick(e: egret.TouchEvent) {
            var nextPos = this.map.findPath(this.cat.node);
            if(nextPos == -1) {
                this.map.removeChild(this.cat);
                this.showPanel(Panel.STATE_FAILED,'你没有抓住神！经！猫！','精神病院长又发神经病了！');
            } else if(nextPos == 0) {
                this.cat.weizhu();
                this.showPanel(Panel.STATE_SUCCESS,'你花了' + this.map.tapCount + '步围住了神经猫！',
                    "神经全国排名" + Math.floor(this.map.tapCount * 1234567 + Math.random() * this.map.tapCount * 500) + "位");
            } else {
                this.cat.run(this.map.getNodeByPos(nextPos));
            }
        }

        private showPanel(state: string,resultStr: string,descriptionStr: string) {
            egret.gui.PopUpManager.addPopUp(this.panel,true);
            this.panel.verticalCenter = -500;
            egret.Tween.get(this.panel).to({ verticalCenter: 0 },500,egret.Ease.backOut);
            this.panel.setState(state);
            this.panel.result.text = resultStr;
            this.panel.description.text = descriptionStr;
        }
    }
}
