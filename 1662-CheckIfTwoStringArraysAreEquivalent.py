def arrayStringsAreEqual(word1, word2):
    return ''.join(word1) == ''.join(word2)


a = ["ab", "c"]
b = ["a", "bc"]
print arrayStringsAreEqual(a, b)