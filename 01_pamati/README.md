# Saturs

## Pārlūks

* Chrome
* Lapas izejas kods - HTML
* Izstrādes instrumenti

## HTML

* Fiddle - https://jsfiddle.net/gints/x6xo1s24/10/
* HTML "Tagi"

```html
<h1>
  Virsraksts
</h1>
<h2>Apakšvirsraksts</h2>
<p>Šī ir viena rinkopa lkajdfl; kasjdf l;akjsd f. Šī ir viena rinkopa lkajdfl; kasjdf l;akjsd f. Šī ir viena rinkopa lkajdfl; kasjdf l;akjsd f. Šī ir viena rinkopa lkajdfl; kasjdf l;akjsd f. Šī ir viena rinkopa lkajdfl; kasjdf l;akjsd f</p>
<p>Šī ir cita rindkopa lksjdf lkj sdflkj asdlkfj </p>
<ul>
  <li>Saraksta elements 1</li>
  <li>Saraksta elements 2</li>
</ul>
<a href="https://www.google.com">Ejam uz google.com</a>
```
* CSS

```css
h1 {
  color: green;
}

h2 {
  font-style: italic;
}
```

## Konsole

* konsolē var izpildīt JavaScript
* darbības
  - 2 + 2 ?
  - 'Ziņa' ?
  - console.log('Ziņa') 
  - document.write('Hello world')
  - d = 2 ?

```JavaScript
2 + 2
'Ziņa'
console.log('Ziņa')
document.write('Hello world')
// Ļoti laba prakse ir komentēt kodu
// Komentārs
d = 2
alert('Sveiks ' + prompt('Kāds ir jūsu vārds?' + '!'))
```

## Mainīgie

* Mainīgais ir vienība kam ir nosaukums un vērtība (dažās valodās arī "tips")
* Atslēgas vārdi - var (globāls mainīgais), let (lokāls mainīgais), const (konstante)

```JavaScript
// Mainīgā vērtība undefined
let nosaukums
nosaukums = 5
// Vērtība var būt skaitlis, teksts vai 'boolean'
let skaitlis = 20
let teksts = 'Sveiks' // Ir labi savu kodu komentēt.
let patiess = true
let citsteksts = 'draugs'
// Izteiksmes
// 'Konkatenēšana'
let sveiciens = teksts + ' ' + citsteksts
console.log(sveiciens)
// Matemātiskās operācijas
let citsskaitlis = 2
skaitlis + citsskaitlis
skaitlis - citsskaitlis
skaitlis / citsskaitlis
skaitlis * citsskaitlis
skaitlis % citsskaitlis
skaitlis++
console.log(skaitlis)
console.log(--skaitlis)
console.log(skaitlis--)
console.log(skaitlis--)
```

### Konstantes

* Konstantes lieto, ja kādai vērtībai ir nepieciešams atkārtots lietojums
* Konstanti definē ar atslēgas vārdu const

```JavaScript
const pi = 3.141592653589793
// pēc constantes definēšanas, mums ir jau daudz vienkāršāk lietot pi

let radius = 3
let perim = 2 * pi * radius
console.log(perim)
```

* Konstantes vērtību nedrīkst mainīt.

```JavaScript
// Ja izpildīts kods iepriekš, tad šis izdos kļūdu
const pi = 2
```

## Funkcija

* Funkcija ir vairāku komandu apvienojums
* Funkcijas izmanto lai saglabātu komandas atkārtotai izpildei
* Funkcija sākās ar atslēgvārdu 'function' tad seko funkcijas nosaukums, iekavas un pēc tam komandas, kas iekļautas figūriekavās.
* Funkcijas nosaukumam priekšā, iekavās norāda ienākošos datus - argumentus

```JavaScript
function sakihi() {
  alert('Sveiks !')
}
sakihi()

// Fukcijas ar 'argumentiem'
function sakihi(vards) {
  alert('Sveiks ' + vards + '!')
}
sakihi('Jāni')
sakihi('Jolanta')

// Argumenti var būt vairāki, atdalīti ar komatu
function sum(skaitlis1, skaitlis2) {
  let rezultats = skaitlis1 + skaitlis2
  console.log(rezultats)
}

sum(2, 3)
// 5
sum(3, 5)
```

* Funkcija var atgriezt rezultātu ar atslēgvārdu 'return'

```JavaScript
function sum(skaitlis1, skaitlis2) {
  let rezultats = skaitlis1 + skaitlis2
  return rezultats
}

let summa23 = sum(2, 3)
let summa24 = sum(2, 4)
console.log(summa23, summa24)
```

## Objekts = properties & functions

* Mainīgie var glabāt vērtības, funkcijas ('functions') vai objektu
* Objekts sevī var apvienot vairākus mainīgos ('properties') vai funkcijas
* Teksta virkne ir objekts

```JavaScript
let virkne = 'ABCDF'
// Objektam mainīgajā virkne ir mainīģais length,
// kas norāda uz virknes objekta garumu
let garums = virkne.length
console.log(virkne.length)
// Objektam virkne ir funkcija - substring,
// kas atgriež virknes daļu
let dalja = virkne.substring(1, 2)
console.log(dalja)

// 'Jaunu' objektu izveido ar atslēgvārdu new
let neteksts = new String()
neteksts
let masivs = new Array()
masivs
```

## Masīvs

* Masīvs ir objekts
* Masīvs satur vienu vai vairākas vērtības

```JavaScript
// Izveidojam masīvu
let a = new Array()
// Ievietojam masīvā elementu
a[0] = 'cat'
a[1] = 'dog'
a[2] = 32
a[3] = true
// Nolasam vērtības
console.log(a[0])
// Aizpildīt vērtības var arī veidojot objektu
let b = new Array('cat', 'dog', 32, true)
console.log(a[1])
// To pašu var izdarīt saīsinātā veidā
let c = ['cat', 'dog', 32, true]
console.log(a[3])
```

## Izpildes kārtības kontrole - IF

* figūriekavās ievieto komandas, kuras kontrolē
* 'if' - izpilda kodu tikai ja vērtība patiesa

```JavaScript
let a = 7
if (a > 10) {
  // ^ False - bloks netiek izpildīts
  alert(a)
}

a = 17
if (a > 10) {
  // ^ True - bloks tiek izpildīts
  alert(a)
}
// dažādi veidi kā testēt
a < 17
a <= 17
a == 17
a != 15
let s = 'Jānis'
s == 'Jānis'
s == 'Zane'
```

* if var papildināt ar else, lai izpildītu komandas pretējā gadījumā

```JavaScript
let name = 'Alise'
if (name == 'Jānis') {
  console.log('Sveiks Jāni')
} else {
  console.log('Sveiki visi pārējie')
}

// Ieliekam funkcijā, lai izmantotu kodu vairākkārt
function sveiciens(vards) {
  if (vards == 'Jānis') {
    console.log('Sveiks Jāni')
  } else {
    console.log('Sveiki visi pārējie')
  }
}
sveiciens('Jānis')
sveiciens('Zane')
```

## Izpildes kārtības kontrole - For

* atslēgvārdu for izmanto lai atkārtotu kodu vairākas reizes

```JavaScript
for(i=0;i<4;i++) {
  console.log('Skaitlis: ' + i)
}
```



