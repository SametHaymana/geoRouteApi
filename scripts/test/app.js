var mymap = L.map('mapid').setView([41.0082, 28.9784], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(mymap);

var pathData = 
    [
        {lat: 41.0846039, lon: 28.7862778},
        {lat: 41.0845131, lon: 28.786222},
        {lat: 41.0846408, lon: 28.7858444},
        {lat: 41.0847785, lon: 28.7854368},
        {lat: 41.084904, lon: 28.7850658},
        {lat: 41.0849321, lon: 28.7849825},
        {lat: 41.0850354, lon: 28.7846531},
        {lat: 41.0827334, lon: 28.7856166},
        {lat: 41.0823866, lon: 28.786466},
        {lat: 41.0823027, lon: 28.7869639},
        {lat: 41.0822197, lon: 28.7874389},
        {lat: 41.0821838, lon: 28.7875531},
        {lat: 41.0799752, lon: 28.7936439},
        {lat: 41.0798751, lon: 28.7939255},
        {lat: 41.0795033, lon: 28.7943768},
        {lat: 41.0790413, lon: 28.7953255},
        {lat: 41.0787572, lon: 28.7959016},
        {lat: 41.078439, lon: 28.7964954},
        {lat: 41.0783444, lon: 28.7966348},
        {lat: 41.0781806, lon: 28.7968513},
        {lat: 41.0775386, lon: 28.7974793},
        {lat: 41.077435, lon: 28.7975843},
        {lat: 41.0773168, lon: 28.7977016},
        {lat: 41.0771169, lon: 28.797901},
        {lat: 41.0757156, lon: 28.7990799},
        {lat: 41.0754271, lon: 28.7993166},
        {lat: 41.0741884, lon: 28.8003158},
        {lat: 41.0737879, lon: 28.8008349},
        {lat: 41.0721606, lon: 28.8026842},
        {lat: 41.0720597, lon: 28.802804},
        {lat: 41.0710222, lon: 28.8039773},
        {lat: 41.0709318, lon: 28.8040771},
        {lat: 41.0705988, lon: 28.8044426},
        {lat: 41.0699561, lon: 28.8051459},
        {lat: 41.0699022, lon: 28.8052318},
        {lat: 41.0700103, lon: 28.8092848},
        {lat: 41.0701436, lon: 28.8101825},
        {lat: 41.0701359, lon: 28.810606},
        {lat: 41.0700935, lon: 28.8124598},
        {lat: 41.070128, lon: 28.813528},
        {lat: 41.0701366, lon: 28.8140518},
        {lat: 41.070108, lon: 28.8143665},
        {lat: 41.0698733, lon: 28.8148023},
        {lat: 41.0707857, lon: 28.819826},
        {lat: 41.0706856, lon: 28.8202755},
        {lat: 41.0705694, lon: 28.8207476},
        {lat: 41.0701348, lon: 28.8226593},
        {lat: 41.0701122, lon: 28.8228087},
        {lat: 41.0699989, lon: 28.8235487},
        {lat: 41.0699521, lon: 28.8244247},
        {lat: 41.069951, lon: 28.8245705},
        {lat: 41.0699509, lon: 28.8249613},
        {lat: 41.0699481, lon: 28.8255559},
        {lat: 41.0699453, lon: 28.8258371},
        {lat: 41.0698672, lon: 28.8270456},
        {lat: 41.0697598, lon: 28.8280758},
        {lat: 41.069685, lon: 28.8287779},
        {lat: 41.0695947, lon: 28.8291214},
        {lat: 41.069435, lon: 28.8295228},
        {lat: 41.0693093, lon: 28.8298142},
        {lat: 41.069004, lon: 28.8304869},
        {lat: 41.0689865, lon: 28.8305307},
        {lat: 41.0686415, lon: 28.8313491},
        {lat: 41.0684514, lon: 28.8318277},
        {lat: 41.0673633, lon: 28.8325412},
        {lat: 41.0666551, lon: 28.8324805},
        {lat: 41.0663919, lon: 28.8324736},
        {lat: 41.0663915, lon: 28.8326218},
        {lat: 41.0662291, lon: 28.8326252},
        {lat: 41.0635892, lon: 28.8329007},
        {lat: 41.0636911, lon: 28.8330167},
        {lat: 41.0635157, lon: 28.8349091},
        {lat: 41.0632356, lon: 28.8364102},
        {lat: 41.0620907, lon: 28.8388253},
        {lat: 41.061649, lon: 28.8394297},
        {lat: 41.0603865, lon: 28.8414171},
        {lat: 41.0590554, lon: 28.8433455},
        {lat: 41.0581956, lon: 28.8446107},
        {lat: 41.0572797, lon: 28.8461909},
        {lat: 41.0571466, lon: 28.8464539},
        {lat: 41.0568317, lon: 28.8470946},
        {lat: 41.0566581, lon: 28.847386},
        {lat: 41.0564835, lon: 28.847679},
        {lat: 41.0559215, lon: 28.8489605},
        {lat: 41.0558164, lon: 28.8493431},
        {lat: 41.0556834, lon: 28.8498273},
        {lat: 41.0555521, lon: 28.8503611},
        {lat: 41.0552361, lon: 28.8518676},
        {lat: 41.0551641, lon: 28.8522936},
        {lat: 41.0550936, lon: 28.8526203},
        {lat: 41.0550012, lon: 28.8529371},
        {lat: 41.0548004, lon: 28.8534496},
        {lat: 41.0545191, lon: 28.8547402},
        {lat: 41.0545002, lon: 28.8548327},
        {lat: 41.054117, lon: 28.8556787},
        {lat: 41.0541078, lon: 28.8558874},
        {lat: 41.0540808, lon: 28.8565885},
        {lat: 41.0540061, lon: 28.8572875},
        {lat: 41.0535746, lon: 28.8584612},
        {lat: 41.0535147, lon: 28.8586039},
        {lat: 41.0533754, lon: 28.8590205},
        {lat: 41.0532636, lon: 28.8594328},
        {lat: 41.0531818, lon: 28.859822},
        {lat: 41.0531257, lon: 28.860019},
        {lat: 41.0530782, lon: 28.8602362},
        {lat: 41.0529804, lon: 28.8604287},
        {lat: 41.0528834, lon: 28.8604756},
        {lat: 41.0529065, lon: 28.860609},
        {lat: 41.0527783, lon: 28.8610175},
        {lat: 41.0526998, lon: 28.861202},
        {lat: 41.0526087, lon: 28.8614722},
        {lat: 41.0525396, lon: 28.8618151},
        {lat: 41.0524786, lon: 28.8621182},
        {lat: 41.0524644, lon: 28.862262},
        {lat: 41.0523448, lon: 28.8627103},
        {lat: 41.052226, lon: 28.8631362},
        {lat: 41.0522203, lon: 28.8631566},
        {lat: 41.0521311, lon: 28.8634345},
        {lat: 41.0520585, lon: 28.8636609},
        {lat: 41.0520386, lon: 28.8636959},
        {lat: 41.0519451, lon: 28.8639749},
        {lat: 41.0518256, lon: 28.864352},
        {lat: 41.0518138, lon: 28.8650453},
        {lat: 41.0518364, lon: 28.8653281},
        {lat: 41.0516687, lon: 28.8653566},
        {lat: 41.0510248, lon: 28.8654794},
        {lat: 41.0505525, lon: 28.8655732},
        {lat: 41.0501025, lon: 28.8659217},
        {lat: 41.0497561, lon: 28.8663389},
        {lat: 41.0496199, lon: 28.8665482},
        {lat: 41.0492108, lon: 28.8671776},
        {lat: 41.049141, lon: 28.8672717},
        {lat: 41.0490064, lon: 28.8674902},
        {lat: 41.0488579, lon: 28.8677434},
        {lat: 41.0486341, lon: 28.8682781},
        {lat: 41.0484608, lon: 28.8687156},
        {lat: 41.0482802, lon: 28.8691546},
        {lat: 41.048227, lon: 28.8692839},
        {lat: 41.0481695, lon: 28.8694237},
        {lat: 41.0480142, lon: 28.8696938},
        {lat: 41.0477991, lon: 28.8699531},
        {lat: 41.0477472, lon: 28.8700156},
        {lat: 41.0475827, lon: 28.8702125},
        {lat: 41.0474682, lon: 28.8703604},
        {lat: 41.0473771, lon: 28.8704781},
        {lat: 41.0472183, lon: 28.8707793},
        {lat: 41.0469743, lon: 28.8712425},
        {lat: 41.046702, lon: 28.8718131},
        {lat: 41.0466879, lon: 28.8719161},
        {lat: 41.0466117, lon: 28.8722256},
        {lat: 41.0465323, lon: 28.8725481},
        {lat: 41.0465045, lon: 28.8726611},
        {lat: 41.0464168, lon: 28.8730966},
        {lat: 41.0463589, lon: 28.8734152},
        {lat: 41.0463319, lon: 28.8735325},
        {lat: 41.0463017, lon: 28.8736806},
        {lat: 41.0461952, lon: 28.8740503},
        {lat: 41.0460134, lon: 28.8743828},
        {lat: 41.0459201, lon: 28.874477},
        {lat: 41.0455929, lon: 28.8747695},
        {lat: 41.0454331, lon: 28.8748543},
        {lat: 41.0451262, lon: 28.8754882},
        {lat: 41.0449951, lon: 28.8758461},
        {lat: 41.0448324, lon: 28.8762954},
        {lat: 41.0447189, lon: 28.8766045},
        {lat: 41.0446978, lon: 28.8766621},
        {lat: 41.0446397, lon: 28.8768204},
        {lat: 41.0445298, lon: 28.8771195},
        {lat: 41.0444306, lon: 28.8773896},
        {lat: 41.0443714, lon: 28.8775508},
        {lat: 41.044199, lon: 28.8781567},
        {lat: 41.0442087, lon: 28.8784225},
        {lat: 41.0440616, lon: 28.8788257},
        {lat: 41.0439849, lon: 28.8790763},
        {lat: 41.0439399, lon: 28.879317},
        {lat: 41.0438989, lon: 28.8794229},
        {lat: 41.043808, lon: 28.8798286},
        {lat: 41.0437223, lon: 28.879882},
        {lat: 41.0433694, lon: 28.8800597},
        {lat: 41.0425842, lon: 28.8805097},
        {lat: 41.0420298, lon: 28.881341},
        {lat: 41.0418567, lon: 28.8815638},
        {lat: 41.0418067, lon: 28.8816074},
        {lat: 41.0415289, lon: 28.8819114},
        {lat: 41.0412875, lon: 28.8821536},
        {lat: 41.0411845, lon: 28.8822713},
        {lat: 41.040701, lon: 28.8828438},
        {lat: 41.0403799, lon: 28.8832306},
        {lat: 41.0403464, lon: 28.8832937},
        {lat: 41.0402318, lon: 28.8835027},
        {lat: 41.0400079, lon: 28.8837522},
        {lat: 41.0397824, lon: 28.8839192},
        {lat: 41.0389835, lon: 28.8844174},
        {lat: 41.0378676, lon: 28.8852537},
        {lat: 41.0370001, lon: 28.8860983},
        {lat: 41.0369343, lon: 28.8861712},
        {lat: 41.0367148, lon: 28.8866613},
        {lat: 41.0366435, lon: 28.8868942},
        {lat: 41.0364475, lon: 28.8875025},
        {lat: 41.036378, lon: 28.8876747},
        {lat: 41.0363442, lon: 28.8877606},
        {lat: 41.0363142, lon: 28.8878258},
        {lat: 41.0362979, lon: 28.8878533},
        {lat: 41.0360095, lon: 28.8883207},
        {lat: 41.035818, lon: 28.8886427},
        {lat: 41.0357009, lon: 28.8889761},
        {lat: 41.0356043, lon: 28.8894319},
        {lat: 41.0355618, lon: 28.8899071},
        {lat: 41.035538, lon: 28.8902573},
        {lat: 41.0355233, lon: 28.8903662},
        {lat: 41.0354701, lon: 28.89083},
        {lat: 41.0353968, lon: 28.8912775},
        {lat: 41.0352806, lon: 28.8917495},
        {lat: 41.0351711, lon: 28.8922043},
        {lat: 41.0350781, lon: 28.8924781},
        {lat: 41.0349752, lon: 28.8926786},
        {lat: 41.0348193, lon: 28.8929202},
        {lat: 41.0339334, lon: 28.8943779},
        {lat: 41.0339715, lon: 28.8948335},
        {lat: 41.0339234, lon: 28.8948418},
        {lat: 41.0339772, lon: 28.8952975},
        {lat: 41.0339392, lon: 28.895668},
        {lat: 41.0339334, lon: 28.8959139},
        {lat: 41.0338896, lon: 28.8961322},
        {lat: 41.0338519, lon: 28.8965955},
        {lat: 41.0337601, lon: 28.8969087},
        {lat: 41.0332454, lon: 28.8982616},
        {lat: 41.0330604, lon: 28.8992544},
        {lat: 41.0330233, lon: 28.899519},
        {lat: 41.0328211, lon: 28.9006745},
        {lat: 41.0327722, lon: 28.9011221},
        {lat: 41.0327519, lon: 28.9013084},
        {lat: 41.0327336, lon: 28.9014281},
        {lat: 41.0326163, lon: 28.9015337},
        {lat: 41.03247, lon: 28.9016908},
        {lat: 41.0315309, lon: 28.9027359},
        {lat: 41.0312732, lon: 28.9030729},
        {lat: 41.0311402, lon: 28.9032557},
        {lat: 41.0307744, lon: 28.9037803},
        {lat: 41.0303544, lon: 28.9043441},
        {lat: 41.0301683, lon: 28.9046006},
        {lat: 41.0299979, lon: 28.9048746},
        {lat: 41.0297673, lon: 28.9053732},
        {lat: 41.0296291, lon: 28.905608},
        {lat: 41.0289734, lon: 28.9065055},
        {lat: 41.028483, lon: 28.9070366},
        {lat: 41.0280408, lon: 28.9075461},
        {lat: 41.0278654, lon: 28.9077511},
        {lat: 41.0278916, lon: 28.9078482},
        {lat: 41.0279262, lon: 28.9083676},
        {lat: 41.0277093, lon: 28.9095747},
        {lat: 41.0273935, lon: 28.9107011},
        {lat: 41.0269434, lon: 28.9129958},
        {lat: 41.0256573, lon: 28.9155931},
        {lat: 41.0243392, lon: 28.9175481},
        {lat: 41.0236865, lon: 28.9188767},
        {lat: 41.0235563, lon: 28.9193022},
        {lat: 41.0235045, lon: 28.9194201},
        {lat: 41.0242597, lon: 28.9203627},
        {lat: 41.0243002, lon: 28.9205121},
        {lat: 41.0242747, lon: 28.9217939},
        {lat: 41.0241087, lon: 28.922636},
        {lat: 41.0228143, lon: 28.9245574},
        {lat: 41.0223696, lon: 28.925054},
        {lat: 41.0220917, lon: 28.9253577},
        {lat: 41.0220125, lon: 28.9253972},
        {lat: 41.0219377, lon: 28.9254821},
        {lat: 41.0218807, lon: 28.9255576},
        {lat: 41.0218311, lon: 28.925648},
        {lat: 41.0217596, lon: 28.9258042},
        {lat: 41.021825, lon: 28.9258755},
        {lat: 41.021798, lon: 28.9259583},
        {lat: 41.0215722, lon: 28.9265584},
        {lat: 41.0214615, lon: 28.9265647},
        {lat: 41.020972, lon: 28.9275311},
        {lat: 41.0206819, lon: 28.9280418},
        {lat: 41.0199901, lon: 28.9280631},
        {lat: 41.0198375, lon: 28.9280441},
        {lat: 41.0196777, lon: 28.9280147},
        {lat: 41.0196634, lon: 28.9280745},
        {lat: 41.018801, lon: 28.9279765},
        {lat: 41.0187897, lon: 28.92862},
        
];

for (var i = 0; i < pathData.length - 1; i++) {
    var pointA = new L.LatLng(pathData[i].lat, pathData[i].lon);
    var pointB = new L.LatLng(pathData[i+1].lat, pathData[i+1].lon);
    var pointList = [pointA, pointB];

    var firstpolyline = new L.Polyline(pointList, {
        color: 'red',
        weight: 3,
        opacity: 0.5,
        smoothFactor: 1
    });

    firstpolyline.addTo(mymap);
}
