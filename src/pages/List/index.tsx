import React, { useEffect, useMemo, useState, useLayoutEffect, useContext } from 'react';
import ContentHeader from '../../components/ContentHeader';

import { Filters } from './style';
import ListCardsInputOutput from '../../components/listCardsInputOutput';
import Modal from '../../components/Modal';

import { DataContext } from '../../providers/DataContext';

import { formatTitle, filterType, formatDate } from '../../utils/functionsAuxiliares';
import masterArray from '../../repositories/master';

export interface IArrayData {
    id: number,
    description: string;
    date: string | Date;
    frequency: boolean;
    amount: number | string;
    type: string
}

interface IListProps {
    match: {
        params: {
            type: string //chave de acesso da rota /list/:type
        }
    }
}

const List: React.FC<IListProps> = (match) => {
    const themes = useContext(DataContext);
    /* Hook de filtro */
    const [stateFilter, setStateFilter] = useState({
        recorrentes: false,
        eventuais: false,
        all: true
    });

    /* Hook dos arrays que serão modificados pelo BD */
    const [arrayData, setArrayData] = useState<Array<IArrayData>>([]);

    const [valueSelectMonth, setValueSelectMonth] = useState<string>(String(themes.dateCurrent.getMonth() + 1));
    const [valueSelectYear, setValueSelectYear] = useState<string>(String(themes.dateCurrent.getFullYear()));

    const [modal, setModal] = useState(false);

    const [itemEdit, setItemEdit] = useState<IArrayData>({
        id: 99999,
        description: '',
        date: '',
        frequency: false,
        amount: '',
        type: 'string'
    });

    /* Memo para verificação do tipó de tela que será entregue */
    const changeTitle = match.match.params.type;
    const title: string = useMemo(() => {
        return (formatTitle(changeTitle) === "Entrada") ? "Entrada" : "Saída"
    }, [changeTitle]);

    /* separação dos dados por tipo -> entrada || saída */
    const typeDataArray = useMemo<Array<IArrayData>>(() => {
        return masterArray.filter((e: IArrayData) => {
            if (title.toLocaleLowerCase() === 'saída') {
                return e.type;
            } else {
                return e.type === title.toLowerCase();
            }
        });
    }, [changeTitle]);
    /* populando a tela com filtro por Ano e mês -> ao carregar a tela */
    useLayoutEffect(() => {
        console.log('render useLayoutEffect')
        const array = typeDataArray.filter((el: IArrayData) => {
            const date = formatDate(el.date).split('/');
            const month = String((+valueSelectMonth < 10) ? `0${valueSelectMonth}` : valueSelectMonth);
            if (date[2] === valueSelectYear && date[1] === month) {
                return el;
            }
        });
        setArrayData(array);
    }, []);

    /* populando a tela com filtro por Ano e mês -> ao mudar os campos nos selects ou alterar o match */
    useEffect(() => {
        const array = typeDataArray.filter((el: IArrayData) => {
            const date = formatDate(el.date).split('/');
            const month = String((+valueSelectMonth < 10) ? `0${valueSelectMonth}` : valueSelectMonth);
            if (date[2] === valueSelectYear && date[1] === month) {
                return el;
            }
        });
        setArrayData(array);
    }, [changeTitle, valueSelectMonth, valueSelectYear])

    const changeStateFilter = (buttonFilter: string) => {
        if (buttonFilter === 'recorrentes') {
            if (stateFilter.all && !stateFilter.recorrentes && !stateFilter.eventuais) {
                setStateFilter({
                    recorrentes: false,
                    eventuais: true,
                    all: false
                });
            } else {
                setStateFilter({
                    recorrentes: false,
                    eventuais: false,
                    all: true
                });
            }
        } else if (buttonFilter === 'eventuais') {
            if (stateFilter.all && !stateFilter.recorrentes && !stateFilter.eventuais) {
                setStateFilter({
                    recorrentes: true,
                    eventuais: false,
                    all: false
                })
            } else {
                setStateFilter({
                    recorrentes: false,
                    eventuais: false,
                    all: true
                });
            }
        }

    }

    const valueSelectMonthFunc = (e: any) => {
        setValueSelectMonth(String(e.target.value));
        themes.setDate(Number(e.target.value), Number(valueSelectYear));
    }
    const valueSelecYearFunc = (e: any) => {
        setValueSelectYear(String(e.target.value));
        themes.setDate(Number(valueSelectMonth), Number(e.target.value));

    }

    const ArrayData = (array: any) => {
        let arrayReturn = [];
        if (!stateFilter.eventuais && !stateFilter.recorrentes) {
            arrayReturn = array
        } else if (stateFilter.eventuais || stateFilter.recorrentes) {
            if (stateFilter.eventuais && !stateFilter.recorrentes) {
                arrayReturn = filterType(array, true)
            } else if (!stateFilter.eventuais && stateFilter.recorrentes) {
                arrayReturn = filterType(array, false)
            }
        }

        return arrayReturn;
    }

    const delItem = (id: number) => {
        const item = masterArray.filter((e: IArrayData) => {
            return id === e.id;
        });

        console.log(item);
    }
    const editItem = (idP: number) => {
        changeModal();
        const item = masterArray.filter((e: IArrayData) => {
            return idP === e.id;
        });
        setItemEdit({
            ...editItem,
            id: item[0].id,
            description: item[0].description,
            date: item[0].date,
            frequency: item[0].frequency,
            amount: item[0].amount,
            type: item[0].type
        })
    }
    const changeModal = () => {
        setModal(!modal);
    }
    /* TESTE DE FUNÇÕES */


    /* ----------------------------- */
    return (
        <React.Fragment>
            <ContentHeader title={title} lineColor={(title === 'Entrada') ? '#F7931B' : '#E44C4E'} valueSelectedMonth={valueSelectMonthFunc} valueSelectedYear={valueSelecYearFunc} />
            <Filters>
                <button className="button" onClick={() => changeStateFilter('recorrentes')}>
                    <h4>Recorrentes</h4>
                    <span className="tag-recorrentes"></span>
                </button>
                <button className="button" onClick={() => changeStateFilter('eventuais')}>
                    <h4>Eventuais</h4>
                    <span className="tag-eventuais"></span>
                </button>
            </Filters>
            <ListCardsInputOutput arrayData={ArrayData(arrayData)} delItem={delItem} editItem={editItem} />
            {
                modal ? <Modal changeModal={changeModal} typeModal="Editar" data={itemEdit} /> : null
            }
        </React.Fragment>
    );
}

export default List;