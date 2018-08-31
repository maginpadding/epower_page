$(function(){
	//竖向的滚动条，四个参数，可视区域ID，内容区域Id，滚动条区域，滚动条，
    function ScorllTop(id1,id2,id3,id4){
        var $container = $(id1),//可视区域
            $contanr   = $(id2),//内容区域
            $conScroll = $(id3),//滚动条活动区域
            $sroll     = $(id4),//滚动条
              startY   = 0,//开始位置  
              lastY    = 0,//结束位置
                YN     = false,
                  bBtn = true;//判断滚动条上滚还是下滚
 
            $sroll.css({'height':$container.height()*$conScroll.height()/$contanr.outerHeight()+'px'});
 
            $sroll.mousedown(function(e){
                startY = e.clientY - this.offsetTop;  
                this.setCapture && this.setCapture();//避免IE下拖拽过快鼠标失去对象
                YN = true;
                return false;
            });
 
            $sroll.mousemove(function(e){
                var maxVal = $conScroll.height() - $(this).height();
                if(YN){
                    lastY = e.clientY - startY;
                    lastY = lastY < 0 ? 0 :lastY;
                    lastY = lastY > maxVal ? maxVal : lastY;
 
                    $(this).css({'top':lastY+'px'});
                    $contanr.css({'top':-$conScroll.height()*lastY/$(this).height()+'px'});
                    window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty(); // 防止拖动文本  
                    e.stopPropagation(); 
                }
                
                return false;
            });
 
            $sroll.mouseup(function(e){
                YN = false;
                NumY = lastY;
                return false;
            });
            //为内容区域添加滑轮滚动事件
            if($contanr[0].addEventListener){
                $contanr[0].addEventListener('DOMMouseScroll',MouseScr,false);
                $conScroll[0].addEventListener('DOMMouseScroll',MouseScr,false);
            }
            //滑轮这部分代码是我参考的别人的，还不知道这句话是怎么个意思，求大神指点
            $contanr[0].onmousewheel = MouseScr;
            $conScroll[0].onmousewheel = MouseScr;
            function MouseScr(ev){
                var ev = ev || window.event,
                  TopY = 0;
                if(ev.detail){
                    bBtn = ev.detail>0  ?  true : false;
                }
                else{
                    bBtn = ev.wheelDelta<0  ?  true : false;
                }
                if(bBtn){   //下
                    TopY = $contanr.position().top-10;
                }
                else{  //上
                    TopY = $contanr.position().top+10;
                }
                var maxTop = $contanr.outerHeight()-$container.outerHeight();
                TopY = TopY > 0 ? 0 : TopY;
                TopY = TopY < -maxTop ? -maxTop : TopY;
 
                console.log($conScroll.outerHeight());
                $contanr.css({'top':TopY+'px'});
                $sroll.css({'top':$sroll.height()*Math.abs(TopY)/$conScroll.height()+'px'});
 
                if(ev.preventDefault){
                    ev.preventDefault();
                }
                else{
                    return false;
                }
            }
    }
    ScorllTop('#con','#contant','#Con_Scorll','#Do_Scorll');
});
