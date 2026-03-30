"use client"

import { Syringe, Shield, Calendar, ChevronRight, ChevronLeft } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/i18n/language-context"

export function VaccinationSection() {
  const { dictionary, isRtl } = useLanguage()
  const ChevronIcon = isRtl ? ChevronLeft : ChevronRight

  const vaccines = [
    {
      day: "Day 1",
      dayNum: 1,
      vaccine: dictionary.vaccination.vaccines.initialHealthCheck.name,
      purpose: dictionary.vaccination.vaccines.initialHealthCheck.purpose,
      type: dictionary.vaccination.essential,
      typeKey: "Essential",
    },
    {
      day: "Day 5-7",
      dayNum: 6,
      vaccine: dictionary.vaccination.vaccines.gumboro.name,
      purpose: dictionary.vaccination.vaccines.gumboro.purpose,
      type: dictionary.vaccination.essential,
      typeKey: "Essential",
    },
    {
      day: "Day 10-12",
      dayNum: 11,
      vaccine: dictionary.vaccination.vaccines.newcastle.name,
      purpose: dictionary.vaccination.vaccines.newcastle.purpose,
      type: dictionary.vaccination.essential,
      typeKey: "Essential",
    },
    {
      day: "Day 14-16",
      dayNum: 15,
      vaccine: dictionary.vaccination.vaccines.coccidiosis.name,
      purpose: dictionary.vaccination.vaccines.coccidiosis.purpose,
      type: dictionary.vaccination.essential,
      typeKey: "Essential",
    },
    {
      day: "Day 18-21",
      dayNum: 20,
      vaccine: dictionary.vaccination.vaccines.salmonella.name,
      purpose: dictionary.vaccination.vaccines.salmonella.purpose,
      type: dictionary.vaccination.recommended,
      typeKey: "Recommended",
    },
    {
      day: "Day 25-28",
      dayNum: 27,
      vaccine: dictionary.vaccination.vaccines.additionalVaccines.name,
      purpose: dictionary.vaccination.vaccines.additionalVaccines.purpose,
      type: dictionary.vaccination.optional,
      typeKey: "Optional",
    },
    {
      day: "Day 31",
      dayNum: 31,
      vaccine: dictionary.vaccination.vaccines.finalHealthCheck.name,
      purpose: dictionary.vaccination.vaccines.finalHealthCheck.purpose,
      type: dictionary.vaccination.essential,
      typeKey: "Essential",
    },
  ]

  return (
    <section id="vaccination" className="section-padding bg-background gradient-subtle">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className={`text-center mb-20 ${isRtl ? 'direction-rtl' : ''}`}>
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">{dictionary.vaccination.subtitle}</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 text-foreground text-balance tracking-tight">
            {dictionary.vaccination.title}{" "}
            <span className="text-gradient">{dictionary.vaccination.titleHighlight}</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {dictionary.vaccination.description}
          </p>
        </div>

        {/* Timeline Header */}
        <div className="mb-10">
          <Card className="bg-card border-0 shadow-premium-lg overflow-hidden">
            <CardHeader className="gradient-button border-b-0 p-6">
              <CardTitle className={`flex items-center gap-4 text-white text-xl ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                {dictionary.vaccination.timelineTitle}
              </CardTitle>
            </CardHeader>
          </Card>
        </div>

        <div className={`grid lg:grid-cols-4 gap-10 items-start ${isRtl ? 'direction-rtl' : ''}`}>
          {/* Info Card */}
          <Card className="card-premium bg-card border-0 shadow-premium-lg lg:sticky lg:top-28">
            <CardHeader className="pb-4">
              <CardTitle className={`flex items-center gap-4 text-xl ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                {dictionary.vaccination.healthProtocol}
              </CardTitle>
            </CardHeader>
            <CardContent className={`space-y-6 ${isRtl ? 'text-right' : ''}`}>
              <p className="text-muted-foreground leading-relaxed">
                {dictionary.vaccination.protocolDescription}
              </p>
              <div className="space-y-4">
                <div className={`flex items-center gap-4 p-4 bg-accent/5 rounded-2xl border border-accent/20 ${isRtl ? 'flex-row-reverse' : ''}`}>
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Syringe className="h-5 w-5 text-accent" />
                  </div>
                  <span className="font-semibold text-foreground">
                    {dictionary.vaccination.compliance}
                  </span>
                </div>
                <div className="space-y-3 pt-2">
                  <div className={`flex items-center gap-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
                    <Badge className="gradient-button text-white text-xs px-3 py-1 font-semibold">{dictionary.vaccination.essential}</Badge>
                    <span className="text-sm text-muted-foreground">{dictionary.vaccination.requiredVaccines}</span>
                  </div>
                  <div className={`flex items-center gap-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
                    <Badge variant="secondary" className="text-xs px-3 py-1 font-semibold">{dictionary.vaccination.recommended}</Badge>
                    <span className="text-sm text-muted-foreground">{dictionary.vaccination.highlyAdvised}</span>
                  </div>
                  <div className={`flex items-center gap-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
                    <Badge variant="outline" className="text-xs px-3 py-1 font-semibold">{dictionary.vaccination.optional}</Badge>
                    <span className="text-sm text-muted-foreground">{dictionary.vaccination.basedOnNeeds}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Timeline */}
          <div className="lg:col-span-3 space-y-4">
            {vaccines.map((vaccine, index) => (
              <Card 
                key={vaccine.vaccine}
                className="card-hover bg-card border-0 shadow-premium overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6">
                  <div className={`flex flex-col sm:flex-row sm:items-center gap-5 ${isRtl ? 'sm:flex-row-reverse' : ''}`}>
                    {/* Day Badge */}
                    <div className={`flex items-center gap-4 min-w-[140px] ${isRtl ? 'flex-row-reverse' : ''}`}>
                      <div className="w-14 h-14 rounded-2xl gradient-button flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold">{vaccine.day.split(' ')[0]}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-foreground text-lg">{vaccine.day.split(' ')[1] || ''}</span>
                      </div>
                    </div>

                    {/* Arrow */}
                    <ChevronIcon className="hidden sm:block h-5 w-5 text-muted-foreground/50" />

                    {/* Content */}
                    <div className={`flex-1 space-y-2 ${isRtl ? 'text-right' : ''}`}>
                      <div className={`flex flex-wrap items-center gap-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
                        <h3 className="font-semibold text-foreground text-lg">{vaccine.vaccine}</h3>
                        <Badge 
                          className={
                            vaccine.typeKey === "Essential" 
                              ? "gradient-button text-white border-0 font-semibold" 
                              : vaccine.typeKey === "Recommended"
                              ? "bg-secondary text-foreground font-semibold"
                              : "bg-transparent border-border text-muted-foreground font-semibold"
                          }
                        >
                          {vaccine.type}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{vaccine.purpose}</p>
                    </div>

                    {/* Progress indicator */}
                    <div className="hidden md:block w-20">
                      <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full gradient-button rounded-full transition-all duration-700 ${isRtl ? 'float-right' : ''}`}
                          style={{ width: `${(vaccine.dayNum / 31) * 100}%` }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground text-center mt-2 font-medium">
                        {Math.round((vaccine.dayNum / 31) * 100)}%
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
