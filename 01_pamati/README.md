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
// Komentārs
d = 2
alert('Hello ' + prompt('Kāds ir jūsu vārds?')')
```

## Mainīgie

* Mainīgais ir vienība kam ir nosaukums un vērtība (dažās valodās arī "tips")
* Atslēgas vārdi - var, let, const 

```JavaScript
let nosaukums
nosaukums = 5
let skaitlis = 5
let teksts = 'Sveiks' // Ir labi savu kodu komentēt.
let patiess = true
let citsteksts = 'draugs'
let sveiciens = teksts + ' ' + citsteksts
console.log(sveiciens)
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

## Funkcija

* Funkcija ir vairāku komandu apvienojums
* Funkcija sākās ar atslēgas vārdu 'function' tad seko funkcijas nosaukums un pēc tam komandas, kas iekļautas figūriekavās.
* Funkcijas nosaukumam priekšā, iekavās norāda ienākošos datus

```JavaScript
function sum(skaitlis1, skaitlis2) {
  let rezultats = skaitlis1 + skaitlis2
  console.log(rezultats)
}

sum(2, 3)
// 5
```

* Funkcija var atgriezt rezultātu

```JavaScript
function sum(skaitlis1, skaitlis2) {
  let rezultats = skaitlis1 + skaitlis2
  return rezultats
}

let summa23 = sum(2, 3)
let summa24 = sum(2, 4)
console.log(summa23, summa24)
```

## Objekts

* Mainīgie var glabāt vērtības, funkcijas vai objektu
* Objekts sevī var apvienot vairākus mainīgos vai funkcijas
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
```


