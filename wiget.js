{\rtf1\ansi\ansicpg1252\cocoartf2580
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;\f1\fnil\fcharset0 AppleColorEmoji;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 class ChristmasWidget\
\{\
    run()\
    \{\
        let widget = this.deployWidget();\
        if (!config.runsInWidget) \{\
            widget.presentSmall();\
        \}\
        Script.setWidget(widget);\
        Script.complete();\
    \}\
\
    deployWidget()\
    \{\
        let list = new ListWidget();\
        list.setPadding(12, 12, 12, 12);\
\
        let titleTxt = list.addText("
\f1 \uc0\u55356 \u57221 \u55356 \u57339 
\f0  COUNTDOWN\\nUNTIL X MAS");\
        titleTxt.font = Font.mediumSystemFont(13);\
\
        list.addText("");\
\
        let daysLeft = this.calculateDaysLeft();\
        let daysLeftTxt = list.addText(daysLeft + " Days");\
        daysLeftTxt.textColor = this.decideDisplayColor(daysLeft);\
        daysLeftTxt.font = Font.boldSystemFont(24);\
\
        list.addText("");\
\
        let treeBottomLine = list.addText("
\f1 \uc0\u55356 \u57220 \u55356 \u57220 \u55356 \u57220 \u55356 \u57220 
\f0 ");\
        treeBottomLine.font = Font.boldSystemFont(24);\
\
        return list\
    \}\
\
    calculateDaysLeft()\
    \{\
        let today = new Date(Date.now());\
        let christmas = new Date(Date.now());\
        christmas.setMonth(11);\
        christmas.setDate(24);\
\
        // check if we need to use christmas next year\
        if (\
            today.getMonth() > christmas.getMonth()\
            || (today.getMonth() === christmas.getMonth() && today.getDay() > christmas.getDay())\
        ) \{\
            let nextYear = christmas.getFullYear();\
            nextYear = nextYear + 1;\
            christmas.setFullYear(nextYear);\
        \}\
\
        christmas = christmas.getTime();\
        today = today.getTime();\
\
        let convertInDays = 24*3600*1000;\
        return parseInt((christmas - today)/convertInDays);\
    \}\
\
    decideDisplayColor(daysLeft)\
    \{\
        if (daysLeft >= 50) \{\
            return Color.red();\
        \}\
\
        if (daysLeft >= 30) \{\
            return Color.yellow();\
        \}\
\
        return Color.green();\
    \}\
\}\
\
new ChristmasWidget().run();}