import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// This would typically come from a database
const services = [
  { id: 1, name: "Web Development", description: "Custom web application development", price: 5000 },
  { id: 2, name: "Mobile App Development", description: "iOS and Android app development", price: 8000 },
  { id: 3, name: "UI/UX Design", description: "User interface and experience design", price: 3000 },
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Software Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card key={service.id}>
            <CardHeader>
              <CardTitle>{service.name}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">${service.price}</p>
            </CardContent>
            <CardFooter>
              <Link href={`/service/${service.id}`} passHref>
                <Button>View Details</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}