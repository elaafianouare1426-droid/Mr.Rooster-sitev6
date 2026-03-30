"use client"

import { ShoppingCart, Egg, Thermometer, Bird, Truck, HeadphonesIcon, Percent, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/i18n/language-context"

export function ProcessSection() {
  const { dictionary, isRtl } = useLanguage()

  const processSteps = [
    {
      icon: ShoppingCart,
      title: dictionary.process.steps.customerOrder.title,
      description: dictionary.process.steps.customerOrder.description,
      step: 1,
    },
    {
      icon: Egg,
      title: dictionary.process.steps.eggPreparation.title,
      description: dictionary.process.steps.eggPreparation.description,
      step: 2,
    },
    {
      icon: Thermometer,
      title: dictionary.process.steps.incubation.title,
      description: dictionary.process.steps.incubation.description,
      step: 3,
    },
    {
      icon: Bird,
      title: dictionary.process.steps.hatching.title,
      description: dictionary.process.steps.hatching.description,
      step: 4,
    },
    {
      icon: Truck,
      title: dictionary.process.steps.delivery.title,
      description: dictionary.process.steps.delivery.description,
      step: 5,
    },
    {
      icon: HeadphonesIcon,
      title: dictionary.process.steps.customerFollowUp.title,
      description: dictionary.process.steps.customerFollowUp.description,
      step: 6,
    },
  ]

  return (
    <section id="process" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className={`text-center mb-16 ${isRtl ? 'direction-rtl' : ''}`}>
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">{dictionary.process.subtitle}</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 text-foreground text-balance tracking-tight">
            {dictionary.process.title}{" "}
            <span className="text-gradient">{dictionary.process.titleHighlight}</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {dictionary.process.description}
          </p>
        </div>

        {/* Discount Badge */}
        <div className="flex justify-center mb-16">
          <div className={`inline-flex items-center gap-4 gradient-button rounded-full px-8 py-4 shadow-glow ${isRtl ? 'flex-row-reverse' : ''}`}>
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Percent className="h-5 w-5 text-white" />
            </div>
            <span className="text-white font-bold text-lg tracking-wide">{dictionary.process.discount}</span>
            <CheckCircle className="h-6 w-6 text-white" />
          </div>
        </div>

        {/* Timeline Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <Card 
              key={step.step}
              className="card-premium bg-card border-0 shadow-premium relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Step Number */}
              <div className={`absolute top-6 ${isRtl ? 'left-6' : 'right-6'}`}>
                <div className="w-12 h-12 rounded-2xl gradient-button flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.step}
                </div>
              </div>

              <CardContent className="p-8">
                <div className={`space-y-5 ${isRtl ? 'text-right' : ''}`}>
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center ${isRtl ? 'ml-auto' : ''}`}>
                    <step.icon className="h-8 w-8 text-accent" />
                  </div>

                  {/* Content */}
                  <div className={`space-y-3 ${isRtl ? 'pl-12' : 'pr-12'}`}>
                    <h3 className="font-semibold text-foreground text-xl">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
