## Подсчет количества подмножеств

Если у тебя есть 5 ручек, сколько уникальных групп по 3 ты сможешь из них составить? Если у тебя 10 писем, сколько уникальных сочетаний по 4 ты можешь сделать? Если у тебя есть 12 игроков, сколько уникальных команд по 7 можно собрать?

В более общем смысле, имея набор из `n` значений, сколько уникальных подгрупп размера `k` можно составить?

## Функция для подсчета количества подмножеств

Определи функцию, представленную как `f(n, k)`, где `n` - количество имеющихся элементов, а `k` - размер подгруппы. Чтобы определить, как много уникальных групп по 3 ты можешь сделать из 5 карандашей, тебе надо написать `f(5, 3)`. Имея 10 писем, чтобы узнать, сколько уникальных комбинаций по 4 можно составить, напиши `f(10, 4)`. Как это можно представить в виде метода?

```
f(n, k)  = f(n - 1, k - 1) + f(n - 1, k)

f(5, 3)  = f(4, 2) + f(4, 3)
f(10, 4) = f(9, 3) + f(9, 4)
```
*Рисунок 1*. Общая формула для `f(n, k)` с двумя примерами.

Ты уже знаешь, что на входе функция должна принять `n` и `k`. Но что необходимо сделать с этими данными? На рисунке 1 представлены вычисления, которые нужно провести. Присмотрись к общей формуле и подумай, как это можно применить к ситуациям, описанным выше. На какой алгоритм это похоже?

## Известные числа подмножеств

```
f(0, 5) = 0
f(3, 0) = 1
f(7, 1) = 7
```
*Рисунок 2*. Известные значения для некоторых начальных условий.

Существуют некоторые условия, когда точно известно, сколько подмножеств получится, видя только входные данные. Эти условия показаны на рисунке 2, и детально о них можно написать следующее:

- Если у тебя 0 входных величин, получится 0 подмножеств.
- Можно сделать 1 подмножество размера 0 - нулевое множество.
- Если у тебя подмножество размера 1, то в результате получится столько подмножеств, сколько значений во входном множестве.

### Release 0
```javascript
subsetCount(0, 5);
# => 0
subsetCount(6, 2);
# => 15
subsetCount(6, 3);
# => 20
subsetCount(24, 4);
# => 10626
```
*Рисунок 3*. Пример реализации функции подможества

Реализуй метод `subsetCount`, который описывает функцию нахождения количества подмножеств. Твой метод должен принимать два аргумента - число значений множества и размер подмножества, и возвращать число уникальных комбинаций размера подмножества, которые можно получить из данного множества (см. Рисунок 3). 

У тебя уже есть тесты, в которых описываются известные условия (например, когда у тебя 0 элементов в множестве). Нужно будет дописать тесты для других вариантов использования.

## Дополнительные материалы

Если задание тебе совсем не понятно и ты конкретно застрял, то почитай про [сочетания](https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D1%87%D0%B5%D1%82%D0%B0%D0%BD%D0%B8%D0%B5). Но попробуй реализовать рекурсивный вариант, а не простую формулу.
