/*
* This is a program that gets the Airplane status
* from Airplane to planeStatus
*
* @author  Noah McCaskill
* @version 1.0
* @since   2022-10-31
*/

public class Airplane {
    /
    * This is the speed.
    */
    private int speed;
    / 
    * This is the constructor
    * @param speed the airplane speed.
    */
    public Airplane(int speed) {
        this.speed = speed;
    }
    /
    *Speed getter
    * @return this returns the speed.
    */
    public int getSpeed() {
        return this.speed;
    }
    /
    * This sets the speed.
    * @param speedSet this is the new variable.
    */
    public void setSpeed(int speedSet) {
        this.speed = speedSet;
    }
}
