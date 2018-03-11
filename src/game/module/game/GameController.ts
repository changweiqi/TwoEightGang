
class GameController extends BaseController {

    private gameview:GameView;
    public constructor() {
        super();

        this.gameview = new GameView(this, LayerMgr.Game_Main);
        App.ViewManager.register(ViewConst.Game, this.gameview);

        //侦听服务器回报数据
        // this.registerFunc();

    }
}