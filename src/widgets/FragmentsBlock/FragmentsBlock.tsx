import { Wrap } from "pages/HomePage/ui/HomePage"
import { memo } from "react"
import FragmentCard from "./ui/FragmentCard/FragmentCard"

interface FragmentsBlockProps {
    className?: string
    wrap: Wrap
}

/**
 * Компонент FragmentsBlock
 *
 * Основные функции:
 * * Использует готовые компоненты Title и Text для отображения заголовка и описания
 * * Заголовок и описание зависят от статуса всех фрагментов:
 *   - Если все фрагменты в статусе "seen" → отображается соответствующий текст
 *   - Если есть фрагменты в статусе "locked" → отображается другой текст
 * * Тексты заголовков и описаний указаны в макетах
 * * В элементе с иконкой замка отображается количество: seen/общее количество фрагментов
 * * Отображает список фрагментов в виде адаптивной сетки из двух колонок
 * * Список фильтруется: сначала отображаются фрагменты со статусом "seen", затем "locked"
 * * Для каждого фрагмента используется переиспользуемая карточка FragmentCard
 *
 * FragmentCard:
 * * Принимает проп Fragment с полями: status, rarity, static_rarity, kind
 * * Стилизация зависит от комбинации status и static_rarity
 * * Если rarity существует и не равен 0, отображается в карточке согласно макету
 * * Выбор изображения основан на статусе:
 *   - locked → использует изображения из assets/pixelated
 *   - seen → использует изображения из assets/square
 * * Названия файлов изображений соответствуют fragment.kind
 * * Текст отображается в зависимости от статуса (разный контент для locked/seen)
 * * Каждая карточка содержит блок с галочкой Avatar:
 *   - status: seen → отображается галочка
 *   - status: locked → галочка скрыта
 * * Кнопка в карточке использует компонент Button из shared/ui/Button:
 *   - status: seen → текст "Unlock" с соответствующей иконкой
 *   - status: locked → текст "View Story" с соответствующей иконкой
 * * По клику на кнопку никаких действий не выполняется
 *
 * @param className - дополнительный CSS класс для стилизации
 * @param wrap - объект с данными для отображения
 */

const FragmentsBlock = memo(({ className, wrap }: FragmentsBlockProps) => {
    return (
        <div>
            {/* можно править, это пример */}
            {wrap.fragments.map((fragment) => (
                <FragmentCard key={fragment.id} fragment={fragment} />
            ))}
        </div>
    )
})

export default FragmentsBlock
