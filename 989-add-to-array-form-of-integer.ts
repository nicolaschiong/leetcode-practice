function addToArrayForm(num: number[], k: number): number[] {
    let numAsInt = 0;
    for (let i = 0; i< num.length; i++){
        numAsInt = numAsInt * 10 + num[i];
    }

    let sum = numAsInt + k;

    const result = [];
    while(sum > 0){
        result.unshift(sum % 10);
        sum = Math.floor(sum / 10);
    }

    return result.length > 0 ? result : [0];
};
