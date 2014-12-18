/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'arvo, serif': '<script src=\"http://use.edgefonts.net/arvo:n4,i4,n7,i7:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "width",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Group',
                            type: 'group',
                            rect: ['-193px', '-144px', '934px', '696px', 'auto', 'auto'],
                            clip: 'rect(0px 468px 696px -13px)',
                            c: [
                            {
                                id: 'Rectangle_left',
                                type: 'rect',
                                rect: ['0px', '0px', '472px', '696px', 'auto', 'auto'],
                                fill: ["rgba(9,1,1,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'Text_Left',
                                type: 'text',
                                rect: ['300px', '249px', '384px', '192px', 'auto', 'auto'],
                                clip: 'rect(0px 161px 192px -8px)',
                                text: "C x K",
                                font: ['arvo, serif', [132, "px"], "rgba(255,198,78,1.00)", "normal", "none", "", "break-word", "normal"],
                                transform: [[],[],[],['0.77042','0.72285']]
                            }]
                        },
                        {
                            id: 'Group2',
                            type: 'group',
                            rect: ['111px', '-147px', '0px', '696', 'auto', 'auto'],
                            clip: 'rect(0px 682px 696px 164px)',
                            c: [
                            {
                                id: 'Rectangle_right',
                                type: 'rect',
                                rect: ['161px', '0px', '472px', '696px', 'auto', 'auto'],
                                fill: ["rgba(9,1,1,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'Text_Right',
                                type: 'text',
                                rect: ['-11px', '252px', '384px', '192px', 'auto', 'auto'],
                                clip: 'rect(0px 384px 192px 161px)',
                                text: "C x K",
                                font: ['arvo, serif', [132, "px"], "rgba(255,198,78,1.00)", "normal", "none", "", "break-word", "normal"],
                                transform: [[],[],[],['0.56512','0.72285']]
                            }]
                        },
                        {
                            id: 'arrow',
                            type: 'image',
                            rect: ['211px', '440px', '121px', '63px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"arrow.png",'0px','0px'],
                            transform: [[],['-90'],[],['0.8','0.8'],['53%']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '550px', '400px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0)"]
                        }
                    }
                },
                timeline: {
                    duration: 3600,
                    autoPlay: true,
                    data: [
                        [
                            "eid70",
                            "rotateZ",
                            250,
                            0,
                            "easeInQuad",
                            "${Group2}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid76",
                            "rotateZ",
                            2293,
                            0,
                            "easeInQuad",
                            "${Group2}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid7",
                            "top",
                            0,
                            2903,
                            "easeInQuad",
                            "${arrow}",
                            '440px',
                            '-111px'
                        ],
                        [
                            "eid75",
                            "skewY",
                            2293,
                            0,
                            "easeInQuad",
                            "${Group2}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid2",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${arrow}",
                            '-90deg',
                            '-90deg'
                        ],
                        [
                            "eid83",
                            "width",
                            2120,
                            1480,
                            "easeInQuad",
                            "${Group2}",
                            '0px',
                            '934px'
                        ],
                        [
                            "eid146",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Group2}",
                            '-147px',
                            '-147px'
                        ],
                        [
                            "eid120",
                            "top",
                            250,
                            0,
                            "linear",
                            "${Group2}",
                            '-147px',
                            '-147px'
                        ],
                        [
                            "eid149",
                            "top",
                            750,
                            0,
                            "linear",
                            "${Group2}",
                            '-147px',
                            '-147px'
                        ],
                        [
                            "eid151",
                            "top",
                            1108,
                            0,
                            "linear",
                            "${Group2}",
                            '-147px',
                            '-147px'
                        ],
                        [
                            "eid154",
                            "top",
                            1422,
                            0,
                            "linear",
                            "${Group2}",
                            '-147px',
                            '-147px'
                        ],
                        [
                            "eid156",
                            "top",
                            1606,
                            0,
                            "linear",
                            "${Group2}",
                            '-147px',
                            '-147px'
                        ],
                        [
                            "eid159",
                            "top",
                            1750,
                            0,
                            "linear",
                            "${Group2}",
                            '-147px',
                            '-147px'
                        ],
                        [
                            "eid161",
                            "top",
                            1857,
                            0,
                            "linear",
                            "${Group2}",
                            '-147px',
                            '-147px'
                        ],
                        [
                            "eid163",
                            "top",
                            1924,
                            0,
                            "linear",
                            "${Group2}",
                            '-147px',
                            '-147px'
                        ],
                        [
                            "eid164",
                            "top",
                            2000,
                            120,
                            "linear",
                            "${Group2}",
                            '-147px',
                            '-145px'
                        ],
                        [
                            "eid88",
                            "top",
                            2120,
                            1480,
                            "easeInQuad",
                            "${Group2}",
                            '-145px',
                            '-359px'
                        ],
                        [
                            "eid9",
                            "rotateZ",
                            2293,
                            0,
                            "easeInQuad",
                            "${Group}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid141",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '-193px',
                            '-193px'
                        ],
                        [
                            "eid180",
                            "left",
                            1696,
                            424,
                            "linear",
                            "${Group}",
                            '-193px',
                            '-194px'
                        ],
                        [
                            "eid14",
                            "left",
                            2120,
                            1480,
                            "easeInQuad",
                            "${Group}",
                            '-194px',
                            '-488px'
                        ],
                        [
                            "eid16",
                            "top",
                            2120,
                            1480,
                            "easeInQuad",
                            "${Group}",
                            '-144px',
                            '-354px'
                        ],
                        [
                            "eid18",
                            "width",
                            2120,
                            1480,
                            "easeInQuad",
                            "${Group}",
                            '719px',
                            '934px'
                        ],
                        [
                            "eid8",
                            "skewY",
                            2293,
                            0,
                            "easeInQuad",
                            "${Group}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid140",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Group2}",
                            '111px',
                            '111px'
                        ],
                        [
                            "eid165",
                            "left",
                            468,
                            0,
                            "linear",
                            "${Group2}",
                            '111px',
                            '111px'
                        ],
                        [
                            "eid169",
                            "left",
                            750,
                            0,
                            "linear",
                            "${Group2}",
                            '111px',
                            '111px'
                        ],
                        [
                            "eid170",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${Group2}",
                            '111px',
                            '111px'
                        ],
                        [
                            "eid175",
                            "left",
                            1343,
                            0,
                            "linear",
                            "${Group2}",
                            '111px',
                            '111px'
                        ],
                        [
                            "eid176",
                            "left",
                            1500,
                            0,
                            "linear",
                            "${Group2}",
                            '111px',
                            '111px'
                        ],
                        [
                            "eid177",
                            "left",
                            1551,
                            0,
                            "linear",
                            "${Group2}",
                            '111px',
                            '111px'
                        ],
                        [
                            "eid178",
                            "left",
                            1606,
                            0,
                            "linear",
                            "${Group2}",
                            '111px',
                            '111px'
                        ],
                        [
                            "eid179",
                            "left",
                            1696,
                            0,
                            "linear",
                            "${Group2}",
                            '111px',
                            '111px'
                        ],
                        [
                            "eid182",
                            "left",
                            1750,
                            0,
                            "linear",
                            "${Group2}",
                            '111px',
                            '111px'
                        ],
                        [
                            "eid183",
                            "left",
                            1803,
                            0,
                            "linear",
                            "${Group2}",
                            '111px',
                            '111px'
                        ],
                        [
                            "eid162",
                            "left",
                            1857,
                            263,
                            "linear",
                            "${Group2}",
                            '111px',
                            '113px'
                        ],
                        [
                            "eid103",
                            "left",
                            2120,
                            1480,
                            "easeInQuad",
                            "${Group2}",
                            '113px',
                            '416px'
                        ],
                        [
                            "eid111",
                            "skewX",
                            1343,
                            1086,
                            "easeInQuad",
                            "${Group}",
                            '0deg',
                            '-5deg'
                        ],
                        [
                            "eid19",
                            "skewX",
                            2429,
                            89,
                            "easeInQuad",
                            "${Group}",
                            '-5deg',
                            '-12deg'
                        ],
                        [
                            "eid20",
                            "skewX",
                            2518,
                            181,
                            "easeInQuad",
                            "${Group}",
                            '-12deg',
                            '-17deg'
                        ],
                        [
                            "eid24",
                            "skewX",
                            2699,
                            71,
                            "easeInQuad",
                            "${Group}",
                            '-17deg',
                            '-22deg'
                        ],
                        [
                            "eid29",
                            "skewX",
                            2770,
                            830,
                            "easeInQuad",
                            "${Group}",
                            '-22deg',
                            '-28deg'
                        ],
                        [
                            "eid112",
                            "skewX",
                            1696,
                            597,
                            "easeInQuad",
                            "${Group2}",
                            '0deg',
                            '4deg'
                        ],
                        [
                            "eid109",
                            "skewX",
                            2293,
                            91,
                            "easeInQuad",
                            "${Group2}",
                            '4deg',
                            '5deg'
                        ],
                        [
                            "eid110",
                            "skewX",
                            2384,
                            45,
                            "easeInQuad",
                            "${Group2}",
                            '5deg',
                            '7deg'
                        ],
                        [
                            "eid78",
                            "skewX",
                            2429,
                            89,
                            "easeInQuad",
                            "${Group2}",
                            '7deg',
                            '12deg'
                        ],
                        [
                            "eid79",
                            "skewX",
                            2518,
                            181,
                            "easeInQuad",
                            "${Group2}",
                            '12deg',
                            '17deg'
                        ],
                        [
                            "eid80",
                            "skewX",
                            2699,
                            71,
                            "easeInQuad",
                            "${Group2}",
                            '17deg',
                            '22deg'
                        ],
                        [
                            "eid81",
                            "skewX",
                            2770,
                            830,
                            "easeInQuad",
                            "${Group2}",
                            '22deg',
                            '28deg'
                        ],
                        [
                            "eid113",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            'rgba(255,255,255,0)',
                            'rgba(255,255,255,0)'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Website%20Open%20Smaller%20Font_edgeActions.js");
})("EDGE-3365013");
