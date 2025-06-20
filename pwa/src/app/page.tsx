import { HeroHeader } from '@/components/hero-header'
import SectionContact from '@/components/home/SectionContact'
import SectionIntegrations from '@/components/home/SectionIntegrations'
import SectionSoftware from '@/components/home/SectionSofware'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { Separator } from '@/components/ui/separator'
import { TextEffect } from '@/components/ui/text-effect'
import { ArrowRight, Cpu, Frame, MessagesSquare, NotepadText } from 'lucide-react'
import * as motion from "motion/react-client"
import Image from 'next/image'
import Link from 'next/link'


const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

const motionProps = {
  initial: { opacity: 0, y: 100, filter: 'blur(30px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { ease: "easeOut", duration: 0.5 },
  viewport: { margin: "1000px 0px -200px 0px", once: false },
}

const motionImageProps = {
  initial: { opacity: 0.7, scale: 0.4 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { ease: "easeOut", duration: 0.5 },
  viewport: { margin: "1000px 0px -100px 0px", once: false },
}
export default function HeroSection() {

  return (
    <>
      <HeroHeader />

      <main>
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
          <div className="relative pt-24 md:pt-36">

            <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup variants={transitionVariants}>
                  <Link
                    href="#software"
                    className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                    <span className="text-foreground text-sm">Découvrez notre logiciel métier</span>
                    <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                    <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                      <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimatedGroup>

                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  per="word"
                  className="text-primary font-bold mt-8 text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem]">
                  Coordination des soins à domicile
                </TextEffect>
                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-12 flex items-center justify-around bg-background relative overflow-hidden rounded-3xl border p-2 max-w-2xl mx-auto text-secondary font-bold uppercase">

                  <div>Humaine</div>
                  <Separator orientation="vertical" className='mr-2 !h5' />
                  <div>Intelligente</div>
                  <Separator orientation="vertical" />
                  <div>Engagée</div>

                </AnimatedGroup>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-8 max-w-2xl text-balance text-lg">
                  Chez CoHealth, nous transformons les soins à domicile grâce à une coordination fluide entre patients, professionnels de santé et établissements. Notre objectif : un accompagnement respectueux, personnalisé et connecté.
                </TextEffect>

              </div>

              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.75,
                      },
                    },
                  },
                  ...transitionVariants,
                }}>
                <SectionIntegrations />

              </AnimatedGroup>
            </div>
          </div>
        </section>

        <section id="patients" className="py-16 md:py-32">
          <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
            <motion.div {...motionProps}>
              <h2 className="relative z-10 max-w-xl text-xl font-bold my-3 text-primary flex items-center">
                Patients et familles
              </h2>
              <h3 className="relative z-10 max-w-3xl text-4xl font-medium lg:text-5xl">Vivre chez soi, bien entouré
              </h3>
            </motion.div>
            <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
              <motion.div {...motionProps}>
                <div className="relative space-y-4">
                  <p className="text-muted-foreground">
                    Nous organisons les soins à domicile de manière humaine, souple et sécurisée.
                  </p>
                  <div className="relative space-y-4">
                    <p className="font-bold mb-1">
                      Nos services :
                    </p>
                    <ul>
                      <li>
                        Soins après hospitalisation
                      </li>
                      <li>
                        Suivi de maladies chroniques
                      </li>
                      <li>
                        Soins palliatifs à domicile
                      </li>
                      <li>
                        Prévention des réhospitalisations
                      </li>
                      <li>
                        Soutien aux aidants
                      </li>

                    </ul>
                    <p className="font-bold mb-1">
                      En 4 étapes :
                    </p>
                    <ul>
                      <li>
                        Premier contact (par vous ou votre médecin)
                      </li>
                      <li>
                        Évaluation à domicile
                      </li>
                      <li>
                        Mise en place des soins coordonnés
                      </li>
                      <li>
                        Suivi via application & équipe dédiée
                      </li>
                    </ul>
                    <p className="font-bold mb-1">
                      Financement & prise en charge :
                    </p>
                    <p className="text-muted-foreground">
                      Nos prestations sont couvertes par :
                    </p>
                    <ul>
                      <li>
                        Assurance de base (LAMal)
                      </li>
                      <li>
                        Assurances complémentaires
                      </li>
                      <li>
                        Prestations privées sur devis
                      </li>
                      <li>
                        Tarifs conventionnés cantonaux
                      </li>
                    </ul>
                    <p className="text-muted-foreground">Transparence garantie : évaluation claire et devis selon les besoins.</p>

                    <Link
                      href="#contact"
                      className="mt-10 bg-primary hover:bg-background dark:hover:border-t-border hover:border-primary group flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                      <span className="text-foreground">Contactez-nous</span>
                      <Separator orientation="vertical" />
                      <div className="bg-background group-hover:bg-primary size-6 overflow-hidden rounded-full duration-500">
                        <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                          <span className="flex size-6">
                            <ArrowRight className="m-auto size-3" />
                          </span>
                          <span className="flex size-6">
                            <ArrowRight className="m-auto size-3" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.div>



              <div className="relative mt-6 sm:mt-0 perspective-midrange">
                <motion.div {...motionImageProps}>
                  <div className="relative mt-6 sm:mt-0 perspective-midrange">
                    <div className="-rotate-y-15 aspect-67/34 relative rounded-2xl border p-2">
                      <div className="absolute grid grid-cols-3 grid-rows-3 top-0 left-0 z-10 p-6 gap-6 h-full w-full">
                        <div className='rounded-sm row-span-2 bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]'></div>
                        <div className='rounded-sm col-span-2 row-span-2'></div>
                        <div className='rounded-sm bg-[repeating-linear-gradient(-45deg,var(--color-primary),var(--color-primary)_1px,transparent_1px,transparent_8px)]'></div>
                        <div className='col-span-2 rounded-sm bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]'></div>
                      </div>
                      <Image src='/cohealth_patient.webp' className="brightness-120 rounded-sm" alt="professionnels de santé" width={1206} height={612} />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section >
        <section id="medecins" className="py-16 md:py-32">
          <div className="mx-auto max-w-5xl space-y-8 px-6">
            <motion.div {...motionProps}>
              <h2 className="relative z-10 max-w-xl text-xl font-bold my-3 text-primary flex items-center">
                Médecins traitants & spécialistes
              </h2>
              <h3 className="relative z-10 max-w-3xl text-4xl font-medium lg:text-5xl">Faciliter la continuité des soins</h3>
            </motion.div>
            <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
              <div className="relative mt-6 sm:mt-0 perspective-midrange">
                <motion.div {...motionImageProps}>
                  <div className="relative mt-6 sm:mt-0 perspective-midrange">
                    <div className="rotate-y-15 aspect-67/34 relative rounded-2xl border p-2">
                      <div className="absolute grid grid-cols-3 grid-rows-3 top-0 left-0 z-10 p-6 gap-6 h-full w-full">
                        <div className='rounded-sm col-span-2 row-span-2'></div>
                        <div className='rounded-sm row-span-2 bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]'></div>
                        <div className='col-span-2 rounded-sm bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]'></div>
                        <div className='rounded-sm bg-[repeating-linear-gradient(-45deg,var(--color-primary),var(--color-primary)_1px,transparent_1px,transparent_8px)]'></div>
                      </div>
                      <Image src='/cohealth_doctor.webp' className="brightness-120 rounded-sm -scale-x-100" alt="professionnels de santé" width={1206} height={612} />
                    </div>
                  </div>
                </motion.div>
              </div>
              <motion.div {...motionProps}>
                <div className="relative space-y-4">
                  <p className="font-bold mb-1">
                    Nos engagements :
                  </p>
                  <ul>
                    <li>
                      Réponse rapide aux prescriptions
                    </li>
                    <li>
                      Plateforme sécurisée de communication
                    </li>
                    <li>
                      Retours d’information réguliers
                    </li>
                    <li>
                      Équipe locale et disponible
                    </li>

                  </ul>
                  <p className="font-bold mb-1">
                    Indications principales :
                  </p>
                  <ul>
                    <li>
                      Post-hospitalisation
                    </li>
                    <li>
                      Polypathologies
                    </li>
                    <li>
                      Soins palliatifs
                    </li>
                    <li>
                      Dépendance / précarité
                    </li>
                  </ul>

                  <Link
                    href="#contact"
                    className="mt-10 bg-primary hover:bg-background dark:hover:border-t-border hover:border-primary group flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                    <span className="text-foreground">Référer un patient</span>
                    <Separator orientation="vertical" />
                    <div className="bg-background group-hover:bg-primary size-6 overflow-hidden rounded-full duration-500">
                      <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                      </div>
                    </div>
                  </Link>

                </div>
              </motion.div>

            </div>
          </div>
        </section>
        <section id="hopitaux" className="py-16 md:py-32">
          <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
            <motion.div {...motionProps}>
              <h2 className="relative z-10 max-w-xl text-xl font-bold my-3 text-primary flex items-center">
                Hôpitaux & cliniques
              </h2>
              <h3 className="relative z-10 max-w-3xl text-4xl font-medium lg:text-5xl">
                Un partenaire fiable pour les retours à domicile.
              </h3>
            </motion.div>
            <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
              <motion.div {...motionProps}>
                <div className="relative space-y-4">
                  <p className="font-bold mb-1">
                    Ce que nous apportons :
                  </p>
                  <ul>
                    <li>
                      Coordination des soins en 48h
                    </li>
                    <li>
                      Préparation de la sortie avec vos équipes
                    </li>
                    <li>
                      Suivi numérique & accompagnement social
                    </li>
                  </ul>
                  <p className="font-bold mb-1">
                    Programmes spécialisés :
                  </p>
                  <ul>
                    <li>
                      Réhabilitation post-opératoire
                    </li>
                    <li>
                      Oncologie à domicile
                    </li>
                    <li>
                      Soins intensifs et palliatifs
                    </li>
                    <li>
                      Mandats psychiatriques (infirmier spécialisé)
                    </li>
                  </ul>

                  <Link
                    href="#contact"
                    className="mt-10 bg-primary hover:bg-background dark:hover:border-t-border hover:border-primary group flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                    <span className="text-foreground">Collaborer avec CoHealth</span>
                    <Separator orientation="vertical" />
                    <div className="bg-background group-hover:bg-primary size-6 overflow-hidden rounded-full duration-500">
                      <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </motion.div>
              <div className="relative mt-6 sm:mt-0 perspective-midrange">
                <motion.div {...motionImageProps}>
                  <div className="relative mt-6 sm:mt-0 perspective-midrange">
                    <div className="-rotate-y-15 aspect-67/34 relative rounded-2xl border p-2">
                      <div className="absolute grid grid-cols-3 grid-rows-3 top-0 left-0 z-10 p-6 gap-6 h-full w-full">
                        <div className='rounded-sm row-span-2 bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]'></div>
                        <div className='rounded-sm col-span-2 row-span-2'></div>
                        <div className='rounded-sm bg-[repeating-linear-gradient(-45deg,var(--color-primary),var(--color-primary)_1px,transparent_1px,transparent_8px)]'></div>
                        <div className='col-span-2 rounded-sm bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]'></div>
                      </div>
                      <Image src='/cohealth_hospital.webp' className="brightness-120 rounded-sm" alt="professionnels de santé" width={1206} height={612} />
                    </div>
                  </div>
                </motion.div>
              </div>


            </div>
          </div>
        </section>
        <section id="professionnels" className="py-16 md:py-32">
          <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
            <motion.div {...motionProps}>
              <h2 className="relative z-10 max-w-xl text-xl font-bold my-3 text-primary flex items-center">
                Professionnels de santé
              </h2>
              <h3 className="relative z-10 max-w-3xl text-4xl font-medium lg:text-5xl">Rejoignez un réseau efficace, éthique et humain
              </h3>
            </motion.div>
            <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
              <motion.div {...motionImageProps}>
                <div className="relative mt-6 sm:mt-0 perspective-midrange">
                  <div className="rotate-y-15 aspect-67/34 relative rounded-2xl border p-2">
                    <div className="absolute grid grid-cols-3 grid-rows-3 top-0 left-0 z-10 p-6 gap-6 h-full w-full">
                      <div className='rounded-sm col-span-2 row-span-2'></div>
                      <div className='rounded-sm bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]'></div>
                      <div className='rounded-sm'></div>
                      <div className='col-span-2 rounded-sm bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]'></div>
                      <div className='rounded-sm bg-[repeating-linear-gradient(-45deg,var(--color-primary),var(--color-primary)_1px,transparent_1px,transparent_8px)]'></div>
                    </div>
                    <Image src='/cohealth_nurse.webp' className="-scale-x-100 brightness-120 rounded-sm" alt="professionnels de santé" width={1206} height={612} />
                  </div>
                </div>
              </motion.div>
              <motion.div {...motionProps}>
                <div className="relative space-y-4">
                  <p className="font-bold mb-1">
                    Vos avantages :
                  </p>
                  <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Frame className="size-4" />
                        <h3 className="text-sm font-medium">Cadre</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">Cadre clair, centré patient.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Cpu className="size-4" />
                        <h3 className="text-sm font-medium">Outil numérique</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">Un logiciel métier étudié pour vous</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <MessagesSquare className="size-4" />
                        <h3 className="text-sm font-medium">Échanges simplifiés</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">Communication fluide avec nos coordinateurs</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <NotepadText className="size-4" />
                        <h3 className="text-sm font-medium">Quotidien</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">Conditions de travail respectueuses.</p>
                    </div>
                  </div>

                  <Link
                    href="#contact"
                    className="mt-10 bg-primary hover:bg-background dark:hover:border-t-border hover:border-primary group flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                    <span className="text-foreground">Rejoindre le réseau</span>
                    <Separator orientation="vertical" />
                    <div className="bg-background group-hover:bg-primary size-6 overflow-hidden rounded-full duration-500">
                      <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                      </div>
                    </div>
                  </Link>

                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <SectionSoftware id='software' />
        <SectionContact id='contact' />

        <div className="bg-muted mt-10 mb-5 flex items-center justify-between rounded-md p-4 px-6 py-3 container mx-auto">
          <span className="text-title">&copy; CoHealth 2025</span>
          <Link href="#" className="text-muted-foreground hover:text-primary text-sm">
            Mentions légales
          </Link>
        </div>

      </main >
    </>
  )
}
