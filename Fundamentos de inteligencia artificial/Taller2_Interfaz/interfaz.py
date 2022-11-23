import matplotlib.pyplot as plt
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg
import pandas as pd
from scipy import stats
import tkinter as tk

archivo = 'abalone.csv'
datos = pd.read_csv(archivo)

nombres_variables=['Length','Diameter','Height','Whole weight','Shucked weight','Viscera weight','Shell weight','Rings']

root = tk.Tk()
root.title("Abalone por Daniel Patiño")
root.geometry("1000x700") #Tamaño

#media, mediana, moda

media_longitud=datos['Length'].mean
media_diametro=datos['Diameter'].mean
media_altura=datos['Height'].mean
media_p_entero=datos['Whole weight'].mean
media_p_cascara=datos['Shucked weight'].mean
media_p_visera=datos['Viscera weight'].mean
media_p_caparazon=datos['Shell weight'].mean
media_anillos=datos['Rings'].mean

mediana_longitud=datos['Length'].median
mediana_diametro=datos['Diameter'].median
mediana_altura=datos['Height'].median
mediana_p_entero=datos['Whole weight'].median
mediana_p_cascara=datos['Shucked weight'].median
mediana_p_visera=datos['Viscera weight'].median
mediana_p_caparazon=datos['Shell weight'].median
mediana_anillos=datos['Rings'].median

moda_longitud=datos['Length'].mode
moda_diametro=datos['Diameter'].mode
moda_altura=datos['Height'].mode
moda_p_entero=datos['Whole weight'].mode
moda_p_cascara=datos['Shucked weight'].mode
moda_p_visera=datos['Viscera weight'].mode
moda_p_caparazon=datos['Shell weight'].mode
moda_anillos=datos['Rings'].mode

tk.Label(root,text = "Seleccion de gráfico").grid(row=1,column=0, sticky='w')

tipo_grafo = tk.IntVar() #Grafo seleccionado
tk.Radiobutton(root,text="Histograma",variable = tipo_grafo, value=1).grid(row=2, column=2, sticky='w')
tk.Radiobutton(root,text="Boxplot",variable=tipo_grafo, value=2).grid(row=2, column=4, sticky='w')
tk.Radiobutton(root,text="Normalización",variable=tipo_grafo, value=3).grid(row=2, column=6, sticky='w')
tk.Radiobutton(root,text="Dispersión",variable=tipo_grafo, value=4).grid(row=2, column=8, sticky='w')

tk.Label(root,text = "Seleccione la variable").grid(row=3,column=0, sticky='w')
longitud = tk.IntVar()
tk.Checkbutton(root,text="Longitud",variable = longitud).grid(row=4, column=0, sticky='w')
p_entero = tk.IntVar()
tk.Checkbutton(root,text="Peso entero",variable=p_entero).grid(row=4, column=2, sticky='w')
p_caparazon = tk.IntVar()
tk.Checkbutton(root,text="Peso caparazón",variable=p_caparazon).grid(row=4, column=4, sticky='w')
diametro = tk.IntVar()
tk.Checkbutton(root,text="Diametro",variable=diametro).grid(row=4, column=6, sticky='w')
p_cascara = tk.IntVar()
tk.Checkbutton(root,text="Peso cascara",variable=p_cascara).grid(row=5, column=0, sticky='w')
anillos = tk.IntVar()
tk.Checkbutton(root,text="# anillos",variable=anillos).grid(row=5, column=2, sticky='w')
altura = tk.IntVar()
tk.Checkbutton(root,text="Altura",variable=altura).grid(row=5, column=4, sticky='w')
p_viseras = tk.IntVar()
tk.Checkbutton(root,text="Peso viseras",variable=p_viseras).grid(row=5, column=6, sticky='w')



def Graficar():
    
    frame=tk.Frame(root,bg='yellow')
    frame.place(x=10,y=250)


    fig, ax = plt.subplots()
    plt.title("Gráfica con atípicos")
    
    variables_seleccionadas = []
    variables_seleccionadas.append(longitud.get())
    variables_seleccionadas.append(diametro.get())
    variables_seleccionadas.append(altura.get())
    variables_seleccionadas.append(p_entero.get())
    variables_seleccionadas.append(p_cascara.get())
    variables_seleccionadas.append(p_viseras.get())
    variables_seleccionadas.append(p_caparazon.get())
    variables_seleccionadas.append(anillos.get())
    
    cont=variables_seleccionadas.count(1)
    
    if (tipo_grafo.get()==1 or tipo_grafo.get()==2 or tipo_grafo.get()==3) and cont==1:
        indice=variables_seleccionadas.index(1)
        x=datos[nombres_variables[indice]]
        
        if tipo_grafo.get()== 1 and cont==1: #Histograma
            ax.hist(x,density="true",rwidth=(0.5))
        
        if tipo_grafo.get()== 2 and cont==1: #Boxplot
            ax.boxplot(x)
        
        if tipo_grafo.get()== 3 and cont==1: #Normal
            fig=plt.figure()
            ax=fig.add_subplot(111)
            res=stats.probplot(x,dist=stats.norm,plot=ax)
        
    elif tipo_grafo.get()==4 and cont==2:#Dispersión
        indice=variables_seleccionadas.index(1)
        variables_seleccionadas.pop(indice)
        indice2=variables_seleccionadas.index(1)+1
        x=datos[nombres_variables[indice]]
        y=datos[nombres_variables[indice2]]
        ax.scatter(x,y)
    else:
        tk.messagebox.showerror(message=("Error en la selección"))
        
    canvas = FigureCanvasTkAgg(fig, master = frame)
    canvas.draw()
    canvas.get_tk_widget().grid(column=0, row=13, rowspan=1, pady=1)
        
tk.Button(root,text="Graficar",command=Graficar).grid(row=6,column=3, sticky='w')

tk.Label(root,text="Factor").grid(row=8,column=0,pady=10, sticky='w')
factAtip=tk.Entry(root)
factAtip.grid(row=8,column=3)

def Atipicos():
    
    frame2=tk.Frame(root,bg='yellow')
    frame2.place(x=510,y=250)

    fig, ax = plt.subplots()
    plt.title("Gráfica sin atípicos")
    
    factor=float(factAtip.get())
    
    variables_seleccionadas = []
    variables_seleccionadas.append(longitud.get())
    variables_seleccionadas.append(diametro.get())
    variables_seleccionadas.append(altura.get())
    variables_seleccionadas.append(p_entero.get())
    variables_seleccionadas.append(p_cascara.get())
    variables_seleccionadas.append(p_viseras.get())
    variables_seleccionadas.append(p_caparazon.get())
    variables_seleccionadas.append(anillos.get())
    
    cont=variables_seleccionadas.count(1)
    
    if (tipo_grafo.get()==1 or tipo_grafo.get()==2 or tipo_grafo.get()==3) and cont==1:
        indice=variables_seleccionadas.index(1)
        x=nombres_variables[indice]
        
        Q1 = datos[x].quantile(0.25)
        Q3 = datos[x].quantile(0.75)
        IQR = Q3 - Q1
        u_limit = Q3 + factor * IQR
        l_limit = Q1 - factor * IQR
        
        ubicacionNoAtipicos= (datos[x] >= l_limit) & (datos[x]<= u_limit)
        new_df = datos[ubicacionNoAtipicos]
        
        if tipo_grafo.get()== 1 and cont==1: #Histograma
            ax.hist(new_df[x],density="true",rwidth=(0.5))
        
        if tipo_grafo.get()== 2 and cont==1: #Boxplot
            ax.boxplot(new_df[x])
        
        if tipo_grafo.get()== 3 and cont==1: #Normal
            fig=plt.figure()
            ax=fig.add_subplot(111)
            res=stats.probplot(new_df[x],dist=stats.norm,plot=ax)
        
    elif tipo_grafo.get()==4 and cont==2:#Dispersión
        indice=variables_seleccionadas.index(1)
        variables_seleccionadas.pop(indice)
        indice2=variables_seleccionadas.index(1)+1
        x=nombres_variables[indice]
        y=nombres_variables[indice2]
        
        Q1 = datos[x].quantile(0.25)
        Q3 = datos[x].quantile(0.75)
        IQR = Q3 - Q1
        u_limit = Q3 + factor * IQR
        l_limit = Q1 - factor * IQR
        ubicacionNoAtipicos= (datos[x] >= l_limit) & (datos[x]<= u_limit)
        new_df_x = datos[ubicacionNoAtipicos]
        
        Q1 = datos[y].quantile(0.25)
        Q3 = datos[y].quantile(0.75)
        IQR = Q3 - Q1
        u_limit = Q3 + factor * IQR
        l_limit = Q1 - factor * IQR
        ubicacionNoAtipicos= (datos[x] >= l_limit) & (datos[x]<= u_limit)
        new_df_y = datos[ubicacionNoAtipicos]
        
        ax.scatter(new_df_x[x],new_df_y[y])
    else:
        tk.messagebox.showerror(message=("Error en la selección"))
    
    canvas = FigureCanvasTkAgg(fig, master = frame2)
    canvas.draw()
    canvas.get_tk_widget().grid(column=10, row=13, rowspan=1, pady=1)

tk.Button(root,text="Gráficar sin atípicos",command=Atipicos).grid(row=10,column=3)

root.mainloop()