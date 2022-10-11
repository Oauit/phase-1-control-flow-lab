function scuberGreetingForFeet(feet){
  if (feet <= 400){
  console.log(199);
  return 'This one is on me!'
}

  else if(feet <= 2000){
  console.log(1500);
  return 'That will be twenty bucks.'
} 

else if(feet <= 2500){
  console.log(2001);
  return 'I will gladly take your thirty bucks.'
} 

else if(feet > 2500){
  console.log(2501);
  return 'No can do.'
}
}


function ternaryCheckCity(city){
  if (city === 'NYC'){
    return 'Ok, sounds good.'
  } else (false) 
    return 'No go.'
  }
  




  function switchOnCharmFromTip(tip){
    switch(tip) {
      case 'generous':
        return 'Thank you so much.';
        break;
      case 'not as generous':
        return 'Thank you.';
        break;
      case 'thanks for everything':
        return 'Bye.'
        break;
    }

  //   if (tip === 'generous'){
//     return 'Thank you so much.'
//   }
//   else if(tip === 'not as generous'){
//     return 'Thank you.'
//   }
//   else if(tip === 'thanks for everything'){
//     return 'Bye.'
//   }
 }