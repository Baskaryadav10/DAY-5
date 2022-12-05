//  the uber price.Q.NO.2. Write a class to calculate
class Uberprice{
    constructor(distance,time,minfaresupplement,waittime){
      this.distance = distance;
      this.time = time;
      this.minfaresupplement = minfaresupplement;
      this.waittime = waittime;
    }
}
var obj = new Uberprice(102,102,28,16);
var total = (obj.distance+obj.time+obj.minfaresupplement+obj.waittime)
console.log(total);

// Output:
236