document.getElementById("button").addEventListener('click', () => {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let BMI =(weight/Math.pow(height,2))*100;
  let result =(BMI.toFixed(2)) ;
console.log(result);
if(result>18.5)
{

  document.getElementById("result").innerHTML="Your BMI is " +result+ " , You are Under Weight";
}
else if (result>=18.5 || result<=24.9)
 {
  document.getElementById("result").innerHTML="Your BMI is " +result+ ", You are Normal";
}
else if (result>=25.9 || result<=29.9)
 {
  document.getElementById("result").innerHTML="Your BMI is " +result+ ", You are Over Weight ";
}
else if (result>=30.0 || result<=34.9)
{
document.getElementById("result").innerHTML="Your BMI is " +result+ ", You are Obesity 1";
}
else if (result>=35 || result<=39.9)
 {
  document.getElementById("result").innerHTML="Your BMI is " +result+ ", You are Obesity 2";
}
else if (result> 40)
 {
  document.getElementById("result").innerHTML="Your BMI is " +result+ ", You are Extreme";
}
  })
