const longestCommonPrefix = (strs: string[]): string => {
  if (strs.length === 0) return '';
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === '') return '';
    }
  }

  return prefix;
};

function longestCommonPrefixBetterSolution(strs: string[]): string {
  if (strs.length === 0) {
    return '';
  }

  let lPrefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    let currentWord = strs[i];
    let j = 0;
    while (
      j < currentWord.length &&
      j < lPrefix.length &&
      currentWord.charAt(j) === lPrefix.charAt(j)
    ) {
      j++;
    }

    if (j == 0) {
      return '';
    }

    lPrefix = currentWord.substring(0, j);
  }

  return lPrefix;
}
