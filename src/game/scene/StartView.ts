/**
*
* @author GG on 15-06-30
*
*/

module game {
    /**
    * 开始界面
    */
	export class StartView extends egret.gui.SkinnableComponent  {
        public constructor() {
            super();
            this.skinName = "game.skins.StartViewSkin";
            this.horizontalCenter = 0;
            this.verticalCenter = 0;
        }
        
        public startBtn: egret.gui.Button;
		
        public childrenCreated() {
            this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStart, this);
        }
                
        private onStart() { 
            this.dispatchEventWith('gameStart');
        }
	}
}
