import {useEffect, useState} from "react";

import {Photo} from "../models/photo.ts";
import Gallery from "../components/gallery/Gallery.tsx";
import InfiniteScrollWrapper from "../components/infiniteScrollWrapper/InfiniteScrollWrapper.tsx";
import {fetchPhotos} from "../services/api.ts";

const HomePage = () => {

    const [allPhotos, setAllPhotos] = useState<Photo[]>([{
        "id": 30930147,
        "width": 4640,
        "height": 6960,
        "url": "https://www.pexels.com/photo/neon-red-cafe-sign-illuminates-night-scene-30930147/",
        "photographer": "Efrem  Efre",
        "photographer_url": "https://www.pexels.com/@efrem-efre-2786187",
        "photographer_id": 2786187,
        "avg_color": "#4F2320",
        "src": {
            "original": "https://images.pexels.com/photos/30930147/pexels-photo-30930147.jpeg",
            "large2x": "https://images.pexels.com/photos/30930147/pexels-photo-30930147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30930147/pexels-photo-30930147.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30930147/pexels-photo-30930147.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30930147/pexels-photo-30930147.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30930147/pexels-photo-30930147.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30930147/pexels-photo-30930147.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30930147/pexels-photo-30930147.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": ""
    }, {
        "id": 30929529,
        "width": 2601,
        "height": 3902,
        "url": "https://www.pexels.com/photo/remote-vehicle-by-mirror-like-salar-de-uyuni-bolivia-30929529/",
        "photographer": "Willian Justen de Vasconcellos",
        "photographer_url": "https://www.pexels.com/@willianjusten",
        "photographer_id": 259049,
        "avg_color": "#4F7588",
        "src": {
            "original": "https://images.pexels.com/photos/30929529/pexels-photo-30929529.jpeg",
            "large2x": "https://images.pexels.com/photos/30929529/pexels-photo-30929529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30929529/pexels-photo-30929529.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30929529/pexels-photo-30929529.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30929529/pexels-photo-30929529.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30929529/pexels-photo-30929529.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30929529/pexels-photo-30929529.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30929529/pexels-photo-30929529.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": ""
    }, {
        "id": 30929349,
        "width": 4285,
        "height": 7008,
        "url": "https://www.pexels.com/photo/person-enjoying-mountain-lake-scenery-in-winter-30929349/",
        "photographer": "jiang hua",
        "photographer_url": "https://www.pexels.com/@jiang-hua-201207336",
        "photographer_id": 201207336,
        "avg_color": "#4E5F66",
        "src": {
            "original": "https://images.pexels.com/photos/30929349/pexels-photo-30929349.jpeg",
            "large2x": "https://images.pexels.com/photos/30929349/pexels-photo-30929349.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30929349/pexels-photo-30929349.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30929349/pexels-photo-30929349.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30929349/pexels-photo-30929349.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30929349/pexels-photo-30929349.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30929349/pexels-photo-30929349.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30929349/pexels-photo-30929349.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Adult appreciating mountain scenery wearing a cozy hat, capturing serene winter vibes."
    }, {
        "id": 30926674,
        "width": 5951,
        "height": 4761,
        "url": "https://www.pexels.com/photo/elegant-ballet-dancer-in-white-dress-with-red-hearts-30926674/",
        "photographer": "Israyosoy S.",
        "photographer_url": "https://www.pexels.com/@israyosoy",
        "photographer_id": 823751876,
        "avg_color": "#770D19",
        "src": {
            "original": "https://images.pexels.com/photos/30926674/pexels-photo-30926674.jpeg",
            "large2x": "https://images.pexels.com/photos/30926674/pexels-photo-30926674.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30926674/pexels-photo-30926674.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30926674/pexels-photo-30926674.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30926674/pexels-photo-30926674.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30926674/pexels-photo-30926674.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30926674/pexels-photo-30926674.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30926674/pexels-photo-30926674.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Free stock photo of ballet dancer, contemporary dancer, dancer"
    }, {
        "id": 30925483,
        "width": 3840,
        "height": 5424,
        "url": "https://www.pexels.com/photo/delicious-coffee-and-donuts-on-rustic-surface-30925483/",
        "photographer": "Electra Studio",
        "photographer_url": "https://www.pexels.com/@electra-studio-32883186",
        "photographer_id": 32883186,
        "avg_color": "#704346",
        "src": {
            "original": "https://images.pexels.com/photos/30925483/pexels-photo-30925483.jpeg",
            "large2x": "https://images.pexels.com/photos/30925483/pexels-photo-30925483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30925483/pexels-photo-30925483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30925483/pexels-photo-30925483.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30925483/pexels-photo-30925483.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30925483/pexels-photo-30925483.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30925483/pexels-photo-30925483.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30925483/pexels-photo-30925483.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Raff coffee with donuts"
    }, {
        "id": 30924826,
        "width": 3024,
        "height": 4032,
        "url": "https://www.pexels.com/photo/elegant-organizing-with-coffee-and-accessories-30924826/",
        "photographer": "Aljona Ovtšinnikova",
        "photographer_url": "https://www.pexels.com/@aljona-ovtsinnikova-121486965",
        "photographer_id": 121486965,
        "avg_color": "#64584C",
        "src": {
            "original": "https://images.pexels.com/photos/30924826/pexels-photo-30924826.jpeg",
            "large2x": "https://images.pexels.com/photos/30924826/pexels-photo-30924826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30924826/pexels-photo-30924826.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30924826/pexels-photo-30924826.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30924826/pexels-photo-30924826.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30924826/pexels-photo-30924826.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30924826/pexels-photo-30924826.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30924826/pexels-photo-30924826.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Stylish coffee setup with soaps and accessories on a wooden table."
    }, {
        "id": 30922278,
        "width": 3303,
        "height": 4954,
        "url": "https://www.pexels.com/photo/stack-of-powdered-sugar-donuts-on-plate-30922278/",
        "photographer": "Eugenia Sol",
        "photographer_url": "https://www.pexels.com/@eugenia-sol-1769194548",
        "photographer_id": 1769194548,
        "avg_color": "#D1C8BF",
        "src": {
            "original": "https://images.pexels.com/photos/30922278/pexels-photo-30922278.jpeg",
            "large2x": "https://images.pexels.com/photos/30922278/pexels-photo-30922278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30922278/pexels-photo-30922278.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30922278/pexels-photo-30922278.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30922278/pexels-photo-30922278.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30922278/pexels-photo-30922278.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30922278/pexels-photo-30922278.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30922278/pexels-photo-30922278.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Free stock photo of bakery, creative food photography, dessert"
    }, {
        "id": 30911091,
        "width": 3000,
        "height": 2000,
        "url": "https://www.pexels.com/photo/colorful-summer-day-at-coney-island-amusement-park-30911091/",
        "photographer": "Dimitry Mak",
        "photographer_url": "https://www.pexels.com/@dimitry-mak-1310041547",
        "photographer_id": 1310041547,
        "avg_color": "#88959D",
        "src": {
            "original": "https://images.pexels.com/photos/30911091/pexels-photo-30911091.jpeg",
            "large2x": "https://images.pexels.com/photos/30911091/pexels-photo-30911091.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30911091/pexels-photo-30911091.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30911091/pexels-photo-30911091.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30911091/pexels-photo-30911091.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30911091/pexels-photo-30911091.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30911091/pexels-photo-30911091.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30911091/pexels-photo-30911091.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Coney Island Summer"
    }, {
        "id": 30911365,
        "width": 3883,
        "height": 5825,
        "url": "https://www.pexels.com/photo/delicious-pancakes-with-fresh-fruit-toppings-30911365/",
        "photographer": "Beyza Yalçın",
        "photographer_url": "https://www.pexels.com/@beyza-yalcin-153182170",
        "photographer_id": 153182170,
        "avg_color": "#49524F",
        "src": {
            "original": "https://images.pexels.com/photos/30911365/pexels-photo-30911365.jpeg",
            "large2x": "https://images.pexels.com/photos/30911365/pexels-photo-30911365.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30911365/pexels-photo-30911365.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30911365/pexels-photo-30911365.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30911365/pexels-photo-30911365.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30911365/pexels-photo-30911365.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30911365/pexels-photo-30911365.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30911365/pexels-photo-30911365.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Stack of homemade pancakes drizzled with syrup, topped with fresh strawberries and banana slices."
    }, {
        "id": 30920786,
        "width": 4503,
        "height": 6754,
        "url": "https://www.pexels.com/photo/scenic-winter-drive-in-upper-austria-30920786/",
        "photographer": "Jaqueline Bremmer",
        "photographer_url": "https://www.pexels.com/@jaqueline-bremmer-2150044206",
        "photographer_id": 2150044206,
        "avg_color": "#66787A",
        "src": {
            "original": "https://images.pexels.com/photos/30920786/pexels-photo-30920786.jpeg",
            "large2x": "https://images.pexels.com/photos/30920786/pexels-photo-30920786.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30920786/pexels-photo-30920786.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30920786/pexels-photo-30920786.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30920786/pexels-photo-30920786.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30920786/pexels-photo-30920786.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30920786/pexels-photo-30920786.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30920786/pexels-photo-30920786.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Drive with a view"
    }, {
        "id": 30913847,
        "width": 6732,
        "height": 4208,
        "url": "https://www.pexels.com/photo/indoor-artistic-scene-with-calligraphy-and-cat-30913847/",
        "photographer": "Jesse R",
        "photographer_url": "https://www.pexels.com/@jesse-r-489622426",
        "photographer_id": 489622426,
        "avg_color": "#4D3F34",
        "src": {
            "original": "https://images.pexels.com/photos/30913847/pexels-photo-30913847.jpeg",
            "large2x": "https://images.pexels.com/photos/30913847/pexels-photo-30913847.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30913847/pexels-photo-30913847.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30913847/pexels-photo-30913847.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30913847/pexels-photo-30913847.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30913847/pexels-photo-30913847.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30913847/pexels-photo-30913847.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30913847/pexels-photo-30913847.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Free stock photo of art, cat, chinese"
    }, {
        "id": 30911314,
        "width": 3744,
        "height": 5616,
        "url": "https://www.pexels.com/photo/elegant-couple-in-traditional-wedding-attire-30911314/",
        "photographer": "Dilara Doğar",
        "photographer_url": "https://www.pexels.com/@dilara-dogar-713705919",
        "photographer_id": 713705919,
        "avg_color": "#97766F",
        "src": {
            "original": "https://images.pexels.com/photos/30911314/pexels-photo-30911314.jpeg",
            "large2x": "https://images.pexels.com/photos/30911314/pexels-photo-30911314.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30911314/pexels-photo-30911314.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30911314/pexels-photo-30911314.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30911314/pexels-photo-30911314.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30911314/pexels-photo-30911314.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30911314/pexels-photo-30911314.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30911314/pexels-photo-30911314.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Happy couple embraces in traditional, ornate wedding attire under bright daylight."
    }, {
        "id": 30910499,
        "width": 7845,
        "height": 9000,
        "url": "https://www.pexels.com/photo/fresh-strawberries-in-a-woven-basket-30910499/",
        "photographer": "Tomi",
        "photographer_url": "https://www.pexels.com/@tomi-2150003349",
        "photographer_id": 2150003349,
        "avg_color": "#A37872",
        "src": {
            "original": "https://images.pexels.com/photos/30910499/pexels-photo-30910499.jpeg",
            "large2x": "https://images.pexels.com/photos/30910499/pexels-photo-30910499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30910499/pexels-photo-30910499.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30910499/pexels-photo-30910499.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30910499/pexels-photo-30910499.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30910499/pexels-photo-30910499.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30910499/pexels-photo-30910499.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30910499/pexels-photo-30910499.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "strawberries "
    }, {
        "id": 30910197,
        "width": 2000,
        "height": 3000,
        "url": "https://www.pexels.com/photo/assorted-flavored-popcorn-in-bowls-from-above-30910197/",
        "photographer": "Electra Studio",
        "photographer_url": "https://www.pexels.com/@electra-studio-32883186",
        "photographer_id": 32883186,
        "avg_color": "#584B43",
        "src": {
            "original": "https://images.pexels.com/photos/30910197/pexels-photo-30910197.jpeg",
            "large2x": "https://images.pexels.com/photos/30910197/pexels-photo-30910197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30910197/pexels-photo-30910197.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30910197/pexels-photo-30910197.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30910197/pexels-photo-30910197.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30910197/pexels-photo-30910197.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30910197/pexels-photo-30910197.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30910197/pexels-photo-30910197.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Bowls of popcorn from above, close-up"
    }, {
        "id": 30909954,
        "width": 3000,
        "height": 4000,
        "url": "https://www.pexels.com/photo/portrait-of-a-young-boy-with-white-cap-and-fur-30909954/",
        "photographer": "Mitchel  Onwuchuruba",
        "photographer_url": "https://www.pexels.com/@mitchel-onwuchuruba-2148968906",
        "photographer_id": 2148968906,
        "avg_color": "#686560",
        "src": {
            "original": "https://images.pexels.com/photos/30909954/pexels-photo-30909954.jpeg",
            "large2x": "https://images.pexels.com/photos/30909954/pexels-photo-30909954.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30909954/pexels-photo-30909954.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30909954/pexels-photo-30909954.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30909954/pexels-photo-30909954.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30909954/pexels-photo-30909954.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30909954/pexels-photo-30909954.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30909954/pexels-photo-30909954.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Close-up portrait of a young boy wearing a white cap and fur coat."
    }, {
        "id": 30909945,
        "width": 3000,
        "height": 4000,
        "url": "https://www.pexels.com/photo/young-boy-in-traditional-blue-attire-outdoors-30909945/",
        "photographer": "Mitchel  Onwuchuruba",
        "photographer_url": "https://www.pexels.com/@mitchel-onwuchuruba-2148968906",
        "photographer_id": 2148968906,
        "avg_color": "#84A8B6",
        "src": {
            "original": "https://images.pexels.com/photos/30909945/pexels-photo-30909945.jpeg",
            "large2x": "https://images.pexels.com/photos/30909945/pexels-photo-30909945.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30909945/pexels-photo-30909945.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30909945/pexels-photo-30909945.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30909945/pexels-photo-30909945.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30909945/pexels-photo-30909945.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30909945/pexels-photo-30909945.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30909945/pexels-photo-30909945.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": ""
    }, {
        "id": 30907863,
        "width": 2709,
        "height": 3694,
        "url": "https://www.pexels.com/photo/elegant-black-and-white-african-portrait-30907863/",
        "photographer": "Theresa  Ude",
        "photographer_url": "https://www.pexels.com/@theresaude",
        "photographer_id": 2149503957,
        "avg_color": "#969696",
        "src": {
            "original": "https://images.pexels.com/photos/30907863/pexels-photo-30907863.jpeg",
            "large2x": "https://images.pexels.com/photos/30907863/pexels-photo-30907863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30907863/pexels-photo-30907863.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30907863/pexels-photo-30907863.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30907863/pexels-photo-30907863.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30907863/pexels-photo-30907863.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30907863/pexels-photo-30907863.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30907863/pexels-photo-30907863.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Free stock photo of abuja, african art, african culture"
    }, {
        "id": 30906052,
        "width": 4037,
        "height": 5450,
        "url": "https://www.pexels.com/photo/traditional-moroccan-mint-tea-set-on-red-rug-30906052/",
        "photographer": "Moussa Idrissi",
        "photographer_url": "https://www.pexels.com/@mographe",
        "photographer_id": 311244,
        "avg_color": "#864D46",
        "src": {
            "original": "https://images.pexels.com/photos/30906052/pexels-photo-30906052.jpeg",
            "large2x": "https://images.pexels.com/photos/30906052/pexels-photo-30906052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30906052/pexels-photo-30906052.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30906052/pexels-photo-30906052.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30906052/pexels-photo-30906052.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30906052/pexels-photo-30906052.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30906052/pexels-photo-30906052.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30906052/pexels-photo-30906052.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Authentic Moroccan mint tea set with silver teapot and cups on a vibrant red rug, Fès, Morocco."
    }, {
        "id": 30903043,
        "width": 9216,
        "height": 6144,
        "url": "https://www.pexels.com/photo/surfer-riding-waves-at-sankt-peter-ording-beach-30903043/",
        "photographer": "Stefanie Jockschat",
        "photographer_url": "https://www.pexels.com/@stefaniejockschat",
        "photographer_id": 38057937,
        "avg_color": "#87A9B5",
        "src": {
            "original": "https://images.pexels.com/photos/30903043/pexels-photo-30903043.jpeg",
            "large2x": "https://images.pexels.com/photos/30903043/pexels-photo-30903043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30903043/pexels-photo-30903043.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30903043/pexels-photo-30903043.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30903043/pexels-photo-30903043.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30903043/pexels-photo-30903043.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30903043/pexels-photo-30903043.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30903043/pexels-photo-30903043.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "A surfer enjoying the summer waves at Sankt Peter-Ording beach in Germany."
    }, {
        "id": 30910666,
        "width": 2268,
        "height": 4032,
        "url": "https://www.pexels.com/photo/serene-black-and-white-venice-gondolas-30910666/",
        "photographer": "Pegah Sharifi",
        "photographer_url": "https://www.pexels.com/@peg1997",
        "photographer_id": 1961129,
        "avg_color": "#A6A6A6",
        "src": {
            "original": "https://images.pexels.com/photos/30910666/pexels-photo-30910666.jpeg",
            "large2x": "https://images.pexels.com/photos/30910666/pexels-photo-30910666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30910666/pexels-photo-30910666.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30910666/pexels-photo-30910666.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30910666/pexels-photo-30910666.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30910666/pexels-photo-30910666.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30910666/pexels-photo-30910666.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30910666/pexels-photo-30910666.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": ""
    }, {
        "id": 30902338,
        "width": 2832,
        "height": 4250,
        "url": "https://www.pexels.com/photo/asian-elephants-in-bengaluru-wildlife-park-30902338/",
        "photographer": "Anil  Sharma",
        "photographer_url": "https://www.pexels.com/@anil-sharma-2149101452",
        "photographer_id": 2149101452,
        "avg_color": "#5B5B5B",
        "src": {
            "original": "https://images.pexels.com/photos/30902338/pexels-photo-30902338.jpeg",
            "large2x": "https://images.pexels.com/photos/30902338/pexels-photo-30902338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30902338/pexels-photo-30902338.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30902338/pexels-photo-30902338.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30902338/pexels-photo-30902338.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30902338/pexels-photo-30902338.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30902338/pexels-photo-30902338.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30902338/pexels-photo-30902338.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Black and white photo of two Asian elephants standing closely together."
    }, {
        "id": 30895095,
        "width": 3456,
        "height": 5184,
        "url": "https://www.pexels.com/photo/raindrops-on-red-autumn-leaves-close-up-30895095/",
        "photographer": "Наталія Баран",
        "photographer_url": "https://www.pexels.com/@2149995849",
        "photographer_id": 2149995849,
        "avg_color": "#743F39",
        "src": {
            "original": "https://images.pexels.com/photos/30895095/pexels-photo-30895095.jpeg",
            "large2x": "https://images.pexels.com/photos/30895095/pexels-photo-30895095.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30895095/pexels-photo-30895095.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30895095/pexels-photo-30895095.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30895095/pexels-photo-30895095.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30895095/pexels-photo-30895095.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30895095/pexels-photo-30895095.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30895095/pexels-photo-30895095.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Close-up of vibrant red autumn leaves with raindrops, creating a serene fall atmosphere."
    }, {
        "id": 30894725,
        "width": 4640,
        "height": 6960,
        "url": "https://www.pexels.com/photo/vintage-bicycle-by-ornate-architectural-doorway-30894725/",
        "photographer": "Efrem  Efre",
        "photographer_url": "https://www.pexels.com/@efrem-efre-2786187",
        "photographer_id": 2786187,
        "avg_color": "#777777",
        "src": {
            "original": "https://images.pexels.com/photos/30894725/pexels-photo-30894725.jpeg",
            "large2x": "https://images.pexels.com/photos/30894725/pexels-photo-30894725.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30894725/pexels-photo-30894725.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30894725/pexels-photo-30894725.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30894725/pexels-photo-30894725.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30894725/pexels-photo-30894725.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30894725/pexels-photo-30894725.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30894725/pexels-photo-30894725.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Black and white "
    }, {
        "id": 30894263,
        "width": 4769,
        "height": 7145,
        "url": "https://www.pexels.com/photo/minimalist-wire-grid-with-red-background-30894263/",
        "photographer": "Victor  Moragriega",
        "photographer_url": "https://www.pexels.com/@victormoragriega",
        "photographer_id": 1390556186,
        "avg_color": "#9F200D",
        "src": {
            "original": "https://images.pexels.com/photos/30894263/pexels-photo-30894263.jpeg",
            "large2x": "https://images.pexels.com/photos/30894263/pexels-photo-30894263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30894263/pexels-photo-30894263.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30894263/pexels-photo-30894263.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30894263/pexels-photo-30894263.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30894263/pexels-photo-30894263.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30894263/pexels-photo-30894263.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30894263/pexels-photo-30894263.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": ""
    }, {
        "id": 30893319,
        "width": 2828,
        "height": 4242,
        "url": "https://www.pexels.com/photo/outdoor-fashion-photoshoot-with-photographer-30893319/",
        "photographer": "Amar  Preciado",
        "photographer_url": "https://www.pexels.com/@amar",
        "photographer_id": 2247381,
        "avg_color": "#848077",
        "src": {
            "original": "https://images.pexels.com/photos/30893319/pexels-photo-30893319.jpeg",
            "large2x": "https://images.pexels.com/photos/30893319/pexels-photo-30893319.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30893319/pexels-photo-30893319.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30893319/pexels-photo-30893319.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30893319/pexels-photo-30893319.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30893319/pexels-photo-30893319.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30893319/pexels-photo-30893319.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30893319/pexels-photo-30893319.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Photographer capturing a model in a stylish outdoor photoshoot."
    }, {
        "id": 30893002,
        "width": 4000,
        "height": 6000,
        "url": "https://www.pexels.com/photo/professional-chef-cooking-in-industrial-kitchen-30893002/",
        "photographer": "Anthony  Osuna",
        "photographer_url": "https://www.pexels.com/@anthony-osuna-1774981",
        "photographer_id": 1774981,
        "avg_color": "#735741",
        "src": {
            "original": "https://images.pexels.com/photos/30893002/pexels-photo-30893002.jpeg",
            "large2x": "https://images.pexels.com/photos/30893002/pexels-photo-30893002.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30893002/pexels-photo-30893002.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30893002/pexels-photo-30893002.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30893002/pexels-photo-30893002.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30893002/pexels-photo-30893002.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30893002/pexels-photo-30893002.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30893002/pexels-photo-30893002.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Chef preparing dish with precision in a restaurant kitchen setting."
    }, {
        "id": 30891973,
        "width": 2032,
        "height": 2710,
        "url": "https://www.pexels.com/photo/sailboat-on-tranquil-sea-in-black-and-white-30891973/",
        "photographer": "Dzmitry Charnou",
        "photographer_url": "https://www.pexels.com/@dzmitry-charnou-2093191166",
        "photographer_id": 2093191166,
        "avg_color": "#D7D7D7",
        "src": {
            "original": "https://images.pexels.com/photos/30891973/pexels-photo-30891973.jpeg",
            "large2x": "https://images.pexels.com/photos/30891973/pexels-photo-30891973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30891973/pexels-photo-30891973.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30891973/pexels-photo-30891973.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30891973/pexels-photo-30891973.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30891973/pexels-photo-30891973.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30891973/pexels-photo-30891973.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30891973/pexels-photo-30891973.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "A solitary sailboat on a vast sea under a serene sky, captured in black and white."
    }, {
        "id": 30877558,
        "width": 4608,
        "height": 3072,
        "url": "https://www.pexels.com/photo/aerial-view-of-london-s-tower-bridge-in-black-and-white-30877558/",
        "photographer": "Candid Flaneur",
        "photographer_url": "https://www.pexels.com/@candid-flaneur-175964800",
        "photographer_id": 175964800,
        "avg_color": "#686868",
        "src": {
            "original": "https://images.pexels.com/photos/30877558/pexels-photo-30877558.jpeg",
            "large2x": "https://images.pexels.com/photos/30877558/pexels-photo-30877558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30877558/pexels-photo-30877558.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30877558/pexels-photo-30877558.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30877558/pexels-photo-30877558.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30877558/pexels-photo-30877558.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30877558/pexels-photo-30877558.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30877558/pexels-photo-30877558.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": ""
    }, {
        "id": 30886928,
        "width": 3892,
        "height": 5838,
        "url": "https://www.pexels.com/photo/fashionable-woman-posing-on-rocky-beach-30886928/",
        "photographer": "Mert Coşkun",
        "photographer_url": "https://www.pexels.com/@mert-coskun-386432351",
        "photographer_id": 386432351,
        "avg_color": "#7E7264",
        "src": {
            "original": "https://images.pexels.com/photos/30886928/pexels-photo-30886928.jpeg",
            "large2x": "https://images.pexels.com/photos/30886928/pexels-photo-30886928.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30886928/pexels-photo-30886928.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30886928/pexels-photo-30886928.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30886928/pexels-photo-30886928.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30886928/pexels-photo-30886928.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30886928/pexels-photo-30886928.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30886928/pexels-photo-30886928.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Stylish woman kneeling on a pebble beach in an elegant coat."
    }, {
        "id": 30879759,
        "width": 4000,
        "height": 5186,
        "url": "https://www.pexels.com/photo/close-up-of-dew-on-red-leaf-in-soft-light-30879759/",
        "photographer": "ADENIUSO Gomes",
        "photographer_url": "https://www.pexels.com/@adeniuso-gomes-2148096772",
        "photographer_id": 2148096772,
        "avg_color": "#380A0D",
        "src": {
            "original": "https://images.pexels.com/photos/30879759/pexels-photo-30879759.jpeg",
            "large2x": "https://images.pexels.com/photos/30879759/pexels-photo-30879759.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30879759/pexels-photo-30879759.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30879759/pexels-photo-30879759.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30879759/pexels-photo-30879759.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30879759/pexels-photo-30879759.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30879759/pexels-photo-30879759.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30879759/pexels-photo-30879759.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "A vibrant close-up shot of dew droplets on a red leaf, capturing nature's intricate details."
    }, {
        "id": 30885196,
        "width": 3024,
        "height": 4032,
        "url": "https://www.pexels.com/photo/delicious-dessert-with-raspberries-and-coffee-30885196/",
        "photographer": "Lara Farber",
        "photographer_url": "https://www.pexels.com/@larissafarber",
        "photographer_id": 41034823,
        "avg_color": "#B6A498",
        "src": {
            "original": "https://images.pexels.com/photos/30885196/pexels-photo-30885196.jpeg",
            "large2x": "https://images.pexels.com/photos/30885196/pexels-photo-30885196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30885196/pexels-photo-30885196.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30885196/pexels-photo-30885196.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30885196/pexels-photo-30885196.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30885196/pexels-photo-30885196.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30885196/pexels-photo-30885196.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30885196/pexels-photo-30885196.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Tasty dessert with raspberries and coffee on white background. Perfect for food lovers."
    }, {
        "id": 29937908,
        "width": 2944,
        "height": 4122,
        "url": "https://www.pexels.com/photo/woman-reading-newspaper-on-rainy-city-street-29937908/",
        "photographer": "Kris Shambir",
        "photographer_url": "https://www.pexels.com/@kris-shambir-2147748720",
        "photographer_id": 2147748720,
        "avg_color": "#67666B",
        "src": {
            "original": "https://images.pexels.com/photos/29937908/pexels-photo-29937908.jpeg",
            "large2x": "https://images.pexels.com/photos/29937908/pexels-photo-29937908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/29937908/pexels-photo-29937908.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/29937908/pexels-photo-29937908.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/29937908/pexels-photo-29937908.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/29937908/pexels-photo-29937908.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/29937908/pexels-photo-29937908.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/29937908/pexels-photo-29937908.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": ""
    }, {
        "id": 30869764,
        "width": 2953,
        "height": 4429,
        "url": "https://www.pexels.com/photo/charming-stone-house-in-sigacik-izmir-30869764/",
        "photographer": "Burak Evlivan",
        "photographer_url": "https://www.pexels.com/@burak",
        "photographer_id": 159589296,
        "avg_color": "#92917F",
        "src": {
            "original": "https://images.pexels.com/photos/30869764/pexels-photo-30869764.jpeg",
            "large2x": "https://images.pexels.com/photos/30869764/pexels-photo-30869764.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30869764/pexels-photo-30869764.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30869764/pexels-photo-30869764.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30869764/pexels-photo-30869764.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30869764/pexels-photo-30869764.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30869764/pexels-photo-30869764.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30869764/pexels-photo-30869764.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Stone house with pastel shutters and tree, captured in sunny Sığacık, İzmir."
    }, {
        "id": 30869756,
        "width": 2953,
        "height": 4429,
        "url": "https://www.pexels.com/photo/charming-mediterranean-house-with-white-gate-30869756/",
        "photographer": "Burak Evlivan",
        "photographer_url": "https://www.pexels.com/@burak",
        "photographer_id": 159589296,
        "avg_color": "#C1BBAF",
        "src": {
            "original": "https://images.pexels.com/photos/30869756/pexels-photo-30869756.jpeg",
            "large2x": "https://images.pexels.com/photos/30869756/pexels-photo-30869756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30869756/pexels-photo-30869756.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30869756/pexels-photo-30869756.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30869756/pexels-photo-30869756.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30869756/pexels-photo-30869756.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30869756/pexels-photo-30869756.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30869756/pexels-photo-30869756.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Quaint Mediterranean house entrance with a white gate, sunny ambiance."
    }, {
        "id": 30862653,
        "width": 3961,
        "height": 5943,
        "url": "https://www.pexels.com/photo/charming-village-scene-in-lopud-croatia-30862653/",
        "photographer": "Nikola Kojević",
        "photographer_url": "https://www.pexels.com/@nikola-kojevic-1608684723",
        "photographer_id": 1608684723,
        "avg_color": "#6A5E52",
        "src": {
            "original": "https://images.pexels.com/photos/30862653/pexels-photo-30862653.jpeg",
            "large2x": "https://images.pexels.com/photos/30862653/pexels-photo-30862653.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30862653/pexels-photo-30862653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30862653/pexels-photo-30862653.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30862653/pexels-photo-30862653.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30862653/pexels-photo-30862653.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30862653/pexels-photo-30862653.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30862653/pexels-photo-30862653.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Explore the rustic charm of Croatian village architecture in Lopud, captured in warm summer light."
    }, {
        "id": 30860544,
        "width": 3329,
        "height": 4978,
        "url": "https://www.pexels.com/photo/venetian-architecture-with-floral-window-boxes-30860544/",
        "photographer": "Michael Hamments",
        "photographer_url": "https://www.pexels.com/@michael-hamments-736237287",
        "photographer_id": 736237287,
        "avg_color": "#96886E",
        "src": {
            "original": "https://images.pexels.com/photos/30860544/pexels-photo-30860544.jpeg",
            "large2x": "https://images.pexels.com/photos/30860544/pexels-photo-30860544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30860544/pexels-photo-30860544.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30860544/pexels-photo-30860544.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30860544/pexels-photo-30860544.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30860544/pexels-photo-30860544.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30860544/pexels-photo-30860544.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30860544/pexels-photo-30860544.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Historic Venetian building facade with ornate windows and vibrant flower boxes in Venice, Italy."
    }, {
        "id": 30854148,
        "width": 4000,
        "height": 6000,
        "url": "https://www.pexels.com/photo/bright-yellow-wooden-door-with-lock-handle-30854148/",
        "photographer": "Anna Danilina",
        "photographer_url": "https://www.pexels.com/@anna-danilina-241843489",
        "photographer_id": 241843489,
        "avg_color": "#CA8D34",
        "src": {
            "original": "https://images.pexels.com/photos/30854148/pexels-photo-30854148.jpeg",
            "large2x": "https://images.pexels.com/photos/30854148/pexels-photo-30854148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30854148/pexels-photo-30854148.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30854148/pexels-photo-30854148.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30854148/pexels-photo-30854148.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30854148/pexels-photo-30854148.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30854148/pexels-photo-30854148.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30854148/pexels-photo-30854148.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Vibrant yellow wooden door with panel details and a metal lock handle."
    }, {
        "id": 30847375,
        "width": 4000,
        "height": 6000,
        "url": "https://www.pexels.com/photo/stylish-man-walking-along-brick-wall-at-sunset-30847375/",
        "photographer": "دريمر Dreamer",
        "photographer_url": "https://www.pexels.com/@dreamer-2149502243",
        "photographer_id": 2149502243,
        "avg_color": "#6E6150",
        "src": {
            "original": "https://images.pexels.com/photos/30847375/pexels-photo-30847375.jpeg",
            "large2x": "https://images.pexels.com/photos/30847375/pexels-photo-30847375.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30847375/pexels-photo-30847375.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30847375/pexels-photo-30847375.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30847375/pexels-photo-30847375.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30847375/pexels-photo-30847375.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30847375/pexels-photo-30847375.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30847375/pexels-photo-30847375.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Man in hat walks by brick wall, casting shadow in golden sunset light."
    }, {
        "id": 30838979,
        "width": 2892,
        "height": 4000,
        "url": "https://www.pexels.com/photo/close-up-of-golden-wheat-field-in-turkiye-30838979/",
        "photographer": "Sefa Türksoy",
        "photographer_url": "https://www.pexels.com/@sefaturksoy",
        "photographer_id": 1641304835,
        "avg_color": "#9C7742",
        "src": {
            "original": "https://images.pexels.com/photos/30838979/pexels-photo-30838979.jpeg",
            "large2x": "https://images.pexels.com/photos/30838979/pexels-photo-30838979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30838979/pexels-photo-30838979.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30838979/pexels-photo-30838979.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30838979/pexels-photo-30838979.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30838979/pexels-photo-30838979.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30838979/pexels-photo-30838979.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30838979/pexels-photo-30838979.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Vibrant close-up of swaying golden wheat in a field in Siirt, Türkiye."
    }, {
        "id": 30835578,
        "width": 5939,
        "height": 3951,
        "url": "https://www.pexels.com/photo/ancient-egyptian-sphinx-statue-inside-museum-30835578/",
        "photographer": "Fotis Michalainas",
        "photographer_url": "https://www.pexels.com/@fotis-michalainas-2149881541",
        "photographer_id": 2149881541,
        "avg_color": "#63482D",
        "src": {
            "original": "https://images.pexels.com/photos/30835578/pexels-photo-30835578.jpeg",
            "large2x": "https://images.pexels.com/photos/30835578/pexels-photo-30835578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30835578/pexels-photo-30835578.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30835578/pexels-photo-30835578.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30835578/pexels-photo-30835578.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30835578/pexels-photo-30835578.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30835578/pexels-photo-30835578.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30835578/pexels-photo-30835578.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "A captivating ancient Egyptian sphinx statue displayed inside a dimly lit museum corridor."
    }, {
        "id": 30851210,
        "width": 4160,
        "height": 6240,
        "url": "https://www.pexels.com/photo/latte-art-in-yellow-ceramic-cup-on-snowy-day-30851210/",
        "photographer": "Esra Afşar",
        "photographer_url": "https://www.pexels.com/@esra-afsar-123882149",
        "photographer_id": 123882149,
        "avg_color": "#C2C2CC",
        "src": {
            "original": "https://images.pexels.com/photos/30851210/pexels-photo-30851210.jpeg",
            "large2x": "https://images.pexels.com/photos/30851210/pexels-photo-30851210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30851210/pexels-photo-30851210.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30851210/pexels-photo-30851210.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30851210/pexels-photo-30851210.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30851210/pexels-photo-30851210.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30851210/pexels-photo-30851210.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30851210/pexels-photo-30851210.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Top view of a latte with artistic foam in a yellow ceramic cup held outdoors against a snowy background."
    }, {
        "id": 30845184,
        "width": 6240,
        "height": 4160,
        "url": "https://www.pexels.com/photo/dramatic-shadow-of-hand-on-wall-at-sunset-30845184/",
        "photographer": "Beyzaa Yurtkuran",
        "photographer_url": "https://www.pexels.com/@beyzaa-yurtkuran-279977530",
        "photographer_id": 279977530,
        "avg_color": "#5E4F38",
        "src": {
            "original": "https://images.pexels.com/photos/30845184/pexels-photo-30845184.jpeg",
            "large2x": "https://images.pexels.com/photos/30845184/pexels-photo-30845184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30845184/pexels-photo-30845184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30845184/pexels-photo-30845184.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30845184/pexels-photo-30845184.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30845184/pexels-photo-30845184.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30845184/pexels-photo-30845184.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30845184/pexels-photo-30845184.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "A dramatic shadow of an outstretched hand cast on a wall at sunset, evoking mystery."
    }, {
        "id": 30853294,
        "width": 4160,
        "height": 6240,
        "url": "https://www.pexels.com/photo/historic-entrance-at-schloss-wilhelmshohe-kassel-30853294/",
        "photographer": "Christina & Peter",
        "photographer_url": "https://www.pexels.com/@christina99999",
        "photographer_id": 940909194,
        "avg_color": "#6C604A",
        "src": {
            "original": "https://images.pexels.com/photos/30853294/pexels-photo-30853294.jpeg",
            "large2x": "https://images.pexels.com/photos/30853294/pexels-photo-30853294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30853294/pexels-photo-30853294.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30853294/pexels-photo-30853294.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30853294/pexels-photo-30853294.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30853294/pexels-photo-30853294.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30853294/pexels-photo-30853294.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30853294/pexels-photo-30853294.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Grand entrance at Schloss Wilhelmshöhe in Kassel, Germany, featuring a vintage design with stone steps."
    }, {
        "id": 30835527,
        "width": 2417,
        "height": 3626,
        "url": "https://www.pexels.com/photo/majestic-lion-roaring-in-natural-habitat-30835527/",
        "photographer": "Fotis Michalainas",
        "photographer_url": "https://www.pexels.com/@fotis-michalainas-2149881541",
        "photographer_id": 2149881541,
        "avg_color": "#898071",
        "src": {
            "original": "https://images.pexels.com/photos/30835527/pexels-photo-30835527.jpeg",
            "large2x": "https://images.pexels.com/photos/30835527/pexels-photo-30835527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30835527/pexels-photo-30835527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30835527/pexels-photo-30835527.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30835527/pexels-photo-30835527.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30835527/pexels-photo-30835527.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30835527/pexels-photo-30835527.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30835527/pexels-photo-30835527.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Powerful lion roaring atop rocks in the wild, showcasing strength and nature's beauty."
    }, {
        "id": 30841403,
        "width": 3024,
        "height": 4032,
        "url": "https://www.pexels.com/photo/cozy-living-room-scene-with-candles-and-blanket-30841403/",
        "photographer": "zeynebkral",
        "photographer_url": "https://www.pexels.com/@zeynebkral-1298464781",
        "photographer_id": 1298464781,
        "avg_color": "#676056",
        "src": {
            "original": "https://images.pexels.com/photos/30841403/pexels-photo-30841403.jpeg",
            "large2x": "https://images.pexels.com/photos/30841403/pexels-photo-30841403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30841403/pexels-photo-30841403.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30841403/pexels-photo-30841403.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30841403/pexels-photo-30841403.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30841403/pexels-photo-30841403.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30841403/pexels-photo-30841403.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30841403/pexels-photo-30841403.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Warm, cozy scene with candles and blanket, ideal for relaxation or winter decor."
    }, {
        "id": 30840677,
        "width": 5229,
        "height": 3486,
        "url": "https://www.pexels.com/photo/scenic-seascape-with-rugged-rock-formations-30840677/",
        "photographer": "Paco Valentin",
        "photographer_url": "https://www.pexels.com/@paco-valentin-257095528",
        "photographer_id": 257095528,
        "avg_color": "#78797D",
        "src": {
            "original": "https://images.pexels.com/photos/30840677/pexels-photo-30840677.jpeg",
            "large2x": "https://images.pexels.com/photos/30840677/pexels-photo-30840677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30840677/pexels-photo-30840677.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30840677/pexels-photo-30840677.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30840677/pexels-photo-30840677.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30840677/pexels-photo-30840677.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30840677/pexels-photo-30840677.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30840677/pexels-photo-30840677.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Beautiful seascape with dramatic rocky formations near Almería, Spain at sunset."
    }, {
        "id": 30835507,
        "width": 2928,
        "height": 4401,
        "url": "https://www.pexels.com/photo/vibrant-jellyfish-in-dark-ocean-waters-30835507/",
        "photographer": "Fotis Michalainas",
        "photographer_url": "https://www.pexels.com/@fotis-michalainas-2149881541",
        "photographer_id": 2149881541,
        "avg_color": "#55313D",
        "src": {
            "original": "https://images.pexels.com/photos/30835507/pexels-photo-30835507.jpeg",
            "large2x": "https://images.pexels.com/photos/30835507/pexels-photo-30835507.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30835507/pexels-photo-30835507.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30835507/pexels-photo-30835507.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30835507/pexels-photo-30835507.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30835507/pexels-photo-30835507.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30835507/pexels-photo-30835507.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30835507/pexels-photo-30835507.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Colorful jellyfish swimming gracefully in the deep ocean."
    }, {
        "id": 30843770,
        "width": 4672,
        "height": 7008,
        "url": "https://www.pexels.com/photo/stylish-woman-in-hat-standing-in-flower-field-30843770/",
        "photographer": "sara kazemi",
        "photographer_url": "https://www.pexels.com/@sara-kazemi-2148049458",
        "photographer_id": 2148049458,
        "avg_color": "#8D7E5D",
        "src": {
            "original": "https://images.pexels.com/photos/30843770/pexels-photo-30843770.jpeg",
            "large2x": "https://images.pexels.com/photos/30843770/pexels-photo-30843770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30843770/pexels-photo-30843770.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30843770/pexels-photo-30843770.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30843770/pexels-photo-30843770.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30843770/pexels-photo-30843770.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30843770/pexels-photo-30843770.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30843770/pexels-photo-30843770.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Woman in a field of yellow flowers wearing a stylish hat and white blouse, embodying elegance."
    }, {
        "id": 30833932,
        "width": 4000,
        "height": 6000,
        "url": "https://www.pexels.com/photo/tranquil-forest-pathway-in-late-autumn-30833932/",
        "photographer": "Thomas  De Meyer",
        "photographer_url": "https://www.pexels.com/@thomas-de-meyer-2148804238",
        "photographer_id": 2148804238,
        "avg_color": "#756A58",
        "src": {
            "original": "https://images.pexels.com/photos/30833932/pexels-photo-30833932.jpeg",
            "large2x": "https://images.pexels.com/photos/30833932/pexels-photo-30833932.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30833932/pexels-photo-30833932.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30833932/pexels-photo-30833932.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30833932/pexels-photo-30833932.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30833932/pexels-photo-30833932.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30833932/pexels-photo-30833932.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30833932/pexels-photo-30833932.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "A serene forest path bathed in soft autumn light, perfect for nature enthusiasts."
    }, {
        "id": 30837749,
        "width": 4040,
        "height": 6060,
        "url": "https://www.pexels.com/photo/breakfast-croissant-sandwich-at-cafe-in-istanbul-30837749/",
        "photographer": "Esra Afşar",
        "photographer_url": "https://www.pexels.com/@esra-afsar-123882149",
        "photographer_id": 123882149,
        "avg_color": "#574A39",
        "src": {
            "original": "https://images.pexels.com/photos/30837749/pexels-photo-30837749.jpeg",
            "large2x": "https://images.pexels.com/photos/30837749/pexels-photo-30837749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30837749/pexels-photo-30837749.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30837749/pexels-photo-30837749.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30837749/pexels-photo-30837749.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30837749/pexels-photo-30837749.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30837749/pexels-photo-30837749.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30837749/pexels-photo-30837749.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Morning light on a croissant sandwich and coffee at a cozy café in Istanbul."
    }, {
        "id": 30833852,
        "width": 6240,
        "height": 4160,
        "url": "https://www.pexels.com/photo/emotional-embrace-in-snowy-winter-waterfront-scene-30833852/",
        "photographer": "Soner Arkan",
        "photographer_url": "https://www.pexels.com/@soner-arkan-277045183",
        "photographer_id": 277045183,
        "avg_color": "#9B9B9B",
        "src": {
            "original": "https://images.pexels.com/photos/30833852/pexels-photo-30833852.jpeg",
            "large2x": "https://images.pexels.com/photos/30833852/pexels-photo-30833852.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30833852/pexels-photo-30833852.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30833852/pexels-photo-30833852.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30833852/pexels-photo-30833852.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30833852/pexels-photo-30833852.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30833852/pexels-photo-30833852.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30833852/pexels-photo-30833852.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "A moving black and white photo of a heartfelt embrace during a snowfall at the waterfront."
    }, {
        "id": 30832765,
        "width": 2401,
        "height": 3594,
        "url": "https://www.pexels.com/photo/moody-seattle-cityscape-with-fog-and-traffic-30832765/",
        "photographer": "Josh Hild",
        "photographer_url": "https://www.pexels.com/@josh-hild-1270765",
        "photographer_id": 1270765,
        "avg_color": "#404E59",
        "src": {
            "original": "https://images.pexels.com/photos/30832765/pexels-photo-30832765.jpeg",
            "large2x": "https://images.pexels.com/photos/30832765/pexels-photo-30832765.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30832765/pexels-photo-30832765.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30832765/pexels-photo-30832765.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30832765/pexels-photo-30832765.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30832765/pexels-photo-30832765.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30832765/pexels-photo-30832765.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30832765/pexels-photo-30832765.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "A foggy evening view of Seattle's skyscrapers with blurred car lights on the highway."
    }, {
        "id": 30832946,
        "width": 4000,
        "height": 6000,
        "url": "https://www.pexels.com/photo/cozy-tea-setting-with-lemons-and-yellow-flowers-30832946/",
        "photographer": "Nati",
        "photographer_url": "https://www.pexels.com/@nati-87264186",
        "photographer_id": 87264186,
        "avg_color": "#7C7058",
        "src": {
            "original": "https://images.pexels.com/photos/30832946/pexels-photo-30832946.jpeg",
            "large2x": "https://images.pexels.com/photos/30832946/pexels-photo-30832946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30832946/pexels-photo-30832946.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30832946/pexels-photo-30832946.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30832946/pexels-photo-30832946.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30832946/pexels-photo-30832946.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30832946/pexels-photo-30832946.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30832946/pexels-photo-30832946.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Elegant tea setting with lemons and mimosa flowers on a table for a warm and inviting atmosphere."
    }, {
        "id": 30826875,
        "width": 4672,
        "height": 7008,
        "url": "https://www.pexels.com/photo/woman-in-sile-by-the-sea-on-a-sunny-day-30826875/",
        "photographer": "zeynep şahin",
        "photographer_url": "https://www.pexels.com/@zeynep-sahin-2148331322",
        "photographer_id": 2148331322,
        "avg_color": "#688CA6",
        "src": {
            "original": "https://images.pexels.com/photos/30826875/pexels-photo-30826875.jpeg",
            "large2x": "https://images.pexels.com/photos/30826875/pexels-photo-30826875.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30826875/pexels-photo-30826875.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30826875/pexels-photo-30826875.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30826875/pexels-photo-30826875.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30826875/pexels-photo-30826875.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30826875/pexels-photo-30826875.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30826875/pexels-photo-30826875.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Smiling woman in a lavender coat by the clear blue sea in Şile, Istanbul."
    }, {
        "id": 30824250,
        "width": 5184,
        "height": 3456,
        "url": "https://www.pexels.com/photo/playful-seals-on-rocky-san-diego-shore-30824250/",
        "photographer": "Hyunbin  Lee",
        "photographer_url": "https://www.pexels.com/@moonpiczar",
        "photographer_id": 366604,
        "avg_color": "#999999",
        "src": {
            "original": "https://images.pexels.com/photos/30824250/pexels-photo-30824250.jpeg",
            "large2x": "https://images.pexels.com/photos/30824250/pexels-photo-30824250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30824250/pexels-photo-30824250.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30824250/pexels-photo-30824250.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30824250/pexels-photo-30824250.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30824250/pexels-photo-30824250.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30824250/pexels-photo-30824250.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30824250/pexels-photo-30824250.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Two seals playing on the rocky shoreline of San Diego, California, captured in black and white."
    }, {
        "id": 30822622,
        "width": 4000,
        "height": 6000,
        "url": "https://www.pexels.com/photo/elegant-woman-posing-in-black-and-white-shadowed-room-30822622/",
        "photographer": "Amar  Preciado",
        "photographer_url": "https://www.pexels.com/@amar",
        "photographer_id": 2247381,
        "avg_color": "#434343",
        "src": {
            "original": "https://images.pexels.com/photos/30822622/pexels-photo-30822622.jpeg",
            "large2x": "https://images.pexels.com/photos/30822622/pexels-photo-30822622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30822622/pexels-photo-30822622.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30822622/pexels-photo-30822622.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30822622/pexels-photo-30822622.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30822622/pexels-photo-30822622.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30822622/pexels-photo-30822622.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30822622/pexels-photo-30822622.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "A woman in a sunlit room stands by a large window, creating dramatic shadows in black and white."
    }, {
        "id": 30820838,
        "width": 1749,
        "height": 2520,
        "url": "https://www.pexels.com/photo/stunning-astrophotography-of-emission-nebula-in-night-sky-30820838/",
        "photographer": "Scott Lord",
        "photographer_url": "https://www.pexels.com/@scott-lord-564881271",
        "photographer_id": 564881271,
        "avg_color": "#2D2125",
        "src": {
            "original": "https://images.pexels.com/photos/30820838/pexels-photo-30820838.jpeg",
            "large2x": "https://images.pexels.com/photos/30820838/pexels-photo-30820838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30820838/pexels-photo-30820838.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30820838/pexels-photo-30820838.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30820838/pexels-photo-30820838.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30820838/pexels-photo-30820838.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30820838/pexels-photo-30820838.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30820838/pexels-photo-30820838.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "High-resolution capture of a vibrant emission nebula filled with stars in the night sky."
    }, {
        "id": 30820524,
        "width": 3649,
        "height": 5444,
        "url": "https://www.pexels.com/photo/vintage-newspaper-stand-in-lisbon-alleyway-30820524/",
        "photographer": "Efe Ersoy",
        "photographer_url": "https://www.pexels.com/@efe-ersoy-393937500",
        "photographer_id": 393937500,
        "avg_color": "#3F4843",
        "src": {
            "original": "https://images.pexels.com/photos/30820524/pexels-photo-30820524.jpeg",
            "large2x": "https://images.pexels.com/photos/30820524/pexels-photo-30820524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30820524/pexels-photo-30820524.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30820524/pexels-photo-30820524.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30820524/pexels-photo-30820524.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30820524/pexels-photo-30820524.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30820524/pexels-photo-30820524.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30820524/pexels-photo-30820524.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "A nostalgic view of a newspaper stand in a sunlit alley in Lisbon, showcasing vintage print media."
    }, {
        "id": 30819946,
        "width": 3024,
        "height": 4032,
        "url": "https://www.pexels.com/photo/modern-interior-design-with-wooden-accents-30819946/",
        "photographer": "Elaine Bispo",
        "photographer_url": "https://www.pexels.com/@elaine-bispo-2149845330",
        "photographer_id": 2149845330,
        "avg_color": "#8F8373",
        "src": {
            "original": "https://images.pexels.com/photos/30819946/pexels-photo-30819946.jpeg",
            "large2x": "https://images.pexels.com/photos/30819946/pexels-photo-30819946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30819946/pexels-photo-30819946.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30819946/pexels-photo-30819946.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30819946/pexels-photo-30819946.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30819946/pexels-photo-30819946.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30819946/pexels-photo-30819946.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30819946/pexels-photo-30819946.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Minimalist interior featuring wooden slatted walls in Oslo Opera House."
    }, {
        "id": 30819822,
        "width": 4284,
        "height": 5712,
        "url": "https://www.pexels.com/photo/scenic-view-of-symi-island-greece-coastline-30819822/",
        "photographer": "Elaine Bispo",
        "photographer_url": "https://www.pexels.com/@elaine-bispo-2149845330",
        "photographer_id": 2149845330,
        "avg_color": "#6890B4",
        "src": {
            "original": "https://images.pexels.com/photos/30819822/pexels-photo-30819822.jpeg",
            "large2x": "https://images.pexels.com/photos/30819822/pexels-photo-30819822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/30819822/pexels-photo-30819822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/30819822/pexels-photo-30819822.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/30819822/pexels-photo-30819822.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/30819822/pexels-photo-30819822.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/30819822/pexels-photo-30819822.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/30819822/pexels-photo-30819822.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Breathtaking view of white Greek houses and the deep blue Aegean Sea on Symi Island."
    }]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Scroll to top ( if you scrolled down and refreshed page)
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        setLoading(false);
    }, [allPhotos]);

    const loadMorePhotos = () => {
        setLoading(true);
        const photos: Photo[] = [];
        for (let i = 0; i < 15; i++) {
            let ore
            if (i % 2 === 0) {
                ore = "https://images.pexels.com/photos/30780540/pexels-photo-30780540/free-photo-of-misty-urban-skyline-of-bursa-turkiye.jpeg";
            } else {
                ore = "https://images.pexels.com/photos/30056387/pexels-photo-30056387/free-photo-of-dramatic-light-on-marble-sculpture-of-a-face.jpeg"
            }

            photos.push(
                {
                    "id": 12345,
                    "width": 6000,
                    "height": 4000,
                    "url": "https://example.com/photo.jpg",
                    "alt": "A beautiful sunset over the mountains",
                    "avg_color": "#FF5733",
                    "photographer": "John Doe",
                    "photographer_url": "https://example.com/photographer/johndoe",
                    "photographer_id": 987,
                    "liked": true,
                    "src": {
                        "original": ore,
                        "large2x": "https://example.com/photos/12345/large2x.jpg",
                        "large": "https://example.com/photos/12345/large.jpg",
                        "medium": "https://example.com/photos/12345/medium.jpg",
                        "small": "https://example.com/photos/12345/small.jpg",
                        "portrait": "https://example.com/photos/12345/portrait.jpg",
                        "landscape": "https://example.com/photos/12345/landscape.jpg",
                        "tiny": "https://example.com/photos/12345/tiny.jpg"
                    }
                }
            )
        }

        setAllPhotos(photosAll => [...photosAll, ...photos]);
    }

    return (
        <>
            <InfiniteScrollWrapper fetching={loading} refetch={loadMorePhotos}>
                <Gallery photos={allPhotos}/>
            </InfiniteScrollWrapper>
        </>
    );
};

export default HomePage;