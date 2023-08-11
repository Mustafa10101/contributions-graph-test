# `Contributions-graph-test`

Динамический и интерактивный contributions graph, который загружает данные и отображает всплывающие подсказки при наведении.

## `Обзор`

Этот проект предоставляет визуальное представление контрибуций за определенное время, аналогичное contributions graph, которые можно увидеть на платформах вроде GitHub. Использует современный `JavaScript` для загрузки данных из внешнего источника и рендеринга графика, а также `CSS` для стилизации.

## `Особенности`

- **Динамическая Загрузка Данных:** Загружает данные о контрибуциях из "https://dpg.gg/test/calendar.json".
- **Всплывающие Подсказки:** При наведении на ячейку отображается всплывающая подсказка с количеством контрибуций и датой.
- **Адаптивный Дизайн:** Приспосабливается к различным размерам экрана и ориентациям.
- **Стилизация:** Использует шрифт Inter из Google Fonts и предоставляет разные оттенки синего для отображения уровней вклада.

## Установка

1. **HTML Структура:** HTML файл структурирует содержимое и включает необходимые ссылки на CSS и JS файлы.
2. **Стили CSS:** Находится в `css/style.css`, этот файл предоставляет все стили для графика.
3. **Функциональность JavaScript:** Логика разделена на несколько JS файлов в директории `js/`:
   - `constants.js` - Определяет постоянные значения.
   - `data.js` - Обрабатывает загрузку и обработку данных.
   - `labels.js` - Генерирует дни и метки месяцев.
   - `cells.js` - Создает и стилизует отдельные ячейки графика.
   - `tooltips.js` - Управляет созданием, позиционированием и удалением всплывающих подсказок.
   - `main.js` - Основная точка входа, которая координирует другие модули.

## Шрифт

- Шрифт Inter из Google Fonts.

## `Демонстрация`

![Снимок экрана 2023-08-11 175132](https://github.com/Mustafa10101/contributions-graph-test/assets/121601835/85d4c983-66ba-4da4-bbeb-d797037d12fc)


