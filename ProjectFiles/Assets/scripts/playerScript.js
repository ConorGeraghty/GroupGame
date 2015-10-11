#pragma strict

var speed: float = 10;
var camObj : GameObject;
var enemyObj : GameObject;
var cam : Camera;
var enemy : Rigidbody2D;
public var S_height:float;
public var S_width:float;
var bulletObj : GameObject;	
 var CROSSHAIR : GameObject;
//edit
public var PlayerHealth:int = 100;

function Start () 
{
	camObj = GameObject.Find("Main Camera");
	enemyObj = GameObject.Find("enemy");
	//enemy = enemyObj.GetComponent(Rigidbody2D);
	cam = camObj.GetComponent(Camera);
	S_height = 2f*cam.orthographicSize;//height of screen
	S_width = S_height*cam.main.aspect;//width of screen
}

function Update () 
{
 if (Input.GetMouseButtonDown(0))
 {
 PShoot();
 
 }
}

function FixedUpdate()
{
	//movement with boundary
	if (Input.GetKey(KeyCode.A) && !(transform.position.x < -(S_width/2)+1))
		transform.Translate(Vector3.left * speed * Time.deltaTime);
	if (Input.GetKey(KeyCode.D) && !(transform.position.x > (S_width/2)-1))
		transform.Translate(Vector3.right * speed * Time.deltaTime);
	if (Input.GetKey(KeyCode.W) && !(transform.position.y > -(S_height/10)+1))
		transform.Translate(Vector3.up * speed * Time.deltaTime);
	if (Input.GetKey(KeyCode.S) && !(transform.position.y < -(S_height/2)+1))
		transform.Translate(Vector3.down * speed * Time.deltaTime);
}		
function PShoot()// how to speed up player's bullets ?
{
   
	print("PlayerSHOOT");	
	var bullet:Rigidbody2D = bulletObj.GetComponent(Rigidbody2D);
	var bulletInstance:Rigidbody2D;
	var bulletVector : Vector3 = new Vector3(CROSSHAIR.transform.position.x - transform.position.x, CROSSHAIR.transform.position.y - transform.position.y, 0);//vector directing bullet towards player location at time of shooting
	
		bulletInstance = Instantiate(bullet, transform.position, Quaternion.Euler(new Vector3(0,0,0)));
		bulletInstance.velocity = bulletVector*2;
	
}