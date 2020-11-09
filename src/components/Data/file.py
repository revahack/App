def nameconv(s): 
  
    # split the string into a list  
    l = s.split() 
    new = "" 
  
    # traverse in the list  
    for i in range(len(l)-1): 
        s = l[i] 
          
        # adds the capital first character  
        new += (s[0].upper()+'.') 
          
    # l[-1] gives last item of list l. We 
    # use title to print first character in 
    # capital. 
    new += l[-1].title() 
      
    return new 

fo = open("asas.txt", "r+")
str = fo.read()
temp_str=str
names = temp_str.split(',')
list = []
for name in names:
    list.append(nameconv(name))

print (list)
with open('listfile.txt', 'w') as filehandle:
    for listitem in list:
        filehandle.write('%s\n' % listitem)