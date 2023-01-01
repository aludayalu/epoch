Dim message, sapi
message=InputBox("Why did you need to copy that?","Speak to Me","I will be able to help")
Set sapi=CreateObject("sapi.spvoice")
sapi.Speak message