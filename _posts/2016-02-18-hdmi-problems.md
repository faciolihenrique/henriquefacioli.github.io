---
layout: post
title: hnf's
postName: "Archdiary - HDMI problem"
date: 2016-02-18
comments: true
---

i was having some trouble when connecting my computer on a tv. The sound seemed to be running in low speed , kind of running a 77rpm LP on 33. I really don't know what was happening but after googling a little i found a solution. Thanks R00KIE on [this page](https://bbs.archlinux.org/viewtopic.php?id=116172)

So the solution is avery simple:

__if you don't have pulseaudio, go [HERE](https://wiki.archlinux.org/index.php/PulseAudio#Installation)__

1. install pulseaudio-alsa
2. install ffmpeg
3. edit /etc/pulse/daemon.conf as root
4. add the following lines on it. check if they are not set before (they should be comment with an ' __;__ ').

{% highlight bash %}
default-sample-rate = 48000
alternate-sample-rate = 192000
default-sample-channels = 3 ; my computer configuration is 2 speakers + sub

resample-method = src-sinc-best-quality
enable-remixing = yes

flat-volumes = no
{% endhighlight %}
