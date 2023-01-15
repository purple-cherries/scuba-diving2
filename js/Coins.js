AFRAME.registerComponent('coins', {
    init:function(){
        for(var i=1 ; i<=20 ; i++){
            var id=`coin${i}`
            var posX= (Math.random()*100 +(-1000))
            var posZ= (Math.random()*5 +5)
            var posY= (Math.random()*2 +(-1))
            var position={x:posX,y:posY,z:posZ}      
            this.createCoins(id,position)      
        }
    },

    createCoins:function(id, position){
        var treasureEntity= document.querySelector('#island')
        var coin= document.createElement('a-entity')
        coin.setAttribute('id',id)
        coin.setAttribute('position', position)
        coin.setAttribute('material', 'color','yellow')
        coin.setAttribute('geometry', {primitive:'circle', radius:1})
        coin.setAttribute('animation', {property:'rotation', to:'0 360 0', loop:true, dur:1000})
        coin.setAttribute('static-body', {shape:'sphere', sphereRadius:2})
        coin.setAttribute('game-play', {elementId:`#${id}`})
        treasureEntity.appendChild(coin)

    }
})