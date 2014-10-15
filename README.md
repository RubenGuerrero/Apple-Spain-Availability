Apple Spain Avalibilty
---

**request to:** https://reserve.cdn-apple.com/ES/es_ES/reserve/iPhone/stores.json

Headers:
```
GET /ES/es_ES/reserve/iPhone/stores.json HTTP/1.1
Host: reserve.cdn-apple.com
Connection: keep-alive
Pragma: no-cache
Cache-Control: no-cache
Accept: application/json, text/javascript, */*; q=0.01
X-Requested-With: XMLHttpRequest
User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.124 Safari/537.36
Referer: https://reserve.cdn-apple.com/ES/es_ES/reserve/iPhone/availability
Accept-Encoding: gzip,deflate
Accept-Language: es,en;q=0.8,pt;q=0.6,it;q=0.4,ca;q=0.2,ro;q=0.2
Cookie: s_pathLength=ireserve%3D1%2C; s_invisit_n2_es=0; s_vnum_n2_es=0%7C3; s_orientationHeight=785; s_cc=true; s_fid=74EDDF2105CCDC45-122FBC423A057F17; s_ppv=ireserve%2520-%2520availability%2520%2528es%2529; s_orientation=%5B%5BB%5D%5D; s_sq=%5B%5BB%5D%5D
```


Response:
```
{
  "updatedTime" : "9:40 AM",
  "stores" : [ {
    "storeNumber" : "R419",
    "storeName" : "Calle Colón",
    "storeEnabled" : true
  }, {
    "storeNumber" : "R435",
    "storeName" : "Gran Plaza 2",
    "storeEnabled" : true
  }, {
    "storeNumber" : "R468",
    "storeName" : "La Cañada",
    "storeEnabled" : true
  }, {
    "storeNumber" : "R406",
    "storeName" : "La Maquinista",
    "storeEnabled" : true
  }, {
    "storeNumber" : "R507",
    "storeName" : "Nueva Condomina",
    "storeEnabled" : true
  }, {
    "storeNumber" : "R436",
    "storeName" : "Parquesur",
    "storeEnabled" : true
  }, {
    "storeNumber" : "R368",
    "storeName" : "Passeig de Gràcia",
    "storeEnabled" : true
  }, {
    "storeNumber" : "R450",
    "storeName" : "Puerta del Sol",
    "storeEnabled" : true
  }, {
    "storeNumber" : "R377",
    "storeName" : "Puerto Venecia",
    "storeEnabled" : true
  }, {
    "storeNumber" : "R538",
    "storeName" : "Río Shopping",
    "storeEnabled" : true
  }, {
    "storeNumber" : "R397",
    "storeName" : "Xanadú",
    "storeEnabled" : true
  } ],
  "timezone" : "CEST",
  "updatedDate" : "miércoles 15 de octubre",
  "reservationURL" : "https://reserve-es.apple.com/ES/es_ES/reserve/iPhone"
}
```

**Request to:** https://reserve.cdn-apple.com/ES/es_ES/reserve/iPhone/availability.json

```
GET /ES/es_ES/reserve/iPhone/availability.json HTTP/1.1
Host: reserve.cdn-apple.com
Connection: keep-alive
Pragma: no-cache
Cache-Control: no-cache
Accept: application/json, text/javascript, */*; q=0.01
X-Requested-With: XMLHttpRequest
User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.124 Safari/537.36
Referer: https://reserve.cdn-apple.com/ES/es_ES/reserve/iPhone/availability
Accept-Encoding: gzip,deflate
Accept-Language: es,en;q=0.8,pt;q=0.6,it;q=0.4,ca;q=0.2,ro;q=0.2
Cookie: s_pathLength=ireserve%3D1%2C; s_invisit_n2_es=0; s_vnum_n2_es=0%7C3; s_orientationHeight=785; s_cc=true; s_fid=74EDDF2105CCDC45-122FBC423A057F17; s_ppv=ireserve%2520-%2520availability%2520%2528es%2529; s_orientation=%5B%5BB%5D%5D; s_sq=%5B%5BB%5D%5D
```

Response:
```
{
  "R435" : {
    "MG4H2QL/A" : false,
    "MGAE2QL/A" : false,
    "MG482QL/A" : true,
    "MGAK2QL/A" : false,
    "MGA92QL/A" : true,
    "MG4E2QL/A" : false,
    "MG4A2QL/A" : false,
    "MGAA2QL/A" : false,
    "MG472QL/A" : false,
    "MG4J2QL/A" : false,
    "MG4F2QL/A" : false,
    "MGAJ2QL/A" : false,
    "MGAF2QL/A" : false,
    "MG492QL/A" : false,
    "MGAC2QL/A" : false,
    "MGA82QL/A" : true,
    "MG4C2QL/A" : false,
    "MGAH2QL/A" : false
  },
  "R468" : {
    "MG4H2QL/A" : false,
    "MGAE2QL/A" : false,
    "MG482QL/A" : false,
    "MGAK2QL/A" : false,
    "MGA92QL/A" : true,
    "MG4E2QL/A" : false,
    "MG4A2QL/A" : false,
    "MGAA2QL/A" : true,
    "MG472QL/A" : false,
    "MG4J2QL/A" : false,
    "MG4F2QL/A" : false,
    "MGAJ2QL/A" : false,
    "MGAF2QL/A" : true,
    "MG492QL/A" : false,
    "MGAC2QL/A" : false,
    "MGA82QL/A" : true,
    "MG4C2QL/A" : false,
    "MGAH2QL/A" : false
  },
  "R436" : {
    "MG4H2QL/A" : false,
    "MGAE2QL/A" : false,
    "MG482QL/A" : false,
    "MGAK2QL/A" : false,
    "MGA92QL/A" : false,
    "MG4E2QL/A" : false,
    "MG4A2QL/A" : false,
    "MGAA2QL/A" : false,
    "MG472QL/A" : true,
    "MG4J2QL/A" : false,
    "MG4F2QL/A" : false,
    "MGAJ2QL/A" : false,
    "MGAF2QL/A" : false,
    "MG492QL/A" : false,
    "MGAC2QL/A" : false,
    "MGA82QL/A" : false,
    "MG4C2QL/A" : false,
    "MGAH2QL/A" : false
  },
  "R368" : {
    "MG4H2QL/A" : false,
    "MGAE2QL/A" : false,
    "MG482QL/A" : false,
    "MGAK2QL/A" : false,
    "MGA92QL/A" : false,
    "MG4E2QL/A" : false,
    "MG4A2QL/A" : false,
    "MGAA2QL/A" : false,
    "MG472QL/A" : false,
    "MG4J2QL/A" : false,
    "MG4F2QL/A" : false,
    "MGAJ2QL/A" : false,
    "MGAF2QL/A" : false,
    "MG492QL/A" : false,
    "MGAC2QL/A" : false,
    "MGA82QL/A" : false,
    "MG4C2QL/A" : false,
    "MGAH2QL/A" : false
  },
  "R377" : {
    "MG4H2QL/A" : false,
    "MGAE2QL/A" : false,
    "MG482QL/A" : true,
    "MGAK2QL/A" : false,
    "MGA92QL/A" : true,
    "MG4E2QL/A" : true,
    "MG4A2QL/A" : true,
    "MGAA2QL/A" : true,
    "MG472QL/A" : true,
    "MG4J2QL/A" : false,
    "MG4F2QL/A" : false,
    "MGAJ2QL/A" : false,
    "MGAF2QL/A" : false,
    "MG492QL/A" : true,
    "MGAC2QL/A" : true,
    "MGA82QL/A" : true,
    "MG4C2QL/A" : true,
    "MGAH2QL/A" : false
  },
  "R397" : {
    "MG4H2QL/A" : false,
    "MGAE2QL/A" : false,
    "MG482QL/A" : true,
    "MGAK2QL/A" : false,
    "MGA92QL/A" : false,
    "MG4E2QL/A" : false,
    "MG4A2QL/A" : false,
    "MGAA2QL/A" : false,
    "MG472QL/A" : true,
    "MG4J2QL/A" : false,
    "MG4F2QL/A" : false,
    "MGAJ2QL/A" : false,
    "MGAF2QL/A" : false,
    "MG492QL/A" : false,
    "MGAC2QL/A" : false,
    "MGA82QL/A" : false,
    "MG4C2QL/A" : false,
    "MGAH2QL/A" : false
  },
  "R450" : {
    "MG4H2QL/A" : false,
    "MGAE2QL/A" : false,
    "MG482QL/A" : false,
    "MGAK2QL/A" : false,
    "MGA92QL/A" : false,
    "MG4E2QL/A" : false,
    "MG4A2QL/A" : false,
    "MGAA2QL/A" : false,
    "MG472QL/A" : false,
    "MG4J2QL/A" : false,
    "MG4F2QL/A" : false,
    "MGAJ2QL/A" : false,
    "MGAF2QL/A" : false,
    "MG492QL/A" : false,
    "MGAC2QL/A" : false,
    "MGA82QL/A" : false,
    "MG4C2QL/A" : false,
    "MGAH2QL/A" : false
  },
  "R507" : {
    "MG4H2QL/A" : false,
    "MGAE2QL/A" : false,
    "MG482QL/A" : false,
    "MGAK2QL/A" : false,
    "MGA92QL/A" : false,
    "MG4E2QL/A" : false,
    "MG4A2QL/A" : false,
    "MGAA2QL/A" : false,
    "MG472QL/A" : false,
    "MG4J2QL/A" : false,
    "MG4F2QL/A" : false,
    "MGAJ2QL/A" : false,
    "MGAF2QL/A" : false,
    "MG492QL/A" : false,
    "MGAC2QL/A" : false,
    "MGA82QL/A" : false,
    "MG4C2QL/A" : false,
    "MGAH2QL/A" : false
  },
  "R419" : {
    "MG4H2QL/A" : false,
    "MGAE2QL/A" : false,
    "MG482QL/A" : false,
    "MGAK2QL/A" : false,
    "MGA92QL/A" : false,
    "MG4E2QL/A" : false,
    "MG4A2QL/A" : false,
    "MGAA2QL/A" : false,
    "MG472QL/A" : false,
    "MG4J2QL/A" : false,
    "MG4F2QL/A" : false,
    "MGAJ2QL/A" : false,
    "MGAF2QL/A" : false,
    "MG492QL/A" : false,
    "MGAC2QL/A" : false,
    "MGA82QL/A" : false,
    "MG4C2QL/A" : false,
    "MGAH2QL/A" : false
  },
  "updated" : 1413358835372,
  "R538" : {
    "MG4H2QL/A" : false,
    "MGAE2QL/A" : false,
    "MG482QL/A" : false,
    "MGAK2QL/A" : false,
    "MGA92QL/A" : false,
    "MG4E2QL/A" : false,
    "MG4A2QL/A" : false,
    "MGAA2QL/A" : false,
    "MG472QL/A" : false,
    "MG4J2QL/A" : false,
    "MG4F2QL/A" : false,
    "MGAJ2QL/A" : false,
    "MGAF2QL/A" : false,
    "MG492QL/A" : false,
    "MGAC2QL/A" : false,
    "MGA82QL/A" : false,
    "MG4C2QL/A" : false,
    "MGAH2QL/A" : false
  },
  "R406" : {
    "MG4H2QL/A" : false,
    "MGAE2QL/A" : false,
    "MG482QL/A" : false,
    "MGAK2QL/A" : false,
    "MGA92QL/A" : false,
    "MG4E2QL/A" : false,
    "MG4A2QL/A" : false,
    "MGAA2QL/A" : false,
    "MG472QL/A" : false,
    "MG4J2QL/A" : false,
    "MG4F2QL/A" : false,
    "MGAJ2QL/A" : false,
    "MGAF2QL/A" : false,
    "MG492QL/A" : false,
    "MGAC2QL/A" : false,
    "MGA82QL/A" : false,
    "MG4C2QL/A" : false,
    "MGAH2QL/A" : false
  }
}
```

**Products: **
```
{
    "name": "iPhone 6",
    "localizedName": "iPhone 6",
    "sizes": [{
        "size": "128GB",
        "colors": [{
            "colorSwatchUrl": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266074023",
            "partNumber": "MG4C2QL/A",
            "name": "Plata",
            "colorSwatchUrl2x": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266074023",
            "colorSortOrder": "2100",
            "available": false
        }, {
            "colorSwatchUrl": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266073604",
            "partNumber": "MG4A2QL/A",
            "name": "Gris espacial",
            "colorSwatchUrl2x": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266073604",
            "colorSortOrder": "2300",
            "available": false
        }, {
            "colorSwatchUrl": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266073747",
            "partNumber": "MG4E2QL/A",
            "name": "Oro",
            "colorSwatchUrl2x": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266073747",
            "colorSortOrder": "2200",
            "available": false
        }]
    }, {
        "size": "64GB",
        "colors": [{
            "colorSwatchUrl": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266074023",
            "partNumber": "MG4H2QL/A",
            "name": "Plata",
            "colorSwatchUrl2x": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266074023",
            "colorSortOrder": "2100",
            "available": false
        }, {
            "colorSwatchUrl": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266073604",
            "partNumber": "MG4F2QL/A",
            "name": "Gris espacial",
            "colorSwatchUrl2x": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266073604",
            "colorSortOrder": "2300",
            "available": false
        }, {
            "colorSwatchUrl": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266073747",
            "partNumber": "MG4J2QL/A",
            "name": "Oro",
            "colorSwatchUrl2x": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266073747",
            "colorSortOrder": "2200",
            "available": false
        }]
    }, {
        "size": "16GB",
        "colors": [{
            "colorSwatchUrl": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266074023",
            "partNumber": "MG482QL/A",
            "name": "Plata",
            "colorSwatchUrl2x": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266074023",
            "colorSortOrder": "2100",
            "available": false
        }, {
            "colorSwatchUrl": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266073604",
            "partNumber": "MG472QL/A",
            "name": "Gris espacial",
            "colorSwatchUrl2x": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266073604",
            "colorSortOrder": "2300",
            "available": false
        }, {
            "colorSwatchUrl": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266073747",
            "partNumber": "MG492QL/A",
            "name": "Oro",
            "colorSwatchUrl2x": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266073747",
            "colorSortOrder": "2200",
            "available": false
        }]
    }]
}
```
