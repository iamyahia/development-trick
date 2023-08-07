# re-usable code for rendering lists

we are refactoring the `if(){} else{}` condition in very nice way:

this is the base code:

```js
const handleSetDateState = (newDateState) => {
  const startDate = new Date(newDateState[0]).getTime();
  const endDate = new Date(newDateState[1]).getTime();

  const daysDifference = differenceInDays(endDate, startDate);
  // ... the idea is in here that we refactor as we mention in bellow
};
```

> From this:

```js
if (daysDifference < 14) {
  setIsDateOutOfRange(true);
  return;
}
setIsDateOutOfRange(false);
handleUpdateFilters("date", newDateState);
```

> to this:

```js
const isDateRangeAllowed = daysDifference > 13;
setIsDateOutOfRange(!isDateRangeAllowed);
if (isDateRangeAllowed) {
  handleUpdateFilters("date", newDateState);
}
```
