var url1 = 'https://node-api.flipsidecrypto.com/api/v2/queries/39f7dd9d-8a07-4f3c-870b-ae33f35315cc/data/latest'


        async function getData1(){
                    const response = await fetch(url1);
                    const data = await response.json();
                    var counter = data.length;
                    var i = 0;
                    var j = 0;
                    while (counter >0){
                    date1.push(data[i].DT)
                    aave_voter.push(data[i].NUM_VOTER);
                    aave_proposal.push(data[i].NUM_PROPOSAL);
                    all_aave_voter.push(data[i].ALL_VOTER);
                    all_aave_proposal.push(data[i].ALL_PROPOSAL);

                    
                   
                    i++;
                    j++;
                    counter--;
                    }
                    console.log(all_aave_voter)
                    document.getElementById('all_aave_voter').textContent = all_aave_voter[60]
                    document.getElementById('all_aave_proposal').textContent = all_aave_proposal[0]



                }

                var date1 = [];
                var aave_voter = [];      
                var aave_proposal = [];     
                var all_aave_voter = [];      
                var all_aave_proposal = [];      

                  


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
                    labels : date1,
                    datasets: [
                        {
                            label: 'voter',
                            data: aave_voter,
                            backgroundColor: 'rgba(32, 105, 255, 0.6)',
                            borderColor: 'rgba(32, 105, 255, 1)',
                            borderWidth: 5,
                            hoverBorderColor: 'white',
                            hoverBorderWidth: 2,
                            hidden:false,
            
                        },
                        {
                            label: 'proposal',
                            data: aave_proposal,
                            backgroundColor: 'rgba(245, 40, 145, 0.8)',
                            borderColor: 'rgba(245, 40, 145, 1)',
                            borderWidth: 5,
                            hoverBorderColor: 'white',
                            hoverBorderWidth: 2,
                            hidden:false,
                            yAxisID: 'y1',
                            type: 'line'
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
                    text: 'Number of Proposal',
                    color:'white',
                    font:{
                        size:16
                    },
                }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
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



         

                
                        var url4 = 'https://node-api.flipsidecrypto.com/api/v2/queries/eabf8011-4caf-4f3d-af83-8dd1896625aa/data/latest'
                             
                    
                        async function getData4(){
                           const response = await fetch(url4);
                           const data = await response.json();
                           myArray3 = data;
                           var counter = data.length;
                           var i = 0;
                           while (counter >0){
                           snapshot.push(data[i])
                           

                           aave_num_voter.push(data[i].NUM_VOTER)
                           aave_total_voting_power.push(data[i].TOTAL_VOTING_POWER)
                           aave_gini_index.push(data[i].GINI_INDEX)
                           space_id_live.push(data[i].SPACE_ID)
                           space_id_link.push(data[i].SPACE_LINK)

                           proposal_title_live.push(data[i].PROPOSAL_TITLE)
                           proposal_link.push(data[i].PROPOSAL_ID)
                           proposal_start_time.push(data[i].PROPOSAL_START_TIME)

                           i++;
                           counter--;
                           }
                           }
               
                           var myArray3 = [];
                           var snapshot = []
                           var aave_num_voter = []
                           var aave_total_voting_power = []
                           var aave_gini_index = []

                           var space_id_live = []
                           var space_id_link = []
                           var proposal_title_live = []
                           var proposal_link = []
                           var proposal_start_time = []


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
                                                    <td><a href="${myArray3[i].SPACE_LINK}" style="color :aqua">${myArray3[i].SPACE_ID}</td>
                                                    <td><a href="${myArray3[i].PROPOSAL_ID}" style="color :aquamarine">${myArray3[i].PROPOSAL_TITLE}</td>
                                                    <td>${myArray3[i].NUM_VOTER}</td>
                                                    <td>${myArray3[i].TOTAL_VOTING_POWER}</td>
                                                    <td>${myArray3[i].GINI_INDEX}</td>
                                                    <td>${myArray3[i].PROPOSAL_START_TIME}</td>


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
                                                    <td><a href="${myArray3[i].SPACE_LINK}" style="color :aqua">${myArray3[i].SPACE_ID}</td>
                                                    <td><a href="${myArray3[i].PROPOSAL_ID}" style="color :aquamarine">${myArray3[i].PROPOSAL_TITLE}</td>
                                                    <td>${myArray3[i].NUM_VOTER}</td>
                                                    <td>${myArray3[i].TOTAL_VOTING_POWER}</td>
                                                    <td>${myArray3[i].GINI_INDEX}</td>
                                                    <td>${myArray3[i].PROPOSAL_START_TIME}</td>

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