# refactor tricks

in scenario, we have a checkbox dropdown-menu that contain those values: ['finished','corrupted','pending','cancelled','paused'], so we have a condition: if the user check `paused` or `pending`, the datepicker must be disabled, so for this purpos we have multiple solution for this condition because, we work with an array, so we can use `.include()` or `.some()` or `...` .

this repository includes: -[x] refactor
from this:

```js
const isLiveStatusFiltered = useMemo(() => {
  const hasFinished = tableHeaderDropdownFilters.status.includes("finished");
  const hasCorrupted = tableHeaderDropdownFilters.status.includes("corrupted");
  const hasCancelled = tableHeaderDropdownFilters.status.includes("cancelled");

  return !(hasFinished || hasCorrupted || hasCancelled);
}, [tableHeaderDropdownFilters]);
```

to this:

```js
const isLiveStatusFiltered = useMemo(
  () =>
    !tableHeaderDropdownFilters.status.some((status) =>
      ["finished", "corrupted", "cancelled"].includes(status)
    ),
  [tableHeaderDropdownFilters]
);
```
