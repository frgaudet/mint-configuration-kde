var panel = new Panel
if (panelIds.length == 1) {
    // we are the only panel, so set the location for the user
    panel.location = 'bottom'
}

panel.height = 32
launcher = panel.addWidget("launcher")
launcher.writeConfig("ShowAppsByName","true")
launcher.globalShortcut = "Alt+F1"

panel.addWidget("showdesktop")
var widget = panel.addWidget("icon")
widget.writeConfig("Url", "file:///usr/share/applications/kde4/dolphin.desktop")
panel.addWidget("tasks")

systray = panel.addWidget("systemtray")
i = 0;
if (hasBattery) {
    systray.currentConfigGroup = new Array("Applets", ++i)
    systray.writeConfig("plugin", "battery")
}

systray.currentConfigGroup = new Array("Applets", ++i)
systray.writeConfig("plugin", "message-indicator")
systray.currentConfigGroup = new Array("Applets", ++i)
systray.writeConfig("plugin", "org.kde.networkmanagement")
systray.currentConfigGroup = new Array("Applets", ++i)
systray.writeConfig("plugin", "notifier")

clock = panel.addWidget("digital-clock")
clock.writeConfig("showDate", "true")
clock.writeConfig("dateStyle","0")
clock.writeConfig("plainClockColor", "43,41,38")
clock.writeConfig("plainClockDrawShadow","true")
clock.writeConfig("showSeconds","false")
clock.writeConfig("showTimeZone","false")
clock.writeConfig("useCustomColor", "true")

// icons change.
for (var i = 0; i < panelIds.length; ++i) {                                           
    var panel = panelById(panelIds[i]) 
    var widgetIds = panel.widgetIds
                                                                                      
    for (var j = 0; j < widgetIds.length; ++j) {                                      
        var widget = panel.widgetById(widgetIds[j]);

        if (widget && (widget.type == 'quickaccess') &&
            (widget.readConfig("icon", "") != "user-home")) {
                widget.writeConfig("icon", "user-home")
        } // if quickaccess

        if (widget && (widget.type == 'launcher') &&
            (widget.readConfig("icon", "") != "/usr/share/linuxmint/mint-kde-icon-light-bg.png")) {
                widget.writeConfig("icon", "/usr/share/linuxmint/mint-kde-icon-light-bg.png")
        } // if launcher

        if (widget && (widget.type == 'lancelot_launcher') &&
            (widget.readConfig("icon", "") != "/usr/share/linuxmint/mint-kde-icon-light-bg.png")) {
                widget.writeConfig("icon", "/usr/share/linuxmint/mint-kde-icon-light-bg.png")
        } // if lancelot_launcher
    } // for widgets in panel
} // for panel
