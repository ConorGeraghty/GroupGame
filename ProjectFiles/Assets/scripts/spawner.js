#pragma strict

//var enemy : GameObject;                // The enemy prefab to be spawned.
var enemy : Rigidbody2D;
var spawnTime : float = 1f;            // How long between each spawn.
public var S_height:float;
public var S_width:float;	
 var cam : Camera;
function Start () {
	  // Call the Spawn function after a delay of the spawnTime and then continue to call after the same amount of time.
    InvokeRepeating ("Spawn", spawnTime, spawnTime);
    
    S_height = 2f*cam.orthographicSize;//height of screen
	S_width = S_height*cam.main.aspect;//width of screen

}
function Spawn ()
{
	var enemyInstance:Rigidbody2D;
	var chance = Random.Range(0, 100);//generates random number
	if(chance > 50)//50% chance of enemies spawing
	{
		print("CHANCE OCCURRED");
		
		//spawns up to five enemies, depending on chance
		for (var i : int = chance; i >= 50; i=-10)
		{
			print("ENEMY SPAWNING"); //clone = Instantiate(projectile, transform.position, transform.rotation);
			enemyInstance = Instantiate(enemy, Vector3(Random.Range(-10F,10F),10,0), Quaternion.Euler(Vector3(0,0,0)));
		} 
	}
}
