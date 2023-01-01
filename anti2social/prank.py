from pynput.keyboard import Listener  
import subprocess,random,os
vbs=[1,2,3,4,5,6,7,8]
last_key=None

def each(key):
    global last_key
    if (str(last_key)=="Key.ctrl" or str(last_key)=="Key.ctrl_l") and (str(key)=="'c'" or str(key)=="'\\x03'"):
        os.system(f"Wscript vbs/{random.choice(vbs)}.vbs")
    last_key=key

def x(f):pass

def copy2clip(data):
    from sys import platform
    if platform == "linux" or platform == "linux2":
        cmd='echo '+data.strip()+'|pbcopy'
        return subprocess.check_call(cmd, shell=True)
    elif platform == "darwin":
        cmd='echo '+data.strip()+'|pbcopy'
        return subprocess.check_call(cmd, shell=True)
    elif platform == "win32":
        cmd='echo '+data.strip()+'|clip'
        return subprocess.check_call(cmd, shell=True)

with Listener(  
    on_press = each,  
    on_release = x 
) as the_listener:  
    the_listener.join()