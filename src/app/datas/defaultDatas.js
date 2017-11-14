import * as mapv from 'mapv';
// const mapv = require('mapv');

// demo datas
let randomCount = 300;
let data = [];
const datas = [];
const citys = [
    '北京',
    '天津',
    '上海',
    '重庆',
    '石家庄',
    '太原',
    '呼和浩特',
    '哈尔滨',
    '长春',
    '沈阳',
    '济南',
    '南京',
    '合肥',
    '杭州',
    '南昌',
    '福州',
    '郑州',
    '武汉',
    '长沙',
    '广州',
    '南宁',
    '西安',
    '银川',
    '兰州',
    '西宁',
    '乌鲁木齐',
    '成都',
    '贵阳',
    '昆明',
    '拉萨',
    '海口'
];
while (randomCount--) {
    const cityCenter = mapv.utilCityCenter.getCenterByCityName(
        citys[parseInt(Math.random() * citys.length)]
    );
    // if (cityCenter) {
    data.push({
        geometry: {
            type: 'Point',
            coordinates: [
                cityCenter.lng - 2 + Math.random() * 4,
                cityCenter.lat - 2 + Math.random() * 4
            ]
        },
        count: 30 * Math.random()
    });
    // }
}

datas.push({
    id: 1,
    name: '示例点数据',
    data
});

// line data
// randomCount = 1000;
randomCount = 300;
data = [];
while (randomCount--) {
    var cityCenter1 = mapv.utilCityCenter.getCenterByCityName(
        citys[parseInt(Math.random() * citys.length)]
    );
    var cityCenter2 = mapv.utilCityCenter.getCenterByCityName(
        citys[parseInt(Math.random() * citys.length)]
    );
    data.push({
        geometry: {
            type: 'LineString',
            coordinates: [
                [
                    cityCenter1.lng - 1 + Math.random() * 1,
                    cityCenter1.lat - 1 + Math.random() * 1
                ],
                [
                    cityCenter2.lng - 1 + Math.random() * 1,
                    cityCenter2.lat - 1 + Math.random() * 1
                ]
            ]
        },
        count: 30 * Math.random()
    });
}
datas.push({
    id: 2,
    name: '示例线数据',
    data
});

data = [
    //
    {
        id: '34',
        name: '安徽',
        cp: [117.2461, 32.0361],
        childNum: 17,
        geometry: {
            type: 'Polygon',
            coordinates: [
                [
                    [116.6309, 33.9258],
                    [116.543, 34.2773],
                    [116.1914, 34.4092],
                    [116.1914, 34.585],
                    [116.3672, 34.6289],
                    [116.8945, 34.4092],
                    [117.1582, 34.0576],
                    [117.5977, 34.0137],
                    [117.7734, 33.7061],
                    [118.125, 33.75],
                    [117.9492, 33.2227],
                    [118.0371, 33.1348],
                    [118.2129, 33.2227],
                    [118.3008, 32.7832],
                    [118.7402, 32.7393],
                    [118.916, 32.959],
                    [119.1797, 32.8271],
                    [119.1797, 32.4756],
                    [118.5645, 32.5635],
                    [118.6523, 32.2119],
                    [118.4766, 32.168],
                    [118.3887, 31.9482],
                    [118.916, 31.5527],
                    [118.7402, 31.377],
                    [118.8281, 31.2451],
                    [119.3555, 31.2891],
                    [119.4434, 31.1572],
                    [119.6191, 31.1133],
                    [119.6191, 31.0693],
                    [119.4434, 30.6738],
                    [119.2676, 30.6299],
                    [119.3555, 30.4102],
                    [118.916, 30.3223],
                    [118.916, 29.9707],
                    [118.7402, 29.707],
                    [118.2129, 29.3994],
                    [118.0371, 29.5752],
                    [117.5098, 29.6191],
                    [117.1582, 29.9268],
                    [117.0703, 29.8389],
                    [117.1582, 29.707],
                    [116.7188, 29.6191],
                    [116.7188, 29.751],
                    [116.8945, 29.9268],
                    [116.7188, 30.0586],
                    [116.2793, 29.7949],
                    [116.1035, 29.8389],
                    [116.1035, 30.1904],
                    [115.752, 30.6738],
                    [116.0156, 31.0254],
                    [115.5762, 31.2012],
                    [115.4004, 31.4209],
                    [115.4883, 31.6846],
                    [115.9277, 31.7725],
                    [115.8398, 32.5195],
                    [115.5762, 32.4316],
                    [115.2246, 32.6074],
                    [115.1367, 32.8711],
                    [114.873, 33.0029],
                    [114.873, 33.1348],
                    [115.3125, 33.1787],
                    [115.4004, 33.5303],
                    [115.5762, 33.6621],
                    [115.5762, 33.9258],
                    [115.6641, 34.0576],
                    [116.0156, 33.9697],
                    [116.1914, 33.7061],
                    [116.6309, 33.9258]
                ]
            ]
        },
        count: Math.random() * 70
    },
    {
        id: '11',
        name: '北京',
        cp: [116.4551, 40.2539],
        childNum: 19,
        geometry: {
            type: 'Polygon',
            coordinates: [
                [
                    [117.4219, 40.21],
                    [117.334, 40.1221],
                    [117.2461, 40.0781],
                    [116.8066, 39.9902],
                    [116.8945, 39.8145],
                    [116.8945, 39.6826],
                    [116.8066, 39.5947],
                    [116.543, 39.5947],
                    [116.3672, 39.4629],
                    [116.1914, 39.5947],
                    [115.752, 39.5068],
                    [115.4883, 39.6387],
                    [115.4004, 39.9463],
                    [115.9277, 40.2539],
                    [115.752, 40.5615],
                    [116.1035, 40.6055],
                    [116.1914, 40.7813],
                    [116.4551, 40.7813],
                    [116.3672, 40.9131],
                    [116.6309, 41.0449],
                    [116.9824, 40.6934],
                    [117.4219, 40.6494],
                    [117.2461, 40.5176],
                    [117.4219, 40.21]
                ]
            ]
        },
        count: Math.random() * 70
    },
    {
        id: '31',
        name: '上海',
        cp: [121.4648, 31.2891],
        childNum: 19,
        geometry: {
            type: 'Polygon',
            coordinates: [
                [
                    [120.9375, 31.0254],
                    [121.2012, 31.4648],
                    [121.377, 31.5088],
                    [121.1133, 31.7285],
                    [121.2012, 31.8604],
                    [121.9922, 31.5967],
                    [121.9043, 31.1572],
                    [121.9922, 30.8057],
                    [121.2891, 30.6738],
                    [120.9375, 31.0254]
                ]
            ]
        },
        count: Math.random() * 70
    },
    {
        id: '44',
        name: '广东',
        cp: [113.4668, 22.8076],
        childNum: 21,
        geometry: {
            type: 'Polygon',
            coordinates: [
                [
                    [109.7754, 21.4014],
                    [109.7754, 21.6211],
                    [109.8633, 21.665],
                    [109.9512, 21.8408],
                    [110.3027, 21.8848],
                    [110.3027, 22.1484],
                    [110.6543, 22.1484],
                    [110.7422, 22.2803],
                    [110.7422, 22.5439],
                    [111.2695, 22.8076],
                    [111.4453, 23.0273],
                    [111.3574, 23.4668],
                    [111.6211, 23.6865],
                    [111.6211, 23.8184],
                    [111.7969, 23.8184],
                    [111.8848, 23.9941],
                    [111.8848, 24.2139],
                    [112.0605, 24.3457],
                    [111.8848, 24.6533],
                    [112.0605, 24.7412],
                    [112.1484, 24.873],
                    [112.2363, 25.1807],
                    [112.5879, 25.1367],
                    [112.8516, 24.917],
                    [113.0273, 24.9609],
                    [113.0273, 25.2246],
                    [112.8516, 25.3564],
                    [113.2031, 25.5322],
                    [113.6426, 25.3125],
                    [113.9063, 25.4443],
                    [113.9941, 25.2686],
                    [114.6094, 25.4004],
                    [114.7852, 25.2686],
                    [114.6973, 25.1367],
                    [114.4336, 24.9609],
                    [114.1699, 24.6973],
                    [114.4336, 24.5215],
                    [115.4004, 24.7852],
                    [115.8398, 24.5654],
                    [115.752, 24.7852],
                    [115.9277, 24.917],
                    [116.2793, 24.7852],
                    [116.3672, 24.873],
                    [116.543, 24.6094],
                    [116.7188, 24.6533],
                    [116.9824, 24.1699],
                    [116.9824, 23.9063],
                    [117.1582, 23.5547],
                    [117.334, 23.2471],
                    [116.8945, 23.3789],
                    [116.6309, 23.1152],
                    [116.543, 22.8516],
                    [115.9277, 22.7197],
                    [115.6641, 22.7637],
                    [115.5762, 22.6318],
                    [115.0488, 22.6758],
                    [114.6094, 22.3682],
                    [114.3457, 22.5439],
                    [113.9941, 22.5],
                    [113.8184, 22.1924],
                    [114.3457, 22.1484],
                    [114.4336, 22.0166],
                    [114.082, 21.9287],
                    [113.9941, 21.7969],
                    [113.5547, 22.0166],
                    [113.1152, 21.8408],
                    [112.9395, 21.5771],
                    [112.4121, 21.4453],
                    [112.2363, 21.5332],
                    [111.5332, 21.4893],
                    [111.2695, 21.3574],
                    [110.7422, 21.3574],
                    [110.6543, 21.2256],
                    [110.7422, 20.918],
                    [110.4785, 20.874],
                    [110.6543, 20.2588],
                    [110.5664, 20.2588],
                    [110.3906, 20.127],
                    [110.0391, 20.127],
                    [109.8633, 20.127],
                    [109.8633, 20.3027],
                    [109.5996, 20.918],
                    [109.7754, 21.4014],
                    [109.7754, 21.4014]
                ],
                [
                    [113.5986, 22.1649],
                    [113.6096, 22.1265],
                    [113.5547, 22.11],
                    [113.5437, 22.2034],
                    [113.5767, 22.2034],
                    [113.5986, 22.1649]
                ]
            ]
        },
        count: Math.random() * 70
    },
    {
        id: '50',
        name: '重庆',
        cp: [107.7539, 30.1904],
        childNum: 40,
        geometry: {
            type: 'Polygon',
            coordinates: [
                [
                    [108.5449, 31.6846],
                    [108.2813, 31.9043],
                    [108.3691, 32.168],
                    [108.5449, 32.2119],
                    [109.0723, 31.9482],
                    [109.248, 31.7285],
                    [109.5996, 31.7285],
                    [109.7754, 31.6846],
                    [109.6875, 31.5527],
                    [110.127, 31.377],
                    [110.2148, 31.1572],
                    [110.0391, 30.8057],
                    [109.8633, 30.8936],
                    [109.4238, 30.542],
                    [109.248, 30.6299],
                    [109.1602, 30.542],
                    [109.0723, 30.6299],
                    [108.8086, 30.498],
                    [108.6328, 30.5859],
                    [108.457, 30.4102],
                    [108.5449, 30.2344],
                    [108.457, 29.7949],
                    [108.6328, 29.8389],
                    [108.9844, 29.3115],
                    [109.0723, 29.3555],
                    [109.248, 29.1357],
                    [109.248, 28.4766],
                    [109.0723, 28.2129],
                    [108.7207, 28.2129],
                    [108.7207, 28.4766],
                    [108.5449, 28.3887],
                    [108.5449, 28.6523],
                    [108.3691, 28.6523],
                    [108.2813, 29.0918],
                    [107.8418, 29.0039],
                    [107.8418, 29.1357],
                    [107.5781, 29.2236],
                    [107.4023, 29.1797],
                    [107.4023, 28.8721],
                    [106.875, 28.7842],
                    [106.6992, 28.4766],
                    [106.6113, 28.5205],
                    [106.6113, 28.6523],
                    [106.5234, 28.7842],
                    [106.4355, 28.7842],
                    [106.5234, 28.5645],
                    [106.3477, 28.5205],
                    [106.2598, 28.8721],
                    [105.8203, 28.96],
                    [105.7324, 29.2676],
                    [105.4688, 29.3115],
                    [105.293, 29.5313],
                    [105.7324, 29.8828],
                    [105.5566, 30.1025],
                    [105.6445, 30.2783],
                    [105.8203, 30.4541],
                    [106.2598, 30.1904],
                    [106.6113, 30.3223],
                    [106.7871, 30.0146],
                    [107.0508, 30.0146],
                    [107.4902, 30.6299],
                    [107.4023, 30.7617],
                    [107.4902, 30.8496],
                    [107.9297, 30.8496],
                    [108.1934, 31.5088],
                    [108.5449, 31.6846]
                ]
            ]
        },
        count: Math.random() * 70
    }
];
datas.push({
    id: 3,
    name: '示例面数据',
    data
});


export default datas;