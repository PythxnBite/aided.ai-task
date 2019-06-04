import json


def singWord():
    file = open('csvToJson.json').read()
    data = json.loads(file)

    words = open('words.json').read()
    wordData = json.loads(words)

    for i in data:
        for j in i:
            x = i[j]
            for k in wordData:
                x = x.replace(k, wordData[k])
            i[j] = x
    print("Keys converted into a single word")
    out = json.dumps(data)

    f = open('formattedJson.json', 'w')
    f.write(out)
