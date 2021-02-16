var wall,thickness
var bullet,speed,weight
thickness=random(22,83);

wall=createSprite(200,200,thickness,height/2);
speed=random(223,321)
weight=random(30,52)

background(80,80,80);
function hasCollided(bullet,wall)
{
    bulletRightEdge=bullet.x.bullet.width;
    wallLeftEdge=wall.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
        return true
    }
    return false;
}
if(hasCollided(bullet,wall))
{
    bullet.velocityX=0;
    


}