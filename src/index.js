module.exports = function check(str, bracketsConfig) {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
          if (str[i] === bracketsConfig[j][0]) {
              stack.push(str[i])
            } else if(str[i]=== bracketsConfig[j][1]) {
              if (stack == []) { return false} else {
                if(bracketsConfig[j].indexOf(stack[stack.length-1]) === 0) {
                    stack.pop();
                  } else return false;
              }
            }    
        }
        if (stack[stack.length-1] === '|' && stack[stack.length-2] === '|' || stack[stack.length-1] === '7' && stack[stack.length-2] === '7'|| stack[stack.length-1] === '8' && stack[stack.length-2] === '8') {
            stack.pop();
            stack.pop();
          }  
    }
    if (stack && stack.length) {
        return false;
    } else {
        return true;
    }
}
