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
        

                
                        var url4 = 'https://node-api.flipsidecrypto.com/api/v2/queries/a79cc292-a76c-44b6-b8a6-8ccffc35a6da/data/latest'
                             
                    
                        async function getData4(){
                           const response = await fetch(url4);
                           const data = await response.json();
                           myArray3 = data;
                           var counter = data.length;
                           var i = 0;
                           while (counter >0){
                           snapshot.push(data[i])
                           bayc_token.push(data[i].BAYC_TOKEN_ID)
                           bayc_url.push(data[i].URL_BAYC)
                           bayc_img.push(data[i].BAYC_IMG)

                           m2_token.push(data[i].M2_MAYC_TOKEN_ID)
                           m1_url.push(data[i].URL_M1_MAYC )
                           m2_img.push(data[i].M2_IMG)
                           m1_token.push(data[i].M1_MAYC_TOKEN_ID)
                           m2_url.push(data[i].URL_M2_MAYC)
                           m2_img.push(data[i].M1_IMG)



                           i++;
                           counter--;
                           }
                           }
               
                           var myArray3 = [];
                           var snapshot = []
                           var bayc_token = []
                           var bayc_url = []
                           var bayc_img = []
                           var m1_token = []
                           var m1_url = []
                           var m1_img = []
                           var m2_token = []
                           var m2_url = []
                           var m2_img = []
                           var myList = []


                       var state = {
                            'querySet': snapshot,
                            'page': 1,
                            'rows' : 100,

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
                           await getData4();
                           var table2 = document.getElementById('swap_table')
                           table2.innerHTML = ''
               
                           var data = pagination(state.querySet, state.page, state.rows)

                           var myList = data.querySet;
                    
                           console.log("Data:" , myList)

                           for( var i = 0; i <myList.length;i++){
                               var row2 = `<tr>
                                               <td><a href="#" onclick="window.open('${myList[i].URL_BAYC}')">${myList[i].BAYC_TOKEN_ID}</a></td>
                                               <td><img src="${myList[i].BAYC_IMG}" style="width: 120px; color:white"></td>
                                               <td><a href="#" onclick="window.open('${myList[i].URL_M1_MAYC}')">${myList[i].M1_MAYC_TOKEN_ID}</td>
                                               <td><img src="${myList[i].M1_IMG}" style="width: 120px; color:white"></td>
                                               <td><a href="#" onclick="window.open('${myList[i].URL_M2_MAYC}')">${myList[i].M2_MAYC_TOKEN_ID}</td>
                                               <td><img src="${myList[i].M2_IMG}" style="width: 120px; color:white"></td>


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
                                                <td><a href="#" onclick="window.open('${myList[i].URL_BAYC}')">${myList[i].BAYC_TOKEN_ID}</a></td>
                                                <td><img src="${myList[i].BAYC_IMG}" style="width: 120px; color:white"></td>
                                                <td><a href="#" onclick="window.open('${myList[i].URL_M1_MAYC}')">${myList[i].M1_MAYC_TOKEN_ID}</td>
                                                <td><img src="${myList[i].M1_IMG}" style="width: 120px; color:white"></td>
                                                <td><a href="#" onclick="window.open('${myList[i].URL_M2_MAYC}')">${myList[i].M2_MAYC_TOKEN_ID}</td>
                                                <td><img src="${myList[i].M2_IMG}" style="width: 120px; color:white"></td>

 
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
                                                <td><a href="#" onclick="window.open('${myList[i].URL_BAYC}')">${myList[i].BAYC_TOKEN_ID}</a></td>
                                                <td><img src="${myList[i].BAYC_IMG}" style="width: 120px; color:white"></td>
                                                <td><a href="#" onclick="window.open('${myList[i].URL_M1_MAYC}')">${myList[i].M1_MAYC_TOKEN_ID}</td>
                                                <td><img src="${myList[i].M1_IMG}" style="width: 120px; color:white"></td>
                                                <td><a href="#" onclick="window.open('${myList[i].URL_M2_MAYC}')">${myList[i].M2_MAYC_TOKEN_ID}</td>
                                                <td><img src="${myList[i].M2_IMG}" style="width: 120px; color:white"></td>

                
                                                    <tr>`
                                
                                    table2.innerHTML += row3;


                            }

                        }) 
                        
                   
               
                   

                   buildTable();
                   

                
    
   $('#search').on('keyup', function(){
    var value = $(this).val()
    var data = searchtable(value, myArray3)

    var table2 = document.getElementById('swap_table')
    table2.innerHTML = ''
    for( var i = 0; i <data.length;i++){
        var row2 = `<tr>
                        <td><a href="#" onclick="window.open('${data[i].URL_BAYC}')">${data[i].BAYC_TOKEN_ID}</a></td>
                        <td><img src="${data[i].BAYC_IMG}" style="width: 120px; color:white"></td>
                        <td><a href="#" onclick="window.open('${data[i].URL_M1_MAYC}')">${data[i].M1_MAYC_TOKEN_ID}</td>
                        <td><img src="${data[i].M1_IMG}" style="width: 120px; color:white"></td>
                        <td><a href="#" onclick="window.open('${data[i].URL_M2_MAYC}')">${data[i].M2_MAYC_TOKEN_ID}</td>
                        <td><img src="${data[i].M2_IMG}" style="width: 120px; color:white"></td>


                            <tr>`
    }
    table2.innerHTML += row2;

})

   function searchtable(value, data){
    var filteredData = []

    for (var i =0; i<data.length; i++){
        value = value.toLowerCase()
        var name = data[i].BAYC_TOKEN_ID.toLowerCase()

        
        if(name.includes(value)){
        filteredData.push(data[i])
        }
    }
    return filteredData
   }