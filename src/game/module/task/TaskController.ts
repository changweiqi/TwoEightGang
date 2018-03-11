/**
 * Created by egret on 15-1-7.
 */
class TaskController extends BaseController {

    private taskView:TaskView;
    private dailyView:DailyView;
    public constructor() {
        super();

        this.taskView = new TaskView(this, LayerMgr.UI_Popup);
        App.ViewManager.register(ViewConst.Task, this.taskView);

        this.dailyView = new DailyView(this, LayerMgr.UI_Popup);
        App.ViewManager.register(ViewConst.Daily, this.dailyView);
    }
}