/**
 * This class creates an integer stack
 *
 * By:      Noah McCaskill
 * Version: 1.0
 * Since:   2022-10-31
 */

class Vehicle {
  private licensePlate: string
  private color: string
  private readonly doorNum: number
  private speed = 0
  private readonly maxSpeed: number

  constructor(
    color: string,
    licensePlate: string,
    doorNum: number,
    maxSpeed: number
  ) {
    this.licensePlate = licensePlate
    this.color = color
    this.doorNum = doorNum
    this.maxSpeed = maxSpeed
  }

  // getter method for license plate
  getLicensePlate(): string {
    return this.licensePlate
  }

  // setter method for license plate
  setLicensePlate(userlicensePlate: string): void {
    this.licensePlate = userlicensePlate
  }

  // getter method for vehicle color
  getColor(): string {
    return this.color
  }

  // setter method for vehicle color
  setColor(userColor: string): void {
    this.color = userColor
  }

  // getter method for vehicle color
  getdoorNum(): number {
    return this.doorNum
  }

  // getter method for speed
  getSpeed(): number {
    return this.speed
  }

  // method to display description
  status(): void {
    console.log(`
    ---> Speed: ${this.speed}
    ---> Max Speed: ${this.maxSpeed}
    ---> Number Of Doors: ${this.doorNum}
    ---> License Plate: ${this.licensePlate}
    ---> Colour: ${this.color}`)
  }

  // method for vehicle acceleration
  accelerate(accelerationPower: number, accelerationTime: number): void {
    this.speed = accelerationPower * accelerationTime + this.speed

    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed
    }
  }

  // method for vehicle brake
  break(breakPower: number, breakTime: number): void {
    this.speed = this.speed - breakPower * breakTime

    if (this.speed < 0) {
      this.speed = 0
    }
  }
}

// export class for the main to use its methods
export = Vehicle
