"use client"

import { useState } from "react"
import { X, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BreedDetail {
  id: string
  nameAr: string
  nameEn: string
  description: string
  images: string[]
  available: {
    eggs: boolean
    chicks: boolean
  }
  features: {
    label: string
    value: string
    icon: string
  }[]
}

const breedsData: BreedDetail[] = [
  {
    id: "australorp",
    nameAr: "أسترالورب بلاك",
    nameEn: "Australorp Black",
    description: "تتمتع بصفة ممتازة وإنتاجية عالية جداً وهي من أفضل الدجاج البياض والتي لم تتأثر بالأمراض الشائعة في الدواجن. لونها أسود لامع وتتميز برؤوس كبيرة وعرفات حمراء جميلة.",
    images: [
      "/images/breeds/A1.jpg",
      "/images/breeds/a2_optimized.png",
      "/images/breeds/B2.png",
    ],
    available: {
      eggs: true,
      chicks: true,
    },
    features: [
      {
        label: "سرعة النمو",
        value: "ممتاز",
        icon: "🚀",
      },
      {
        label: "الإنتاجية",
        value: "عالية جداً",
        icon: "📊",
      },
      {
        label: "المقاومة",
        value: "قوية",
        icon: "🛡️",
      },
      {
        label: "اللون",
        value: "أسود لامع",
        icon: "⚫",
      },
    ],
  },
  {
    id: "farnsi",
    nameAr: "la marans fauve aque noir - الدجاج الفارنسي",
    nameEn: "Persian Chicken",
    description: "دجاج فارسي أصيل بألوان متنوعة وجميلة جداً. تتميز بحجم كبير وإنتاجية عالية للحم والبيض معاً. مقاومة ممتازة للأمراض والمناخ الحار.",
    images: [
      "/images/breeds/f11.png",
      "/images/breeds/f13c.png",
      "/images/breeds/f14.png",
      "/images/breeds/f12.png",
      "/images/breeds/f1.png",

    ],
    available: {
      eggs: true,
      chicks: true,
    },
    features: [
      {
        label: "الحجم",
        value: "كبير جداً",
        icon: "💪",
      },
      {
        label: "جودة اللحم",
        value: "ممتازة",
        icon: "🍗",
      },
      {
        label: "الألوان",
        value: "متعددة جميلة",
        icon: "🎨",
      },
      {
        label: "الحرارة",
        value: "تحمل عالي",
        icon: "🔥",
      },
    ],
  },
  {
    id: "leghorn",
    nameAr: "لجهورن الذهبي",
    nameEn: "Leghorn Golden",
    description: "سلالة إيطالية الأصل متخصصة في إنتاج البيض. تتميز بجسم متوسط رشيق وريش ذهبي جميل. إنتاجية بيض عالية جداً وتتحمل المناخات المختلفة.",
    images: [
      "/images/breeds/leg1.png",
      "/images/breeds/leghorn_dor2.png",
      "/images/breeds/leg1.png",
    ],
    available: {
      eggs: true,
      chicks: false,
    },
    features: [
      {
        label: "إنتاج البيض",
        value: "عالي جداً",
        icon: "🥚",
      },
      {
        label: "اللون",
        value: "ذهبي جميل",
        icon: "✨",
      },
      {
        label: "الحجم",
        value: "متوسط رشيق",
        icon: "🏃",
      },
      {
        label: "المرونة",
        value: "تتحمل كل المناخ",
        icon: "🌍",
      },
    ],
  },
  {
    id: "isabrown",
    nameAr: "ايزا براون",
    nameEn: "Isa Brown",
    description: "سلالة هجينة حديثة متخصصة في إنتاج البيض البني الممتاز. تتميز بالريش البني المحمر الجميل والإنتاجية العالية جداً. دجاج صحي وقوي جداً.",
    images: [
      "/images/breeds/isa2.png",
      "/images/breeds/isa1.png",
      "/images/breeds/isa3.png",
    ],
    available: {
      eggs: true,
      chicks: true,
    },
    features: [
      {
        label: "إنتاج البيض",
        value: "500+ بيضة سنوياً",
        icon: "🥚",
      },
      {
        label: "البيض",
        value: "بني فاتح جميل",
        icon: "🟤",
      },
      {
        label: "الصحة",
        value: "قوية جداً",
        icon: "💪",
      },
      {
        label: "النضج",
        value: "سريع جداً",
        icon: "⚡",
      },
    ],
  },
]

const PHONE_NUMBER = "+1234567890"
const WHATSAPP_NUMBER = "1234567890"

interface OrderModalProps {
  isOpen: boolean
  breedName: string
  type: "eggs" | "chicks"
  onClose: () => void
}

function OrderModal({ isOpen, breedName, type, onClose }: OrderModalProps) {
  if (!isOpen) return null

  const typeAr = type === "eggs" ? "البيض" : "الكتاكيت"
  const whatsappMessage = `مرحباً، أود الاستعلام عن طلب ${typeAr} من سلالة ${breedName}`

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-2xl max-w-sm w-full p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">طلب {typeAr}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="mb-8">
          <p className="text-foreground/70 mb-4">
            سلالة: <span className="font-semibold text-foreground">{breedName}</span>
          </p>
          <p className="text-foreground/70 mb-6">
            نوع الطلب: <span className="font-semibold text-accent">{typeAr}</span>
          </p>

          <p className="text-sm text-foreground/60 mb-6">
            اختر طريقة التواصل المناسبة للتعرف على الأسعار والكميات المتاحة
          </p>
        </div>

        <div className="space-y-3">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center justify-between bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 p-4 rounded-lg transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <div>
                <p className="font-semibold text-foreground">اتصال مباشر</p>
                <p className="text-sm text-foreground/60">{PHONE_NUMBER}</p>
              </div>
            </div>
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
              ➜
            </span>
          </a>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-green-50 hover:bg-green-100 dark:bg-green-900/20 dark:hover:bg-green-900/30 p-4 rounded-lg transition-colors group"
          >
            <div className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
              <div>
                <p className="font-semibold text-foreground">واتساب</p>
                <p className="text-sm text-foreground/60">رسالة مباشرة</p>
              </div>
            </div>
            <span className="text-sm font-medium text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
              ➜
            </span>
          </a>
        </div>

        <Button
          onClick={onClose}
          variant="outline"
          className="w-full mt-6"
        >
          إغلاق
        </Button>
      </div>
    </div>
  )
}

export function BreedsSection() {
  const [selectedBreed, setSelectedBreed] = useState<BreedDetail | null>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [orderModal, setOrderModal] = useState<{
    isOpen: boolean
    breedName: string
    type: "eggs" | "chicks"
  }>({
    isOpen: false,
    breedName: "",
    type: "eggs",
  })

  return (
    <section id="breeds" className="py-20 px-6 sm:px-8 lg:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
            سلالاتنا
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            ممتازة <span className="text-accent">سلالات دجاج</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            اختر من بين سلالاتنا المختارة بعناية، والتي تم تحسين كل منها لتلبية احتياجات وظروف زراعة محددة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {breedsData.map((breed) => (
            <div
              key={breed.id}
              className="bg-card rounded-2xl overflow-hidden border border-border hover:border-accent hover:shadow-xl transition-all duration-300 group"
            >
              <div
                onClick={() => {
                  setSelectedBreed(breed)
                  setSelectedImageIndex(0)
                }}
                className="cursor-pointer p-6 border-b border-border hover:bg-accent/5 transition-colors"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden flex-shrink-0">
                    <img
                      src={breed.images[0]}
                      alt={breed.nameAr}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-center mb-3 group-hover:text-accent transition-colors line-clamp-2">
                  {breed.nameAr}
                </h3>

                <p className="text-xs text-foreground/70 text-center mb-4 line-clamp-2">
                  {breed.description}
                </p>

                <div className="space-y-2">
                  {breed.features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1">
                        <span className="text-sm">{feature.icon}</span>
                        <span className="text-foreground/70">{feature.label}</span>
                      </div>
                      <span className="font-semibold text-accent text-xs">{feature.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 space-y-3 border-b border-border">
                <p className="text-xs font-semibold text-foreground/70 mb-2">المتاح:</p>
                
                <button
                  onClick={() => {
                    if (breed.available.eggs) {
                      setOrderModal({
                        isOpen: true,
                        breedName: breed.nameAr,
                        type: "eggs",
                      })
                    }
                  }}
                  disabled={!breed.available.eggs}
                  className={`w-full py-2 px-3 rounded-lg flex items-center justify-between transition-all text-sm font-medium ${
                    breed.available.eggs
                      ? "bg-yellow-50 hover:bg-yellow-100 dark:bg-yellow-900/20 dark:hover:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 cursor-pointer"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>🥚</span>
                    <span>البيض</span>
                  </span>
                  {breed.available.eggs ? "متاح" : "غير متاح"}
                </button>

                <button
                  onClick={() => {
                    if (breed.available.chicks) {
                      setOrderModal({
                        isOpen: true,
                        breedName: breed.nameAr,
                        type: "chicks",
                      })
                    }
                  }}
                  disabled={!breed.available.chicks}
                  className={`w-full py-2 px-3 rounded-lg flex items-center justify-between transition-all text-sm font-medium ${
                    breed.available.chicks
                      ? "bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 text-blue-700 dark:text-blue-400 cursor-pointer"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>🐤</span>
                    <span>الكتاكيت</span>
                  </span>
                  {breed.available.chicks ? "متاح" : "غير متاح"}
                </button>
              </div>

              <div className="p-4">
                <Button
                  onClick={() => {
                    setSelectedBreed(breed)
                    setSelectedImageIndex(0)
                  }}
                  className="w-full bg-accent hover:bg-accent/90 text-white text-sm h-8"
                >
                  عرض التفاصيل الكاملة
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <OrderModal
        isOpen={orderModal.isOpen}
        breedName={orderModal.breedName}
        type={orderModal.type}
        onClose={() => setOrderModal({ ...orderModal, isOpen: false })}
      />

      {selectedBreed && (
        <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4 overflow-hidden">
          <div className="bg-card rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col">
            {/* Header - fixed at top */}
            <div className="bg-gradient-to-r from-accent to-accent/80 p-6 flex justify-between items-center flex-shrink-0">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {selectedBreed.nameAr}
                </h2>
                <p className="text-white/90">{selectedBreed.nameEn}</p>
              </div>
              <button
                onClick={() => setSelectedBreed(null)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors flex-shrink-0"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto flex-1">
              <div className="p-8 space-y-8">
                {/* Main Image Section */}
                <div className="space-y-4">
                  <div className="w-full bg-accent/5 rounded-2xl overflow-hidden flex items-center justify-center">
                    <img
                      src={selectedBreed.images[selectedImageIndex]}
                      alt={selectedBreed.nameAr}
                      className="w-full h-auto max-h-96 object-contain"
                      loading="eager"
                    />
                  </div>

                  {/* Image Gallery */}
                  <div className="flex gap-4 overflow-x-auto pb-2">
                    {selectedBreed.images.map((image, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImageIndex(idx)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                          selectedImageIndex === idx
                            ? "border-accent"
                            : "border-transparent hover:border-accent/50"
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${selectedBreed.nameAr} ${idx + 1}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-2xl font-bold mb-4">نبذة عن السلالة</h3>
                  <p className="text-foreground/80 leading-relaxed text-lg">
                    {selectedBreed.description}
                  </p>
                </div>

                {/* Available Products */}
                <div>
                  <h3 className="text-2xl font-bold mb-6">الطلب المتاح</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedBreed.available.eggs && (
                      <button
                        onClick={() => {
                          setOrderModal({
                            isOpen: true,
                            breedName: selectedBreed.nameAr,
                            type: "eggs",
                          })
                        }}
                        className="bg-yellow-50 hover:bg-yellow-100 dark:bg-yellow-900/20 dark:hover:bg-yellow-900/30 p-6 rounded-xl border-2 border-yellow-200 dark:border-yellow-800 transition-all"
                      >
                        <p className="text-3xl mb-2">🥚</p>
                        <h4 className="font-bold mb-2 text-yellow-900 dark:text-yellow-100">البيض</h4>
                        <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-4">بيض طازج وعالي الجودة</p>
                        <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">
                          اطلب الآن
                        </Button>
                      </button>
                    )}
                    {selectedBreed.available.chicks && (
                      <button
                        onClick={() => {
                          setOrderModal({
                            isOpen: true,
                            breedName: selectedBreed.nameAr,
                            type: "chicks",
                          })
                        }}
                        className="bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 transition-all"
                      >
                        <p className="text-3xl mb-2">🐤</p>
                        <h4 className="font-bold mb-2 text-blue-900 dark:text-blue-100">الكتاكيت</h4>
                        <p className="text-sm text-blue-700 dark:text-blue-300 mb-4">كتاكيت صحية وقوية</p>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                          اطلب الآن
                        </Button>
                      </button>
                    )}
                  </div>
                </div>

                {/* Features Grid */}
                <div>
                  <h3 className="text-2xl font-bold mb-6">المميزات والخصائص</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {selectedBreed.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="bg-accent/5 rounded-xl p-4 border border-accent/20"
                      >
                        <div className="text-3xl mb-2">{feature.icon}</div>
                        <h4 className="font-semibold mb-1 text-sm">{feature.label}</h4>
                        <p className="text-accent font-bold text-sm">{feature.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Close Button */}
                <Button
                  onClick={() => setSelectedBreed(null)}
                  className="w-full bg-accent hover:bg-accent/90 text-white py-3 h-auto text-base"
                >
                  إغلاق
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}