class GameView extends BaseEuiView{
	public constructor($controller:BaseController, $parent:eui.Group) {
        super($controller, $parent);
        this.addEventListener(eui.UIEvent.COMPLETE,this.onComplete,this);
        this.skinName = "resource/skins/SceneSkin.exml";
    }
	public menuBtn:eui.Image;
    public menu:eui.Group;

	/**
     *对面板进行显示初始化，用于子类继承
     *
     */
    public initUI():void{
        super.initUI();        
    }

    private onComplete(): void {
       
       if(this.menuBtn)
        {
            this.menuBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.menuBtnChangeHandler,this);
        }
    }

	private menuBtnChangeHandler(e:egret.Event):void{
        // this.playSound();
        if(this.menu){
            this.menu.visible = !this.menu.visible;
        }
    }
}