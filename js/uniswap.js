var url1 = 'https://node-api.flipsidecrypto.com/api/v2/queries/07b30616-a2b7-40c1-8a8e-35c4cccb34cf/data/latest'


        async function getData1(){
                    const response = await fetch(url1);
                    const data = await response.json();
                    var counter = data.length;
                    var i = 0;
                    
                    for (var i=0; i<=30; i++){
                    dt.push(data[i].TIME)
                    pool1.push(data[i].POOL_NAME);
                    pool2.push(data[i+31].POOL_NAME);
                    pool3.push(data[i+62].POOL_NAME);
                    pool4.push(data[i+93].POOL_NAME);
                    pool5.push(data[i+124].POOL_NAME);
                    pool6.push(data[i+155].POOL_NAME);
                    pool7.push(data[i+186].POOL_NAME);
                    pool8.push(data[i+217].POOL_NAME);
                    pool9.push(data[i+248].POOL_NAME);
                    pool10.push(data[i+279].POOL_NAME);
                    pool11.push(data[i+310].POOL_NAME);
                    pool12.push(data[i+341].POOL_NAME);
                    pool13.push(data[i+372].POOL_NAME);
                    pool14.push(data[i+403].POOL_NAME);
                    pool15.push(data[i+434].POOL_NAME);
                    pool16.push(data[i+465].POOL_NAME);
                    pool17.push(data[i+496].POOL_NAME);
                    pool18.push(data[i+527].POOL_NAME);
                    pool19.push(data[i+558].POOL_NAME);
                    pool20.push(data[i+589].POOL_NAME);
                    pool21.push(data[i+620].POOL_NAME);
                    pool22.push(data[i+651].POOL_NAME);
                    pool23.push(data[i+682].POOL_NAME);
                    pool24.push(data[i+713].POOL_NAME);
                    pool25.push(data[i+744].POOL_NAME);
                    pool26.push(data[i+775].POOL_NAME);
                    pool27.push(data[i+806].POOL_NAME);
                    pool28.push(data[i+837].POOL_NAME);
                    pool29.push(data[i+868].POOL_NAME);
                    pool30.push(data[i+899].POOL_NAME);
                    pool31.push(data[i+930].POOL_NAME);
                    pool32.push(data[i+961].POOL_NAME);
                    pool33.push(data[i+992].POOL_NAME);
                    pool34.push(data[i+1023].POOL_NAME);
                    pool35.push(data[i+1054].POOL_NAME);
                    pool36.push(data[i+1085].POOL_NAME);
                    pool37.push(data[i+1116].POOL_NAME);
                    pool38.push(data[i+1147].POOL_NAME);
                    pool39.push(data[i+1178].POOL_NAME);
                    pool40.push(data[i+1209].POOL_NAME);
                    pool41.push(data[i+1240].POOL_NAME);
                    pool42.push(data[i+1271].POOL_NAME);
                    pool43.push(data[i+1302].POOL_NAME);
                    pool44.push(data[i+1333].POOL_NAME);
                    pool45.push(data[i+1364].POOL_NAME);
                    pool46.push(data[i+1395].POOL_NAME);
                    pool47.push(data[i+1426].POOL_NAME);
                    pool48.push(data[i+1457].POOL_NAME);
                    pool49.push(data[i+1488].POOL_NAME);
                    pool50.push(data[i+1519].POOL_NAME);
                    pool51.push(data[i+1550].POOL_NAME);
                    pool52.push(data[i+1581].POOL_NAME);
                    pool53.push(data[i+1612].POOL_NAME);
                    pool54.push(data[i+1643].POOL_NAME);
                    pool55.push(data[i+1674].POOL_NAME);
                    pool56.push(data[i+1705].POOL_NAME);
                    pool57.push(data[i+1736].POOL_NAME);
                    pool58.push(data[i+1767].POOL_NAME);
                    pool59.push(data[i+1798].POOL_NAME);
                    pool60.push(data[i+1829].POOL_NAME);
                    pool61.push(data[i+1860].POOL_NAME);
                    pool62.push(data[i+1891].POOL_NAME);
                    pool63.push(data[i+1922].POOL_NAME);
                    pool64.push(data[i+1953].POOL_NAME);
                    pool65.push(data[i+1984].POOL_NAME);
                    pool66.push(data[i+2015].POOL_NAME);
                    pool67.push(data[i+2046].POOL_NAME);
                    pool68.push(data[i+2077].POOL_NAME);
                    pool69.push(data[i+2108].POOL_NAME);
                    pool70.push(data[i+2139].POOL_NAME);
                    pool71.push(data[i+2170].POOL_NAME);
                    pool72.push(data[i+2201].POOL_NAME);
                    pool73.push(data[i+2232].POOL_NAME);
                    pool74.push(data[i+2263].POOL_NAME);
                    pool75.push(data[i+2294].POOL_NAME);
                    pool76.push(data[i+2325].POOL_NAME);
                    pool77.push(data[i+2356].POOL_NAME);
                    pool78.push(data[i+2387].POOL_NAME);
                    pool79.push(data[i+2418].POOL_NAME);
                    pool80.push(data[i+2449].POOL_NAME);
                    pool81.push(data[i+2480].POOL_NAME);
                    pool82.push(data[i+2511].POOL_NAME);
                    pool83.push(data[i+2542].POOL_NAME);
                    pool84.push(data[i+2573].POOL_NAME);
                    pool85.push(data[i+2604].POOL_NAME);
                    pool86.push(data[i+2635].POOL_NAME);
                    pool87.push(data[i+2666].POOL_NAME);
                    pool88.push(data[i+2697].POOL_NAME);
                    pool89.push(data[i+2728].POOL_NAME);
                    pool90.push(data[i+2759].POOL_NAME);
                    pool91.push(data[i+2790].POOL_NAME);
                    pool92.push(data[i+2821].POOL_NAME);
                    pool93.push(data[i+2852].POOL_NAME);
                    pool94.push(data[i+2883].POOL_NAME);
                    pool95.push(data[i+2914].POOL_NAME);
                    pool96.push(data[i+2945].POOL_NAME);
                    pool97.push(data[i+2976].POOL_NAME);
                    pool98.push(data[i+3007].POOL_NAME);
                    pool99.push(data[i+3038].POOL_NAME);
                    pool100.push(data[i+3069].POOL_NAME);


                    vol1.push(data[i].SWAP_VOLUME);
                    vol2.push(data[i+31].SWAP_VOLUME);
                    vol3.push(data[i+62].SWAP_VOLUME);
                    vol4.push(data[i+93].SWAP_VOLUME);
                    vol5.push(data[i+124].SWAP_VOLUME);
                    vol6.push(data[i+155].SWAP_VOLUME);
                    vol7.push(data[i+186].SWAP_VOLUME);
                    vol8.push(data[i+217].SWAP_VOLUME);
                    vol9.push(data[i+248].SWAP_VOLUME);
                    vol10.push(data[i+279].SWAP_VOLUME);
                    vol11.push(data[i+310].SWAP_VOLUME);
                    vol12.push(data[i+341].SWAP_VOLUME);
                    vol13.push(data[i+372].SWAP_VOLUME);
                    vol14.push(data[i+403].SWAP_VOLUME);
                    vol15.push(data[i+434].SWAP_VOLUME);
                    vol16.push(data[i+465].SWAP_VOLUME);
                    vol17.push(data[i+496].SWAP_VOLUME);
                    vol18.push(data[i+527].SWAP_VOLUME);
                    vol19.push(data[i+558].SWAP_VOLUME);
                    vol20.push(data[i+589].SWAP_VOLUME);
                    vol21.push(data[i+620].SWAP_VOLUME);
                    vol22.push(data[i+651].SWAP_VOLUME);
                    vol23.push(data[i+682].SWAP_VOLUME);
                    vol24.push(data[i+713].SWAP_VOLUME);
                    vol25.push(data[i+744].SWAP_VOLUME);
                    vol26.push(data[i+775].SWAP_VOLUME);
                    vol27.push(data[i+806].SWAP_VOLUME);
                    vol28.push(data[i+837].SWAP_VOLUME);
                    vol29.push(data[i+868].SWAP_VOLUME);
                    vol30.push(data[i+899].SWAP_VOLUME);
                    vol31.push(data[i+930].SWAP_VOLUME);
                    vol32.push(data[i+961].SWAP_VOLUME);
                    vol33.push(data[i+992].SWAP_VOLUME);
                    vol34.push(data[i+1023].SWAP_VOLUME);
                    vol35.push(data[i+1054].SWAP_VOLUME);
                    vol36.push(data[i+1085].SWAP_VOLUME);
                    vol37.push(data[i+1116].SWAP_VOLUME);
                    vol38.push(data[i+1147].SWAP_VOLUME);
                    vol39.push(data[i+1178].SWAP_VOLUME);
                    vol40.push(data[i+1209].SWAP_VOLUME);
                    vol41.push(data[i+1240].SWAP_VOLUME);
                    vol42.push(data[i+1271].SWAP_VOLUME);
                    vol43.push(data[i+1302].SWAP_VOLUME);
                    vol44.push(data[i+1333].SWAP_VOLUME);
                    vol45.push(data[i+1364].SWAP_VOLUME);
                    vol46.push(data[i+1395].SWAP_VOLUME);
                    vol47.push(data[i+1426].SWAP_VOLUME);
                    vol48.push(data[i+1457].SWAP_VOLUME);
                    vol49.push(data[i+1488].SWAP_VOLUME);
                    vol50.push(data[i+1519].SWAP_VOLUME);
                    vol51.push(data[i+1550].SWAP_VOLUME);
                    vol52.push(data[i+1581].SWAP_VOLUME);
                    vol53.push(data[i+1612].SWAP_VOLUME);
                    vol54.push(data[i+1643].SWAP_VOLUME);
                    vol55.push(data[i+1674].SWAP_VOLUME);
                    vol56.push(data[i+1705].SWAP_VOLUME);
                    vol57.push(data[i+1736].SWAP_VOLUME);
                    vol58.push(data[i+1767].SWAP_VOLUME);
                    vol59.push(data[i+1798].SWAP_VOLUME);
                    vol60.push(data[i+1829].SWAP_VOLUME);
                    vol61.push(data[i+1860].SWAP_VOLUME);
                    vol62.push(data[i+1891].SWAP_VOLUME);
                    vol63.push(data[i+1922].SWAP_VOLUME);
                    vol64.push(data[i+1953].SWAP_VOLUME);
                    vol65.push(data[i+1984].SWAP_VOLUME);
                    vol66.push(data[i+2015].SWAP_VOLUME);
                    vol67.push(data[i+2046].SWAP_VOLUME);
                    vol68.push(data[i+2077].SWAP_VOLUME);
                    vol69.push(data[i+2108].SWAP_VOLUME);
                    vol70.push(data[i+2139].SWAP_VOLUME);
                    vol71.push(data[i+2170].SWAP_VOLUME);
                    vol72.push(data[i+2201].SWAP_VOLUME);
                    vol73.push(data[i+2232].SWAP_VOLUME);
                    vol74.push(data[i+2263].SWAP_VOLUME);
                    vol75.push(data[i+2294].SWAP_VOLUME);
                    vol76.push(data[i+2325].SWAP_VOLUME);
                    vol77.push(data[i+2356].SWAP_VOLUME);
                    vol78.push(data[i+2387].SWAP_VOLUME);
                    vol79.push(data[i+2418].SWAP_VOLUME);
                    vol80.push(data[i+2449].SWAP_VOLUME);
                    vol81.push(data[i+2480].SWAP_VOLUME);
                    vol82.push(data[i+2511].SWAP_VOLUME);
                    vol83.push(data[i+2542].SWAP_VOLUME);
                    vol84.push(data[i+2573].SWAP_VOLUME);
                    vol85.push(data[i+2604].SWAP_VOLUME);
                    vol86.push(data[i+2635].SWAP_VOLUME);
                    vol87.push(data[i+2666].SWAP_VOLUME);
                    vol88.push(data[i+2697].SWAP_VOLUME);
                    vol89.push(data[i+2728].SWAP_VOLUME);
                    vol90.push(data[i+2759].SWAP_VOLUME);
                    vol91.push(data[i+2790].SWAP_VOLUME);
                    vol92.push(data[i+2821].SWAP_VOLUME);
                    vol93.push(data[i+2852].SWAP_VOLUME);
                    vol94.push(data[i+2883].SWAP_VOLUME);
                    vol95.push(data[i+2914].SWAP_VOLUME);
                    vol96.push(data[i+2945].SWAP_VOLUME);
                    vol97.push(data[i+2976].SWAP_VOLUME);
                    vol98.push(data[i+3007].SWAP_VOLUME);
                    vol99.push(data[i+3038].SWAP_VOLUME);
                    vol100.push(data[i+3069].SWAP_VOLUME);
                  
                    
                    }
                    var label = [pool1[0], pool2[0],pool3[0], pool4[0], pool5[0],
                    pool6[0], pool7[0],pool8[0], pool9[0], pool10[0],
                    pool11[0], pool12[0],pool13[0], pool14[0], pool15[0],
                    pool16[0], pool17[0],pool18[0], pool19[0], pool20[0],
                    pool21[0], pool22[0],pool23[0], pool24[0], pool25[0],
                    pool26[0], pool27[0],pool28[0], pool29[0], pool30[0],
                    pool31[0], pool32[0],pool33[0], pool34[0], pool35[0],
                    pool36[0], pool37[0],pool38[0], pool39[0], pool40[0],
                    pool41[0], pool42[0],pool43[0], pool44[0], pool45[0],
                    pool46[0], pool47[0],pool48[0], pool49[0], pool50[0],
                    pool51[0], pool52[0],pool53[0], pool54[0], pool55[0],
                    pool56[0], pool57[0],pool58[0], pool59[0], pool60[0],
                    pool61[0], pool62[0],pool63[0], pool64[0], pool65[0],
                    pool66[0], pool67[0],pool68[0], pool69[0], pool70[0],
                    pool71[0], pool72[0],pool73[0], pool74[0], pool75[0],
                    pool76[0], pool77[0],pool78[0], pool79[0], pool80[0],
                    pool81[0], pool82[0],pool83[0], pool84[0], pool85[0],
                    pool86[0], pool87[0],pool88[0], pool89[0], pool90[0],
                    pool91[0], pool92[0],pool93[0], pool94[0], pool95[0],
                    pool96[0], pool97[0],pool98[0], pool99[0], pool100[0],
                    
                ]
                    
                    
                    label.forEach(function(labels){
                        let newOption = document.createElement("option");
                        newOption.text = labels
                        newOption.value = labels
                        selectTrait.appendChild(newOption)
                      })

                    label.forEach(function(labels){
                        let newOption = document.createElement("option");
                        newOption.text = labels
                        newOption.value = labels
                        selectTrait2.appendChild(newOption)
                    })

                    label.forEach(function(labels){
                        let newOption = document.createElement("option");
                        newOption.text = labels
                        newOption.value = labels
                        selectTrait3.appendChild(newOption)
                    })

                    var val = [vol1,vol2,vol3,vol4,vol5,vol6,vol7,vol8,vol9,vol10,
                        vol11,vol12,vol13,vol14,vol15,vol16,vol17,vol18,vol19,vol20,
                        vol21,vol22,vol23,vol24,vol25,vol26,vol27,vol28,vol29,vol30,
                        vol31,vol32,vol33,vol34,vol35,vol36,vol37,vol38,vol39,vol40,
                        vol41,vol42,vol43,vol44,vol45,vol46,vol47,vol48,vol49,vol50,
                        vol51,vol52,vol53,vol54,vol55,vol56,vol57,vol58,vol59,vol60,
                        vol61,vol62,vol63,vol64,vol65,vol66,vol67,vol68,vol69,vol70,
                        vol71,vol72,vol73,vol74,vol75,vol76,vol77,vol78,vol79,vol80,
                        vol81,vol82,vol83,vol84,vol85,vol86,vol87,vol88,vol89,vol90,
                        vol91,vol92,vol93,vol94,vol95,vol96,vol97,vol98,vol99,vol100,

                    ]

                    var a = document.getElementById("selectTrait");
                    for (var i = 0; i < a.length; i++) {
                        var option = a.options[i];
                        option.value = val[i]
                    }

                    var b = document.getElementById("selectTrait2");
                    for (var i = 0; i < a.length; i++) {
                        var option = b.options[i];
                        option.value = val[i]
                    }

                    var c = document.getElementById("selectTrait3");
                    for (var i = 0; i < a.length; i++) {
                        var option = c.options[i];
                        option.value = val[i]
                    }

                }   


                var dt = [];
                var pool1 =[]; var pool2=[]; var pool3=[]; var pool4=[]; var pool5=[]
                var pool6 =[]; var pool7=[]; var pool8=[]; var pool9=[]; var pool10=[]
                var pool11 =[]; var pool12=[]; var pool13=[]; var pool14=[]; var pool15=[]
                var pool16 =[]; var pool17=[]; var pool18=[]; var pool19=[]; var pool20=[]
                var pool21 =[]; var pool22=[]; var pool23=[]; var pool24=[]; var pool25=[]
                var pool26 =[]; var pool27=[]; var pool28=[]; var pool29=[]; var pool30=[]
                var pool31 =[]; var pool32=[]; var pool33=[]; var pool34=[]; var pool35=[]
                var pool36 =[]; var pool37=[]; var pool38=[]; var pool39=[]; var pool40=[]
                var pool41 =[]; var pool42=[]; var pool43=[]; var pool44=[]; var pool45=[]
                var pool46 =[]; var pool47=[]; var pool48=[]; var pool49=[]; var pool50=[]
                var pool51 =[]; var pool52=[]; var pool53=[]; var pool54=[]; var pool55=[]
                var pool56 =[]; var pool57=[]; var pool58=[]; var pool59=[]; var pool60=[]
                var pool61 =[]; var pool62=[]; var pool63=[]; var pool64=[]; var pool65=[]
                var pool66 =[]; var pool67=[]; var pool68=[]; var pool69=[]; var pool70=[]
                var pool71 =[]; var pool72=[]; var pool73=[]; var pool74=[]; var pool75=[]
                var pool76 =[]; var pool77=[]; var pool78=[]; var pool79=[]; var pool80=[]
                var pool81 =[]; var pool82=[]; var pool83=[]; var pool84=[]; var pool85=[]
                var pool86 =[]; var pool87=[]; var pool88=[]; var pool89=[]; var pool90=[]
                var pool91 =[]; var pool92=[]; var pool93=[]; var pool94=[]; var pool95=[]
                var pool96 =[]; var pool97=[]; var pool98=[]; var pool99=[]; var pool100=[]

                var vol1=[]; var vol2=[]; var vol3=[]; var vol4=[]; var vol5=[]     
                var vol6=[]; var vol7=[]; var vol8=[]; var vol9=[]; var vol10=[]     
                var vol11=[]; var vol12=[]; var vol13=[]; var vol14=[]; var vol15=[]     
                var vol16=[]; var vol17=[]; var vol18=[]; var vol19=[]; var vol20=[]
                var vol21=[]; var vol22=[]; var vol23=[]; var vol24=[]; var vol25=[]     
                var vol26=[]; var vol27=[]; var vol28=[]; var vol29=[]; var vol30=[]
                var vol31=[]; var vol32=[]; var vol33=[]; var vol34=[]; var vol35=[]     
                var vol36=[]; var vol37=[]; var vol38=[]; var vol39=[]; var vol40=[]     
                var vol41=[]; var vol42=[]; var vol43=[]; var vol44=[]; var vol45=[]     
                var vol46=[]; var vol47=[]; var vol48=[]; var vol49=[]; var vol50=[] 
                var vol51=[]; var vol52=[]; var vol53=[]; var vol54=[]; var vol55=[]     
                var vol56=[]; var vol57=[]; var vol58=[]; var vol59=[]; var vol60=[]
                var vol61=[]; var vol62=[]; var vol63=[]; var vol64=[]; var vol65=[]     
                var vol66=[]; var vol67=[]; var vol68=[]; var vol69=[]; var vol70=[]
                var vol71=[]; var vol72=[]; var vol73=[]; var vol74=[]; var vol75=[]     
                var vol76=[]; var vol77=[]; var vol78=[]; var vol79=[]; var vol80=[]
                var vol81=[]; var vol82=[]; var vol83=[]; var vol84=[]; var vol85=[]     
                var vol86=[]; var vol87=[]; var vol88=[]; var vol89=[]; var vol90=[]
                var vol91=[]; var vol92=[]; var vol93=[]; var vol94=[]; var vol95=[]     
                var vol96=[]; var vol97=[]; var vol98=[]; var vol99=[]; var vol100=[]    
                  


                async function chart1(){
                await getData1();
         
                var ctx = document.getElementById('chart1').getContext('2d');
                var purple_orange_gradient = ctx.createLinearGradient(0, 0, 0, 300);
                purple_orange_gradient.addColorStop(0, 'blue');
                purple_orange_gradient.addColorStop(1, 'purple');

                var myChart = new Chart(ctx, {

                type: 'line',
                data: {
                    labels : dt,
                    datasets: [
                        {
                            label: pool1[0],
                            data: vol1,
                            backgroundColor: 'rgba(32, 105, 255, 0.6)',
                            borderColor: 'rgba(32, 105, 255, 1)',
                            borderWidth: 5,
                            hoverBorderColor: 'white',
                            hoverBorderWidth: 2,
                            hidden:false,
                            fill: 'origin',
            
                        },
                        {

                        },
                        {

                        },
                    ]
                    
                },
                options: { //cutoutPercentage: 40,
            responsive: true,
            interaction: {
      mode: 'index',
      intersect: false,
    },
                    plugins: {
                        
                        title: {
                display: false,
                text: 'Volume',
                color: 'white',
                    font: {
                        size: 20,

                    }
            },
            legend: {
                    display:true,
                labels: {
                    // This more specific font property overrides the global property
                    color: 'white',
                    font: {
                        size: 14,

                    }
                    
                }
            },
           
        },
        scales:{
            y: {
                display: true,
                ticks:{ 
                    
                    color:'white',
                    font:{
                        size:16
                    },
                },
                title: {
                    display: true,
                    text: 'Swap Volume (USD)',
                    color:'white',
                    font:{
                        size:16
                    },
                }
                },
            
                x: {
                display: false,
                ticks:{ 

                    color:'white',
                    font:{
                        size:12
                    },

                }
            }
                }
                }}

                );
       
                const selectTrait = document.getElementById('selectTrait')
                selectTrait.addEventListener('change', traitTracker)
                function traitTracker(){
                    console.log(selectTrait.value)
                    var shit = []
                    for (var i = 0; i < 31; i++) {
                        var shit = selectTrait.value.split(',').map(el => {
                            let n = Number(el);
                            return n === 0 ? n : n || el;
                          });                    }

                    myChart.data.datasets[0].data = shit
                    myChart.data.datasets[0].label = selectTrait.options[selectTrait.selectedIndex].text

                    myChart.update()
                }
                const selectTrait2 = document.getElementById('selectTrait2')
                selectTrait2.addEventListener('change', traitTracker2)
                function traitTracker2(){
                    console.log(selectTrait2.value)
                    var shit = []
                    for (var i = 0; i < 31; i++) {
                        var shit = selectTrait2.value.split(',').map(el => {
                            let n = Number(el);
                            return n === 0 ? n : n || el;
                          });                    }

                    if(myChart.data.datasets[1].data === null){
                    myChart.data.datasets.push({
                        label:selectTrait2.options[selectTrait2.selectedIndex].text,
                        data:shit,
                        backgroundColor: 'rgba(245, 40, 145, 0.8)',
                        borderColor: 'rgba(245, 40, 145, 1)',
                        borderWidth: 5,
                        hoverBorderColor: 'white',
                        hoverBorderWidth: 2,
                        type:'line',
                    })
                
                    myChart.update()
                }else{
                    myChart.data.datasets[1].data = shit
                    myChart.data.datasets[1].label = selectTrait2.options[selectTrait2.selectedIndex].text
                    myChart.data.datasets[1].backgroundColor = 'rgba(245, 40, 145, 0.8)'
                    myChart.data.datasets[1].borderColor = 'rgba(245, 40, 145, 1)'
                    myChart.data.datasets[1].borderWidth = 5
                    myChart.data.datasets[1].hoverBorderColor = 'white'
                    myChart.data.datasets[1].fill = 'origin'
                    myChart.update()


                }
                }
                const selectTrait3 = document.getElementById('selectTrait3')
                selectTrait3.addEventListener('change', traitTracker3)
                function traitTracker3(){
                    console.log(selectTrait3.value)
                    var shit = []
                    for (var i = 0; i < 31; i++) {
                        var shit = selectTrait3.value.split(',').map(el => {
                            let n = Number(el);
                            return n === 0 ? n : n || el;
                          });                    }

                    if(myChart.data.datasets[2].data === null){
                    myChart.data.datasets.push({
                        label:selectTrait3.options[selectTrait3.selectedIndex].text,
                        data:shit,
                        backgroundColor: 'rgba(245, 212, 39, 0.8)',
                        borderColor: 'rgba(245, 212, 39, 1)',
                        borderWidth: 5,
                        hoverBorderColor: 'white',
                        hoverBorderWidth: 2,
                        type:'line',
                    })
                
                    myChart.update()
                }else{
                    myChart.data.datasets[2].data = shit
                    myChart.data.datasets[2].label = selectTrait3.options[selectTrait3.selectedIndex].text
                    myChart.data.datasets[2].backgroundColor = 'rgba(245, 212, 39, 0.8)'
                    myChart.data.datasets[2].borderColor = 'rgba(245, 212, 39, 1)'
                    myChart.data.datasets[2].borderWidth = 5
                    myChart.data.datasets[2].hoverBorderColor = 'white'
                    myChart.data.datasets[2].fill = 'origin'
                    myChart.update()


                }
                }

                }



                url2 = 'https://node-api.flipsidecrypto.com/api/v2/queries/07b30616-a2b7-40c1-8a8e-35c4cccb34cf/data/latest'


                async function getData2(){
                            const response = await fetch(url2);
                            const data = await response.json();
                            var counter = data.length;
                            var i = 0;
                            
                            for (var i=0; i<=30; i++){
                          
        
        
                            tvl1.push(data[i].TVL);
                            tvl2.push(data[i+31].TVL);
                            tvl3.push(data[i+62].TVL);
                            tvl4.push(data[i+93].TVL);
                            tvl5.push(data[i+124].TVL);
                            tvl6.push(data[i+155].TVL);
                            tvl7.push(data[i+186].TVL);
                            tvl8.push(data[i+217].TVL);
                            tvl9.push(data[i+248].TVL);
                            tvl10.push(data[i+279].TVL);
                            tvl11.push(data[i+310].TVL);
                            tvl12.push(data[i+341].TVL);
                            tvl13.push(data[i+372].TVL);
                            tvl14.push(data[i+403].TVL);
                            tvl15.push(data[i+434].TVL);
                            tvl16.push(data[i+465].TVL);
                            tvl17.push(data[i+496].TVL);
                            tvl18.push(data[i+527].TVL);
                            tvl19.push(data[i+558].TVL);
                            tvl20.push(data[i+589].TVL);
                            tvl21.push(data[i+620].TVL);
                            tvl22.push(data[i+651].TVL);
                            tvl23.push(data[i+682].TVL);
                            tvl24.push(data[i+713].TVL);
                            tvl25.push(data[i+744].TVL);
                            tvl26.push(data[i+775].TVL);
                            tvl27.push(data[i+806].TVL);
                            tvl28.push(data[i+837].TVL);
                            tvl29.push(data[i+868].TVL);
                            tvl30.push(data[i+899].TVL);
                            tvl31.push(data[i+930].TVL);
                            tvl32.push(data[i+961].TVL);
                            tvl33.push(data[i+992].TVL);
                            tvl34.push(data[i+1023].TVL);
                            tvl35.push(data[i+1054].TVL);
                            tvl36.push(data[i+1085].TVL);
                            tvl37.push(data[i+1116].TVL);
                            tvl38.push(data[i+1147].TVL);
                            tvl39.push(data[i+1178].TVL);
                            tvl40.push(data[i+1209].TVL);
                            tvl41.push(data[i+1240].TVL);
                            tvl42.push(data[i+1271].TVL);
                            tvl43.push(data[i+1302].TVL);
                            tvl44.push(data[i+1333].TVL);
                            tvl45.push(data[i+1364].TVL);
                            tvl46.push(data[i+1395].TVL);
                            tvl47.push(data[i+1426].TVL);
                            tvl48.push(data[i+1457].TVL);
                            tvl49.push(data[i+1488].TVL);
                            tvl50.push(data[i+1519].TVL);
                            tvl51.push(data[i+1550].TVL);
                            tvl52.push(data[i+1581].TVL);
                            tvl53.push(data[i+1612].TVL);
                            tvl54.push(data[i+1643].TVL);
                            tvl55.push(data[i+1674].TVL);
                            tvl56.push(data[i+1705].TVL);
                            tvl57.push(data[i+1736].TVL);
                            tvl58.push(data[i+1767].TVL);
                            tvl59.push(data[i+1798].TVL);
                            tvl60.push(data[i+1829].TVL);
                            tvl61.push(data[i+1860].TVL);
                            tvl62.push(data[i+1891].TVL);
                            tvl63.push(data[i+1922].TVL);
                            tvl64.push(data[i+1953].TVL);
                            tvl65.push(data[i+1984].TVL);
                            tvl66.push(data[i+2015].TVL);
                            tvl67.push(data[i+2046].TVL);
                            tvl68.push(data[i+2077].TVL);
                            tvl69.push(data[i+2108].TVL);
                            tvl70.push(data[i+2139].TVL);
                            tvl71.push(data[i+2170].TVL);
                            tvl72.push(data[i+2201].TVL);
                            tvl73.push(data[i+2232].TVL);
                            tvl74.push(data[i+2263].TVL);
                            tvl75.push(data[i+2294].TVL);
                            tvl76.push(data[i+2325].TVL);
                            tvl77.push(data[i+2356].TVL);
                            tvl78.push(data[i+2387].TVL);
                            tvl79.push(data[i+2418].TVL);
                            tvl80.push(data[i+2449].TVL);
                            tvl81.push(data[i+2480].TVL);
                            tvl82.push(data[i+2511].TVL);
                            tvl83.push(data[i+2542].TVL);
                            tvl84.push(data[i+2573].TVL);
                            tvl85.push(data[i+2604].TVL);
                            tvl86.push(data[i+2635].TVL);
                            tvl87.push(data[i+2666].TVL);
                            tvl88.push(data[i+2697].TVL);
                            tvl89.push(data[i+2728].TVL);
                            tvl90.push(data[i+2759].TVL);
                            tvl91.push(data[i+2790].TVL);
                            tvl92.push(data[i+2821].TVL);
                            tvl93.push(data[i+2852].TVL);
                            tvl94.push(data[i+2883].TVL);
                            tvl95.push(data[i+2914].TVL);
                            tvl96.push(data[i+2945].TVL);
                            tvl97.push(data[i+2976].TVL);
                            tvl98.push(data[i+3007].TVL);
                            tvl99.push(data[i+3038].TVL);
                            tvl100.push(data[i+3069].TVL);                           
                            }
                            var label2 = [pool1[0], pool2[0],pool3[0], pool4[0], pool5[0],
                            pool6[0], pool7[0],pool8[0], pool9[0], pool10[0],
                            pool11[0], pool12[0],pool13[0], pool14[0], pool15[0],
                            pool16[0], pool17[0],pool18[0], pool19[0], pool20[0],
                            pool21[0], pool22[0],pool23[0], pool24[0], pool25[0],
                            pool26[0], pool27[0],pool28[0], pool29[0], pool30[0],
                            pool31[0], pool32[0],pool33[0], pool34[0], pool35[0],
                            pool36[0], pool37[0],pool38[0], pool39[0], pool40[0],
                            pool41[0], pool42[0],pool43[0], pool44[0], pool45[0],
                            pool46[0], pool47[0],pool48[0], pool49[0], pool50[0],
                            pool51[0], pool52[0],pool53[0], pool54[0], pool55[0],
                            pool56[0], pool57[0],pool58[0], pool59[0], pool60[0],
                            pool61[0], pool62[0],pool63[0], pool64[0], pool65[0],
                            pool66[0], pool67[0],pool68[0], pool69[0], pool70[0],
                            pool71[0], pool72[0],pool73[0], pool74[0], pool75[0],
                            pool76[0], pool77[0],pool78[0], pool79[0], pool80[0],
                            pool81[0], pool82[0],pool83[0], pool84[0], pool85[0],
                            pool86[0], pool87[0],pool88[0], pool89[0], pool90[0],
                            pool91[0], pool92[0],pool93[0], pool94[0], pool95[0],
                            pool96[0], pool97[0],pool98[0], pool99[0], pool100[0],
                            
                        ]
                            
                            label2.forEach(function(labels){
                                let newOption = document.createElement("option");
                                newOption.text = labels
                                newOption.value = labels
                                selectTrait4.appendChild(newOption)
                              })
        
                            label2.forEach(function(labels){
                                let newOption = document.createElement("option");
                                newOption.text = labels
                                newOption.value = labels
                                selectTrait5.appendChild(newOption)
                            })

                            label2.forEach(function(labels){
                                let newOption = document.createElement("option");
                                newOption.text = labels
                                newOption.value = labels
                                selectTrait6.appendChild(newOption)
                            })
        
                            var val = [tvl1,tvl2,tvl3,tvl4,tvl5,tvl6,tvl7,tvl8,tvl9,tvl10,
                                tvl11,tvl12,tvl13,tvl14,tvl15,tvl16,tvl17,tvl18,tvl19,tvl20,
                                tvl21,tvl22,tvl23,tvl24,tvl25,tvl26,tvl27,tvl28,tvl29,tvl30,
                                tvl31,tvl32,tvl33,tvl34,tvl35,tvl36,tvl37,tvl38,tvl39,tvl40,
                                tvl41,tvl42,tvl43,tvl44,tvl45,tvl46,tvl47,tvl48,tvl49,tvl50,
                                tvl51,tvl52,tvl53,tvl54,tvl55,tvl56,tvl57,tvl58,tvl59,tvl60,
                                tvl61,tvl62,tvl63,tvl64,tvl65,tvl66,tvl67,tvl68,tvl69,tvl70,
                                tvl71,tvl72,tvl73,tvl74,tvl75,tvl76,tvl77,tvl78,tvl79,tvl80,
                                tvl81,tvl82,tvl83,tvl84,tvl85,tvl86,tvl87,tvl88,tvl89,tvl90,
                                tvl91,tvl92,tvl93,tvl94,tvl95,tvl96,tvl97,tvl98,tvl99,tvl100,

                            ]
        
                            var a = document.getElementById("selectTrait4");
                            for (var i = 0; i < a.length; i++) {
                                var option = a.options[i];
                                option.value = val[i]
                            }
        
                            var b = document.getElementById("selectTrait5");
                            for (var i = 0; i < a.length; i++) {
                                var option = b.options[i];
                                option.value = val[i]
                            }

                            var c = document.getElementById("selectTrait6");
                            for (var i = 0; i < a.length; i++) {
                                var option = c.options[i];
                                option.value = val[i]
                            }
        
                        }   
        
                      
        
                        var dt = [];
                       
                        var tvl1=[]; var tvl2=[]; var tvl3=[]; var tvl4=[]; var tvl5=[]     
                        var tvl6=[]; var tvl7=[]; var tvl8=[]; var tvl9=[]; var tvl10=[]     
                        var tvl11=[]; var tvl12=[]; var tvl13=[]; var tvl14=[]; var tvl15=[]     
                        var tvl16=[]; var tvl17=[]; var tvl18=[]; var tvl19=[]; var tvl20=[]
                        var tvl21=[]; var tvl22=[]; var tvl23=[]; var tvl24=[]; var tvl25=[]     
                        var tvl26=[]; var tvl27=[]; var tvl28=[]; var tvl29=[]; var tvl30=[]
                        var tvl31=[]; var tvl32=[]; var tvl33=[]; var tvl34=[]; var tvl35=[]     
                        var tvl36=[]; var tvl37=[]; var tvl38=[]; var tvl39=[]; var tvl40=[]     
                        var tvl41=[]; var tvl42=[]; var tvl43=[]; var tvl44=[]; var tvl45=[]     
                        var tvl46=[]; var tvl47=[]; var tvl48=[]; var tvl49=[]; var tvl50=[]   
                        var tvl51=[]; var tvl52=[]; var tvl53=[]; var tvl54=[]; var tvl55=[]     
                        var tvl56=[]; var tvl57=[]; var tvl58=[]; var tvl59=[]; var tvl60=[]
                        var tvl61=[]; var tvl62=[]; var tvl63=[]; var tvl64=[]; var tvl65=[]     
                        var tvl66=[]; var tvl67=[]; var tvl68=[]; var tvl69=[]; var tvl70=[]
                        var tvl71=[]; var tvl72=[]; var tvl73=[]; var tvl74=[]; var tvl75=[]     
                        var tvl76=[]; var tvl77=[]; var tvl78=[]; var tvl79=[]; var tvl80=[]
                        var tvl81=[]; var tvl82=[]; var tvl83=[]; var tvl84=[]; var tvl85=[]     
                        var tvl86=[]; var tvl87=[]; var tvl88=[]; var tvl89=[]; var tvl90=[]
                        var tvl91=[]; var tvl92=[]; var tvl93=[]; var tvl94=[]; var tvl95=[]     
                        var tvl96=[]; var tvl97=[]; var tvl98=[]; var tvl99=[]; var tvl100=[]  
                          
        
                        async function chart2(){
                        await getData2();
                 
                        var ctx = document.getElementById('chart2').getContext('2d');
                        var purple_orange_gradient = ctx.createLinearGradient(0, 0, 0, 300);
                        purple_orange_gradient.addColorStop(0, 'blue');
                        purple_orange_gradient.addColorStop(1, 'purple');
        
                        var myChart2 = new Chart(ctx, {
        
                        type: 'line',
                        data: {
                            labels : dt,
                            datasets: [
                                {
                                    label: pool1[0],
                                    data: tvl1,
                                    backgroundColor: 'rgba(32, 105, 255, 0.6)',
                                    borderColor: 'rgba(32, 105, 255, 1)',
                                    borderWidth: 5,
                                    hoverBorderColor: 'white',
                                    hoverBorderWidth: 2,
                                    hidden:false,
                                    fill: 'origin',
                    
                                },
                                {
        
                                },
                                {

                                },
                            ]
                            
                        },
                        options: { //cutoutPercentage: 40,
                    responsive: true,
                    interaction: {
              mode: 'index',
              intersect: false,
            },
                            plugins: {
                                
                                title: {
                        display: false,
                        text: 'Volume',
                        color: 'white',
                            font: {
                                size: 20,
        
                            }
                    },
                    legend: {
                            display:true,
                        labels: {
                            // This more specific font property overrides the global property
                            color: 'white',
                            font: {
                                size: 14,
        
                            }
                            
                        }
                    },
                   
                },
                scales:{
                    y: {
                        display: true,
                        ticks:{ 
                            
                            color:'white',
                            font:{
                                size:16
                            },
                        },
                        title: {
                            display: true,
                            text: 'TVL (USD)',
                            color:'white',
                            font:{
                                size:16
                            },
                        }
                        },
                    
                        x: {
                        display: false,
                        ticks:{ 
        
                            color:'white',
                            font:{
                                size:12
                            },
        
                        }
                    }
                        }
                        }});
               
                        const selectTrait4 = document.getElementById('selectTrait4')
                        selectTrait4.addEventListener('change', traitTracker4)
                        function traitTracker4(){
                            console.log(selectTrait4.value)
                            var shit = []
                            for (var i = 0; i < 31; i++) {
                                var shit = selectTrait4.value.split(',').map(el => {
                                    let n = Number(el);
                                    return n === 0 ? n : n || el;
                                  });                    }
        
                            myChart2.data.datasets[0].data = shit
                            myChart2.data.datasets[0].label = selectTrait4.options[selectTrait4.selectedIndex].text
        
                            myChart2.update()
                        }
                        const selectTrait5 = document.getElementById('selectTrait5')
                        selectTrait5.addEventListener('change', traitTracker5)
                        function traitTracker5(){
                            console.log(selectTrait5.value)
                            var shit = []
                            for (var i = 0; i < 31; i++) {
                                var shit = selectTrait5.value.split(',').map(el => {
                                    let n = Number(el);
                                    return n === 0 ? n : n || el;
                                  });                    }
                            console.log(shit)
        
                            if(myChart2.data.datasets[1].data === null){
                            myChart2.data.datasets.push({
                                label:selectTrait5.options[selectTrait5.selectedIndex].text,
                                data:shit,
                                backgroundColor: 'rgba(245, 40, 145, 0.8)',
                                borderColor: 'rgba(245, 40, 145, 1)',
                                borderWidth: 5,
                                hoverBorderColor: 'white',
                                hoverBorderWidth: 2,
                                type:'line',
                            })
                        
                            myChart2.update()
                        }else{
                            myChart2.data.datasets[1].data = shit
                            myChart2.data.datasets[1].label = selectTrait5.options[selectTrait5.selectedIndex].text
                            myChart2.data.datasets[1].backgroundColor = 'rgba(245, 40, 145, 0.8)'
                            myChart2.data.datasets[1].borderColor = 'rgba(245, 40, 145, 1)'
                            myChart2.data.datasets[1].borderWidth = 5
                            myChart2.data.datasets[1].hoverBorderColor = 'white'
                            myChart2.data.datasets[1].fill = 'origin'
                            myChart2.update()
        
        
                        }
                        }
                        const selectTrait6 = document.getElementById('selectTrait6')
                        selectTrait6.addEventListener('change', traitTracker6)
                        function traitTracker6(){
                            console.log(selectTrait6.value)
                            var shit = []
                            for (var i = 0; i < 31; i++) {
                                var shit = selectTrait6.value.split(',').map(el => {
                                    let n = Number(el);
                                    return n === 0 ? n : n || el;
                                  });                    }
                            console.log(shit)
        
                            if(myChart2.data.datasets[2].data === null){
                            myChart2.data.datasets.push({
                                label:selectTrait6.options[selectTrait6.selectedIndex].text,
                                data:shit,
                                backgroundColor: 'rgba(245, 212, 39, 0.8)',
                                borderColor: 'rgba(245, 212, 39, 1)',
                                borderWidth: 5,
                                hoverBorderColor: 'white',
                                hoverBorderWidth: 2,
                                type:'line',
                            })
                        
                            myChart2.update()
                        }else{
                            myChart2.data.datasets[2].data = shit
                            myChart2.data.datasets[2].label = selectTrait6.options[selectTrait6.selectedIndex].text
                            myChart2.data.datasets[2].backgroundColor = 'rgba(245, 212, 39, 0.8)'
                            myChart2.data.datasets[2].borderColor = 'rgba(245, 212, 39, 1)'
                            myChart2.data.datasets[2].borderWidth = 5
                            myChart2.data.datasets[2].hoverBorderColor = 'white'
                            myChart2.data.datasets[2].fill = 'origin'
                            myChart2.update()
        
        
                        }
                        }
        
                        }
             
                    

                        url3 = 'https://node-api.flipsidecrypto.com/api/v2/queries/07b30616-a2b7-40c1-8a8e-35c4cccb34cf/data/latest'


                        async function getData3(){
                                    const response = await fetch(url3);
                                    const data = await response.json();
                                    var counter = data.length;
                                    var i = 0;
                                    
                                    for (var i=0; i<=30; i++){
                                  
                
                
                                    fee1.push(data[i].FEES_COLLECTED);
                                    fee2.push(data[i+31].FEES_COLLECTED);
                                    fee3.push(data[i+62].FEES_COLLECTED);
                                    fee4.push(data[i+93].FEES_COLLECTED);
                                    fee5.push(data[i+124].FEES_COLLECTED);
                                    fee6.push(data[i+155].FEES_COLLECTED);
                                    fee7.push(data[i+186].FEES_COLLECTED);
                                    fee8.push(data[i+217].FEES_COLLECTED);
                                    fee9.push(data[i+248].FEES_COLLECTED);
                                    fee10.push(data[i+279].FEES_COLLECTED);
                                    fee11.push(data[i+310].FEES_COLLECTED);
                                    fee12.push(data[i+341].FEES_COLLECTED);
                                    fee13.push(data[i+372].FEES_COLLECTED);
                                    fee14.push(data[i+403].FEES_COLLECTED);
                                    fee15.push(data[i+434].FEES_COLLECTED);
                                    fee16.push(data[i+465].FEES_COLLECTED);
                                    fee17.push(data[i+496].FEES_COLLECTED);
                                    fee18.push(data[i+527].FEES_COLLECTED);
                                    fee19.push(data[i+558].FEES_COLLECTED);
                                    fee20.push(data[i+589].FEES_COLLECTED);
                                    fee21.push(data[i+620].FEES_COLLECTED);
                                    fee22.push(data[i+651].FEES_COLLECTED);
                                    fee23.push(data[i+682].FEES_COLLECTED);
                                    fee24.push(data[i+713].FEES_COLLECTED);
                                    fee25.push(data[i+744].FEES_COLLECTED);
                                    fee26.push(data[i+775].FEES_COLLECTED);
                                    fee27.push(data[i+806].FEES_COLLECTED);
                                    fee28.push(data[i+837].FEES_COLLECTED);
                                    fee29.push(data[i+868].FEES_COLLECTED);
                                    fee30.push(data[i+899].FEES_COLLECTED);
                                    fee31.push(data[i+930].FEES_COLLECTED);
                                    fee32.push(data[i+961].FEES_COLLECTED);
                                    fee33.push(data[i+992].FEES_COLLECTED);
                                    fee34.push(data[i+1023].FEES_COLLECTED);
                                    fee35.push(data[i+1054].FEES_COLLECTED);
                                    fee36.push(data[i+1085].FEES_COLLECTED);
                                    fee37.push(data[i+1116].FEES_COLLECTED);
                                    fee38.push(data[i+1147].FEES_COLLECTED);
                                    fee39.push(data[i+1178].FEES_COLLECTED);
                                    fee40.push(data[i+1209].FEES_COLLECTED);
                                    fee41.push(data[i+1240].FEES_COLLECTED);
                                    fee42.push(data[i+1271].FEES_COLLECTED);
                                    fee43.push(data[i+1302].FEES_COLLECTED);
                                    fee44.push(data[i+1333].FEES_COLLECTED);
                                    fee45.push(data[i+1364].FEES_COLLECTED);
                                    fee46.push(data[i+1395].FEES_COLLECTED);
                                    fee47.push(data[i+1426].FEES_COLLECTED);
                                    fee48.push(data[i+1457].FEES_COLLECTED);
                                    fee49.push(data[i+1488].FEES_COLLECTED);
                                    fee50.push(data[i+1519].FEES_COLLECTED);
                                    fee51.push(data[i+1550].FEES_COLLECTED);
                                    fee52.push(data[i+1581].FEES_COLLECTED);
                                    fee53.push(data[i+1612].FEES_COLLECTED);
                                    fee54.push(data[i+1643].FEES_COLLECTED);
                                    fee55.push(data[i+1674].FEES_COLLECTED);
                                    fee56.push(data[i+1705].FEES_COLLECTED);
                                    fee57.push(data[i+1736].FEES_COLLECTED);
                                    fee58.push(data[i+1767].FEES_COLLECTED);
                                    fee59.push(data[i+1798].FEES_COLLECTED);
                                    fee60.push(data[i+1829].FEES_COLLECTED);
                                    fee61.push(data[i+1860].FEES_COLLECTED);
                                    fee62.push(data[i+1891].FEES_COLLECTED);
                                    fee63.push(data[i+1922].FEES_COLLECTED);
                                    fee64.push(data[i+1953].FEES_COLLECTED);
                                    fee65.push(data[i+1984].FEES_COLLECTED);
                                    fee66.push(data[i+2015].FEES_COLLECTED);
                                    fee67.push(data[i+2046].FEES_COLLECTED);
                                    fee68.push(data[i+2077].FEES_COLLECTED);
                                    fee69.push(data[i+2108].FEES_COLLECTED);
                                    fee70.push(data[i+2139].FEES_COLLECTED);
                                    fee71.push(data[i+2170].FEES_COLLECTED);
                                    fee72.push(data[i+2201].FEES_COLLECTED);
                                    fee73.push(data[i+2232].FEES_COLLECTED);
                                    fee74.push(data[i+2263].FEES_COLLECTED);
                                    fee75.push(data[i+2294].FEES_COLLECTED);
                                    fee76.push(data[i+2325].FEES_COLLECTED);
                                    fee77.push(data[i+2356].FEES_COLLECTED);
                                    fee78.push(data[i+2387].FEES_COLLECTED);
                                    fee79.push(data[i+2418].FEES_COLLECTED);
                                    fee80.push(data[i+2449].FEES_COLLECTED);
                                    fee81.push(data[i+2480].FEES_COLLECTED);
                                    fee82.push(data[i+2511].FEES_COLLECTED);
                                    fee83.push(data[i+2542].FEES_COLLECTED);
                                    fee84.push(data[i+2573].FEES_COLLECTED);
                                    fee85.push(data[i+2604].FEES_COLLECTED);
                                    fee86.push(data[i+2635].FEES_COLLECTED);
                                    fee87.push(data[i+2666].FEES_COLLECTED);
                                    fee88.push(data[i+2697].FEES_COLLECTED);
                                    fee89.push(data[i+2728].FEES_COLLECTED);
                                    fee90.push(data[i+2759].FEES_COLLECTED);
                                    fee91.push(data[i+2790].FEES_COLLECTED);
                                    fee92.push(data[i+2821].FEES_COLLECTED);
                                    fee93.push(data[i+2852].FEES_COLLECTED);
                                    fee94.push(data[i+2883].FEES_COLLECTED);
                                    fee95.push(data[i+2914].FEES_COLLECTED);
                                    fee96.push(data[i+2945].FEES_COLLECTED);
                                    fee97.push(data[i+2976].FEES_COLLECTED);
                                    fee98.push(data[i+3007].FEES_COLLECTED);
                                    fee99.push(data[i+3038].FEES_COLLECTED);
                                    fee100.push(data[i+3069].FEES_COLLECTED);                           
                                    }
                                    var label3 = [pool1[0], pool2[0],pool3[0], pool4[0], pool5[0],
                                    pool6[0], pool7[0],pool8[0], pool9[0], pool10[0],
                                    pool11[0], pool12[0],pool13[0], pool14[0], pool15[0],
                                    pool16[0], pool17[0],pool18[0], pool19[0], pool20[0],
                                    pool21[0], pool22[0],pool23[0], pool24[0], pool25[0],
                                    pool26[0], pool27[0],pool28[0], pool29[0], pool30[0],
                                    pool31[0], pool32[0],pool33[0], pool34[0], pool35[0],
                                    pool36[0], pool37[0],pool38[0], pool39[0], pool40[0],
                                    pool41[0], pool42[0],pool43[0], pool44[0], pool45[0],
                                    pool46[0], pool47[0],pool48[0], pool49[0], pool50[0],
                                    pool51[0], pool52[0],pool53[0], pool54[0], pool55[0],
                                    pool56[0], pool57[0],pool58[0], pool59[0], pool60[0],
                                    pool61[0], pool62[0],pool63[0], pool64[0], pool65[0],
                                    pool66[0], pool67[0],pool68[0], pool69[0], pool70[0],
                                    pool71[0], pool72[0],pool73[0], pool74[0], pool75[0],
                                    pool76[0], pool77[0],pool78[0], pool79[0], pool80[0],
                                    pool81[0], pool82[0],pool83[0], pool84[0], pool85[0],
                                    pool86[0], pool87[0],pool88[0], pool89[0], pool90[0],
                                    pool91[0], pool92[0],pool93[0], pool94[0], pool95[0],
                                    pool96[0], pool97[0],pool98[0], pool99[0], pool100[0],
                                    
                                ]
                                    
                                    label3.forEach(function(labels){
                                        let newOption = document.createElement("option");
                                        newOption.text = labels
                                        newOption.value = labels
                                        selectTrait7.appendChild(newOption)
                                      })
                
                                    label3.forEach(function(labels){
                                        let newOption = document.createElement("option");
                                        newOption.text = labels
                                        newOption.value = labels
                                        selectTrait8.appendChild(newOption)
                                    })

                                    label3.forEach(function(labels){
                                        let newOption = document.createElement("option");
                                        newOption.text = labels
                                        newOption.value = labels
                                        selectTrait9.appendChild(newOption)
                                    })
                
                                    var val = [fee1,fee2,fee3,fee4,fee5,fee6,fee7,fee8,fee9,fee10,
                                        fee11,fee12,fee13,fee14,fee15,fee16,fee17,fee18,fee19,fee20,
                                        fee21,fee22,fee23,fee24,fee25,fee26,fee27,fee28,fee29,fee30,
                                        fee31,fee32,fee33,fee34,fee35,fee36,fee37,fee38,fee39,fee40,
                                        fee41,fee42,fee43,fee44,fee45,fee46,fee47,fee48,fee49,fee50,
                                        fee51,fee52,fee53,fee54,fee55,fee56,fee57,fee58,fee59,fee60,
                                        fee61,fee62,fee63,fee64,fee65,fee66,fee67,fee68,fee69,fee70,
                                        fee71,fee72,fee73,fee74,fee75,fee76,fee77,fee78,fee79,fee80,
                                        fee81,fee82,fee83,fee84,fee85,fee86,fee87,fee88,fee89,fee90,
                                        fee91,fee92,fee93,fee94,fee95,fee96,fee97,fee98,fee99,fee100,
        
                                    ]
                
                                    var a = document.getElementById("selectTrait7");
                                    for (var i = 0; i < a.length; i++) {
                                        var option = a.options[i];
                                        option.value = val[i]
                                    }
                
                                    var b = document.getElementById("selectTrait8");
                                    for (var i = 0; i < a.length; i++) {
                                        var option = b.options[i];
                                        option.value = val[i]
                                    }

                                    var c = document.getElementById("selectTrait9");
                                    for (var i = 0; i < a.length; i++) {
                                        var option = c.options[i];
                                        option.value = val[i]
                                    }
                
                                }   
                
                              
                
                                var dt = [];
                               
                                var fee1=[]; var fee2=[]; var fee3=[]; var fee4=[]; var fee5=[]     
                                var fee6=[]; var fee7=[]; var fee8=[]; var fee9=[]; var fee10=[]     
                                var fee11=[]; var fee12=[]; var fee13=[]; var fee14=[]; var fee15=[]     
                                var fee16=[]; var fee17=[]; var fee18=[]; var fee19=[]; var fee20=[]
                                var fee21=[]; var fee22=[]; var fee23=[]; var fee24=[]; var fee25=[]     
                                var fee26=[]; var fee27=[]; var fee28=[]; var fee29=[]; var fee30=[]
                                var fee31=[]; var fee32=[]; var fee33=[]; var fee34=[]; var fee35=[]     
                                var fee36=[]; var fee37=[]; var fee38=[]; var fee39=[]; var fee40=[]     
                                var fee41=[]; var fee42=[]; var fee43=[]; var fee44=[]; var fee45=[]     
                                var fee46=[]; var fee47=[]; var fee48=[]; var fee49=[]; var fee50=[]   
                                var fee51=[]; var fee52=[]; var fee53=[]; var fee54=[]; var fee55=[]     
                                var fee56=[]; var fee57=[]; var fee58=[]; var fee59=[]; var fee60=[]
                                var fee61=[]; var fee62=[]; var fee63=[]; var fee64=[]; var fee65=[]     
                                var fee66=[]; var fee67=[]; var fee68=[]; var fee69=[]; var fee70=[]
                                var fee71=[]; var fee72=[]; var fee73=[]; var fee74=[]; var fee75=[]     
                                var fee76=[]; var fee77=[]; var fee78=[]; var fee79=[]; var fee80=[]
                                var fee81=[]; var fee82=[]; var fee83=[]; var fee84=[]; var fee85=[]     
                                var fee86=[]; var fee87=[]; var fee88=[]; var fee89=[]; var fee90=[]
                                var fee91=[]; var fee92=[]; var fee93=[]; var fee94=[]; var fee95=[]     
                                var fee96=[]; var fee97=[]; var fee98=[]; var fee99=[]; var fee100=[]  
                              
                                
                                chart3()
        
                                async function chart3(){
                                await chart1()
                                await chart2();
                                await getData3()
                         
                                var ctx = document.getElementById('chart3').getContext('2d');
                                var purple_orange_gradient = ctx.createLinearGradient(0, 0, 0, 300);
                                purple_orange_gradient.addColorStop(0, 'blue');
                                purple_orange_gradient.addColorStop(1, 'purple');
                
                                var myChart3 = new Chart(ctx, {
                
                                type: 'bar',
                                data: {
                                    labels : dt,
                                    datasets: [
                                        {
                                            label: pool1[0],
                                            data: fee1,
                                            backgroundColor: 'rgba(32, 105, 255, 0.6)',
                                            borderColor: 'rgba(32, 105, 255, 1)',
                                            borderWidth: 5,
                                            hoverBorderColor: 'white',
                                            hoverBorderWidth: 2,
                                            hidden:false,
                                            fill: 'origin',
                            
                                        },
                                        {
                
                                        },
                                        {

                                        },
                                    ]
                                    
                                },
                                options: { //cutoutPercentage: 40,
                            responsive: true,
                            interaction: {
                      mode: 'index',
                      intersect: false,
                    },
                                    plugins: {
                                        
                                        title: {
                                display: false,
                                text: 'Volume',
                                color: 'white',
                                    font: {
                                        size: 20,
                
                                    }
                            },
                            legend: {
                                    display:true,
                                labels: {
                                    // This more specific font property overrides the global property
                                    color: 'white',
                                    font: {
                                        size: 14,
                
                                    }
                                    
                                }
                            },
                           
                        },
                        scales:{
                            y: {
                                display: true,
                                ticks:{ 
                                    
                                    color:'white',
                                    font:{
                                        size:16
                                    },
                                },
                                title: {
                                    display: true,
                                    text: 'Fees Collected (USD)',
                                    color:'white',
                                    font:{
                                        size:16
                                    },
                                }
                                },
                            
                                x: {
                                display: false,
                                ticks:{ 
                
                                    color:'white',
                                    font:{
                                        size:12
                                    },
                
                                }
                            }
                                }
                                }});
                       
                                const selectTrait7 = document.getElementById('selectTrait7')
                                selectTrait7.addEventListener('change', traitTracker7)
                                function traitTracker7(){
                                    console.log(selectTrait7.value)
                                    var shit = []
                                    for (var i = 0; i < 31; i++) {
                                        var shit = selectTrait7.value.split(',').map(el => {
                                            let n = Number(el);
                                            return n === 0 ? n : n || el;
                                          });                    }
                
                                    myChart3.data.datasets[0].data = shit
                                    myChart3.data.datasets[0].label = selectTrait7.options[selectTrait7.selectedIndex].text
                
                                    myChart3.update()
                                }
                                const selectTrait8 = document.getElementById('selectTrait8')
                                selectTrait8.addEventListener('change', traitTracker8)
                                function traitTracker8(){
                                    console.log(selectTrait8.value)
                                    var shit = []
                                    for (var i = 0; i < 31; i++) {
                                        var shit = selectTrait8.value.split(',').map(el => {
                                            let n = Number(el);
                                            return n === 0 ? n : n || el;
                                          });                    }
                                    console.log(shit)
                
                                    if(myChart3.data.datasets[1].data === null){
                                    myChart3.data.datasets.push({
                                        label:selectTrait8.options[selectTrait8.selectedIndex].text,
                                        data:shit,
                                        backgroundColor: 'rgba(245, 40, 145, 0.8)',
                                        borderColor: 'rgba(245, 40, 145, 1)',
                                        borderWidth: 5,
                                        hoverBorderColor: 'white',
                                        hoverBorderWidth: 2,
                                        type:'line',
                                    })
                                
                                    myChart3.update()
                                }else{
                                    myChart3.data.datasets[1].data = shit
                                    myChart3.data.datasets[1].label = selectTrait8.options[selectTrait8.selectedIndex].text
                                    myChart3.data.datasets[1].backgroundColor = 'rgba(245, 40, 145, 0.8)'
                                    myChart3.data.datasets[1].borderColor = 'rgba(245, 40, 145, 1)'
                                    myChart3.data.datasets[1].borderWidth = 5
                                    myChart3.data.datasets[1].hoverBorderColor = 'white'
                                    myChart3.data.datasets[1].fill = 'origin'
                                    myChart3.update()
                
                
                                }
                                }
                                const selectTrait9 = document.getElementById('selectTrait9')
                                selectTrait9.addEventListener('change', traitTracker9)
                                function traitTracker9(){
                                    console.log(selectTrait9.value)
                                    var shit = []
                                    for (var i = 0; i < 31; i++) {
                                        var shit = selectTrait9.value.split(',').map(el => {
                                            let n = Number(el);
                                            return n === 0 ? n : n || el;
                                          });                    }
                                    console.log(shit)
                
                                    if(myChart3.data.datasets[2].data === null){
                                    myChart3.data.datasets.push({
                                        label:selectTrait9.options[selectTrait9.selectedIndex].text,
                                        data:shit,
                                        backgroundColor: 'rgba(245, 212, 39, 0.8)',
                                        borderColor: 'rgba(245, 212, 39, 1)',
                                        borderWidth: 5,
                                        hoverBorderColor: 'white',
                                        hoverBorderWidth: 2,
                                        type:'line',
                                    })
                                
                                    myChart3.update()
                                }else{
                                    myChart3.data.datasets[2].data = shit
                                    myChart3.data.datasets[2].label = selectTrait9.options[selectTrait9.selectedIndex].text
                                    myChart3.data.datasets[2].backgroundColor = 'rgba(245, 212, 39, 0.8)'
                                    myChart3.data.datasets[2].borderColor = 'rgba(245, 212, 39, 1)'
                                    myChart3.data.datasets[2].borderWidth = 5
                                    myChart3.data.datasets[2].hoverBorderColor = 'white'
                                    myChart3.data.datasets[2].fill = 'origin'
                                    myChart3.update()
                
                
                                }
                                }
                                }

                var url5 = 'https://node-api.flipsidecrypto.com/api/v2/queries/dea588a2-255a-4c1b-906e-90771d950a80/data/latest'
                             
                    
                async function getData5(){
                   const response = await fetch(url5);
                   const data = await response.json();
                   myArray3 = data;
                   var counter = data.length;
                   var i = 0;
                   while (counter >0){
                   snapshot.push(data[i])
                   pool_name.push(data[i].POOL_NAME)
                   pool_address.push(data[i].POOL_ADDRESS)
                   fee_tier.push(data[i].FEE_TIER)
                   tvl.push(data[i].TVL)

                   lp_in.push(data[i].N_LPERS_IN)
                   lp_out.push(data[i].N_LPERS_OUT)
                   num_swap.push(data[i].N_SWAPS)
                   swapper.push(data[i].N_SWAPPERS)
                   volume.push(data[i].SWAP_VOLUME_F)
                   fees.push(data[i].FEES_COLLECTED)
                   il.push(data[i].IL)
                   below_pos.push(data[i].BELOW_POSITIONS)
                   total_pos.push(data[i].TOTAL_POSITION)
                   above_pos.push(data[i].ABOVE_POSITIONS)



                   i++;
                   counter--;
                   }
                   }
       
                   var myArray3 = [];
                   var snapshot = []
                   var pool_name = []
                   var pool_address = []
                   var fee_tier = []
                   var tvl = []
                   var lp_in = []
                   var lp_out = []
                   var num_swap = []
                   var swapper = []
                   var volume = []
                   var fees = []
                   var il = []
                   var below_pos = []
                   var above_pos = []
                   var total_pos = []



                   var myList = []


               var state = {
                    'querySet': snapshot,
                    'page': 1,
                    'rows' : 10,

                    'window': 5, 
               }
               
       
               function pagination(querySet, page, rows){
                   var trimStart = (page - 1) * rows
                   var trimEnd = trimStart + rows
       
                   var trimmedData = querySet.slice(trimStart, trimEnd)
       
                   var pages = Math.ceil(querySet.length /rows)
       
                   return{
                       'querySet': trimmedData,
                       'pages': pages
                   }
                }
       
               


                async function buildTable(){
                   await getData5();
                   var table2 = document.getElementById('swap_table')
                   table2.innerHTML = ''
       
                   var data = pagination(state.querySet, state.page, state.rows)

                   var myList = data.querySet;
            
                   console.log(myList)

                   for( var i = 0; i <myList.length;i++){
                       var row2 = `<tr>
                                       <td><a href="https://info.uniswap.org/#/pools/${myList[i].POOL_ADDRESS}" style="font-size:15px">${myList[i].POOL_NAME}</a></td>
                                       <td>${myList[i].FEE_TIER}</td>
                                       <td>${myList[i].TVL}</td>
                                       <td>${myList[i].N_SWAPS}</td>
                                       <td>${myList[i].N_SWAPPERS}</td>
                                       <td>${myList[i].SWAP_VOLUME_F}</td>
                                       <td>${myList[i].N_LPERS_IN}</td>
                                       <td>${myList[i].N_LPERS_OUT}</td>
                                       <td>${myList[i].TOTAL_POSITION}</td>
                                       <td>${myList[i].BELOW_POSITIONS}</td>
                                       <td>${myList[i].ABOVE_POSITIONS}</td>
                                       <td>${myList[i].IL}</td>


                                           <tr>`
                       
                           table2.innerHTML += row2;
       
                           }
                        
                           changeButton(data.pages)
                }

                
                async function buildTable2(){
                    var table2 = document.getElementById('swap_table')
                    table2.innerHTML = ''
        
                    var data = pagination(state.querySet, state.page, state.rows)

                    var myList = data.querySet;
             
                    console.log("Data:" , myList)

                    for( var i = 0; i <myList.length;i++){
                        var row2 = `<tr>
                                        <td><a href="https://info.uniswap.org/#/pools/${myList[i].POOL_ADDRESS}" style="font-size:15px">${myList[i].POOL_NAME}</a></td>
                                        <td>${myList[i].FEE_TIER}</td>
                                        <td>${myList[i].TVL}</td>
                                        <td>${myList[i].N_SWAPS}</td>
                                        <td>${myList[i].N_SWAPPERS}</td>
                                        <td>${myList[i].SWAP_VOLUME_F}</td>
                                        <td>${myList[i].N_LPERS_IN}</td>
                                        <td>${myList[i].N_LPERS_OUT}</td>
                                        <td>${myList[i].TOTAL_POSITION}</td>
                                        <td>${myList[i].BELOW_POSITIONS}</td>
                                        <td>${myList[i].ABOVE_POSITIONS}</td>
                                        <td>${myList[i].IL}</td>

                                            <tr>`
                        
                            table2.innerHTML += row2;
        
                            }
                         
                            changeButton(data.pages)
                 }
       
                           function changeButton(pages) {
                            var table3 = document.getElementById('swap_table_button')

                            var maxLeft = (state.page - Math.floor(state.window /2))
                            var maxRight = (state.page + Math.floor(state.window /2))

                            if (maxLeft <1) {
                                maxLeft = 1
                                maxRight = state.window
                            }

                            if (maxRight > pages){
                                maxLeft = pages - (state.window - 1)

                                maxRight = pages

                                if(maxLeft < 1){
                                    maxLeft = 1
                                }
                            }

                            for ( var page = maxLeft; page <= maxRight; page++){
                                table3.innerHTML += `<button value=${page} class="usdc">${page}</button>`
                                
                                } 

                                if (state.page != 1){
                                    table3.innerHTML = `<button value=${1} class="usdc">First </button>` + table3.innerHTML
                                }
                    
                                if (state.page != pages){
                                    table3.innerHTML += `<button value=${pages} class="usdc"> Last </button>`
                                }


                                $('.usdc').on('click', function(){
                                console.log('shit')
                                table3.innerHTML =''

                                state.page = Number($(this).val())
                                buildTable2()
                                })
                        }
                    
               $('#table_header2 th').on('click', function(){
                var data = pagination(state.querySet, state.page, state.rows)

                var myList = data.querySet;
                console.log(myList)

                       var column2 = $(this).data('column')
                       var order2 = $(this).data('order')
                       var text2 = $(this).html()
                       text2 = text2.substring(0, text2.length - 1)
                       console.log(text2)
                       
                       if(order2 == "asc"){
                           $(this).data('order', 'desc')
                           myList = myList.sort((a,b) => a[column2] > b[column2] ? 1: -1)
                           text2 += '&#9660'
       
                       }else{
                           $(this).data('order', 'asc')
                           myList = myList.sort((a,b) => a[column2] < b[column2] ? 1: -1)
                           text2 += '&#9650'
       
                       }
                       $(this).html(text2)
                       var table2 = document.getElementById('swap_table')
                       table2.innerHTML = '';


                       for( var i = 0; i <myList.length;i++){


                        var row3 = `<tr>
                                        <td><a href="https://info.uniswap.org/#/pools/${myList[i].POOL_ADDRESS}" style="font-size:15px">${myList[i].POOL_NAME}</a></td>
                                        <td>${myList[i].FEE_TIER}</td>
                                        <td>${myList[i].TVL}</td>
                                        <td>${myList[i].N_SWAPS}</td>
                                        <td>${myList[i].N_SWAPPERS}</td>
                                        <td>${myList[i].SWAP_VOLUME_F}</td>
                                        <td>${myList[i].N_LPERS_IN}</td>
                                        <td>${myList[i].N_LPERS_OUT}</td>
                                        <td>${myList[i].TOTAL_POSITION}</td>
                                        <td>${myList[i].BELOW_POSITIONS}</td>
                                        <td>${myList[i].ABOVE_POSITIONS}</td>
                                        <td>${myList[i].IL}</td>
        
                                            <tr>`
                        
                            table2.innerHTML += row3;


                    }

                }) 
                
           
       
           

           buildTable();
           

        

        $('#search').on('keyup', function(){
        var value = $(this).val()

        var data = searchtable(value, snapshot)
        var table2 = document.getElementById('swap_table')
        table2.innerHTML = ''

        for( var i = 0; i < data.length;i++){
        var row2 = `<tr>
                        <td><a href="https://info.uniswap.org/#/pools/${data[i].POOL_ADDRESS}" style="font-size:15px">${data[i].POOL_NAME}</a></td>
                        <td>${data[i].FEE_TIER}</td>
                        <td>${data[i].TVL}</td>
                        <td>${data[i].N_SWAPS}</td>
                        <td>${data[i].N_SWAPPERS}</td>
                        <td>${data[i].SWAP_VOLUME_F}</td>
                        <td>${data[i].N_LPERS_IN}</td>
                        <td>${data[i].N_LPERS_OUT}</td>
                        <td>${data[i].TOTAL_POSITION}</td>
                        <td>${data[i].BELOW_POSITIONS}</td>
                        <td>${data[i].ABOVE_POSITIONS}</td>
                        <td>${data[i].IL}</td>

                            <tr>`
        table2.innerHTML += row2;
        }

        })

        function searchtable(value, data){
        var filteredData = []

        for (var i =0; i<data.length; i++){
        value = value.toLowerCase()
        var name = data[i].POOL_NAME.toLowerCase()

        if(name.includes(value)){
        filteredData.push(data[i])
        console.log(filteredData)
        }
        }
        return filteredData
        }
                
               