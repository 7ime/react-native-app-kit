export const COLORS = {
    white: '#ffffff',

    black: '#000000',
    black_90: '#1F1F1F',
    black_50: '#999999',
    black_30: '#dedede',
    black_20: '#E7EBF0',
    black_10: '#F7F7F7',

    yellow: '#FFFBE6',
    yellow_20: '#FEFBC2',
    yellow_10: '#FFFDF0',

    green: '#4BB34B',
    green_20: '#C9F8DE',
    green_10: '#F2FDF8',

    blue: '#0F56B3',
    blue_20: '#D5E5FB',
    blue_10: '#E2EDFC',

    red: '#F04D42',
    red_20: '#FBDFE1',
    red_10: '#FEF0F0',

    get primary() { return this.blue },
    get secondary() { return this.green },
    get success() { return this.green },
    get error() { return this.red },
    get bg_color() { return this.white },
    get text_color() { return this.black },
    get border_color() { return this.black_30 },
}

export type IColors = typeof COLORS
