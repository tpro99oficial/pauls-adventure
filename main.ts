controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    swordSwung = true
    playerSprite.setImage(assets.image`PaulSword`)
    pause(5000)
    playerSprite.setImage(assets.image`PaulTypeSkin0`)
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
let playerSprite: Sprite = null
tiles.setTilemap(tilemap`level2`)
playerSprite = sprites.create(assets.image`PaulTypeSkin`, SpriteKind.Player)
info.setLife(3)
controller.moveSprite(playerSprite)
scene.cameraFollowSprite(playerSprite)
for (let index = 0; index < 4; index++) {
    enemySprite = sprites.create(assets.image`enemyImage`, SpriteKind.Enemy)
    enemySprite.setPosition(randint(50, 130), randint(50, 130))
    enemySprite.follow(playerSprite, 10)
}
