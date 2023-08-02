# re-usable code for rendering lists

we have this tow different data:

```js
const person = [
    {
      name: "Jon ",
      age: 22,
      hariColor: "brown",
      hobbies: ["swimming", "bicycling"],
    },
    {
      name: "tea ",
      age: 22,
      hariColor: "brown",
      hobbies: ["dd", "dd"],
    },
    {
      name: "ver ",
      age: 22,
      hariColor: "brown",
      hobbies: ["ff", "ff"],
    },
  ];

  const product = [
    {
      name: "flat-screen",
      price: "$300",
      description: "aaaa ",
      rating: 4.5,
    },
    {
      name: "ttt",
      price: "$30",
      description: "dddd",
      rating: 4.5,
    },
    {
      name: "teees ",
      price: "$100",
      description: "ddd lcd",
      rating: 4.5,
    },
```

if you see, the above code, you can see we have two different arrays of objects with the different

so for rendering the different arrays we can use the following code :

```js
export default function RenderList({ data, keysToRender }) {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          {keysToRender.map((key) => (
            <div key={key}>
              <strong>{key}: </strong>
              {Array.isArray(item[key]) ? item[key].join(", ") : item[key]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

<div>
  <h2>Persons:</h2>
  <RenderList
    data={person}
    keysToRender={["name", "age", "hariColor", "hobbies"]}
  />

  <h2>Products:</h2>
  <RenderList
    data={product}
    keysToRender={["name", "price", "description", "rating"]}
  />
</div>;
```

and tha's it .
