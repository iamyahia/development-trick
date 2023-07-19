# refactor tricks

this repository includes:

-[x] refactor

in this file i inserted the refactoring trick, before and after the code

in the past i have a [ticket](https://github.com/GatewayLegends/np/pull/725#event-9847859721) from KPI project, where i implemented logics for filter-modalbut after make a PR, the reviewer ( mr.ayoob && mamosta milad ) refactor my code to be like more profitional

from this:

```js
const handlePredictedDaysChange = useCallback((event) => {
  handleUpdateFilters("date", []);
  if (Number.isNaN(parseInt(event.target.value, 10))) {
    handleUpdateFilters("predictedDays", 1);
  }

  if (event.target.value < 1 || event.target.value > 30) {
    setIsOutOfRange(true);
  } else {
    setIsOutOfRange(false);
    handleUpdateFilters("predictedDays", parseInt(event.target.value, 10) + 1);
  }
}, []);
```

_To this_: we change the validation style, and you need to kow we change the default predictedDays value to null

```js
const handlePredictedDaysChange = useCallback((event) => {
  handleUpdateFilters("date", []);
  if (
    event.target.value < 1 ||
    event.target.value > 30 ||
    !event.target.value
  ) {
    setIsOutOfRange(true);
    handleUpdateFilters("predictedDays", null);
    return;
  }
  setIsOutOfRange(false);
  handleUpdateFilters("predictedDays", parseInt(event.target.value, 10) + 1);
}, []);
```
