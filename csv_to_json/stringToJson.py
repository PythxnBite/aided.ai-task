import json
import re


def phExtract(extraValue, arr):
    lst = re.findall(r'[\+\(]?[1-9][0-9 .\-\(\)]{8,}[0-9]', extraValue)
    for a in lst:
        x = list(map(str, a.split()))
        for b in x:
            if len(b) >= 10:
                arr.append(b)
    if arr:
        return(arr)
    else:
        return([])


def emailExtract(extraValue, arr):
    lst = re.findall('\S+@\S+', extraValue)
    for a in lst:
        x = list(map(str, a.split()))
        for b in x:
            if len(b) >= 10:
                arr.append(b)
    if arr:
        return(arr)
    else:
        return([])


def rep(extraValue):
    extraValue = re.sub(r'[\+\(]?[1-9][0-9 .\-\(\)]{8,}[0-9]', "", extraValue)
    extraValue = re.sub('\S+@\S+', "", extraValue)
    return(extraValue)


def jsonFormat():
    file = open('formattedJson.json').read()
    data = json.loads(file)
    for i in data:
        for j in i:

            value = list(map(str, i[j].split(":")))

            for k in range(len(value)):
                value[k] = value[k].strip()

            valueData = {}

            if j == "work_details":
                n = len(value)

                for k in range(n-1):

                    if k == 0:
                        x = value[k+1].split()
                        x = " ".join(x[:len(x)-1])
                        valueData[value[k]] = x

                    else:
                        x = value[k+1].split()

                        if k < n-2:
                            x = " ".join(x[:len(x)-1])

                        else:
                            x = " ".join(x)

                        y = value[k].split()
                        valueData[y[-1]] = x

                i["work_details"] = valueData

            if j == "details":
                valueData["About"] = 'Not Available'
                valueData["Experience"] = 'Not Known'
                valueData["Contact"] = []
                valueData["Email"] = []
                valueData["Website"] = []
                valueData["Speciality"] = 'Not Known'

                for valItr in range(len(value)):
                    if valItr == 0:
                        x = value[0].split()
                        y = x[-1]
                        x = " ".join(x[:len(x)-1])

                        valueData["About"] = x
                    else:
                        if y == "Speciality":
                            x = value[valItr].split()
                            y = x[-1]
                            if y == "Experience" or y == "http":
                                x = " ".join(x[:len(x)-1])
                            else:
                                x = " ".join(x)
                                y = ""

                            valueData["Contact"] = phExtract(
                                x, valueData["Contact"])
                            valueData["Email"] = emailExtract(
                                x, valueData["Email"])
                            valueData["Speciality"] = rep(x).strip()

                        elif y == "Experience":
                            x = value[valItr].split()
                            y = x[-1]
                            if y == "Speciality" or y == "http":
                                x = " ".join(x[:len(x)-1])
                            else:
                                x = " ".join(x)
                                y = ""

                            valueData["Contact"] = phExtract(
                                x, valueData["Contact"])
                            valueData["Email"] = emailExtract(
                                x, valueData["Email"])
                            valueData["Experience"] = rep(x).strip()

                        elif y == "http":
                            x = value[valItr].split()
                            y = x[-1]
                            valueData["Website"].append("http"+x[0])

                if not valueData["Website"]:
                    valueData["Website"] = ["NONE"]

                i["details"] = valueData

            if j == "NAME":
                continue

    out = json.dumps(data)

    f = open('formattedJson.json', 'w')
    f.write(out)
    print("Formatting Complete.")
