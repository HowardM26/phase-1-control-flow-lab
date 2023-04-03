function scuberGreetingForFeet(someValue){
  if (someValue <= 400) {
    return 'This one is on me!';
  } else if (someValue > 400 && someValue < 1999) {
  return  'That will be twenty bucks.';
  }
  else if (someValue > 2000 && someValue < 2500) {
  return  'I will gladly take your thirty bucks.';
  }
  else {
  return 'No can do.';
  }
  // Write your code here!
}

function ternaryCheckCity(city) {
  // Write your code here!
 if (city === 'NYC')
 return 'Ok, sounds good.';
 else (city !== 'Pittsburg')
 return "No go.";
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case "generous":
      return ("Thank you so much.");
      case "not as generous":
        return ("Thank you.");
        default: "if anything else";
        return ("Bye.");
  }
}