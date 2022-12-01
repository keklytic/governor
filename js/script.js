var url1 = 'https://node-api.flipsidecrypto.com/api/v2/queries/eb4fbcf2-67d5-4526-b605-ad992e438810/data/latest'


        async function getData1(){
                    const response = await fetch(url1);
                    const data = await response.json();
                    var counter = data.length;
                    var i = 0;
                    while (counter >0){
                    date_1.push(data[i].BSC_DT)
                    bsc_voter.push(data[i].BSC_VOTER);
                    eth_voter.push(data[i].ETH_VOTER);
                    arb_voter.push(data[i].ARB_VOTER);
                    pol_voter.push(data[i].POL_VOTER);
                    ava_voter.push(data[i].AVA_VOTER);
                    fan_voter.push(data[i].FAN_VOTER);
                    opt_voter.push(data[i].OPT_VOTER);
                    har_voter.push(data[i].HAR_VOTER);


                    i++;
                    counter--;
                    }

                }

                var date_1 = [];
                var bsc_voter = [];      
                var eth_voter = [];     
                var arb_voter = [];     
                var pol_voter = [];    
                var ava_voter = [];     
                var fan_voter = [];    
                var opt_voter = [];      
                var har_voter = [];     


              


                chart1();

                async function chart1(){
                await getData1();
         
                var ctx = document.getElementById('chart1').getContext('2d');
                var purple_orange_gradient = ctx.createLinearGradient(0, 0, 0, 300);
                purple_orange_gradient.addColorStop(0, 'blue');
                purple_orange_gradient.addColorStop(1, 'purple');

                var myChart = new Chart(ctx, {

                type: 'bar',
                data: {
                    labels: date_1,
                    datasets: [{
                        label: 'BSC',
                        data: bsc_voter,
                        backgroundColor: 'rgba(239, 245, 39, 0.8)',
                        borderColor: 'rgba(239, 245, 39, 0.8)',
                        borderWidth: 3,
                        hoverBorderColor: 'white',
                        hoverBorderWidth: 2,
                        hidden:false,
                       
                    },
                    {
                        label: 'Ethereum',
                        data: eth_voter,
                        backgroundColor: 'rgba(39, 123, 245, 0.8)',
                        borderColor: 'rgba(39, 123, 245, 0.8)',
                        borderWidth: 3,
                        hoverBorderColor: 'white',
                        hoverBorderWidth: 2,
                        hidden:false,
                       
                    },{
                        label: 'Arbitrum',
                        data: arb_voter,
                        backgroundColor: 'rgba(41, 39, 245, 0.8)',
                        borderColor: 'rgba(41, 39, 245, 0.8)',
                        borderWidth: 3,
                        hoverBorderColor: 'white',
                        hoverBorderWidth: 2,
                        hidden:false,
                       
                    },{
                        label: 'Polygon',
                        data: pol_voter,
                        backgroundColor: 'rgba(195, 39, 245, 0.8)',
                        borderColor: 'rgba(195, 39, 245, 0.8)',
                        borderWidth: 3,
                        hoverBorderColor: 'white',
                        hoverBorderWidth: 2,
                        hidden:false,
                       
                    },{
                        label: 'Avalanche',
                        data: ava_voter,
                        backgroundColor: 'rgba(245, 45, 39, 0.8)',
                        borderColor: 'rgba(245, 45, 39, 0.8)',
                        borderWidth: 3,
                        hoverBorderColor: 'white',
                        hoverBorderWidth: 2,
                        hidden:false,
                       
                    },{
                        label: 'Fantom',
                        data: fan_voter,
                        backgroundColor: 'rgba(35, 190, 140, 0.8)',
                        borderColor: 'rgba(35, 190, 140, 0.8)',
                        borderWidth: 3,
                        hoverBorderColor: 'white',
                        hoverBorderWidth: 2,
                        hidden:false,
                       
                    },{
                        label: 'Optimsm',
                        data: opt_voter,
                        backgroundColor: 'rgba(248, 0, 0, 0.8)',
                        borderColor: 'rgba(248, 0, 0, 0.8)',
                        borderWidth: 3,
                        hoverBorderColor: 'white',
                        hoverBorderWidth: 2,
                        hidden:false,
                       
                    },{
                        label: 'Harmony',
                        data: har_voter,
                        backgroundColor: 'rgba(0, 248, 111, 0.8)',
                        borderColor: 'rgba(0, 248, 111, 0.8)',
                        borderWidth: 3,
                        hoverBorderColor: 'white',
                        hoverBorderWidth: 2,
                        hidden:false,
                       
                    },
                    
                  
                    ]},
                options: { //cutoutPercentage: 40,
            responsive: true,
            interaction: {
      mode: 'index',
      intersect: false,
    },
                    plugins: {
                        title: {
                display: false,
                text: 'Top 5 Chain With Most Voter All-Time',
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
                        size: 12,

                    }
                    
                }
            }
        },
        scales:{
            y: {
                display: true,
                stacked: true,
                position: 'left',
                ticks:{ 
                    
                    color:'white',
                    font:{
                        size:16
                    },
                },
                title: {
                    display: true,
                    text: 'Number of Voters',
                    color:'white',
                    font:{
                        size:16
                    },
                }
                },
            
                x: {
                display: true,
                stacked: true,
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




                var url1_5 = 'https://node-api.flipsidecrypto.com/api/v2/queries/eb4fbcf2-67d5-4526-b605-ad992e438810/data/latest'


                async function getData1_5(){
                            const response = await fetch(url1_5);
                            const data = await response.json();
                            var counter = data.length;
                            var i = 0;
                            while (counter >0){
                            date_1_5.push(data[i].BSC_DT)
                            bsc_cumu_voter.push(data[i].BSC_CUMU_VOTER);
                            eth_cumu_voter.push(data[i].ETH_CUMU_VOTER);
                            arb_cumu_voter.push(data[i].ARB_CUMU_VOTER);
                            pol_cumu_voter.push(data[i].POL_CUMU_VOTER);
                            ava_cumu_voter.push(data[i].AVA_CUMU_VOTER);
                            fan_cumu_voter.push(data[i].FAN_CUMU_VOTER);
                            opt_cumu_voter.push(data[i].OPT_CUMU_VOTER);
                            har_cumu_voter.push(data[i].HAR_CUMU_VOTER);
        
        
                            i++;
                            counter--;
                            }
        
                        }
        
                        var date_1_5 = [];
                        var bsc_cumu_voter = []; 
                        var eth_cumu_voter = []; 
                        var arb_cumu_voter = []; 
                        var pol_cumu_voter = []; 
                        var ava_cumu_voter = []; 
                        var fan_cumu_voter = []; 
                        var opt_cumu_voter = []; 
                        var har_cumu_voter = []; 
        
        
        



                chart1_5();

                async function chart1_5(){
                await getData1_5()

                var ctx = document.getElementById('chart1_5').getContext('2d');
                var purple_orange_gradient = ctx.createLinearGradient(0, 0, 0, 300);
                purple_orange_gradient.addColorStop(0, 'blue');
                purple_orange_gradient.addColorStop(1, 'purple');

                var myChart = new Chart(ctx, {

                type: 'line',
                data: {
                    labels: date_1_5,
                    datasets: [{
                        label: 'BSC',
                        data: bsc_cumu_voter,
                        backgroundColor: 'rgba(239, 245, 39, 0.6)',
                        borderColor: 'rgba(239, 245, 39, 1)',
                        borderWidth: 1,
                        hoverBorderColor: 'white',
                        hoverBorderWidth: 2,
                        pointRadius: 1,
                        hidden:false,
                        fill: 'origin',      // 0: fill to 'origin'

                    },
                    {
                        label: 'Ethereum',
                        data: eth_cumu_voter,
                        backgroundColor: 'rgba(39, 123, 245, 0.6)',
                        borderColor: 'rgba(39, 123, 245, 1)',
                        borderWidth: 1,
                        hoverBorderColor: 'white',
                        hoverBorderWidth: 2,
                        pointRadius: 1,
                        hidden:false,
                        fill: 'origin',      // 0: fill to 'origin'

                    },{
                        label: 'Arbitrum',
                        data: arb_cumu_voter,
                        backgroundColor: 'rgba(41, 39, 245, 0.6)',
                        borderColor: 'rgba(41, 39, 245, 1)',
                        borderWidth: 1,
                        hoverBorderColor: 'white',
                        hoverBorderWidth: 2,
                        pointRadius: 1,
                        hidden:false,
                        fill: 'origin',      // 0: fill to 'origin'
                       
                    },{
                        label: 'Polygon',
                        data: pol_cumu_voter,
                        backgroundColor: 'rgba(195, 39, 245, 0.6)',
                        borderColor: 'rgba(195, 39, 245, 1)',
                        borderWidth: 1,
                        hoverBorderColor: 'white',
                        hoverBorderWidth: 2,
                        pointRadius: 1,
                        hidden:false,
                        fill: 'origin',      // 0: fill to 'origin'

                    },{
                        label: 'Avalanche',
                        data: ava_cumu_voter,
                        backgroundColor: 'rgba(245, 45, 39, 0.6)',
                        borderColor: 'rgba(245, 45, 39, 1)',
                        borderWidth: 1,
                        hoverBorderColor: 'white',
                        hoverBorderWidth: 2,
                        pointRadius: 1,
                        hidden:false,
                        fill: 'origin',      // 0: fill to 'origin'

                    },{
                        label: 'Fantom',
                        data: fan_cumu_voter,
                        backgroundColor: 'rgba(35, 190, 140, 0.6)',
                        borderColor: 'rgba(35, 190, 140, 1)',
                        borderWidth: 1,
                        hoverBorderColor: 'white',
                        hoverBorderWidth: 2,
                        pointRadius: 1,
                        hidden:false,
                        fill: 'origin',      // 0: fill to 'origin'

                    },{
                        label: 'Optimsm',
                        data: opt_cumu_voter,
                        backgroundColor: 'rgba(248, 0, 0, 0.6)',
                        borderColor: 'rgba(248, 0, 0, 1)',
                        borderWidth: 1,
                        hoverBorderColor: 'white',
                        hoverBorderWidth: 2,
                        pointRadius: 1,
                        hidden:false,
                        fill: 'origin',      // 0: fill to 'origin'

                    },{
                        label: 'Harmony',
                        data: har_cumu_voter,
                        backgroundColor: 'rgba(0, 248, 111, 0.6)',
                        borderColor: 'rgba(0, 248, 111, 1)',
                        borderWidth: 1,
                        hoverBorderColor: 'white',
                        hoverBorderWidth: 2,
                        pointRadius: 1,
                        hidden:false,
                        fill: 'origin',      // 0: fill to 'origin'

                    },
                    
                  
                    ]},
                options: { //cutoutPercentage: 40,
            responsive: true,
            interaction: {
      mode: 'index',
      intersect: false,
    },
                    plugins: {
                        title: {
                display: false,
                text: 'Top 5 Chain With Most Voter All-Time',
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
                        size: 12,

                    }
                    
                }
            }
        },
        scales:{
            y: {
                display: true,
                position: 'left',
                stacked: true,
                ticks:{ 
                    color:'white',
                    font:{
                        size:16
                    },
                },
                title: {
                    display: true,
                    text: 'Number of Voters',
                    color:'white',
                    font:{
                        size:16
                    },
                }
                },
            
                x: {
                display: true,
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




var url2 = 'https://node-api.flipsidecrypto.com/api/v2/queries/097e10bb-24fb-4e39-9073-fcaa9f197940/data/latest'


        async function getData2(){
                    const response = await fetch(url2);
                    const data = await response.json();
                    var counter = data.length;
                    var i = 0;
                    while (counter >15){
                    num_voter.push(data[i].NUM_VOTER)
                    network.push(data[i].NETWORK);
                 

                    i++;
                    counter--;
                    }

                }

                var num_voter = [];
                var network = [];
                

                var url2_5 = 'https://node-api.flipsidecrypto.com/api/v2/queries/b34df49e-c1c8-4438-9f78-665256da165e/data/latest'


                async function getData2_5(){
                            const response = await fetch(url2_5);
                            const data = await response.json();
                            var counter = data.length;
                            var i = 0;
                            while (counter >0){
                            today_voter.push(data[i].TODAY_VOTER)
                            today_proposal.push(data[i].TODAY_PROPOSAL);
                            space_id.push(data[i].SPACE_ID);
                            network_today.push(data[i].NETWORK);

        
                            i++;
                            counter--;
                            }
                            document.getElementById('today_voter').textContent = today_voter[0]
                            document.getElementById('today_proposal').textContent = today_proposal[0]
                            document.getElementById('space_id').textContent = space_id[0]
                            document.getElementById('network_today').textContent = network_today[0]

                        }
        
                        var today_voter = [];
                        var today_proposal = [];
                        var space_id = [];
                        var network_today = [];


                chart2();

                async function chart2(){
                await getData2();
                await getData2_5();
         
                var ctx = document.getElementById('chart2').getContext('2d');
                var purple_orange_gradient = ctx.createLinearGradient(0, 0, 0, 300);
                purple_orange_gradient.addColorStop(0, 'blue');
                purple_orange_gradient.addColorStop(1, 'purple');

                var myChart = new Chart(ctx, {

                type: 'bar',
                data: {
                    labels: network,
                    datasets: [{
                        label: 'Voter',
                        data: num_voter,
                        backgroundColor: 'rgba(245, 40, 145, 0.3)',
                        borderColor: 'rgba(245, 40, 145, 1)',
                        borderWidth: 3,
                        hoverBorderColor: 'white',
                        hoverBorderWidth: 2,
                        hidden:false,
                       
                    },
                    
                  
                    ]},
                options: { //cutoutPercentage: 40,
            responsive: true,
            interaction: {
      mode: 'index',
      intersect: false,
    },
                    plugins: {
                        title: {
                display: false,
                text: 'Top 5 Chain With Most Voter All-Time',
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
                        size: 16,
                        style: 'inherit',

                    }
                    
                }
            }
        },
        scales:{
            y: {
                display: true,
                position: 'left',
                ticks:{ 
                    
                    color:'white',
                    font:{
                        size:16
                    },
                },
                title: {
                    display: true,
                    text: 'Number of Voters',
                    color:'white',
                    font:{
                        size:16
                    },
                }
                },
            
                x: {
                display: true,
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

            
                var url3 = 'https://node-api.flipsidecrypto.com/api/v2/queries/097e10bb-24fb-4e39-9073-fcaa9f197940/data/latest'


                async function getData3(){
                            const response = await fetch(url3);
                            const data = await response.json();
                            var counter = data.length;
                            var i = 10;
                            while (counter >15){
                            num_voter2.push(data[i].NUM_VOTER)
                            network2.push(data[i].NETWORK);
                         
        
                            i++;
                            counter--;
                            }
        
                        }
        
                        var num_voter2 = [];
                        var network2 = [];
                        
        
        
                        chart3();
        
                        async function chart3(){
                        await getData3();
                 
                        var ctx = document.getElementById('chart3').getContext('2d');
                        var purple_orange_gradient = ctx.createLinearGradient(0, 0, 0, 300);
                        purple_orange_gradient.addColorStop(0, 'blue');
                        purple_orange_gradient.addColorStop(1, 'purple');
        
                        var myChart2 = new Chart(ctx, {
        
                        type: 'bar',
                        data: {
                            labels: network2,
                            datasets: [{
                                label: 'Voter',
                                data: num_voter2,
                                backgroundColor: 'rgba(245, 40, 145, 0.3)',
                                borderColor: 'rgba(245, 40, 145, 1)',
                                borderWidth: 3,
                                hoverBorderColor: 'white',
                                hoverBorderWidth: 2,
                                hidden:false,
                               
                            },
                            
                          
                            ]},
                        options: { //cutoutPercentage: 40,
                    responsive: true,
                    interaction: {
              mode: 'index',
              intersect: false,
            },
                            plugins: {
                                title: {
                        display: false,
                        text: 'Top 5 Chain With Most Proposal Live',
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
                                size: 16,
                                style: 'inherit',
        
                            }
                            
                        }
                    }
                },
                scales:{
                    y: {
                        display: true,
                        position: 'left',
                        ticks:{ 
                            
                            color:'white',
                            font:{
                                size:16
                            },
                        },
                        title: {
                            display: true,
                            text: 'Number Of Voters',
                            color:'white',
                            font:{
                                size:16
                            },
                        }
                        },
                   
                        x: {
                        display: true,
                        ticks:{ 
                           
                            color:'white',
                            font:{
                                size:11
                            },
        
                        }
                    }
                        }
                        }});
               
                        }



                
                        var url4 = 'https://node-api.flipsidecrypto.com/api/v2/queries/70b7ec57-0392-4995-8296-5759e9fb83d8/data/latest'
                             
                    
                        async function getData4(){
                           const response = await fetch(url4);
                           const data = await response.json();
                           myArray3 = data;
                           var counter = data.length;
                           var i = 0;
                           while (counter >0){
                           snapshot.push(data[i])
                           network3.push(data[i].NETWORK)
                           icon_network.push(data[i].ICON)
                        
                           i++;
                           counter--;
                           }
                           }
               
                           var myArray3 = [];
                           var snapshot = []
                           var network3 = []
                           var icon_network = []
                          
               
                       var state = {
                            'querySet': snapshot,
                            'page': 1,
                            'rows' : 10,
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
               
                        function changeButton(pages) {
                       var table3 = document.getElementById('swap_table_button')
                       
                       for ( var page = 1; page <= 3; page++){
                           table3.innerHTML += `<button value=${page} class="usdc">${page}</button>`
                           } 
               
                           $('.usdc').on('click', function(){
                           console.log('shit')
                           table3.innerHTML =''
                           state.page = $(this).val()
                           buildTable()
                           })
                   }
                        

                        async function buildTable(){
                           await getData4();
                           var table2 = document.getElementById('swap_table')
                           table2.innerHTML = ''
               
                           
                        
                      
                               for( var i = 0; i <myArray3.length;i++){
                                   var row2 = `<tr>
                                                   <td><img src="${myArray3[i].ICON}" style="width: 20px"> ${myArray3[i].NETWORK}</td>
                                                   <td>${myArray3[i].NUM_VOTER}</td>
                                                  

                                                   <tr>`
                               
                                   table2.innerHTML += row2;
               
                                   }
               
                            
                       $('#table_header2 th').on('click', function(){
                               var column2 = $(this).data('column')
                               var order2 = $(this).data('order')
                               var text2 = $(this).html()
                               text2 = text2.substring(0, text2.length - 1)
                               console.log(text2)
                               
                               if(order2 == "desc"){
                                   $(this).data('order', 'asc')
                                   myArray3 = myArray3.sort((a,b) => a[column2] > b[column2] ? 1: -1)
                                   text2 += '&#9660'
               
                               }else{
                                   $(this).data('order', 'desc')
                                   myArray3 = myArray3.sort((a,b) => a[column2] < b[column2] ? 1: -1)
                                   text2 += '&#9650'
               
                               }
                               $(this).html(text2)
                               var table2 = document.getElementById('swap_table')
                               table2.innerHTML = '';
                      
                               for( var i = 0; i <myArray3.length;i++){
                                   var row3 = `<tr>
                                                    <td><img src="${myArray3[i].ICON}" style="width: 20px"> ${myArray3[i].NETWORK}</td>
                                                    <td>${myArray3[i].NUM_VOTER}</td>
                                                 
                                                   <tr>`
               
                                   table2.innerHTML += row3;
                            }
               
                        }) 
                        
                   }
               
                   

                   buildTable();
                   

                   $(document).ready(function () {
                    $(".data-table").each(function (_, table) {
                      $(table).DataTable();
                    });
                  });

    
    $(document).ready(function(){
        $('#search').keyup(function(){
            search_table($(this).val())
        })

        function search_table(value){
            $('#example tr').each(function(){
                var found = 'false';
                $(this).each(function(){
                    if($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0)
                    {
                        found = 'true';

                    }
                });
                if(found == 'true')
                {
                    $(this).show();
                }
                else
                {
                    $(this).hide()
                }
            })
        }
    })