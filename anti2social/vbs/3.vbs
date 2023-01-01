WScript.Sleep 180000
WScript.Sleep 10000
Set WshShell = WScript.CreateObject("WScript.Shell")
WshShell.Run "notepad"
WScript.Sleep 100
WshShell.AppActivate "Notepad"
WScript.Sleep 500
WshShell.SendKeys "I see"
WScript.Sleep 500
WshShell.SendKeys " you tryna"
WScript.Sleep 500
WshShell.SendKeys " copy something"
WScript.Sleep 500
WshShell.SendKeys " 👀"