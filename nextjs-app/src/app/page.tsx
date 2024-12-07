import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 font-sans">
      <Header />
      <main className="container mx-auto py-8">
        
        {/* About Me Section */}
        <Section
          id="introduction"
          title="About Me"
          className="py-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg shadow-md fade-in"
        >
          <p>
            Nishanth Kalluri<br />
            Hartford, USA<br />
            kallurinishanth0@gmail.com<br />
            +1 9592064468<br />
            <a
              href="https://www.linkedin.com/in/nishanth-kalluri/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-300 hover:text-blue-500 transition duration-300"
            >
              LinkedIn
            </a>
          </p>
        </Section>

        {/* Education Section */}
        <Section
          id="education"
          title="Education"
          className="py-8 bg-white text-gray-800 dark:text-gray-300 shadow-md rounded-lg fade-in"
        >
          <ul className="space-y-4">
            <li>
              <strong>University of Connecticut, Connecticut, USA</strong><br />
              Master of Science, Data Science. Minor in Statistics. 2024-2025<br />
              Relevant Coursework: Statistical Modelling, Generative AI, Data Visualization, Time series Analysis, Machine Learning.
            </li>
            <li>
              <strong>National Institute of Technology Warangal, Warangal</strong><br />
              Bachelor of Technology, Electronics and Communication Engineering. 2019-2023
            </li>
          </ul>
        </Section>

        {/* Work Experience Section */}
        <Section
          id="work-experience"
          title="Work Experience"
          className="py-12 px-4 md:px-8 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg fade-in"
        >
          <ul className="space-y-6">
            <li className="transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <strong>Piramal Finance | Software Development Engineer</strong><br />
              LOAN MANAGEMENT SYSTEM (LMS) DEVELOPMENT: July 2022 - Aug 2024<br />
              - Led cross-functional collaboration among a 10-member team, software architects, and business stakeholders to develop an in-house Loan Management System (LMS) using Java and Spring Boot, implementing CRUD operations that reduced APIs from 61 to 9, improving data management speed by 30%.<br />
              - Integrated operational analytics by creating custom APIs for the master management UI, resolving 12 Figma-backend mismatches and enhancing security through a maker-checker authorization flow, which reduced data entry turnaround time by 90%.<br />
              - Engineered a maker-checker flow in the ops-central-orchestration service, enhancing data security by 25% and reducing authorized data entry turnaround time by 90% through MongoDB.<br />
              - Developed an automated reporting tool to streamline data access, delivering daily Crismac reports directly to AWS S3 and improving retrieval efficiency by 30% for 20+ stakeholders, supporting quicker decision-making and business insights.
            </li>
            <li className="transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <strong>Piramal Finance | Data Scientist Intern</strong><br />
              GENERATIVE AI-BASED CHATBOT FOR CUSTOMER SUPPORT: July 2021 - Aug 2022<br />
              - Designed and implemented a chatbot using GPT-based models to automate customer support responses, reducing response time by 70% and improving resolution accuracy by 25%.<br />
              - Fine-tuned a Transformer model on over 200,000 customer interactions, achieving 90% accuracy in intent detection and contextual response generation.<br />
              - Integrated Natural Language Processing (NLP) techniques such as Named Entity Recognition (NER) and sentiment analysis to handle user queries more effectively and improve customer satisfaction scores by 15%.<br />
              - Utilized AWS Lambda and SageMaker for scalable model deployment, enabling seamless integration with the company’s CRM platform, which allowed 24/7 automated support for over 50,000 monthly active users.<br />
              - Conducted A/B testing with a control group, demonstrating a 20% increase in customer engagement and retention when utilizing the chatbot for issue resolution.
            </li>
          </ul>
        </Section>

        {/* Academic Projects Section */}
        <Section
          id="projects"
          title="Academic Projects"
          className="py-8 bg-white text-gray-800 dark:text-gray-300 shadow-md rounded-lg fade-in"
        >
          <ul className="space-y-6">
            <li>
              <strong>HUMAN KNEE ABNORMALITY IDENTIFICATION USING SEMG AND XGBOOST</strong><br />
              Supervisor - Dr. Md Farukh Hashmi, ASSISTANT PROFESSOR, ECE, NITW<br />
              - Applied XGBoost and decision tree algorithms, achieving a 96% classification accuracy in detecting abnormal knee conditions, establishing a foundation for diagnostic tools.<br />
              - Optimized medical data processing by reducing dimensionality from 60 to 11 through PCA, enhancing model performance by 20%.<br />
              - Delivered 96% detection accuracy, demonstrating real-world potential for early diagnosis and patient care improvement.
            </li>
            <li>
              <strong>GAN-BASED VOLATILITY TREND CLASSIFICATION FOR FINANCIAL TIME SERIES</strong><br />
              <em>April 2024 - Present</em><br />
              <ul className="list-disc ml-6">
                <li>Achieved 85% classification accuracy in financial volatility trend prediction with GANs.</li>
                <li>Improved model reliability by 30% using ordinal regression techniques.</li>
              </ul>
            </li>
          </ul>
        </Section>

        {/* Skills Section */}
        <Section
          id="skills"
          title="Skills"
          className="py-8 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-white rounded-lg shadow-lg fade-in"
        >
          <p>
            <strong>Programming:</strong> Python, R, SQL, NoSQL, Java, C++, TensorFlow, PyTorch, Scikit-learn, Hadoop, MongoDB.<br />
            <strong>Tools:</strong> Jupyter, Tableau, AWS, Docker, Kubernetes, Git, Apache Kafka, Airflow, Monte Carlo Simulations.<br />
            <strong>Expertise:</strong> Statistical Modeling, Machine Learning, Deep Learning, NLP, Time Series Analysis, Predictive Analytics.
          </p>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
