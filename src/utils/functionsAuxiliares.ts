import React, { useState } from 'react';
import { IArrayData } from '../pages/List/index';

export const listDayMonth = (list : any, date: Date) => {
    if((date.getMonth() + 1) === 2){
         list.splice(28, 3);
         if((date.getFullYear()) %4 === 0){
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

export const formatDate = (date: any ) => {
    const dateFormat = date.toString().split('-');
    let realDate = '';
    if(dateFormat.length === 3){
        if(dateFormat[0].split('').length >= 4){
            let baseYear = new Date();
            let x = baseYear.getFullYear() + 5;
            if(+dateFormat[0] > x){
                realDate = `${dateFormat[2]}/${dateFormat[1]}/${x}`;
            }else{
                realDate = `${dateFormat[2]}/${dateFormat[1]}/${dateFormat[0]}`;
            }
        }else if(dateFormat[0].split('').length === 2){
            realDate = `${dateFormat[0]}/${dateFormat[1]}/${dateFormat[2]}`;
        }
    }else{
        realDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
   
    return realDate;
}

export const formatCoin = (value : number | string, locale: string, currency: string) => {
    currency = currency.toLocaleUpperCase();
    const newValue = (typeof(value) !== 'number') ? 
        Number(value).toLocaleString(locale, { style: 'currency', currency: currency })
        :
        value.toLocaleString(locale, { style: 'currency', currency: currency })
    ;
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

export const filterType = (array: Array<IArrayData>, value: boolean) => {
    let x = array.filter((e: IArrayData) => {
        return (e.frequency === value)
    })
    return x;
}

export const DefineTypeOut = (masterArray: Array<IArrayData>, title: string) => {
        return masterArray.filter((e : IArrayData ) => {
            return e.type === title.toLowerCase();
        });
}

export const populatingArrayByDate = (masterArray: Array<IArrayData>, valueSelectMonth: string, valueSelectYear: string) => {
    const array = masterArray.filter((el : IArrayData) => {
        const date = formatDate(el.date).split('/');
        const month = String((+valueSelectMonth < 10) ? `0${valueSelectMonth}` : valueSelectMonth);
        if(date[2] === valueSelectYear && date[1] === month){
            return el;
       }
    });
   return array;
}

export const selecEmoji = (arrayEmojis:Array<string>, setSaldoEmoji:any, saldoEmoji:any, saldoCurrent: number, setEmoji: any) =>{
    setSaldoEmoji(saldoCurrent)
    if (saldoEmoji <= 0) {
        return setEmoji(arrayEmojis[2]);
    } else if (saldoEmoji > 0 && saldoEmoji <= 50) {
        return setEmoji(arrayEmojis[1]);
    } else if (saldoEmoji > 50 && saldoEmoji <= 100) {
        return setEmoji(arrayEmojis[4]);
    } else if (saldoEmoji > 100 && saldoEmoji <= 500) {
        return setEmoji(arrayEmojis[5]);
    } else if (saldoEmoji > 500 && saldoEmoji <= 1000) {
        return setEmoji(arrayEmojis[0]);
    } else if (saldoEmoji > 1000) {
        return setEmoji(arrayEmojis[3]);
    }
}