function renderorderbeer(req,res){
    // let boxprice = []
    let boxname = []
    // let queryprice = parseInt(req.query.price)
    let queryname = req.query.name
    const databeer = [
        {
            name : 'FULL MOON CHATRI',
            styleofbeer: 'IPA',
            volume : '330ML',
            percentalcohol : '5.2%',
            price : 159,
            img : 1
        },
        {
            name : 'FULL MOON BUSSABA',
            styleofbeer: 'EX WEISSE',
            volume : '330ML',
            percentalcohol : '4.7%',
            price : 159,
            img : 2
        },
        {
            name : 'KWAI',
            styleofbeer: 'WITBIER',
            volume : '330ML',
            percentalcohol : '5.0%',
            price : 169,
            img : 3
        },
        {
            name : 'KHUN PHAEN PLAI KAEW',
            styleofbeer: 'PALE ALE',
            volume : '275ML',
            percentalcohol : '4.7%',
            price : 139,
            img : 4
        },
        {
            name : 'STONE HEAD COCONUT',
            styleofbeer: 'CREAM ALE',
            volume : '330ML',
            percentalcohol : '4.9%',
            price : 199,
            img : 5
        },
        {
            name : 'STONE HEAD GANCORE',
            styleofbeer: 'IPA',
            volume : '330ML',
            percentalcohol : '5.8%',
            price : 209,
            img : 6
        }
        ,
        {
            name : 'FULL MOON CHALAWAN',
            styleofbeer: 'PALE ALE',
            volume : '330ML',
            percentalcohol : '4.7%',
            price : 159,
            img : 7
        },
        {
            name : 'JONE HA ROS',
            styleofbeer: 'Milkshake IPA',
            volume : '330ML',
            percentalcohol : '5.2%',
            price : 199,
            img : 8
        },
        {
            name : 'WHALE',
            styleofbeer: 'PALE ALE',
            volume : '330ML',
            percentalcohol : '5.2%',
            price : 169,
            img : 9
        },
        {
            name : 'CHIANG MAI BEER',
            styleofbeer: 'WEIZEN',
            volume : '330ML',
            percentalcohol : '5%',
            price : 149,
            img : 10
        },
        {
            name : 'BEAT BREWING A GO GO',
            styleofbeer: 'IPA',
            volume : '330ML',
            percentalcohol : '5.7%',
            price : 219,
            img : 11
        },
        {
            name : 'OUTLAW DARK HORSE',
            styleofbeer: 'STOUT',
            volume : '330ML',
            percentalcohol : '7%',
            price : 199,
            img : 12
        }   
    ]
    // ไม่ต้องทำทุกตัวใน obj ???????????????????????????

    // if(queryprice == undefined){
    //     boxprice = databeer   
    // }else {
    //     for(i=0;i<databeer.length;i++){
    //         if(databeer[i].price == queryprice){
    //             boxprice.push(databeer[i])
    //         }   
    //     }
    // }
    if(queryname == undefined){
        boxname = databeer     
    }else {
        for(j=0;j<databeer.length;j++){
            if(databeer[j] == queryname){
                boxname.push(databeer[j])
            }  
        }    
    }
    console.log('COMING WEB')
    res.render('orderbeer',{a: boxname})
    // res.render('orderbeer',{a: boxprice})
}


exports.renderorderbeer = renderorderbeer
