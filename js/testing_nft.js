var a_key = config.a_key;
var n_key = config.n_key;

var url1 = 'https://yields.llama.fi/pools'


        async function getData1(){
                    const response = await fetch(url1);
                    const data = await response.json();
                    var counter = data.data.length;
                    var i = 0;
                    var j = 0;
                    while (counter >0){
                        
                    if(data.data[i].project == 'uniswap'){
                        symbol.push(data.data[i].symbol)
                        pool.push(data.data[i].pool)                        
                    }
                    else{
                    

                    }

                    i++;
                    j++;
                    counter--;
                    }
                    for(var k=0; k<pool.length; k++){
                        yield.push(('https://yields.llama.fi/chart/').concat(pool[k]))
                    }
                    
                   
                }

                var symbol = []
                var pool = []
                var yield = []


              
                async function getData2(){

                        await getData1()

                        for (var l=0;l<yield.length;l++){
                        const response = await fetch(yield[l]);
                        const data = await response.json();

                        for (var p=0;p<data.data.length;p++){
                        date.push(data.data[p].timestamp)
                        apy.push(data.data[p].apy)


                        }
                        
                        

                        }
                            
                }

                     function getData3(){
                        for (var u=0;u<195;u++){
                            dt.push(date[u])
                            dt1.push(date[u+1*195])
                            dt2.push(date[u+2*195])
                            dt3.push(date[u+3*195])

        
                            }
                            for (var s=0; s<195; s++){
                            apy0.push(apy[s])
                            apy1.push(apy[s+1*195])
                            apy2.push(apy[s+2*195])
                            apy3.push(apy[s+3*195])
                            apy4.push(apy[s+4*195])
    
                            }
                            console.log(apy1,apy2)
                    }

                        var date = []; var dt=[]; var dt1=[]; var dt2=[]; var dt3=[]
                        var apy = []; var apy0=[];
                        var apy1 = []; var apy2=[]; var apy3=[]; var apy4=[]; var apy5=[] 


                        function callAPI_nftgo(){
                        const options = {
                            method: 'GET',
                            headers: {
                            Accept: 'application/json',
                            'X-API-KEY':n_key
                            }
                          };
                          fetch('https://data-api.nftgo.io/eth/v1/market/rank/marketplaces/3M?sort_by=volume&asc=false&offset=0&limit=50&exclude_wash_trading=false',options)
                            .then(response => response.json())
                            .then(response => console.log(response))
                            .catch(err => console.error(err));

                        }

                     

                        async function callAPI_alchemy(){
                            const options = {
                                method: 'GET',
                                headers: {
                                Accept: 'application/json',
                                'X-API-KEY':a_key
                                }
                              };
                              await fetch('https://eth-mainnet.g.alchemy.com/nft/v2/gv3pST7rqcqRl4awawlkBiUE61saQUBG/getNFTSales?startBlock=latest&startLogIndex=0&startBundleIndex=0&ascendingOrder=false&limit=100',options)
                              .then(res => {
                                return res.json();
                              })
                              .then((data) => {
                                data_alchemy = data;
                                console.log(data_alchemy)

                            })
                            for( var i=0; i<data_alchemy.nftSales.length; i++){
                            fetch(('https://eth-mainnet.g.alchemy.com/nft/v2/demo/getContractMetadata?contractAddress=').concat(data_alchemy.nftSales[i].contractAddress),options)
                            .then(res => {
                                return res.json();
                              })
                              .then((data) => {
                                contractName.push(data.contractMetadata.openSea.collectionName);
                                contractImg.push(data.contractMetadata.openSea.imageUrl);
                                
                            })
                            

                            }
                            console.log(contractName)
                            console.log(contractImg)
                        }

                            var data_alchemy = []
                            var contractName = []
                            var contractImg = []




                        async function chart1(){
                            await getData2()
                            await getData3()
                     
                            var ctx = document.getElementById('chart1').getContext('2d');
                            var purple_orange_gradient = ctx.createLinearGradient(0, 0, 0, 300);
                            purple_orange_gradient.addColorStop(0, 'blue');
                            purple_orange_gradient.addColorStop(1, 'purple');
            
                            var myChart = new Chart(ctx, {
            
                            type: 'bar',
                            data: {
                                labels : dt,
                                datasets: [
                                    {
                                        label: symbol[2],
                                        data: apy2,
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

                        }

                     
        
        
                           var myList = data_alchemy.nftSales
        
        
                       var state = {
                            'querySet': data_alchemy.nftSales,
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
                           await callAPI_alchemy();
                           console.log(data_alchemy)
                           var table2 = document.getElementById('swap_table')
                           table2.innerHTML = ''
               
        
                           
        
                           for( var i = 0; i <data_alchemy.nftSales.length;i++){
                               var row2 = `<tr>
                                               <td>${data_alchemy.nftSales[i].marketplace}</td>
                                               <td>${data_alchemy.nftSales[i].contractAddress}</td>
                                               
        
        
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
                        
                       