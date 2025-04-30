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
Announcements Prefix is `a!`
{% endhint %}

{% hint style="warning" %}
The <> represent arguments and are only required within the create and remove ping commands it's also required in all subscribe commands. The set announcement works by either running the command in the desired channel or using the channel's ID.
{% endhint %}

`a!setannouncement <channel-id>`- this is a **server owner only command** and makes the channel an "announcment" channel. This allows users to follow it in their own server.

`a!removeannouncement` - this is a **server owner only command** and removes the channel as an "announcment" channel. This stops postings to followed communities.

`a!createping <name>` - this is a **server owner only command** and creates a "ping" that your users can subscribe to. This allows them to be pinged when you run the respective ping command.

`a!removeping <name>` - this is a **server owner only command** and deletes a "ping".

`a!subscribe <channel-id>` replace the channel-id with the channel id you wish to subscribe to for announcements (It would be the channel id from another guild)

`a!unsubscribe channel-id` use this to stop recieving announcemenets from a channel's announcement channel (works the same way as setannouncement just different function)

{% hint style="info" %}
In the command below \<true> represents the DM argument. If you put true you will receive a DM rather than a ping when the command to ping is used. The default value is false.
{% endhint %}

`a!punsubscribe <name> <true>` - subscribe to a ping

`a!psubscribe <name>` - unsubscribe from a ping

`a!pinglist` - list all the servers "pings" that you can subscribe to
