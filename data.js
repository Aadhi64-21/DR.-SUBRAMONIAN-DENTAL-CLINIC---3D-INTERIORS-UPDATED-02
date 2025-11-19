var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "ENTRANCE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": 0.08352657269456287,
          "pitch": 0.07369257250348937,
          "rotation": 0,
          "target": "4-reception-"
        },
        {
          "yaw": -0.16627386459542315,
          "pitch": -0.02780823387079323,
          "rotation": 4.71238898038469,
          "target": "3-waiting-02"
        },
        {
          "yaw": -0.47203335847892625,
          "pitch": -0.03345125899411272,
          "rotation": 5.497787143782138,
          "target": "5-first-floor-lobby"
        },
        {
          "yaw": -0.465380650792266,
          "pitch": 0.2065220918504913,
          "rotation": 3.141592653589793,
          "target": "1-basement"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-basement",
      "name": "BASEMENT",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.018010344836502767,
        "pitch": 0.022410245307705523,
        "fov": 0.9175656847489096
      },
      "linkHotspots": [
        {
          "yaw": -0.6086125646200333,
          "pitch": -0.06230925331052006,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-waiting-01",
      "name": "WAITING 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": 0.04099255898845122,
          "pitch": 0.05030570864965611,
          "rotation": 3.141592653589793,
          "target": "4-reception-"
        },
        {
          "yaw": -1.172458147126834,
          "pitch": 0.17024440929071893,
          "rotation": 3.141592653589793,
          "target": "3-waiting-02"
        },
        {
          "yaw": -2.5748122595618224,
          "pitch": -0.05315359252052332,
          "rotation": 0,
          "target": "5-first-floor-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-waiting-02",
      "name": "WAITING 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": -1.7966431593840024,
          "pitch": 0.06384655447216758,
          "rotation": 3.141592653589793,
          "target": "0-entrance"
        },
        {
          "yaw": 2.3567592722990662,
          "pitch": -0.03103385877811604,
          "rotation": 3.141592653589793,
          "target": "4-reception-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-reception-",
      "name": "RECEPTION ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.04760453093916972,
        "pitch": 0.0987793142146316,
        "fov": 1.0934631750793191
      },
      "linkHotspots": [
        {
          "yaw": 0.09798114576072692,
          "pitch": -0.29294487894230414,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-first-floor-lobby",
      "name": "FIRST FLOOR LOBBY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.14968404598691798,
        "pitch": -0.002177905154141513,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": 0.05737057728277861,
          "pitch": 0.005999387536190781,
          "rotation": 0,
          "target": "6-dental-op-01"
        },
        {
          "yaw": 2.301317295428822,
          "pitch": 0.03298798308153117,
          "rotation": 3.141592653589793,
          "target": "8-dental-op-03"
        },
        {
          "yaw": -3.0374836877400675,
          "pitch": -0.03373080012265106,
          "rotation": 3.141592653589793,
          "target": "7-dental-op-02"
        },
        {
          "yaw": 0.8959746865077349,
          "pitch": -0.013028371186290855,
          "rotation": 0,
          "target": "9-second-floor-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-dental-op-01",
      "name": "DENTAL OP 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.658961079955432,
        "pitch": 0.025979765308271396,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": 2.6075718002961503,
          "pitch": -0.06967741366089086,
          "rotation": 0,
          "target": "7-dental-op-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-dental-op-02",
      "name": "DENTAL OP 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.0006399787999953332,
        "pitch": 0,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": -0.10096201449431774,
          "pitch": 0.03961753597699591,
          "rotation": 3.141592653589793,
          "target": "8-dental-op-03"
        },
        {
          "yaw": -1.5693436886831833,
          "pitch": 0.042790403464266547,
          "rotation": 0,
          "target": "6-dental-op-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-dental-op-03",
      "name": "DENTAL OP 03",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": -1.3196444413995323,
          "pitch": 0.07247311526917954,
          "rotation": 3.141592653589793,
          "target": "7-dental-op-02"
        },
        {
          "yaw": -0.4873936016891953,
          "pitch": 0.018384679277344773,
          "rotation": 0.7853981633974483,
          "target": "9-second-floor-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-second-floor-lobby",
      "name": "SECOND FLOOR LOBBY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": -1.3493540471919534,
          "pitch": 0.037348916382022423,
          "rotation": 0,
          "target": "10-pediatric-op"
        },
        {
          "yaw": 1.4747832016974751,
          "pitch": -0.020049452531916145,
          "rotation": 5.497787143782138,
          "target": "11-doctors-office"
        },
        {
          "yaw": -0.34053678067116167,
          "pitch": -0.035820374622375084,
          "rotation": 0,
          "target": "12-third-floor-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-pediatric-op",
      "name": "PEDIATRIC OP",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": -2.363876407248327,
          "pitch": -0.04675292043040358,
          "rotation": 5.497787143782138,
          "target": "9-second-floor-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-doctors-office",
      "name": "DOCTORS OFFICE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": 1.9904170855457766,
          "pitch": -0.03402632195328792,
          "rotation": 7.853981633974483,
          "target": "9-second-floor-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-third-floor-",
      "name": "THIRD FLOOR ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.18115010056933833,
        "pitch": 0.05081395194333638,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": -0.18115010056933833,
          "pitch": 0.05081395194333638,
          "rotation": 0,
          "target": "14-md-room"
        },
        {
          "yaw": 0.4243905196243336,
          "pitch": 0.09676149607775031,
          "rotation": 3.141592653589793,
          "target": "0-entrance"
        },
        {
          "yaw": 2.8046771203341034,
          "pitch": 0.16169597835324723,
          "rotation": 3.141592653589793,
          "target": "13-autoclave"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-autoclave",
      "name": "AUTOCLAVE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.04259454408767027,
        "pitch": -0.07374224935021445,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": -1.777423933737115,
          "pitch": -0.06521398310892934,
          "rotation": 3.141592653589793,
          "target": "12-third-floor-"
        },
        {
          "yaw": -1.1115663076992206,
          "pitch": -0.07439888542075579,
          "rotation": 3.141592653589793,
          "target": "0-entrance"
        },
        {
          "yaw": -1.5683036335474476,
          "pitch": -0.06429119326205068,
          "rotation": 0,
          "target": "14-md-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-md-room",
      "name": "MD ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": -3.1255130754991125,
          "pitch": 0.0007395933599134707,
          "rotation": 0,
          "target": "13-autoclave"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
