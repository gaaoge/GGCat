/**
*
* @author GG on 15-06-30
*
*/
var game;
(function (game) {
    /**
     * 游戏舞台
     */
    var Stage = (function (_super) {
        __extends(Stage, _super);
        function Stage() {
            _super.call(this);
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        }
        var __egretProto__ = Stage.prototype;
        __egretProto__.onAddToStage = function () {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            this.createGameScene();
        };
        /**创建游戏场景*/
        __egretProto__.createGameScene = function () {
            this.map = new game.Map();
            this.map.x = 35;
            this.map.y = this.stage.stageHeight - 460;
            this.map.addEventListener('nodeClick', this.onNodeClick, this);
            this.addChild(this.map);
            this.uiStage = new egret.gui.UIStage();
            this.addChild(this.uiStage);
            //开始界面
            this.startView = new game.StartView();
            this.startView.addEventListener('gameStart', this.gameStart, this);
            //结果面板
            this.panel = new game.Panel();
            this.panel.addEventListener('gameReplay', this.gameReplay, this);
            egret.gui.PopUpManager.modalAlpha = 0;
            egret.gui.PopUpManager.addPopUp(this.startView, true);
        };
        __egretProto__.gameStart = function () {
            egret.gui.PopUpManager.removePopUp(this.startView);
            this.cat = new game.Cat();
            this.map.addChild(this.cat);
            this.cat.run(this.map.getCenterNode());
        };
        __egretProto__.gameReplay = function () {
            egret.gui.PopUpManager.removePopUp(this.panel);
            this.map.init();
            this.cat = new game.Cat();
            this.map.addChild(this.cat);
            this.cat.run(this.map.getCenterNode());
        };
        __egretProto__.onNodeClick = function (e) {
            var nextPos = this.map.findPath(this.cat.node);
            if (nextPos == -1) {
                this.map.removeChild(this.cat);
                this.showPanel(game.Panel.STATE_FAILED, '你没有抓住神！经！猫！', '精神病院长又发神经病了！');
            }
            else if (nextPos == 0) {
                this.cat.weizhu();
                this.showPanel(game.Panel.STATE_SUCCESS, '你花了' + this.map.tapCount + '步围住了神经猫！', "神经全国排名" + Math.floor(this.map.tapCount * 1234567 + Math.random() * this.map.tapCount * 500) + "位");
            }
            else {
                this.cat.run(this.map.getNodeByPos(nextPos));
            }
        };
        __egretProto__.showPanel = function (state, resultStr, descriptionStr) {
            egret.gui.PopUpManager.addPopUp(this.panel, true);
            this.panel.verticalCenter = -500;
            egret.Tween.get(this.panel).to({ verticalCenter: 0 }, 500, egret.Ease.backOut);
            this.panel.setState(state);
            this.panel.result.text = resultStr;
            this.panel.description.text = descriptionStr;
        };
        return Stage;
    })(egret.DisplayObjectContainer);
    game.Stage = Stage;
    Stage.prototype.__class__ = "game.Stage";
})(game || (game = {}));
