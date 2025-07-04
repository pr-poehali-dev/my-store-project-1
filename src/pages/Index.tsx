import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Развивающие игрушки",
      price: "2 990 ₽",
      originalPrice: "3 990 ₽",
      image: "/img/bdf7b82f-698c-4a15-a70b-9c8fdf595f84.jpg",
      category: "Игрушки",
      rating: 4.8,
      reviews: 124,
    },
    {
      id: 2,
      name: "Детская коляска Premium",
      price: "24 990 ₽",
      originalPrice: "29 990 ₽",
      image: "/img/68f21c5b-150e-4816-b33d-1c940e94cfaf.jpg",
      category: "Коляски",
      rating: 4.9,
      reviews: 87,
    },
    {
      id: 3,
      name: "Детская одежда",
      price: "1 590 ₽",
      originalPrice: "2 390 ₽",
      image: "/img/6b5f5e29-d0e0-41ad-b35a-42c8906dfc78.jpg",
      category: "Одежда",
      rating: 4.7,
      reviews: 203,
    },
  ];

  const categories = [
    { name: "Игрушки", icon: "Blocks", count: 245 },
    { name: "Одежда", icon: "Shirt", count: 189 },
    { name: "Коляски", icon: "Baby", count: 67 },
    { name: "Питание", icon: "Utensils", count: 156 },
    { name: "Безопасность", icon: "Shield", count: 78 },
    { name: "Мебель", icon: "Armchair", count: 134 },
  ];

  return (
    <div className="min-h-screen bg-business-light">
      {/* Header */}
      <header className="bg-business-white border-b border-business-medium/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-business-dark">
                ДетскийМир
              </h1>
              <Badge
                variant="secondary"
                className="bg-business-medium/10 text-business-dark"
              >
                Профессиональный
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Поиск товаров..."
                  className="w-64 pl-10 border-business-medium/30"
                />
                <Icon
                  name="Search"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-business-medium"
                  size={16}
                />
              </div>
              <Button
                variant="outline"
                className="border-business-medium/30 text-business-dark"
              >
                <Icon name="User" size={16} />
              </Button>
              <Button
                variant="outline"
                className="border-business-medium/30 text-business-dark"
              >
                <Icon name="ShoppingCart" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-business-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-business-dark mb-4">
            Качественные детские товары
          </h2>
          <p className="text-xl text-business-medium mb-8 max-w-2xl mx-auto">
            Профессиональный подход к выбору товаров для вашего ребенка. Только
            проверенные бренды и безопасные материалы.
          </p>
          <Button
            size="lg"
            className="bg-business-dark hover:bg-business-medium text-white"
          >
            Перейти к каталогу
            <Icon name="ArrowRight" size={16} />
          </Button>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-business-dark mb-8 text-center">
            Категории товаров
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Card
                key={category.name}
                className="hover:shadow-lg transition-shadow cursor-pointer border-business-medium/20"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-business-dark/5 rounded-full flex items-center justify-center">
                    <Icon
                      name={category.icon}
                      size={24}
                      className="text-business-dark"
                    />
                  </div>
                  <h4 className="font-semibold text-business-dark mb-2">
                    {category.name}
                  </h4>
                  <p className="text-sm text-business-medium">
                    {category.count} товаров
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-business-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-3xl font-bold text-business-dark">
              Рекомендуемые товары
            </h3>
            <Button
              variant="outline"
              className="border-business-medium/30 text-business-dark"
            >
              Показать все
              <Icon name="ArrowRight" size={16} />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="hover:shadow-lg transition-shadow border-business-medium/20"
              >
                <div className="aspect-square bg-business-light/50 rounded-t-lg overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="secondary"
                      className="bg-business-medium/10 text-business-dark"
                    >
                      {product.category}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Icon
                        name="Star"
                        size={16}
                        className="text-yellow-500 fill-current"
                      />
                      <span className="text-sm font-medium text-business-medium">
                        {product.rating}
                      </span>
                      <span className="text-sm text-business-medium">
                        ({product.reviews})
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-business-dark">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-business-dark">
                        {product.price}
                      </span>
                      <span className="text-sm text-business-medium line-through">
                        {product.originalPrice}
                      </span>
                    </div>
                    <Button
                      size="sm"
                      className="bg-business-dark hover:bg-business-medium text-white"
                    >
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-business-dark mb-8 text-center">
            Наши преимущества
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-business-dark rounded-full flex items-center justify-center">
                <Icon name="Shield" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-business-dark mb-2">
                Безопасность
              </h4>
              <p className="text-business-medium">
                Все товары сертифицированы и безопасны для детей
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-business-dark rounded-full flex items-center justify-center">
                <Icon name="Truck" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-business-dark mb-2">
                Доставка
              </h4>
              <p className="text-business-medium">
                Быстрая доставка по всей стране
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-business-dark rounded-full flex items-center justify-center">
                <Icon name="Award" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-business-dark mb-2">
                Качество
              </h4>
              <p className="text-business-medium">
                Только проверенные бренды и производители
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-business-dark rounded-full flex items-center justify-center">
                <Icon name="Phone" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-business-dark mb-2">
                Поддержка
              </h4>
              <p className="text-business-medium">
                Консультации по выбору товаров
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-business-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">ДетскийМир</h4>
              <p className="text-business-light">
                Профессиональный магазин детских товаров с доставкой по всей
                стране.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Каталог</h5>
              <ul className="space-y-2 text-business-light">
                <li>
                  <a href="#" className="hover:text-white">
                    Игрушки
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Одежда
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Коляски
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Питание
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Информация</h5>
              <ul className="space-y-2 text-business-light">
                <li>
                  <a href="#" className="hover:text-white">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Доставка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Оплата
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Возврат
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <ul className="space-y-2 text-business-light">
                <li className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@detskiymir.ru</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Примерная, 123</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-business-medium/30 mt-8 pt-8 text-center text-business-light">
            <p>&copy; 2024 ДетскийМир. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
