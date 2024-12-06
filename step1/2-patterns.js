//pattern 7
//function pyramidPattern(n){
//    for(let i=0;i<n;i++){
//        let string=''
//        //space
//        for(let j=0;j<=n-i-1;j++){
//            string += ' '
//        }
//        //star
//        for(let j=0;j<2*i+1;j++){
//            string += '*'
//        }
//        //space
//        for(let j=0;j<=n-i-1;j++){
//            string += ' '
//        }
//        console.log(string)
//    }
//}
//
//pyramidPattern(5)

//Pattern 8


//function pyramidPattern(n){
//    for(let i=0;i<n;i++){
//        let string=''
//        //space
//        for(let j=0;j<i;j++){
//            string += ' '
//        }
//        //star
//        for(let j=0;j<2*n-(2*i-1);j++){
//            string += '*'
//        }
//        //space
//        for(let j=0;j<i;j++){
//            string += ' '
//        }
//        console.log(string)
//    }
//}
//
//pyramidPattern(5)

//pattern 10
//function pattern(n){
//    for(let i=0;i<=2*n-1;i++){
//        let string=''
//        let stars = i
//        if(i>n){stars = 2*n-i}
//        for(let j=0;j<stars;j++){
//            string+='*'
//        }
//        console.log(string)
//    }
//}
//pattern(5)

//pattern12
//function pattern(n){
//    for(let i=0;i<n;i++){
//        let string=''
//        for(let j=0;j<=i;j++){
//            string += j+1
//        }
//        for(let j=0;j<2*n-(2*(i+1));j++){
//            string += ' '
//        }
//        for(let j=0;j<=i;j++){
//            string += i-j+1
//        }
//        console.log(string)
//    }
//}
//pattern(4)



//pattern19

//pattern20
function pattern(n){

    for(let i=1;i<=2*n-1;i++){
        let string = ''
        let stars = i
        let space = 2*n-(2*i)
        if(i>n){
            stars=2*n-i
            space=2*i-2*n
        }
        //stars
        for(let j=1;j<=stars;j++){
            string += '*'
        }
        //space
        for(let j=1;j<=space;j++){
            string += ' '
        }
        //stars
        for(let j=1;j<=stars;j++){
            string += '*'
        }
    console.log(string)
    }
    
}
pattern(5)


//pattern22
