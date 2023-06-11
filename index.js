class Obj {

    constructor(num) {

        this.num = num;

    }
    /* using method function here */
    prime() {

        let empty_2 = [];

        //using a for loop to look through the array thats provided

        for(let i = 0; i < this.num.length; i++) {
            
            //using an if statement to filter out even numbers

            if ( this.num[i] % 2 === 1) {
                empty_2.push(this.num[i])
            }
        }
        console.log(empty_2);
    }
}

const newObj = new Obj([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//calling the function within the class object
newObj.prime() 
