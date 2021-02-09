let myRequest = document.getElementById('ergebnis');


let minus1 = document.getElementById('minus1');
let minus10 = document.getElementById('minus10');
let minus100 = document.getElementById('minus100');


let plus1 = document.getElementById('plus1');
let plus10 = document.getElementById('plus10');
let plus100 = document.getElementById('plus100');


let resetReset = document.getElementById('reset');
let multi2 = document.getElementById('multi2');

let count = 0;
let reset = 0;

myErgebnisse();


resetReset.addEventListener("click", () => {
    count = reset;
    myErgebnisse();
});

multi2.addEventListener("click", () => {
    count *= 2;
    myErgebnisse();
});

plus1.addEventListener("click", () => {
    count ++;
    myErgebnisse();
})

plus10.addEventListener("click", () => {
    count += 10;
    myErgebnisse();
})

plus100.addEventListener("click", () => {
    count += 100;
    myErgebnisse();
})


minus1.addEventListener("click", () => {
    count --;
    myErgebnisse();
})

minus10.addEventListener("click", () => {
    count -=10;
    myErgebnisse();
})

minus100.addEventListener("click", () => {
    count -=100;
    myErgebnisse();
})

function myErgebnisse(){
    myRequest.innerHTML = count;

}

// ...................here end counter.....................

// ..........................length.............

let myName = 'yousef';
let myLastName = 'saqoul'
let x = myName.length;
let y = myLastName.length;


function myLength(){

    document.getElementById('myLength').innerHTML= x + ' ' + y;
}

// .......................... end length.............


// ..........................concat.............



    let text1 = "Sam is going to coding school";
    let text2 = "tom";
    let text4 = "and" ;
    let text7 = "move theather"

    mySliceString1 =  text1.slice( 0 , 15);  // sam is going to
    mySliceString2 =  text1.slice( 22 , 29);  // school
    mySliceString3 =  text4.slice();  // and
    mySliceString4 =  text1.slice( 12 , 15);  // to
    mySliceString5 =  text7.slice(0, 4);  //  move 
    mySliceString6 =  text7.slice(5, 13);  //  theather 


    let result1 = mySliceString1.concat(  mySliceString2);// sam is going to school
    let result2 = mySliceString3.concat(  mySliceString4);   // and to
    let result3 = mySliceString5.concat(mySliceString6); // move theather


    function myConcat()
    {

        document.write(mySliceString1 + '<br>' +  mySliceString2 + '<br>' + mySliceString3 + '<br>' + mySliceString4 + '<br>' + mySliceString5 + '<br>' + mySliceString6) 
    }
    
// ..........................end concat.............



// .......................... indexOf.............

let txt = "How inappropriate to call this planet Earth, when clearly it is Ocean."
let myH = txt.indexOf("h")
let myEarth = txt.indexOf("Earth");
let myMoons = txt.indexOf("Moon");

function hIndexOf()
{
    document.write(myH)
}

function earthIndexOf()
{
    document.write(myEarth)
}
function moonIndexOf()
{
    document.write(myMoons)
}
// ........................end.. indexOf.............



// ........................end.. search.............
let txt2 = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent"
    let mySearch = txt2.search(";")
    let mySearchGreen = txt2.search("green")
    let mySearchBlue = txt2.search("Blue")

function mySearch1()
{   
    document.write(mySearch)

}
function mySearch2()
{   
    document.write(mySearchGreen)

}
function mySearch3()
{   
    document.write(mySearchBlue)

}
// ........................end.. search.............



// .......................... substring.............
let samcoding = "Sam is back from coding school";

let mysubString = samcoding.substring(0 , 3);
let mysubString2 = samcoding.substring(4 , 6);
let mysubString3 = samcoding.substring(24 , 31);


function sam()
{   
    document.write(mysubString )

}
function is()
{   
    document.write(mysubString2 )

}
function school()
{   
    document.write(mysubString3 )

}


function samSchool()
{   
    document.write(mysubString + '<br>' + mysubString2 + '<br>' + mysubString3)

}
// ........................end.. substring.............








// ..........................toUpperCase.............

let mycase = "Sam is going to coding school"
    let resu1 = mycase.toUpperCase();
     let resu2 = mycase.toLowerCase();


     sliceCase = mycase.slice(0,4) // ..Sam
     let resu3 = sliceCase.toUpperCase()

     replaceSam = mycase.replace("Sam is going to coding school", 'SAM IS GOING to SCHOOL')
     replaceSa = mycase.replace("Sam is going to coding school", 'Sam Is Going To School')

     console.log(resu1)
     

     function samUP()
     {
         document.write(resu1)

     }
     function samUP2()
     {
         document.write(resu2)

     }
     function samUP3()
     {
         document.write(resu3)

     }
     function samUP4()
     {
         document.write(replaceSam)

     }
     function samUP5()
     {
         document.write(replaceSa)

     }