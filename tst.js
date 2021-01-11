var AbnormalTop3 = [
    {
      route :"26",
      passengers:520,
      DispatchFrequencies:200
    },
    {
      route :"53",
      passengers:1300,
      DispatchFrequencies:200
    },
    {
      route :"74",
      passengers:1350,
      DispatchFrequencies:220
    },
    {
      route :"95",
      passengers:1360,
      DispatchFrequencies:235
    },
    {
      route :"102",
      passengers:740,
      DispatchFrequencies:215
    },
  ]
  function top3(){
    //Math.min((AbnormalTop3.passengers-AbnormalTop3.DispatchFrequencies))
    let min=[]
    let top3=[]
    for(let i=0;i<AbnormalTop3.length;i++){
        let v = AbnormalTop3[i].passengers/AbnormalTop3[i].DispatchFrequencies
        min.push(v)
    }
    function bubblesort(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; 
        }
        }

        return arr;
    }
    min = bubblesort(min)
    for(let x =0 ;x<3;x++){
    if(top3.length==3)break;
    AbnormalTop3.findIndex((element) =>{
        if ((element.passengers/element.DispatchFrequencies)==min[x])top3.push(element)
    })
    }
    return top3
  }
console.log(top3())
