namespace SpriteKind {
    export const Image = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (spriteutils.distanceBetween(myEnemy, mySprite) >= 50) {
        myEnemy.setVelocity(0, 0)
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
        animation.runImageAnimation(
        myEnemy,
        [img`
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            `,img`
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . 3 3 3 3 3 3 . . . . . 
            . . . . . 3 3 3 3 3 3 . . . . . 
            `,img`
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . 3 3 3 3 3 3 3 3 3 3 . . . 
            . . . 3 3 3 3 3 3 3 3 3 3 . . . 
            `,img`
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
            . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
            `,img`
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
            . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
            `,img`
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `],
        50,
        false
        )
        pause(1500)
    }
})
function wait (int2: number) {
    pause(int2 * 1000)
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("You've found my easter egg and it's credits!")
    sprites.destroy(mySprite)
    sprites.destroy(myEnemy)
    textSprite = textsprite.create("Created by Arjun Das")
    textSprite.setIcon(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f d d d d d d e f f . 
        . f f f f d f f d d f f f f f . 
        . . f e f d d e e d d d e f . . 
        . . f e 4 c d d d d c d e f . . 
        . . e f e d c c c c d d f . . . 
        . . e 4 d d e 2 2 2 2 f e f . . 
        . . . e d d e 2 2 2 2 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `)
    textSprite.setPosition(80, 60)
    textSprite.setVelocity(0, -20)
    wait(2)
    textSprite2 = textsprite.create("Assets by MakeCode & AGS")
    textSprite2.setScale(1, ScaleAnchor.Middle)
    textSprite2.setIcon(img`
        2 2 2 2 2 2 2 2 . 7 7 7 7 7 7 7 
        2 2 2 2 2 2 2 2 . 7 7 7 7 7 7 7 
        2 2 2 2 2 2 2 2 . 7 7 7 7 7 7 7 
        2 2 2 2 2 2 2 2 . 7 7 7 7 7 7 7 
        2 2 2 2 2 2 2 2 . 7 7 7 7 7 7 7 
        2 2 2 2 2 2 2 2 . 7 7 7 7 7 7 7 
        2 2 2 2 2 2 2 2 . 7 7 7 7 7 7 7 
        2 2 2 2 2 2 2 2 . 7 7 7 7 7 7 7 
        . . . . . . . . . . . . . . . . 
        6 6 6 6 6 6 6 6 . 5 5 5 5 5 5 5 
        6 6 6 6 6 6 6 6 . 5 5 5 5 5 5 5 
        6 6 6 6 6 6 6 6 . 5 5 5 5 5 5 5 
        6 6 6 6 6 6 6 6 . 5 5 5 5 5 5 5 
        6 6 6 6 6 6 6 6 . 5 5 5 5 5 5 5 
        6 6 6 6 6 6 6 6 . 5 5 5 5 5 5 5 
        6 6 6 6 6 6 6 6 . 5 5 5 5 5 5 5 
        `)
    textSprite2.setPosition(80, 60)
    textSprite2.setVelocity(0, -20)
    wait(2)
    textSprite3 = textsprite.create("Tetris by Alexey Pajitnov")
    textSprite3.setScale(0.98, ScaleAnchor.Middle)
    textSprite3.setIcon(img`
        f f f f f f . . . . . . . . . . 
        f 8 8 6 9 f . . . . . . . . . . 
        f 8 8 8 6 f . . . . . . . . . . 
        f 8 8 8 8 f . . . . . . . . . . 
        f 8 8 8 8 f . . . . . . . . . . 
        f f f f f f f f f f f f f f f f 
        f 8 8 6 9 f 8 8 8 8 f 8 8 8 8 f 
        f 8 8 8 6 f 8 8 8 8 f 8 8 8 8 f 
        f 8 8 8 8 f 8 8 8 6 f 8 8 8 6 f 
        f 8 8 8 8 f 8 8 6 9 f 8 8 6 9 f 
        f f f f f f f f f f f f f f f f 
        `)
    textSprite3.setPosition(80, 60)
    textSprite3.setVelocity(0, -20)
    wait(2)
    textSprite4 = textsprite.create("Duck Hunt By")
    textSprite4.setScale(1, ScaleAnchor.Middle)
    textSprite4.setIcon(img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 d 4 c . . 
        . . . . b 5 5 1 f f d d 4 4 4 b 
        . . . . b 5 5 d f b 4 4 4 4 b . 
        . . . b d 5 5 5 5 4 4 4 4 b . . 
        . . b d d 5 5 5 5 5 5 5 5 b . . 
        . b d d d d 5 5 5 5 5 5 5 5 b . 
        b d d d b b b 5 5 5 5 5 5 5 b . 
        c d d b 5 5 d c 5 5 5 5 5 5 b . 
        c b b d 5 d c d 5 5 5 5 5 5 b . 
        . b 5 5 b c d d 5 5 5 5 5 d b . 
        b b c c c d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `)
    textSprite4.setPosition(80, 60)
    textSprite4.setVelocity(0, -20)
    textSprite4a = textsprite.create(" Shigeru Miyamoto")
    textSprite4a.setPosition(80, 70)
    textSprite4a.setVelocity(0, -20)
})
let textSprite4a: TextSprite = null
let textSprite4: TextSprite = null
let textSprite3: TextSprite = null
let textSprite2: TextSprite = null
let textSprite: TextSprite = null
let mySprite: Sprite = null
let myEnemy: Sprite = null
myEnemy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f f f f f . . . . . . . . . . 
    . f 2 4 2 f . . . . . . . . . . 
    . f 4 4 4 f . . . . . . . . . . 
    . f 2 4 2 f . . . . . . . . . . 
    . f f f f f f f f f f f f f . . 
    . f 2 4 2 f 4 2 4 f 4 4 2 f . . 
    . f 4 2 4 f 2 4 2 f 4 4 4 f . . 
    . f 2 4 2 f 4 2 4 f 2 4 4 f . . 
    . f f f f f f f f f f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . f f 1 1 1 1 1 1 1 f f . . . 
    . f 1 1 . . . f . . . 1 1 f . . 
    . 1 . . . . . f . . . . . 1 . . 
    f 1 . . . . . f . . . . . 1 f . 
    1 . . . . . . f . . . . . . 1 . 
    1 . . . . . . f . . . . . . 1 . 
    1 f f f f f f 1 f f f f f f 1 . 
    1 . . . . . . f . . . . . . 1 . 
    1 . . . . . . f . . . . . . 1 . 
    1 . . . . . . f . . . . . . 1 . 
    1 f . . . . . f . . . . . f 1 . 
    . 1 . . . . . f . . . . . 1 . . 
    . 1 f f . . . f . . . f f 1 . . 
    . . 1 1 f f f f f f f 1 1 . . . 
    `, SpriteKind.Player)
myEnemy.setScale(1.9, ScaleAnchor.Middle)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff455fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ee5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5cfffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe5557cccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe5555cccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe5557cccccffffcfffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffff
    fffffffff55feffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff557cccccccffcccffffffffffffffffffffffffffffffffffffffffffffff45ffffffffffffffffffff
    fffffff555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55ccccccccfffffffffffffffffffffffffffffffffffffffffffffffff5555554fffffffffffffffff
    fffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ccccccccffffccfffffffffffffffffffffffffffffffffffffffffff555554ffffffffffffffffff
    fffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccfffccfffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffff
    fffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccfffffffffffffffffffffffffffffffffffffffffffffffff55555efffffffffffffffff
    ffffffff55ff5efffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffff555ff55fffffffffffffffff
    ffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe444eccccccceccecccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeee444444eeee4cceceeceeec4efeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe5554444eeee444ee44eee4eee44444eefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444ee4eeeeee4444ee4444ee44eee44444eeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe444444eeeeee44444eee4444eee444ee44444ee4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44444444eeeeeee4444ee444444ee444eeee44eee4444fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444eee444eee44ee4444444ee4444eeeeeee4444444fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444eee444444eeeee4444eeeeeeeee4eeee44444444444fffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444eee44444444eeeeeeeeeee4eeeeeeeeee444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff444444444ee44444444444eeeeeee44444ee44444eee444444444444fffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff444444444ee44444444444ee44444444444ee444444ee4444444444444ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff444444444ee444444444444ee444444444444ee444444ee444444444444ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff44444444ee444444444444ee4444444444444ee4444444ee444444444444fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff44444444ee4444444444444ee4444444444444ee4444444ee444444444444effffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffe4444444eee444444444444eee44444444444444ee4444444ee444444444444ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff44444444ee44444444444411d44444444444444d1d4444444ee444444444444efffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff44444444ee444444444444111dd444444444444d11ddb444444ee444444444444fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff44444444ee44444444444d115ddd444444444441155ddb44444ee4444444444444ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff44444444ee44444444444411555dd4444444444115555dd444444ee444444444444efffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff44444444ee444444444441155555dd4444444431555555dd44444ee4444444444444effffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff4444444ee4444444444445555555dd4444444445554e45dd444444ee444444444444effffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff4444444ee44444444444555ee455dd4444444455554ee55dd44444ee444444444444effffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff4444444ee444444444444454ee44ddd44444444545544eeddb44444ee444444444444effffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff4444444ee44444444444444ee44444444444444444444ee444444444ee44444444444eefffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff4444444ee44444444444444ee44444444444444444444ee444444444ee44444444444eefffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff444444ee444444444444444ee44444444444444444444ee4444444444ee4444444444eefffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff444444ee44444444444444ee444444444411d444444444e4444444444ee4444444444eefffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff444444ee44444444444444ee444444444111dd44444444ee444444444ee4444444444eefffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff44444ee444444444444444ee444444444115dd44444444ee444444444ee4444444444eefffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff44444ee444444444444444e44444444411555dd4444444ee4444444444ee444444444eefffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff44444ee44444444444444ee4444444441d555dd4444444ee4444444444ee44444444eeefffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff44444ee44444444444444ee444444445dddddddd444444eed444444444ee44444444eeecccccccccccccc88888888888888888888888888888
    888888888888888888888888888888888888888888888844444e444444444444444e51d4444445dddddddd444444edd4444444444e4444444eeee8888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888c444ee444444444444444e511144444444444444444444ddd4444444444e4444444eeec8888888888888888888888888888888888888888888
    888888866b9999999999999999999999999999999988888444ee44444444444444ee55111d444444444444444454dd44444444444ee444444eee88888888888888888888888888888888888888888888
    99999999999999999999999999999999999999999968888444ee44444444444444ee4555111d444444444444455ddb44444444444ee44444eeee88888888888888888888888888888888888888888888
    99996666688888888888888888888888888888888888888844ee44444444444444ee4455551144444444444445ddde44444444444ee44444eeec88888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888844ee44444444444444ee4445555544455551114445ddee44444444444ee4444eeee888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888884ee44444444444444ee444555555555555555555dddee44444444444ee4444eeec888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888844ee4444444444444e4444455555555555555555dd4ee44444444444ee444eee88888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888884ee4444444444444e444444555555511115555dd44ee44444444444ee44eeeffff88888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888ee4444444444444ee44444455dddd511dddddd444ee4444444444ee4eeeeffffffffc8888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888ce4444444444444ee44444445dd444ddddbdd4444ee4444444444eeeeeeffffffffff8888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888ee444444444444ee44444444bd44455444db4444ee4444444444eeeecfffffffffffff88888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888e444444444444ee444444444444444444444444ee444444444eeeefffffffffffffffc8888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888888884444444444ee444444444444444444444444ee4444444eeeeeffffffffffffffffff888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888884444444444ee44444444444444444444444ee44444eeeeefffffffffffffffffff8888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888e4444444ee4444444444444444444444ee444eeeeeefffffffffffffffffffff8888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888e4444ee4444444444444444444444eeeeeeeefffffffffffffffffffffff88888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888feeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffc888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888fffffffffeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffff8888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffff888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888888cffffffffffffffffffffffffffffffffffffffffffc888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888888888888888888888888cffcffffffffffffffffffffcc88888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886866666666666b9999888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886999999999999999999999999999999999999999999888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889999999999999999999999966666666666666688888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    `)
myEnemy.setBounceOnWall(true)
myEnemy.setVelocity(75, 75)
