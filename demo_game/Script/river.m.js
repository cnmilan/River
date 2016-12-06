var __extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},iPen=function(){function t(t){this._canvas=t,this._cxt2d=t.getContext("2d")}return Object.defineProperty(t.prototype,"cxt2d",{get:function(){return this._cxt2d},enumerable:!0,configurable:!0}),t.prototype.clean=function(){this.cxt2d.clearRect(0,0,this._canvas.width,this._canvas.height)},t.prototype.readDraw=function(t,e){this._cxt2d.save(),this._cxt2d.beginPath(),this._cxt2d.font="14px Arial",this._cxt2d.strokeStyle=t,this._cxt2d.lineWidth=e},t.prototype.drawOver=function(){this._cxt2d.stroke(),this._cxt2d.restore()},t.prototype.rgb=function(t,e,i){if(t>0&&t<255)var n=Math.round(t)<<16;else n=0;if(e>0&&e<255)var r=Math.round(e)<<8;else r=0;if(i>0&&i<255)var o=Math.round(i);else o=0;var h=n+r+o;return h},t}(),view;!function(t){var e=function(){function e(t){this._lastTime=0,this._canvas=t,this._timers=new Array,this._ctx=t.getContext("2d"),this._children=new Array,this.init()}return Object.defineProperty(e.prototype,"children",{get:function(){return this._children},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"layout",{get:function(){return this._layout},set:function(t){this._layout=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return this._canvas.width},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._canvas.height},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"canvas",{get:function(){return this._canvas},enumerable:!0,configurable:!0}),e.prototype.upDataLayout=function(){this._layout&&this.layout.useLayout()},e.prototype.sUpdataViews=function(t){t:for(var e=0;e<this._children.length;e++)for(var i=0;i<t.length;i++)if(this._children[e].constructor==t[i]){this._children[e].sUpdata(),t.splice(i,1);continue t}},e.prototype.removeChildrenByClass=function(t){t:for(var e=0;e<this._children.length;e++)for(var i=0;i<t.length;i++)if(this._children[e].constructor==t[i]){this._children.splice(e,1),e--;continue t}},e.prototype.hasID=function(t){for(var e=0;e<this._children.length;e++)if(t.id&&t.id==this._children[e].id)return console.log(t.id+"已经被使用"),!0;return!1},e.prototype.getViewByID=function(t){for(var e=0;e<this._children.length;e++)if(t&&t==this._children[e].id)return this._children[e]},e.prototype.addChild=function(e){return!(this.hasID(e)||!e.addParent(this))&&(this._children.push(e),e.nowType=t.ViewType.CHANGE,!0)},Object.defineProperty(e.prototype,"maxIndex",{get:function(){return this._children.length-1},enumerable:!0,configurable:!0}),e.prototype.changeChildIndex=function(t,e){var i=e;i<0?i=0:i>=this._children.length&&(i=this._children.length-1);var n=this._children.splice(t,1);this._children.splice(i,0,n[0])},e.prototype.getChildIndex=function(t){for(var e=0;e<this._children.length;e++)if(t==this._children[e])return e;return-1},e.prototype.removeChild=function(t){if(t.parent)for(var e=0;e<this._children.length;e++)if(this._children[e]==t){var i=this._children.splice(e,1);i[0].removeParent()}},e.prototype.addTimer=function(t){this._timers.push(t)},e.prototype.cleanTimer=function(){this._timers.splice(0,this._timers.length)},e.prototype.init=function(){this.initEvent(),this.run(this)},e.prototype.run=function(t){var e=this;t._ctx.clearRect(0,0,t._canvas.width,t._canvas.height);for(var n=0;n<t._children.length;n++){var o=t._children[n];o.nowType==i.CHANGE&&(o instanceof r?o.contianerDraw(o.canvas.getContext("2d")):o.draw(o.canvas.getContext("2d"))),this._ctx.drawImage(o.canvas,o.left,o.top)}requestAnimationFrame(function(i){var n=i-e._lastTime;e._lastTime=i;for(var r=0;r<e._timers.length;r++)e._timers[r](n);t.run(t)})},e.prototype.initEvent=function(){var e=this;window.ondragstart=function(){return!1},window.addEventListener("mousewheel",function(t){if(t.target==e._canvas)for(var i=e._children.length-1;i>=0;i--){var n=e._children[i];if(t.offsetX>n.left&&t.offsetX<n.right&&t.offsetY>n.top&&t.offsetY<n.bottom&&e._children[i].onMouseWheelEvent(t))break}}),window.addEventListener(t.View.MOUSE_DOWN,function(i){switch(i.offX=i.offsetX,i.offY=i.offsetY,i.type){case t.View.MOUSE_DOWN:case t.View.TOUCH_DOWN:i.touchType=t.View.DOWN;break;case t.View.MOUSE_MOVE:case t.View.TOUCH_MOVE:i.touchType=t.View.MOVE;break;case t.View.MOUSE_UP:case t.View.TOUCH_UP:i.touchType=t.View.UP}if(i.target==e._canvas)for(var n=e._children.length-1;n>=0;n--){var o=e._children[n];if(i.offsetX>o.left&&i.offsetX<o.right&&i.offsetY>o.top&&i.offsetY<o.bottom){if(o instanceof r){if(o.issue(i))return void(e._activityView=o);continue}if(o.onTouchEvent(i))return void(e._activityView=o)}}}),window.addEventListener(t.View.TOUCH_DOWN,function(i){switch(i.clientX=i.changedTouches[0].clientX+document.body.scrollLeft,i.clientY=i.changedTouches[0].clientY+document.body.scrollTop,i.offX=i.clientX-e.canvas.offsetLeft,i.offY=i.clientY-e.canvas.offsetTop,i.offsetX=i.offX,i.offsetY=i.offY,i.type){case t.View.MOUSE_DOWN:case t.View.TOUCH_DOWN:i.touchType=t.View.DOWN;break;case t.View.MOUSE_MOVE:case t.View.TOUCH_MOVE:i.touchType=n.MOVE;break;case t.View.MOUSE_UP:case t.View.TOUCH_UP:i.touchType=t.View.UP}if(i.target==e._canvas){i.preventDefault();for(var o=e._children.length-1;o>=0;o--){var h=e._children[o];if(i.offsetX>h.left&&i.offsetX<h.right&&i.offsetY>h.top&&i.offsetY<h.bottom){if(h instanceof r){if(h.issue(i))return void(e._activityView=h);continue}if(h.onTouchEvent(i))return void(e._activityView=h)}}}}),window.addEventListener(n.MOUSE_MOVE,function(t){switch(t.offX=t.offsetX,t.offY=t.offsetY,t.type){case n.MOUSE_DOWN:case n.TOUCH_DOWN:t.touchType=n.DOWN;break;case n.MOUSE_MOVE:case n.TOUCH_MOVE:t.touchType=n.MOVE;break;case n.MOUSE_UP:case n.TOUCH_UP:t.touchType=n.UP}if(e._activityView)return e._activityView instanceof r?void e._activityView.issue(t):void e._activityView.onTouchEvent(t);if(t.target==e._canvas){for(var i=e._children.length-1;i>=0;i--){var o=e._children[i];if(t.offsetX>o.left&&t.offsetX<o.right&&t.offsetY>o.top&&t.offsetY<o.bottom){if(o.onFloatEvent(t))break;o=null}else o=null}e._lastFloatView!=o&&(e._lastFloatView&&(t.touchType=n.FLOAT_END,e._lastFloatView.onFloatEvent(t),e._lastFloatView=null),o&&(e._lastFloatView=o))}}),window.addEventListener(t.View.TOUCH_MOVE,function(i){switch(i.clientX=i.changedTouches[0].clientX+document.body.scrollLeft,i.clientY=i.changedTouches[0].clientY+document.body.scrollTop,i.offX=i.clientX-e.canvas.offsetLeft,i.offY=i.clientY-e.canvas.offsetTop,i.offsetX=i.offX,i.offsetY=i.offY,i.type){case t.View.MOUSE_DOWN:case t.View.TOUCH_DOWN:i.touchType=t.View.DOWN;break;case t.View.MOUSE_MOVE:case t.View.TOUCH_MOVE:i.touchType=t.View.MOVE;break;case t.View.MOUSE_UP:case t.View.TOUCH_UP:i.touchType=t.View.UP}e._activityView&&(i.preventDefault(),e._activityView instanceof r?e._activityView.issue(i):e._activityView.onTouchEvent(i))}),window.addEventListener(t.View.MOUSE_UP,function(i){switch(i.offX=i.offsetX,i.offY=i.offsetY,i.type){case t.View.MOUSE_DOWN:case t.View.TOUCH_DOWN:i.touchType=t.View.DOWN;break;case t.View.MOUSE_MOVE:case t.View.TOUCH_MOVE:i.touchType=t.View.MOVE;break;case t.View.MOUSE_UP:case t.View.TOUCH_UP:i.touchType=t.View.UP}e._activityView&&(e._activityView instanceof r?(e._activityView.issue(i),e._activityView.cleanAction()):e._activityView.onTouchEvent(i),e._activityView=null)}),window.addEventListener(t.View.TOUCH_UP,function(i){switch(i.clientX=i.changedTouches[0].clientX+document.body.scrollLeft,i.clientY=i.changedTouches[0].clientY+document.body.scrollTop,i.offX=i.clientX-e.canvas.offsetLeft,i.offY=i.clientY-e.canvas.offsetTop,i.offsetX=i.offX,i.offsetY=i.offY,i.type){case t.View.MOUSE_DOWN:case t.View.TOUCH_DOWN:i.touchType=t.View.DOWN;break;case t.View.MOUSE_MOVE:case t.View.TOUCH_MOVE:i.touchType=t.View.MOVE;break;case t.View.MOUSE_UP:case t.View.TOUCH_UP:i.touchType=t.View.UP}e._activityView&&(i.preventDefault(),e._activityView instanceof r?(e._activityView.issue(i),e._activityView.cleanAction()):e._activityView.onTouchEvent(i),e._activityView=null)})},e}();t.Activity=e,function(t){t[t.CHANGE=0]="CHANGE",t[t.SUCCESS=1]="SUCCESS"}(t.ViewType||(t.ViewType={}));var i=t.ViewType,n=function(){function e(){this.ignoreLayout=!1,this._id=null,this._alpha=1,this.init()}return Object.defineProperty(e,"DOWN",{get:function(){return"down"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"MOVE",{get:function(){return"move"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"UP",{get:function(){return"up"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"TOUCH_DOWN",{get:function(){return"touchstart"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"TOUCH_MOVE",{get:function(){return"touchmove"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"TOUCH_UP",{get:function(){return"touchend"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"MOUSE_DOWN",{get:function(){return"mousedown"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"MOUSE_MOVE",{get:function(){return"mousemove"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"MOUSE_UP",{get:function(){return"mouseup"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"FLOAT_MOVE",{get:function(){return"mousemove"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"FLOAT_END",{get:function(){return"end"},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"id",{get:function(){return this._id},set:function(t){this._id=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this._alpha},set:function(t){this._alpha=t,this.sUpdata()},enumerable:!0,configurable:!0}),e.prototype.setBackGround=function(t){this._img=t,this.sUpdata()},e.prototype.getIndexForParents=function(){return this.parent?this.parent.getChildIndex(this):-1},e.prototype.changeIndexForParents=function(t){if(this.parent){var e=this.parent.getChildIndex(this);this.parent.changeChildIndex(e,t)}},Object.defineProperty(e.prototype,"right",{get:function(){return this.left+this.width},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bottom",{get:function(){return this.top+this.height},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"ctx",{get:function(){return this._ctx},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"canvas",{get:function(){return this._canvas},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"parent",{get:function(){return this.container?this.container.parent:this._parent},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"container",{get:function(){return this._container},enumerable:!0,configurable:!0}),e.prototype.addParent=function(t){return!this._parent&&(this._parent=t,!0)},e.prototype.addContainer=function(t){return!this._container&&(this._container=t,!0)},e.prototype.removeParent=function(){this._parent=null,this._container=null},Object.defineProperty(e.prototype,"width",{get:function(){return this._canvas.width},set:function(t){this._canvas.width=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._canvas.height},set:function(t){this._canvas.height=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"nowType",{get:function(){return this._nowType},set:function(e){this._container&&e==t.ViewType.CHANGE&&(this._container.nowType=t.ViewType.CHANGE),this._nowType=e},enumerable:!0,configurable:!0}),e.prototype.init=function(){this._canvas=document.createElement("canvas"),this._ctx=this._canvas.getContext("2d"),this.left=0,this.top=0},e.prototype.addTouchEventListener=function(t){this._touchListener=t},e.prototype.addFloatMoveEvent=function(t){this._floatMoveListener=t},e.prototype.addMouseWheelEventListener=function(t){this._mouseWheelListener=t},e.prototype.onTouchEvent=function(t){return!!this._touchListener&&this._touchListener(t)},e.prototype.onFloatEvent=function(t){return!!this._floatMoveListener&&this._floatMoveListener(t)},e.prototype.onMouseWheelEvent=function(t){return!!this._mouseWheelListener&&this._mouseWheelListener(t)},e.prototype.sUpdata=function(){this.nowType=i.CHANGE},e.prototype.draw=function(e){if(e.clearRect(0,0,this.width,this.height),e.globalAlpha=this.alpha,this._img){if(!this._img.complete)return void(this.nowType=t.ViewType.CHANGE);e.drawImage(this._img,0,0,this.width,this.height)}this.onDraw&&this.onDraw(e),this.nowType=t.ViewType.SUCCESS},e}();t.View=n;var r=function(e){function n(){e.call(this),this._children=new Array}return __extends(n,e),n.prototype.removeChildrenByClass=function(t){t:for(var e=0;e<this._children.length;e++)for(var i=0;i<t.length;i++)if(this._children[e].constructor==t[i]){this._children.splice(e,1),e--;continue t}},Object.defineProperty(n.prototype,"layout",{get:function(){return this._layout},set:function(t){this._layout=t},enumerable:!0,configurable:!0}),n.prototype.upDataLayout=function(){this._layout&&this._layout.useLayout()},Object.defineProperty(n.prototype,"children",{get:function(){return this._children},enumerable:!0,configurable:!0}),n.prototype.contianerDraw=function(t){this.draw(t);for(var e=0;e<this._children.length;e++){var r=this._children[e];r.nowType==i.CHANGE&&(r instanceof n?r.contianerDraw(r.canvas.getContext("2d")):r.draw(r.canvas.getContext("2d"))),this.ctx.drawImage(r.canvas,r.left,r.top)}},n.prototype.cleanChildren=function(){this._children.splice(0,this._children.length)},n.prototype.hasID=function(t){for(var e=0;e<this._children.length;e++)if(t.id&&t.id==this._children[e].id)return!0;return!1},n.prototype.getViewByID=function(t){for(var e=0;e<this._children.length;e++)if(t&&t==this._children[e].id)return this._children[e]},n.prototype.addChild=function(e){return!(this.hasID(e)||!e.addParent(this.parent)||!e.addContainer(this))&&(this._children.push(e),e.nowType=t.ViewType.CHANGE,this.nowType=t.ViewType.CHANGE,!0)},Object.defineProperty(n.prototype,"maxIndex",{get:function(){var t=this._children.length-1;return t>0?this._children.length-1:0},enumerable:!0,configurable:!0}),n.prototype.changeChildIndex=function(t,e){var i=e;i<0?i=0:i>=this._children.length&&(i=this._children.length-1);var n=this._children.splice(t,1);this._children.splice(i,0,n[0])},n.prototype.getChildIndex=function(t){for(var e=0;e<this._children.length;e++)if(t==this._children[e])return e;return-1},n.prototype.removeChild=function(e){if(e.parent)for(var i=0;i<this._children.length;i++)if(this._children[i]==e){var n=this._children.splice(i,1);n[0].removeParent()}this.nowType=t.ViewType.CHANGE},n.prototype.sUpdataViews=function(t){t:for(var e=0;e<this._children.length;e++)for(var i=0;i<t.length;i++)if(this._children[e].constructor==t[i]){this._children[e].sUpdata(),t.splice(i,1);continue t}},n.prototype.cleanAction=function(){this._actionChild instanceof n&&(this._actionChild==this||this._actionChild.cleanAction()),this._actionChild=null},n.prototype.issue=function(t){if(t.offX-=this.left,t.offY-=this.top,this._actionChild)return this._actionChild instanceof n?this._actionChild==this?(t.offX+=this.left,t.offY+=this.top,this.onTouchEvent(t)):this._actionChild.issue(t):this._actionChild.onTouchEvent(t);for(var e=this._children.length-1;e>=0;e--){var i=this._children[e];if(t.offX>i.left&&t.offX<i.right&&t.offY>i.top&&t.offY<i.bottom){if(i instanceof n){if(i.issue(t))return this._actionChild=i,!0;continue}if(i.onTouchEvent(t))return this._actionChild=i,!0}else;}return t.offX+=this.left,t.offY+=this.top,!!this.onTouchEvent(t)&&(this._actionChild=this,!0)},n}(n);t.Container=r}(view||(view={}));var animations;!function(t){var e=function(){function t(){this.runTime=0}return t.prototype.play=function(t,e,i,n,r,o){if(0==this.runTime){var h=e-t,s=n-i,a=h/(r/10),c=s/(r/10);o.left=t,o.top=i,this.run(a,c,o,h,e,n)}},t.prototype.run=function(t,e,i,n,r,o){var h=this;setTimeout(function(){return i.top+=e,i.left+=t,h.runTime+=t,Math.abs(h.runTime)>=Math.abs(n)?(i.top=o,i.left=r,h.runTime=0,void(h.over&&h.over(i))):void h.run(t,e,i,n,r,o)},10)},t}();t.Trans=e;var i=function(){function t(){this.runTime=0}return t.prototype.play=function(t,e,i,n){if(0==this.runTime){var r=e-t,o=r/(i/10);n.alpha=t,this.run(o,n,r,e)}},t.prototype.run=function(t,e,i,n){var r=this;setTimeout(function(){return e.alpha+=t,r.runTime+=t,Math.abs(r.runTime)>=Math.abs(i)?(e.alpha=n,r.runTime=0,void(r.over&&r.over(e))):void r.run(t,e,i,n)},10)},t}();t.Alpha=i}(animations||(animations={}));var widget;!function(t){var e=function(){function e(t){this._scrollView=t}return e.prototype.upDataList=function(){this._arr=new Array;for(var e=0;e<this.getMaxNum();e++)this._arr[e]=new t.Button,this._arr[e].width=this.getBtnWidth(),this._arr[e].height=this.getBtnHight(),this._arr[e].txt=this._scrollView.eventShowList[e].name,this._arr[e].txtColor="white",this._arr[e]._btn_bg.src=this._scrollView.scrollBtnImg,this._arr[e]._btn_bg_press.src=this._scrollView.scrollBtnImg_press},e.prototype.getMaxNum=function(){return this._scrollView.eventShowList.length},e.prototype.getBtnHight=function(){return this._scrollView.LISTBTN_HEIGHT},e.prototype.getBtnWidth=function(){return this._scrollView.LISTBTN_WIDTH},e.prototype.getBtn=function(t){var e=this;return this._arr[t].addClickEvent(function(){e._scrollView.scale=e._scrollView.eventShowList[t].scale,e._scrollView.removeListBtn(),e._scrollView.listBtnAction&&e._scrollView.listBtnAction(t)}),this._arr[t]},e}();!function(t){t[t.BIGDATA=0]="BIGDATA",t[t.SMALLDATA=1]="SMALLDATA"}(t.ScrollViewType||(t.ScrollViewType={}));var i=t.ScrollViewType,n=function(e){function i(i,n){var o=this;e.call(this),this._titleHeight=30,this._ipen=new iPen(this.canvas),this.onDraw=function(t){o._ipen.readDraw("black",1),t.fillStyle="white",t.fillRect(0,0,o.width,o.height),t.rect(0,0,o.width,o.height),o._ipen.drawOver()},this.layout=new t.EasyLayout(this),this._title=new view.Container,this._box=new view.Container,this._title.height=this._titleHeight,this._close=new a,this.initBtn(this._close),this._close.width=45,this._big=new a,this.initBtn(this._big),this._small=new a,this.initBtn(this._small);var h=new r(this._title);h.float="right",this._title.layout=h,this.height=n+this._titleHeight,this._box.height=n,this._box.width=this.width=this._title.width=i,this._title.addChild(this._close),this._title.addChild(this._big),this._title.addChild(this._small);var s=0,c=0;this._title.addTouchEventListener(function(t){switch(t.touchType){case view.View.DOWN:s=t.clientX-o.left,c=t.clientY-o.top;break;case view.View.MOVE:o.left=t.clientX-s,o.top=t.clientY-c}return!0}),this.addChild(this._title),this.addChild(this._box),this._title.upDataLayout(),this.upDataLayout()}return __extends(i,e),Object.defineProperty(i.prototype,"box",{get:function(){return this._box},enumerable:!0,configurable:!0}),i.prototype.setCloseAction=function(t){this._close.addClickEvent(t)},i.prototype.seTheme=function(t,e,i,n,r,o,h){this._title.setBackGround(t),this._close._btn_bg.src=e,this._close._btn_bg_press.src=r,this._big._btn_bg.src=n,this._big._btn_bg_press.src=h,this._small._btn_bg.src=i,this._small._btn_bg_press.src=o},i.prototype.initBtn=function(t){t.txt="",t.height=this._title.height-7,t.width=40},i}(view.Container);t.Window=n;var r=function(){function t(t){this._margin=0,this.float="right",this.maxWidth=0,this._container=t}return Object.defineProperty(t.prototype,"margin",{get:function(){return this._margin},set:function(t){this._margin=t},enumerable:!0,configurable:!0}),t.prototype.floatLeft=function(){var t=this._margin,e=this._margin,i=0;this.maxWidth<=0&&(this.maxWidth=this._container.width);for(var n=0;n<this._container.children.length;n++)this._container.children[n].ignoreLayout||(e+this._container.children[n].width>this.maxWidth&&(e=this._margin,t+=i+2*this._margin,i=this._container.children[n].height),this._container.children[n].top=t,this._container.children[n].left=e,e=this._container.children[n].right+2*this._margin,this._container.children[n].height>i&&(i=this._container.children[n].height))},t.prototype.floatRight=function(){var t=0;this.maxWidth<=0&&(this.maxWidth=this._container.width);for(var e=this._margin,i=this.maxWidth-this._margin,n=0;n<this._container.children.length;n++)this._container.children[n].ignoreLayout||(i-this._container.children[n].width<0&&(i=this.maxWidth-this._margin,e+=t+2*this._margin,t=this._container.children[n].height),this._container.children[n].top=e,this._container.children[n].left=i-this._container.children[n].width,i=this._container.children[n].left-2*this._margin,this._container.children[n].height>t&&(t=this._container.children[n].height))},t.prototype.useLayout=function(){if(this._container.children.length>0)switch(this.float){default:case"left":this.floatLeft();break;case"right":this.floatRight()}},t}();t.EasyLayout2=r;var o=function(){function t(t){this.maxHeight=0,this._margin=0,this._container=t}return Object.defineProperty(t.prototype,"margin",{get:function(){return this._margin},set:function(t){this._margin=t},enumerable:!0,configurable:!0}),t.prototype.useLayout=function(){if(this._container.children.length>0){var t=this._margin,e=this._margin,i=0;this.maxHeight<=0&&(this.maxHeight=this._container.height);for(var n=0;n<this._container.children.length;n++)this._container.children[n].ignoreLayout||(t+this._container.children[n].height>=this.maxHeight&&(t=this._margin,e+=i+2*this._margin,i=this._container.children[n].width),this._container.children[n].top=t,this._container.children[n].left=e,t=this._container.children[n].bottom+2*this._margin,this._container.children[n].width>i&&(i=this._container.children[n].width))}},t}();t.EasyLayout=o;var h=function(t){function n(){var r=this;t.call(this),this.type=i.SMALLDATA,this.LISTBTN_HEIGHT=30,this.LISTBTN_WIDTH=60,this._isShowEvents=!1,this._scale=0,this._scrollOFF=0,this.eventShowList=[],this.borderColor="blue",this._scrollButton=new view.View,this.height=this._scrollButton.width=this._scrollButton.height=n.SCROLL_WIDTH,this._pen=new iPen(this.canvas),this._bg=new Image,this._scroll_bg=new Image,this._scroll_bg_press=new Image,this._handler=new e(this),this._listButton=new s(this._handler),this.setBackGround(this._bg),this._scrollButton.setBackGround(this._scroll_bg),this.addChild(this._scrollButton),this.bgSRC="lib/img/RulerBg.png",this.scrollbgSRC="lib/img/btn1.png",this.scrollPressbgSRC="lib/img/btn1_press.png",this.scrollBtnImg="lib/img/btn2.png",this.scrollBtnImg_press="lib/img/btn2_press.png",this._scrollButton.addTouchEventListener(function(t){switch(t.touchType){case view.View.DOWN:r._scrollButton.setBackGround(r._scroll_bg_press),r._scrollOFF=t.clientX-r._scrollButton.left,r.scrollAction&&r.scrollAction(t.touchType,r._scale);break;case view.View.MOVE:var e=t.clientX-r._scrollOFF;if(e=e<0?0:e>r.fakeWidth?r.fakeWidth:e,r.type==i.SMALLDATA){var n=e/r.fakeWidth;r.scale=n}else r._scrollButton.left=e;r.scrollAction&&r.scrollAction(t.touchType,r._scale);break;case view.View.UP:if(r._scrollButton.setBackGround(r._scroll_bg),r.type!=i.SMALLDATA){var e=t.clientX-r._scrollOFF;e=e<0?0:e>r.fakeWidth?r.fakeWidth:e;var n=e/r.fakeWidth;r.scale=n}r.scrollAction&&r.scrollAction(t.touchType,r._scale)}return r._scrollButton.sUpdata(),!0});var o=!0;this.addTouchEventListener(function(t){if(t.touchType==view.View.DOWN&&(o=!0),t.type==view.View.TOUCH_DOWN){var e=t.offX/r.fakeWidth;e=e<0?0:e>1?1:e,r.eventShowList=[];for(var i=0;i<r.handler.getMaxNum();i++){var n=r.handler.getEventScale(i);if(n>e-.01&&n<e+.01){var h={scale:n,name:r.handler.getEventName(i)};r.eventShowList.push(h)}}if(r.eventShowList.length>0){r._handler.upDataList(),r._listButton.onCreate(),r._listButton.top=r.top-r._listButton.height;var s=t.offX-r._handler.getBtnWidth()/2;s=s<0?0:s>r.width-r._handler.getBtnWidth()?r.width-r._handler.getBtnWidth():s,r._listButton.parent||(r._listButton.left=s,r.parent.addChild(r._listButton),o=!1)}else r.removeListBtn()}if(o)switch(t.touchType){case view.View.UP:var e=t.offX/r.fakeWidth;r.scale=e,r.rulerClickAction&&r.rulerClickAction(e)}return r._scrollButton.sUpdata(),!0}),this.addFloatMoveEvent(function(t){if(!r.handler||!r.isShowEvents)return!1;switch(t.touchType){case view.View.MOVE:var e=t.offX/r.fakeWidth;e=e<0?0:e>1?1:e,r.eventShowList=[];for(var i=0;i<r.handler.getMaxNum();i++){var n=r.handler.getEventScale(i);if(n>e-.01&&n<e+.01){var o={scale:n,name:r.handler.getEventName(i)};r.eventShowList.push(o)}}if(r.eventShowList.length>0){r._handler.upDataList(),r._listButton.onCreate(),r._listButton.height=r._handler.getMaxNum()*r._handler.getBtnHight()+1,r._listButton.top=r.top-r._listButton.height;var h=t.offX-r._handler.getBtnWidth()/2;h=h<0?0:h>r.width-r._handler.getBtnWidth()?r.width-r._handler.getBtnWidth():h,r._listButton.parent||(r._listButton.left=h,r.parent.addChild(r._listButton))}else r.removeListBtn()}return!0}),this._listButton.addFloatMoveEvent(function(t){switch(t.touchType){case view.View.FLOAT_END:r.removeListBtn()}return!0}),this.onDraw=function(t){if(r.handler&&r.isShowEvents)for(var e=0;e<r.handler.getMaxNum();e++)t:switch(r.handler.getEventType(e)){case n.SCROLL_EVENTS_TYPE_LINE:r._pen.readDraw(r.handler.getEventColor(e),1);var i=r.handler.getEventScale(e)*r.fakeWidth;t.moveTo(i,0),t.lineTo(i,r.height),r._pen.drawOver();break t;case n.SCROLL_EVENTS_TYPE_RECT:r._pen.readDraw(r.handler.getEventColor(e),5);var i=r.handler.getEventScale(e)*r.fakeWidth;t.moveTo(i,0),t.lineTo(i,r.height/2),t.fillStyle=r.handler.getEventColor(e),t.fillRect(i,0,r.handler.getEventLength(e)*r.fakeWidth,r.height/2),r._pen.drawOver()}r._pen.readDraw(r.borderColor,2),t.rect(0,0,r.width,r.height),r._pen.drawOver()}}return __extends(n,t),Object.defineProperty(n.prototype,"isShowEvents",{get:function(){return this._isShowEvents},set:function(t){this._isShowEvents=t,this.sUpdata()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"handler",{get:function(){return this._eventHandler},set:function(t){this._eventHandler=t,t.target=this},enumerable:!0,configurable:!0}),n.prototype.removeListBtn=function(){this._listButton.parent&&this._listButton.parent.removeChild(this._listButton)},Object.defineProperty(n.prototype,"bgSRC",{set:function(t){this._bg.src=t},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"scrollbgSRC",{set:function(t){this._scroll_bg.src=t},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"scrollPressbgSRC",{set:function(t){this._scroll_bg_press.src=t},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"fakeWidth",{get:function(){return this.width-n.SCROLL_WIDTH},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"scale",{get:function(){return this._scale},set:function(t){var e=t<0?0:t>1?1:t;this._scale=e,this._scrollButton.left=e*this.fakeWidth,this.sUpdata(),this.scaleChangeAction&&this.scaleChangeAction(this._scale)},enumerable:!0,configurable:!0}),n.prototype.onCreate=function(t){this.width=t,this._scrollButton.left=this._scale*t,this.sUpdata()},n.SCROLL_EVENTS_TYPE_LINE=0,n.SCROLL_EVENTS_TYPE_RECT=1,n.SCROLL_WIDTH=35,n}(view.Container);t.ScrollView=h;var s=function(t){function e(e){t.call(this),this._handler=e,this.layout=new o(this),this.initHW(),this.onCreate()}return __extends(e,t),Object.defineProperty(e.prototype,"handler",{get:function(){return this._handler},enumerable:!0,configurable:!0}),e.prototype.initHW=function(){this.height=this._handler.getMaxNum()*this._handler.getBtnHight(),this.width=this._handler.getBtnWidth()},e.prototype.onCreate=function(){this.cleanChildren();for(var t=0;t<this._handler.getMaxNum();t++){var e=this._handler.getBtn(t);e.width=this._handler.getBtnWidth(),e.height=this._handler.getBtnHight(),this.addChild(e)}this.layout.maxHeight=0,this.upDataLayout()},e}(view.Container);t.ListButton=s;var a=function(t){function e(){var e=this;t.call(this),this._txt="Button",this._txtColor="black",this._txtFont=14,this._pen=new iPen(this.canvas),this.width=60,this.height=30,this._btn_bg=new Image,this._btn_bg.src="src/lib/img/btn.png",this._btn_bg_press=new Image,this._btn_bg_press.src="src/lib/img/btn_press.png",this.setBackGround(this._btn_bg),this.onDraw=function(t){e._pen.readDraw(e._txtColor,1),t.font=e._txtFont+"px SimHei";var i=t.measureText(e._txt).width,n=(e.width-i)/2-2;n=n>0?n:0,t.fillStyle=e._txtColor,t.fillText(e._txt,n,e.height/2+e._txtFont/4,e.width),e._pen.drawOver()},this.addTouchEventListener(function(t){switch(t.touchType){case view.View.DOWN:e.setBackGround(e._btn_bg_press);break;case view.View.UP:e.setBackGround(e._btn_bg),e._clickFun&&t.target==e.parent.canvas&&t.offX>e.left&&t.offX<e.right&&t.offY>e.top&&t.offY<e.bottom&&e._clickFun()}return!0})}return __extends(e,t),Object.defineProperty(e.prototype,"txt",{get:function(){return this._txt},set:function(t){this._txt=t,this.sUpdata()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"txtColor",{get:function(){return this._txtColor},set:function(t){this._txtColor=t,this.sUpdata()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"txtFont",{get:function(){return this._txtFont},set:function(t){this._txtFont=t,this.sUpdata()},enumerable:!0,configurable:!0}),e.prototype.addClickEvent=function(t){this._clickFun=t},e}(view.View);t.Button=a}(widget||(widget={}));