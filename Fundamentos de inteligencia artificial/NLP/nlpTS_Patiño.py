import nltk
import re
#nltk.download()

from nltk.book import *

bookMD = text1
bookGN = text3

text1.tokens[:30]

bookMDsinR = sorted(set(bookMD))
riqLexMD =(len(bookMDsinR)/len(bookMD))

#Cantidad que se repite cada token
freqMD = FreqDist(bookMD)
freqMD.most_common(30)
freqMD.plot(30)

#Bi-gramas
dosgramas = bigrams(bookMD)
dosgramas = list(dosgramas)
#N-grama
tetragrama = nltk.ngrams(bookMD,4)
tetragrama = list(tetragrama)
print(tetragrama[:30])

freqMDtetragrama=FreqDist(tetragrama)
freqMDtetragrama.plot(30)

#Tokenización
prueba1=re.split('\w',t1 )

#Trabajo tokenización libro
bookTS = 'MOST of the adventures recorded in this book really occurred; one or two were experiences of my own, the rest those of boys who were schoolmates of mine. Huck Finn is drawn from life; Tom Sawyer also, but not from an individual — he is a combination of the characteristics of three boys whom I knew, and therefore belongs to the composite order of architecture.The odd superstitions touched upon were all prevalent among children and slaves in the West at the period of this story — that is to say, thirty or forty years ago.Although my book is intended mainly for the entertainment of boys and girls, I hope it will not be shunned by men and women on that account, for part of my plan has been to try to pleasantly remind adults of what they once were themselves, and of how they felt and thought and talked, and what queer enterprises they sometimes engaged in.'
ngrama = nltk.ngrams(bookTS,4)
ngrama = list(ngrama)
bookTS_tk = re.split(r'[!,!.!;\s]',bookTS)
bookTS_tk = re.split('[\s]',bookTS)
