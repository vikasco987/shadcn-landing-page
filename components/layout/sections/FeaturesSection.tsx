import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const featuresList: FeatureProps[] = [
  {
    icon: "MessageCircle",
    title: "Live Chat",
    description:
      "Real-time chatting with customers on your website builds trust, improves conversions, and strengthens your brand image.",
  },
  {
    icon: "Zap",
    title: "Lighting Speed",
    description:
      "Fast-loading websites improve user experience and search rankings. Our sites are optimized for speed and smooth browsing.",
  },
  {
    icon: "Smartphone",
    title: "Responsive Design",
    description:
      "We design websites that adapt perfectly to any device — mobile, tablet, or desktop — ensuring a seamless experience.",
  },
  {
    icon: "CreditCard",
    title: "Payment Gateway",
    description:
      "Accept payments easily with integrated gateways for debit, credit, UPI, and net banking to power your online sales.",
  },
  {
    icon: "Share2",
    title: "Social Media Integration",
    description:
      "Connect your website with social platforms to reach more customers, boost engagement, and drive more sales.",
  },
  {
    icon: "Headphones",
    title: "24/7 Support",
    description:
      "We provide around-the-clock technical support to keep your website running smoothly with 99.9% uptime.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">
            Our Features
          </h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need for a Powerful Website
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            From real-time customer chat to blazing speed, responsive layouts, and
            secure payment gateways — we equip your website with everything it
            needs to succeed online.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {featuresList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
