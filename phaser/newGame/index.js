var game = new Phaser.Game(
	375, //场景宽
	667, //场景高
	Phaser.AUTO, //渲染模式
	"game", //canvas id
	{	
		preload: preload, //加载
		create: create, //创建
		update: update, //帧更新
		render: render//渲染到屏幕
	}
);
var myPlane, bullets, enemy;
var myEnemy = {
	selfPoolNum:30,//敌机数量
	timeInterval: 2,//制造敌机时间间隔
	velocityY:150
}
function EnemyFactory(params){
	this.init = function(){
		//敌方UFO
		this.enemys = game.add.group();
		this.enemys.enableBody = true;
		this.enemys.createMultiple(params.selfPoolNum, 'enemy');//创建敌机并产生回收的盒子。
		this.enemys.scale.set(0.5, 0.5);
		//出界销毁
		this.enemys.setAll('outOfBoundsKill', true);
		this.enemys.setAll('checkWorldBounds', true);
		//最大宽度值
		this.maxWidth = game.width - game.cache.getImage('enemy').width;

		//敌机间隔产生
		game.time.events.loop(Phaser.Timer.SECOND * params.timeInterval, this.generateEnemys, this);		
	}
	//制造敌机
	this.generateEnemys = function() {
		var enemy = this.enemys.getFirstExists(false);//拿到敌机
		if (enemy) {
			//	x 随机产生  y 敌机高度
			enemy.reset(game.rnd.integerInRange(0, this.maxWidth), -game.cache.getImage('enemy').height);
			enemy.body.velocity.y = params.velocityY;
		}
	}
}
function preload(){
	//加载图片
	game.load.image('background', './planeGame/blue.png');//天空背景
	game.load.spritesheet('myPlane', './planeGame/playerShip_orange.png');//飞机
	game.load.spritesheet('bullet', './planeGame/laserBlue.png');//子弹
	game.load.spritesheet('enemy', './planeGame/ufoGreen.png');//敌方飞碟
}
function create(){
	//创建 天空背景对象  param--场景坐标x、场景坐标y、场景宽度、场景高度、资源文件字符串
	var backgroundImage = game.add.tileSprite(0, 0, game.width, game.height, 'background');
	// 背景匀速直线运动
	backgroundImage.autoScroll(0,200);

	//创建小飞机对象 param--坐标x、y、资源文件字符串
	myPlane = game.add.sprite(180, 500, 'myPlane');
	myPlane.scale.set(0.3, 0.5);
	//拖拽
	myPlane.inputEnabled = true;
	myPlane.input.enableDrag(false);
	//? 
	myPlane.anchor.set(0.5);
	//飞机加入到Phaser框架的arcade物理中
	game.physics.arcade.enable(myPlane); 
	//设置游戏世界边界
	myPlane.body.collideWorldBounds = true;

	//子弹
	bullets = game.add.weapon(30, 'bullet', null);
	bullets.enableBody = true;
	bullets.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;//子弹超边界失效
	bullets.bulletSpeed = 500;//子弹的速度
	bullets.fireRate = 150;//子弹的发射间隔时间
	//子弹发射位置 param--飞机对象、子弹x轴偏移量、子弹y轴偏移量
	bullets.trackSprite(myPlane, 0, -50);
	bullets.bulletAngleOffset = 90;
	bullets.autofire = true;//射击

	//敌机UFO
	enemy = new EnemyFactory(myEnemy);
	enemy.init();

}
function update(){

}
function render(){

}