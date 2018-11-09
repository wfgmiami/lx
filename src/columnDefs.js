export default [
    {
      headerName: "Ticker",
      field: "securityTicker",
      suppressSizeToFit: false,
      suppressMenu: true,
      formatName: "text",
    },
    {
      headerName: "Description",
      field: "securityDescription",
      suppressSizeToFit: false,
      suppressMenu: true,
      formatName: "text",
    },
    {
      headerName: "Weights(%)",
      suppressSizeToFit: false,
      children: [
        {
          headerName:"Port",
          field: "portfolioWeight",
          suppressMenu: true,
          formatName: "number2",
        },
        {
          headerName:"Bmrk",
          field: "benchmarkWeight",
          suppressMenu: true,
          formatName: "number2",
        },
        {
          headerName:"%ADV60",
          field: "percentageOfAvgDailyVolume60",
          suppressMenu: true,
          formatName: "number2",
        }
      ]
    },
    {
      headerName: "Price",
      suppressSizeToFit: false,
      children: [
        {
          headerName:"Curr",
          field: "securityCurrency",
          formatName: "text",
        },
        {
          headerName:"Actual",
          field: "actualPrice",
          formatName: "number2"
        },
        {
          headerName:"Cons",
          field: "consensusModelPrice",
          formatName: "number2"
        },
        {
          headerName:"Anly",
          field: "userModelPrice",
          formatName: "number2"
        }
      ],
      
    },
    {
      headerName: "Misval",
      suppressSizeToFit: false,
      children: [
        {
          headerName:"Cons",
          field: "consensusMisvaluation",
          formatName: "percent0",
        },
        {
          headerName:"Anly",
          field: "userMisvaluation",
          formatName: "percent0",
        },
      ]
    }, 
    {
      headerName: "Diagnostics",
      children: [
        {
          headerName:"Val Exp",
          field: "valExp",
          formatName: "number2",
        },
        {
          headerName:"RtgX", 
          field: "ratingConflict",
          formatName: "changeValue",
          cellStyle: function(params){
            if(params.value === 1 || params.value === 2)
              return {color: 'red', fontWeight: 700, textAlign: 'center'}
          }
        },
      ]
    },
    {
      headerName: "Analyst",
      children: [
        {
          headerName:"Rating",
          field: "rating",
          formatName: "changeValue",
          cellStyle: function(params){
            if(params.value === 'SELL' || params.value === 'STRONG_SELL')
              return {color: 'red', textAlign: 'center'}
            else if(params.value === 'BUY' || params.value === 'STRONG_BUY')
              return {color: 'green', textAlign: 'center'} 
            else
              return {textAlign: 'center'} 
          }
        },
        {
          headerName:"Name",
          field: "userName",
          formatName: "text",
        },
      ]
    },

  ]