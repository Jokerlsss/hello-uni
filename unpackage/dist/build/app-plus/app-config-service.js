
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/login/index","pages/form/index","pages/index/index","pages/mine/index","pages/sup-material-out/index"],"window":{"navigationBarTitleText":"智能管控系统","navigationBarBackgroundColor":"#FF5242","backgroundColor":"#FFFFFF","enablePullDownRefresh":"true","navigationBarShadow":"grey","onReachBottomDistance":50,"navigationStyle":"default","softinputMode":"adjustResize"},"tabBar":{"color":"#333333","selectedColor":"#FF5242","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","text":"审批","iconPath":"static/img/index.png","selectedIconPath":"static/img/index.png"},{"pagePath":"pages/mine/index","text":"我的","iconPath":"static/img/index.png","selectedIconPath":"static/img/index.png"},{"pagePath":"pages/form/index","text":"表单","iconPath":"static/img/index.png","selectedIconPath":"static/img/index.png"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"hello-uni","compilerVersion":"2.8.11","entryPagePath":"pages/login/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/login/index","meta":{"isQuit":true},"window":{"enablePullDownRefresh":"false","navigationStyle":"custom"}},{"path":"/pages/form/index","meta":{"isQuit":true,"isTabBar":true},"window":{"enablePullDownRefresh":"true"}},{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"enablePullDownRefresh":true}},{"path":"/pages/mine/index","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/sup-material-out/index","meta":{},"window":{"navigationBarTitleText":"辅材出库"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
