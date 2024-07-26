import { Button } from "@/components/ui/button";
import { Rocket, Star, Moon } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 bg-gradient-to-b from-black to-blue-900 text-white">
        <h1 className="text-5xl font-bold mb-4">Explore the Cosmos</h1>
        <p className="text-xl mb-8">Embark on a journey through the wonders of space</p>
        <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
          <Rocket className="mr-2 h-5 w-5" /> Start Your Adventure
        </Button>
      </section>

      {/* Key Facts Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Fascinating Space Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FactCard
              icon={<Star className="h-10 w-10 text-yellow-400" />}
              title="Billions of Galaxies"
              description="The observable universe contains more than 100 billion galaxies."
            />
            <FactCard
              icon={<Moon className="h-10 w-10 text-gray-400" />}
              title="Moon's Influence"
              description="The Moon is moving away from Earth at a rate of 1.5 inches per year."
            />
            <FactCard
              icon={<Rocket className="h-10 w-10 text-purple-500" />}
              title="Jupiter's Vastness"
              description="About 1,321 Earths could fit inside Jupiter, the largest planet in our solar system."
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Further?</h2>
          <p className="text-xl mb-8">Join our community of space enthusiasts and stay updated on the latest discoveries.</p>
          <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-900">
            Sign Up for Updates
          </Button>
        </div>
      </section>
    </div>
  );
};

const FactCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
    {icon}
    <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Index;
