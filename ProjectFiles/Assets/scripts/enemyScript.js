#pragma strict

var speed : float = 2.0;
var bulletObj : GameObject;
var playerObj : GameObject;
var bullet_P : GameObject;

function Start () 
{
	playerObj = GameObject.Find("PLAYER");
}
function OnCollisionEnter2D(other:Collision2D){
  	if(other.gameObject.name=="BULLET_P(Clone)"){
		Destroy(other.gameObject); 
    	Destroy(gameObject); 
	}
}
function Update () 
{
   if(transform.position.y < -8)
   {
   	Destroy(this.gameObject);
   }
   
  
}


function FixedUpdate ()
{
		transform.Translate(Vector3.down * speed * Time.deltaTime);//moves enemies down
}

//destorys enemies when clicked on
/* Colm. if you can get this working the way you orginnaly intended. i was just tring something out 
so i have disabled this code. 

function OnMouseDown()
{
	print("HIT");
	Destroy(gameObject);
}
/*/
InvokeRepeating("Shoot", 1, 1);

//creates bullets
function Shoot()
{
	print("SHOOT");
	//bulletObj:GameObject;
	var bullet:Rigidbody2D = bulletObj.GetComponent(Rigidbody2D);
	var bulletInstance:Rigidbody2D;
	var bulletVector : Vector3 = new Vector3(playerObj.transform.position.x - transform.position.x, playerObj.transform.position.y - transform.position.y, 0);//vector directing bullet towards player location at time of shooting
	if(transform.position.y > playerObj.transform.position.y + 3 && gameObject.name == "ENEMY(Clone)")//checks that enemies are certain distance above player, and makes original NOT shoot
	{
		bulletInstance = Instantiate(bullet, Vector3(transform.position.x,transform.position.y-1,0), Quaternion.Euler(new Vector3(0,0,0)));
		bulletInstance.velocity = bulletVector;
	}
}
