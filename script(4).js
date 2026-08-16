/* FUTUREWISE ASSESSMENT - cleaned and connected to assessment.html */

const mathQuestions = [

    {
        question:
            "A rectangular classroom is 8 m long and 6 m wide. What is its area?",

        choices: [
            "14 m²",
            "28 m²",
            "48 m²",
            "56 m²"
        ],

        answer: 2
    },

    {
        question:
            "What is the mean of 6, 8, 10, and 12?",

        choices: [
            "8",
            "9",
            "10",
            "11"
        ],

        answer: 1
    },

    {
        question:
            "Which quadrilateral has four equal sides and four right angles?",

        choices: [
            "Rectangle",
            "Trapezoid",
            "Square",
            "Parallelogram"
        ],

        answer: 2
    },

    {
        question:
            "Which formula is used to find the area of a triangle?",

        choices: [
            "A = bh",
            "A = 1/2 bh",
            "A = 2bh",
            "A = b + h"
        ],

        answer: 1
    },

    {
        question:
            "How many sides does a hexagon have?",

        choices: [
            "5",
            "6",
            "7",
            "8"
        ],

        answer: 1
    },

    {
        question:
            "A fair coin is tossed once. What is the probability of getting heads?",

        choices: [
            "0",
            "1/4",
            "1/2",
            "1"
        ],

        answer: 2
    },

    {
        question:
            "Solve for x: 2x + 6 = 16",

        choices: [
            "4",
            "5",
            "6",
            "8"
        ],

        answer: 1
    },

    {
        question:
            "A bag costs ₱800 and has a 15% discount. What is the sale price?",

        choices: [
            "₱620",
            "₱680",
            "₱700",
            "₱720"
        ],

        answer: 1
    },

    {
        question:
            "Which formula represents the perimeter of a rectangle?",

        choices: [
            "P = lw",
            "P = 2l + 2w",
            "P = 1 + w",
            "P = 2lw"
        ],

        answer: 1
    },

    {
        question:
            "What is the next number? 1, 4, 9, 16, ___",

        choices: [
            "20",
            "24",
            "25",
            "36"
        ],

        answer: 2
    }

];

const scienceQuestions = [

    {
        question:
            "A researcher wants to determine whether fertilizer concentration affects the growth of tomato plants. She uses three fertilizer concentrations, but the plants receiving the highest concentration are also placed in an area receiving more sunlight. The plants with more fertilizer grow the tallest. What is the greatest flaw in the experiment?",

        choices: [
            "The dependent variable is qualitative",
            "There is no control of a confounding variable",
            "The sample size is automatically too large",
            "The hypothesis cannot be tested"
        ],

        answer: 1
    },

    {
        question:
            "A plant is placed in darkness for several days. Its cells continue to carry out cellular respiration, but photosynthesis cannot proceed normally. Which statement best explains the situation?",

        choices: [
            "Respiration stops because there is no sunlight",
            "Photosynthesis and respiration are completely independent of energy",
            "Photosynthesis captures light energy, while respiration releases usable energy from stored organic molecules",
            "Respiration produces sunlight that is later used by photosynthesis"
        ],

        answer: 2
    },

    {
        question:
            "Two heterozygous parents have the genotype Aa × Aa. Assuming complete dominance and independent segregation, what is the probability that their offspring will be homozygous recessive?",

        choices: [
            "0%",
            "25%",
            "50%",
            "75%"
        ],

        answer: 1
    },

    {
        question:
            "A reaction requires 2 mol H₂ for every 1 mol O₂: 2H₂ + O₂ → 2H₂O. If a reaction mixture contains 3.0 mol H₂ and 2.0 mol O₂, which substance is the limiting reactant, and how many moles of H₂O can theoretically form?",

        choices: [
            "O₂; 4.0 mol H₂O",
            "H₂; 3.0 mol H₂O",
            "O₂; 3.0 mol H₂O",
            "H₂; 1.5 mol H₂O"
        ],

        answer: 1
    },

    {
        question:
            "Two acids have the same concentration. Acid X has a Ka of 1.0 × 10⁻³, while Acid Y has a Ka of 1.0 × 10⁻⁶. Which acid is stronger?",

        choices: [
            "Acid Y",
            "Acid X",
            "Both are equally strong",
            "Neither acid is strong"
        ],

        answer: 1
    },

    {
        question:
            "A 2.0 kg object experiences a constant net force of 10 N to the east. What is its acceleration?",

        choices: [
            "0.20 m/s² east",
            "5.0 m/s² east",
            "8.0 m/s² east",
            "20 m/s² east"
        ],

        answer: 1
    },

    {
        question:
            "A 1,500 kg car moving at 20 m/s collides with a stationary 500 kg car. They lock together after the collision. Assuming external forces are negligible during the collision, what is their approximate final velocity?",

        choices: [
            "5 m/s",
            "10 m/s",
            "15 m/s",
            "20 m/s"
        ],

        answer: 2
    },

    {
        question:
            "At a convergent boundary, an oceanic plate collides with a continental plate. Which combination is most likely?",

        choices: [
            "Continental plate subducts; mid-ocean ridge forms",
            "Oceanic plate subducts; trench, earthquakes, and volcanoes may form",
            "Both plates move apart; new crust forms",
            "Both plates remain stationary; no geological activity occurs"
        ],

        answer: 1
    },

    {
        question:
            "A fish population in a lake initially grows rapidly. As its population approaches the lake's carrying capacity, its growth rate decreases. Which model best represents this population?",

        choices: [
            "Linear growth",
            "Exponential growth indefinitely",
            "Logistic growth",
            "Random growth with no environmental limits"
        ],

        answer: 2
    },

    {
        question:
            "A region experiences one unusually cold week. A student concludes that this proves global climate change is false. Which response is scientifically most appropriate?",

        choices: [
            "Correct, because climate is determined by a single weather event",
            "Correct, because global warming requires every location to become warmer every day",
            "Incorrect, because weather describes short-term conditions while climate describes long-term atmospheric patterns",
            "Incorrect, because weather and climate are exactly the same thing"
        ],

        answer: 2
    }

];

const languageQuestions = [

    {
        question:
            "The teacher's instructions were ambiguous, so the students were unsure about what they were supposed to do. What does ambiguous most likely mean?",

        choices: [
            "Very detailed",
            "Has more than one meaning",
            "Easy to follow",
            "Completely incorrect"
        ],

        answer: 1
    },

    {
        question:
            "Choose the transition signal that best completes the sentence: Online learning provides students with greater flexibility. ______, it may also require students to manage their time effectively.",

        choices: [
            "For example",
            "However",
            "Similarly",
            "Therefore"
        ],

        answer: 1
    },

    {
        question:
            "Which sentence uses an emphasis marker most effectively to strengthen a persuasive argument?",

        choices: [
            "Students should probably consider reading more often.",
            "Students may perhaps benefit from additional reading materials.",
            "Students must have access to reliable learning resources.",
            "Students can sometimes read books during their free time."
        ],

        answer: 2
    },

    {
        question:
            "Which sentence uses a modal verb to express possibility?",

        choices: [
            "Students must submit their papers today.",
            "Students should review before the examination.",
            "Students might receive additional instructions tomorrow.",
            "Students can access the library after class."
        ],

        answer: 2
    },

    {
        question:
            "The old library stood quietly at the end of the hallway. While the other rooms echoed with laughter and conversation, its shelves remained untouched, covered in dust. What does the description of the library most strongly suggest?",

        choices: [
            "The library is the busiest room in the school.",
            "The library is no longer frequently used.",
            "The students are preparing to renovate the library.",
            "The library contains no books."
        ],

        answer: 1
    },

    {
        question:
            "Choosing a college course requires students to consider several factors, including their interests, abilities, and future goals. Although advice from family and friends can be helpful, students should also evaluate their own strengths and research the requirements of different degree programs before making a decision. What is the main idea of the passage?",

        choices: [
            "Students should always follow their family's choice of college course.",
            "Students should consider multiple factors and conduct research when choosing a college course.",
            "Friends provide better advice than career counselors.",
            "Degree programs have similar requirements."
        ],

        answer: 1
    },

    {
        question:
            "Which conjunction best completes the sentence? Maria wanted to pursue engineering, ______ she decided to improve her mathematics skills first.",

        choices: [
            "but",
            "so",
            "or",
            "yet"
        ],

        answer: 1
    },

    {
        question:
            "Which statement is an opinion rather than a factual assertion?",

        choices: [
            "Senior high school students take different academic subjects.",
            "Career guidance programs are offered in many schools.",
            "Choosing a college course is the most stressful decision a student will ever make.",
            "Students can research different degree programs before applying."
        ],

        answer: 2
    },

    {
        question:
            "Which response demonstrates responsible communication when sharing information online?",

        choices: [
            "Sharing information immediately because many people have already posted it.",
            "Reposting information without checking its source.",
            "Checking the credibility and source of information before sharing it.",
            "Changing information slightly to make it more interesting."
        ],

        answer: 2
    },

    {
        question:
            "Many students believe that online sources are always reliable because information can be accessed quickly. However, the availability of information does not guarantee its accuracy. Students must evaluate the credibility of sources, compare information from reliable references, and consider the author's purpose before accepting a claim as true. Which statement best explains how the passage uses language to communicate its main argument?",

        choices: [
            "It mainly uses emotional language to persuade readers to avoid online sources.",
            "It uses a transition signal to introduce a contrasting idea and a modal verb to emphasize the responsibility of students to evaluate information critically.",
            "It uses conjunctions and opinion statements to prove that information found online is always inaccurate.",
            "It uses literary devices and figurative language to make the argument more entertaining."
        ],

        answer: 1
    }

];


/* ============================================================
   PART 2 — INTERESTS & CAREER PREFERENCES
   11 interest areas, 20 non-academic questions.
   Each answer contributes to one interest area.
   ============================================================ */

const interestAreas = {
  ict: { name: "Information & Communication Technology (ICT)", icon: "💻" },
  technical: { name: "Industrial / Technical-Vocational", icon: "🔧" },
  hospitality: { name: "Home Economics / Hospitality", icon: "🍳" },
  agriculture: { name: "Agriculture & Fisheries", icon: "🌾" },
  business: { name: "Business & Entrepreneurship", icon: "💼" },
  health: { name: "Science & Health", icon: "🧪" },
  education: { name: "Education & Communication", icon: "📚" },
  arts: { name: "Arts, Design & Creative Industries", icon: "🎨" },
  sports: { name: "Sports & Physical Activities", icon: "🏃" },
  social: { name: "Social Sciences & Human Services", icon: "👥" },
  environment: { name: "Environment & Natural Resources", icon: "🌱" }
};

const interestQuestions = [
  {
    q: "Which activity would you most willingly spend time learning?",
    options: [
      ["Coding, creating websites, or working with digital tools", "ict"],
      ["Building, repairing, or operating machines and equipment", "technical"],
      ["Cooking, preparing services, or planning guest experiences", "hospitality"],
      ["Growing crops, caring for animals, or working with fisheries", "agriculture"],
      ["Selling products, planning a business, or managing money", "business"],
      ["Investigating health, biology, or scientific processes", "health"],
      ["Teaching, writing, presenting, or explaining ideas", "education"],
      ["Designing, drawing, filming, performing, or making media", "arts"],
      ["Training, exercising, coaching, or organizing physical activities", "sports"],
      ["Listening to people, counseling, or helping with community concerns", "social"],
      ["Studying nature, conservation, or environmental issues", "environment"]
    ]
  },
  {
    q: "If you could choose one type of task for a long-term project, which would you prefer?",
    options: [
      ["Create a digital system that solves a real need", "ict"],
      ["Design or fix a device that must work correctly", "technical"],
      ["Plan a service or experience that people will enjoy", "hospitality"],
      ["Improve how crops, animals, or aquatic resources are managed", "agriculture"],
      ["Develop an idea into a product, service, or small business", "business"],
      ["Find evidence that could improve health or scientific understanding", "health"],
      ["Develop materials that help people learn", "education"],
      ["Turn an idea into an original visual, performance, or media work", "arts"],
      ["Create a training plan to improve physical performance", "sports"],
      ["Develop a project that responds to people's needs", "social"],
      ["Design a project that reduces harm to the environment", "environment"]
    ]
  },
  {
    q: "Which kind of workplace would make you feel most motivated?",
    options: [
      ["A technology company, computer lab, or digital workspace", "ict"],
      ["A workshop, construction site, or technical facility", "technical"],
      ["A hotel, restaurant, travel, or events setting", "hospitality"],
      ["A farm, fishery, agricultural facility, or outdoor site", "agriculture"],
      ["A company office, store, startup, or business setting", "business"],
      ["A hospital, clinic, laboratory, or science facility", "health"],
      ["A school, training center, publishing, or communication setting", "education"],
      ["A studio, production space, gallery, stage, or media workplace", "arts"],
      ["A gym, sports facility, training center, or active outdoor setting", "sports"],
      ["A community center, nonprofit, counseling, or social service setting", "social"],
      ["A conservation site, environmental office, park, or field setting", "environment"]
    ]
  },
  {
    q: "When working with others, which contribution would you most enjoy making?",
    options: [
      ["Set up the digital tools or technical system", "ict"],
      ["Handle construction, equipment, or hands-on tasks", "technical"],
      ["Coordinate services, guests, food, or event details", "hospitality"],
      ["Take care of plants, animals, crops, or natural resources", "agriculture"],
      ["Lead decisions, organize resources, or manage the project", "business"],
      ["Check health, safety, or scientific information", "health"],
      ["Explain instructions and help the group understand", "education"],
      ["Develop the visual, creative, or media side of the project", "arts"],
      ["Plan activities, training, or physical participation", "sports"],
      ["Coordinate people and make sure everyone is supported", "social"],
      ["Make sure the project considers sustainability and conservation", "environment"]
    ]
  },
  {
    q: "What kind of result would make you feel that your work was worthwhile?",
    options: [
      ["A useful digital product or system that people can rely on", "ict"],
      ["A well-built, repaired, or functioning physical solution", "technical"],
      ["A memorable and satisfying experience for customers or guests", "hospitality"],
      ["A productive and sustainable agricultural outcome", "agriculture"],
      ["A successful business idea, product, or organization", "business"],
      ["Better health, safety, or scientific understanding", "health"],
      ["Someone learning a skill or understanding an important idea", "education"],
      ["An original work that communicates or inspires something", "arts"],
      ["Improved fitness, skills, teamwork, or athletic performance", "sports"],
      ["A person or community receiving meaningful support", "social"],
      ["A healthier ecosystem or better protection of natural resources", "environment"]
    ]
  },
  {
    q: "Which type of challenge would you be most curious to investigate?",
    options: [
      ["How can technology make a process faster, safer, or easier?", "ict"],
      ["How can a machine, structure, or system be made to work better?", "technical"],
      ["How can a service make people feel more welcome and satisfied?", "hospitality"],
      ["How can food production or natural resources be improved?", "agriculture"],
      ["How can an idea become financially sustainable and useful?", "business"],
      ["How can a health or scientific problem be better understood?", "health"],
      ["How can information be explained so people learn more effectively?", "education"],
      ["How can an idea be expressed in a creative and engaging way?", "arts"],
      ["How can people improve their physical performance or well-being?", "sports"],
      ["How can people or communities receive better support?", "social"],
      ["How can environmental problems be prevented or reduced?", "environment"]
    ]
  },
  {
    q: "Which skill would you be most excited to use in a future career?",
    options: [
      ["Programming, troubleshooting, or digital problem-solving", "ict"],
      ["Operating tools, constructing, repairing, or technical troubleshooting", "technical"],
      ["Cooking, service, event planning, or customer relations", "hospitality"],
      ["Crop production, animal care, fisheries, or resource management", "agriculture"],
      ["Leadership, marketing, negotiation, or financial planning", "business"],
      ["Research, laboratory work, patient care, or health analysis", "health"],
      ["Teaching, writing, speaking, or facilitating learning", "education"],
      ["Design, photography, music, animation, or creative production", "arts"],
      ["Coaching, training, fitness instruction, or sports management", "sports"],
      ["Counseling, advocacy, communication, or community coordination", "social"],
      ["Environmental monitoring, conservation, or sustainability planning", "environment"]
    ]
  },
  {
    q: "Which type of responsibility sounds most satisfying to you?",
    options: [
      ["Keeping a digital platform or information system working", "ict"],
      ["Keeping equipment, tools, or physical systems safe and functional", "technical"],
      ["Making sure guests, customers, or events are well cared for", "hospitality"],
      ["Managing crops, animals, fisheries, or agricultural activities", "agriculture"],
      ["Managing people, finances, sales, or business operations", "business"],
      ["Protecting health, safety, or the quality of scientific work", "health"],
      ["Helping others follow instructions and achieve learning goals", "education"],
      ["Directing the creative quality and presentation of a project", "arts"],
      ["Managing training sessions, teams, or physical activities", "sports"],
      ["Making sure people receive appropriate support or services", "social"],
      ["Making sure activities follow sustainable and environmental practices", "environment"]
    ]
  },
  {
    q: "Which real-world issue would you most like your future work to address?",
    options: [
      ["Unequal access to useful digital services and technology", "ict"],
      ["Lack of reliable tools, equipment, or technical solutions", "technical"],
      ["Improving tourism, food service, and customer experiences", "hospitality"],
      ["Food security, farming productivity, and rural development", "agriculture"],
      ["Employment, entrepreneurship, and sustainable business growth", "business"],
      ["Disease prevention, health access, and scientific problems", "health"],
      ["Learning gaps, communication difficulties, and access to education", "education"],
      ["Limited opportunities for creative expression and cultural work", "arts"],
      ["Lack of opportunities for exercise, training, and healthy lifestyles", "sports"],
      ["Social inequality, personal difficulties, and community needs", "social"],
      ["Pollution, climate concerns, and loss of natural resources", "environment"]
    ]
  },
  {
    q: "Which type of people or clients would you most enjoy working with?",
    options: [
      ["Users, developers, or people who need digital solutions", "ict"],
      ["Technicians, builders, operators, or people who need practical solutions", "technical"],
      ["Guests, travelers, diners, or customers", "hospitality"],
      ["Farmers, fishers, growers, or food producers", "agriculture"],
      ["Entrepreneurs, employees, customers, or business owners", "business"],
      ["Patients, health workers, researchers, or people seeking health information", "health"],
      ["Students, teachers, readers, or people learning new skills", "education"],
      ["Artists, audiences, clients, or creative teams", "arts"],
      ["Athletes, students, clients, or people working on fitness goals", "sports"],
      ["Families, individuals, or communities needing support", "social"],
      ["Environmental groups, communities, or people affected by ecological issues", "environment"]
    ]
  },
  {
    q: "If you could try one career-related experience, which would you choose?",
    options: [
      ["Build a simple app or website with a technology team", "ict"],
      ["Assist with a repair, construction, or technical project", "technical"],
      ["Shadow staff in a hotel, restaurant, travel, or events business", "hospitality"],
      ["Join a farm, fisheries, or agricultural production activity", "agriculture"],
      ["Help operate a small business or entrepreneurship project", "business"],
      ["Observe work in a clinic, laboratory, or health-related setting", "health"],
      ["Assist a teacher, trainer, or communication professional", "education"],
      ["Join a design, media, music, film, or art production", "arts"],
      ["Assist a coach, trainer, sports event, or fitness program", "sports"],
      ["Participate in counseling, outreach, or community service", "social"],
      ["Join a conservation, clean-up, or environmental monitoring activity", "environment"]
    ]
  },
  {
    q: "What kind of output would you most enjoy creating?",
    options: [
      ["A website, app, database, or digital solution", "ict"],
      ["A working device, structure, repair, or technical product", "technical"],
      ["A well-organized service, meal, event, or guest experience", "hospitality"],
      ["A crop, farm product, fisheries output, or production plan", "agriculture"],
      ["A business plan, product, campaign, or financial strategy", "business"],
      ["A research finding, health plan, experiment, or scientific report", "health"],
      ["A lesson, article, presentation, or learning resource", "education"],
      ["An artwork, video, design, performance, or creative portfolio", "arts"],
      ["A training program, fitness plan, or sports activity", "sports"],
      ["A support plan, community program, or advocacy project", "social"],
      ["A conservation plan, sustainability project, or environmental report", "environment"]
    ]
  },
  {
    q: "Which way of working would suit you best most of the time?",
    options: [
      ["Experimenting with technology and solving problems independently", "ict"],
      ["Working hands-on and seeing a practical result", "technical"],
      ["Staying active while responding to different people and situations", "hospitality"],
      ["Working outdoors and responding to changing natural conditions", "agriculture"],
      ["Making decisions, organizing resources, and taking initiative", "business"],
      ["Following evidence carefully and applying scientific or health knowledge", "health"],
      ["Communicating ideas clearly and helping others understand", "education"],
      ["Exploring ideas freely and turning them into creative work", "arts"],
      ["Staying active, setting goals, and working toward measurable performance", "sports"],
      ["Building relationships and responding to people's needs", "social"],
      ["Observing natural systems and planning for long-term sustainability", "environment"]
    ]
  },
  {
    q: "Which future opportunity sounds most exciting to you?",
    options: [
      ["Creating or joining a technology-based product or service", "ict"],
      ["Becoming highly skilled in a practical or technical profession", "technical"],
      ["Managing or developing a hospitality, food, or tourism career", "hospitality"],
      ["Building a career connected to agriculture, food, or fisheries", "agriculture"],
      ["Starting, leading, or growing an organization or business", "business"],
      ["Working in healthcare, laboratory science, or health research", "health"],
      ["Teaching, training, writing, or working in communication", "education"],
      ["Building a professional career in design, media, or the arts", "arts"],
      ["Coaching, competing, managing sports, or promoting fitness", "sports"],
      ["Working in counseling, social services, or community development", "social"],
      ["Working in conservation, environmental management, or sustainability", "environment"]
    ]
  },
  {
    q: "If you were choosing a college course based on the kind of work you want to do, which description fits you best?",
    options: [
      ["I want a field where I can create and improve digital solutions", "ict"],
      ["I want a field where I can apply practical skills to real equipment or systems", "technical"],
      ["I want a field focused on service, food, travel, or hospitality", "hospitality"],
      ["I want a field connected to food production, farming, fisheries, or natural resources", "agriculture"],
      ["I want a field involving entrepreneurship, management, markets, or finance", "business"],
      ["I want a field involving health, medicine, biology, or scientific investigation", "health"],
      ["I want a field involving teaching, communication, writing, or learning", "education"],
      ["I want a field involving design, media, performance, or creative production", "arts"],
      ["I want a field involving exercise, coaching, sports, or physical development", "sports"],
      ["I want a field involving people, counseling, social support, or community development", "social"],
      ["I want a field involving environmental science, conservation, or sustainability", "environment"]
    ]
  }
];
let selectedSubjects = [];
let currentSubjectIndex = 0;
let currentQuestionIndex = 0;
let userAnswers = {};
let academicScores = {};
let interestAnswers = [];
let interestQuestionIndex = 0;


const subjectMap = {
  math: { name: "Mathematics", icon: "📐", questions: mathQuestions },
  science: { name: "Science", icon: "🧪", questions: scienceQuestions },
  lang: { name: "Language & Communication", icon: "🗣️", questions: languageQuestions }
};

function showSection(id) {
  ["stepSubjectSelection", "stepQuiz", "stepAcademicResults", "stepInterest", "stepResults"].forEach(sectionId => {
    const el = document.getElementById(sectionId);
    if (el) el.classList.toggle("d-none", sectionId !== id);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getSelectedSubjects() {
  return Array.from(document.querySelectorAll(".subject-checkbox:checked"))
    .map(cb => cb.value);
}

function startAssessment() {
  const checked = getSelectedSubjects();

  // On the assessment page, start the quiz.
  if (document.getElementById("stepSubjectSelection")) {
    if (checked.length === 0) {
      let error = document.getElementById("selectionError");
      if (!error) {
        error = document.createElement("div");
        error.id = "selectionError";
        error.className = "text-danger text-center mt-3 fw-semibold";
        document.querySelector("#stepSubjectSelection .text-center:last-child")?.appendChild(error);
      }
      error.textContent = "Please select at least one assessment subject.";
      return;
    }

    const error = document.getElementById("selectionError");
    if (error) error.textContent = "";

    selectedSubjects = checked;
    currentSubjectIndex = 0;
    currentQuestionIndex = 0;
    userAnswers = {};
    selectedSubjects.forEach(subject => { userAnswers[subject] = []; });
    loadSubject();
    showSection("stepQuiz");
    return;
  }

  // Fallback if called from another page.
  window.location.href = "assessment.html";
}

function loadSubject() {
  const subject = selectedSubjects[currentSubjectIndex];
  currentQuestionIndex = 0;
  displayQuestion();
  const badge = document.getElementById("selectedSubjectsBadge");
  if (badge) badge.textContent = `Subject ${currentSubjectIndex + 1} of ${selectedSubjects.length}: ${subjectMap[subject].name}`;
}

function displayQuestion() {
  const subject = selectedSubjects[currentSubjectIndex];
  const questions = subjectMap[subject].questions;
  const question = questions[currentQuestionIndex];
  const container = document.getElementById("quizContainer");
  if (!container || !question) return;

  const previous = userAnswers[subject][currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const isLast = currentQuestionIndex === questions.length - 1;
  const isLastSubject = currentSubjectIndex === selectedSubjects.length - 1;

  container.innerHTML = `
    <div class="mb-3">
      <div class="d-flex justify-content-between align-items-center mb-2">
        <span class="fw-bold text-blue">${subjectMap[subject].name}</span>
        <span class="small text-muted">Question ${currentQuestionIndex + 1} of ${questions.length}</span>
      </div>
      <div class="progress" style="height: 8px;"><div class="progress-bar bg-gold-theme" style="width:${progress}%"></div></div>
    </div>
    <div class="question-card">
      <h4 class="fw-bold mb-4">${question.question}</h4>
      <div id="choices">
        ${question.choices.map((choice, index) => `
          <label class="choice d-block p-3 mb-2 border rounded ${previous === index ? 'selected' : ''}">
            <input class="form-check-input me-2" type="radio" name="answer" value="${index}" ${previous === index ? 'checked' : ''}>
            <strong>${String.fromCharCode(65 + index)}.</strong> ${choice}
          </label>
        `).join('')}
      </div>
    </div>`;

  container.querySelectorAll('.choice').forEach(label => {
    label.addEventListener('click', () => {
      container.querySelectorAll('.choice').forEach(x => x.classList.remove('selected'));
      label.classList.add('selected');
      label.querySelector('input').checked = true;
    });
  });

  const submit = document.querySelector('#stepQuiz button[onclick="submitAssessment()"]');
  if (submit) submit.innerHTML = isLast ? (isLastSubject ? 'View Results <i class="bi bi-check-circle ms-1"></i>' : 'Next Subject <i class="bi bi-arrow-right ms-1"></i>') : 'Next Question <i class="bi bi-arrow-right ms-1"></i>';
}

function submitAssessment() {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected) {
    alert("Please select an answer before continuing.");
    return;
  }

  const subject = selectedSubjects[currentSubjectIndex];
  userAnswers[subject][currentQuestionIndex] = Number(selected.value);
  const questions = subjectMap[subject].questions;

  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    displayQuestion();
    return;
  }

  if (currentSubjectIndex < selectedSubjects.length - 1) {
    currentSubjectIndex++;
    loadSubject();
    return;
  }

  academicScores = calculateAcademicScores();
  displayAcademicResults(academicScores);
  showSection("stepAcademicResults");
}

function goBackToSelection() {
  showSection("stepSubjectSelection");
}

function calculateAcademicScores() {
  const scores = {};
  selectedSubjects.forEach(subject => {
    const questions = subjectMap[subject].questions;
    const answers = userAnswers[subject] || [];
    let correct = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.answer) correct++;
    });
    scores[subject] = {
      correct,
      total: questions.length,
      percentage: (correct / questions.length) * 100
    };
  });
  return scores;
}

function continueToPart2() {
  interestAnswers = [];
  interestQuestionIndex = 0;
  showSection("stepInterest");
  displayInterestQuestion();
}

function displayAcademicResults(scores) {
  const cards = document.getElementById("academicScoreCards");
  const college = document.getElementById("academicCollegeResults");
  if (!cards || !college) return;

  cards.innerHTML = selectedSubjects.map(subject => {
    const s = scores[subject];
    return `
      <div class="col-md-4">
        <div class="score-card">
          <div class="score-icon">${subjectMap[subject].icon}</div>
          <h3>${subjectMap[subject].name}</h3>
          <div class="stars">${starsFor(s.percentage)}</div>
          <div class="score-number">${s.correct}/${s.total}</div>
          <div class="score-percent">${Math.round(s.percentage)}%</div>
          <p class="score-label">${getPerformanceLabel(s.percentage)}</p>
        </div>
      </div>`;
  }).join("");

  /*
   * PART 1 RULE:
   * Course recommendations are based ONLY on academic performance.
   * A subject must reach the minimum academic threshold to contribute
   * any course recommendations. Weak subjects are ignored completely.
   *
   * Example: Math 3/10 (30%) + Language 8/10 (80%)
   * -> Part 1 recommends Language-related courses only.
   */
  const ACADEMIC_COURSE_THRESHOLD = 70;

  const academicMap = {
    math: {
      college: [
        ["BS Mathematics", "Mathematical reasoning, analysis, and problem-solving."],
        ["BS Statistics", "Data analysis, probability, statistical reasoning, and quantitative methods."],
        ["BS Actuarial Science", "Probability, statistics, mathematics, risk analysis, and financial modeling."],
        ["BS Accountancy", "Quantitative reasoning, financial analysis, accounting, and accuracy."],
        ["BS Finance", "Quantitative analysis, financial planning, and decision-making."],
        ["BS Economics", "Mathematical and statistical analysis applied to economic questions."],
        ["BS Computer Science", "Algorithms, logic, computation, and problem-solving."],
        ["BS Data Science", "Statistics, data analysis, computation, and quantitative reasoning."],
        ["BS Information Systems", "Logical analysis, systems thinking, and technology solutions."],
        ["Engineering Programs", "Mathematics is an important foundation for engineering study."]
      ]
    },
    science: {
      college: [
        ["BS Biology", "Life science, scientific investigation, and biological systems."],
        ["BS Chemistry", "Matter, laboratory work, and scientific analysis."],
        ["BS Physics", "Scientific reasoning, measurement, physical systems, and mathematical analysis."],
        ["BS Environmental Science", "Science applied to ecosystems, sustainability, and environmental issues."],
        ["BS Geology", "Earth systems, field investigation, materials, and scientific analysis."],
        ["BS Food Science", "Chemistry, biology, food processing, safety, and laboratory work."],
        ["BS Medical Laboratory Science", "Laboratory testing, biology, chemistry, and health-related scientific work."],
        ["BS Nursing", "Health science, human biology, patient care, and clinical practice."],
        ["BS Pharmacy", "Chemistry, biology, medicines, and health sciences."],
        ["BS Nutrition and Dietetics", "Biology, chemistry, nutrition science, and human health."],
        ["BS Public Health", "Health science, disease prevention, research, and community health."]
      ]
    },
    lang: {
      college: [
        ["BA Communication", "Writing, media, communication, and information dissemination."],
        ["BA English Language", "Language, writing, comprehension, linguistics, and communication."],
        ["BA Journalism", "Writing, research, communication, interviewing, and information analysis."],
        ["BA Literature", "Literary analysis, reading, writing, and interpretation."],
        ["BA Linguistics", "Language structure, communication, meaning, and language research."],
        ["BA Creative Writing", "Creative expression, writing, editing, and literary development."],
        ["Bachelor of Secondary Education", "Teaching, communication, learning, and subject specialization."],
        ["Bachelor of Elementary Education", "Communication, teaching, reading, writing, and child learning."],
        ["BA Broadcasting", "Public communication, media production, speaking, and information delivery."],
        ["BA Public Relations", "Professional communication, writing, media relations, and audience engagement."],
        ["BA Political Science", "Reading, writing, argumentation, public affairs, and communication."],
        ["Bachelor of Library and Information Science", "Reading, information organization, research, and communication."]
      ]
    }
  };

  const eligibleSubjects = selectedSubjects
    .filter(subject => scores[subject].percentage >= ACADEMIC_COURSE_THRESHOLD)
    .sort((a, b) => scores[b].percentage - scores[a].percentage);

  college.innerHTML = "";

  if (eligibleSubjects.length === 0) {
    college.innerHTML = `
      <div class="recommendation-match-note warning">
        <strong>📚 No Part 1 course recommendations yet.</strong>
        <p class="mb-0 mt-2">None of your selected academic areas reached ${ACADEMIC_COURSE_THRESHOLD}%. Lower scores are not used to recommend courses in Part 1. You may continue to Part 2 to explore interest-based pathways.</p>
      </div>`;
    return;
  }

  const addedCourses = new Set();

  eligibleSubjects.forEach((subject, rank) => {
    const data = academicMap[subject];
    if (!data) return;

    data.college.forEach(([name, desc]) => {
      if (!addedCourses.has(name)) {
        college.innerHTML += `
          <div class="recommendation-card">
            <h3>${name}</h3>
            <p>${desc}</p>
            <small class="recommendation-note">Academic match: ${subjectMap[subject].name} (${Math.round(scores[subject].percentage)}%) • Strength #${rank + 1}</small>
          </div>`;
        addedCourses.add(name);
      }
    });
  });
}

function displayInterestQuestion() {
  const question = interestQuestions[interestQuestionIndex];
  const container = document.getElementById("interestQuestionContainer");
  if (!container || !question) return;

  const saved = interestAnswers[interestQuestionIndex];
  const percent = ((interestQuestionIndex + 1) / interestQuestions.length) * 100;

  const progress = document.getElementById("interestProgressBar");
  if (progress) progress.style.width = `${percent}%`;

  container.innerHTML = `
    <div class="interest-question">
      <div class="small text-muted mb-2">
        Question ${interestQuestionIndex + 1} of ${interestQuestions.length}
      </div>
      <h3 class="fw-bold text-blue mb-4">${question.q}</h3>
      <div class="row g-3">
        ${question.options.map((option, index) => `
          <div class="col-md-6">
            <label class="interest-option w-100">
              <input
                type="radio"
                name="interestAnswer"
                value="${index}"
                ${saved === index ? "checked" : ""}
              >
              <span>${String.fromCharCode(65 + index)}. ${option[0]}</span>
            </label>
          </div>
        `).join("")}
      </div>
    </div>
  `;

  const back = document.getElementById("interestBackBtn");
  if (back) back.disabled = interestQuestionIndex === 0;

  const next = document.getElementById("interestNextBtn");
  if (next) {
    next.innerHTML = interestQuestionIndex === interestQuestions.length - 1
      ? `Finish Assessment <i class="bi bi-check-circle ms-1"></i>`
      : `Next <i class="bi bi-arrow-right ms-1"></i>`;
  }
}

function nextInterestQuestion() {
  const selected = document.querySelector('input[name="interestAnswer"]:checked');

  if (!selected) {
    alert("Please select the answer that best describes you.");
    return;
  }

  interestAnswers[interestQuestionIndex] = Number(selected.value);

  if (interestQuestionIndex < interestQuestions.length - 1) {
    interestQuestionIndex++;
    displayInterestQuestion();
    return;
  }

  finishFullAssessment();
}

function previousInterestQuestion() {
  if (interestQuestionIndex === 0) return;

  const selected = document.querySelector('input[name="interestAnswer"]:checked');
  if (selected) interestAnswers[interestQuestionIndex] = Number(selected.value);

  interestQuestionIndex--;
  displayInterestQuestion();
}

function calculateInterestScores() {
  const scores = {};
  Object.keys(interestAreas).forEach(area => scores[area] = 0);

  interestAnswers.forEach((answerIndex, questionIndex) => {
    const question = interestQuestions[questionIndex];
    if (!question || answerIndex === undefined) return;
    const area = question.options[answerIndex][1];
    if (scores[area] !== undefined) scores[area]++;
  });

  return scores;
}

function getTopInterestAreas() {
  const scores = calculateInterestScores();
  return Object.keys(scores)
    .sort((a, b) => scores[b] - scores[a])
    .slice(0, 3)
    .filter(area => scores[area] > 0);
}

function finishFullAssessment() {
  const interestScores = calculateInterestScores();

  // Save the completed assessment so the homepage can stay connected
  // to the student's latest results. No personal identifying information
  // is stored; only assessment selections and scores are saved locally.
  try {
    localStorage.setItem("futureWiseLastAssessment", JSON.stringify({
      selectedSubjects,
      academicScores,
      interestScores,
      completedAt: new Date().toISOString()
    }));
  } catch (error) {
    console.warn("FutureWise could not save the latest assessment locally.", error);
  }

  displayCombinedResults(academicScores, interestScores);
  showSection("stepResults");
}

function displayCombinedResults(scores, interestScores) {
  displayResults(scores);
  displayInterestResults(interestScores);
  displayCombinedRecommendations(scores, interestScores);
}

function displayInterestResults(interestScores) {
  const strength = document.getElementById("strengthResults");
  if (!strength) return;

  const top = getTopInterestAreas();

  const interestCards = top.map((area, index) => `
    <div class="interest-result-card">
      <div class="interest-rank">${index + 1}</div>
      <div>
        <h4>${interestAreas[area].icon} ${interestAreas[area].name}</h4>
        <p>${interestScores[area]} of ${interestQuestions.length} responses aligned with this area.</p>
      </div>
    </div>
  `).join("");

  const academic = Object.keys(academicScores)
    .sort((a, b) => academicScores[b].percentage - academicScores[a].percentage)
    .map(subject => `
      <div class="academic-result-line">
        <strong>${subjectMap[subject].icon} ${subjectMap[subject].name}</strong>
        <span>${academicScores[subject].correct}/${academicScores[subject].total} (${Math.round(academicScores[subject].percentage)}%)</span>
      </div>
    `).join("");

  strength.innerHTML = `
    <div class="mb-4">
      <h4 class="text-blue fw-bold mb-3">❤️ Your Top 3 Interest Areas</h4>
      ${interestCards || `<p class="text-muted">Complete Part 2 to see your interest profile.</p>`}
    </div>
    <div>
      <h4 class="text-blue fw-bold mb-3">📚 Your Academic Strengths</h4>
      ${academic}
    </div>
  `;
}

function starsFor(pct) {
  const count = pct >= 90 ? 5 : pct >= 80 ? 4 : pct >= 70 ? 3 : pct >= 60 ? 2 : 1;
  return '★'.repeat(count) + '☆'.repeat(5 - count);
}

function displayResults(scores) {
  const summary = document.getElementById("starsSummary");

  if (summary) {
    summary.innerHTML = selectedSubjects.map(subject => {
      const s = scores[subject];
      return `
        <div class="col-md-4">
          <div class="score-card">
            <div class="score-icon">${subjectMap[subject].icon}</div>
            <h3>${subjectMap[subject].name}</h3>
            <div class="stars">${starsFor(s.percentage)}</div>
            <div class="score-number">${s.correct}/${s.total}</div>
            <div class="score-percent">${Math.round(s.percentage)}%</div>
            <p class="score-label">${getPerformanceLabel(s.percentage)}</p>
          </div>
        </div>
      `;
    }).join("");
  }

  displayOverallStrengths(scores);
}

function getPerformanceLabel(percentage) {
  if (percentage >= 90) return "Excellent performance";
  if (percentage >= 80) return "Very good performance";
  if (percentage >= 70) return "Good performance";
  if (percentage >= 60) return "Developing performance";
  return "Needs more practice";
}

function displayOverallStrengths(scores) {
  const container = document.getElementById("strengthResults");
  if (!container) return;

  const ranked = selectedSubjects.slice().sort(
    (a, b) => scores[b].percentage - scores[a].percentage
  );

  container.innerHTML = ranked.map((subject, index) => {
    const score = scores[subject];
    let description;

    if (index === 0) {
      description = "This is your strongest selected assessment area.";
    } else if (score.percentage >= 70) {
      description = "You demonstrated a good level of performance in this area.";
    } else if (score.percentage >= 50) {
      description = "You demonstrated a developing level of performance in this area.";
    } else {
      description = "This may be an area where additional practice could be helpful.";
    }

    return `
      <div class="strength-item">
        <strong>${subjectMap[subject].icon} ${subjectMap[subject].name}</strong>
        <p>Score: ${score.correct}/${score.total} (${Math.round(score.percentage)}%)</p>
        <span>${description}</span>
      </div>
    `;
  }).join("");
}

function displayCombinedRecommendations(scores, interestScores) {
  const college = document.getElementById("collegeResults");
  const tvl = document.getElementById("tvlResults");
  const careers = document.getElementById("careerResults");
  const scholarships = document.getElementById("scholarshipResults");
  if (!college || !tvl || !careers || !scholarships) return;

  const topAcademic = selectedSubjects
    .slice()
    .sort((a, b) => scores[b].percentage - scores[a].percentage)[0];

  const rankedAreas = Object.keys(interestScores)
    .sort((a, b) => interestScores[b] - interestScores[a]);

  const meaningfulAreas = rankedAreas
    .filter(area => interestScores[area] > 0)
    .slice(0, 3);

  const recommendations = {
    ict: {
      college: [
        ["BS Information Technology", "Computing, software, networking, and digital technology."],
        ["BS Computer Science", "Programming, algorithms, computational thinking, and software development."],
        ["BS Information Systems", "Technology solutions, systems analysis, and organizational needs."],
        ["BS Data Science", "Data analysis, statistics, computing, and evidence-based decision-making."],
        ["BS Cybersecurity / Information Security", "Information protection, security concepts, networks, and risk management."],
        ["BS Multimedia Arts", "Digital media, interactive content, design, and technology-supported creative work."]
      ],
      tvl: ["ICT Programming", "Computer Systems Servicing", "Animation", "Illustration", "Computer Programming", "Technical Drafting"],
      careers: ["Software Developer", "Web Developer", "Systems Analyst", "IT Specialist", "Data Analyst", "Cybersecurity Analyst", "UI/UX Designer", "Network Administrator"],
      scholarships: ["DOST-SEI scholarships (especially for eligible science and technology programs)", "CHED scholarship and financial assistance programs", "University-based scholarships for technology and computing programs"]
    },
    technical: {
      college: [
        ["BS Mechanical Engineering", "Mechanical systems, design, manufacturing, and technical problem-solving."],
        ["BS Electrical Engineering", "Electrical systems, electronics, power, and engineering analysis."],
        ["BS Civil Engineering", "Construction, structures, design, and applied mathematics."],
        ["BS Electronics Engineering", "Electronics, communications, circuits, and technical systems."],
        ["BS Industrial Engineering", "Systems, processes, productivity, operations, and optimization."],
        ["BS Mechatronics Engineering", "Mechanical, electronic, control, and automated systems."]
      ],
      tvl: ["Electrical Installation and Maintenance", "Automotive Servicing", "Welding", "Shielded Metal Arc Welding", "Carpentry", "Electronics Products Assembly and Servicing"],
      careers: ["Engineer", "Automotive Technician", "Electrician", "Machinist", "Welder", "Electronics Technician", "CAD Technician", "Maintenance Technician"],
      scholarships: ["CHED scholarship and financial assistance programs", "University engineering scholarships", "LGU and private foundation scholarships for technical and engineering students"]
    },
    hospitality: {
      college: [
        ["BS Hospitality Management", "Hospitality operations, service, tourism, and guest experience."],
        ["BS Tourism Management", "Tourism planning, travel services, destination management, and hospitality."],
        ["BS Culinary Management", "Food preparation, culinary operations, kitchen management, and food service."],
        ["BS Hotel and Restaurant Management", "Hotel operations, food service, customer experience, and management."],
        ["BS Event Management", "Event planning, coordination, marketing, and guest experience."],
        ["BS Travel Management", "Travel services, tourism operations, itinerary planning, and customer service."]
      ],
      tvl: ["Cookery", "Bread and Pastry Production", "Food and Beverage Services", "Housekeeping", "Front Office Services", "Tour Guiding Services"],
      careers: ["Chef", "Hotel Staff", "Tourism Officer", "Event Coordinator", "Restaurant Supervisor", "Travel Consultant", "Guest Relations Officer", "Baker"],
      scholarships: ["CHED scholarship and financial assistance programs", "Hospitality and tourism school scholarships", "LGU and private foundation scholarships for hospitality students"]
    },
    agriculture: {
      college: [
        ["BS Agriculture", "Crop production, agricultural science, farm management, and sustainable agriculture."],
        ["BS Fisheries", "Aquatic resources, fisheries, aquaculture, and sustainability."],
        ["BS Animal Science", "Animal production, care, nutrition, and agricultural systems."],
        ["BS Agricultural Engineering", "Engineering applications in farm machinery, irrigation, and agricultural systems."],
        ["BS Forestry", "Forests, biodiversity, conservation, and natural resource management."],
        ["BS Agribusiness", "Agriculture combined with management, marketing, entrepreneurship, and finance."]
      ],
      tvl: ["Agricultural Crop Production", "Animal Production", "Aquaculture", "Organic Agriculture Production", "Food Processing", "Horticulture"],
      careers: ["Agriculturist", "Fisheries Technician", "Animal Production Specialist", "Forester", "Agricultural Entrepreneur", "Farm Manager", "Aquaculture Technician", "Agricultural Extension Worker"],
      scholarships: ["CHED scholarship and financial assistance programs", "DA-related student support opportunities when available", "University and LGU scholarships for agriculture and natural-resource programs"]
    },
    business: {
      college: [
        ["BS Entrepreneurship", "Starting, managing, and developing business ventures."],
        ["BS Business Administration", "Management, marketing, operations, and business decisions."],
        ["BS Accountancy", "Accounting, financial reporting, auditing, and quantitative work."],
        ["BS Marketing Management", "Marketing strategy, consumer behavior, branding, and sales."],
        ["BS Financial Management", "Finance, investment, budgeting, and financial decision-making."],
        ["BS Human Resource Management", "People management, recruitment, training, and workplace development."],
        ["BS Office Administration", "Office systems, business communication, records, and administrative work."],
        ["BS Supply Chain Management", "Procurement, logistics, inventory, operations, and distribution."]
      ],
      tvl: ["Entrepreneurship", "Retail Services", "Business-related ICT", "Sales Promotion", "Customer Services", "Visual Merchandising"],
      careers: ["Entrepreneur", "Marketing Specialist", "Business Manager", "Accountant", "Financial Analyst", "Human Resource Specialist", "Sales Executive", "Operations Coordinator"],
      scholarships: ["CHED scholarship and financial assistance programs", "University business-school scholarships", "LGU and private foundation scholarships for business students"]
    },
    health: {
      college: [
        ["BS Nursing", "Patient care, health sciences, nursing practice, and clinical work."],
        ["BS Biology", "Life sciences, biological systems, and scientific investigation."],
        ["BS Medical Laboratory Science", "Laboratory testing and health-related scientific work."],
        ["BS Pharmacy", "Chemistry, medicines, pharmaceutical science, and patient support."],
        ["BS Medical Technology", "Laboratory science, diagnostic testing, and clinical laboratory work."],
        ["BS Psychology", "Human behavior, mental processes, assessment, and people-centered work."],
        ["BS Nutrition and Dietetics", "Nutrition science, food, health, and wellness."],
        ["BS Public Health", "Disease prevention, health programs, research, and community health."]
      ],
      tvl: ["Health Care Services", "Caregiving", "Beauty Care", "Massage Therapy", "Medical-related support services"],
      careers: ["Nurse", "Medical Laboratory Scientist", "Biologist", "Pharmacist", "Nutritionist-Dietitian", "Psychology Professional", "Public Health Worker", "Health Services Worker"],
      scholarships: ["DOST-SEI scholarships for eligible science and health-related programs", "CHED scholarship and financial assistance programs", "University and hospital-affiliated scholarships when available"]
    },
    education: {
      college: [
        ["Bachelor of Secondary Education", "Teaching, learning, classroom practice, and subject specialization."],
        ["Bachelor of Elementary Education", "Elementary education, child development, and teaching."],
        ["BA Communication", "Communication, media, writing, and public information."],
        ["BA English Language", "Language, literature, writing, comprehension, and communication."],
        ["BA Journalism", "Writing, research, reporting, and information analysis."],
        ["Bachelor of Early Childhood Education", "Early learning, child development, and teaching."],
        ["Bachelor of Special Needs Education", "Inclusive education, learner support, and specialized teaching."]
      ],
      tvl: ["Creative Industries", "Media and Information Services", "Animation", "Visual Graphic Design"],
      careers: ["Teacher", "Writer", "Journalist", "Communication Specialist", "School Coordinator", "Training Facilitator", "Educational Content Developer"],
      scholarships: ["CHED scholarship and financial assistance programs", "University education scholarships", "LGU and private foundation scholarships for future educators"]
    },
    arts: {
      college: [
        ["Bachelor of Fine Arts", "Visual arts, creative practice, and artistic production."],
        ["BA Multimedia Arts", "Digital media, animation, design, photography, and multimedia."],
        ["BA Communication", "Media, creative communication, writing, and content."],
        ["BA Film", "Film production, storytelling, directing, editing, and media."],
        ["BA Advertising Arts", "Creative communication, visual concepts, campaigns, and media."],
        ["BA Interior Design", "Space planning, visual design, materials, and creative problem-solving."],
        ["BA Fashion Design", "Fashion concepts, design development, textiles, and creative production."]
      ],
      tvl: ["Animation", "Visual Graphic Design", "Arts-related Creative Industries", "Illustration", "Photography", "Creative Digital Media"],
      careers: ["Graphic Designer", "Animator", "Photographer", "Multimedia Artist", "Illustrator", "Video Editor", "Art Director", "Content Creator"],
      scholarships: ["CHED scholarship and financial assistance programs", "University arts and creative-industry scholarships", "Private foundation scholarships for creative students"]
    },
    sports: {
      college: [
        ["Bachelor of Physical Education", "Physical education, movement, fitness, and teaching."],
        ["Sports Science-related Programs", "Exercise, human performance, fitness, and sports."],
        ["Sports Management-related Programs", "Organization and management of sports activities."],
        ["BS Exercise and Sports Sciences", "Exercise science, physical performance, training, and wellness."],
        ["BS Recreation Management", "Recreation programs, leisure, wellness, and community activities."]
      ],
      tvl: ["Sports-related programs", "Recreation and Fitness Services", "Fitness Services", "Sports Officiating"],
      careers: ["Coach", "Fitness Trainer", "Sports Instructor", "Sports Coordinator", "Athletic Trainer", "Recreation Officer", "Sports Program Assistant"],
      scholarships: ["CHED scholarship and financial assistance programs", "University athletic scholarships", "LGU and sports-organization student support programs"]
    },
    social: {
      college: [
        ["BA Psychology", "Human behavior, psychological concepts, and people-centered work."],
        ["BA Sociology", "Society, communities, social relationships, and social issues."],
        ["BS Social Work", "Community support, social services, and helping professions."],
        ["BA Political Science", "Government, public affairs, policy, argumentation, and civic life."],
        ["BA Anthropology", "Culture, communities, human societies, and social research."],
        ["BA Development Studies", "Community development, social issues, policy, and development work."],
        ["BA Criminology", "Crime, justice systems, investigation, and public safety."]
      ],
      tvl: ["Community-related service programs", "Caregiving", "Community Development Services"],
      careers: ["Social Worker", "Psychology Professional", "Community Worker", "Human Services Worker", "Research Assistant", "Policy Assistant", "Community Development Officer"],
      scholarships: ["CHED scholarship and financial assistance programs", "University social-science scholarships", "LGU and private foundation scholarships for community-service programs"]
    },
    environment: {
      college: [
        ["BS Environmental Science", "Ecosystems, sustainability, conservation, and environmental issues."],
        ["BS Forestry", "Forests, biodiversity, conservation, and natural resources."],
        ["BS Biology", "Organisms, ecosystems, and scientific study of life."],
        ["BS Environmental Engineering", "Environmental systems, pollution control, and engineering solutions."],
        ["BS Marine Biology", "Marine organisms, ecosystems, conservation, and aquatic research."],
        ["BS Geology", "Earth systems, natural resources, field investigation, and scientific analysis."],
        ["BS Renewable Energy Engineering", "Energy systems, sustainability, and renewable technologies."]
      ],
      tvl: ["Agriculture-related programs", "Environmental and natural resource-related programs", "Organic Agriculture Production"],
      careers: ["Environmental Scientist", "Forester", "Conservation Worker", "Environmental Officer", "Marine Biologist", "Geologist", "Sustainability Officer"],
      scholarships: ["DOST-SEI scholarships for eligible science and environmental programs", "CHED scholarship and financial assistance programs", "University, LGU, and environmental organization scholarships"]
    }
  };

  const addedC = new Set();
  const addedT = new Set();
  const addedCareer = new Set();

  // Official scholarship and financial-assistance links for the final Part 2 section.
  // These are direct links to the providers so students can verify current requirements and deadlines.
  const scholarshipLinks = [
    {
      name: "CHED Merit Scholarship Program (CMSP)",
      description: "Official CHED scholarship information for eligible academically talented Filipino students.",
      url: "https://legacy.ched.gov.ph/merit-scholarship/"
    },
    {
      name: "CHED Scholarships & Financial Assistance",
      description: "Official CHED page listing scholarship and financial-assistance programs.",
      url: "https://legacy.ched.gov.ph/forms/"
    },
    {
      name: "UniFAST – Tertiary Education Subsidy (TES)",
      description: "Government financial assistance information under the Universal Access to Quality Tertiary Education programs.",
      url: "https://unifast.gov.ph/"
    },
    {
      name: "DOST-SEI Undergraduate Scholarship",
      description: "Official DOST-SEI scholarship information for eligible science and technology pathways.",
      url: "https://science-scholarships.ph/"
    },
    {
      name: "SM Foundation College Scholarship",
      description: "Official SM Foundation scholarship application portal; availability and application periods may vary.",
      url: "https://scholarship.sm-foundation.org/ApplicationForm"
    },
    {
      name: "Megaworld Foundation Scholarship",
      description: "Official Megaworld Foundation scholarship program and application information.",
      url: "https://www.megaworldfoundation.com/scholarship_program"
    }
  ];

  college.innerHTML = "";
  tvl.innerHTML = "";
  careers.innerHTML = "";
  scholarships.innerHTML = "";

  if (meaningfulAreas.length === 0) {
    college.innerHTML = `<div class="recommendation-match-note warning"><strong>No interest-based course recommendations yet.</strong><p class="mb-0 mt-2">Complete Part 2 to build an interest profile.</p></div>`;
    return;
  }

  meaningfulAreas.forEach((area, idx) => {
    const data = recommendations[area];
    if (!data) return;

    data.college.forEach(([name, desc]) => {
      if (!addedC.has(name)) {
        college.innerHTML += `
          <div class="recommendation-card">
            <h3>${name}</h3>
            <p>${desc}</p>
            <small class="recommendation-note">Interest match: ${interestAreas[area].name} • Interest rank #${idx + 1}</small>
          </div>`;
        addedC.add(name);
      }
    });

    data.careers.forEach(name => {
      if (!addedCareer.has(name)) {
        careers.innerHTML += `
          <div class="recommendation-card compact-card">
            <h3>💼 ${name}</h3>
            <p>A career direction connected to your ${interestAreas[area].name.toLowerCase()} interest profile.</p>
          </div>`;
        addedCareer.add(name);
      }
    });

    data.tvl.forEach(name => {
      if (!addedT.has(name)) {
        tvl.innerHTML += `
          <div class="recommendation-card compact-card">
            <h3>🛠️ ${name}</h3>
            <p>A practical TVL / TechPro pathway related to your ${interestAreas[area].name.toLowerCase()} interest profile.</p>
          </div>`;
        addedT.add(name);
      }
    });

  });

  // Show the verified scholarship links once at the end of the Part 2 results.
  scholarships.innerHTML = scholarshipLinks.map(item => `
    <div class="recommendation-card compact-card">
      <h3>💰 ${item.name}</h3>
      <p>${item.description}</p>
      <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-gold btn-sm mt-2">
        Visit Official Scholarship Page ↗
      </a>
    </div>
  `).join("");

  if (topAcademic) {
    const academicNote = document.createElement("div");
    academicNote.className = "recommendation-match-note";
    academicNote.innerHTML = `
      <strong>📚 Academic alignment:</strong>
      Your strongest Part 1 area was ${subjectMap[topAcademic].name}
      (${Math.round(scores[topAcademic].percentage)}%). Use this together with your Part 2 interest results when comparing the courses above.`;
    college.prepend(academicNote);
  }
}

function showImprovement() {
  const input = document.getElementById("desiredCourse");
  const container = document.getElementById("improvementResults");

  if (!input || !container) return;

  const course = input.value.trim();

  if (!course) {
    container.innerHTML = `
      <div class="improvement-box warning">
        Please enter a college course first.
      </div>
    `;
    return;
  }

  const courseLower = course.toLowerCase();
  let advice = [];

  if (
    courseLower.includes("computer") ||
    courseLower.includes("information technology") ||
    courseLower.includes("it")
  ) {
    advice = [
      "Strengthen Mathematics, especially algebra and logical problem-solving.",
      "Continue developing Science and analytical reasoning skills.",
      "Practice programming, computational thinking, and technology-related activities."
    ];
  } else if (
    courseLower.includes("engineering") ||
    courseLower.includes("civil") ||
    courseLower.includes("mechanical") ||
    courseLower.includes("electrical")
  ) {
    advice = [
      "Strengthen Mathematics and problem-solving skills.",
      "Review Science concepts, especially physics and measurement.",
      "Practice analytical and logical reasoning."
    ];
  } else if (
    courseLower.includes("nursing") ||
    courseLower.includes("medical") ||
    courseLower.includes("biology") ||
    courseLower.includes("medicine")
  ) {
    advice = [
      "Strengthen Science, especially biology and chemistry concepts.",
      "Continue developing reading comprehension and careful reasoning.",
      "Practice accurate interpretation of scientific information."
    ];
  } else if (
    courseLower.includes("account") ||
    courseLower.includes("business") ||
    courseLower.includes("finance")
  ) {
    advice = [
      "Strengthen Mathematics and quantitative reasoning.",
      "Develop accuracy, organization, and analytical skills.",
      "Continue improving Language & Communication for reports and presentations."
    ];
  } else if (
    courseLower.includes("education") ||
    courseLower.includes("communication") ||
    courseLower.includes("english") ||
    courseLower.includes("journal")
  ) {
    advice = [
      "Strengthen Language & Communication, especially writing and comprehension.",
      "Practice clear speaking, presentation, and critical reading.",
      "Develop confidence in explaining ideas to different audiences."
    ];
  } else {
    advice = [
      "Review the assessment area where you received your lowest score.",
      "Practice skills commonly required by your target course.",
      "Research the admission requirements and curriculum of the colleges you are considering.",
      "Discuss your target course with a teacher or guidance counselor."
    ];
  }

  container.innerHTML = `
    <div class="improvement-box">
      <h5>Suggested Areas for Improvement</h5>
      <p class="mb-2"><strong>Target Course:</strong> ${course}</p>
      <ul>
        ${advice.map(item => `<li>${item}</li>`).join("")}
      </ul>
    </div>
  `;
}

function evaluateTargetCourse() {
  // Kept for compatibility with older versions of the assessment page.
  showImprovement();
}




function loadSavedAssessmentFromHomepage() {
  if (window.location.hash !== "#saved-results") return false;

  try {
    const saved = JSON.parse(localStorage.getItem("futureWiseLastAssessment") || "null");
    if (!saved || !saved.selectedSubjects || !saved.academicScores || !saved.interestScores) return false;

    selectedSubjects = saved.selectedSubjects;
    academicScores = saved.academicScores;
    interestAnswers = [];
    interestQuestionIndex = 0;

    displayCombinedResults(academicScores, saved.interestScores);
    showSection("stepResults");
    return true;
  } catch (error) {
    console.warn("FutureWise could not restore the saved assessment.", error);
    return false;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadSavedAssessmentFromHomepage();
});

function restartAssessment() {
  selectedSubjects = []; currentSubjectIndex = 0; currentQuestionIndex = 0; userAnswers = {}; academicScores = {}; interestAnswers = []; interestQuestionIndex = 0;
  document.querySelectorAll('.subject-checkbox').forEach(cb => cb.checked = false);
  showSection('stepSubjectSelection');
}