FT.manifest({
    "filename": "index.html",
    "width": 160,
    "height": 600,
    "clickTagCount": 1,
    "hideBrowsers": ["ie8"],
    "richloads": [
 		{"name":"main_rl", "src":"JetBlue_Card_Phase1_160x600_RL1"}
 	],
    "instantAds": [
        {"name":"main_rl",          "type":"richload"}, 
        {"name":"clickTag1_url",    "type":"text", "default":"http://www.landingpageurl.com/?blahblah"}
    ]
});