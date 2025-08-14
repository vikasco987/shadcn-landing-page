// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Icon } from "@/components/ui/icon";
// import { icons } from "lucide-react";

// interface FeaturesProps {
//   icon: string;
//   title: string;
//   description: string;
// }

// const featureList: FeaturesProps[] = [
//   {
//     icon: "TabletSmartphone",
//     title: "Mobile Friendly",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam, consectetur.",
//   },
//   {
//     icon: "BadgeCheck",
//     title: "Social Proof",
//     description:
//       "Lorem ipsum dolor sit amet consectetur. Natus consectetur, odio ea accusamus aperiam.",
//   },
//   {
//     icon: "Goal",
//     title: "Targeted Content",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. odio ea accusamus aperiam.",
//   },
//   {
//     icon: "PictureInPicture",
//     title: "Strong Visuals",
//     description:
//       "Lorem elit. A odio velit cum aliquam. Natus consectetur dolores, odio ea accusamus aperiam.",
//   },
//   {
//     icon: "MousePointerClick",
//     title: "Clear CTA",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing. odio ea accusamus consectetur.",
//   },
//   {
//     icon: "Newspaper",
//     title: "Clear Headline",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur.",
//   },
// ];

// export const FeaturesSection = () => {
//   return (
//     <section id="features" className="container py-24 sm:py-32">
//       <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
//         Features
//       </h2>

//       <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
//         What Makes Us Different
//       </h2>

//       <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
//         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
//         fugiat, odit similique quasi sint reiciendis quidem iure veritatis optio
//         facere tenetur.
//       </h3>

//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {featureList.map(({ icon, title, description }) => (
//           <div key={title}>
//             <Card className="h-full bg-background border-0 shadow-none">
//               <CardHeader className="flex justify-center items-center">
//                 <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
//                   <Icon
//                     name={icon as keyof typeof icons}
//                     size={24}
//                     color="hsl(var(--primary))"
//                     className="text-primary"
//                   />
//                 </div>

//                 <CardTitle>{title}</CardTitle>
//               </CardHeader>

//               <CardContent className="text-muted-foreground text-center">
//                 {description}
//               </CardContent>
//             </Card>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

























import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import * as LucideIcons from "lucide-react";

interface FeaturesProps {
  icon: keyof typeof LucideIcons;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "MessageCircle",
    title: "Live Chat",
    description:
      "Real time chatting with customers on your website not only builds customer confidence during their shopping experience, but also helps improve your conversion ratio and creates a strong brand image.",
  },
  {
    icon: "Zap",
    title: "Lightning Speed",
    description:
      "Site speed and design are two of the most important ranking factors Google considers. A fast, responsive site keeps customers engaged and reduces bounce rates.",
  },
  {
    icon: "Smartphone",
    title: "Responsive Design",
    description:
      "Our websites adapt to any device — mobile, laptop, desktop, or tablet — ensuring a seamless experience for all users.",
  },
  {
    icon: "CreditCard",
    title: "Payment Gateway",
    description:
      "We integrate secure and affordable payment gateways for smooth online transactions via debit card, credit card, and more.",
  },
  {
    icon: "Share2",
    title: "Social Media",
    description:
      "Extend your social media presence by making your website more shareable and discoverable to potential customers online.",
  },
  {
    icon: "Headphones",
    title: "24/7 Support",
    description:
      "We provide around-the-clock support with 99.9% uptime, ensuring your business is always online and running smoothly.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Makes Us Different
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Discover the unique advantages of our website development services that
        set your business apart from the competition.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex flex-col justify-center items-center text-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  {/** Dynamically render the correct Lucide icon */}
                  {(() => {
                    const LucideIcon = LucideIcons[icon];
                    return (
                      <LucideIcon
                        size={24}
                        color="hsl(var(--primary))"
                        className="text-primary"
                      />
                    );
                  })()}
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
