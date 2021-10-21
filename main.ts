controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    playerSprite.sayText("Want To Go To The NEXT Level? Loading Level 2 Reset to Return Level 1", 5000, true)
    tiles.setTilemap(tilemap`level2 Dungeon`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    swordSwung = true
    Player2 = sprites.create(assets.image`GirlFriend Battling`, SpriteKind.Player)
    playerSprite.setImage(assets.image`PaulSword`)
    pause(5000)
    playerSprite.setImage(assets.image`PaulTypeSkin0`)
    Player2 = sprites.create(img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f 3 3 f f e e e e f f 3 3 f . 
        . f b b f b f e e f b f b b f . 
        . f b b e 1 f 4 4 f 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f e e e e f f f b b f 
        . f e e f b d d d d b f e e f . 
        . . e 4 c d d d d d d c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `, SpriteKind.Player)
    swordSwung = false
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (swordSwung == true) {
        enemySprite.destroy(effects.fire, 2000)
    } else {
        info.changeLifeBy(-1)
    }
})
let swordSwung = false
let enemySprite: Sprite = null
let Player2: Sprite = null
let playerSprite: Sprite = null
tiles.setTilemap(tilemap`level2`)
playerSprite = sprites.create(assets.image`PaulTypeSkin`, SpriteKind.Player)
info.setLife(3)
controller.moveSprite(playerSprite)
scene.cameraFollowSprite(playerSprite)
Player2 = sprites.create(assets.image`King Pauls Girlfriend`, SpriteKind.Player)
controller.player2.moveSprite(Player2)
for (let index = 0; index < 4; index++) {
    enemySprite = sprites.create(assets.image`enemyImage`, SpriteKind.Enemy)
    enemySprite.setPosition(randint(50, 130), randint(50, 130))
    enemySprite.follow(playerSprite, 10)
}
