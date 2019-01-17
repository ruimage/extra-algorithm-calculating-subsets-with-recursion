# Algorithm Drill: Подсчет количества подмножеств

## Введение
Если у нас есть 5 ручек, сколько уникальных групп по 3 из них мы можем составить? Если у нас 10 писем, сколько уникальных сочетаний по 4 мы можем сделать? Если у нас есть 12 игроков, сколько уникальных команд по 7 можно собрать?

В более общем смысле, имея набор из *n* значений, сколько уникальных подгрупп размера *k* мы можем составить?


### Функция для подсчета количества подмножеств
Мы собираемся определить функцию, которую позже напишем в виде функции JS. Представим нашу функцию как `f(n, k)`. `n` обозначает количество имеющихся элементов, а `k` - размер подгруппы. Чтобы определить, как много уникальных групп по 3 мы можем сделать из 5 карандашей, мы должны написать `f(5, 3)`. Имея 10 писем, чтобы узнать, сколько уникальных комбинаций по 4 можно составить, напишем `f(10, 4)`. Видим ли мы, как можно это представить в виде метода?

```
f(n, k)  = f(n - 1, k - 1) + f(n - 1, k)

f(5, 3)  = f(4, 2) + f(4, 3)
f(10, 4) = f(9, 3) + f(9, 4)
```
*Figure 1*. Общая формула для `f(n, k)` с двумя примерами.

We know that our function needs two inputs:  `n` and `k`.  But what do we do with those inputs?  Figure 1 shows the calculations that we do with them.  Let's take a minute to review both the general formula and how it would be applied to the specific situations we've been discussing.  What type of algorithm does this look like?


### Известные числа подмножеств
```
f(0, 5) = 0
f(3, 0) = 1
f(7, 1) = 7
```
*Figure 2*. Known values for specific input conditions.

There are some conditions where we know how many subsets we can calculate based on the inputs.  These conditions are shown in Figure 2 and detailed in the following points.

- If there are zero options, we can make zero subsets.
- We can always make one subset of size zero, the empty set.
- If we're trying to make subsets of size one, then we can make as many subsets as there are options.


## Releases
### Release 0: Напишите эту функцию!
```js
subsetCount(0, 5)
# => 0
subsetCount(6, 2)
# => 15
subsetCount(6, 3)
# => 20
subsetCount(24, 4)
# => 10626
```

Write a `subsetCount` method that implements the function we defined in the *Summary*.  Our method should accept two arguments, the number of options and the subset size, and it should return the number of unique combinations of the subset size that can be made from the number of options (see Figure 3).  Tests have been written to describe the known conditions (e.g., when there are zero options).  We'll need to write tests for other use cases.


## Conclusion
Given a real-world function, we were required to translate it into Ruby.  When developing an algorithm, it's sometimes helpful to understand how we would solve the problem in the real world and then translate our process into Ruby.
