---
description: Command Documentation
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

# Command Breakdown

{% hint style="info" %}
The default prefix is l!

We are only breaking down commands that have extra arguments (also referred to as parameters)
{% endhint %}

{% hint style="info" %}
The settings & reset command has subcommands you may also use.

settings: set and setting

reset: delete
{% endhint %}

* \<prefix>settings \<command>
  * excludedchannels \<add/delete> \<channel mention/ID>
  * excludedusers \<add/delete> \<user mention/ID>
  * levelreward \<add/delete/delete-r> \<level number> \<role ID>
  * channel \<channel mention>
  * current
  * prefix \<prefix>
  * xpcooldown \<number>
  * xppermessage \<number>
  * maxlevel \<number>
  * algorithm \<algorithm>
  * calgorithm <"the algorithm">

{% hint style="info" %}
The argument within the <> block isn't required unless you are targeting a specific user. If you do not provide the argument the reset is for **the entire server**

The 'all' command is both XP and Levels
{% endhint %}

* \<prefix>reset \<command>
  * xp \<user mention/ID>
  * levels \<user mention/ID>
  * all \<user mention/ID>

## Excluded Channels

The excludedchannels setting allows you to set channels that give no XP to anyone who sends a message in that channel.

### Examples

`l!set excludedchannels add 01JDEF2N85WG9FVG3MGKZ0ZAJ2`

`l!set excludedchannels delete 01JDEF2N85WG9FVG3MGKZ0ZAJ2`

## Excluded Users

The excludedusers setting allows you to add users who will be excluded from earning XP. This means they earn zero XP

### Examples

`l!set excludedusers add 01H2XFFCRQKEKY3ZXS45GW4ERH`

`l!set excludedusers delete 01H2XFFCRQKEKY3ZXS45GW4ERH`

## Level Reward

The levelreward setting allows you to define a or multiple role rewards for a specific level.

### Examples

`l!set levelreward add 2 01JD8ZXMQ2EC4R4PCHTCF963ST`

`l!set levelreward delete 2`

`l!set levelreward delete-r 01JD8ZXMQ2EC4R4PCHTCF963ST`

## Channel

The channel setting lets you define the level up channel. This channel is where your level up messages go

### Example

`l!set channel <#23GDSGkqw>` (You would mention a channel in your server)

## Prefix

The prefix setting allows you to change the prefix

### Example

`l!set prefix !`

## Xpcooldown

The xpcooldown setting allows you to change the cooldown for XP Gain. This means that a user must wait a certain amount of time (seconds) before they will again earn XP.

### Example

`l!set xpcooldown 2`

## Xppermessage

The xppermessage setting allows you to change the amount of XP gained per message

### Example

`l!set xppermessage 1`

## Maxlevel

The maxlevel setting allows you to define the max level anyone can earn. This is **NOT** supported on all algorithms. The only algorithms that use this are the ones with <mark style="color:red;">`WithCap`</mark> in their name.

### Example

`l!set maxlevel 100`

## Algorithm

The algorithm setting allows you to choose what algorithm your server uses. Read more below.

{% content-ref url="algorithm-breakdown/" %}
[algorithm-breakdown](algorithm-breakdown/)
{% endcontent-ref %}

### Example

`l!set algorithm default`

## Custom Algorithm

The calgorithm setting allows you to define a custom algorithm. Read more below.

{% content-ref url="algorithm-breakdown/custom-algorithm.md" %}
[custom-algorithm.md](algorithm-breakdown/custom-algorithm.md)
{% endcontent-ref %}

### Example

`l!set calgorithm "(xp) => Math.floor(0.1 * Math.sqrt(xp))"`

## XP

`l!reset xp`

`l!reset xp <@01H2XFFCRQKEKY3ZXS45GW4ERH>`

`l!reset xp 01H2XFFCRQKEKY3ZXS45GW4ERH`

The same format applies to the other commands just replace 'xp' with levels or all
