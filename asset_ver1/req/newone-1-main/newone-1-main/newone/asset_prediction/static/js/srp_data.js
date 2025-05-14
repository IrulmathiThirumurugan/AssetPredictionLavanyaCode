predictedQuantity = [
  {
    'Part Number':{
      "part_number" : "21L2S4EG22",
    },
    "Location" : "9AAE103835REC",
    "Model Designation" : "ThinkPad L14 Gen 5",
    "predicted_quantity" : 65,
    "cost" : 210290.6
  },
  {
    'Part Number':{
      "part_number" : "21KYS31M22",
    },
    "Location" : "9AAE103835ABB",
    "Model Designation" : "ThinkPad P16v Gen 2",
    "predicted_quantity" : 10,
    "cost" : 67006.4
  },
  {
    'Part Number':{
      "part_number" : "21L2S4EG22",
    },
    "Location" : "9AAE103835ABB",
    "Model Designation" : " ThinkPad L14 Gen 5",
    "predicted_quantity" : 8,
    "cost" : 25881.92
  },
  {
    'Part Number':{
      "part_number" : "21KYS31M22",
    },
    "Location" : "9AAE103835REC",
    "Model Designation" : "ThinkPad P16v Gen 2",
    "predicted_quantity" : 6,
    "cost" : 40203.84
  },
  {
    'Part Number':{
      "part_number" : "21L2S4EG22",
    },
    "Location" : "9AAE101530ABB",
    "Model Designation" : "ThinkPad L14 Gen 5",
    "predicted_quantity" : 5,
    "cost" : 16176.2
  },
  {
    'Part Number':{
      "part_number" : "21L2S4EG22",
    },
    "Location" : "9AAE100616ABB",
    "Model Designation" : "ThinkPad L14 Gen 5",
    "predicted_quantity" : 5,
    "cost" : 16176.2
  },
  {
    'Part Number':{
      "part_number" : "40B00300EU",
    },
    "Location" : "9AAE101530ABB",
    "Model Designation" : "Thunderbolt 4 Workstation Dock",
    "predicted_quantity" : 4,
    "cost" : 3977.84
  },
  {
    'Part Number':{
      "part_number" : "12TES41Q1Z",
    },
    "Location" : "9AAE101530ABB",
    "Model Designation" : "ThinkCentre M70q Gen 5",
    "predicted_quantity" : 4,
    "cost" : 9345.28
  },
  {
    'Part Number':{
      "part_number" : "63CFMAR3EU",
    },
    "Location" : "9AAE101530ABB",
    "Model Designation" : "ThinkVision T24i-30 23.8 inch",
    "predicted_quantity" : 2,
    "cost" : 1207.24
  },
  {
    'Part Number':{
      "part_number" : "4X30M86918",
    },
    "Location" : "9AAE103835REC",
    "Model Designation" : "Preferred Pro II USB Keyboard",
    "predicted_quantity" : 2,
    "cost" : 156.34
  },
]











// $(document).ready(function() {
//   var predictedQuantity = [
//     {
//           'Part Number':{
//             "part_number" : "XX89OSHE",
//             "category" : "Cases and Bags"
//           },
//           "Location" : "America",
//           "requested_quantity" : 6,
//           "stock_quantity" : 8,
//           "intransit_quantity" : 8,
//           "demand_quantity" : 8,
//           "type" : "stock",
//           "cost" : 3000
//         },
//         {
//           'Part Number':{
//             "part_number" : "XXEFRDOSHE",
//             "category" : "Headphones"
//           },
//           "Location" : "Korea",
//           "requested_quantity" : 10,
//           "stock_quantity" : 10,
//           "intransit_quantity" : 12,
//           "demand_quantity" : 8,
//           "type" : "stock",
//           "cost" : 4000
//         },
//         {
//           'Part Number':{
//             "part_number" : "XXUNSIOSHE",
//             "category" : "Laptops"
//           },
//           "Location" : "India",
//           "requested_quantity" : 12,
//           "stock_quantity" : 7,
//           "intransit_quantity" : 9,
//           "demand_quantity" : 8,
//           "type" : "stock",
//           "cost" : 5000
//         }

//       ]

//   // Update the table headers
//   var headers = ['part_number', 'category', 'Location', 'requested_quantity', 'stock_quantity', 'intransit_quantity', 'demand_quantity', 'type', 'cost'];
//   var headerRow = $('<tr>');
//   headers.forEach(function(header) {
//       headerRow.append($('<th style="text-transform: capitalize;">').text(header.replace('_', ' ')));
//   });
//   headerRow.append($('<th>').text('Action'));
//   $('#table-body').append(headerRow);

//   // Populate the table with data
//   predictedQuantity.forEach(function(item) {
//       var row = $('<tr>');
//       headers.forEach(function(header) {
//           var cellValue = item;
//           if (header.includes('.')) {
//               var parts = header.split('.');
//               cellValue = item[parts[0]];
//               for (var i = 1; i < parts.length; i++) {
//                   cellValue = cellValue[parts[i]];
//               }
//           } else {
//               cellValue = item[header];
//           }
//           row.append($('<td>').text(cellValue));
//       });

//       var approveButton = $('<button>')
//           .text('Approve')
//           .css({
//               'background-color': '#4f73d9',
//               'color': 'white',
//               'border-radius': '12px',
//               'padding': '5px 10px',
//               'border': 'none',
//               'cursor': 'pointer'
//           })
//           .on('click', function() {
//               $(this).text('Approved').css('background-color', 'green');
//           });

//       row.append($('<td>').append(approveButton));
//       $('#table-body').append(row);
//   });

//   // Initialize charts (placeholders)
//   function initializeCharts() {
//       // Monthly Open Tasks Chart (Placeholder data)
//       var openTasksChart = {
//           chart: { type: 'area', height: 60, sparkline: { enabled: true } },
//           series: [{ name: 'Open Tasks', data: [25, 66, 20, 40, 12, 58, 20] }],
//           stroke: { curve: 'smooth', width: 2 },
//           fill: { colors: ['#f3feff'], type: 'solid', opacity: 0.05 },
//           markers: { size: 0 },
//           tooltip: { theme: 'dark', fixed: { enabled: true, position: 'right' }, x: { show: false } }
//       };
//       new ApexCharts(document.querySelector('#earning'), openTasksChart).render();

//       // Yearly Cost Breakup Chart (Placeholder data)
//       var costBreakupChart = {
//           chart: { width: 180, type: 'donut', fontFamily: 'Plus Jakarta Sans', foreColor: '#adb0bb' },
//           series: [38, 40, 25],
//           labels: ['2020', '2021', '2022'],
//           colors: ['#5D87FF', '#ecf2ff', '#F9F9FD'],
//           plotOptions: { pie: { startAngle: 0, endAngle: 360, donut: { size: '75%' } } },
//           stroke: { show: false },
//           dataLabels: { enabled: false },
//           legend: { show: false },
//           tooltip: { theme: 'dark', fillSeriesColor: false }
//       };
//       new ApexCharts(document.querySelector('#breakup'), costBreakupChart).render();
//   }

//   initializeCharts();
// });






