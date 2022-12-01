var url1 = 'https://node-api.flipsidecrypto.com/api/v2/queries/ddd42207-da4c-4bef-a04f-a636fb90b8af/data/latest'


        async function getData1(){
                    const response = await fetch(url1);
                    const data = await response.json();
                    var counter = data.length;
                    var i = 0;
                    var j = 0;
                    while (counter >0){
                    voter.push(data[i].VOTER)
                    vote_count.push(data[i].VOTE_COUNT);
                    space_id.push(data[i].SPACE_ID);
                    
                   
                    i++;
                    j++;
                    counter--;
                    }
                    

                }

                var voter = [];
                var vote_count = [];      
                var space_id = [];     
          
                  


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
                    labels : voter,
                    datasets: [
                        {
                            label: space_id,
                            data: vote_count,
                            backgroundColor: 'rgba(32, 105, 255, 0.6)',
                            borderColor: 'rgba(32, 105, 255, 1)',
                            borderWidth: 5,
                            hoverBorderColor: 'white',
                            hoverBorderWidth: 2,
                            hidden:false,
            
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
                        tooltip: {
                            callbacks: {
                                label: function(tooltipItem, data) { 
                                    //console.log(tooltipItem)
                                    //return formatted date
                                    return [tooltipItem.dataset.label[tooltipItem.parsed.x], tooltipItem.parsed.y] ;
                                  }
                            }
                        },
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



                var url2 = 'https://node-api.flipsidecrypto.com/api/v2/queries/b1bc05e6-d72d-40f8-b3a1-2221e8bde227/data/latest'


                async function getData2(){
                            const response = await fetch(url2);
                            const data = await response.json();
                            var counter = data.length;
                            var i = 0;
                            var j = 0;
                            while (counter >0){
                            voter_last_week.push(data[i].VOTER)
                            vote_count_last_week.push(data[i].VOTE_COUNT);
                            space_id_last_week.push(data[i].SPACE_ID);
                            
                           
                            i++;
                            j++;
                            counter--;
                            }
                            
        
                        }
        
                        var voter_last_week = [];
                        var vote_count_last_week = [];      
                        var space_id_last_week = [];     
                  
                          
        
        
                        chart2();
        
                        async function chart2(){
                        await getData2();
                 
                        var ctx = document.getElementById('chart2').getContext('2d');
                        var purple_orange_gradient = ctx.createLinearGradient(0, 0, 0, 300);
                        purple_orange_gradient.addColorStop(0, 'blue');
                        purple_orange_gradient.addColorStop(1, 'purple');
        
                        var myChart = new Chart(ctx, {
        
                        type: 'bar',
                        data: {
                            labels : voter_last_week,
                            datasets: [
                                {
                                    label: space_id_last_week,
                                    data: vote_count_last_week,
                                    backgroundColor: 'rgba(245, 40, 145, 0.3)',
                                    borderColor: 'rgba(245, 40, 145, 1)',
                                    borderWidth: 5,
                                    hoverBorderColor: 'white',
                                    hoverBorderWidth: 2,
                                    hidden:false,
                    
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
                                tooltip: {
                                    callbacks: {
                                        label: function(tooltipItem, data) { 
                                            //console.log(tooltipItem)
                                            //return formatted date
                                            return [tooltipItem.dataset.label[tooltipItem.parsed.x], tooltipItem.parsed.y] ;
                                          }
                                    }
                                },
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
        

                
                        var url4 = 'https://node-api.flipsidecrypto.com/api/v2/queries/4e32bc69-6269-47e8-bf6c-87c4832fa27e/data/latest'
                             
                    
                        async function getData4(){
                           const response = await fetch(url4);
                           const data = await response.json();
                           myArray3 = data;
                           var counter = data.length;
                           var i = 0;
                           while (counter >0){
                           snapshot.push(data[i])
                           voter_live.push(data[i].VOTER)
                           voter_link.push(data[i].VOTER_LINK)

                           voter_power_live.push(data[i].VOTER_POWER)
                           total_power_live.push(data[i].TOTAL_POWER)
                           voter_power_ratio_live.push(data[i].VOTER_POWER_RATIO)
                           vote_option_live.push(data[i].VOTE_OPTION)
                           space_id_live.push(data[i].SPACE_ID)
                           space_id_link.push(data[i].SPACE_LINK)

                           proposal_title_live.push(data[i].PROPOSAL_TITLE)
                           proposal_link.push(data[i].PROPOSAL_ID)
                           icon_network.push(data[i].ICON)

                           i++;
                           counter--;
                           }
                           }
               
                           var myArray3 = [];
                           var snapshot = []
                           var voter_live = []
                           var voter_link = []

                           var voter_power_live = []
                           var total_power_live = []
                           var voter_power_ratio_live = []
                           var vote_option_live = []
                           var space_id_live = []
                           var space_id_link = []

                           var proposal_title_live = []
                           var proposal_link = []
                           var icon_network = []

                           console.log(vote_option_live)
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
                                                    <td><img src="${icon_network[i]}" style="width: 15px; color:white"></td>
                                                    <td><a href="${voter_link[i]}" style="color :rgba(109, 171, 255, 1)">${myArray3[i].VOTER}</td>
                                                    <td>${myArray3[i].VOTER_POWER}</td>
                                                    <td>${myArray3[i].VOTER_POWER_RATIO}</td>
                                                    <td>${myArray3[i].VOTE_OPTION}</td>
                                                    <td><a href="${space_id_link[i]}" style="color :aqua">${myArray3[i].SPACE_ID}</td>
                                                    <td><a href="${proposal_link[i]}" style="color :aquamarine">${myArray3[i].PROPOSAL_TITLE}</td>


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
                                                    <td><img src="${myArray3[i].ICON}" style="width: 15px; color:white"></td>
                                                    <td><a href="${myArray3[i].VOTER_LINK}" style="color :rgba(109, 171, 255, 1)">${myArray3[i].VOTER}</td>
                                                    <td>${myArray3[i].VOTER_POWER}</td>
                                                    <td>${myArray3[i].VOTER_POWER_RATIO}</td>
                                                    <td>${myArray3[i].VOTE_OPTION}</td>
                                                    <td><a href="${myArray3[i].SPACE_LINK}" style="color :aqua">${myArray3[i].SPACE_ID}</td>
                                                    <td><a href="${myArray3[i].PROPOSAL_ID}" style="color :aquamarine">${myArray3[i].PROPOSAL_TITLE}</td>
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