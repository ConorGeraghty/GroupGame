#pragma strict

function Start () {

}

function Update () {
//transform.Translate(transform.up * Time.deltaTime);
if(transform.position.y < -15 ||
 	transform.position.y > 15 ||
 	transform.position.x < -15||
 	transform.position.y > 15 )
   {
   	Destroy(this.gameObject);
   }
}