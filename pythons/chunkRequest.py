import requests

''' Simple Pyhton Script to write to the chunk server implented in Node
'''

if __name__ == "__main__":
    print("Enter Text to Capitalize")
    while 1:
        textBlock = input(": ")
        r = requests.post('http://localhost:8000', data=textBlock)
        print("{}: {}".format(r.status_code, r.text))
        print()