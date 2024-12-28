---
description: The advanced feature nobody asked for
layout:
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: false
  outline:
    visible: true
  pagination:
    visible: true
---

# Custom Algorithm

{% hint style="warning" %}
This feature is quite advanced and requires knowledge of JavaScript

This feature is also not heavily tested but does work

## We do NOT support max levels with custom algorithms. Support may be added in the future.
{% endhint %}

{% hint style="info" %}
The algorithm will not run unless your current algorithm is `custom`
{% endhint %}

So you want to make your own algorithm?\
Here's some things to note

Your function must contain `xp` this `xp` value represents the current xp of the user

An example of a valid function

```javascript
(xp) => Math.floor(0.1 * Math.sqrt(xp))
```

The proper format to enter the above algorithm would be `l!set calgorithm "(xp) => Math.floor(0.1 * Math.sqrt(xp))"`

We understand that this can be a difficult feature to understand but if you want any help please consider joining the support server for Mega Utilities that represents the platform you're using
