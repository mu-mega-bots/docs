---
description: Let's breakdown the algorithm options
layout:
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: false
  pagination:
    visible: true
---

# Algorithm Breakdown

{% hint style="info" %}
The value `(xp)`in each function equals the current users XP
{% endhint %}

For custom algorithms go to the page below

{% content-ref url="custom-algorithm.md" %}
[custom-algorithm.md](custom-algorithm.md)
{% endcontent-ref %}

### Default

```javascript
(xp) => Math.floor(0.1 * Math.sqrt(xp))
```

* **Formula**: `Level = 0.1 * sqrt(XP)`
* **Growth**: _Slower at first, accelerating as XP increases_.
  * This is a square root function, so the level grows slowly at low XP but accelerates as XP increases.

### Linear

```javascript
linear: (xp) => Math.floor(xp / 100)
```

* **Formula**: `Level = XP / 100`
* **Growth**: _Linear growth_.
  * Level increase is consistent every 100 XP equals one level.

### Exponential

```javascript
(xp) => Math.floor(Math.log2(xp + 1))
```

* **Formula**: `Level = log2(XP + 1)`
* **Growth**: _Rapid growth at lower XP, slowing as XP increases_.
  * This logarithmic growth increases quickly at lower XP values, but levels off as XP grows.

### Random

```javascript
(xp) => Math.floor(xp * (0.8 + Math.random() * 0.4))
```

* **Formula**: `Level = XP * (0.8 + Math.random() * 0.4)`
* **Growth**: _Random growth_.
  * The level is determined randomly within a range, adding a bit of unpredictability to the level-up process.

### Doubling

```javascript
(xp) => Math.floor(Math.log2(xp + 1))
```

* **Formula**: `Level = log2(XP + 1)`
* **Growth**: _Exponential growth_.
  * This is similar to the exponential algorithm but with a slightly different formula. Growth starts rapid and slows down with increasing XP.

### Sigmoid

```javascript
(xp) => Math.floor(1 / (1 + Math.exp(-xp / 1000)))
```

* **Formula**: `Level = 1 / (1 + Math.exp(-XP / 1000))`
* **Growth**: _S-shaped curve (logistic growth)_.
  * Initially grows slowly, then accelerates, and finally levels off as XP increases.

### Stepwise

```javascript
(xp) => Math.floor(xp / 1000)
```

* **Formula**: `Level = XP / 1000`
* **Growth**: _Stepwise growth_.
  * The level increases gradually but only in "steps." For every 1000 XP, the level increases by one.

### Inverse

```javascript
(xp) => Math.floor(1 / (xp + 1))
```

* **Formula**: `Level = 1 / (XP + 1)`
* **Growth**: _Inverse growth_.
  * As XP increases, the level decreases. This function results in the player having diminishing returns in terms of level-up speed.

### Tiered

```javascript
(xp) => {
        if (xp < 1000) return Math.floor(xp / 100);
        if (xp < 5000) return Math.floor((xp - 1000) / 200) + 10;
        return Math.floor((xp - 5000) / 500) + 30;
    }
```

* **Formula**:
  * `Level = XP / 100` (if XP < 1000)
  * `Level = (XP - 1000) / 200 + 10` (if 1000 <= XP < 5000)
  * `Level = (XP - 5000) / 500 + 30` (if XP >= 5000)
* **Growth**: _Piecewise linear growth_.
  * This algorithm has different growth rates in different XP ranges: slower growth at first, followed by progressively faster growth.

### Polynomial

```javascript
(xp) => Math.floor(0.2 * Math.pow(xp, 0.8))
```

* **Formula**: `Level = 0.2 * XP^0.8`
* **Growth**: _Polynomial growth_.
  * Growth starts slow, but as XP increases, it accelerates more quickly than linear growth.

### Log

```javascript
(xp) => Math.floor(Math.log(xp + 1))
```

* **Formula**: `Level = log(XP + 1)`
* **Growth**: _Logarithmic growth_.
  * This type of growth increases quickly at first and then gradually levels off as XP increases.

### Quadratic

```javascript
(xp) => Math.floor(Math.sqrt(xp))
```

* **Formula**: `Level = sqrt(XP)`
* **Growth**: _Square root growth_.
  * Initially, the growth is slow but increases progressively as XP increases.

### cubicRoot

```javascript
(xp) => Math.floor(Math.cbrt(xp))
```

* **Formula**: `Level = cbrt(XP)`
* **Growth**: _Cubic root growth_.
  * Growth is even more gradual than square root growth, resulting in a very slow level-up at higher XP.

### Fibonacci

```javascript
(xp) => {
        let a = 0, b = 1;
        for (let i = 2; i <= xp; i++) {
            let temp = a + b;
            a = b;
            b = temp;
        }
        return b;
    }
```

* **Formula**: Uses the Fibonacci sequence where `F(n) = F(n-1) + F(n-2)`.
* **Growth**: _Exponential growth (Fibonacci progression)_.
  * The Fibonacci sequence grows exponentially, but the rate of growth accelerates as the sequence progresses.

### Geometric

```javascript
(xp, r = 1.2) => Math.floor(Math.pow(r, xp))
```

* **Formula**: `Level = r^XP` (with a default ratio of `r = 1.2`)
* **Growth**: _Geometric growth_.
  * Level grows exponentially based on a fixed ratio. The ratio can be adjusted to control how fast levels increase.

### Logistic

```javascript
(xp, L = 100, k = 0.01, x0 = 5000) => Math.floor(L / (1 + Math.exp(-k * (xp - x0))))
```

* **Formula**: `Level = L / (1 + Math.exp(-k * (XP - x0)))` (default values for `L = 100`, `k = 0.01`, `x0 = 5000`)
* **Growth**: _Logistic growth (S-curve)_.
  * Initially, growth is slow, accelerates as XP reaches a certain point, and then levels off as XP continues to increase.

### PowerLaw

```javascript
(xp, p = 1.5) => Math.floor(Math.pow(xp, p))
```

* **Formula**: `Level = XP^p` (with a default power of `p = 1.5`)
* **Growth**: _Power law growth_.
  * This type of growth is steep initially and becomes more gradual as XP increases.

### Sinusoidal

```javascript
(xp) => Math.floor(Math.sin(xp) * 100)
```

* **Formula**: `Level = sin(XP) * 100`
* **Growth**: _Sinusoidal oscillation_.
  * The level fluctuates as XP increases, following the sinusoidal wave pattern. This gives a cyclical level-up process.

### Factorial

```javascript
(xp) => Math.floor(factorial(xp) / 1000000)
```

* **Formula**: `Level = factorial(XP) / 1000000`
* **Growth**: _Factorial growth_.
  * Factorial growth is extremely rapid, making it suitable for modeling extremely steep and fast level increases.

### Harmonic

```javascript
(xp) => Math.floor([...Array(xp).keys()].map(i => 1 / (i + 1)).reduce((a, b) => a + b, 0))
```

* **Formula**: `Level = sum(1 / (i + 1)) for i from 0 to XP-1`
* **Growth**: _Harmonic growth_.
  * This type of growth increases more slowly as XP increases, with diminishing returns for each additional XP point.

### PiecewiseLinear

```javascript
(xp) => {
        if (xp < 1000) return Math.floor(xp / 100);
        if (xp < 5000) return Math.floor((xp - 1000) / 200) + 10;
        return Math.floor((xp - 5000) / 500) + 20;
    }
```

* **Formula**:
  * `Level = XP / 100` (if XP < 1000)
  * `Level = (XP - 1000) / 200 + 10` (if 1000 <= XP < 5000)
  * `Level = (XP - 5000) / 500 + 20` (if XP >= 5000)
* **Growth**: _Piecewise linear growth_.
  * Similar to the tiered algorithm, but with different ranges for XP.

### QuadraticDecay

```javascript
(xp) => Math.floor(xp / (xp + 100))
```

* **Formula**: `Level = XP / (XP + 100)`
* **Growth**: _Decay growth_.
  * The level approaches a maximum value as XP increases, but it becomes harder to level up as XP grows larger.

### Logarithmic

```javascript
(xp, base = 2) => Math.floor(Math.log(xp + 1) / Math.log(base))
```

* **Formula**: `Level = log(XP + 1) / log(base)`
* **Growth**: _Logarithmic growth with customizable base_.
  * This function uses a logarithmic curve but allows for the base to be changed to control the rate of growth.

{% hint style="info" %}
The algorithims below this hint support max level which you can set by using l!set maxlevel value

`value` equals your desired max level value

`maxLevel` represents your servers max level
{% endhint %}

### ExponentialWithCap

```javascript
(xp, maxLevel = 50) => Math.min(Math.floor(Math.log2(xp + 1)), maxLevel)
```

* **Formula**: `Level = min(log2(XP + 1), maxLevel)`
* **Growth**: _Exponential growth with a cap_.
  * Growth is exponential, but the level is capped at `maxLevel` to avoid infinite growth.

### LogisticWithCap

```javascript
(xp, L = 100, k = 0.01, x0 = 5000, maxLevel = 150) => Math.min(Math.floor(L / (1 + Math.exp(-k * (xp - x0)))), maxLevel)
```

* **Formula**: `Level = min(L / (1 + Math.exp(-k * (XP - x0))), maxLevel)`
* **Growth**: _Logistic growth with a cap_.
  * Similar to the logistic growth, but with a cap on the maximum level.

### PowerLawWithCap

```javascript
(xp, p = 1.5, maxLevel = 100) => Math.min(Math.floor(Math.pow(xp, p)), maxLevel)
```

* **Formula**: `Level = min(XP^p, maxLevel)`
* **Growth**: _Power law growth with a cap_.
  * Growth is power-law-based, but the level is capped at `maxLevel` to prevent infinite growth.

### FibonacciWithCap

```javascript
(xp, maxLevel = 100) => {
        let a = 0, b = 1;
        for (let i = 2; i <= xp; i++) {
            let temp = a + b;
            a = b;
            b = temp;
            if (b >= maxLevel) return maxLevel;
        }
        return b;
    }
```

* **Formula**: Fibonacci sequence with a cap on maximum level (`maxLevel`).
* **Growth**: _Fibonacci growth with a cap_.
  * The Fibonacci sequence grows exponentially, but it is capped at `maxLevel`.

### PiecewiseLinearWithCap

```javascript
(xp, maxLevel = 50) => {
        let level;
        if (xp < 1000) level = Math.floor(xp / 100);
        else if (xp < 5000) level = Math.floor((xp - 1000) / 200) + 10;
        else level = Math.floor((xp - 5000) / 500) + 20;
        return Math.min(level, maxLevel);
    }
```

* **Formula**:
  * `Level = XP / 100` (if XP < 1000)
  * `Level = (XP - 1000) / 200 + 10` (if 1000 <= XP < 5000)
  * `Level = (XP - 5000) / 500 + 20` (if XP >= 5000)
* **Growth**: _Piecewise linear growth with a cap_.
  * Growth happens in steps, but there is a maximum level reached after certain thresholds.
