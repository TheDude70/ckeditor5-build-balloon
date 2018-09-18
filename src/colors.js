const colors = [
    {
        title: 'Black',
        color: '#000000',
    },
    {
        model: 'AliceBlue',
        title: 'Alice Blue',
        color: '#F0F8FF',
    },
    {
        model: 'AntiqueWhite',
        title: 'Antique White',
        color: '#FAEBD7',
    },
    {
        model: 'AquaMarine',
        title: 'Aqua Marine',
        color: '#7FFFD4',
    },
    {
        model: 'Azure',
        title: 'Azure',
        color: '#F0FFFF',
    },
    {
        model: 'Beige',
        title: 'Beige',
        color: '#F5F5DC',
    },
    {
        model: 'Bisque',
        title: 'Bisque',
        color: '#FFE4C4',
    },
    {
        model: 'BlanchedAlmond',
        title: 'Blanched Almond',
        color: '#FFEBCD',
    },
    {
        model: 'Blue',
        title: 'Blue',
        color: '#0000FF',
    },
    {
        model: 'BlueViolet',
        title: 'Blue Violet',
        color: '#8A2BE2',
    },
    {
        model: 'Brown',
        title: 'Brown',
        color: '#A52A2A',
    },
    {
        model: 'BurlyWood',
        title: 'Burly Wood',
        color: '#DEB887',
    },
    {
        model: 'CadetBlue',
        title: 'Cadet Blue',
        color: '#5F9EA0',
    },
    {
        model: 'Chartreuse',
        title: 'Chartreuse',
        color: '#7FFF00',
    },
    {
        model: 'Chocolate',
        title: 'Chocolate',
        color: '#D2691E',
    },
    {
        model: 'Coral',
        title: 'Coral',
        color: '#FF7F50',
    },
    {
        model: 'CornflowerBlue',
        title: 'Cornflower Blue',
        color: '#6495ED',
    },
    {
        model: 'Cornsilk',
        title: 'Cornsilk',
        color: '#FFF8DC',
    },
    {
        model: 'Crimson',
        title: 'Crimson',
        color: '#DC143C',
    },
    {
        model: 'Cyan',
        title: 'Cyan',
        color: '#00FFFF',
    },
    {
        model: 'DarkBlue',
        title: 'Dark Blue',
        color: '#00008B',
    },
    {
        model: 'DarkCyan',
        title: 'Dark Cyan',
        color: '#008B8B',
    },
    {
        model: 'DarkGoldenRod',
        title: 'Dark Golden Rod',
        color: '#B8860B',
    },
    {
        model: 'DarkGray',
        title: 'Dark Gray',
        color: '#A9A9A9',
    },
    {
        model: 'DarkGreen',
        title: 'Dark Green',
        color: '#006400',
    },
    {
        model: 'DarkKhaki',
        title: 'DarkKhaki',
        color: '#BDB76B',
    },
    {
        model: 'DarkMagenta',
        title: 'Dark Magenta',
        color: '#8B008B',
    },
    {
        model: 'DarkOliveGreen',
        title: 'Dark Olive Green',
        color: '#556B2F',
    },
    {
        model: 'DarkOrange',
        title: 'Dark Orange',
        color: '#FF8C00',
    },
    {
        model: 'DarkOrchid',
        title: 'Dark Orchid',
        color: '#9932CC',
    },
    {
        model: 'DarkRed',
        title: 'Dark Red',
        color: '#8B0000',
    },
    {
        model: 'DarkSalmon',
        title: 'Dark Salmon',
        color: '#E9967A',
    },
    {
        model: 'DarkSeaGreen',
        title: 'Dark Sea Green',
        color: '#8FBC8F',
    },
    {
        model: 'DarkSlateBlue',
        title: 'Dark Slate Blue',
        color: '#483D8B',
    },
    {
        model: 'DarkSlate Gray',
        title: 'Dark Slate Gray',
        color: '#2F4F4F',
    },
    {
        model: 'DarkTurquoise',
        title: 'Dark Turquoise',
        color: '#00CED1',
    },
    {
        model: 'DarkViolet',
        title: 'Dark Violet',
        color: '#9400D3',
    },
    {
        model: 'DeepPink',
        title: 'Deep Pink',
        color: '#FF1493',
    },
    {
        model: 'DeepSkyBlue',
        title: 'Deep Sky Blue',
        color: '#00BFFF',
    },
    {
        model: 'DimGray',
        title: 'Dim Gray',
        color: '#696969',
    },
    {
        model: 'DodgerBlue',
        title: 'Dodger Blue',
        color: '#1E90FF',
    },
    {
        model: 'FireBrick',
        title: 'Fire Brick',
        color: '#B22222',
    },
    {
        model: 'FloralWhite',
        title: 'Floral White',
        color: '#FFFAF0',
    },
    {
        model: 'ForestGreen',
        title: 'Forest Green',
        color: '#228B22',
    },
    {
        model: 'Fuchsia',
        title: 'Fuchsia',
        color: '#FF00FF',
    },
    {
        model: 'Gainsboro',
        title: 'Gainsboro',
        color: '#DCDCDC',
    },
    {
        model: 'GhostWhite',
        title: 'Ghost White',
        color: '#F8F8F8',
    },
    {
        model: 'Gold',
        title: 'Gold',
        color: '#FFD700',
    },
    {
        model: 'GoldenRod',
        title: 'Golden Rod',
        color: '#DAA520',
    },
    {
        model: 'Gray',
        title: 'Gray',
        color: '#808080',
    },
    {
        model: 'Green',
        title: 'Green',
        color: '#008800',
    },
    {
        model: 'GreenYellow',
        title: 'Green Yellow',
        color: '#ADFF2F',
    },
    {
        model: 'HoneyDew',
        title: 'Honey Dew',
        color: '#F0FFF0',
    },
    {
        model: 'HotPink',
        title: 'Hot Pink',
        color: '#FF69B4',
    },
    {
        model: 'IndianRed',
        title: 'Indian Red',
        color: '#CD5C5C',
    },
    {
        model: 'Indigo',
        title: 'Indigo',
        color: '#4B0082',
    },
    {
        model: 'Ivory',
        title: 'Ivory',
        color: '#FFFFF0',
    },
    {
        model: 'Khaki',
        title: 'Khaki',
        color: '#F0E68C',
    },
    {
        model: 'Lavender',
        title: 'Lavender',
        color: '#E6E6FA',
    },
    {
        model: 'LavenderBlush',
        title: 'Lavender Blush',
        color: '#FFF0F5',
    },
    {
        model: 'LawnGreen',
        title: 'Lawn Green',
        color: '#7CFC00',
    },
    {
        model: 'LemonChiffon',
        title: 'Lemon Chiffon',
        color: '#FFFACD',
    },
    {
        model: 'LightBlue',
        title: 'Light Blue',
        color: '#ADD8E6',
    },
    {
        model: 'LightCoral',
        title: 'Light Coral',
        color: '#F08080',
    },
    {
        model: 'LightCyan',
        title: 'Light Cyan',
        color: '#E0FFFF',
    },
    {
        model: 'LightGoldenRodYellow',
        title: 'Light Golden Rod Yellow',
        color: '#FAFAD2',
    },
    {
        model: 'LightGray',
        title: 'Light Gray',
        color: '#D3D3D3',
    },
    {
        model: 'LightGreen',
        title: 'Light Green',
        color: '#90EE90',
    },
    {
        model: 'LightPink',
        title: 'Light Pink',
        color: '#FFB6C1',
    },
    {
        model: 'LightSalmon',
        title: 'Light Salmon',
        color: '#FFA07A',
    },
    {
        model: 'LightSeaGreen',
        title: 'Light Sea Green',
        color: '#20B2AA',
    },
    {
        model: 'LightSkyBlue',
        title: 'Light Sky Blue',
        color: '#87CEFA',
    },
    {
        model: 'LightSlateGray',
        title: 'Light Slate Gray',
        color: '#778899',
    },
    {
        model: 'LightSteelBlue',
        title: 'Light Steel Blue',
        color: '#B0C4DE',
    },
    {
        model: 'LightYellow',
        title: 'Light Yellow',
        color: '#FFFFE0',
    },
    {
        model: 'Lime',
        title: 'Lime',
        color: '#00FF00',
    },
    {
        model: 'LimeGreen',
        title: 'Lime Green',
        color: '#32CD32',
    },
    {
        model: 'Linen',
        title: 'Linen',
        color: '#FAF0E6',
    },
    {
        model: 'Maroon',
        title: 'Maroon',
        color: '#800000',
    },
    {
        model: 'MediumAquaMarine',
        title: 'Medium Aqua Marine',
        color: '#66CDAA',
    },
    {
        model: 'MediumBlue',
        title: 'Medium Blue',
        color: '#0000CD',
    },
    {
        model: 'MediumOrchid',
        title: 'Medium Orchid',
        color: '#BA55D3',
    },
    {
        model: 'MediumPurple',
        title: 'Medium Purple',
        color: '#9370DB',
    },
    {
        model: 'MediumSeaGreen',
        title: 'Medium Sea Green',
        color: '#3CB371',
    },
    {
        model: 'MediumSlateBlue',
        title: 'Medium Slate Blue',
        color: '#7B68EE',
    },
    {
        model: 'MediumSpringGreen',
        title: 'Medium Spring Green',
        color: '#00FA9A',
    },
    {
        model: 'MediumTurquoise',
        title: 'Medium Turquoise',
        color: '#48D1CC',
    },
    {
        model: 'MediumVioletRed',
        title: 'Medium Violet Red',
        color: '#C71585',
    },
    {
        model: 'MidnightBlue',
        title: 'Midnight Blue',
        color: '#191970',
    },
    {
        model: 'MintCream',
        title: 'Mint Cream',
        color: '#F5FFFA',
    },
    {
        model: 'MistyRose',
        title: 'Misty Rose',
        color: '#FFE4E1',
    },
    {
        model: 'Moccasin',
        title: 'Moccasin',
        color: '#FFE4B5',
    },
    {
        model: 'NavajoWhite',
        title: 'Navajo White',
        color: '#FFDEAD',
    },
    {
        model: 'Navy',
        title: 'Navy',
        color: '#000080',
    },
    {
        model: 'OldLace',
        title: 'Old Lace',
        color: '#FDF5E6',
    },
    {
        model: 'Olive',
        title: 'Olive',
        color: '#808000',
    },
    {
        model: 'OliveDrab',
        title: 'Olive Drab',
        color: '#6B8E23',
    },
    {
        model: 'Orange',
        title: 'Orange',
        color: '#FFA500',
    },
    {
        model: 'OrangeRed',
        title: 'Orange Red',
        color: '#FF4500',
    },
    {
        model: 'Orchid',
        title: 'Orchid',
        color: '#DA70D6',
    },
    {
        model: 'PaleGoldenRod',
        title: 'Pale Golden Rod',
        color: '#EEE8AA',
    },
    {
        model: 'PaleGreen',
        title: 'Pale Green',
        color: '#98FB98',
    },
    {
        model: 'PaleTurquoise',
        title: 'Pale Turquoise',
        color: '#AFEEEE',
    },
    {
        model: 'PaleVioletRed',
        title: 'Pale Violet Red',
        color: '#DB7093',
    },
    {
        model: 'PapayaWhip',
        title: 'Papaya Whip',
        color: '#FFEFD5',
    },
    {
        model: 'PeachPuff',
        title: 'Peach Puff',
        color: '#FFDAB9',
    },
    {
        model: 'Peru',
        title: 'Peru',
        color: '#CD853F',
    },
    {
        model: 'Pink',
        title: 'Pink',
        color: '#FFC0CB',
    },
    {
        model: 'Plum',
        title: 'Plum',
        color: '#DDA0DD',
    },
    {
        model: 'PowderBlue',
        title: 'Powder Blue',
        color: '#B0E0E6',
    },
    {
        model: 'Purple',
        title: 'Purple',
        color: '#800080',
    },
    {
        model: 'RebeccaPurple',
        title: 'Rebecca Purple',
        color: '#663399',
    },
    {
        model: 'Red',
        title: 'Red',
        color: '#FF0000',
    },
    {
        model: 'RosyBrown',
        title: 'RosyBrown',
        color: '#BC8F8F',
    },
    {
        model: 'RoyalBlue',
        title: 'Royal Blue',
        color: '#4169E1',
    },
    {
        model: 'SaddleBrown',
        title: 'Saddle Brown',
        color: '#8B4513',
    },
    {
        model: 'Salmon',
        title: 'Salmon',
        color: '#FA8072',
    },
    {
        model: 'SandyBrown',
        title: 'Sandy Brown',
        color: '#F4A460',
    },
    {
        model: 'SeaGreen',
        title: 'Sea Green',
        color: '#2E8B57',
    },
    {
        model: 'SeaShell',
        title: 'Sea Shell',
        color: '#FFF5EE',
    },
    {
        model: 'Sienna',
        title: 'Sienna',
        color: '#A0522D',
    },
    {
        model: 'Silver',
        title: 'Silver',
        color: '#C0C0C0',
    },
    {
        model: 'SkyBlue',
        title: 'Sky Blue',
        color: '#87CEEB',
    },
    {
        model: 'SlateBlue',
        title: 'Slate Blue',
        color: '#6A5ACD',
    },
    {
        model: 'SlateGray',
        title: 'Slate Gray',
        color: '#708090',
    },
    {
        model: 'Snow',
        title: 'Snow',
        color: '#FFFAFA',
    },
    {
        model: 'SpringGreen',
        title: 'Spring Green',
        color: '#00FF7F',
    },
    {
        model: 'SteelBlue',
        title: 'Steel Blue',
        color: '#4682B4',
    },
    {
        model: 'Tan',
        title: 'Tan',
        color: '#D2B48C',
    },
    {
        model: 'Teal',
        title: 'Teal',
        color: '#008080',
    },
    {
        model: 'Thistle',
        title: 'Thistle',
        color: '#D8BFD8',
    },
    {
        model: 'Tomato',
        title: 'Tomato',
        color: '#FF6347',
    },
    {
        model: 'Turquoise',
        title: 'Turquoise',
        color: '#40E0D0',
    },
    {
        model: 'Violet',
        title: 'Violet',
        color: '#EE82EE',
    },
    {
        model: 'Wheat',
        title: 'Wheat',
        color: '#F5DEB3',
    },
    {
        model: 'White',
        title: 'White',
        color: '#FFFFFF',
    },
    {
        model: 'WhiteSmoke',
        title: 'White Smoke',
        color: '#F5F5F5',
    },
    {
        model: 'Yellow',
        title: 'Yellow',
        color: '#FFFF00',
    },
    {
        model: 'YellowGreen',
        title: 'Yellow Green',
        color: '#9ACD32',
    }
];

function getHue(color) {
    /* Get the hex value without hash symbol. */
    let hex = color.substring(1);

    /* Get the RGB values to calculate the Hue. */
    let r = parseInt(hex.substring(0, 2), 16) / 255;
    let g = parseInt(hex.substring(2, 4), 16) / 255;
    let b = parseInt(hex.substring(4, 6), 16) / 255;

    /* Getting the Max and Min values for Chroma. */
    let max = Math.max.apply(Math, [r, g, b]);
    let min = Math.min.apply(Math, [r, g, b]);

    /* Variables for HSV value of hex color. */
    let chr = max - min;
    let hue = 0;
    let val = max;
    let sat = 0;

    if (val > 0) {
        /* Calculate Saturation only if Value isn't 0. */
        sat = chr / val;
        if (sat > 0) {
            if (r == max) {
                hue = 60 * (((g - min) - (b - min)) / chr);
                if (hue < 0) {
                    hue += 360;
                }
            } else if (g == max) {
                hue = 120 + 60 * (((b - min) - (r - min)) / chr);
            } else if (b == max) {
                hue = 240 + 60 * (((r - min) - (g - min)) / chr);
            }
        }
    }

    return hue;
}

export default {
    options: colors
        .sort(function (a, b) {
        let aHue = getHue(a.color);
        let bHue = getHue(b.color);

        return aHue - bHue;
    })
}