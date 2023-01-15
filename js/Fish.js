AFRAME.registerComponent('fish',{
    init:function(){
        for(var i=1 ; i<=20 ; i++){
            var id=`fish${i}`
            var posX= (Math.random()*3000 +(-1000))
            var posZ= (Math.random()*3000 +(-1000))
            var posY= (Math.random()*2 +(-1))
            var position={x:posX,y:posY,z:posZ}      
            this.createfish(id,position)      
        }
    },

    createfish: function(id, position){
        var island= document.querySelector('#island')
        var fish= document.createElement('a-entity')
        fish.setAttribute('id',id)
        fish.setAttribute('position', position)
        fish.setAttribute('scale',{x:500, y:500, z:500})
        fish.setAttribute('gltf-model', './assets/models/fish/scene.gltf')
        fish.setAttribute('animation-mixer', {})
        fish.setAttribute('static-body', {shape:'sphere', sphereRadius:5})
        fish.setAttribute('game-play', {elementId: `#${id}`})
        island.appendChild(fish)
        

    }
})