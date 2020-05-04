При помощи **dispatch** мы отслеживаем все наши изменения в коде  
и отправляем данные в базу данных (action отрисовывают базу данных через reducer),
отправкой же данных из базы данных в компоненты через props занимается **state={props.state}**


##Container components:

Создаем для каждой компоненты отдельный контейнер (файл jsx) для того, чтобы в ней происходили определеные обработки
 приходящих данных из базы данных (store). Обрабатываем наши данные через функции и прокидываем уже собранные воедино 
 функции(которые обрабатывают наши данные) в наши компоненты с отрисовкой HTML тегов.
 
 
## Механизм взаимодействия изменений:
 
**import {createStore} from "redux";**
 
# const initialState = {
 	name: 'Alim',
 	secondName: 'Gazdiev',
 }
# const changeFirsNameActionCreator = {                           // УСЛОВИЯ ПО КОТОРЫМ БУДЕТ ИЗМЕНЯТЬСЯ НАИ ДАННЫЕ ВНУТРИ БАЗЫ ДАННЫХ
 	type: 'CHANGE_NAME',					       
 	payload: 'Alim',
 }
# const changeSecondNameActionCreator = {
 	type: 'CHANGE_SECOND_NAME',
 	payload: 'Gazdiev'
 }
 
# const store = createStore(reducer);		        //	СОЗДАНИЕ БАЗЫ ДАННЫХ, В ПАРАМЕТРЫ КОТОРОГО ВХОДИТ ВНУТРЕННЕЕ ПРЕОБРАЗОВАНИЕ
 																																					
# store.dispatch(changeFirsNameActionCreator)		// ОТПРАВКА ДАННЫХ {ОБЪЕКТА} С УСЛОВИЯМИ ИЗМЕНЕНИЯМИ (type,payload), КОТОРЫЕ БУДУТ ХРАНИТЬСЯ В БАЗЕ ДО ПОСЛЕДУЮЩЕГО ВНУТРЕННЕГО ПРЕОБРАЗОВАНИЯ
# store.dispatch(changeSecondNameActionCreator)		// НУЖЕН ДЛЯ ПЕРЕДАЧИ НАШИХ ИЗМЕНЕННЫХ ДАННЫХ НА СЕРВЕР
 
# function reducer(state=initialState, action) {	// ВНУТРЕННЕЕ ПРЕОБРАЗОВАНИЕ НАШИХ ДАННЫХ ЗА СЧЕТ УСЛОВИЙ(ПАРАМЕТРОВ) КОТОРЫЕ УЖЕ ИМЕЮТСЯ В НАШЕЙ БАЗЕ
 	switch (action.type) {
 		case CHANGE_NAME:
 			return {...state,name:action.payload};
 		case CHANGE_SECOND_NAME:
 			return {...state,secondName:action.payload};
 		default:
 			return state;
 	}
 }
 
