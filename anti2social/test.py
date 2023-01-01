bullis="""
"Looks like we're taking the lazy programmer's way out today!"
"Ah, the classic copy-paste method."
"Why do something from scratch when you can just Control C Control V?"
"Gotta love a good copy-paste shortcut."
"Looks like we're giving credit to the original programmer today."
"I see you've found the 'Copy' button. Good work."
"Who needs creativity when you have the internet?"
"I think we just committed plagiarism...but for code."
"I guess we're taking the easy way out today."
"I see you're not afraid to borrow someone else's code."
"Well, this is certainly the quickest way to get the job done."
"I hope the original programmer doesn't mind us borrowing their code."
"Looks like we're taking advantage of the open source community today."
"Why reinvent the wheel when you can just copy it?"
"Well, this is one way to save time and effort."
"I guess we're not feeling particularly original today."
"I see you've found the 'Copy' and 'Paste' buttons. Impressive."
"Looks like we're taking a shortcut today."
"I guess we're not feeling particularly creative today."
"Well, this is one way to get the job done efficiently."
""".split("\n")

import pyttsx3,random

converter = pyttsx3.init()

converter.setProperty('rate', 150)

converter.setProperty('volume', 0.7)

converter.say(random.choice(bullis))

converter.runAndWait()