import { Payload } from "./Payload";
import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo"



export class Rocket {
    rocketName: string;
    totalCapacityKg: number;
    cargoItems:Cargo[] =[];
    astronauts:Astronaut[] =[];
    constructor(rocketName: string, totalCapacityKg: number){
        this.rocketName = rocketName;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass( items: Payload[] ): number{
        let totalMass:number =0;    
        for(let i =0; i<items.length; i++){
            totalMass += items[i].massKg;
        }
        return totalMass;
    }
    currentMassKg(): number{
        let sumTotalMass:number = 0;
        sumTotalMass +=this.sumMass(this.cargoItems);
        sumTotalMass +=this.sumMass(this.astronauts);
        return sumTotalMass;
    }
    canAdd(item: Payload): boolean{
        let mass = this.currentMassKg()
        if(mass + item.massKg<= this.totalCapacityKg){
            return true
        } else {
            return false
        }
    }
    addCargo(cargo: Cargo): boolean{
        if(this.canAdd(cargo)){
            this.cargoItems.push(cargo)
            return true
        } else {
            return false
        }
    }
    addAstronaut(astronaut: Astronaut): boolean{
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut)
            return true
        } else {
            return false
        }
    }
} 