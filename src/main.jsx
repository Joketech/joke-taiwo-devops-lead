import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  GitBranch,
  ShieldCheck,
  Activity,
  Cpu,
  Users,
  Mail,
  MapPin,
  ServerCog,
  Sparkles,
  Gauge,
  Layers3,
} from 'lucide-react';
import './styles.css';

const strengths = [
  {
    icon: Cloud,
    title: 'Cloud infrastructure that can scale with demand',
    body: 'AWS architecture across EC2, S3, VPC, RDS, DynamoDB and highly available service foundations for growth-focused teams.',
  },
  {
    icon: GitBranch,
    title: 'Delivery pipelines that reduce friction',
    body: 'CI/CD and GitOps workflows with GitHub Actions, Jenkins, ArgoCD and release automation that shorten cycles and improve consistency.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure operations built into the workflow',
    body: 'DevSecOps practices, IAM discipline, vulnerability scanning and operational guardrails that help teams move fast without becoming reckless.',
  },
  {
    icon: Activity,
    title: 'Observability before failure becomes expensive',
    body: 'Monitoring, alerting and anomaly detection using Prometheus, Grafana, CloudWatch and AI-assisted operational signals.',
  },
];

const metrics = [
  ['99.99%', 'uptime target achieved across high-traffic cloud infrastructure'],
  ['40%', 'shorter release cycles through automated CI/CD and GitOps'],
  ['30%', 'faster incident response with AI-driven anomaly detection'],
  ['50%', 'faster new-environment setup through Terraform and Ansible'],
];

const experience = [
  {
    company: 'Dominion Systems',
    location: 'Texas, USA · Remote',
    role: 'Lead DevOps Engineer',
    period: '2023 — Present',
    points: [
      'Leads engineers building commercially focused infrastructure and web services for businesses, entrepreneurs and brands.',
      'Architects AWS infrastructure and Amazon EKS clusters for scalable microservices and improved resource utilization.',
      'Automates releases with GitHub Actions and ArgoCD while strengthening reliability, cost efficiency and engineering productivity.',
      'Implements MLOps practices for model deployment, versioning, drift monitoring and retraining pipelines.',
    ],
  },
  {
    company: 'TechMedia Films and Productions',
    location: 'Lagos, Nigeria',
    role: 'DevOps Engineer',
    period: '2020 — 2023',
    points: [
      'Built CI/CD practices with engineering teams and automated infrastructure provisioning with Terraform and Ansible.',
      'Managed RDS and DynamoDB environments for availability, scalability and data integrity.',
      'Supported LLM application deployment with attention to resource allocation and inference optimization.',
      'Used Python automation to reduce repetitive operational work and improve team efficiency.',
    ],
  },
  {
    company: '9mobile',
    location: 'Lagos, Nigeria',
    role: 'Junior DevOps Engineer',
    period: '2019 — 2020',
    points: [
      'Supported on-premise to AWS migration work across EC2, S3 and VPC foundations.',
      'Contributed to Jenkins CI/CD pipelines and GitOps workflows for Kubernetes deployments.',
      'Monitored production health with CloudWatch and supported troubleshooting reports.',
      'Built early conversational AI and prompt-engineering experience through response optimization work.',
    ],
  },
];

const capabilities = [
  'AWS cloud architecture',
  'Kubernetes and Amazon EKS',
  'Docker and microservices',
  'Terraform and Ansible',
  'GitHub Actions and Jenkins',
  'ArgoCD and GitOps',
  'Prometheus, Grafana and CloudWatch',
  'DevSecOps and IAM governance',
  'Python automation',
  'MLOps and model deployment',
  'LLM applications and prompt engineering',
  'Stakeholder communication and mentoring',
];

const companyOutcomes = [
  {
    icon: Gauge,
    title: 'Faster delivery without operational chaos',
    body: 'Companies get release systems that reduce manual work, support engineering velocity and keep production change controlled.',
  },
  {
    icon: ServerCog,
    title: 'Infrastructure that supports business growth',
    body: 'Cloud foundations are designed around reliability, scalability, security, cost efficiency and the customer experience behind the systems.',
  },
  {
    icon: Cpu,
    title: 'AI-ready operations and automation',
    body: 'Teams preparing for AI, MLOps and intelligent automation get a leader who understands both modern infrastructure and business execution.',
  },
  {
    icon: Users,
    title: 'Technical leadership with commercial judgement',
    body: 'Beyond tools, teams gain mentoring, stakeholder alignment, delivery ownership and the ability to turn business goals into engineering action.',
  },
];

function App() {
  useEffect(() => {
    document.title = 'Joke Taiwo Ogundairo — Lead DevOps Engineer';
  }, []);

  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top" aria-label="Joke Taiwo home">
          <span className="brand-mark">JT</span>
          <span>Joke Taiwo</span>
        </a>
        <div className="nav-links" aria-label="Main navigation">
          <a href="#impact">Impact</a>
          <a href="#experience">Experience</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="top" className="hero section-shell">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={16} /> Lead DevOps Engineer · Cloud Infrastructure · Platform Engineering</div>
          <h1>Infrastructure leadership for smooth, secure and scalable company growth.</h1>
          <p className="hero-lede">
            Joke Taiwo Ogundairo helps teams design, automate, secure, monitor and optimize the systems that keep modern companies moving — from cloud platforms and CI/CD pipelines to MLOps, DevSecOps and AI-driven automation.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="https://wa.me/2348026193708?text=Hello%20Joke%2C%20I%20would%20like%20to%20discuss%20a%20DevOps%20leadership%20opportunity." target="_blank" rel="noreferrer">
              Start a conversation on WhatsApp <ArrowRight size={18} />
            </a>
            <a className="btn secondary" href="#experience">View leadership record</a>
          </div>
        </div>
        <aside className="hero-card portrait-card" aria-label="Executive profile summary">
          <div className="status-pill"><span></span> Available for senior DevOps, platform and cloud leadership conversations</div>
          <img className="hero-portrait" src="/images/joke-executive-hero.webp" alt="Joke Taiwo Ogundairo in an executive grey suit" />
        </aside>
      </section>

      <section id="impact" className="impact section-shell">
        <div className="section-heading">
          <span className="kicker">Why companies pay attention</span>
          <h2>Reliable systems create room for growth.</h2>
        </div>
        <div className="outcome-grid">
          {companyOutcomes.map(({ icon: Icon, title, body }) => (
            <article className="outcome-card" key={title}>
              <Icon size={24} />
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="executive-visual section-shell" aria-label="Joke Taiwo executive portrait">
        <div className="executive-photo-wrap">
          <img src="/images/joke-leadership-chair.webp" alt="Joke Taiwo Ogundairo seated in a formal leadership portrait" />
        </div>
        <div className="executive-note">
          <span className="kicker">Leadership presence</span>
          <h2>Senior engineering leadership with calm operational control.</h2>
          <p>For companies evaluating a DevOps leader, the signal is not only technical depth. It is the ability to bring order to infrastructure, align teams around delivery, and make growth feel controlled instead of chaotic.</p>
          <div className="stack-grid visual-stack">
            <span>AWS</span><span>EKS</span><span>Kubernetes</span><span>Terraform</span><span>ArgoCD</span><span>MLOps</span>
          </div>
        </div>
      </section>

      <section className="metrics-band section-shell" aria-label="Selected delivery outcomes">
        {metrics.map(([value, label]) => (
          <div className="metric" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="section-shell split-section">
        <div className="section-heading compact">
          <span className="kicker">Operating strengths</span>
          <h2>From infrastructure to execution, the work is built to reduce risk and unlock speed.</h2>
        </div>
        <div className="strengths-list">
          {strengths.map(({ icon: Icon, title, body }) => (
            <article className="strength" key={title}>
              <div className="icon-box"><Icon size={21} /></div>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="experience section-shell">
        <div className="section-heading">
          <span className="kicker">Experience</span>
          <h2>Progressive DevOps leadership, backed by broader business and media operations experience.</h2>
          <p>DevOps experience since 2019, strengthened by earlier decades of cross-functional leadership across media production, entrepreneurship, training, stakeholder coordination and project delivery.</p>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={item.company}>
              <div className="timeline-top">
                <div>
                  <h3>{item.role}</h3>
                  <p>{item.company} · {item.location}</p>
                </div>
                <span>{item.period}</span>
              </div>
              <ul>
                {item.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="capabilities" className="capabilities section-shell">
        <div className="section-heading compact">
          <span className="kicker">Capabilities</span>
          <h2>Technical depth with leadership range.</h2>
        </div>
        <div className="capability-cloud">
          {capabilities.map((capability) => <span key={capability}>{capability}</span>)}
        </div>
      </section>

      <section className="leadership section-shell">
        <div className="leadership-card">
          <Layers3 size={28} />
          <h2>Built for companies that need an engineer who can also lead people, priorities and delivery.</h2>
          <p>
            Before cloud infrastructure became the center of the work, Joke built more than two decades of experience across media, production, entrepreneurship, training, project management and multidisciplinary coordination. That background creates a rare engineering profile: technical execution with customer awareness, stakeholder communication and commercial judgement.
          </p>
          <ul>
            <li><CheckCircle2 size={18} /> Team leadership, mentoring and knowledge transfer</li>
            <li><CheckCircle2 size={18} /> Resource coordination and strategic execution</li>
            <li><CheckCircle2 size={18} /> Business objectives translated into delivery plans</li>
          </ul>
        </div>
        <div className="portrait-gallery" aria-label="Professional portraits of Joke Taiwo">
          <figure>
            <img src="/images/joke-profile-light.webp" alt="Joke Taiwo Ogundairo in a white shirt portrait" />
            <figcaption>Clarity for teams and stakeholders</figcaption>
          </figure>
          <figure>
            <img src="/images/joke-warm-portrait.webp" alt="Joke Taiwo Ogundairo warm studio portrait" />
            <figcaption>Human-centred leadership</figcaption>
          </figure>
          <figure>
            <img src="/images/joke-burgundy-portrait.webp" alt="Joke Taiwo Ogundairo burgundy professional portrait" />
            <figcaption>Executive presence with practical delivery</figcaption>
          </figure>
        </div>
      </section>

      <section id="contact" className="contact section-shell">
        <div>
          <span className="kicker">For hiring teams, founders and engineering leaders</span>
          <h2>When infrastructure must support growth, reliability and automation, the conversation should start here.</h2>
        </div>
        <div className="contact-panel">
          <a href="mailto:Joketaiwo2008@gmail.com"><Mail size={18} /> Joketaiwo2008@gmail.com</a>
          <a href="https://github.com/Joketech" target="_blank" rel="noreferrer"><span className="contact-glyph">GH</span> github.com/Joketech</a>
          <a href="https://www.linkedin.com/in/joke-taiwo-ogundairo-1424ab149/" target="_blank" rel="noreferrer"><span className="contact-glyph">in</span> LinkedIn profile</a>
          <span><MapPin size={18} /> Lagos, Nigeria · Remote-ready</span>
        </div>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Joke Taiwo Ogundairo. Lead DevOps Engineer.</p>
        <p>Built as a focused biography landing page for companies evaluating cloud, DevOps and automation leadership.</p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
