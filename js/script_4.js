
        

                
                        var url4 = 'https://api.cryptostats.community/api/v1/treasuries/recentProposals'
                             
                    
                        async function getData4(){
                           const response = await fetch(url4);
                           const data = await response.json();
                           myArray3 = data.data;
                           var counter = data.data.length;
                           var i = 0;
                           while (counter >0){
                           snapshot.push(data.data[i])
                           id.push(data.data[i].id)
                           icon.push(data.data[i].metadata.icon)
                           website.push(data.data[i].metadata.website)

                           if (snapshot[i].results.recentProposals[0] === undefined){
                            snapshot[i].results.recentProposals.push({
                                id:"null",
                                title:"null",
                                link:"null",
                                state:"null",

                            })
                            
                           
                           }
                           else {
                            snapshot[i].results.recentProposals.push({
                                id:(snapshot[i].results.recentProposals[0].id),
                                title:(snapshot[i].results.recentProposals[0].title),
                                link:(snapshot[i].results.recentProposals[0].link),
                                state: (snapshot[i].results.recentProposals[0].state),


                            })
                            

                           }
                           state_order.push(snapshot[i].results.recentProposals[0].state)
                           recent_proposal.push(snapshot[i].results.recentProposals[0].title)
                           recent_proposal_link.push(snapshot[i].results.recentProposals[0].link)

                           i++;
                           counter--;

                           }

                           }
               
                           var myArray3 = [];
                           var snapshot = []
                           var id = []
                           var icon = []
                           var website = []
                           var recent_proposal = []
                           var recent_proposal_link = []
                           var state_order = []

                           console.log(state_order)
                           
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
               
                           
                           
               
                      
                               for( var i = 0; i <snapshot.length;i++){
                                   var row2 = `<tr>
                                                   <td><img src="${snapshot[i].metadata.icon}" style="width: 30px"> ${snapshot[i].id}</td>
                                                   <td><a href="${snapshot[i].metadata.website}" style="color:aqua">${snapshot[i].metadata.website}</a></td>
                                                   <td>${snapshot[i].results.recentProposals[0].state}</td>
                                                   <td><a href="${snapshot[i].results.recentProposals[0].link}" style="color:aquamarine">${snapshot[i].results.recentProposals[0].title}</a></td>


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
                                   snapshot = snapshot.sort((a,b) => a[column2] > b[column2] ? 1: -1)
                                   state_order = state_order.sort((a,b) => a[column2] > b[column2] ? 1: -1)

                                   text2 += '&#9660'
               
                               }else{
                                   $(this).data('order', 'desc')
                                   snapshot = snapshot.sort((a,b) => a[column2] < b[column2] ? 1: -1)
                                   state_order = state_order.sort((a,b) => a[column2] > b[column2] ? 1: -1)
                                   text2 += '&#9650'
               
                               }
                               $(this).html(text2)
                               var table2 = document.getElementById('swap_table')
                               table2.innerHTML = '';
                      
                               for( var i = 0; i <snapshot.length;i++){

                                   var row3 = `<tr>
                                                    <td><img src="${snapshot[i].metadata.icon}" style="width: 30px"> ${snapshot[i].id}</td>
                                                    <td><a href="${snapshot[i].metadata.website}" style="color:aqua">${snapshot[i].metadata.website}</a></td>
                                                    <td>${snapshot[i].results.recentProposals[0].state}</td>
                                                    <td><a href="${snapshot[i].results.recentProposals[0].link}" style="color:aquamarine">${snapshot[i].results.recentProposals[0].title}</a></td>


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