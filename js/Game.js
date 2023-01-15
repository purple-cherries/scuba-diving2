AFRAME.registerComponent('game-play', {
    schema:{
        elementId:{type:'string', default:'#coin1'},
    },
    init:function(){
        var duration= 120
        var timer=document.querySelector("#timer")
        this.startTimer(duration, timer)
    },
    update:function(){
        this.isCollided(this.data.elementId)

    },
    isCollided:function(id){
        const element=document.querySelector(id)
        element.addEventListener('collide', x=>{
            if(id.includes('#coin')){
                element.setAttribute('visible', false)
                this.updateScore()
                this.updateCoins()
            }
            else if(id.includes('#fish')){
                this.gameOver()
            }
        })
    },

    starTimer:function(duration,timer){
        var minutes, seconds
        setInterval(()=>{
            if(duration>=0){
                minutes= parseInt(duration/60)
                seconds= pasreInt(duration%60)
                if(minutes<10){
                    minutes='0'+minutes
                }
                if(seconds<10){
                    seconds='0'+seconds
                }
                timer.setAttribute('text', {
                    value:minutes+":"+seconds
                })
                duration-=1
            }
            else{
                this.gameOver()
            }
        },1000)
    },

    gameOver:function(){
        var diver=document.querySelector('#diver')
        var element=document.querySelector("#game_over_text")
        diver.setAttribute('dynamic-body', {mass:1})
        element.setAttribute('visible', true)
    },

    updateCoins:function(){
        var element=document.querySelector('#coins')
        var count=element.getAttribute("text").value()
        var coins= parseInt(count)
        coins-=1
        element.setAttribute('text', {value:coins})
    },

    updateScore:function(){
        var element=document.querySelector('#score')
        var count=element.getAttribute("text").value()
        var score= parseInt(count)
        score+=10
        element.setAttribute('text', {value:score})
    },

})