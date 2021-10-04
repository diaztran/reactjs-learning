##Some new attribute explaination:

- aria-pressed : tells assistive technology (like screeen readers) that the button can be in one of two states: pressed or unpressed. Think of these as analogs for on and off. Setting a value of true means that the button is pressed by default.

- role : helps assistive techonology explain what kind of element a tag represents. A <ul> is treated like a list by default, but the styles we're about to add will break that functionaliity. This role will restore the "list" meaning to the <ul> element.

- aria-lebelledby : tell the assistive technologies that we're treating our list heading as the label that describes the purpose of the list beneath it.

- Components must always return something.

- The camel-cased nature of onClick is important - JSX will not recogize onclick

- All browser events follow this format in JSX - on, followed by the name of the event

- It's not possible to update the props a component receives, only to read them.

- We handle onsubmit by form onclick, not on button onlick
