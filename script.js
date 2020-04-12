var weight = document.getElementById('weight');
var feet = document.getElementById('feet');
var inch = document.getElementById('inch');
var bmi1 = document.getElementById('bmi1');
function toMetres(feet,inch)
{
  var metre = ((feet*12)+inch)*0.0254;
  return metre;
}
function RanMov()
{
  var images = ["bala.jpg","avr.jpg","titanic.jpg","war.jpg","world.jpg","train.jpg","gow.jpg","ar15.jpg","contagion.jpg"];
  var l = images.length;
  var i, j, flag;
  var values = new Array(l);
  for(i = 0;i<l;i++)
  {
    flag = 0;
    var rand = Math.floor(l*Math.random());
    for(j = 0;j<i;j++)
    {
      if(values[j]==rand)
      {
        flag++;
      }
    }
    if(flag>0)
    {
      i--;
    }
    else
      {
        values[i]=rand;
        console.log(values[i]);
      }
    }
    for(i = 0;i<l;i++)
    {
      document.getElementById("p"+(i+1)).src = images[values[i]];
    }
}

function bmi(weight,feet,inch)
{
  var metre = toMetres(feet,inch);
  var bmi = weight/(Math.pow(metre,2));
  return bmi;
}
var message1 = document.getElementById('message1');
var btn3 = document.getElementById('btn3');
btn3.addEventListener("click",function()
{
  var bmti = bmi(parseFloat(weight.value),parseFloat(feet.value),parseFloat(inch.value));
  if(bmti<18.5)
  bmi1.value = ("      ")+bmti+(" , You are underweigheted");
  else if(bmti>18.5&&bmti<=24.9)
  bmi1.value = ("      ")+bmti+(" , You are healthy");
  else {
    bmi1.value = ("      ")+bmti+(" , You are obese");
  }
})
var btn1 = document.getElementById('btn1');
var arr = ["ar15.jpg","avr.jpg","bala.jpg","contagion.jpg","gow.jpg","titanic.jpg","train.jpg","war.jpg","world.jpg"];
var l = arr.length;
btn1.addEventListener("click",function()
{
  RanMov();
})
var day = document.getElementById('day');
var btn4 = document.getElementById('b4');
var month = document.getElementById('month');
var year = document.getElementById('year');
function zodiac(day,month)
{
    var astro_sign;
    if (month === "December")
    {
      if (day < 22)
        astro_sign = "Sagittarius";
        else
        astro_sign ="capricorn";
    }

    else if (month === "January"){
        if (day < 20)
        astro_sign = "Capricorn";
        else
        astro_sign = "aquarius";
    }

    else if (month === "February"){
        if (day < 19)
        astro_sign = "Aquarius";
        else
        astro_sign = "pisces";
    }

    else if(month === "March"){
        if (day < 21)
        astro_sign = "Pisces";
        else
        astro_sign = "aries";
    }
    else if (month === "April"){
        if (day < 20)
        astro_sign = "Aries";
        else
        astro_sign = "taurus";
    }

    else if (month === "May"){
        if (day < 21)
        astro_sign = "Taurus";
        else
        astro_sign = "gemini";
    }

    else if( month === "June"){
        if (day < 21)
        astro_sign = "Gemini";
        else
        astro_sign = "cancer";
    }

    else if (month === "July"){
        if (day < 23)
        astro_sign = "Cancer";
        else
        astro_sign = "leo";
    }

    else if( month === "August"){
        if (day < 23)
        astro_sign = "Leo";
        else
        astro_sign = "virgo";
    }

    else if (month === "September"){
        if (day < 23)
        astro_sign = "Virgo";
        else
        astro_sign = "libra";
    }

    else if (month === "October"){
        if (day < 23)
        astro_sign = "Libra";
        else
        astro_sign = "scorpio";
    }

    else if (month === "November")
    {
        if (day < 22)
        astro_sign = "scorpio";
        else
        astro_sign = "sagittarius";
    }
    console.log(astro_sign);
    document.getElementById('zod').value=astro_sign;
  }
btn4.addEventListener("click",function()
{
  zodiac(day.value,month.value)
})
