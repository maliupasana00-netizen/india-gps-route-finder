// ============================================================
// INDIA GPS ROUTE FINDER
// ============================================================
// Data Structure:
// Weighted Graph / Adjacency List
//
// Algorithm:
// Dijkstra's Shortest Path
//
// Map:
// Leaflet + OpenStreetMap
// ============================================================



// ============================================================
// 1. INDIAN CITY DATABASE
// ============================================================

const cities = [

    // ================= MAHARASHTRA =================

    {
        name: "Mumbai",
        state: "Maharashtra",
        lat: 19.0760,
        lon: 72.8777
    },

    {
        name: "Pune",
        state: "Maharashtra",
        lat: 18.5204,
        lon: 73.8567
    },

    {
        name: "Nashik",
        state: "Maharashtra",
        lat: 19.9975,
        lon: 73.7898
    },

    {
        name: "Nagpur",
        state: "Maharashtra",
        lat: 21.1458,
        lon: 79.0882
    },

    {
        name: "Kolhapur",
        state: "Maharashtra",
        lat: 16.7050,
        lon: 74.2433
    },

    {
        name: "Solapur",
        state: "Maharashtra",
        lat: 17.6599,
        lon: 75.9064
    },

    {
        name: "Aurangabad",
        state: "Maharashtra",
        lat: 19.8762,
        lon: 75.3433
    },

    {
        name: "Amravati",
        state: "Maharashtra",
        lat: 20.9374,
        lon: 77.7796
    },

    {
        name: "Nanded",
        state: "Maharashtra",
        lat: 19.1383,
        lon: 77.3210
    },

    {
        name: "Satara",
        state: "Maharashtra",
        lat: 17.6805,
        lon: 74.0183
    },

    {
        name: "Sangli",
        state: "Maharashtra",
        lat: 16.8524,
        lon: 74.5815
    },

    {
        name: "Jalgaon",
        state: "Maharashtra",
        lat: 21.0077,
        lon: 75.5626
    },

    {
        name: "Latur",
        state: "Maharashtra",
        lat: 18.4088,
        lon: 76.5604
    },

    {
        name: "Akola",
        state: "Maharashtra",
        lat: 20.7002,
        lon: 77.0082
    },



    // ================= GUJARAT =================

    {
        name: "Ahmedabad",
        state: "Gujarat",
        lat: 23.0225,
        lon: 72.5714
    },

    {
        name: "Surat",
        state: "Gujarat",
        lat: 21.1702,
        lon: 72.8311
    },

    {
        name: "Vadodara",
        state: "Gujarat",
        lat: 22.3072,
        lon: 73.1812
    },

    {
        name: "Rajkot",
        state: "Gujarat",
        lat: 22.3039,
        lon: 70.8022
    },

    {
        name: "Bhavnagar",
        state: "Gujarat",
        lat: 21.7645,
        lon: 72.1519
    },

    {
        name: "Jamnagar",
        state: "Gujarat",
        lat: 22.4707,
        lon: 70.0577
    },



    // ================= RAJASTHAN =================

    {
        name: "Jaipur",
        state: "Rajasthan",
        lat: 26.9124,
        lon: 75.7873
    },

    {
        name: "Jodhpur",
        state: "Rajasthan",
        lat: 26.2389,
        lon: 73.0243
    },

    {
        name: "Udaipur",
        state: "Rajasthan",
        lat: 24.5854,
        lon: 73.7125
    },

    {
        name: "Kota",
        state: "Rajasthan",
        lat: 25.2138,
        lon: 75.8648
    },

    {
        name: "Ajmer",
        state: "Rajasthan",
        lat: 26.4499,
        lon: 74.6399
    },



    // ================= DELHI =================

    {
        name: "Delhi",
        state: "Delhi",
        lat: 28.6139,
        lon: 77.2090
    },



    // ================= PUNJAB =================

    {
        name: "Amritsar",
        state: "Punjab",
        lat: 31.6340,
        lon: 74.8723
    },

    {
        name: "Ludhiana",
        state: "Punjab",
        lat: 30.9010,
        lon: 75.8573
    },

    {
        name: "Jalandhar",
        state: "Punjab",
        lat: 31.3260,
        lon: 75.5762
    },



    // ================= HARYANA =================

    {
        name: "Gurugram",
        state: "Haryana",
        lat: 28.4595,
        lon: 77.0266
    },

    {
        name: "Faridabad",
        state: "Haryana",
        lat: 28.4089,
        lon: 77.3178
    },

    {
        name: "Panipat",
        state: "Haryana",
        lat: 29.3909,
        lon: 76.9635
    },



    // ================= UTTAR PRADESH =================

    {
        name: "Lucknow",
        state: "Uttar Pradesh",
        lat: 26.8467,
        lon: 80.9462
    },

    {
        name: "Kanpur",
        state: "Uttar Pradesh",
        lat: 26.4499,
        lon: 80.3319
    },

    {
        name: "Agra",
        state: "Uttar Pradesh",
        lat: 27.1767,
        lon: 78.0081
    },

    {
        name: "Varanasi",
        state: "Uttar Pradesh",
        lat: 25.3176,
        lon: 82.9739
    },

    {
        name: "Prayagraj",
        state: "Uttar Pradesh",
        lat: 25.4358,
        lon: 81.8463
    },

    {
        name: "Meerut",
        state: "Uttar Pradesh",
        lat: 28.9845,
        lon: 77.7064
    },

    {
        name: "Noida",
        state: "Uttar Pradesh",
        lat: 28.5355,
        lon: 77.3910
    },



    // ================= MADHYA PRADESH =================

    {
        name: "Bhopal",
        state: "Madhya Pradesh",
        lat: 23.2599,
        lon: 77.4126
    },

    {
        name: "Indore",
        state: "Madhya Pradesh",
        lat: 22.7196,
        lon: 75.8577
    },

    {
        name: "Gwalior",
        state: "Madhya Pradesh",
        lat: 26.2183,
        lon: 78.1828
    },

    {
        name: "Jabalpur",
        state: "Madhya Pradesh",
        lat: 23.1815,
        lon: 79.9864
    },



    // ================= BIHAR =================

    {
        name: "Patna",
        state: "Bihar",
        lat: 25.5941,
        lon: 85.1376
    },

    {
        name: "Gaya",
        state: "Bihar",
        lat: 24.7914,
        lon: 85.0002
    },

    {
        name: "Muzaffarpur",
        state: "Bihar",
        lat: 26.1209,
        lon: 85.3647
    },



    // ================= WEST BENGAL =================

    {
        name: "Kolkata",
        state: "West Bengal",
        lat: 22.5726,
        lon: 88.3639
    },

    {
        name: "Siliguri",
        state: "West Bengal",
        lat: 26.7271,
        lon: 88.3953
    },



    // ================= ODISHA =================

    {
        name: "Bhubaneswar",
        state: "Odisha",
        lat: 20.2961,
        lon: 85.8245
    },

    {
        name: "Cuttack",
        state: "Odisha",
        lat: 20.4625,
        lon: 85.8830
    },

    {
        name: "Rourkela",
        state: "Odisha",
        lat: 22.2604,
        lon: 84.8536
    },



    // ================= CHHATTISGARH =================

    {
        name: "Raipur",
        state: "Chhattisgarh",
        lat: 21.2514,
        lon: 81.6296
    },

    {
        name: "Bilaspur",
        state: "Chhattisgarh",
        lat: 22.0797,
        lon: 82.1409
    },



    // ================= JHARKHAND =================

    {
        name: "Ranchi",
        state: "Jharkhand",
        lat: 23.3441,
        lon: 85.3096
    },

    {
        name: "Jamshedpur",
        state: "Jharkhand",
        lat: 22.8046,
        lon: 86.2029
    },



    // ================= ASSAM =================

    {
        name: "Guwahati",
        state: "Assam",
        lat: 26.1445,
        lon: 91.7362
    },

    {
        name: "Dibrugarh",
        state: "Assam",
        lat: 27.4728,
        lon: 94.9120
    },



    // ================= TELANGANA =================

    {
        name: "Hyderabad",
        state: "Telangana",
        lat: 17.3850,
        lon: 78.4867
    },

    {
        name: "Warangal",
        state: "Telangana",
        lat: 17.9689,
        lon: 79.5941
    },



    // ================= ANDHRA PRADESH =================

    {
        name: "Visakhapatnam",
        state: "Andhra Pradesh",
        lat: 17.6868,
        lon: 83.2185
    },

    {
        name: "Vijayawada",
        state: "Andhra Pradesh",
        lat: 16.5062,
        lon: 80.6480
    },

    {
        name: "Tirupati",
        state: "Andhra Pradesh",
        lat: 13.6288,
        lon: 79.4192
    },



    // ================= KARNATAKA =================

    {
        name: "Bengaluru",
        state: "Karnataka",
        lat: 12.9716,
        lon: 77.5946
    },

    {
        name: "Mysuru",
        state: "Karnataka",
        lat: 12.2958,
        lon: 76.6394
    },

    {
        name: "Mangaluru",
        state: "Karnataka",
        lat: 12.9141,
        lon: 74.8560
    },

    {
        name: "Hubballi",
        state: "Karnataka",
        lat: 15.3647,
        lon: 75.1240
    },

    {
        name: "Belagavi",
        state: "Karnataka",
        lat: 15.8497,
        lon: 74.4977
    },



    // ================= TAMIL NADU =================

    {
        name: "Chennai",
        state: "Tamil Nadu",
        lat: 13.0827,
        lon: 80.2707
    },

    {
        name: "Coimbatore",
        state: "Tamil Nadu",
        lat: 11.0168,
        lon: 76.9558
    },

    {
        name: "Madurai",
        state: "Tamil Nadu",
        lat: 9.9252,
        lon: 78.1198
    },

    {
        name: "Salem",
        state: "Tamil Nadu",
        lat: 11.6643,
        lon: 78.1460
    },

    {
        name: "Tiruchirappalli",
        state: "Tamil Nadu",
        lat: 10.7905,
        lon: 78.7047
    },



    // ================= KERALA =================

    {
        name: "Thiruvananthapuram",
        state: "Kerala",
        lat: 8.5241,
        lon: 76.9366
    },

    {
        name: "Kochi",
        state: "Kerala",
        lat: 9.9312,
        lon: 76.2673
    },

    {
        name: "Kozhikode",
        state: "Kerala",
        lat: 11.2588,
        lon: 75.7804
    },



    // ================= GOA =================

    {
        name: "Panaji",
        state: "Goa",
        lat: 15.4909,
        lon: 73.8278
    },



    // ================= RAJASTHAN / GUJARAT
    // Additional =================

    {
        name: "Bikaner",
        state: "Rajasthan",
        lat: 28.0229,
        lon: 73.3119
    },

    {
        name: "Kota",
        state: "Rajasthan",
        lat: 25.2138,
        lon: 75.8648
    },



    // ================= HIMACHAL PRADESH =================

    {
        name: "Shimla",
        state: "Himachal Pradesh",
        lat: 31.1048,
        lon: 77.1734
    },



    // ================= UTTARAKHAND =================

    {
        name: "Dehradun",
        state: "Uttarakhand",
        lat: 30.3165,
        lon: 78.0322
    },

    {
        name: "Haridwar",
        state: "Uttarakhand",
        lat: 29.9457,
        lon: 78.1642
    },



    // ================= JAMMU & KASHMIR =================

    {
        name: "Srinagar",
        state: "Jammu and Kashmir",
        lat: 34.0837,
        lon: 74.7973
    },

    {
        name: "Jammu",
        state: "Jammu and Kashmir",
        lat: 32.7266,
        lon: 74.8570
    },


    // ================= SIKKIM =================

    {
        name: "Gangtok",
        state: "Sikkim",
        lat: 27.3389,
        lon: 88.6065
    },


    // ================= MEGHALAYA =================

    {
        name: "Shillong",
        state: "Meghalaya",
        lat: 25.5788,
        lon: 91.8933
    },


    // ================= TRIPURA =================

    {
        name: "Agartala",
        state: "Tripura",
        lat: 23.8315,
        lon: 91.2868
    },


    // ================= MANIPUR =================

    {
        name: "Imphal",
        state: "Manipur",
        lat: 24.8170,
        lon: 93.9368
    },


    // ================= MIZORAM =================

    {
        name: "Aizawl",
        state: "Mizoram",
        lat: 23.7271,
        lon: 92.7176
    },


    // ================= NAGALAND =================

    {
        name: "Kohima",
        state: "Nagaland",
        lat: 25.6751,
        lon: 94.1086
    }

];



// ============================================================
// 2. CITY LOOKUP
// ============================================================

const cityMap = {};

cities.forEach(
    city => {

        cityMap[city.name] =
            city;

    }
);



// ============================================================
// 3. HAVERSINE DISTANCE
// ============================================================

function calculateDistance(
    city1,
    city2
) {

    const R = 6371;


    const lat1 =
        city1.lat *
        Math.PI / 180;


    const lat2 =
        city2.lat *
        Math.PI / 180;


    const dLat =
        (
            city2.lat -
            city1.lat
        ) *
        Math.PI / 180;


    const dLon =
        (
            city2.lon -
            city1.lon
        ) *
        Math.PI / 180;


    const a =
        Math.sin(
            dLat / 2
        ) ** 2 +

        Math.cos(lat1) *
        Math.cos(lat2) *
        Math.sin(
            dLon / 2
        ) ** 2;


    const c =
        2 *
        Math.atan2(
            Math.sqrt(a),
            Math.sqrt(1 - a)
        );


    return R * c;

}



// ============================================================
// 4. CREATE GRAPH
// ============================================================

const graph = {};


// Create empty adjacency list

cities.forEach(
    city => {

        graph[city.name] = {};

    }
);


// Connect each city to its nearest 4 cities

cities.forEach(
    city => {


        const nearby =
            cities
                .filter(
                    other =>
                        other.name !==
                        city.name
                )
                .map(
                    other => ({

                        name:
                            other.name,

                        distance:
                            calculateDistance(
                                city,
                                other
                            )

                    })
                )
                .sort(
                    (a,b) =>
                        a.distance -
                        b.distance
                )
                .slice(0,4);


        nearby.forEach(
            neighbor => {

                graph[
                    city.name
                ][
                    neighbor.name
                ] =
                    Math.round(
                        neighbor.distance
                    );

            }
        );

    }
);



// ============================================================
// 5. MAKE GRAPH UNDIRECTED
// ============================================================

Object.keys(graph).forEach(
    city => {

        Object.keys(
            graph[city]
        ).forEach(
            neighbor => {

                if (
                    !graph[
                        neighbor
                    ][city]
                ) {

                    graph[
                        neighbor
                    ][city] =
                        graph[
                            city
                        ][neighbor];

                }

            }
        );

    }
);



// ============================================================
// 6. DIJKSTRA
// ============================================================

function dijkstra(
    start,
    end
) {


    const distances = {};

    const previous = {};

    const unvisited =
        new Set(
            Object.keys(graph)
        );


    // Initialize

    Object.keys(graph)
        .forEach(
            city => {

                distances[city] =
                    Infinity;

                previous[city] =
                    null;

            }
        );


    distances[start] = 0;


    // Main algorithm

    while (
        unvisited.size > 0
    ) {


        let current = null;


        // Find minimum distance

        for (
            const city of unvisited
        ) {

            if (
                current === null ||
                distances[city] <
                distances[current]
            ) {

                current = city;

            }

        }


        // No route

        if (
            current === null ||
            distances[current] === Infinity
        ) {

            break;

        }


        // Destination

        if (
            current === end
        ) {

            break;

        }


        unvisited.delete(
            current
        );


        // Check neighbors

        for (
            const neighbor
            in graph[current]
        ) {


            const weight =
                graph[
                    current
                ][
                    neighbor
                ];


            const newDistance =
                distances[
                    current
                ] +
                weight;


            if (
                newDistance <
                distances[
                    neighbor
                ]
            ) {

                distances[
                    neighbor
                ] =
                    newDistance;


                previous[
                    neighbor
                ] =
                    current;

            }

        }

    }


    // ========================================================
    // BUILD PATH
    // ========================================================

    const path = [];

    let current = end;


    while (
        current !== null
    ) {

        path.unshift(
            current
        );

        current =
            previous[current];

    }


    if (
        path.length === 1 &&
        path[0] !== start
    ) {

        return null;

    }


    return {

        distance:
            distances[end],

        path:
            path

    };

}



// ============================================================
// 7. MAP INITIALIZATION
// ============================================================

const map =
    L.map("map", {

        minZoom: 4,

        maxZoom: 10

    });


// India center

map.setView(
    [22.5, 79.0],
    5
);


// OpenStreetMap

L.tileLayer(
    "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    {

        maxZoom: 19,

        attribution:
            '&copy; OpenStreetMap contributors'

    }
).addTo(map);



// India bounds

const indiaBounds =
    [
        [6.5, 68.0],
        [37.5, 97.5]
    ];


map.setMaxBounds(
    indiaBounds
);



// ============================================================
// 8. MAP LAYERS
// ============================================================

const markerLayer =
    L.layerGroup().addTo(map);


const graphLayer =
    L.layerGroup().addTo(map);


const routeLayer =
    L.layerGroup().addTo(map);



// ============================================================
// 9. CUSTOM MARKER
// ============================================================

function createMarkerIcon(
    type = "normal"
) {


    let className =
        "city-marker";


    if (
        type === "start"
    ) {

        className =
            "start-marker";

    }


    if (
        type === "end"
    ) {

        className =
            "end-marker";

    }


    return L.divIcon({

        className: "",

        html:
            `<div class="${className}"></div>`,

        iconSize:
            type === "normal"
                ? [13,13]
                : [18,18],

        iconAnchor:
            type === "normal"
                ? [6,6]
                : [9,9]

    });

}



// ============================================================
// 10. CREATE CITY MARKERS
// ============================================================

function createCityMarkers() {


    markerLayer.clearLayers();


    cities.forEach(
        city => {


            const marker =
                L.marker(
                    [
                        city.lat,
                        city.lon
                    ],
                    {
                        icon:
                            createMarkerIcon()
                    }
                );


            marker.bindPopup(`

                <div class="popup">

                    <h3>
                        📍 ${city.name}
                    </h3>

                    <p>
                        <b>State:</b>
                        ${city.state}
                    </p>

                    <p>
                        <b>Latitude:</b>
                        ${city.lat}
                    </p>

                    <p>
                        <b>Longitude:</b>
                        ${city.lon}
                    </p>

                </div>

            `);


            markerLayer.addLayer(
                marker
            );

        }
    );


    document.getElementById(
        "cityCount"
    ).innerText =
        cities.length;

}



// ============================================================
// 11. DRAW GRAPH EDGES
// ============================================================

function drawGraph() {


    graphLayer.clearLayers();


    const drawn =
        new Set();


    Object.keys(graph)
        .forEach(
            cityName => {


                Object.keys(
                    graph[cityName]
                )
                .forEach(
                    neighbor => {


                        const id =
                            [
                                cityName,
                                neighbor
                            ]
                            .sort()
                            .join("-");


                        if (
                            drawn.has(id)
                        ) {

                            return;

                        }


                        drawn.add(id);


                        const city1 =
                            cityMap[
                                cityName
                            ];


                        const city2 =
                            cityMap[
                                neighbor
                            ];


                        const line =
                            L.polyline(
                                [
                                    [
                                        city1.lat,
                                        city1.lon
                                    ],
                                    [
                                        city2.lat,
                                        city2.lon
                                    ]
                                ],
                                {

                                    color:
                                        "#94a3b8",

                                    weight: 1,

                                    opacity: 0.45

                                }
                            );


                        line.bindTooltip(
                            graph[
                                cityName
                            ][
                                neighbor
                            ] +
                            " km",
                            {
                                sticky: true
                            }
                        );


                        graphLayer.addLayer(
                            line
                        );

                    }
                );

            }
        );

}



// ============================================================
// 12. FIND ROUTE
// ============================================================

function findRoute() {


    const start =
        document
            .getElementById(
                "startCity"
            )
            .value
            .trim();


    const end =
        document
            .getElementById(
                "endCity"
            )
            .value
            .trim();


    // Validate

    if (
        !cityMap[start]
    ) {

        alert(
            "Please select a valid city from the list."
        );

        return;

    }


    if (
        !cityMap[end]
    ) {

        alert(
            "Please select a valid destination city from the list."
        );

        return;

    }


    // Same city

    if (
        start === end
    ) {

        showResult(
            [start],
            0
        );

        return;

    }


    // Run Dijkstra

    const result =
        dijkstra(
            start,
            end
        );


    if (!result) {

        alert(
            "No route found."
        );

        return;

    }


    showResult(
        result.path,
        result.distance
    );


    drawShortestRoute(
        result.path
    );

}



// ============================================================
// 13. SHOW RESULT
// ============================================================

function showResult(
    path,
    distance
) {


    document.getElementById(
        "routeResult"
    ).innerText =
        "Route: " +
        path.join(" → ");


    document.getElementById(
        "distanceResult"
    ).innerText =
        "📏 Shortest Distance: " +
        distance +
        " km";


    document.getElementById(
        "citiesResult"
    ).innerText =
        "📍 Cities in route: " +
        path.length;


    // Direction

    if (
        path.length >= 2
    ) {


        const first =
            cityMap[
                path[0]
            ];


        const last =
            cityMap[
                path[
                    path.length - 1
                ]
            ];


        const direction =
            getDirection(
                first,
                last
            );


        document.getElementById(
            "directionResult"
        ).innerText =
            "🧭 Direction: " +
            direction;

    }


    // Visual route

    const routePath =
        document.getElementById(
            "routePath"
        );


    routePath.innerHTML = "";


    path.forEach(
        (cityName, index) => {


            const element =
                document.createElement(
                    "span"
                );


            element.className =
                "route-city";


            if (
                index === 0
            ) {

                element.classList.add(
                    "start"
                );

            }


            if (
                index ===
                path.length - 1
            ) {

                element.classList.add(
                    "destination"
                );

            }


            element.innerText =
                cityName;


            routePath.appendChild(
                element
            );


            if (
                index <
                path.length - 1
            ) {


                const arrow =
                    document.createElement(
                        "span"
                    );


                arrow.className =
                    "route-arrow";


                arrow.innerText =
                    "→";


                routePath.appendChild(
                    arrow
                );

            }

        }
    );

}



// ============================================================
// 14. DIRECTION
// ============================================================

function getDirection(
    start,
    end
) {


    const latDifference =
        end.lat -
        start.lat;


    const lonDifference =
        end.lon -
        start.lon;


    let vertical =
        "";


    let horizontal =
        "";


    if (
        latDifference > 2
    ) {

        vertical =
            "North";

    }
    else if (
        latDifference < -2
    ) {

        vertical =
            "South";

    }


    if (
        lonDifference > 2
    ) {

        horizontal =
            "East";

    }
    else if (
        lonDifference < -2
    ) {

        horizontal =
            "West";

    }


    if (
        vertical &&
        horizontal
    ) {

        return (
            vertical +
            "-" +
            horizontal
        );

    }


    if (
        vertical
    ) {

        return vertical;

    }


    if (
        horizontal
    ) {

        return horizontal;

    }


    return "Nearby";

}



// ============================================================
// 15. DRAW SHORTEST ROUTE
// ============================================================

function drawShortestRoute(
    path
) {


    // Remove previous route

    routeLayer.clearLayers();


    // Reset markers

    createCityMarkers();


    // Create coordinates

    const coordinates =
        path.map(
            cityName => {

                const city =
                    cityMap[
                        cityName
                    ];


                return [
                    city.lat,
                    city.lon
                ];

            }
        );


    // Green route

    const route =
        L.polyline(
            coordinates,
            {

                color:
                    "#16a34a",

                weight:
                    7,

                opacity:
                    0.9,

                lineCap:
                    "round",

                lineJoin:
                    "round"

            }
        );


    routeLayer.addLayer(
        route
    );


    // Start marker

    const start =
        cityMap[
            path[0]
        ];


    const startMarker =
        L.marker(
            [
                start.lat,
                start.lon
            ],
            {
                icon:
                    createMarkerIcon(
                        "start"
                    )
            }
        );


    startMarker.bindPopup(
        `
        <b>🟢 Starting City</b>
        <br>
        ${start.name}
        <br>
        ${start.state}
        `
    );


    routeLayer.addLayer(
        startMarker
    );


    // Destination

    const destination =
        cityMap[
            path[
                path.length - 1
            ]
        ];


    const endMarker =
        L.marker(
            [
                destination.lat,
                destination.lon
            ],
            {
                icon:
                    createMarkerIcon(
                        "end"
                    )
            }
        );


    endMarker.bindPopup(
        `
        <b>🔴 Destination</b>
        <br>
        ${destination.name}
        <br>
        ${destination.state}
        `
    );


    routeLayer.addLayer(
        endMarker
    );


    // Zoom to route

    map.fitBounds(
        route.getBounds(),
        {
            padding:
                [40,40]
        }
    );

}



// ============================================================
// 16. SWAP CITIES
// ============================================================

function swapCities() {


    const start =
        document.getElementById(
            "startCity"
        );


    const end =
        document.getElementById(
            "endCity"
        );


    const temp =
        start.value;


    start.value =
        end.value;


    end.value =
        temp;


    if (
        cityMap[start.value] &&
        cityMap[end.value]
    ) {

        findRoute();

    }

}



// ============================================================
// 17. CREATE SEARCH LIST
// ============================================================

function createCityList() {


    const list =
        document.getElementById(
            "cityList"
        );


    cities
        .sort(
            (a,b) =>
                a.name.localeCompare(
                    b.name
                )
        )
        .forEach(
            city => {


                const option =
                    document.createElement(
                        "option"
                    );


                option.value =
                    city.name;


                list.appendChild(
                    option
                );

            }
        );

}



// ============================================================
// 18. INITIALIZE
// ============================================================

createCityList();

createCityMarkers();

drawGraph();



// ============================================================
// 19. ENTER KEY
// ============================================================

document
    .getElementById(
        "startCity"
    )
    .addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter"
            ) {

                findRoute();

            }

        }
    );


document
    .getElementById(
        "endCity"
    )
    .addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter"
            ) {

                findRoute();

            }

        }
    );