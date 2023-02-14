function isPalindrome(x: number): boolean {
    if (x < 0){
        return false;
    }

    let reversed = 0;
    let num = x;

    while (num > 0){
        reversed = reversed * 10 + num % 10;
        num = Math.floor(num / 10);
    }

    return reversed === x;
};
