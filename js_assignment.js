//table
function tableFuc(){
    rv=window.prompt("Input number of rows");
    cv=window.prompt("Input number of columns");   
     for(var row=0;row<parseInt(rv);row++)
      {
       var r=document.getElementById('myTable').insertRow(row);
       for(var col=0;col<parseInt(cv);col++)  
        {
         var c=r.insertCell(col);
         c.innerHTML="Row-"+row+" Column-"+col; 
        }
       }
}
//string
function stringFunc(){
    strval=window.prompt("enter the string");
    setInterval(function () 
   {
    strval=strval[strval.length - 1] + strval.substring(0, strval.length - 1);
    document.getElementById("stringval").innerHTML=strval;
  },100);
}
//remove string//
function remstrFuc(){
    inputStr=window.prompt("enter the string");
    inputPos=window.prompt("enter the position to remove");
    remStr=inputStr.substring(0,inputPos-1)+inputStr.substring(inputPos);
    document.getElementById("remstr").innerHTML=remStr;
}
//vowels
function vowelFuc(){
    vowval=window.prompt("enter any string");
    vowels_list='aeiouAEIOU';
    vowcount=0;
    for(var v=0;v<vowval.length;v++){
        if(vowels_list.indexOf(vowval[v])!==-1){
            vowcount=vowcount+1;
        }
    }
    document.getElementById("v_val").innerHTML=vowcount;
}
//swap-array
function swapFuc(){
    swapstr=window.prompt("enter the value");
    swap1=swapstr.substring(swapstr.length -1);
    swap2=swapstr.substring(1,swapstr.length -1);
    swap3=swapstr.charAt(0);
    document.getElementById("swap").innerHTML=swap1+swap2+swap3;
}
//sum of numbers
function sumFuc(){
        num=window.prompt("enter the no");
        var s_sum=0;
        while(num>0) {
            s_sum+=num;
            num=Math.floor(num/2);
        }
        document.getElementById('sum').innerHTML=s_sum;
}
//largest array
function longstrFuc() {
    str1=window.prompt("enter the array");
    str1=str1.split(" ");
    var sorted=str1.sort(function(prev,current){
    return prev.length-current.length;   
  });
  var index=sorted.length;
  str1=sorted[index-1];
  document.getElementById('large').innerHTML=str1;
}
//palindrome
function palindrome(){
    palval=window.prompt("enter the string");
    var palresult=palval.split('').reverse().join('');
    if(palresult==palval){
        document.getElementById("pal").innerHTML="this is palindrome="+palresult;
    }
       else
       document.getElementById("pal").innerHTML="this is not a palindrome="+palval;
}  
//prime number
function primeFuc(){
    primeval=window.prompt("enter any number");
    var flag=0;
    for(var pv=2;pv<=parseInt(primeval);pv++)
        if(primeval%2==0){
            flag=1;
            break;
        }
       if(flag==0){ 
    document.getElementById("prime").innerHTML=primeval+"=is a prime number";       
 }
 else
 document.getElementById("prime").innerHTML=primeval+"=not a prmie number"; 
}
//fibonacci series
function fiboFuc(){
    fibval=window.prompt("enter the value");
    no1=0;
    document.write(no1);
    no2=1;
    document.write(no2);
    var temp;
    for(var fv=2;fv<fibval;fv++){
        temp=no1+no2;
        document.write(temp);
        no1=no2;
        no2=temp;
    }
}
//factorail
function factFuc(){
    factval=window.prompt("enter the number");
    if(factval==0||factval==1){
        document.getElementById("fact").innerHTML="factorail value is="+1;
    }
    else{
        var fact=1;
        for(var f=2;f<=factval;f++){
            fact=fact*f;
        }
        document.getElementById("fact").innerHTML="factorail value is="+fact;  
    }
}
//pattern
function patternFuc(){
   patval=window.prompt("enter the value");
   var addpattern;
    for(pv1=1;pv1<=patval;pv1++){
        for(pv2=1;pv2<=pv1;pv2++){
          addpattern=document.write("^");
        }
        document.write('<br />');
    }
    document.getElementById('pat').innerHTML=addpattern;
    console.log(addpattern);
}
//pyramid
function pyramidFuc(){
    pyrval=window.prompt("enter the number");
    //charval='*';
    for(py1=1;py1<=pyrval;py1++){
        for(py2=1;py2<=py1;py2++){
            charval=document.write("*");
        }
        for(py2=py1;py2>1;py2--){
            charval=document.write("*");   
        }
        document.write('<br />');
    }
    for(py1=pyrval-1;py1>=1;py1--){
        for(py2=1;py2<=py1;py2++){
            charval=document.write("*");
        }
        for(py2=py1;py2>1;py2--){
            charval=document.write("*");   
        }
        document.write('<br />');
    }
    document.getElementById("pattern").innerHTML='<div>charval</div>';
}

