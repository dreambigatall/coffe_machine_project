function Coffemachn(){
    this.water=500;
    this.milk=400;
    this.coffee=75;
    this.money=0;
   let quarter, penni, dimes , nickle;
   this.desire=0;
   this.xx=0;
   this.yy=0;
   this.ask=function(){
       this.desire=prompt("enter your choise latte/cappcino/espreso");
      
       return this.desire;


   };
   this.reportPrinter=function(){
       console.log("water: "+ this.water);
       console.log("milk: "+ this.milk);
       console.log("coffe: "+ this.coffee);
       console.log("money: "+ this.money);
   
   }
   this.resourceSufficent=function(){
        this.xx=this.ask();
       while(this.xx!=="off"){
       if(this.xx==="latte"){
           if(this.water < 100 || this.milk < 50){
               console.log("sorry we have no sufficient resource");
           }
           else{
               this.yy= this.processCoin();
              if(this.yy===2.50){
               console.log("your money is sufficent and thank you ");
               
               
               this.reportCallc();
              }
              else if(this.yy>2.50){
               console.log(`you have  a return and that is ${this.yy-2.50}`);
               message(this.xx);
               this.reportCallc();
              }
              else{
                  console.log(`you have insufficint money ${this.yy}`);
              }

              }

           }
           if(this.xx==="cappcino"){
               if(this.water < 100 ||this.milk < 50){
                   console.log("sorry we have no sufficient resource");
               }
               else{
                   this.yy= this.processCoin();
                  if(this.yy===2.50){
                   console.log("your money is sufficent and thank you ");
                   message(this.xx);
                   this.reportCallc();
                   
                  }
                  else if(this.yy>2.50){
                   console.log(`you have  a return and that is ${this.yy-2.50}`);
                   message(this.xx);
                   this.reportCallc();
                  }
                  else{
                      console.log(`you have insufficint money ${this.yy}`);
                  }
   
                  }
               }
               if(this.xx==="espreso"){
                   if(this.water < 100 || this.milk < 50){
                       console.log("sorry we have no sufficient resource");
                   }
                   else{
                       this.yy= this.processCoin();
                      if(this.yy===2.50){
                       console.log("your money is sufficent and thank you ");
                       message(this.xx);
                       this.reportCallc();
                      }
                      else if(this.yy>2.50){
                       console.log(`you have  a return and that is ${this.yy-2.50}`);
                       message(this.xx);
                       this.reportCallc();
                     
                       
                     
                      }
                      else{
                          console.log(`you have insufficint money ${this.yy}`);
                      }
       
                      }
                   }
               if(this.xx==="report"){
                   
                  
                   this.reportPrinter();
               }
          this.xx=this.ask(); }
       };
       this.processCoin=function(){
           nickle=prompt("enter the nickle");
           penni=prompt("enter the pennies: ");
           dimes=prompt("enter the dimes :");
           quarter=prompt("enter the quarte: ");
           money=nickle*0.05 + quarter * 0.25 + dimes*0.1 +penni*0.01;
           return money;

       };
       this.reportCallc=function(){
           let usa=this.xx;
           if(usa==="latte"){
               this.water-=100;
              this.milk-=50;
               this.coffee-=15;
               this.money+=this.yy;
           }
           else if(usa==="espreso"){
               this.water-=150;
               this.milk-=100;
              this.coffee-=25;
               this.money+=this.yy;

           }
           else if(usa=="cappcino"){
               this.water-=175;
               this.milk-=150;
               this.coffee-=35;
               this.money+=this.yy;

           }
           else{
               this.water=this.water;
               this.milk=this.milk;
               this.coffee=this.coffee;
               this.money=this.money;
           }
       }

       function message(finger){
           console.log(`her is your ${finger} enjoy it`);
           
       }

   }

const u=new Coffemachn();
const r=u.resourceSufficent();
console.log(r);