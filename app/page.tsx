import { Link } from "@/components/base";
import { FrontCard, FrontCardHead, FrontCardText } from "@/components/cards";

const UNISTU_HREF = "https://uni-stuttgart.de";
const CARIAD_HREF = "https://cariad.technology";
const INTEL_HREF = "https://intel.com";
const ISS_HREF = "https://www.iss.uni-stuttgart.de/en/";

const GITHUB_REPOS_HREF = "https://github.com/hnanacc?tab=repositories";

const UNSYNTH_HREF = "https://unsynth.ai";
const TODACK_HREF = "https://todack.com";
const SPRINT_HREF = "https://youtu.be/NMCldw2M6Sc?si=a813pF4JpKEFe3sD";

const UDA_HREF =
  "https://paperswithcode.com/task/unsupervised-domain-adaptation";
const OWD_HREF = "https://paperswithcode.com/task/open-world-object-detection";
const EXP_HREF = "https://transformer-circuits.pub/2021/framework/index.html";

const EMAIL_HREF = "mailto:pro.bbcom18@gmail.com";
const TWITTER_HREF = "https://twitter.com/hnanacc";
const LINKEDIN_HREF = "https://linkedin.com/in/hnanacc";

function About() {
  return (
    <section className="mb-8">
      <h1 className="mb-8 font-medium">Harshal Nandigramwar</h1>

      <p>
        <em>Building safe and efficient AI systems</em> — I&apos;m an{" "}
        <em>AI Research Intern</em> at{" "}
        <Link href={INTEL_HREF} target="blank" rel="noopener noreferrer">
          Intel Labs
        </Link>{" "}
        and a <em>Graduate Student</em> at{" "}
        <Link href={UNISTU_HREF} target="blank" rel="noopener noreferrer">
          Universität Stuttgart
        </Link>
        .
      </p>
    </section>
  );
}

const craftItems = [
  {
    href: UNSYNTH_HREF,
    title: "Unsynth AI",
    text: "Synthetic data generation for low resource problems.",
  },
  {
    href: TODACK_HREF,
    title: "Todack",
    text: "Personalized learning and knowledge management — powered by AI.",
  },
  {
    href: SPRINT_HREF,
    title: "Sprint Editor",
    text: "Fast cross-platform code editor for competitive programmers.",
  },
];

const writeItems = [
  {
    href: "/writing/inside-transformers",
    title: "Inside Transformers",
    text: "Visual exploration of internal mechanisms of transformers.",
  },
  {
    href: "/writing/the-ai-stack",
    title: "The AI Stack",
    text: "Overview of 80+ years of engineering to produce the next token in 2 ms.",
  },
  {
    href: "/writing/lmm-recipe",
    title: "Recipe: Large Multimodal Models",
    text: "Distillation of insights to create a large multimodal model.",
  },
];

function Contributions() {
  return (
    <section className="min-w-16 mb-8 flex space-x-6 flex-nowrap justify-stretch">
      <div className="flex-1">
        <h2 className="mb-4">Crafting</h2>
        {craftItems.map((item, idx) => {
          return (
            <FrontCard key={idx}>
              <FrontCardHead href={item.href}>{item.title}</FrontCardHead>
              <FrontCardText>{item.text}</FrontCardText>
            </FrontCard>
          );
        })}

        <Link href={GITHUB_REPOS_HREF}>
          <em>See more</em>
        </Link>
      </div>

      <div className="flex-1">
        <h2 className="mb-4">Writing</h2>
        {writeItems.map((item, idx) => {
          return (
            <FrontCard key={idx}>
              <FrontCardHead href={item.href}>{item.title}</FrontCardHead>
              <FrontCardText>{item.text}</FrontCardText>
            </FrontCard>
          );
        })}
        <Link href="/writing">
          <em>See more</em>
        </Link>
      </div>
    </section>
  );
}

function Research() {
  return (
    <section className="mb-8">
      <h2 className="mb-4">Research</h2>
      <p className="mb-4">
        Currently, I&apos;m investigating{" "}
        <Link href={EXP_HREF}>methods to extract concepts</Link> from
        vision-language models to explain their predictions mechanistically.
      </p>
      <p>
        In the past, I&apos;ve worked on <Link href={OWD_HREF}>open-world</Link>{" "}
        object detection at <Link href={CARIAD_HREF}>CARIAD</Link> and on{" "}
        <Link href={UDA_HREF}>domain adaptation</Link> for object detection at
        the <Link href={ISS_HREF}>ISS lab</Link>.
      </p>
    </section>
  );
}

function Contact() {
  return (
    <section className="mb-8">
      <h2 className="mb-4">Contact</h2>
      <p className="mb-4">
        I&apos;m always open to new opportunities in AI research and startups.
      </p>
      <p>
        <span className="mr-3">
          <Link href={EMAIL_HREF}>Email</Link>
        </span>
        <span className="mr-3">
          <Link href={LINKEDIN_HREF}>Linkedin</Link>
        </span>
        <span className="mr-3">
          <Link href={TWITTER_HREF}>Twitter</Link>
        </span>
      </p>
    </section>
  );
}

export default function Home() {
  return (
    <article className="max-w-prose mx-auto pt-32">
      <About />
      <Contributions />
      <Research />
      <Contact />
    </article>
  );
}
