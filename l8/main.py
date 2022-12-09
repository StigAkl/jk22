import numpy as np
import matplotlib.pyplot as plt
plt.style.use('seaborn-whitegrid')

with open("data.txt") as f:
  data = f.read()
  points = data.split('\n')

  x = []
  y = []
  p1 = points[0]
  
  for p in points:
    x.append(p.split(' ')[0])
    y.append(p.split(' ')[1])


  print(x[0])
  print(y[0])
  fig = plt.figure()

  ax1 = fig.add_subplot(111)

  ax1.set_title("Plot title")    
  ax1.set_xlabel('x label')
  ax1.set_ylabel('y label')

  ax1.plot(x,y, 'o', color='black')

  leg = ax1.legend()

  plt.show()