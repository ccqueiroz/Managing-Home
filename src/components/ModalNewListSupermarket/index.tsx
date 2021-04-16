import React, { useMemo, useState } from 'react';
import Table from '../Table';
import { Container, Header, ContentTable } from './style';
interface IArrayListProps {
    id: any;
    product: any;
    und: any;
    amount: any;
}
interface ISelectOption{
    value: number,
    label: string
}
interface IDateForm {
    description: string,
    und: ISelectOption,
    amount: number;
}


const ModalNewListSupermarket: React.FC = () => {
    const [dataForm, setDataForm] = useState<IDateForm>({
        description: '',
        und: {
            value: 9999,
            label: ''
        },
        amount: 0
    });
    const [ nameList, setNameList ] = useState<string>('');
    const [ arrayList, setArrayList ] = useState<Array<IDateForm>>([]);

    const optionsSelect = useMemo(() => {
        return [
            {
                value: 0,
                label: 'Litro'
            },
            {
                value: 1,
                label: 'g'
            },
            {
                value: 2,
                label: 'kg'
            },
            {
                value: 3,
                label: 'und'
            },
        ];
    }, []);
    
    const handleInput = (e: any, key: string) => {
        if(key === 'amount' && Number(e.target.value) < 0){
            setDataForm({
                ...dataForm,
                amount: 0
            })
        }else{
            setDataForm({
                ...dataForm,
                [key]: e.target.value
            });
        }
    }

    const handleTitle = (e: any) => {
        setNameList(e.target.value);
    }
    const handleSelect = (e: any) => {
        console.log(e.target.value)
        const option = optionsSelect.filter(op => {
            return op.value === Number(e.target.value)
        })[0];
        setDataForm({
            ...dataForm,
            und: option
        })

    }

    const addItemList = (e: any) => {
        e.preventDefault();
        setArrayList([
            ...arrayList,
            dataForm
        ]);
    }
    const onSubmit = (e: any) => {
        e.preventDefault();
        const data = {
            title: nameList,
            list: arrayList
        }

        console.log(data)
        //fazer post para o banco 
    }
    return (
        <Container>
            <Header>
                <h2>Lista de Compras</h2>
                <label className="titleList">
                    <h3>Nome da Lista</h3>
                    <input type="text" name="titleList" value={nameList} onChange={handleTitle}/>
                    <button type="button" onClick={e=> onSubmit(e)}>Salvar Lista</button>
                </label>
                <form action="" onSubmit={addItemList}>
                    <div className="headerTable">
                        <span data-span="1">Descrição</span>
                        <input className="inputs" type="text" data-input="1" value={dataForm.description} onChange={e => handleInput(e, 'description')} />
                        <span data-span="2">Unidade</span>
                        <select className="select" onChange={e=> handleSelect(e)}>
                            <option data-option='0' value={9999} selected disabled></option>
                            {optionsSelect.map((item: any, index: number) => {
                                return (
                                    <option key={index} data-option={index + 1} value={item.value}>{item.label}</option>
                                );
                            })}
                        </select>
                        <span data-span="3">Quantidade</span>
                        <input className="inputs" type="number" data-input="2" value={dataForm.amount} onChange={e => handleInput(e, 'amount')} />
                        <button>Adicionar</button>
                    </div>
                </form>
            </Header>
            <ContentTable>
                { arrayList.length > 0 ? 
                <div className="contentTable">
                    <p>Lembre-se de salvar sua lista antes de sair da página</p>
                    {/* usar Table */}
                    <Table/> 
                    {arrayList.map((e:IDateForm, index:number) => {
                        return (
                            <div key={index}>
                                <span>{e.description}</span>
                                <span>-</span> 
                                <span>{e.und.label}</span>
                                <span>-</span> 
                                <span>{e.amount}</span>
                            </div>
    
                        );
                    })}
                </div>
                :
                null
            }
            </ContentTable>
        </Container>
    );
}

export default ModalNewListSupermarket;