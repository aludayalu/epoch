import json
mdb=open("final.db").read()
mixeddb=json.loads("["+mdb.replace("\n",",")[:-1]+"]")
for x in mixeddb:
    x['name']=input(x['slack']+" : ")
    open("out.db","a").write(json.dumps(x)+"\n")