// 1) Random generator for names from an array that will contain the fellows names

let companies: Array<string> = ['Google', 'Facebook', 'IBM', 'Bloomberg', 'CapitalOne', 'Citibank']



enum algosRating  { Egon, Average, NeedToStudy};
enum city {NY, Brooklyn, Manhattan};
let salarylimit:  number[] = [ 100000, 200000, 300000] ;

interface graduate {
  algos: algosRating,
  location:  city,
  name: string,
  salary: number
}

// graduate person

function google(person : graduate){
  console.log("I got the job -", person.name)
}




// 2) Potential 2nd function to will be what company you'll work at 



// //never
// let error = (): never => {

//     throw Error('blah!');
// }


  
//   // Type Assertions:
//   let ohhithere: any = "OH HI THERE";
  
//   let strLength: number = (ohhithere as string).length;
  
//   //Interface
//   interface RobotArmy {
//     count: number,
//     type: string,
//     magic?: string
//   }
  
//   let fightRobotArmy = (robots: RobotArmy) =>{
//     console.log('FIGHT!');
//   }
//   let fightRobotArmy2 = (robots: {count: number, type: string, magic?: string}) =>{
//     console.log('FIGHT!');
//   }
  
//   //Function
//   let fightRobotArmyF = (robots: RobotArmy): void =>{
//     console.log('FIGHT!');
//   }
//   let fightRobotArmy2F = (robots: {count: number, type: string, magic?: string}): void =>{
//     console.log('FIGHT!');
//   }
  
//   // *** Classes
//   class Person {
//     //   private sing: string;
//       private skillsYo: string[]
//       // we have an array of skills 
//       constructor( skillzzzz: string[]) {
//         //   this.sing = sound;
//           this.skillsYo = skillzzzz;
//           let skills: string[]
//         }
//       greet() {
//           return "Hello, " + this.sing;
//       }
//   }
  
//   let lion = new Person(["Lion"]);
//   // lion.sing
  
  
//   //In TypeScript, there are several places where type inference
//   //is used to provide type information when there is no explicit
//   //type annotation. For example, in this code
//   let x = 3;
//   // automatimally detexts x is a number.
  
//   //Union Type
//   let confused: string | number = 'hello'

