import json
mixeddb=json.loads("["+open("mixed.db").read().replace("\n",",")[:-1]+"]")

def calcaulte_match(a,b):
    match=100
    if a['music']!=b['music']:match-=25
    if a['color']!=b['color']:match-=25
    if a['sport']!=b['sport']:match-=25
    if a['drink']!=b['drink']:match-=25
    return match
user=mixeddb[0]
q1,q2,q3,q4=[],[],[],[]
for x in mixeddb:
    if x!=user:
        match=calcaulte_match(user,x)