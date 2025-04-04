---
description: Let's stop with the terrible language
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

# checkBadWords

checkBadWords is apart of our automod features!

## Filter Options

You have a few choices when it comes to the checkBadWords module. There's `weaker`, `weak`, `strong`, and `stronger`.\
There's also `experimentalFragmentDetection`

### Weaker

Weaker does not use any regex and simply looks for exact word matches.

### Weak

We use simple regex in the weak value that detect basic case insensitivity and basic variations

{% hint style="warning" %}
The filters strong and stronger MAY produce false detections. This is just the reality.
{% endhint %}

### Strong

A lot more regex values to detect even more sophisticated word bypasses. This filter does more robust handling of variations

### Stronger

Stronger filter adds wildcard handling for spacing and more aggressive variations. It also still uses regex from Strong. Strong already has the Weak regex applied as well.

### experimentalFragmentDetection

{% hint style="warning" %}
experimentalFragmentDetection is known to have some issues we advise you to use it at your own risk.
{% endhint %}

experimentalFragmentDetection stores recent messages and checks them for bad words. This can be very useful to avoid people spelling words using one letter at a time.
