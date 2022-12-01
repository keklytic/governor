var url1 = 'https://node-api.flipsidecrypto.com/api/v2/queries/42215c83-18a7-4cf8-a167-0e595f51d2e7/data/latest'


        async function getData1(){
                    const response = await fetch(url1);
                    const data = await response.json();
                    var counter = data.length;
                    var i = 0;
                    while (counter >0){
                    date_1.push(data[i].BSC_DT)
                    bsc_proposal.push(data[i].BSC_PROPOSAL);
                    eth_proposal.push(data[i].ETH_PROPOSAL);
                    arb_proposal.push(data[i].ARB_PROPOSAL);
                    pol_proposal.push(data[i].POL_PROPOSAL);
                    ava_proposal.push(data[i].AVA_PROPOSAL);
                    fan_proposal.push(data[i].FAN_PROPOSAL);
                    opt_proposal.push(data[i].OPT_PROPOSAL);
                    har_proposal.push(data[i].HAR_PROPOSAL);


                    i++;
                    counter--;
                    }

                }

                var date_1 = [];
                var bsc_proposal = [];      
                var eth_proposal = [];     
                var arb_proposal = [];     
                var pol_proposal = [];    
                var ava_proposal = [];     
                var fan_proposal = [];    
                var opt_proposal = [];      
                var har_proposal = [];     


              


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
                        data: bsc_proposal,
                        backgroundColor: 'rgba(239, 245, 39, 0.8)',
                        borderColor: 'rgba(239, 245, 39, 0.8)',
                        borderWidth: 3,
                        hoverBorderColor: 'white',
                        hoverBorderWidth: 2,
                        hidden:false,
                       
                    },
                    {
                        label: 'Ethereum',
                        data: eth_proposal,
                        backgroundColor: 'rgba(39, 123, 245, 0.8)',
                        borderColor: 'rgba(39, 123, 245, 0.8)',
                        borderWidth: 3,
                        hoverBorderColor: 'white',
                        hoverBorderWidth: 2,
                        hidden:false,
                       
                    },{
                        label: 'Arbitrum',
                        data: arb_proposal,
                        backgroundColor: 'rgba(41, 39, 245, 0.8)',
                        borderColor: 'rgba(41, 39, 245, 0.8)',
                        borderWidth: 3,
                        hoverBorderColor: 'white',
                        hoverBorderWidth: 2,
                        hidden:false,
                       
                    },{
                        label: 'Polygon',
                        data: pol_proposal,
                        backgroundColor: 'rgba(195, 39, 245, 0.8)',
                        borderColor: 'rgba(195, 39, 245, 0.8)',
                        borderWidth: 3,
                        hoverBorderColor: 'white',
                        hoverBorderWidth: 2,
                        hidden:false,
                       
                    },{
                        label: 'Avalanche',
                        data: ava_proposal,
                        backgroundColor: 'rgba(245, 45, 39, 0.8)',
                        borderColor: 'rgba(245, 45, 39, 0.8)',
                        borderWidth: 3,
                        hoverBorderColor: 'white',
                        hoverBorderWidth: 2,
                        hidden:false,
                       
                    },{
                        label: 'Fantom',
                        data: fan_proposal,
                        backgroundColor: 'rgba(35, 190, 140, 0.8)',
                        borderColor: 'rgba(35, 190, 140, 0.8)',
                        borderWidth: 3,
                        hoverBorderColor: 'white',
                        hoverBorderWidth: 2,
                        hidden:false,
                       
                    },{
                        label: 'Optimsm',
                        data: opt_proposal,
                        backgroundColor: 'rgba(248, 0, 0, 0.8)',
                        borderColor: 'rgba(248, 0, 0, 0.8)',
                        borderWidth: 3,
                        hoverBorderColor: 'white',
                        hoverBorderWidth: 2,
                        hidden:false,
                       
                    },{
                        label: 'Harmony',
                        data: har_proposal,
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
                    text: 'Number of Proposal',
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



                var url2 = 'https://node-api.flipsidecrypto.com/api/v2/queries/83b89980-cff6-4801-b6cb-923fc47824f6/data/latest'


                async function getData2(){
                    const response = await fetch(url2);
                    const data = await response.json();
                    var counter = data.length;
                    var i = 0;
                    while (counter >0){
                    space_eth.push(data[i].SPACE_ID)
                    num_voter_space.push(data[i].NUM_VOTER);
                    gini_index.push(data[i].GINI_INDEX);
                    chartData.push({
                        x: (gini_index[i]),
                        y: (num_voter_space[i]),
                        r: (gini_index[i]),
                      });
        
                    dataset_bubble.push({
                        label: [(space_eth[i])],
                        backgroundColor: "rgba(63, 255, 32, 0.8)",
                        borderColor: "rgba(63, 255, 32, 1)",
                        pointRadius: 0.002,
                        data: [(chartData[i])]

                    })
                    i++;
                    counter--;
                    }
        
                }
        
                var space_eth = [];
                var num_voter_space = []
                var gini_index = []

                var dataset_bubble = []
                var chartData = [];
        
                
                console.log(dataset_bubble)
                chart2();
                async function chart2(){
                await getData2();
        
                var ctx3 = document.getElementById('chart2').getContext('2d');
                var purple_orange_gradient = ctx3.createLinearGradient(0, 0, 0, 300);
                purple_orange_gradient.addColorStop(0, 'blue');
                purple_orange_gradient.addColorStop(1, 'purple');
        
                var myChart3 = new Chart(ctx3, {
        
                type: 'bubble',
                data: {
                    labels: 'gini_index',
                    datasets: dataset_bubble
                
                
                    },
                options: { //cutoutPercentage: 40,
                responsive: true,
                
                    plugins: {
                        title: {
                display: true,
                text: 'Individual Space (Voters vs Gini Index)',
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
                        size: 8,
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
                    precision: 5,

                    color:'white',
                    font:{
                        size:12
                    },
                },
                title: {
                    display: true,
                    text: 'Gini Index of 20',
                    color:'white',
                    font:{
                        size:16
                    },
                }
                }
                }
                }});
        
                }


                
                        var url4 = 'https://node-api.flipsidecrypto.com/api/v2/queries/a5f1afdd-5f37-4a74-adaa-f1b41e6a2101/data/latest'
                             
                    
                        async function getData4(){
                           const response = await fetch(url4);
                           const data = await response.json();
                           myArray3 = data;
                           var counter = data.length;
                           var i = 0;
                           while (counter >0){
                           snapshot.push(data[i])
                           network_proposal.push(data[i].NETWORK)
                           space_id_proposal.push(data[i].SPACE_ID)

                           proposal_title.push(data[i].PROPOSAL_TITLE)

                           voter_proposal.push(data[i].NUM_VOTER)
                           avg_voting_power.push(data[i].AVG_VOTING_POWER)
                           most_choices.push(data[i].MOST_CHOICES)
                           gini_index_proposal.push(data[i].GINI_INDEX)


                           i++;
                           counter--;
                           }
                           }
               
                           var myArray3 = [];
                           var snapshot = []
                           var network_proposal = []
                           var space_id_proposal = []
                           var space_id_link = []

                           var proposal_title = []
                           var proposal_link = []

                           var voter_proposal = []
                           var voting_power = []
                           var avg_voting_power = []
                           var most_choices = []
                           var gini_index_proposal = []
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
               
                       
                        

                        async function buildTable(){
                           await getData4();
                           var table2 = document.getElementById('swap_table')
                           table2.innerHTML = ''
               
                           
                           
               
                      
                               for( var i = 0; i <myArray3.length;i++){
                                   var row2 = `<tr>
                                                   <td><img src="${myArray3[i].ICON}" style="width: 15px;"></td>
                                                   <td><a href="${myArray3[i].SPACE_LINK}" style="color:aqua">${myArray3[i].SPACE_ID}</a></td>
                                                   <td><a href="${myArray3[i].PROPOSAL_ID}" style="color:aquamarine">${myArray3[i].PROPOSAL_TITLE}</a></td>
                                                   <td>${myArray3[i].NUM_VOTER}</td>
                                                   <td>${myArray3[i].TOTAL_VOTING_POWER}</td>
                                                   <td>${myArray3[i].MOST_CHOICES}</td>
                                                   <td>${myArray3[i].GINI_INDEX}</td>


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
                                                    <td><img src="${myArray3[i].ICON}" style="width: 15px"></td>
                                                    <td><a href="${myArray3[i].SPACE_LINK}" style="color:aqua">${myArray3[i].SPACE_ID}</a></td>
                                                    <td><a href="${myArray3[i].PROPOSAL_ID}" style="color:aquamarine">${myArray3[i].PROPOSAL_TITLE}</a></td>
                                                    <td>${myArray3[i].NUM_VOTER}</td>
                                                    <td>${myArray3[i].TOTAL_VOTING_POWER}</td>
                                                    <td>${myArray3[i].MOST_CHOICES}</td>
                                                    <td>${myArray3[i].GINI_INDEX}</td>
                                                <tr>`
               
                                   table2.innerHTML += row3;
                            }
               
                        }) 
                        
                   }
               
                   

                   buildTable();
                   

                
    
    $(document).ready(function(){
        $('#search').keyup(function(){
            search_table($(this).val())
        })

        function search_table(value){
            $('#example tr').each(function(){
                var found = 'false';
                $(this).each(function(){
                    if($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0 || $(this).text().toUpperCase().indexOf(value.toUpperCase()) >= 0)
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