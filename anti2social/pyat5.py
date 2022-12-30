import sys
from PyQt5.QtWidgets import QApplication
from PyQt5.QtWidgets import QLabel
from PyQt5.QtWidgets import QVBoxLayout
from PyQt5.QtWidgets import QWidget
from PyQt5.QtWidgets import * 
from PyQt5.QtGui import * 
from PyQt5.QtCore import Qt
import PyQt5.QtCore as QtCore

class MainWindow(QWidget):

    def __init__(self):
        super(MainWindow, self).__init__()
        self.layout = QVBoxLayout()
        self.label = QLabel("My text")
        self.layout.addWidget(self.label)
        self.setWindowTitle("My Own Title")
        self.setLayout(self.layout)
        self.setStyleSheet("background-color: #eb4034;text-align:center;")
        self.setWindowFlag(Qt.FramelessWindowHint)
        self.setGeometry(100, 100, 400, 300)
        self.showFullScreen()
        self.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
    #def closeEvent(self, event):    
        #event.ignore()




if __name__ == "__main__":
    app = QApplication(sys.argv)
    mw = MainWindow()
    mw.show()
    sys.exit(app.exec_())