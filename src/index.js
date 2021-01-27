
let obj = {
    '1': (n) => {
        if (n == -1) return 'eleven';
        if (n == 2) return obj.thousend(1);
        return 'one'
    },
    '2': (n) => {
        if (n == -1) return 'twelve';
        if (n == 1) return 'twenty ';
        if (n == 2) return obj.thousend(2);
        return 'two';
    },
    '3': (n) => {
        if (n == -1) return 'thirteen';
        if (n == 1) return 'thirty ';
        if (n == 2) return obj.thousend(3);
        return 'three';
    },
    '4': (n) => {
        if (n == -1) return 'fourteen';
        if (n == 1) return 'forty ';
        if (n == 2) return obj.thousend(4);
        return 'four';
    },
    '5': (n) => {
        if (n == -1) return 'fifteen';
        if (n == 1) return 'fifty ';
        if (n == 2) return obj.thousend(5);
        return 'five';
    },
    '6': (n) => {
        if (n == -1) return 'sixteen';
        if (n == 1) return 'sixty ';
        if (n == 2) return obj.thousend(6);
        return 'six';
    },
    '7': (n) => {
        if (n == -1) return 'seventeen';
        if (n == 1) return 'seventy ';
        if (n == 2) return obj.thousend(7);
        return 'seven';
    },
    '8': (n) => {
        if (n == -1) return 'eighteen';
        if (n == 1) return 'eighty ';
        if (n == 2) return obj.thousend(8);
        return 'eight';
    },
    '9': (n) => {
        if (n == -1) return 'nineteen';
        if (n == 1) return 'ninety ';
        if (n == 2) return obj.thousend(9);
        return 'nine';
    },
    '0': (n)=> {
	if (n == -1) return 'ten ';
	return ''
    },
    thousend: (n) => obj[n + '']() + ' hundred '
}
module.exports = function toReadable(num) {
    if (!num || isNaN(num)) return 'zero';
    let mas = [...num + ''];
    let ans = '';
    for (let i = 0, j = mas.length - 1; i < mas.length, j >= 0; i++, j--) {
        if(j == 1 && mas[i]==1) 
        {
            ans += obj[mas[i+1]](-1);
            break;
        }
        ans += obj[mas[i]](j);
    }
    return ans.trim();
}
