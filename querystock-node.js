// sina data: not realtime, delay
/*
var http = require("http");

var options = {
  "method": "POST",
  "hostname": "hq.sinajs.cn",
  "port": null,
  "path": "/list=hk02238"
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);

    var str = body.toString();
    var arr = str.split(',');

    console.log(body.toString());
    console.log("now: " + arr[6]);
    console.log("lowest: " + arr[5]);
    console.log("highest: " + arr[4]);
  });
});

req.end();

*/

// snowball
var request = require("request");
var stockPrice = function(stocks) {
  for (var i = 0; i < stocks.length; i++) {
    var stock = stocks[i];
    //console.log(stock.code);
    var options = {
      method: 'GET',
      url: 'https://xueqiu.com/v4/stock/quote.json',
      qs: {
        code: stock.code
      },
      headers: {
        'Cookie': 'xq_a_token=96cb6aa712e49d59c2c556787ca0de546ebb3523'
      }
    };

    request(options, function(error, response, body) {
      if (error) throw new Error(error);
      //console.log(body);

      var result = JSON.parse(body);
      console.log(stock.name + " current: " + result[stock.code]['current']);
      console.log(stock.name + " highest: " + result[stock.code]['high']);
      console.log(stock.name + " lowest: " + result[stock.code]['low']);
    });
  }
};

stockPrice([{
  code: '02238',
  name: "广汽"
}]); 

stockPrice([{
code: '00751',
  name: "chuangewei"
}]); 
/*
stockPrice([{
  code: 'SH600166',
  name: "futian"
}]); 
*/
stockPrice([{
  code: '01157',
  name: "zhonglian"
}]); 
