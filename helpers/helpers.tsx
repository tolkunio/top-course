import {FirstLevelMenuItem} from "@/interfaces/menu.interface";
import CourseIcon from "@/public/icons/course.svg";
import {TopLevelCategory} from "@/interfaces/page.interface";
import ServiceIcon from "@/public/icons/service.svg";
import BookIcon from "@/public/icons/book.svg";
import ProductIcon from "@/public/icons/good.svg";

export const firstLevelMenu: FirstLevelMenuItem[] = [
    {route: 'courses', name: 'Курсы', icon: <CourseIcon/>, id: TopLevelCategory.Courses},
    {route: 'services', name: 'Сервисы', icon: <ServiceIcon/>, id: TopLevelCategory.Services},
    {route: 'books', name: 'Книги', icon: <BookIcon/>, id: TopLevelCategory.Books},
    {route: 'products', name: 'Товары', icon: <ProductIcon/>, id: TopLevelCategory.Products},
]