// code your solution here
function saturdayFun(activity = 'roller-skate'){
    console.log('This Saturday, I want to' + " " + activity);
    return 'This Saturday, I want to' + " " + activity + "!"
}
saturdayFun('bathe my dog')

const mondayWork = function (workActivity = 'go to the office'){
    console.log(`This Monday, I will ${workActivity}.`)    
    return `This Monday, I will ${workActivity}.`
}
mondayWork('work from home')


// three

function wrapAdjective(sign) {
    const part1 = "You are";
    return function (makeDay = 'special') {
        if (sign === '*') {      
          makeDay = 'a hard worker'
          return `${part1} ${sign}${makeDay}${sign}!`; 
        } else if (sign === '||') {
            makeDay = 'a dedicated programmer'
            return `${part1} ${sign}${makeDay}${sign}!`;
        } else {
            return `${part1} ${makeDay}!`;
        }        
      };
    };

console.log(wrapAdjective()());







