/*
@   Name：根据设备宽度计算html标签的字号
@   Author：cuiwenchao
@   Note: 需要在zepro.js之后引入
@   Example: 1rem = 100px
@
*/
(function(desW){
    var width = document.documentElement.clientWidth;
    var styleNode = document.createElement('style');
    styleNode.innerHTML = 'html{font-size: '+width/desW*100+'px!important;}';
    document.head.appendChild(styleNode);
})(750);
