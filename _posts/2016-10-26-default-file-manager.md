---
layout: post
title: henrique's unicorn
postName: "Changing default file manager in Cinnamon"
date: 2016-05-02
comments: true
---
I've been using [cinnamon](https://github.com/linuxmint/Cinnamon) for the last two months because of its nice [HiDPI](https://wiki.archlinux.org/index.php/HiDPI) management in 4k screen. (yet i havent figure out how to adequate de dopio screen resolution - 4k and 1k ☹)

I had to insatall Nautilus for some personal reasons. Nemo stoped been the default file managent and Nautilus doesn't support HiDPI so it looks very very small. To fix this all you got do is:

```
xdg-mime default ~~YOUR_FILE_MANAGEMER.desktop~~ inode/directory application
```

in my case:

```
xdg-mime default nemo.desktop inode/directory application
```

~~ Update ~~
Aparently there is a gui way of doing it:

```
exo-preferred-applications
```
