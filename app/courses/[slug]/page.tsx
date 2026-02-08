"use client";

import { motion } from "framer-motion";
import { Bot, Code2, Cpu, Globe, ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

interface CourseData {
  slug: string;
  title: string;
  description: string[];
  icon: any;
  color: string;
  modules: {
    number: number;
    title: string;
    description: string;
  }[];
}

const coursesData: CourseData[] = [
  {
    slug: "ai-automation",
    title: "AI ავტომატიზაცია",
    description: [
      "თანამედროვე ბიზნეს გარემოში, AI ავტომატიზაცია აღარ არის მომავლის ტექნოლოგია — ეს არის დღევანდელი აუცილებლობა. ჩვენი კურსი გაძლევთ პრაქტიკულ უნარებს, რომელთა დახმარებითაც შეძლებთ ყოველდღიური ამოცანების ავტომატიზაციას და დროის მნიშვნელოვან დაზოგვას.",
      "გაეცანით უახლესი AI აგენტებისა და ინსტრუმენტების გამოყენებას — ChatGPT, Claude, Gemini და სხვა. ისწავლეთ როგორ შექმნათ ეფექტური Prompt-ები, რომლებიც გამოიღებენ საუკეთესო შედეგებს კომუნიკაციაში, კონტენტის შექმნაში და ბიზნეს პროცესების ავტომატიზაციაში.",
      "კურსი მოიცავს რეალურ პროექტებს და კონკრეტულ use case-ებს, რომლებიც დაგეხმარებათ მყისიერად დანერგოთ მიღებული ცოდნა თქვენს ბიზნესში ან ორგანიზაციაში. ბოლოს კი დაეუფლებით Zapier და Make-ის საფუძვლებს სრული ავტომატიზაციისთვის."
    ],
    icon: Bot,
    color: "from-blue-500 to-cyan-500",
    modules: [
      {
        number: 1,
        title: "AI საფუძვლები",
        description: "LLM-ების გაცნობა (ChatGPT, Claude, Gemini). Prompt Engineering."
      },
      {
        number: 2,
        title: "ბიზნეს კომუნიკაცია",
        description: "ემეილები, რეპორტები, შეხვედრების შეჯამება AI-ით."
      },
      {
        number: 3,
        title: "კონტენტის შექმნა",
        description: "სოციალური მედია, ბლოგები, სურათების გენერაცია."
      },
      {
        number: 4,
        title: "პრაქტიკული ავტომატიზაცია",
        description: "Zapier/Make-ის შესავალი."
      }
    ]
  },
  {
    slug: "web-development",
    title: "Web დეველოპმენტი",
    description: [
      "Web დეველოპმენტი თანამედროვე ბიზნესის ქვაკუთხედია. ამ კურსის დასრულების შემდეგ გაიგებთ როგორ მუშაობს ინტერნეტი და როგორ იქმნება თანამედროვე ვებ აპლიკაციები — Frontend-იდან Backend-მდე.",
      "ისწავლით CMS სისტემების ოსტატად გამოყენებას — WordPress, Shopify, Webflow. ეს პლატფორმები საშუალებას გაძლევთ შექმნათ პროფესიონალური საიტები კოდის ცოდნის გარეშეც. ასევე გაეცნობით როგორ იმუშაოთ დეველოპერებთან ეფექტურად — როგორ ჩამოაყალიბოთ ტექნიკური დავალებები და როგორ მართოთ Agile პროცესები.",
      "კურსი ასევე მოიცავს SEO-ს და ანალიტიკის საფუძვლებს — Google Analytics 4, Search Console და სხვა აუცილებელი ინსტრუმენტები, რომლებიც დაგეხმარებათ თქვენი საიტის ხილვადობის გაზრდაში და მომხმარებელთა ქცევის გაანალიზებაში."
    ],
    icon: Code2,
    color: "from-purple-500 to-pink-500",
    modules: [
      {
        number: 1,
        title: "როგორ მუშაობს ვები",
        description: "Frontend vs Backend, ჰოსტინგი, დომენები."
      },
      {
        number: 2,
        title: "CMS ოსტატობა",
        description: "WordPress, Shopify, Webflow."
      },
      {
        number: 3,
        title: "დეველოპერებთან მუშაობა",
        description: "ტექნიკური დავალებები, Agile."
      },
      {
        number: 4,
        title: "SEO & ანალიტიკა",
        description: "Google Analytics 4, Search Console."
      }
    ]
  },
  {
    slug: "process-automation",
    title: "პროცესების ავტომატიზაცია",
    description: [
      "პროცესების ავტომატიზაცია არის გასაღები ბიზნესის მასშტაბირებისთვის. ამ კურსში ისწავლით როგორ იდენტიფიცირდეს და აღმოიფხვრათ ბოთლნეკები თქვენს სამუშაო პროცესებში, რითაც შეძლებთ 10-ჯერ გაზარდოთ ეფექტურობა.",
      "დაეუფლებით n8n და Make-ის გამოყენებას — ორ ძლიერ no-code/low-code ავტომატიზაციის პლატფორმას. ისწავლით როგორ იმუშაოთ Webhooks-თან, API-ებთან და JSON მონაცემებთან. ეს უნარები საშუალებას მოგცემთ დააკავშიროთ სხვადასხვა სერვისები და შექმნათ რთული ავტომატიზაციის workflow-ები.",
      "კურსის ბოლოს შეისწავლით AI აგენტების აწყობას — როგორ შექმნათ ავტონომიური სისტემები, რომლებიც თავად იღებენ გადაწყვეტილებებს და ასრულებენ ამოცანებს, გააინტეგრირებთ CRM სისტემებთან და Google Sheets-თან მონაცემების მართვისთვის."
    ],
    icon: Cpu,
    color: "from-emerald-500 to-teal-500",
    modules: [
      {
        number: 1,
        title: "პროცესების რუკა",
        description: "ბოთლნეკების იდენტიფიკაცია."
      },
      {
        number: 2,
        title: "n8n & Make",
        description: "Webhooks, API, JSON."
      },
      {
        number: 3,
        title: "მონაცემთა მართვა",
        description: "Google Sheets, CRM ინტეგრაცია."
      },
      {
        number: 4,
        title: "AI აგენტები",
        description: "ავტონომიური აგენტების აწყობა."
      }
    ]
  },
  {
    slug: "digital-transformation",
    title: "ციფრული ტრანსფორმაცია",
    description: [
      "ციფრული ტრანსფორმაცია არ არის მხოლოდ ტექნოლოგიების დანერგვა — ეს არის ორგანიზაციული კულტურის და აზროვნების ფუნდამენტური ცვლილება. ამ კურსში ისწავლით როგორ შეაფასოთ თქვენი ორგანიზაციის ციფრული სიმწიფე და როგორ დაგეგმოთ ტრანსფორმაციის მარშრუტი.",
      "გაეცნობით Cloud და SaaS ეკოსისტემას — როგორ აირჩიოთ სწორი ტექნოლოგიური სტეკი თქვენი ბიზნესისთვის. ისწავლით როგორ გამოიყენოთ Business Intelligence (BI) ინსტრუმენტები და დეშბორდები მონაცემებზე დაფუძნებული გადაწყვეტილებების მისაღებად.",
      "კურსი ასევე მოიცავს კიბერუსაფრთხოების აუცილებელ საფუძვლებს — როგორ დაიცვათ თქვენი ბიზნეს მონაცემები და უზრუნველყოთ სისტემების უსაფრთხოება ციფრული ტრანსფორმაციის პროცესში. ეს კურსი იდეალურია ლიდერებისა და მენეჯერებისთვის, რომლებიც უნდა წარმართონ თავიანთი ორგანიზაციები ციფრულ მომავალში."
    ],
    icon: Globe,
    color: "from-amber-500 to-orange-500",
    modules: [
      {
        number: 1,
        title: "ციფრული სიმწიფის შეფასება",
        description: "სად ხართ ახლა?"
      },
      {
        number: 2,
        title: "Cloud & SaaS ეკოსისტემა",
        description: "სწორი სტეკის არჩევა."
      },
      {
        number: 3,
        title: "მონაცემებზე დაფუძნებული გადაწყვეტილებები",
        description: "BI, დეშბორდები."
      },
      {
        number: 4,
        title: "კიბერუსაფრთხოება",
        description: "ბიზნეს მონაცემების დაცვა."
      }
    ]
  }
];

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = coursesData.find(c => c.slug === params.slug);

  if (!course) {
    notFound();
  }

  const IconComponent = course.icon;

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className={`absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r ${course.color} opacity-10 rounded-full blur-[120px] animate-pulse`}></div>
          <div className={`absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r ${course.color} opacity-10 rounded-full blur-[120px] animate-pulse`} style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/#courses" 
              className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 mb-8 group"
              style={{ transition: 'color 0.3s var(--ease-smooth)' }}
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1" style={{ transition: 'transform 0.3s var(--ease-smooth)' }} />
              უკან კურსებზე
            </Link>

            <div className="flex items-center gap-6 mb-8">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center shadow-lg`}
              >
                <IconComponent className="w-10 h-10 text-white" />
              </motion.div>
              
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-3"
                >
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-cyan-100">პრემიუმ კურსი</span>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-3xl sm:text-5xl md:text-6xl font-bold text-white"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {course.title}
                </motion.h1>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {course.description.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-lg text-slate-300 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          >
            კურსის <span className={`text-transparent bg-clip-text bg-gradient-to-r ${course.color}`}>მოდულები</span>
          </motion.h2>

          <div className="space-y-6">
            {course.modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 group"
                style={{ transition: 'all 0.4s var(--ease-smooth)' }}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/20`}
                       style={{ transition: 'all 0.4s var(--ease-smooth)' }}>
                    <span className="text-white font-bold text-lg">{module.number}</span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300" style={{ transition: 'color 0.3s var(--ease-smooth)' }}>
                      {module.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {module.description}
                    </p>
                  </div>

                  <CheckCircle2 className="flex-shrink-0 w-6 h-6 text-slate-600 group-hover:text-cyan-400" style={{ transition: 'color 0.3s var(--ease-smooth)' }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10 text-center relative overflow-hidden"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-5`}></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                მზად ხართ დასაწყებად?
              </h3>
              <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                დარეგისტრირდით ახლავე და დაიწყეთ თქვენი მოგზაურობა {course.title}-ის სამყაროში
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://t.me/SiTechagencybot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-8 py-4 rounded-full bg-gradient-to-r ${course.color} text-white font-semibold shadow-[0_0_40px_rgba(6,182,212,0.4)] hover:shadow-[0_0_60px_rgba(6,182,212,0.6)] shine-onsus`}
                  style={{ transition: 'all 0.5s var(--ease-elegant)' }}
                >
                  რეგისტრაცია
                </Link>
                
                <Link
                  href="/#pricing"
                  className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-cyan-500/30 backdrop-blur-md"
                  style={{ transition: 'all 0.4s var(--ease-smooth)' }}
                >
                  ფასების ნახვა
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
