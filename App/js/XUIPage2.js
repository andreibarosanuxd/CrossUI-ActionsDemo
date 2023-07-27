xui.Class('App.XUIPage2', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"ctl_dialog32")
                .setShowEffects("Blur")
                .setHideEffects("Blur")
                .setLeft("0.7619047619047619em")
                .setTop("0em")
                .setWidth("50.833333333333336em")
                .setHeight("35em")
                .setCaption("")
                .setCloseBtn(false)
            );
            
            host.ctl_dialog32.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton810")
                .setLeft("2.5em")
                .setTop("14.166666666666666em")
                .setWidth("10.833333333333334em")
                .setHeight("2.5em")
                .setCaption("<< Previous Page")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "page",
                        "target" : "App",
                        "params" : [true],
                        "method" : "switch"
                    }
                ])
            );
            
            host.ctl_dialog32.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton811")
                .setLeft("38.333333333333336em")
                .setTop("14.166666666666666em")
                .setWidth("10.833333333333334em")
                .setHeight("2.5em")
                .setCaption("Next Page >>")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "page",
                        "target" : "App.XUIPage3",
                        "params" : [true],
                        "method" : "switch"
                    }
                ])
            );
            
            host.ctl_dialog32.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput26")
                .setLeft("15.619047619047619em")
                .setTop("7.771428571428571em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("First")
                .setType("number")
            );
            
            host.ctl_dialog32.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput30")
                .setLeft("15.619047619047619em")
                .setTop("10.057142857142857em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Second")
                .setType("number")
            );
            
            host.ctl_dialog32.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label10")
                .setLeft("12.571428571428571em")
                .setTop("2.4380952380952383em")
                .setWidth("20.266666666666666em")
                .setHeight("1.3714285714285714em")
                .setCaption("Please insert the last 5 wins")
            );
            
            host.ctl_dialog32.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button6")
                .setLeft("22.476190476190474em")
                .setTop("22.247619047619047em")
                .setWidth("9.066666666666666em")
                .setHeight("3.123809523809524em")
                .setCaption("Confirm")
            );
            
            host.ctl_dialog32.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput32")
                .setLeft("15.619047619047619em")
                .setTop("14.628571428571428em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Fourth")
                .setType("number")
            );
            
            host.ctl_dialog32.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput34")
                .setLeft("15.619047619047619em")
                .setTop("16.914285714285715em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Fifth")
                .setType("number")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput31")
                .setLeft("16em")
                .setTop("15.238095238095237em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Third")
                .setType("number")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});