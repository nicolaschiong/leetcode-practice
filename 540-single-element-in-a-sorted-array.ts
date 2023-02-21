function singleNonDuplicate(nums: number[]): number {
    let left = 0;
    let right = nums.length - 1;

    while(left < right){
        const mid = Math.floor((left + right) / 2);
        const isEven = (right - mid) % 2 === 0;

        if(nums[mid] === nums[mid + 1]){
            if(isEven){
                left = mid + 2;
            } else {
                right = mid - 1;
            }
        } else if (nums[mid] === nums[mid - 1]){
            if(isEven) {
                right = mid - 2;
            } else {
                left = mid + 1;
            }
        } else {
            return nums[mid];
        }
    }

    return nums[left];
};
