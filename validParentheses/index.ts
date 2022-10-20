function isValid(s: string): boolean {
  const map: Map<string, string> = new Map([
    ['{', '}'],
    ['(', ')'],
    ['[', ']'],
  ]);

  let array: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i]) === true) {
      array.push(s[i]);
    } else {
      if (map.get(array[array.length - 1]) === s[i]) {
        array.pop();
      } else {
        return false;
      }
    }
  }

  if (array.length === 0) {
    return true;
  } else {
    return false;
  }
}

function isValidBetterSolution(inputString: string): boolean {
  if (inputString.length == 0 || inputString.length == 1) {
    return false;
  }
  if (inputString.length % 2 != 0) {
    return false;
  }
  const inputStringArray = inputString.split('');
  let stack: string[] = [];

  for (let i = 0; i < inputStringArray.length; i++) {
    if (
      inputStringArray[i] == '(' ||
      inputStringArray[i] == '{' ||
      inputStringArray[i] == '['
    ) {
      stack.push(inputStringArray[i]);
    } else {
      if (stack.length === 0) {
        return false;
      } else {
        const top = stack[stack.length - 1];
        if (
          (inputStringArray[i] == ')' && top == '(') ||
          (inputStringArray[i] == '}' && top == '{') ||
          (inputStringArray[i] == ']' && top == '[')
        ) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}
