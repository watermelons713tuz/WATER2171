import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

const services = [
  {
    title: "обход mi account",
    description: "Обход блокировки Mi Account",
    buttonText: "скачать"
  },
  {
    title: "обход icloud",
    description: "Обход блокировки iCloud",
    buttonText: "скачать"
  },
  {
    title: "суперобои",
    description: "Продвинутые методы обхода",
    buttonText: "скачать"
  }
];

const handleDownloadClick = () => {
  window.open("https://t.me/watermelons90", "_blank");
};

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with watermelons */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://img.freepik.com/premium-photo/watermelons-float-surface-water-concept-watermelon-day_767502-70.jpg"
          alt="Watermelons background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white mb-4 drop-shadow-lg">
            Watermelon112
          </h1>
        </div>

        {/* Services cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          {services.map((service, index) => (
            <Card key={index} className="backdrop-blur-md bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-white text-xl md:text-2xl mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-white/80 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <Button 
                  variant="secondary" 
                  className="bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm px-8 py-2 rounded-full"
                  onClick={handleDownloadClick}
                >
                  {service.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional contact section */}
        <div className="mt-16 text-center">
          <p className="text-white/80 text-lg mb-6">
            Нужна помощь с обходом блокировок?
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full shadow-lg"
              onClick={() => window.open("https://t.me/watermelons90", "_blank")}
            >
              Telegram
            </Button>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-20 text-center">
          <p className="text-white/60 text-sm">
            © 2025 Watermelon112. Все услуги предоставляются исключительно в образовательных целях.
          </p>
        </div>
      </div>
    </div>
  );
}