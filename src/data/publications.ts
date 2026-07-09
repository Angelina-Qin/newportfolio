// 你的真实论文清单（可随时补充/修改）
export const publications = [
  {
    type: "Conference",
    status: "Accepted, to appear",
    title:
      "Labeling Negative Comments on Online News May Enhance Reader Experience: A Group-Based Experiment",
    authors: "Qin, M. (2nd author)",
    venue: "NordiCHI 2026: Nordic Conference on Human-Computer Interaction",
    year: 2026,
    contribution:
      "My role: contributed to the literature review, data analysis, and writing.",
    // no link/pdf/abstract yet, not published; awaiting go-ahead to share abstract
    citedBy: 0
  },
  {
    type: "Demo",
    status: "Accepted, to appear",
    title: "Real-Time Multimodal Arousal Detection and its Haptic Regulation",
    authors: "Anuragi, D.; Qin, M.; Surakka, V.; Raisamo, R.",
    venue: "NordiCHI 2026: Nordic Conference on Human-Computer Interaction",
    year: 2026,
    contribution:
      "My role: I originated the concept and led the design of this demo; co-author D. Anuragi implemented the prototype.",
    // no link/pdf/abstract yet, not published; awaiting go-ahead to share abstract
    citedBy: 0
  },
  {
    type: "Conference",
    openAccess: false,
    title:
      "A Social Compass: Guiding Self-Regulation in High-Arousal Moments with Ubiquitous Sensing",
    authors: "Qin, M.; Anuragi, D.",
    venue:
      "UbiComp Companion '25: ACM International Joint Conference on Pervasive and Ubiquitous Computing",
    year: 2025,
    link: "https://dl.acm.org/doi/10.1145/3714394.3750591",
    award: "People's Choice Student Challenge Award, UbiComp 2025",
    contribution:
      "My role: first author. The concept was mine, and I led the research, programming, and writing; co-author D. Anuragi built the VR demonstration.",
    video: "EuQw5mr0eEk", // YouTube ID, SocialCompass Demo Video
    abstract:
      "Social interactions often trigger physiological stress responses that can impair communication effectiveness and well-being. This paper presents SocialCompass, a proof-of-concept framework that leverages the large multimodal foundation model, ImageBind, to detect high-stress social moments and provide timely self-regulation support. Unlike existing emotion recognition systems that focus on classification accuracy, SocialCompass prioritizes real-world deployment and user autonomy. Our core innovation lies in a novel zero-shot inference strategy that bridges multiple public datasets without requiring direct cross-dataset alignment. We train a social context classifier on high-frequency Inertial Measurement Unit (IMU) and audio features from the ExtraSensory dataset, while developing an arousal inference model that uses ImageBind's cross-modal semantic alignment to compare real-time sensor embeddings with conceptual text anchors derived from psychological concepts. This dual-model approach allows us to identify High-Arousal Social Events (HASE) in real-world settings. We propose a three-phase implementation strategy culminating in a demonstration on smart glasses. Initial feasibility analysis shows promising potential for real-world deployment while highlighting key technical and ethical considerations for socially-aware computing systems.",
    citedBy: 0
  },
  {
    type: "Article",
    openAccess: true,
    title:
      "Foggy fun: an exploration of mid-air gestural interaction with a fogscreen by children with attention-deficits",
    authors:
      "Remizova, V.; Špakov, O.; Sand, A.; Lylykangas, J.; Qin, M.; Helminen, T. M.; Takio, F.; Rantanen, K.; Kylliäinen, A.; Surakka, V.; Gizatdinova, Y.",
    venue: "Behaviour & Information Technology",
    year: 2025,
    link: "https://www.tandfonline.com/doi/full/10.1080/0144929X.2025.2469661",
    citedBy: 1,
    contribution: "My role: contributed to data analysis.",
    abstract:
      "This study represents the first exploration of active gaming based on mid-air gestural interaction with a fogscreen, focusing on its feasibility for children with attention deficits. The aim was to evaluate the practicality and effectiveness of gestural interaction in two interaction scenarios involving translation and selection of objects projected on the fog, through the assessment of interaction performance and subjective opinions. The proposed approach was investigated in a custom-designed puzzle-based game Tangram. Eighteen novice participants, namely, children with confirmed attention deficits or attention-deficit/hyperactivity disorder (ADHD) played the game collaboratively in pairs during six sessions. Our results demonstrated that gestural interaction with the fogscreen in the Tangram game was not only enjoyable and engaging but also facilitated effective task completion, as shown by an 81% game success rate. During object translation, the participants typically needed two to three attempts to accurately relocate a puzzle piece, with 42% of translation movements adjusting the pieces’ placements. Further, in object selection, it was underlined the importance of visual feedback corresponding to the user’s hand position for effective interaction. These insights underscore the potential implications of gestural interfaces for fogscreen interaction in active gaming for children.",
  },
  {
    type: "Conference",
    openAccess: true,
    title: "Exploring Mid-air Gestural Interfaces for Children with ADHD",
    authors:
      "Remizova, V.; Sand, A.; Špakov, O.; Lylykangas, J.; Qin, M.; Helminen, T.; Takio, F.; Rantanen, K.; Kylliäinen, A.; Surakka, V.; Kuosmanen, J.",
    venue: "MIG '23: ACM SIGGRAPH Conference on Motion, Interaction and Games",
    year: 2023,
    link: "https://dl.acm.org/doi/10.1145/3623264.3624449",
    contribution: "My role: contributed to data analysis.",
    abstract:
      "This study examined the potential of mid-air gestural interfaces specifically designed for children, in the context of full-body motion control for confirmation actions while interacting with large conventional displays. The study aimed to investigate gestures for confirmation actions that were feasible for children, including children with challenges in behavior control and impulse inhibition. Two scenarios were explored, namely, active full-body gesturing (i.e., jumps and jumps with hands up) and freezing (i.e., motionless posture) to identify their usability for confirmation actions. Experiment I involved 11 typically developing children playing the game to check the system’s general functionality and robustness. Experiment II involved 18 children with attention deficit/hyperactivity disorder (ADHD) to evaluate a prolonged usage of the confirmation gestures in six game sessions. The results showed that the children were able to interact with the large conventional displays with consistent accuracy and responsiveness in both active gesturing and freezing scenarios. Moreover, jumps with rising hands were significantly preferred as an interaction input method. Further, there was no significant difference in ratings of the difficulty of freezing gesture, and children successfully repeated the predefined postures. The findings provided insights into the functionality and suitability of mid-air gestural interfaces for confirmation actions in interactive applications targeted to children.",
    citedBy: 4
  },
  {
    type: "Thesis",
    openAccess: true,
    title:
      "GAZE IN REMOTE COLLABORATION: WHERE DO PEOPLE LOOK DURING VIDEO CONFERENCE IN THE CONTEXT OF STUDENT COLLABORATION",
    authors: "Qin, M.",
    venue: "Tampere University",
    year: 2023,
    pdf: "https://trepo.tuni.fi/bitstream/handle/10024/147524/QinMoshi.pdf?sequence=2",
    abstract:
      "This thesis presents the results of an exploratory pilot study designed to investigate where people look during remote collaboration using video conferencing. The main research question was 'Where do people look at when having a remote meeting?' The experiment involved six participants recruited from Tampere University, who were divided into two groups of three. Each round of the experiment consisted of two tasks. In the first task, participants were given questions to discuss, and they were encouraged to talk freely. In the second task, participants were asked to solve puzzles on the Mural board. Gaze information was collected using myGaze software and ETU driver, with the duration of participants' gaze on areas of interest calculated using Excel formulas. The study found that the majority of the time during the video conference was spent looking at the videos of other participants. There was no significant difference in the mean duration of looking at their own video images between the two genders. The study also found that when working on platforms that indicate the cursor locations of users, looking at the videos of others was not necessarily needed, as hearing was more relied on. This study served as an exploratory pilot study, providing insights into where people look during remote collaboration using video conferencing. The findings of this study can be used to guide future research in this area and inform the design of video conferencing tools that can better support remote collaboration. Overall, this study contributes to a growing body of research on remote collaboration and provides insights into the role of gaze during video conferencing.",
    citedBy: 1
  },
  {
    type: "Thesis",
    openAccess: true,
    title: "The Impact of Influencers on Young People’s Buying Decisions",
    authors: "Qin, M.",
    venue: "Oulu University of Applied Sciences",
    year: 2020,
    pdf: "https://www.theseus.fi/handle/10024/341226",
    abstract:
      "Influencer marketing is growing at a fast rate and more companies are collaborating with influencers to promote their products and services. The purpose of this thesis is to investigate the conception of influencer and influencer marketing, as well as get a better understanding of how influencer marketing is affecting young people’s buying decisions. The literature review part discusses the concept and impacts of influencers, the composition of influencer marketing and the characteristics of young people. A sample size of 135 participants completed a quantitative survey regarding their attitudes towards influencers and their online buying behaviors. The results of the research show that young people do get a huge impact from influencers. Most respondents have followed their recommendations. People follow influencers mainly because it’s a source of entertainment or information. The study has also given us a better understanding of the behaviors of young people.",
    citedBy: 15
  }
];
