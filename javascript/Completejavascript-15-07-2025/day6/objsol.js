 var student = {
                    name: "Sam",
                    lastName:"Wilson",
                    age: 30,
                    hobby: {
                    singing: true,
                    reading: false, 
                    },
                    music:["Pop","English","Rock"]
                };
                // take out true
                console.log(student.hobby.singing); // true
                console.log(student.music[2]); // rock

 var arr = [ 
                    [ 10,20,30,'book',false ], 
                    true,2778,["delhi","nyc"],
                    [ // 2
                        10.5,12,8,false,true,[1,2,3]
                    ]
                ]

                console.log(arr[3][1]); //nyc
                
                console.log(arr[4][5][2]) // 3

   var test = []; 
    test[0] = ["alan", "joe"];        
    test[0][1] = 1234; 

    test[1] = [];     
    test[1][0] = "sam";
    test[1][1] = [];
    test[1][1][0] = 123;
    test[1][1][1] = 867;

    console.log(test);

    var dog = {
  name: "Buddy",
  breed: "Labrador",
  owner: {
    name: "John",
    age: 40
  },
  bark: function() {
    console.log(dog.name + " says: Woof!");
  }
};

console.log(dog.owner.name); // "John"
dog.bark();          


                