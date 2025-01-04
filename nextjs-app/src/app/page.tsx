import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";
import './globals.css';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 font-sans">
      <Header />
      <main className="container mx-auto pt-40 pb-5">
        
        {/* About Me Section */}
        <Section
          id="introduction"
          title="About Me"
          className="py-12 px-4 md:px-8 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg fade-in"
        >
          <ul className="space-y-6">
              <li className="flex items-center space-x-6 transition-all duration-300 hover:scale-105 hover:shadow-xl" id="list">
              {/* Left side text */}
              <div>
                <p>
                  Hey! This is Nishanth, a tech enthusiast with expertise in Software Development, Data Science and AI, Statistics, and Embedded Software Development.<br />
                  I bring a strong technical skill set and a passion for solving real-world problems.<br />
                  Currently, I am pursuing a master's in <b>Data Science</b> at the University of Connecticut (UCONN), USA.<br />
                  Previously, I worked as a <b>Software Development Engineer (SDE-1)</b> at Piramal Finance, where I:<br />
                  - Designed and developed <b>backend systems</b> using <b>Java</b> with the <b>Spring Boot</b> framework in a microservices architecture.<br />
                  - Built dynamic <b>frontend features</b> leveraging <b>Next.js</b> and <b>Tailwind CSS</b> frameworks.<br />
                  My research interests include <b>fine-tuning LLM</b> models with <b>Retrieval-Augmented Generation (RAG)</b> architecture.<br />
                  I also served as a Research Assistant at the <b>National Institute of Technology, Warangal (NITW)</b>, where I:<br />
                  - Developed an <b>XGBoost</b> model for classifying abnormal knees using <b>sEMG signals</b>.<br />
                  - Integrated sensors and the model into <b>Arduino</b> platform for real-world applications.<br />
                  If you're working on similar projects or looking for collaboration opportunities, feel free to reach out!<br />
                </p>
              </div>

              {/* Right side image */}
              <div className="w-60 h-80 overflow-hidden shadow-md">
                <img
                src="/IMG20241216163550.jpg"
                alt="Profile"
                className="object-cover w-full h-full"
                />
              </div>
            </li>
          </ul>
        </Section>

        {/* Education Section */}
        <Section
          id="education"
          title="Education"
          className="py-12 px-4 md:px-8 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg fade-in"
        >
          <ul className="space-y-6">
  <li className="transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-start" id="list">
    <div className="flex-1">
      <strong>University of Connecticut, Connecticut, USA</strong><br />
      Master of Science, Data Science. Minor in Statistics.<br />
      Relevant Coursework: Machine Learning, Data Mining, Statistics for Data Science, Generative AI, Data Visualization, Time Series Analysis, Statistical Modelling, Data Analytics, Deep Learning.
    </div>
    <img
      src="/uconn-logo.png"
      alt="University of Connecticut Logo"
      className="h-20 w-20 ml-4"
    />
  </li>
  <li className="transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-start" id="list">
    <div className="flex-1">
      <strong>National Institute of Technology Warangal, Warangal</strong><br />
      Bachelor of Technology, Electronics and Communication Engineering.<br />
      Relevant Coursework: Object Oriented Programming - OOPS, Operating Systems - OS, Real Time Operating Systems - RTOS, Database Management System - DBMS, Data Structures and Algorithms - DSA, Problem-Solving with Computer Programming - PSCP.
    </div>
    <img
      src="/nitw-logo.png"
      alt="NIT Warangal Logo"
      className="h-20 w-20 ml-4"
    />
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
              - Played a key role in the Loan Management System team, focusing on the development of an in-house Loan Management System(LMS), enabling a platform for fintech operations team to monitor loans.<br />
              - Collaborated with lending business stakeholders and software architects to understand requirements and analyze the existing Pennant Loan Management System.<br />
              - Conducted system design through detailed HLD and LLD reviews, ensuring seamless transition from Pennant LMS to an in-house LMS with fewer architectural flaws during implementation.<br />
              - Developed LMS backend services with a team of 10, using Java SpringBoot (SpringWebMVC, SpringSecurity, SpringDataMongoDB) in a microservices architecture, leveraging MongoDB for scalable and flexible data management.<br />
              - Partnered with UI/UX teams to translate Figma designs into dynamic, reusable components using Next.js and TailwindCSS, enhancing the LMS front-end applications usability. Integrated RESTful APIs.<br />
              - Owned and maintained three key backend services following Agile SDLC practices: LMS Master Service, Ops Central Orchestrator, and LMS Report Generation Service, ensuring 90% test coverage using Mockito.<br />
              - Optimized Crismac Report generation through parallel processing and query optimization, reducing processing time for 1.2M operations from 30 minutes to under 5 minutes, with automated data push to AWS S3 bucket for downstream analytics and operational usage.<br/>
              - Configured backend services to emit metrics to Grafana, enabling real-time monitoring and alerting for critical failure metrics, reducing response times by 40%.<br />
              - Leveraged Grafana metrics monitoring to resolve 80% of 60+ production bugs within a 24-hour turnaround time (TAT) on average over the span of a year, reducing overall system downtime by 30% and documenting RCA for each issue to prevent recurrence.<br />
	            - Designed and implemented a reusable end-to-end maker-checker workflow, reducing integration development time by 80% across teams and standardizing compliance verification processes. <br />
              - Spearheaded resolution of a critical front-end UI crash within 2 hours, collaborating with cross-functional teams to perform RCA and document preventive measures<br />
            </li>
            <li className="transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <strong>Piramal Finance | Technology Intern: July 2021 - Aug 2022</strong><br />
              GENERATIVE AI-BASED CHATBOT FOR CUSTOMER SUPPORT<br />
              - Designed and implemented a chatbot using GPT-based models to automate customer support responses, reducing response time by 70% and improving resolution accuracy by 25%.<br />
              - Fine-tuned a Transformer model on over 200,000 customer interactions, achieving 90% accuracy in intent detection and contextual response generation.<br />
              - Integrated Natural Language Processing (NLP) techniques such as Named Entity Recognition (NER) and sentiment analysis to handle user queries more effectively and improve customer satisfaction scores by 15%.<br />
              - Utilized AWS Lambda and SageMaker for scalable model deployment, enabling seamless integration with the company’s CRM platform, which allowed 24/7 automated support for over 50,000 monthly active users.<br />
              - Conducted A/B testing with a control group, demonstrating a 20% increase in customer engagement and retention when utilizing the chatbot for issue resolution.<br />
              <br/>
              RETENTION CALCULATOR DEVELOPMENT<br />
              -Spearheaded the frontend development of the retention calculator using Next.js and React, designing a responsive, user-centric interface.<br />
              -Optimized the login and offer modules to deliver an intuitive customer experience, increasing engagement metrics by 25%.<br />
              -Implemented efficient state management using Redux, ensuring smooth interactions across various user touchpoints within the retention calculator. This streamlined the frontend workflow and reduced page load times by 15%.<br />
              -Collaborated with cross-functional teams to align the project with business objectives, focusing on enhancing customer retention rates.<br />
              -Presented project updates to stakeholders, ensuring alignment and buy-in from all relevant parties.<br />
            </li>
            <li className="transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <strong>National Institue of Technology Warangal-NITW | Research Assistant : Aug 2020 - June 2021</strong><br />
              HUMAN KNEE ABNORMALITY IDENTIFICATION USING SEMG AND XGBOOST  <a href="https://ieeexplore.ieee.org/abstract/document/10295245" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline ml-2">[Publication]</a><br />
              - Applied XGBoost and decision tree algorithms, achieving a 96% classification accuracy in detecting abnormal knee conditions, establishing a foundation for diagnostic tools.<br />
              - Optimized medical data processing by reducing dimensionality from 60 to 11 through PCA, enhancing model performance by 20%.<br />
              - Delivered 96% detection accuracy, demonstrating real-world potential for early diagnosis and patient care improvement.
            </li>

          </ul>
        </Section>

        {/* Academic Projects Section */}
        <Section
          id="projects"
          title="Academic Projects"
          className="py-12 px-4 md:px-8 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg fade-in"
        >
          <ul className="space-y-6">
            <li className="transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <strong>GAN-Based Volatility Trend Classification For Financial Time Series (GAN, CNN, LSTM)</strong><br />
              <em>April 2024 - Present</em><br />
              <ul className="list-disc ml-6">
                <li>Developed a multi-classification model using GANs, achieving 85% classification accuracy in predicting volatility trends. Integrated ConvLSTM and MLP for enhanced pattern recognition in financial data.</li>
                <li>Enhanced classication accuracy by 15% through ordinal regression on the GAN discriminator, improving trend prediction accuracy by 10% across Microsoft, Tesla, and PAICC stock data.</li>
              </ul>
            </li>
            <li className="transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <strong>Portfolio Manager (Python, Flask, MySQL, HTML, CSS, Nextjs)</strong><br />
              <em>April 2024 - Present</em><br />
              <ul className="list-disc ml-6">
                <li>Developed Portfolio Manager, a comprehensive full-stack web application for investment portfolio management with assets in capital markets and helping users make informed investment decisions.</li>
                <li>Implemented features to maintain and update users investments, provide personalized investment suggestions based on risk tolerance and budget, and offer a variety of investment options.</li>
              </ul>
            </li>
          </ul>
        </Section>

        {/* Skills Section */}
        <Section
          id="skills"
          title="Skills"
          className="py-12 px-4 md:px-8 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg fade-in"
        >
          <ul className="space-y-6">
            <li><strong className="transition-all duration-300 hover:scale-105 hover:shadow-xl">Programming:</strong> Python, R, SQL, NoSQL, Java, C++, TensorFlow, PyTorch, Scikit-learn, Hadoop, MongoDB.<br /></li>
            <li><strong className="transition-all duration-300 hover:scale-105 hover:shadow-xl">Tools:</strong> Jupyter, Tableau, AWS, Docker, Kubernetes, Git, Apache Kafka, Airflow, Monte Carlo Simulations.<br /></li>
            <li><strong className="transition-all duration-300 hover:scale-105 hover:shadow-xl">Expertise:</strong> Statistical Modeling, Machine Learning, Deep Learning, NLP, Time Series Analysis, Predictive Analytics.</li>
          </ul>
        </Section>
        {/* Contact me Section */}
        <Section
  id="contact"
  title="Contact Me"
  className="py-12 px-4 md:px-8 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg fade-in"
>
  <ul className="space-y-6">
    <li>
      <strong className="transition-all duration-300 hover:scale-105 hover:shadow-xl">
        LinkedIn:
      </strong>{" "}
      <a
        href="https://www.linkedin.com/in/nishanth-kalluri-74047919a/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 hover:underline"
      >
        linkedin.com/in/your-profile
      </a>
    </li>
    <li>
      <strong className="transition-all duration-300 hover:scale-105 hover:shadow-xl">
        Gmail:
      </strong>{" "}
      <a
        href="mailto:jyv24003@uconn.edu"
        className="text-blue-600 dark:text-blue-400 hover:underline"
      >
        jyv24003@uconn.edu
      </a>
    </li>
    <li>
      <strong className="transition-all duration-300 hover:scale-105 hover:shadow-xl">
        GitHub:
      </strong>{" "}
      <a
        href="https://github.com/Nishanth-kalluri "
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 hover:underline"
      >
        github.com/your-github-username
      </a>
    </li>
    <li>
      <strong className="transition-all duration-300 hover:scale-105 hover:shadow-xl">
        Phone:
      </strong>{" "}
      <a
        href="tel:+19592064468"
        className="text-blue-600 dark:text-blue-400 hover:underline"
      >
        +1 (959) 206-4468
      </a>
    </li>
  </ul>
</Section>

      </main>
      <Footer />
    </div>
  );
}
