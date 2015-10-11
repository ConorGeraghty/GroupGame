#pragma strict

function Start () {

}

function Update () {
if(transform.position.y < -15 ||
 	transform.position.y > 15 ||
 	transform.position.x < -15||
 	transform.position.y > 15 )
   {
   	Destroy(this.gameObject);
   }

}