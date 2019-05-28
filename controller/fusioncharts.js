/*! angularjs-fusioncharts - v4.0.0*/

!function () {
    angular.module("ng-fusioncharts", []).directive("fusioncharts", ["$http", function (a) {
        return {
            scope: {
                width: "@",
                height: "@",
                data: "@",
                dataset: "@",
                categories: "@",
                chart: "@",
                linkeddata: "@",
                trendlines: "@",
                vtrendlines: "@",
                annotations: "@",
                colorrange: "@",
                lineset: "@",
                axis: "@",
                connectors: "@",
                pointers: "@",
                value: "@",
                processes: "@",
                tasks: "@",
                rows: "@",
                columns: "@",
                map: "@",
                markers: "@"
            }, link: function (a, b, c) {
                var d, e, f, g, h, i, j, k, l, m, n, o = {
                    NDCObserver: {
                        width: {
                            ifExist: !1, observer: function (b) {
                                b && j.width != b && (j.width = b, r.resizeTo(a.width, a.height))
                            }
                        }, height: {
                            ifExist: !1, observer: function (b) {
                                b && j.height != b && (j.height = b, r.resizeTo(a.width, a.height))
                            }
                        }, datasource: {
                            ifExist: !0, observer: function (a) {
                                v.dataSource != a && (v.dataSource = a, "json" === j.dataFormat ? (j.dataSource = JSON.parse(a), t()) : (j.dataSource = a, "xml" === j.dataFormat ? r.setXMLData(a) : "jsonurl" === j.dataFormat ? r.setJSONUrl(a) : "xmlurl" === j.dataFormat && r.setXMLUrl(a)))
                            }
                        }, type: {
                            ifExist: !1, observer: function (a) {
                                a && j.type != a && (j.type = a, r.chartType(a))
                            }
                        }, config: {
                            ifExist: !1, observer: function (a) {
                                var b, c, d = !1;
                                if (a) {
                                    b = JSON.parse(a);
                                    for (c in b) j[c] != b[c] && (d = !0, j[c] = b[c]);
                                    d && u()
                                }
                            }
                        }
                    }, DCObserver: {
                        chart: {
                            ifExist: !0, observer: function (a) {
                                "json" === j.dataFormat && "object" == typeof j.dataSource && v.chart != a && (v.chart = a, j.dataSource.chart = JSON.parse(a), t())
                            }
                        }, data: {
                            ifExist: !0, observer: function (a) {
                                "json" === j.dataFormat && "object" == typeof j.dataSource && v.data != a && (v.data = a, j.dataSource.data = JSON.parse(a), t())
                            }
                        }, categories: {
                            ifExist: !0, observer: function (a) {
                                "json" === j.dataFormat && "object" == typeof j.dataSource && v.categories != a && (v.categories = a, j.dataSource.categories = JSON.parse(a), t())
                            }
                        }, dataset: {
                            ifExist: !0, observer: function (a) {
                                "json" === j.dataFormat && "object" == typeof j.dataSource && v.dataset != a && (v.dataset = a, j.dataSource.dataset = JSON.parse(a), t())
                            }
                        }, linkeddata: {
                            ifExist: !0, observer: function (a) {
                                "json" === j.dataFormat && "object" == typeof j.dataSource && v.linkeddata != a && (v.linkeddata = a, j.dataSource.linkeddata = JSON.parse(a), t())
                            }
                        }, trendlines: {
                            ifExist: !0, observer: function (a) {
                                "json" === j.dataFormat && "object" == typeof j.dataSource && v.trendlines != a && (v.trendlines = a, j.dataSource.trendlines = JSON.parse(a), t())
                            }
                        }, vtrendlines: {
                            ifExist: !0, observer: function (a) {
                                "json" === j.dataFormat && "object" == typeof j.dataSource && v.vtrendlines != a && (v.vtrendlines = a, j.dataSource.vtrendlines = JSON.parse(a), t())
                            }
                        }, annotations: {
                            ifExist: !0, observer: function (a) {
                                "json" === j.dataFormat && "object" == typeof j.dataSource && v.annotations != a && (v.annotations = a, j.dataSource.annotations = JSON.parse(a), t())
                            }
                        }, colorrange: {
                            ifExist: !0, observer: function (a) {
                                "json" === j.dataFormat && "object" == typeof j.dataSource && v.colorrange != a && (v.colorrange = a, j.dataSource.colorrange = JSON.parse(a), t())
                            }
                        }, lineset: {
                            ifExist: !0, observer: function (a) {
                                "json" === j.dataFormat && "object" == typeof j.dataSource && v.lineset != a && (v.lineset = a, j.dataSource.lineset = JSON.parse(a), t())
                            }
                        }, axis: {
                            ifExist: !0, observer: function (a) {
                                "json" === j.dataFormat && "object" == typeof j.dataSource && v.axis != a && (v.axis = a, j.dataSource.axis = JSON.parse(a), t())
                            }
                        }, connectors: {
                            ifExist: !0, observer: function (a) {
                                "json" === j.dataFormat && "object" == typeof j.dataSource && v.connectors != a && (v.connectors = a, j.dataSource.connectors = JSON.parse(a), t())
                            }
                        }, pointers: {
                            ifExist: !0, observer: function (a) {
                                "json" === j.dataFormat && "object" == typeof j.dataSource && v.pointers != a && (v.pointers = a, j.dataSource.pointers = JSON.parse(a), t())
                            }
                        }, value: {
                            ifExist: !0, observer: function (a) {
                                "json" === j.dataFormat && "object" == typeof j.dataSource && v.value != a && (v.value = a, j.dataSource.value = JSON.parse(a), t())
                            }
                        }, processes: {
                            ifExist: !0, observer: function (a) {
                                "json" === j.dataFormat && "object" == typeof j.dataSource && v.processes != a && (v.processes = a, j.dataSource.processes = JSON.parse(a), t())
                            }
                        }, tasks: {
                            ifExist: !0, observer: function (a) {
                                "json" === j.dataFormat && "object" == typeof j.dataSource && v.tasks != a && (v.tasks = a, j.dataSource.tasks = JSON.parse(a), t())
                            }
                        }, rows: {
                            ifExist: !0, observer: function (a) {
                                "json" === j.dataFormat && "object" == typeof j.dataSource && v.rows != a && (v.rows = a, j.dataSource.rows = JSON.parse(a), t())
                            }
                        }, columns: {
                            ifExist: !0, observer: function (a) {
                                "json" === j.dataFormat && "object" == typeof j.dataSource && v.columns != a && (v.columns = a, j.dataSource.columns = JSON.parse(a), t())
                            }
                        }, map: {
                            ifExist: !0, observer: function (a) {
                                "json" === j.dataFormat && "object" == typeof j.dataSource && v.map != a && (v.map = a, j.dataSource.map = JSON.parse(a), t())
                            }
                        }, markers: {
                            ifExist: !0, observer: function (a) {
                                "json" === j.dataFormat && "object" == typeof j.dataSource && v.markers != a && (v.markers = a, j.dataSource.markers = JSON.parse(a), t())
                            }
                        }
                    }
                }, p = {}, q = Object.keys(c), r = null, s = {
                    "*": function (a, b) {
                        p.hasOwnProperty(a.eventType) && p[a.eventType](a, b)
                    }
                }, t = function () {
                    d && clearTimeout(d), d = setTimeout(function () {
                        r && r.setJSONData && r.setJSONData(j.dataSource)
                    }, 0)
                }, u = function () {
                    r && r.dispose && r.dispose(), r = new FusionCharts(j), angular.element(document).ready(function () {
                        b.ready(function () {
                            r = r.render(), a[c.chartobject] = r
                        })
                    })
                }, v = {};
                if (c.events) {
                    for (m = c.events.split("."), n = m.length, g = a.$parent, e = 0; e < n; e += 1) g = g && g[m[e]];
                    if (g) for (h in g) g.hasOwnProperty(h) && (p[h.toLowerCase()] = g[h])
                }
                for (e = 0; e < q.length; e++) f = q[e], f.match(/^on/i) && (h = f.slice(2).toLowerCase(), p[h] = a.$parent[c[f]]);
                j = {
                    type: c.type,
                    width: c.width,
                    height: c.height,
                    renderAt: b[0],
                    id: c.chartid,
                    dataFormat: c.dataformat || "json",
                    dataSource: {},
                    events: s
                };
                for (i in o.NDCObserver) attrConfig = o.NDCObserver[i], (!1 === attrConfig.ifExist || c[i]) && c.$observe(i, attrConfig.observer);
                c.datasource && (j.dataSource = "json" === j.dataFormat ? JSON.parse(c.datasource) : c.datasource, v.dataSource = c.datasource);
                for (i in o.DCObserver) attrConfig = o.DCObserver[i], l = c[i], l ? (c.$observe(i, attrConfig.observer), v[i] = l, "json" === j.dataFormat && "object" == typeof j.dataSource && (j.dataSource[i] = JSON.parse(l))) : !1 === attrConfig.ifExist && c.$observe(i, attrConfig.observer);
                if (c.config) {
                    k = JSON.parse(c.config);
                    for (f in k) j[f] = k[f]
                }
                u()
            }
        }
    }])
}();