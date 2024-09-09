

//  Coustomer
// usename , email , purachaseHistory ,[] ,

//  akahy.make()

function Coustomer(username ,email){

    this.username = username ;
    this.email = email ;
    this.purchaseHistory = [] ;
    this.makePurchase = (product)=>{
              this.purchaseHistory.push(product);
              if(product){
                console.log(`${product} is added`)
              }
    }

    this.getProducts = ()=>{
        console.log(this.purchaseHistory)
    }

    this.updateUsrname =  (name)=>{
       this.username = name ;
    }


}
// user1.promote(30)


let user1 = new Coustomer("ak","ak@");
// let user2 = new Coustomer("ak23","ak@gmail");



// user1.makePurchase("laptop");
// user1.makePurchase("mobile");
// user1.makePurchase("mobile23");
// user1.getProducts();
// user1.updateUsrname("siddhant")
// console.log(user1);

function Employees(name,position,salary){
    this.name = name;
    this.position = position;
    this.salary = salary;

    this.promote=(salaryincrement)=>{
        this.salary=salary+ (salary* salaryincrement)/100;

        console.log(" congrautation your salary is upgreated to " + this.salary )
    }
    
 }

 let emp1 = new Employees("akshay", "manager" , 1338450);
 console.log(emp1);

//  emp1.promote(30)