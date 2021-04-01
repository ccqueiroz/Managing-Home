export const listDayMonth = (list : any, date: Date) => {
    if((date.getMonth() + 1) === 2){
         list.splice(28, 3);
         if((date.getFullYear()) %4 == 0){
             if((date.getFullYear())%100 !== 0 ){
                 list.push({
                     value: 29,
                     label: 29
                 })
             }
         }else{
         }
    }
    if((date.getMonth() + 1 === 4) || (date.getMonth() + 1 === 6) || (date.getMonth() + 1 === 9) || (date.getMonth() + 1 === 11) ){
         list.splice(30, 1);
    }

    return list

 }

export const formatCoin = (value : number, locale: string, currency: string) => {
    currency = currency.toLocaleUpperCase();

    return value.toLocaleString(locale, {style: 'currency', currency: currency})

}

export const formatNumber = (value: string | number) => {
    let newValue = '';
    if(typeof(value) == 'string'){
        const valueString = parseFloat(value);
        newValue = formatCoin(valueString, 'pt-br', 'brl');

    }else if(typeof(value) === 'number'){
         newValue = formatCoin(value, 'pt-br', 'brl');
    }else{
        newValue = '';
    }

    return newValue;
} 

export const addYear = (date: Date, list: any) => {
    if(date.getFullYear() > list[list.length - 1].value){
        list.push({
            value: list[list.length - 1].value + 1,
            label: list[list.length - 1].label + 1
        })
    }
   
    return list
}

export const formatTitle = (name: any) => {
    let n = name.toString().split('');
    name = n.shift();

    name = n.shift();
    n.unshift(name[0].toUpperCase());

    n = n.join('');
    return n;
}

export const filterType = (array:any, value: number) => {
    let x = array.filter((e: any) => {
        return (e.tagColor === value)
    })
    return x;
}