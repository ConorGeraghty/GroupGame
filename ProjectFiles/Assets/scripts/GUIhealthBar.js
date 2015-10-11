#pragma strict
var healthBar : GUIStyle;
var healthSRC : GameObject;
public var health :int = 100;
private var  player: playerScript;
function Start () {
	 // find the current instance of the player script:
    player = FindObjectOfType(typeof(playerScript));
}

function Update () {
 health = player.PlayerHealth;
}
function OnGUI()
{
	 GUI.Box(Rect(10,10,100,30), "Health: " + health, healthBar);
}