xui.Class('App', 'xui.Module',{
    Instance:{
        autoDestroy:false,
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_1")
                .setName("api_1")
                .setQueryURL("https://www.crossui.com/xui/backend/PHP/demo.php")
                .setQueryArgs({
                    "a" : 1,
                    "b" : 2
                })
                .beforeInvoke([
                    {
                        "desc" : "Busy",
                        "type" : "other",
                        "target" : "msg",
                        "params" : [ ],
                        "method" : "busy"
                    }
                ])
                .onData([
                    {
                        "desc" : "free UI",
                        "type" : "other",
                        "target" : "msg",
                        "params" : [ ],
                        "method" : "free"
                    }
                ])
                .onError([
                    {
                        "desc" : "free UI",
                        "type" : "other",
                        "target" : "msg",
                        "params" : [ ],
                        "method" : "free"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"ctl_pane39")
                .setShowEffects("Blur")
                .setHideEffects("Blur")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("34.20952380952381em")
                .setHeight("23.61904761904762em")
            );
            
            host.ctl_pane39.append(
                xui.create("xui.UI.Group")
                .setHost(host,"ctl_group10")
                .setLeft("2.2857142857142856em")
                .setTop("49.523809523809526em")
                .setWidth("37.5em")
                .setHeight("18.333333333333332em")
                .setOverflow("hidden")
                .setCaption("Items and Rows")
                .setToggleBtn(false)
            );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton90")
                .setDesc("Clear Items in TreeView")
                .setLeft("28.333333333333332em")
                .setTop("4.166666666666667em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setCaption("Clear Items in TreeView")
                .onClick([
                    {
                        "desc" : "action",
                        "type" : "control",
                        "target" : "ctl_treeview5",
                        "params" : [ ],
                        "method" : "clearItems"
                    }
                ])
            );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton91")
                .setDesc("Clear Rows")
                .setLeft("28.333333333333332em")
                .setTop("8.333333333333334em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setCaption("Clear Rows")
                .onClick([
                    {
                        "desc" : "action",
                        "type" : "control",
                        "target" : "ctl_treegrid5",
                        "params" : [ ],
                        "method" : "removeAllRows"
                    }
                ])
            );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton92")
                .setDesc("Clear Columns")
                .setLeft("28.333333333333332em")
                .setTop("12.5em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setCaption("Clear Columns")
                .onClick([
                    {
                        "desc" : "action",
                        "type" : "control",
                        "target" : "ctl_treegrid5",
                        "params" : [ ],
                        "method" : "setHeader"
                    }
                ])
            );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton103")
                .setDesc("Remove Items in TreeView")
                .setLeft("19.166666666666668em")
                .setTop("4.166666666666667em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setCaption("Remove Items in TreeView")
                .onClick([
                    {
                        "desc" : "action",
                        "type" : "control",
                        "target" : "ctl_treeview5",
                        "params" : [
                            "node1;node2"
                        ],
                        "method" : "removeItems"
                    },
                    {
                        "desc" : "action2",
                        "type" : "control",
                        "target" : "ctl_treeview5",
                        "params" : [
                            "first"
                        ],
                        "method" : "removeItems"
                    }
                ])
            );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton104")
                .setDesc("Remove Row")
                .setLeft("19.166666666666668em")
                .setTop("8.333333333333334em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setCaption("Remove Rows")
                .onClick([
                    {
                        "desc" : "action",
                        "type" : "control",
                        "target" : "ctl_treegrid5",
                        "params" : [
                            "row1;row2"
                        ],
                        "method" : "removeRows"
                    },
                    {
                        "desc" : "action2",
                        "type" : "control",
                        "target" : "ctl_treegrid5",
                        "params" : [
                            "first"
                        ],
                        "method" : "removeRows"
                    }
                ])
            );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton105")
                .setDesc("Remove Columns")
                .setLeft("19.166666666666668em")
                .setTop("12.5em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setCaption("Remove Columns")
                .onClick([
                    {
                        "desc" : "action",
                        "type" : "control",
                        "target" : "ctl_treegrid5",
                        "params" : [
                            "col3;col4"
                        ],
                        "method" : "removeCols"
                    }
                ])
            );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton164")
                .setDesc("Insert Items to TreeBar")
                .setLeft("0.8333333333333334em")
                .setTop("4.166666666666667em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setCaption("Insert Items to TreeView")
                .onClick([
                    {
                        "desc" : "first",
                        "type" : "control",
                        "target" : "ctl_treeview5",
                        "method" : "insertItems",
                        "args" : [
                            [
                                {
                                    "id" : "first",
                                    "caption" : "first",
                                    "sub" : [
                                        {
                                            "id" : "node2.51",
                                            "caption" : "node2.5"
                                        }
                                    ]
                                }
                            ],
                            null,
                            null,
                            true
                        ],
                        "event" : 1
                    },
                    {
                        "desc" : "last",
                        "type" : "control",
                        "target" : "ctl_treeview5",
                        "method" : "insertItems",
                        "args" : [
                            [
                                {
                                    "id" : "last",
                                    "caption" : "last"
                                }
                            ],
                            null,
                            null,
                            false
                        ]
                    },
                    {
                        "desc" : "a 1",
                        "type" : "control",
                        "target" : "ctl_treeview5",
                        "method" : "insertItems",
                        "args" : [
                            [
                                {
                                    "id" : "a node2",
                                    "caption" : "a node2"
                                }
                            ],
                            null,
                            "node2",
                            false
                        ]
                    },
                    {
                        "desc" : "a 2",
                        "type" : "control",
                        "target" : "ctl_treeview5",
                        "method" : "insertItems",
                        "args" : [
                            [
                                {
                                    "id" : "a last",
                                    "caption" : "a last"
                                }
                            ],
                            null,
                            "last",
                            false
                        ]
                    },
                    {
                        "desc" : "b 1",
                        "type" : "control",
                        "target" : "ctl_treeview5",
                        "method" : "insertItems",
                        "args" : [
                            [
                                {
                                    "id" : "b node1",
                                    "caption" : "b node1"
                                }
                            ],
                            null,
                            "node1",
                            true
                        ]
                    },
                    {
                        "desc" : "b 2",
                        "type" : "control",
                        "target" : "ctl_treeview5",
                        "method" : "insertItems",
                        "args" : [
                            [
                                {
                                    "id" : "b last",
                                    "caption" : "b  last"
                                }
                            ],
                            null,
                            "last",
                            true
                        ]
                    },
                    {
                        "desc" : "subfirst",
                        "type" : "control",
                        "target" : "ctl_treeview5",
                        "method" : "insertItems",
                        "args" : [
                            [
                                {
                                    "id" : "subfirst",
                                    "caption" : "subfirst"
                                }
                            ],
                            "node1",
                            null,
                            true
                        ]
                    },
                    {
                        "desc" : "sublast",
                        "type" : "control",
                        "target" : "ctl_treeview5",
                        "method" : "insertItems",
                        "args" : [
                            [
                                {
                                    "id" : "sublast",
                                    "caption" : "sublast"
                                }
                            ],
                            "node1",
                            null,
                            false
                        ]
                    }
                ])
            );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton165")
                .setDesc("Insert Rowss to TreeGrid")
                .setLeft("0.8333333333333334em")
                .setTop("8.333333333333334em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setCaption("Insert Rows to TreeGrid")
                .onClick([
                    {
                        "desc" : "first",
                        "type" : "control",
                        "target" : "ctl_treegrid5",
                        "params" : [
                            [
                                {
                                    "id" : "first",
                                    "caption" : "first",
                                    "cells" : [
                                        {
                                            "value" : "a"
                                        },
                                        {
                                            "value" : "b"
                                        },
                                        {
                                            "value" : "c"
                                        },
                                        {
                                            "value" : "d"
                                        }
                                    ]
                                }
                            ],
                            null,
                            null,
                            true
                        ],
                        "method" : "insertRows"
                    },
                    {
                        "desc" : "last",
                        "type" : "control",
                        "target" : "ctl_treegrid5",
                        "params" : [
                            [
                                {
                                    "id" : "last",
                                    "caption" : "last",
                                    "cells" : [
                                        {
                                            "value" : "d"
                                        },
                                        {
                                            "value" : "d"
                                        },
                                        {
                                            "value" : "w"
                                        },
                                        {
                                            "value" : "s"
                                        }
                                    ]
                                }
                            ],
                            null,
                            null,
                            false
                        ],
                        "method" : "insertRows"
                    },
                    {
                        "desc" : "b1",
                        "type" : "control",
                        "target" : "ctl_treegrid5",
                        "params" : [
                            [
                                {
                                    "id" : "b row2",
                                    "caption" : "b row2",
                                    "cells" : [
                                        {
                                            "value" : "a"
                                        },
                                        {
                                            "value" : "b"
                                        },
                                        {
                                            "value" : "c"
                                        },
                                        {
                                            "value" : "d"
                                        }
                                    ]
                                }
                            ],
                            null,
                            "row2",
                            true
                        ],
                        "method" : "insertRows"
                    },
                    {
                        "desc" : "b2",
                        "type" : "control",
                        "target" : "ctl_treegrid5",
                        "params" : [
                            [
                                {
                                    "id" : "b last",
                                    "caption" : "b last",
                                    "cells" : [
                                        {
                                            "value" : "a"
                                        },
                                        {
                                            "value" : "b"
                                        },
                                        {
                                            "value" : "c"
                                        },
                                        {
                                            "value" : "d"
                                        }
                                    ]
                                }
                            ],
                            null,
                            "last",
                            true
                        ],
                        "method" : "insertRows"
                    },
                    {
                        "desc" : "a 1",
                        "type" : "control",
                        "target" : "ctl_treegrid5",
                        "params" : [
                            [
                                {
                                    "id" : "a row2",
                                    "caption" : "a row2",
                                    "cells" : [
                                        {
                                            "value" : "a"
                                        },
                                        {
                                            "value" : "b"
                                        },
                                        {
                                            "value" : "c"
                                        },
                                        {
                                            "value" : "d"
                                        }
                                    ]
                                }
                            ],
                            "",
                            "row2",
                            false
                        ],
                        "method" : "insertRows"
                    },
                    {
                        "desc" : "a 2",
                        "type" : "control",
                        "target" : "ctl_treegrid5",
                        "params" : [
                            [
                                {
                                    "id" : "a first",
                                    "caption" : "a first",
                                    "cells" : [
                                        {
                                            "value" : "a"
                                        },
                                        {
                                            "value" : "b"
                                        },
                                        {
                                            "value" : "c"
                                        },
                                        {
                                            "value" : "d"
                                        }
                                    ]
                                }
                            ],
                            "",
                            "first",
                            false
                        ],
                        "method" : "insertRows"
                    },
                    {
                        "desc" : "subfirst",
                        "type" : "control",
                        "target" : "ctl_treegrid5",
                        "params" : [
                            [
                                {
                                    "id" : "subfirst",
                                    "cells" : [
                                        {
                                            "value" : "subfirst"
                                        },
                                        {
                                            "value" : "b"
                                        },
                                        {
                                            "value" : "c"
                                        },
                                        {
                                            "value" : "d"
                                        }
                                    ]
                                }
                            ],
                            "row2",
                            null,
                            true
                        ],
                        "method" : "insertRows"
                    },
                    {
                        "desc" : "sublast",
                        "type" : "control",
                        "target" : "ctl_treegrid5",
                        "params" : [
                            [
                                {
                                    "id" : "sublast",
                                    "cells" : [
                                        {
                                            "value" : "sublast"
                                        },
                                        {
                                            "value" : "b"
                                        },
                                        {
                                            "value" : "c"
                                        },
                                        {
                                            "value" : "d"
                                        }
                                    ]
                                }
                            ],
                            "row2",
                            null,
                            false
                        ],
                        "method" : "insertRows"
                    }
                ])
            );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton401")
                .setDesc("Update Item in  TreeView")
                .setLeft("10em")
                .setTop("4.166666666666667em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setCaption("Update Item in TreeView")
                .onClick([
                    {
                        "desc" : "a",
                        "type" : "control",
                        "target" : "ctl_treeview5",
                        "params" : [
                            "node2",
                            {
                                "caption" : "NODE2"
                            }
                        ],
                        "method" : "updateItem"
                    },
                    {
                        "desc" : "b",
                        "type" : "control",
                        "target" : "ctl_treeview5",
                        "params" : [
                            "last",
                            {
                                "caption" : "[last]"
                            }
                        ],
                        "method" : "updateItem"
                    }
                ])
            );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton477")
                .setDesc("Update Row in Grid")
                .setLeft("10em")
                .setTop("8.333333333333334em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setCaption("Update Row in Grid")
                .onClick([
                    {
                        "desc" : "a",
                        "type" : "control",
                        "target" : "ctl_treegrid5",
                        "params" : [
                            "row2",
                            {
                                "caption" : "ROW2"
                            }
                        ],
                        "method" : "updateRow"
                    },
                    {
                        "desc" : "b",
                        "type" : "control",
                        "target" : "ctl_treegrid5",
                        "params" : [
                            "first",
                            {
                                "height" : 80
                            }
                        ],
                        "method" : "updateRow"
                    }
                ])
            );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton478")
                .setDesc("Update Column in Grid")
                .setLeft("10em")
                .setTop("12.5em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setCaption("Update Column in Grid")
                .onClick([
                    {
                        "desc" : "a",
                        "type" : "control",
                        "target" : "ctl_treegrid5",
                        "params" : [
                            "col3",
                            {
                                "caption" : "abva",
                                "width" : 30
                            }
                        ],
                        "method" : "updateHeader"
                    }
                ])
            );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton479")
                .setDesc("Update Cell in Grid")
                .setLeft("0.8333333333333334em")
                .setTop("12.5em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setCaption("Update Cell in Grid")
                .onClick([
                    {
                        "desc" : "row2:col2",
                        "type" : "control",
                        "target" : "ctl_treegrid5",
                        "method" : "updateCellByRowCol",
                        "args" : [
                            "{page.ctl_treegrid5.updateCellByRowCol()}",
                            undefined,
                            undefined,
                            "row2",
                            "col2",
                            {
                                "caption" : "cca"
                            }
                        ],
                        "redirection" : "other:callback:call",
                        "event" : 1
                    },
                    {
                        "desc" : "1:1",
                        "type" : "control",
                        "target" : "ctl_treegrid5",
                        "args" : [
                            "{page.ctl_treegrid5.updateCellByRowCol2()}",
                            undefined,
                            undefined,
                            "0:0",
                            {
                                "caption" : "0:0"
                            }
                        ],
                        "method" : "updateCellByRowCol2",
                        "redirection" : "other:callback:call"
                    }
                ])
            );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton67")
                .setDesc("Toggle Panel")
                .setLeft("0.8333333333333334em")
                .setTop("0em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setCaption("Toggle Panel")
                .onClick([
                    {
                        "desc" : "fold",
                        "type" : "control",
                        "target" : "ctl_panel7",
                        "params" : [false, false],
                        "method" : "setToggle"
                    },
                    {
                        "desc" : "expand",
                        "type" : "control",
                        "target" : "ctl_panel7",
                        "params" : [true, true],
                        "method" : "setToggle",
                        "timeout" : 500
                    }
                ])
            );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton68")
                .setDesc("Toggle TreeView")
                .setLeft("10em")
                .setTop("0em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setCaption("Toggle TreeView")
                .onClick([
                    {
                        "desc" : "expand",
                        "type" : "control",
                        "target" : "ctl_treeview5",
                        "params" : [
                            "node2",
                            true
                        ],
                        "method" : "toggleNode"
                    },
                    {
                        "desc" : "fold",
                        "type" : "control",
                        "target" : "ctl_treeview5",
                        "params" : [
                            "node2",
                            false
                        ],
                        "method" : "toggleNode",
                        "timeout" : 800
                    }
                ])
            );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton114")
                .setDesc("Toggle TreeGrid")
                .setLeft("19.166666666666668em")
                .setTop("0em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setCaption("Toggle TreeGrid")
                .onClick([
                    {
                        "desc" : "expand",
                        "type" : "control",
                        "target" : "ctl_treegrid5",
                        "params" : [
                            "row2",
                            true
                        ],
                        "method" : "toggleRow"
                    },
                    {
                        "desc" : "fold",
                        "type" : "control",
                        "target" : "ctl_treegrid5",
                        "params" : [
                            "row2",
                            false
                        ],
                        "method" : "toggleRow",
                        "timeout" : 800
                    }
                ])
            );
            
            host.ctl_pane39.append(
                xui.create("xui.UI.Group")
                .setHost(host,"ctl_group12")
                .setLeft("15em")
                .setTop("68.57142857142857em")
                .setWidth("53.333333333333336em")
                .setHeight("15.833333333333334em")
                .setOverflow("hidden")
                .setCaption("Pages")
                .setToggleBtn(false)
            );
            
            host.ctl_group12.append(
                xui.create("xui.UI.Div")
                .setHost(host,"ctl_pane18")
                .setLeft("9.166666666666666em")
                .setTop("0.3333333333333333em")
                .setWidth("28.166666666666668em")
                .setHeight("13.5em")
                .setCustomStyle({
                    "KEY" : {
                        "border" : "dashed #483D8B 1px",
                        "border-radius" : "4px 4px 4px 4px"
                    }
                })
            );
            
            host.ctl_group12.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton108")
                .setDesc("Show Page")
                .setLeft("0.8333333333333334em")
                .setTop("0.8333333333333334em")
                .setWidth("7.5em")
                .setHeight("2.5em")
                .setCaption("Show Page")
                .onClick([
                    {
                        "desc" : "action",
                        "type" : "page",
                        "target" : "App.XUISubPage",
                        "args" : [
                            "{page.ctl_pane18}",
                            null
                        ],
                        "method" : "show",
                        "event" : 1
                    }
                ])
            );
            
            host.ctl_group12.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton43")
                .setDesc("Hide Page")
                .setLeft("38.333333333333336em")
                .setTop("1.6666666666666667em")
                .setWidth("7.5em")
                .setHeight("2.5em")
                .setCaption("Hide Page")
                .onClick([
                    {
                        "desc" : "Hide page",
                        "type" : "page",
                        "target" : "App.XUISubPage",
                        "params" : [ ],
                        "method" : "hide"
                    }
                ])
            );
            
            host.ctl_group12.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton44")
                .setDesc("Destroy Page")
                .setLeft("38.333333333333336em")
                .setTop("5em")
                .setWidth("7.5em")
                .setHeight("2.5em")
                .setCaption("Destroy Page")
                .onClick([
                    {
                        "desc" : "Destroy",
                        "type" : "page",
                        "target" : "App.XUISubPage",
                        "params" : [ ],
                        "method" : "destroy"
                    }
                ])
            );
            
            host.ctl_group12.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton45")
                .setDesc("Fill Data")
                .setLeft("0.8333333333333334em")
                .setTop("4.166666666666667em")
                .setWidth("7.5em")
                .setHeight("2.5em")
                .setCaption("Fill Data")
                .onClick([
                    {
                        "desc" : "action",
                        "type" : "page",
                        "target" : "App.XUISubPage",
                        "params" : [
                            "[data]data/data.json"
                        ],
                        "method" : "setData"
                    }
                ])
            );
            
            host.ctl_group12.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton47")
                .setDesc("Switch to  another Page")
                .setLeft("46.666666666666664em")
                .setTop("0.8333333333333334em")
                .setWidth("6.166666666666667em")
                .setHeight("12.5em")
                .setCaption("&gt;&gt; <br><br>Switch to<div><br></div><div>another</div><div><br></div><div>Page</div>")
                .onClick([
                    {
                        "desc" : "动作1",
                        "type" : "page",
                        "target" : "App.XUIPage2",
                        "params" : [true],
                        "method" : "switch"
                    }
                ])
            );
            
            host.ctl_group12.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton1367")
                .setDesc("Fill Profiles")
                .setLeft("0.8333333333333334em")
                .setTop("7.5em")
                .setWidth("7.5em")
                .setHeight("2.5em")
                .setCaption("Fill Profiles")
                .onClick([
                    {
                        "desc" : "action",
                        "type" : "page",
                        "target" : "App.XUISubPage",
                        "params" : [
                            "[data]data/prfs.json"
                        ],
                        "method" : "setProfile"
                    }
                ])
            );
            
            host.ctl_pane39.append(
                xui.create("xui.UI.Group")
                .setHost(host,"ctl_group21")
                .setLeft("1.6666666666666667em")
                .setTop("68.57142857142857em")
                .setWidth("11.666666666666666em")
                .setHeight("15.833333333333334em")
                .setCaption("Others")
                .setToggleBtn(false)
            );
            
            host.ctl_group21.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton180")
                .setDesc("RPC Call")
                .setLeft("0.8333333333333334em")
                .setTop("0.8333333333333334em")
                .setWidth("9.166666666666666em")
                .setHeight("2.5em")
                .setCaption("RPC Call")
                .onClick([
                    {
                        "desc" : "action",
                        "type" : "control",
                        "target" : "api_1",
                        "params" : [ ],
                        "method" : "invoke",
                        "onOK" : 0,
                        "onKO" : 1
                    },
                    {
                        "desc" : "Adjust Data",
                        "type" : "other",
                        "target" : "var",
                        "params" : [
                            "okData2",
                            "{temp.okData}"
                        ],
                        "method" : "temp",
                        "adjust" : "stringify"
                    },
                    {
                        "desc" : "Show result",
                        "type" : "other",
                        "target" : "msg",
                        "params" : [
                            "OK",
                            "{temp.okData2}"
                        ],
                        "method" : "pop"
                    }
                ])
            );
            
            host.ctl_group21.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton125")
                .setDesc("Conditions")
                .setLeft("0.8333333333333334em")
                .setTop("4.166666666666667em")
                .setWidth("9.166666666666666em")
                .setHeight("2.5em")
                .setCaption("Conditions")
                .onClick([
                    {
                        "desc" : "=",
                        "type" : "other",
                        "target" : "msg",
                        "params" : [
                            "1=1"
                        ],
                        "method" : "pop",
                        "conditions" : [
                            {
                                "left" : "1",
                                "symbol" : "=",
                                "right" : "1"
                            }
                        ]
                    },
                    {
                        "desc" : "!=",
                        "type" : "other",
                        "target" : "msg",
                        "params" : [
                            "2!=1"
                        ],
                        "method" : "pop",
                        "conditions" : [
                            {
                                "left" : "2",
                                "symbol" : "!=",
                                "right" : "1"
                            }
                        ]
                    },
                    {
                        "desc" : ">",
                        "type" : "other",
                        "target" : "msg",
                        "params" : [
                            "2>1"
                        ],
                        "method" : "pop",
                        "conditions" : [
                            {
                                "left" : "2",
                                "symbol" : ">",
                                "right" : "1"
                            }
                        ]
                    },
                    {
                        "desc" : "<",
                        "type" : "other",
                        "target" : "msg",
                        "params" : [
                            "1<2"
                        ],
                        "method" : "pop",
                        "conditions" : [
                            {
                                "left" : "1",
                                "symbol" : "<",
                                "right" : "2"
                            }
                        ]
                    },
                    {
                        "desc" : "<=",
                        "type" : "other",
                        "target" : "msg",
                        "params" : [
                            "2<=3"
                        ],
                        "method" : "pop",
                        "conditions" : [
                            {
                                "left" : "2",
                                "symbol" : "<=",
                                "right" : "3"
                            }
                        ]
                    },
                    {
                        "desc" : ">=",
                        "type" : "other",
                        "target" : "msg",
                        "params" : [
                            "1>=1"
                        ],
                        "method" : "pop",
                        "conditions" : [
                            {
                                "left" : "1",
                                "symbol" : ">=",
                                "right" : "1"
                            }
                        ]
                    },
                    {
                        "desc" : "contains",
                        "type" : "other",
                        "target" : "msg",
                        "params" : [
                            "'aa bb cc' contains 'bb'"
                        ],
                        "method" : "pop",
                        "conditions" : [
                            {
                                "left" : "aa bb cc",
                                "symbol" : "include",
                                "right" : "bb"
                            }
                        ]
                    },
                    {
                        "desc" : "doesn't contain",
                        "type" : "other",
                        "target" : "msg",
                        "params" : [
                            "'aa dd cc' doesn't contain 'bb'"
                        ],
                        "method" : "pop",
                        "conditions" : [
                            {
                                "left" : "aa dd cc",
                                "symbol" : "exclude",
                                "right" : "bb"
                            }
                        ]
                    },
                    {
                        "desc" : "start with",
                        "type" : "other",
                        "target" : "msg",
                        "params" : [
                            "'aa dd cc' starts with 'aa'"
                        ],
                        "method" : "pop",
                        "conditions" : [
                            {
                                "left" : "aa dd cc",
                                "symbol" : "start",
                                "right" : "aa"
                            }
                        ]
                    },
                    {
                        "desc" : "end with",
                        "type" : "other",
                        "target" : "msg",
                        "params" : [
                            "'aa dd cc' ends with 'cc'"
                        ],
                        "method" : "pop",
                        "conditions" : [
                            {
                                "left" : "aa dd cc",
                                "symbol" : "end",
                                "right" : "cc"
                            }
                        ]
                    }
                ])
            );
            
            host.ctl_group21.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton210")
                .setDesc("Keyborad Event")
                .setLeft("0.8333333333333334em")
                .setTop("7.5em")
                .setWidth("9.166666666666666em")
                .setHeight("2.5em")
                .setCaption("Keyborad Event")
                .onHotKeydown([
                    {
                        "desc" : "action1",
                        "type" : "other",
                        "target" : "msg",
                        "params" : [
                            "Key:{args.1.key}<br/>\nCtrl:{args.1.ctrlKey}<br/>\nShift:{args.1.shiftKey}<br/>\nAlt:{args.1.altKey}",
                            "Keyboard Event",
                            200,
                            5000
                        ],
                        "method" : "message",
                        "conditions" : [
                            {
                                "left" : "",
                                "symbol" : "=",
                                "right" : ""
                            }
                        ],
                        "event" : 2
                    }
                ])
                .onClick([ ])
            );
            
            host.ctl_group21.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton209")
                .setDesc("Mouse Event")
                .setLeft("0.8333333333333334em")
                .setTop("10.833333333333334em")
                .setWidth("9.166666666666666em")
                .setHeight("2.5em")
                .setCaption("Mouse Event")
                .onClick([
                    {
                        "desc" : "Mouse",
                        "type" : "other",
                        "target" : "msg",
                        "params" : [
                            "Mouse Event",
                            "button:{args.1.button}<br/>\npageX:{args.1.pageX}<br/>\npageY:{args.1.pageY}<br/>\n\n<br/><br/>\nCtrl:{args.1.ctrlKey}<br/>\nshiftKey:{args.1.shiftKey}<br/>\nAltKey:{args.1.AltKey}"
                        ],
                        "method" : "pop",
                        "conditions" : [
                            {
                                "left" : "",
                                "symbol" : "=",
                                "right" : ""
                            }
                        ],
                        "event" : 1
                    }
                ])
            );
            
            host.ctl_pane39.append(
                xui.create("xui.UI.Group")
                .setHost(host,"ctl_group3")
                .setLeft("20.571428571428573em")
                .setTop("18.285714285714285em")
                .setWidth("19.2em")
                .setHeight("4.571428571428571em")
                .setOverflow("hidden")
                .setCaption("Please select the button down below")
                .setToggleBtn(false)
            );
            
            host.ctl_group3.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton30")
                .setDesc("Modify Control's properties")
                .setLeft("0.8333333333333334em")
                .setTop("0em")
                .setWidth("17.5em")
                .setHeight("2.5em")
                .setCaption("Predict")
                .onClick([
                    {
                        "desc" : "prop1",
                        "type" : "control",
                        "target" : "ctl_htmlbutton2",
                        "params" : [
                            {
                                "html" : "[Dialog Test]",
                                "CC" : {
                                    "KEY" : null
                                },
                                "CS" : {
                                    "KEY" : {
                                        "border-radius" : "4px 4px 4px 4px",
                                        "$gradient" : {
                                            "stops" : [
                                                {
                                                    "pos" : "0%",
                                                    "clr" : "#FFD65E"
                                                },
                                                {
                                                    "pos" : "50%",
                                                    "clr" : "#FEBF04"
                                                },
                                                {
                                                    "pos" : "100%",
                                                    "clr" : "#FFC926"
                                                }
                                            ],
                                            "type" : "linear",
                                            "orient" : "T"
                                        }
                                    }
                                }
                            }
                        ],
                        "method" : "setProperties"
                    },
                    {
                        "desc" : "dialog",
                        "type" : "control",
                        "target" : "ctl_dialog3",
                        "params" : [
                            {
                                "minBtn" : false,
                                "maxBtn" : false,
                                "shadow" : false
                            }
                        ],
                        "method" : "setProperties"
                    }
                ])
            );
            
            host.ctl_pane39.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel8")
                .setSpaceUnit("px")
                .setLeft("10px")
                .setTop("20px")
                .setWidth("334px")
                .setHeight("47px")
                .setCaption("Aviator Predictor")
                .setHAlign("center")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#4B0082",
                        "font-family" : "comic sans ms,cursive",
                        "font-size" : "2em",
                        "font-weight" : "bold",
                        "text-shadow" : "0px 0px 9px #DA70D6",
                        "opacity" : 0.8
                    }
                })
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        events:{
            "onRender":[
                {"desc":"message", 
                 "type":"other", 
                 "target":"msg", 
                 "params":[
                     "This is in conf!", 
                     "Page on render"
                 ], 
                 "scope":null, 
                 "method":"message"
                }
            ]
        }
    }
});
