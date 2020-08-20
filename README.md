# Visible cursor Hackium plugin

A plugin for Hackium that makes a representation of the mouse cursor visible during automation. This is mostly used for debugging purposes.

## Usage

```js
import { Hackium } from 'hackium';
import plugin from 'hackium-plugin-visiblecursor';

let hackium = new Hackium({ plugins: [ plugin ] });
...
```

