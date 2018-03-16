let cities = [
  "Singer", "Washington","Suitland", "Groton", "Yonah", "Grimsley","Tampico", "Roy","Loveland", "Alleghenyvi","Coinjock", "Cleary", "Edinburg",
  "Caledonia", "Farmington","Winston", "Wolcott", "Northchase","Nadine", "Cetronia", "Klondike", "Hillsboro", "Kerby", "Lacomb", "Juarez", 
  "Russellvill","Rockingham","Marshall","Gardiner","Sena","Day","Wildwood", "Genoa", "Austinburg","Cobbtown", "Trinway", "Crenshaw", 
  "Grahamtown", "Westwood", "Caroline", "Bawcomville", "Cumberland","Teasdale", "Rushford", "Oley", "Dennard", "Libertytown",
  "Harrodsburg","Kansas", "Crisman", "Itmann", "Homeland", "Hickory", "Thynedale", "Richford", "Cataract", "Ruckersvill",
  "Elfrida", "Woodruff", "Sims", "Enoree", "Grandview", "Baden", "Masthope", "Jacumba", "Grapeview", "Waverly", "Troy", "Dragoon", "Lewis", 
  "Ona","Mappsville","Duryea", "Roderfield","Cutter", "Sunbury", "Hannasville","Blanford", "Morningside","Reno", "Beaverdale","Madrid", 
  "Norwood", "Eagletown", "Topanga", "Biddle", "Caroleen", "Kipp", "Wyoming", "Tecolotito","Dargan", "Verdi", "Bentley", "Calvary", 
  "Fruitdale", "Rivereno", "Belgreen", "Grenelefe", "Rew","Cade", "Brazos", "Dixie", "Greenwich", "Frystown", "Brethren", "Southview", 
  "Corinne", "Utting", "Floris", "Bennett", "Crayne", "Condon", "Allensworth","Tooleville","Skyland", "Boonville", "Glenshaw", "Winesburg",
  "Caron", "Cassel", "Walton", "Otranto", "Aberdeen", "Leroy", "Gallina", "Eden", "Naomi", "Oberlin", "Orason", "Hebron", "Vandiver", 
  "Fairmount", "Tivoli", "Fivepointvi", "Valle", "Maplewood", "Belva", "Waikele", "Walker", "Hamilton", "Greenbackvi", "Chloride", 
  "Lowgap", "Independenc","Crown", "Leyner", "Wedgewood", "Cavalero", "Strong", "Darbydale", "Hoehne", "Jessie", "Coral", "Vowinckel", "Urie",
  "Harold", "Roosevelt", "Richville", "Blodgett", "Lund", "Cowiche", "Bath", "Omar", "Navarre", "Nogal", "Craig", "Curtice", "Garberville",
  "Turah", "Farmers", "Smock", "Lindisfarne", "Sisquoc", "Westmorelan", "Eggertsvill", "Graziervill","Woodlands", "Soudan", "Lorraine", 
  "Selma", "Greenock", "Brule", "Winchester", "Cecilia", "Sexton", "Kiskimere", "Bladensburg", "Echo", "Freeburn", "Whitmer", "Florence",
  "Bascom", "Bancroft", "Rote", "Henrietta", "Emory", "Belfair", "Crucible", "Marbury", "Avoca", "Albrightsvi","Germanton", "Dupuyer", 
  "Weogufka", "Lowell", "Wiscon", "Barclay", "Allison", "Summertown","Coventry", "Salvo", "Sugartown", "Sehili", "Enetai", "Hanover", 
  "Hiwasse", "Dale", "Oceola", "Outlook", "Weeksville","Reinerton", "Celeryville","Stockwell", "Needmore", "Bainbridge", "Kidder", "Gasquet",
  "Snelling", "Toftrees", "Wattsville","Hatteras", "Alamo", "Ribera", "Muir", "Takilma", "Wakulla", "Kent", "Boyd", "Catharine", "Orin", 
  "Fingerville","Ballico", "Dowling", "Finderne", "Como", "Lumberton", "Shelby", "Oasis", "Saranap", "Hilltop", "Croom", "Blende", "Terlingua",
  "Loretto", "Summerset", "Canoochee", "Ruffin", "Why","Harmon", "Hoagland", "Bowmansvill","Chilton", "Zortman", "Gerton", "Devon", 
  "Dellview", "Brogan", "Bluffview", "Kilbourne", "Limestone", "Abrams", "Chicopee", "Downsville","Ivanhoe", "Dexter", "Brownlee", "Abiquiu",
  "Edneyville","Bartonsvill","Virgie", "Nord", "Goldfield", "Cedarville","Ferney", "Lindcove", "Defiance", "Inkerman", "Levant", 
  "Rosburg", "Emison", "Maury", "Gambrills", "Rivera", "Bordelonvil","Ypsilanti", "Delwood", "Ezel", "Waterford", "Jackpot", 
  "Camino", "Sylvanite", "Nescatunga", "Matheny", "Guthrie", "Wacissa", "Movico", "Sultana", "Breinigsvil", "Nettie", 
  "Sanborn", "Bethany", "Coyote", "Rockhill", "Gilmore", "Colton", "Deltaville","Waterview", "Glenville", "Rutherford","Chamberino",
  "Fairview", "Vienna", "Coleville", "Dodge", "Ola","Idledale", "Kapowsin", "Santel", "Chical", "Finzel", "Orviston", "Caln", "Gerber", 
  "Tuskahoma", "Somerset", "Drummond", "Dorneyville","Comptche", "Campo", "Greer", "Talpa", "Vallonia", "Sparkill", "Leming", "Chemung", 
  "Barstow", "Sardis", "Biehle", "Choctaw", "Wakarusa", "Machias", "Driftwood", "Edmund", "Temperancev","Laurelton", "Axis", "Brady", 
  "Cashtown", "Westphalia","Kenmar", "Siglerville","Stouchsburg","Avalon", "Wilmington","Jardine", "Urbana", "Wikieup", "Glidden", "Buxton",
  "Caspar", "Coultervill","Lookingglas","Salix", "Wheaton", "Edenburg", "Frank", "Carlton", "Ventress", "Holcombe", "Gibsonia", 
  "Brantleyvil","Chaparrito","Tedrow", "Callaghan", "Wyano", "Watchtower","Chapin", "Columbus", "Loyalhanna","Lavalette", "Neahkahnie",
  "Dubois", "Barrelville","Herbster", "Shawmut", "Orick", "Leola", "Nanafalia", "Swartzville","Kennedyvill","Kirk", "Retsof", "Boykin", "Felt",
  "Stagecoach","Unionville", "San Francisco", "Okland", "Discovery bay", "Antioch", "Brentwood"
];


module.exports.cities = cities;

    