#def testFunc():
#    print('hello world from python')
#
#
#def main():
#    testFunc()
#
#
#if __name__ == '__main__':
#    main()


#def testRecursionFunc(a):
#    if(a==5):
#        return
#    print('hello world from python')
#    testRecursionFunc(a+1)
#
#
#def main():
#    n = 0
#    testRecursionFunc(n)
#
#if __name__ == '__main__':
#    main()


def printNumberBackwardsBacktrack(i,n):
    if(i>n):
        return
    printNumberBackwardsBacktrack(i+1,n)
    print(i)

def main():
    printNumberBackwardsBacktrack(1,5)


if __name__ == '__main__':
    main()