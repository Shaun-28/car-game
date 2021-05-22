class Game{
constructor(){

}
getState(){
 var gameStateRef = database.ref('gameState')
 gameStateRef.on('value',function(data){
     gameState = data.val()
 })   
}
update(state){
database.ref('/').update({
    gameState:state
})

}
async start(){
    if(gameState === 0){
        player = new Player()
        var playerCountRef = await database.ref('playerCount').once('value')
        if(playerCountRef.exists()){
        playerCount = playerCountRef.val()
        player.getCount()
        }
    
    
    form = new Form()
    form.display()
    }
    car1 = createSprite(100,100)
    car1.addImage("car1",car1Image)
    car2 = createSprite(300,100)
    car2.addImage("car2",car2Image)
    car3 = createSprite(500,100)
    car2.addImage("car3",car3Image)
    car4 = createSprite(700,100)
    car4.addImage("car4",car4Image)
    cars = [car1,car2,car3,car4]
}

play(){
 form.hide()
 textSize(30)
text("Game Start",120,100)

Player.getPlayerInfo()
if(allPlayer !== undefined){
    background('black')
    image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
    var index = 0
    var x = 175
    var y 
    var displayPosition = 130
    textSize(15)
    for(var plr in allPlayer){
        index = index+1
        x = x+200
        y = displayHeight-allPlayer[plr].distance
        cars[index-1].x=x
        cars[index-1].y=y
    if(index=== player.index){
        stroke(10)        
        fill("red")
        ellipse(x,y,60,60)
       cars[index-1].shapeColour = 'red'
       camera.position.x = displayWidth/2
       camera.position.y = cars[index-1].y
        }
   // displayPosition += 20
   // text(allPlayer[plr].name+": "+allPlayer[plr].distance,120,displayPosition)
    }
}

if(keyIsDown(UP_ARROW)&&player.index!==null){
    player.distance+=50
    player.update()
}
if(player.distance>3860){
    gameState = 2
}
drawSprites()
}
end(){
    console.log('Game Ended')
}
}