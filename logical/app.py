
def factorial(num):
    fact = 1
    if num < 0:
        raise ValueError("Number must be non-negative")
    if num <= 1:
        return 1
    # Method 1: Recursive Approach
    # return num * factorial(num - 1)

    # Method 2: Iterative Approach
    for i in range(1, num + 1):
        fact *= i
    return fact 


def binomialCoff(n,r):
    nfact = factorial(n)
    rfacr = factorial(r)
    nmr = factorial(n-r)
    return nfact//(rfacr*nmr)


res = binomialCoff(5,2);
print(res)




