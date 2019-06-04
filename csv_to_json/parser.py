import csv
import json


def parse():
    # Open the CSV
    f = open('hackaton_aided', 'r')
    reader = csv.DictReader(f, fieldnames=("work_details", "details", "NAME"))
    # Parse the CSV into JSON
    out = json.dumps([row for row in reader])
    print("JSON parsed!")
    # Save the JSON
    f = open('csvToJson.json', 'w')
    f.write(out)
    print("JSON saved!")
