
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/form/index","pages/login/index","pages/positioning/index","pages/map/index","pages/index/index","pages/sup-material-out/index","pages/sup-material-out/detail","pages/mine/index"],"window":{"navigationBarTitleText":"智能管控系统","navigationBarBackgroundColor":"#6C9EFF","backgroundColor":"#FFFFFF","navigationBarShadow":"grey","onReachBottomDistance":50,"navigationStyle":"default"},"tabBar":{"color":"#333333","selectedColor":"#6C9EFF","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"static/img/index.png","selectedIconPath":"static/img/index.png"},{"pagePath":"pages/form/index","text":"单据","iconPath":"static/img/index.png","selectedIconPath":"static/img/index.png"},{"pagePath":"pages/mine/index","text":"我的","iconPath":"static/img/index.png","selectedIconPath":"static/img/index.png"}]},"networkTimeout":{"request":5000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"hello-uni","compilerVersion":"2.8.11","entryPagePath":"pages/form/index"};
var __uniRoutes = [{"path":"/pages/form/index","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/login/index","meta":{},"window":{"enablePullDownRefresh":false,"navigationStyle":"custom","softinputMode":"adjustResize"}},{"path":"/pages/positioning/index","meta":{},"window":{}},{"path":"/pages/map/index","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"enablePullDownRefresh":true}},{"path":"/pages/sup-material-out/index","meta":{},"window":{"navigationBarTitleText":"辅材出库","enablePullDownRefresh":false}},{"path":"/pages/sup-material-out/detail","meta":{},"window":{"navigationBarTitleText":"辅材出库明细"}},{"path":"/pages/mine/index","meta":{"isQuit":true,"isTabBar":true},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
