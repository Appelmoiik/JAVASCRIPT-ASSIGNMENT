
// NUMER ONE
function printSum(arr){
    let x=0;
    for(var i=0; i<arr.length; i++){
      x= x+ arr[i]
    }
    console.log(x)
  }
  printSum([2, 5, 3, 1])

  // NUMBER TWO

  // Defining Parameters
  {
      let alicePoint=0
  let bobPoint=0
  
  // For Loop for the two arrays
  for(let i=0;i<a.length;i++){
      if(a[i]>b[i]){
        alicePoint+=1
      }else if(b[i]>a[i]){
        bobPoint+=1
      }
  }

  let finalArray=[]
  // Add alice and bobs point to the array
  finalArray.push(alicePoint)
  finalArray.push(bobPoint)
  

  
}

// NUMBER THREE

// defining parameters
    n = arr.length
    a = b = c = 0

    // for loop

    for (i in 0..n-1){
        if (arr[i] > 0)
            a += 1.0                        
        else if (arr[i] == 0)
            b += 1.0
        else 
            c += 1.0 }        
        
    
    print("%.6f\n" % (a/n))
    print("%.6f\n" % (c/n))
    print("%.6f\n" % (b/n))


    // NUMBER FOUR
    function sum(a, b){
        var c = a+b;
        return c;
    }
    
    alert(sum(a,b));