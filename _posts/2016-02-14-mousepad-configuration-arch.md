---
layout: post
title: henrique's unicorn
postName: "Archdiary - Mousepad configuration"
date: 2016-02-14
comments: true
---

since 2009 i've been using mac and had forgotten how nice it is to have headaches with computer configuration. using mac is very nice. but folks, how i missed this!   

i bough a dell vostro 5480 and decided to install arch on it. follow the wiki and everything worked. not the way i wanted, but working. so, i'm on my way to get things work properly as i want. and things i did and worked i'm going to write in here.

i'm using arch-linux with gnome 3.18 installed on it

### problem on the Mousepad
as i used a mac for about 5 years, when i touched my new notebook mousepad, it felt like a lack of sensitivity. the size was great, but sensitivity meh. :/
googling it, i discover that was a configuration fault, and not a mousepad.

after some googling, i've found ways to configure it properly. it's not an awesome configuration, but it's quite nice for me.

as always, [arch wiki is awesome](https://wiki.archlinux.org/index.php/Touchpad_Synaptics#Using_xinput_to_determine_touchpad_capabilities)

### how
first i needed to install synaptics. on arch, using pacman:

{% highlight bash %}
$ pacman -S  xf86-input-synaptics
{% endhighlight %}

after installint it, i needed to make my own configuration:

{% highlight bash %}
$ sudo vim /etc/X11/xconf.d/50-synaptics
{% endhighlight %}

and this is my configuration file:

{% highlight bash %}
Section "InputClass"
    Identifier "touchpad"
    Driver "synaptics"
    MatchIsTouchpad "on"
        Option "TapButton1"                 "1"
        Option "TapButton2"                 "2"
        Option "TapButton3"                 "3"
        Option "VertEdgeScroll"             "on"
        Option "VertTwoFingerScroll"        "on"
        Option "HorizEdgeScroll"            "on"
        Option "HorizTwoFingerScroll"       "on"
        Option "CircularScrolling"          "on"
        Option "CircScrollTrigger"          "2"
        Option "EmulateTwoFingerMinZ"       "40"
        Option "EmulateTwoFingerMinW"       "8"
        Option "CoastingSpeed"              "0"
        Option "FingerLow"                  "20"
        Option "FingerHigh"                 "25"
        Option "FingerPress"                "255"
        Option "TapAndDragGesture"          "1"

        # Pointer Speed
        Option "MaxSpeed"                   "2.6"
        Option "MinSpeed"                   "1.6"

        # Palm Rejection
        Option "PalmDetect"                 "1"
        Option "PalmMinWidth"               "8"
        Option "PalmMinZ"                   "180"
        # Scrolls Speed
        Option "VertScrollDelta"            "-111"
        Option "HorizScrollDelta"           "-111"

        # Multitouchpad
        # Enable clickpad/multitouch support
        Option "ClickPad"                   "true"
        # Middle-button emulation is not supported
        Option "EmulateMidButtonTime"       "0"
        # Define right soft button at the bottom
        Option "SoftButtonAreas"            "50% 0 82% 0 0 0 0 0"
        # For mouse not moving on click
        Option "AreaBottomEdge"             "4000"
    EndSection

{% endhighlight %}

i've googled a little, and used synaptics references. Got any doubt?
{% highlight bash %}
$ man 4 synaptics
{% endhighlight %}

it would be very nice receiving your synaptics configuration :)
