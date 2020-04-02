
var icons = { parking: { icon: 'assets/map_point.png?w=500' } };


var airports = [
    { 
		title: 'Lochristi', 
		position: { 
			lat: 51.09664450731632, 
			lng: 3.8281345367431645 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Lochristi</span></li><li><label>Country</label><span>Belgium</span></li><li><label>Nodes</label><span>28</span></li></ul></div>'
	},
    { 
		title: 'Alaska', 
		position: { 
			lat: 61.60639637138628, 
			lng: -145.89843750000003 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Alaska</span></li><li><label>Country</label><span>United States</span></li><li><label>Nodes</label><span>06</span></li></ul></div>'
	},
    { 
		title: 'دبي', 
		position: { 
			lat: 25.266555556464247, 
			lng: 55.2897949051112 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>دبي</span></li><li><label>Country</label><span>United Arab Emirates</span></li><li><label>Nodes</label><span>170</span></li></ul></div>'
	},
    { 
		title: 'Schiedam', 
		position: { 
			lat: 51.90954352807477, 
			lng: 4.389638900756837 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Schiedam</span></li><li><label>Country</label><span>Netherlands</span></li><li><label>Nodes</label><span>02</span></li></ul></div>'
	},
    { 
		title: 'Oud-Heverlee', 
		position: { 
			lat: 50.83031968897146, 
			lng: 4.7267523407936105 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Oud-Heverlee</span></li><li><label>Country</label><span>Belgium</span></li><li><label>Nodes</label><span>01</span></li></ul></div>'
	},
    { 
		title: 'Gauteng', 
		position: { 
			lat: -26.065665246947532, 
			lng: 28.257110591512177 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Gauteng</span></li><li><label>Country</label><span>South Africa</span></li><li><label>Nodes</label><span>05</span></li></ul></div>'
	},
    { 
		title: 'Ticino', 
		position: { 
			lat: 46.02342562889852, 
			lng: 8.91721200936445 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Ticino</span></li><li><label>Country</label><span>Switzerland</span></li><li><label>Nodes</label><span>128</span></li></ul></div>'
	},
    { 
		title: 'دبي', 
		position: { 
			lat: 25.16517336866393, 
			lng: 55.33813476562501 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>دبي</span></li><li><label>Country</label><span>United Arab Emirates</span></li><li><label>Nodes</label><span>03</span></li></ul></div>'
	},
    { 
		title: 'Warszawa', 
		position: { 
			lat: 52.230322866646965, 
			lng: 21.013069152832035 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Warszawa</span></li><li><label>Country</label><span>Poland</span></li><li><label>Nodes</label><span>01</span></li></ul></div>'
	},
    { 
		title: 'Weert', 
		position: { 
			lat: 51.25005427137918, 
			lng: 5.711517333984376 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Weert</span></li><li><label>Country</label><span>Netherlands</span></li><li><label>Nodes</label><span>01</span></li></ul></div>'
	},
    { 
		title: 'Köln', 
		position: { 
			lat: 50.93764822282523, 
			lng: 6.935210824012756 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Köln</span></li><li><label>Country</label><span>Germany</span></li><li><label>Nodes</label><span>02</span></li></ul></div>'
	},
    { 
		title: 'أبو ظبي', 
		position: { 
			lat: 24.926294766395593, 
			lng: 54.60205078125001 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>أبو ظبي</span></li><li><label>Country</label><span>United Arab Emirates</span></li><li><label>Nodes</label><span>01</span></li></ul></div>'
	},
    { 
		title: 'Lier', 
		position: { 
			lat: 51.149124403317614, 
			lng: 4.539091587066651 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Lier</span></li><li><label>Country</label><span>Belgium</span></li><li><label>Nodes</label><span>06</span></li></ul></div>'
	},
    { 
		title: 'Lochristi', 
		position: { 
			lat: 51.096296160341446, 
			lng: 3.835346326231957 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Lochristi</span></li><li><label>Country</label><span>Belgium</span></li><li><label>Nodes</label><span>09</span></li></ul></div>'
	},
    { 
		title: 'Toronto', 
		position: { 
			lat: 43.642162498722, 
			lng: -79.382700920105 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Toronto</span></li><li><label>Country</label><span>Canada</span></li><li><label>Nodes</label><span>18</span></li></ul></div>'
	},
    { 
		title: 'Durbanville', 
		position: { 
			lat: -33.86856263472932, 
			lng: 18.644742965698246 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Durbanville</span></li><li><label>Country</label><span>South Africa</span></li><li><label>Nodes</label><span>04</span></li></ul></div>'
	},
    { 
		title: 'Rochester', 
		position: { 
			lat: 43.16775192759528, 
			lng: -77.67215967178346 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Rochester</span></li><li><label>Country</label><span>United States</span></li><li><label>Nodes</label><span>09</span></li></ul></div>'
	},
    { 
		title: 'Wien', 
		position: { 
			lat: 48.27059727028109, 
			lng: 16.407759189605716 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Wien</span></li><li><label>Country</label><span>Austria</span></li><li><label>Nodes</label><span>04</span></li></ul></div>'
	},
    { 
		title: 'Wien', 
		position: { 
			lat: 48.16040335893768, 
			lng: 16.340435743331913 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Wien</span></li><li><label>Country</label><span>Austria</span></li><li><label>Nodes</label><span>18</span></li></ul></div>'
	},
    { 
		title: 'Barendrecht', 
		position: { 
			lat: 51.856135537025224, 
			lng: 4.536203518509866 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Barendrecht</span></li><li><label>Country</label><span>Netherlands</span></li><li><label>Nodes</label><span>01</span></li></ul></div>'
	},
    { 
		title: 'Aartselaar', 
		position: { 
			lat: 51.14090952254201, 
			lng: 4.374618530273438 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Aartselaar</span></li><li><label>Country</label><span>Belgium</span></li><li><label>Nodes</label><span>01</span></li></ul></div>'
	},
    { 
		title: 'Lochristi', 
		position: { 
			lat: 51.09228359512078, 
			lng: 3.820232748985291 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Lochristi</span></li><li><label>Country</label><span>Belgium</span></li><li><label>Nodes</label><span>01</span></li></ul></div>'
	},
    { 
		title: 'Warszawa', 
		position: { 
			lat: 52.17006539646939, 
			lng: 21.015291202074877 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Warszawa</span></li><li><label>Country</label><span>Poland</span></li><li><label>Nodes</label><span>01</span></li></ul></div>'
	},
    { 
		title: 'Concord', 
		position: { 
			lat: 37.97834296129211, 
			lng: -122.03347061527894 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Concord</span></li><li><label>Country</label><span>United States</span></li><li><label>Nodes</label><span>01</span></li></ul></div>'
	},
    { 
		title: 'Дніпропетровська область', 
		position: { 
			lat: 48.63018576693964, 
			lng: 35.29220581054688 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Дніпропетровська область</span></li><li><label>Country</label><span>Ukraine</span></li><li><label>Nodes</label><span>02</span></li></ul></div>'
	},
    { 
		title: 'Aartselaar', 
		position: { 
			lat: 51.14090952254201, 
			lng: 4.374618530273438 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Aartselaar</span></li><li><label>Country</label><span>Belgium</span></li><li><label>Nodes</label><span>03</span></li></ul></div>'
	},
    { 
		title: 'Vlaanderen', 
		position: { 
			lat: 50.98790556596047, 
			lng: 4.649453759193421 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Vlaanderen</span></li><li><label>Country</label><span>Belgium</span></li><li><label>Nodes</label><span>01</span></li></ul></div>'
	},
    { 
		title: 'Concord', 
		position: { 
			lat: 37.97831405574922, 
			lng: -122.03345603076744 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Concord</span></li><li><label>Country</label><span>United States</span></li><li><label>Nodes</label><span>01</span></li></ul></div>'
	},
    { 
		title: 'Birmingham', 
		position: { 
			lat: 52.44109014225428, 
			lng: -1.8105340003967287 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Birmingham</span></li><li><label>Country</label><span>United Kingdom</span></li><li><label>Nodes</label><span>03</span></li></ul></div>'
	},
    { 
		title: 'Destelbergen', 
		position: { 
			lat: 51.061713336920846, 
			lng: 3.8300013542175293 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Destelbergen</span></li><li><label>Country</label><span>Belgium </span></li><li><label>Nodes</label><span>01</span></li></ul></div>'
	},
    { 
		title: 'Boulder', 
		position: { 
			lat: 40.04504858287719, 
			lng: -105.25789742125201 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Boulder</span></li><li><label>Country</label><span>United States</span></li><li><label>Nodes</label><span>01</span></li></ul></div>'
	},
    { 
		title: 'Schiedam', 
		position: { 
			lat: 51.91214856181646, 
			lng: 4.398221969604493 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Schiedam</span></li><li><label>Country</label><span>Netherlands</span></li><li><label>Nodes</label><span>01</span></li></ul></div>'
	},
    { 
		title: 'Schiedam', 
		position: { 
			lat: 51.91214855858486, 
			lng: 4.398651123046876 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Schiedam</span></li><li><label>Country</label><span>Netherlands</span></li><li><label>Nodes</label><span>01</span></li></ul></div>'
	},
    { 
		title: 'الرياض', 
		position: { 
			lat: 24.755795057377334, 
			lng: 46.76725387573243 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>الرياض</span></li><li><label>Country</label><span>Saudi Arabia</span></li><li><label>Nodes</label><span>01</span></li></ul></div>'
	},
    { 
		title: 'Sundern', 
		position: { 
			lat: 51.32985870965855, 
			lng: 8.005771636308054 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Sundern</span></li><li><label>Country</label><span>Germany</span></li><li><label>Nodes</label><span>02</span></li></ul></div>'
	},
    { 
		title: 'Hulshout', 
		position: { 
			lat: 51.060386316691016, 
			lng: 4.82351303100586 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Hulshout</span></li><li><label>Country</label><span>Belgium</span></li><li><label>Nodes</label><span>02</span></li></ul></div>'
	},
    { 
		title: 'Ticino', 
		position: { 
			lat: 46.02291606576514, 
			lng: 8.916912674903871 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Ticino</span></li><li><label>Country</label><span>Switzerland</span></li><li><label>Nodes</label><span>96</span></li></ul></div>'
	},
    { 
		title: 'Ticino', 
		position: { 
			lat: 46.02291234087083, 
			lng: 8.91695022583008 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Ticino</span></li><li><label>Country</label><span>Switzerland</span></li><li><label>Nodes</label><span>91</span></li></ul></div>'
	},
    { 
		title: 'Дніпро', 
		position: { 
			lat: 48.46622897984319, 
			lng: 35.04106521606446 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Дніпро</span></li><li><label>Country</label><span>Ukraine</span></li><li><label>Nodes</label><span>02</span></li></ul></div>'
	},
    { 
		title: 'Дніпро', 
		position: { 
			lat: 48.45835188280866, 
			lng: 35.096923769451685 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Дніпро</span></li><li><label>Country</label><span>Ukraine</span></li><li><label>Nodes</label><span>01</span></li></ul></div>'
	},
    { 
		title: 'الغردقة', 
		position: { 
			lat: 27.188196663796806, 
			lng: 33.82141113281251 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>الغردقة</span></li><li><label>Country</label><span>Egypt</span></li><li><label>Nodes</label><span>03</span></li></ul></div>'
	},
    { 
		title: 'Wien', 
		position: { 
			lat: 48.143685582417575, 
			lng: 16.319160461425785 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Wien</span></li><li><label>Country</label><span>Austria</span></li><li><label>Nodes</label><span>03</span></li></ul></div>'
	},
    { 
		title: 'Köln', 
		position: { 
			lat: 50.9214083026679, 
			lng: 6.919691562652589 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Köln</span></li><li><label>Country</label><span>Germany</span></li><li><label>Nodes</label><span>01</span></li></ul></div>'
	},
    { 
		title: 'Köln', 
		position: { 
			lat: 50.9214083026679, 
			lng: 6.919691562652589 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Köln</span></li><li><label>Country</label><span>Germany</span></li><li><label>Nodes</label><span>01</span></li></ul></div>'
	},
    { 
		title: 'Wijdemeren', 
		position: { 
			lat: 52.198503922253195, 
			lng: 5.133490562602675 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Wijdemeren</span></li><li><label>Country</label><span>Netherlands</span></li><li><label>Nodes</label><span>01</span></li></ul></div>'
	},
    { 
		title: 'Wien', 
		position: { 
			lat: 48.16909794363317, 
			lng: 16.33302748203278 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Wien</span></li><li><label>Country</label><span>Austria</span></li><li><label>Nodes</label><span>03</span></li></ul></div>'
	},
    { 
		title: 'Grigorievca', 
		position: { 
			lat: 46.6795944656402, 
			lng: 29.311523437500004 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Grigorievca</span></li><li><label>Country</label><span>Moldova, Republic of</span></li><li><label>Nodes</label><span>01</span></li></ul></div>'
	},
    { 
		title: 'Warszawa', 
		position: { 
			lat: 52.24091986323397, 
			lng: 21.009704656898975 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Warszawa</span></li><li><label>Country</label><span>Poland</span></li><li><label>Nodes</label><span>01</span></li></ul></div>'
	},
    { 
		title: 'Дніпро', 
		position: { 
			lat: 48.42920055556841, 
			lng: 35.09033203125001 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Дніпро</span></li><li><label>Country</label><span>Ukraine</span></li><li><label>Nodes</label><span>02</span></li></ul></div>'
	},
    { 
		title: 'Дніпро', 
		position: { 
			lat: 48.4456002497571, 
			lng: 35.06066891597584 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Дніпро</span></li><li><label>Country</label><span>Ukraine</span></li><li><label>Nodes</label><span>01</span></li></ul></div>'
	},
    { 
		title: 'Frankfurt', 
		position: { 
			lat: 50.128763469181415, 
			lng: 8.601227402687075 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Frankfurt</span></li><li><label>Country</label><span>Germany</span></li><li><label>Nodes</label><span>16</span></li></ul></div>'
	},
    { 
		title: 'Lochristi', 
		position: { 
			lat: 51.09259086420128, 
			lng: 3.819808959960938 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Lochristi</span></li><li><label>Country</label><span>Belgium</span></li><li><label>Nodes</label><span>04</span></li></ul></div>'
	},
    { 
		title: 'Heerlen', 
		position: { 
			lat: 50.88274807565101, 
			lng: 5.972995162010194 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Heerlen</span></li><li><label>Country</label><span>Netherlands</span></li><li><label>Nodes</label><span>01</span></li></ul></div>'
	},
    { 
		title: 'Дніпро', 
		position: { 
			lat: 48.46053755233291, 
			lng: 35.03128051757813 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Дніпро</span></li><li><label>Country</label><span>Ukraine</span></li><li><label>Nodes</label><span>01</span></li></ul></div>'
	},
    { 
		title: 'أبوظبي', 
		position: { 
			lat: 24.46840062647489, 
			lng: 54.36996459960938 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>أبوظبي</span></li><li><label>Country</label><span>United Arab Emirates</span></li><li><label>Nodes</label><span>02</span></li></ul></div>'
	},
    { 
		title: 'Дніпро', 
		position: { 
			lat: 48.44450682721397, 
			lng: 35.12109332252294 }, 
		icon: 'parking',	
		content: '<div id="content"><div id="siteNotice"></div><div class="image"><img src="assets/active_nodes.png"></div><ul><li><label>City</label><span>Дніпро</span></li><li><label>Country</label><span>Ukraine</span></li><li><label>Nodes</label><span>01</span></li></ul></div>'
	},
];

function initMap() {
	
	var middle = { 
		lat: 14.473609, 
		lng: -16.7618486 
	};
	
	var map = new google.maps.Map( document.getElementById('map'), {
	  zoom: 2,
	  center: middle, 
	  disableDefaultUI: false,
	  styles: [
                      {
                        "elementType": "geometry",
                        "stylers": [
                          {
                            "color": "#c5c5c5"
                          }
                        ]
                      },
                      {
                        "elementType": "labels.icon",
                        "stylers": [
                          {
                            "visibility": "off"
                          }
                        ]
                      },
                      {
                        "elementType": "labels.text.fill",
                        "stylers": [
                          {
                           "visibility": "off"
                          }
                        ]
                      },
                      {
                        "elementType": "labels.text.stroke",
                        "stylers": [
                          {
                            "visibility": "off"
                          }
                        ]
                      },
                      {
                        "featureType": "administrative.land_parcel",
                        "elementType": "labels.text.fill",
                        "stylers": [
                          {
                            "color": "#bdbdbd"
                          }
                        ]
                      },
                      {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [
                          {
                            "color": "#eeeeee"
                          }
                        ]
                      },
                      {
                        "featureType": "poi",
                        "elementType": "labels.text.fill",
                        "stylers": [
                          {
                            "color": "#757575"
                          }
                        ]
                      },
                      {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [
                          {
                            "color": "#e5e5e5"
                          }
                        ]
                      },
                      {
                        "featureType": "poi.park",
                        "elementType": "labels.text.fill",
                        "stylers": [
                          {
                            "color": "#9e9e9e"
                          }
                        ]
                      },
                      {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [
                          {
                            "color": "#ffffff"
                          }
                        ]
                      },
                      {
                        "featureType": "road.arterial",
                        "elementType": "labels.text.fill",
                        "stylers": [
                          {
                            "color": "#757575"
                          }
                        ]
                      },
                      {
                        "featureType": "road.highway",
                        "elementType": "geometry",
                        "stylers": [
                          {
                            "color": "#dadada"
                          }
                        ]
                      },
                      {
                        "featureType": "road.highway",
                        "elementType": "labels.text.fill",
                        "stylers": [
                          {
                            "color": "#616161"
                          }
                        ]
                      },
                      {
                        "featureType": "road.local",
                        "elementType": "labels.text.fill",
                        "stylers": [
                          {
                            "color": "#9e9e9e"
                          }
                        ]
                      },
                      {
                        "featureType": "transit.line",
                        "elementType": "geometry",
                        "stylers": [
                          {
                            "color": "#e5e5e5"
                          }
                        ]
                      },
                      {
                        "featureType": "transit.station",
                        "elementType": "geometry",
                        "stylers": [
                          {
                            "color": "#eeeeee"
                          }
                        ]
                      },
                      {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                          {
                            "color": "#f2f2f2"
                          }
                        ]
                      },
                      {
                        "featureType": "water",
                        "elementType": "labels.text.fill",
                        "stylers": [
                          {
                            "color": "#f2f2f2"
                          }
                        ]
                      }
                    ],
	});
		  
	var InfoWindows = new google.maps.InfoWindow({});
	
	airports.forEach(function(airport) {	
		var marker = new google.maps.Marker({
		  position: { lat: airport.position.lat, lng: airport.position.lng },
		  map: map,
		  icon: icons[airport.icon].icon,
		  title: airport.title
		});
		marker.addListener('click', function() {
		  InfoWindows.open(map, this);
		  InfoWindows.setContent(airport.content);
		});
	});
}