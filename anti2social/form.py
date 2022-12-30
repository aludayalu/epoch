import json

def save(data):
    open("people.db","a").write(json.dumps(data)+"\n")

while True:
    print("-"*128)
    name=input("name : ")
    music=input("music : ")
    color=input("color : ")
    sport=input("sport : ")
    drink=input("drink : ")
    save({"name":name,"music":music,"color":color,"sport":sport,"drink":drink})
    print("Data saved")