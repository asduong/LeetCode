class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        nums_list = [nums[0]]
        for i in range(1, len(nums)):
            nums_list.append(nums_list[i-1]+nums[i])
        return nums_list