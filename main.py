def on_a_pressed():
    global swordSwung
    swordSwung = True
    playerSprite.set_image(assets.image("""
        PaulSword
    """))
    pause(5000)
    playerSprite.set_image(assets.image("""
        PaulTypeSkin0
    """))
    swordSwung = False
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_on_overlap(sprite, otherSprite):
    if swordSwung == True:
        enemySprite.destroy(effects.fire, 2000)
    else:
        info.change_life_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap)

swordSwung = False
enemySprite: Sprite = None
playerSprite: Sprite = None
tiles.set_tilemap(tilemap("""
    level2
"""))
playerSprite = sprites.create(assets.image("""
    PaulTypeSkin
"""), SpriteKind.player)
info.set_life(3)
controller.move_sprite(playerSprite)
scene.camera_follow_sprite(playerSprite)
for index in range(4):
    enemySprite = sprites.create(assets.image("""
        enemyImage
    """), SpriteKind.enemy)
    enemySprite.set_position(randint(50, 130), randint(50, 130))
    enemySprite.follow(playerSprite, 10)