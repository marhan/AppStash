interface IRecommendationService {
    getProducts(count:number): any[]
}

class RecommendationService implements IRecommendationService {

    constructor() {}

    getProducts(count: number): any[] {
        var result: any[] = [
            {
                "id": "54008e98c02640a0fb716fcf",
                "articleId": "501",
                "name": "Motorola XOOM™ with Wi-Fi",
                "urlname": "motorola-xoom-with-wi-fi",
                "description": "The Next; Next Generation Experience the future with Motorola XOOM with Wi-Fi; the world's first tablet powered by Android 3.0 (Honeycomb).",
                "productType": "TABLET",
                "price": 199
            },
            {
                "id": "54008e98c02640a0fb716fd0",
                "articleId": "502",
                "name": "MOTOROLA XOOM™",
                "urlname": "motorola-xoom",
                "description": "The Next; Next Generation Experience the future with MOTOROLA XOOM; the world's first tablet powered by Android 3.0 (Honeycomb).",
                "productType": "TABLET",
                "price": 189
            },
            {
                "id": "54008e98c02640a0fb716fd1",
                "articleId": "504",
                "name": "Dell Streak 7",
                "urlname": "dell-streak-7",
                "description": "Introducing Dell™ Streak 7. Share photos; videos and movies together. It’s small enough to carry around; big enough to gather around.",
                "productType": "TABLET",
                "price": 179
            },
            {
                "id": "54008e98c02640a0fb716fd2",
                "articleId": "509",
                "name": "Samsung Galaxy Tab™",
                "urlname": "samsung-galaxy-tab",
                "description": "Feel Free to Tab™. The Samsung Galaxy Tab™ brings you an ultra-mobile entertainment experience through its 7” display; high-power processor and Adobe® Flash® Player compatibility.",
                "productType": "TABLET",
                "price": 169
            },
            {
                "id": "54008e98c02640a0fb716fd3",
                "articleId": "601",
                "name": "MOTOROLA ATRIX™ 4G",
                "urlname": "motorola-atrix-4g",
                "description": "MOTOROLA ATRIX 4G the world's most powerful smartphone.",
                "productType": "HANDY",
                "price": 59
            },
            {
                "id": "54008e98c02640a0fb716fd4",
                "articleId": "602",
                "name": "Samsung Gem™",
                "urlname": "samsung-gem",
                "description": "The Samsung Gem™ brings you everything that you would expect and more from a touch display smart phone – more apps; more features and a more affordable price.",
                "productType": "HANDY",
                "price": 69
            },
            {
                "id": "54008e98c02640a0fb716fd5",
                "articleId": "603",
                "name": "Dell Venue",
                "urlname": "dell-venue",
                "description": "The Dell Venue; Your Personal Express Lane to Everything",
                "productType": "HANDY",
                "price": 79
            },
            {
                "id": "54008e98c02640a0fb716fd6",
                "articleId": "604",
                "name": "Nexus S",
                "urlname": "nexus-s",
                "description": "Fast just got faster with Nexus S. A pure Google experience; Nexus S is the first phone to run Gingerbread (Android 2.3); the fastest version of Android yet.",
                "productType": "HANDY",
                "price": 89
            },
            {
                "id": "54008e98c02640a0fb716fd7",
                "articleId": "605",
                "name": "LG Axis",
                "urlname": "lg-axis",
                "description": "Android Powered; Google Maps Navigation; 5 Customizable Home Screens",
                "productType": "HANDY",
                "price": 99
            },
            {
                "id": "54008e98c02640a0fb716fd8",
                "articleId": "606",
                "name": "Samsung Showcase™ a Galaxy S™ phone",
                "urlname": "samsung-showcase-a-galaxy-s-phone",
                "description": "The Samsung Showcase™ delivers a cinema quality experience like you’ve never seen before. Its innovative 4” touch display technology provides rich picture brilliance; even outdoors",
                "productType": "HANDY",
                "price": 109
            },
            {
                "id": "54008e98c02640a0fb716fd9",
                "articleId": "607",
                "name": "DROID™ 2 Global by Motorola",
                "urlname": "droid-2-global-by-motorola",
                "description": "The first smartphone with a 1.2 GHz processor and global capabilities.",
                "productType": "HANDY",
                "price": 119
            },
            {
                "id": "54008e98c02640a0fb716fda",
                "articleId": "608",
                "name": "DROID™ Pro by Motorola",
                "urlname": "droid-pro-by-motorola",
                "description": "The next generation of DOES.",
                "productType": "HANDY",
                "price": 129
            },
            {
                "id": "54008e98c02640a0fb716fdb",
                "articleId": "609",
                "name": "MOTOROLA BRAVO™ with MOTOBLUR™",
                "urlname": "motorola-bravo-with-motoblur",
                "description": "An experience to cheer about.",
                "productType": "HANDY",
                "price": 139
            },
            {
                "id": "54008e98c02640a0fb716fdc",
                "articleId": "610",
                "name": "Motorola DEFY™ with MOTOBLUR™",
                "urlname": "motorola-defy-with-motoblur",
                "description": "Are you ready for everything life throws your way?",
                "productType": "HANDY",
                "price": 149
            },
            {
                "id": "54008e98c02640a0fb716fdd",
                "articleId": "611",
                "name": "T-Mobile myTouch 4G",
                "urlname": "t-mobile-mytouch-4g",
                "description": "The T-Mobile myTouch 4G is a premium smartphone designed to deliver blazing fast 4G speeds so that you can video chat from practically anywhere; with or without Wi-Fi.",
                "productType": "HANDY",
                "price": 159
            },
            {
                "id": "54008e98c02640a0fb716fde",
                "articleId": "612",
                "name": "Samsung Mesmerize™ a Galaxy S™ phone",
                "urlname": "samsung-mesmerize-a-galaxy-s-phone",
                "description": "The Samsung Mesmerize™ delivers a cinema quality experience like you’ve never seen before. Its innovative 4” touch display technology provides rich picture brilliance;even outdoors",
                "productType": "HANDY",
                "price": 169
            },
            {
                "id": "54008e98c02640a0fb716fdf",
                "articleId": "613",
                "name": "SANYO ZIO",
                "urlname": "sanyo-zio",
                "description": "The Sanyo Zio by Kyocera is an Android smartphone with a combination of ultra-sleek styling; strong performance and unprecedented value.",
                "productType": "HANDY",
                "price": 179
            },
            {
                "id": "54008e98c02640a0fb716fe0",
                "articleId": "614",
                "name": "Samsung Transform™",
                "urlname": "samsung-transform",
                "description": "The Samsung Transform™ brings you a fun way to customize your Android powered touch screen phone to just the way you like it through your favorite themed “Sprint ID Service Pack”.",
                "productType": "HANDY",
                "price": 189
            },
            {
                "id": "54008e98c02640a0fb716fe1",
                "articleId": "615",
                "name": "T-Mobile G2",
                "urlname": "t-mobile-g2",
                "description": "The T-Mobile G2 with Google is the first smartphone built for 4G speeds on T-Mobile's new network. Get the information you need; faster than you ever thought possible.",
                "productType": "HANDY",
                "price": 199
            },
            {
                "id": "54008e98c02640a0fb716fe2",
                "articleId": "616",
                "name": "Motorola CHARM™ with MOTOBLUR™",
                "urlname": "motorola-charm-with-motoblur",
                "description": "Motorola CHARM fits easily in your pocket or palm. Includes MOTOBLUR service.",
                "productType": "HANDY",
                "price": 209
            }
        ];
        result = _.shuffle(result);
        result = _.first(result, count);
        return  result;
    }
}

eshop.service('recommendationService', RecommendationService);
