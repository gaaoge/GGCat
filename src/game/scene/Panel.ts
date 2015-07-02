/**
*
* @author GG on 15-06-30
*
*/

module game {
    
    /**
    *结果面板
    */
    export class Panel extends egret.gui.SkinnableComponent {
        public constructor() {
            super();
            this.skinName = "game.skins.PanelSkin";
            this.horizontalCenter = 0;
            this.verticalCenter = 0;
        }

        public static STATE_SUCCESS: string = 'success';
        public static STATE_FAILED: string = 'failed';
        public result: egret.gui.Label;
        public description: egret.gui.Label;
        public replayBtn: egret.gui.UIAsset;
        private state: string;
		
        /**
        * override重写getCurrentSkinState方法
        */
        public getCurrentSkinState(): string {
            return this.state;
        }

        public setState(state: string) {
            this.state = state;
            this.invalidateSkinState();
        }
        
        public childrenCreated() {
            this.replayBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onReplay, this);
        }
        
        private onReplay() { 
            this.dispatchEventWith('gameReplay');
        }
    }
}
