
import { Level } from '../types';

export const CURRICULUM: Level[] = [
  {
    id: 1,
    title: "Foundations",
    unlocked: true,
    lessons: [
      {
        id: "ai-hierarchy",
        title: "The AI Universe",
        subtitle: "AI vs. Machine Learning vs. Deep Learning",
        shortDescription: [
          "Artificial Intelligence is the broad umbrella.",
          "Machine Learning is a subset that learns from data.",
          "Deep Learning is a specialized subset using neural networks."
        ],
        eli5: "Think of it like Russian Nesting Dolls. AI is the big doll. Open it, and you find Machine Learning. Open that, and you find Deep Learning.",
        analogy: {
          title: "The Vehicle Hierarchy",
          description: "AI is 'Vehicles'. ML is 'Cars'. Deep Learning is 'Ferraris'. All Ferraris are cars, and all cars are vehicles, but not all vehicles are Ferraris."
        },
        visualType: 'diagram',
        animationPrompt: "Concentric circles zooming in",
        takeaway: "Deep Learning is just a specific, powerful type of Machine Learning.",
        quiz: {
          question: "Is all Machine Learning also Deep Learning?",
          options: [
            { text: "Yes, they are the same thing", isCorrect: false },
            { text: "No, Deep Learning is a subset of ML", isCorrect: true }
          ],
          explanation: "ML includes many algorithms (like Decision Trees) that are not Deep Learning."
        }
      },
      {
        id: "intro",
        title: "What is Machine Learning?",
        subtitle: "Teaching machines to spot patterns",
        shortDescription: [
          "Regular apps follow strict instructions (Rules).",
          "Machine Learning apps discover patterns (Data).",
          "It's like teaching a baby what a dog looks like by showing examples."
        ],
        eli5: "Instead of telling a computer exactly what to do, we show it thousands of examples and let it figure out the 'secret patterns' itself.",
        analogy: {
          title: "The Recipe Maker",
          description: "Traditional coding is a rigid recipe. ML is a chef who tastes 1,000 soups and learns to adjust the salt on their own."
        },
        visualType: 'diagram',
        animationPrompt: "Traditional programming vs ML flow",
        takeaway: "ML is about learning from examples, not following pre-written rules.",
        quiz: {
          question: "How does ML differ from traditional programming?",
          options: [
            { text: "It learns from data instead of fixed rules", isCorrect: true },
            { text: "It is just faster math", isCorrect: false }
          ],
          explanation: "In traditional coding, humans write the rules. In ML, the computer discovers them from data."
        }
      },
      {
        id: "train-test",
        title: "Train vs. Test Data",
        subtitle: "The Golden Rule of ML",
        shortDescription: [
          "You must hide some data from the model while teaching it.",
          "Training Data: Used to learn.",
          "Testing Data: Used to evaluate performance.",
          "Prevents cheating (memorization)."
        ],
        eli5: "Imagine studying for a math test. The textbook problems are your 'Training Data'. The actual exam questions (which you haven't seen before) are the 'Testing Data'.",
        analogy: {
          title: "The Pop Quiz",
          description: "If a teacher gives you the exact questions and answers to the exam beforehand, getting 100% doesn't mean you learned anything. It just means you memorized."
        },
        visualType: 'interactive',
        animationPrompt: "Splitting a pile of dots into two groups",
        takeaway: "Never test your model on the same data it learned from.",
        quiz: {
          question: "Why do we split data into Train and Test sets?",
          options: [
            { text: "To make the dataset smaller", isCorrect: false },
            { text: "To fairly evaluate if the model actually learned", isCorrect: true }
          ],
          explanation: "Testing on unseen data is the only way to know if the model generalizes to the real world."
        }
      },
      {
        id: "eda",
        title: "Exploratory Data Analysis (EDA)",
        subtitle: "Becoming a Data Detective",
        shortDescription: [
          "Understanding your data before modeling.",
          "Finding outliers, missing values, and patterns.",
          "Using charts (histograms, scatter plots) to see the shape of data."
        ],
        eli5: "Before you cook a giant meal, you check your ingredients. Are the eggs rotten? Is the milk sour? Do you have enough flour? That is EDA.",
        analogy: {
          title: "The Doctor's Checkup",
          description: "A doctor doesn't just guess a diagnosis. They take your temperature, check your pulse, and look at your history first."
        },
        visualType: 'diagram',
        animationPrompt: "Charts popping up and highlighting weird points",
        takeaway: "EDA helps you understand the quality and shape of your data.",
        quiz: {
          question: "What is an 'outlier'?",
          options: [
            { text: "A data point that is very different from the rest", isCorrect: true },
            { text: "A missing value", isCorrect: false }
          ],
          explanation: "Outliers are extreme values (like a house costing $5 when others are $500k) that can confuse the model."
        }
      }
    ]
  },
  {
    id: 2,
    title: "Data Preparation",
    unlocked: true,
    lessons: [
      {
        id: "featurization",
        title: "Featurization",
        subtitle: "Picking the best clues",
        shortDescription: [
          "Turning raw data into 'clues' the computer understands.",
          "Transforming text or dates into useful numbers.",
          "Good features make hard problems easy to solve."
        ],
        eli5: "If you want to guess if it's raining, 'Is the sky grey?' is a better clue than 'What color are my socks?' Picking 'Is the sky grey?' is featurization.",
        analogy: {
          title: "The Sifter",
          description: "Filtering a mountain of sand to find the gold nuggets that actually tell you something important."
        },
        visualType: 'diagram',
        animationPrompt: "Raw data turning into clear icons",
        takeaway: "Featurization is choosing which clues matter most.",
        quiz: {
          question: "What is the goal of featurization?",
          options: [
            { text: "To make the computer faster", isCorrect: false },
            { text: "To turn raw data into useful input features", isCorrect: true }
          ],
          explanation: "Models need clean, numerical, and relevant 'clues' to learn effectively."
        }
      },
      {
        id: "multi-collinearity",
        title: "Multi-Collinearity",
        subtitle: "Stop repeating yourself!",
        shortDescription: [
          "When two features tell exactly the same story.",
          "It confuses the model because it doesn't know who to trust.",
          "Example: A car's 'Age' and 'Year of Manufacture'."
        ],
        eli5: "Imagine two people telling you the exact same gossip at the same time. You can't hear either of them clearly. That's multi-collinearity!",
        analogy: {
          title: "The Echo Chamber",
          description: "Shouting in a room where every word repeats, making it impossible to understand the original message."
        },
        visualType: 'diagram',
        animationPrompt: "Two identical icons overlapping",
        takeaway: "Redundant clues confuse the model's math.",
        quiz: {
          question: "Why is multi-collinearity bad?",
          options: [
            { text: "It takes up too much space", isCorrect: false },
            { text: "It makes it hard to tell which feature is truly important", isCorrect: true }
          ],
          explanation: "If features are too similar, the model can't determine their individual impact."
        }
      }
    ]
  },
  {
    id: 3,
    title: "Basic Algorithms",
    unlocked: true,
    lessons: [
      {
        id: "linear-reg",
        title: "Linear Regression",
        subtitle: "Drawing the Trend",
        shortDescription: [
          "Drawing a straight line through messy data.",
          "Used to predict numbers (like house prices).",
          "The 'Line of Best Fit' minimizes the distance to all points."
        ],
        eli5: "If 1 scoop of ice cream costs $2 and 2 scoops cost $4, you can draw a line to guess that 3 scoops will cost $6!",
        analogy: {
          title: "The Best-Fit String",
          description: "Imagine pins on a board. You try to lay a straight piece of string so it's as close to all the pins as possible."
        },
        visualType: 'interactive',
        animationPrompt: "A line rotating to match dots",
        takeaway: "Linear Regression predicts continuous numbers using a line.",
        quiz: {
          question: "What does Linear Regression predict?",
          options: [
            { text: "A number (like price)", isCorrect: true },
            { text: "A category (like cat or dog)", isCorrect: false }
          ],
          explanation: "Regression is for continuous values."
        }
      },
      {
        id: "logistic-reg",
        title: "Logistic Regression",
        subtitle: "The Probable Choice",
        shortDescription: [
          "Predicting the probability of an event (Yes/No).",
          "Uses an 'S-curve' to map data between 0 and 1.",
          "Despite the name, it's actually for classification!"
        ],
        eli5: "It's like a scale that tells you how likely it is to rain. If the scale is above 50%, you take an umbrella.",
        analogy: {
          title: "The Dimmer Switch",
          description: "Unlike a regular switch, this one slides smoothly from 'Definite No' to 'Definite Yes'."
        },
        visualType: 'interactive',
        animationPrompt: "S-curve appearing on a graph",
        takeaway: "Logistic Regression calculates the probability of a category.",
        quiz: {
          question: "What is Logistic Regression mainly used for?",
          options: [
            { text: "Predicting stock prices", isCorrect: false },
            { text: "Sorting things into two groups", isCorrect: true }
          ],
          explanation: "It predicts the probability of an input belonging to a specific class."
        }
      },
      {
        id: "rl-intro",
        title: "Reinforcement Learning",
        subtitle: "Learning through Rewards",
        shortDescription: [
          "The computer learns by trial and error.",
          "It gets 'points' for good moves and loses them for bad ones.",
          "Commonly used for training robots and game AI."
        ],
        eli5: "Imagine you're playing a video game where you don't know the rules. You try different buttons; if you get a high score, you remember what you did. If you die, you don't do that again!",
        analogy: {
          title: "Training a Puppy",
          description: "You don't tell a dog exactly how to move its muscles. You just give it a treat when it sits. The dog eventually learns that 'Sitting' = 'Yummy Snack'."
        },
        visualType: 'interactive',
        animationPrompt: "An agent interacting with an environment and receiving rewards",
        takeaway: "Reinforcement Learning uses rewards to guide behavior.",
        quiz: {
          question: "How does an agent know it's doing a good job in Reinforcement Learning?",
          options: [
            { text: "It receives a positive reward signal", isCorrect: true },
            { text: "The human programmer tells it 'Great job!' in the code", isCorrect: false }
          ],
          explanation: "In RL, the 'Reward' is the numerical feedback the model uses to judge its success."
        }
      }
    ]
  },
  {
    id: 4,
    title: "Advanced Classifiers",
    unlocked: true,
    lessons: [
      {
        id: "decision-trees",
        title: "Decision Trees",
        subtitle: "The Flowchart Brain",
        shortDescription: [
          "Splitting data based on Yes/No questions.",
          "Each branch leads to a more specific group.",
          "Intuitive and easy for humans to read."
        ],
        eli5: "It's like a game of 20 Questions. 'Is it an animal?' -> Yes. 'Does it bark?' -> Yes. Conclusion: It's a dog!",
        analogy: {
          title: "The Sorting Hat",
          description: "A series of internal questions that decide exactly where each data point belongs."
        },
        visualType: 'interactive',
        animationPrompt: "Flowchart expanding downwards",
        takeaway: "Decision trees sort data through a series of logical steps.",
        quiz: {
          question: "How do Decision Trees make choices?",
          options: [
            { text: "By using complex calculus", isCorrect: false },
            { text: "By splitting data based on features", isCorrect: true }
          ],
          explanation: "They use 'Information Gain' to pick the best questions to ask first."
        }
      },
      {
        id: "knn",
        title: "K-Nearest Neighbors (KNN)",
        subtitle: "Birds of a Feather",
        shortDescription: [
          "Look at your 'K' closest neighbors to decide who you are.",
          "If most of your neighbors are 'Red', you are probably 'Red'.",
          "Simple, but needs to calculate distance to every single point."
        ],
        eli5: "If you move to a new neighborhood and everyone near you wears a blue hat, you'll probably get a blue hat too!",
        analogy: {
          title: "The Voting Booth",
          description: "Finding your 5 closest friends and taking a vote on what to eat for dinner."
        },
        visualType: 'interactive',
        animationPrompt: "A point finding its neighbors",
        takeaway: "KNN classifies points based on their closest neighbors.",
        quiz: {
          question: "What happens if you change the value of 'K'?",
          options: [
            { text: "The computer gets louder", isCorrect: false },
            { text: "The boundary between groups gets smoother or more wiggly", isCorrect: true }
          ],
          explanation: "A small K is sensitive to noise; a large K averages out the patterns."
        }
      },
      {
        id: "knn-k-value",
        title: "Choosing the K Value",
        subtitle: "Small vs. Large Crowds",
        shortDescription: [
          "K=1 is very sensitive and can get easily distracted by outliers.",
          "K=Large is more stable but might ignore smaller, important groups.",
          "Finding the 'Goldilocks' K is key for accuracy."
        ],
        eli5: "If you ask just 1 person for advice, you might get a weird answer. If you ask everyone in the world, you get a generic one. You want a group that is just the right size.",
        analogy: {
          title: "The Party Noise",
          description: "In a noisy room, listening to only the person right next to you might be too specific (K=1). Listening to everyone in the room creates a blur (K=Large). You want to listen to a small group nearby."
        },
        visualType: 'interactive',
        animationPrompt: "Toggling K values and watching the decision boundary change",
        takeaway: "Low K values are wiggly (overfit); High K values are smooth (underfit).",
        quiz: {
          question: "What happens to the decision boundary as K increases?",
          options: [
            { text: "It becomes smoother and less sensitive to noise", isCorrect: true },
            { text: "It becomes more wiggly and complex", isCorrect: false }
          ],
          explanation: "Higher K values average out the 'noise', creating a smoother boundary."
        }
      },
      {
        id: "svm",
        title: "Support Vector Machines (SVM)",
        subtitle: "The Wide Divider",
        shortDescription: [
          "Finding the widest possible 'road' between two groups.",
          "Uses 'Support Vectors' (the closest points) to set the path.",
          "Great at finding clear gaps in messy data."
        ],
        eli5: "Imagine two teams on a field. SVM is a referee drawing a line right in the middle, leaving as much space as possible for both sides.",
        analogy: {
          title: "The No-Man's Land",
          description: "Creating a giant buffer zone between two groups to minimize mistakes."
        },
        visualType: 'diagram',
        animationPrompt: "A thick line pushing two groups apart",
        takeaway: "SVM maximizes the margin between different categories.",
        quiz: {
          question: "What does SVM try to maximize?",
          options: [
            { text: "The number of features", isCorrect: false },
            { text: "The margin (gap) between classes", isCorrect: true }
          ],
          explanation: "The larger the gap, the more confident the model is in its sorting."
        }
      },
      {
        id: "naive-bayes",
        title: "Naive Bayes",
        subtitle: "The Independent Detective",
        shortDescription: [
          "Calculates probability based on separate clues.",
          "It's 'Naive' because it assumes clues don't affect each other.",
          "Incredible for spam filters and sorting text."
        ],
        eli5: "If you see something red, round, and crunchy, you check the probability of 'Apple' for each clue separately and multiply them together!",
        analogy: {
          title: "The Checklist Detective",
          description: "A detective who checks off 'Wears a hat', 'Has a cane', and 'Walks fast' independently to guess a suspect's identity."
        },
        visualType: 'interactive',
        animationPrompt: "Probability bars filling up for different categories",
        takeaway: "Naive Bayes combines independent probabilities to make a guess.",
        quiz: {
          question: "Why is this algorithm called 'Naive'?",
          options: [
            { text: "Because it's a beginner algorithm", isCorrect: false },
            { text: "Because it assumes all features are independent", isCorrect: true }
          ],
          explanation: "It ignores the fact that features (like 'Rainy' and 'Cloudy') are often related."
        }
      }
    ]
  },
  {
    id: 5,
    title: "Clustering & Patterns",
    unlocked: true,
    lessons: [
      {
        id: "kmeans",
        title: "K-Means Clustering",
        subtitle: "The Neighborhood Maker",
        shortDescription: [
          "Unsupervised: Finds groups without being told the answers.",
          "Points move toward the center of their group.",
          "The 'K' is the number of groups you think exist."
        ],
        eli5: "Imagine 100 kids in a park. You pick 3 colors and tell everyone to follow the closest person with a colored flag.",
        analogy: {
          title: "The Group Magnet",
          description: "Centroids act like magnets, pulling nearby data points into their orbit."
        },
        visualType: 'interactive',
        animationPrompt: "Points jumping into groups",
        takeaway: "K-Means clusters data by proximity to centers.",
        quiz: {
          question: "Is K-Means supervised or unsupervised?",
          options: [
            { text: "Supervised (we have labels)", isCorrect: false },
            { text: "Unsupervised (no labels)", isCorrect: true }
          ],
          explanation: "It discovers structure on its own without knowing the 'true' answers."
        }
      },
      {
        id: "hierarchical-clustering",
        title: "Hierarchical Clustering",
        subtitle: "The Family Tree",
        shortDescription: [
          "Grouping things into a tree-like structure.",
          "Start with every point alone, then slowly merge them.",
          "Used when you don't know how many groups you want yet."
        ],
        eli5: "First, you group your siblings, then your cousins, then your whole extended family until everyone is in one giant tree.",
        analogy: {
          title: "The Nesting Dolls",
          description: "Smaller groups fitting perfectly inside larger ones, creating a layered hierarchy."
        },
        visualType: 'diagram',
        animationPrompt: "Lines connecting dots into a tree",
        takeaway: "Hierarchical clustering builds a tree of relationships.",
        quiz: {
          question: "What is the tree diagram called in this algorithm?",
          options: [
            { text: "A Dendrogram", isCorrect: true },
            { text: "A Histogram", isCorrect: false }
          ],
          explanation: "A dendrogram shows exactly how each point merged into its cluster."
        }
      }
    ]
  },
  {
    id: 6,
    title: "Complexity & Tuning",
    unlocked: true,
    lessons: [
      {
        id: "regularization",
        title: "Regularization (Lasso & Ridge)",
        subtitle: "Don't Overthink It",
        shortDescription: [
          "Punishing the model for being too complex.",
          "Lasso (L1) can delete useless features entirely.",
          "Ridge (L2) just makes the features smaller and quieter."
        ],
        eli5: "It's like a coach who tells you, 'If you want to win, you have to use fewer complicated moves and stick to the basics.'",
        analogy: {
          title: "The Packing Limit",
          description: "A weight limit on your suitcase that forces you to leave behind the stuff you probably won't use."
        },
        visualType: 'interactive',
        animationPrompt: "Bars shrinking in height",
        takeaway: "Regularization prevents overfitting by penalizing complexity.",
        quiz: {
          question: "What does Lasso (L1) specifically do?",
          options: [
            { text: "It makes every feature important", isCorrect: false },
            { text: "It can shrink coefficients all the way to zero", isCorrect: true }
          ],
          explanation: "Lasso is great for feature selection because it ignores the irrelevant stuff."
        }
      },
      {
        id: "pca",
        title: "PCA (Dimension Reduction)",
        subtitle: "Squashing the Data",
        shortDescription: [
          "Collapsing 100 features into 2 or 3 'Super Features'.",
          "Keeping the most important variation while losing detail.",
          "Like taking a 3D photo and making it a 2D shadow."
        ],
        eli5: "Imagine looking at a complex LEGO castle and just drawing its simple silhouette on paper. You lose the bricks but keep the shape.",
        analogy: {
          title: "The Summary",
          description: "Summarizing a 500-page book into 2 pages of bullet points."
        },
        visualType: 'interactive',
        animationPrompt: "Points collapsing onto a line",
        takeaway: "PCA simplifies complex data while keeping the main patterns.",
        quiz: {
          question: "When should you use PCA?",
          options: [
            { text: "When you have too many features and it's getting confusing", isCorrect: true },
            { text: "When you have very little data", isCorrect: false }
          ],
          explanation: "PCA helps deal with the 'Curse of Dimensionality'."
        }
      }
    ]
  },
  {
    id: 7,
    title: "Teamwork (Ensemble)",
    unlocked: true,
    lessons: [
      {
        id: "ensemble-basics",
        title: "Random Forests & Bagging",
        subtitle: "Wisdom of the Crowd",
        shortDescription: [
          "Training 100 decision trees on different bits of data.",
          "They all vote on the final answer.",
          "Harder to fool than a single tree."
        ],
        eli5: "Instead of asking 1 person for advice, you ask 100 people and go with whatever most of them say.",
        analogy: {
          title: "The Jury",
          description: "A group of different people listening to the same evidence and deciding together."
        },
        visualType: 'diagram',
        animationPrompt: "Many tiny trees glowing",
        takeaway: "Ensembles combine weak models into a strong one.",
        quiz: {
          question: "Why is a Random Forest better than one Decision Tree?",
          options: [
            { text: "It's faster", isCorrect: false },
            { text: "It reduces errors and doesn't 'overfit' as easily", isCorrect: true }
          ],
          explanation: "By averaging many viewpoints, it cancels out the individual mistakes of each tree."
        }
      },
      {
        id: "gradient-boost",
        title: "Gradient Boosting",
        subtitle: "Learning from Failure",
        shortDescription: [
          "Models are built one after another.",
          "The second model tries to fix the mistakes of the first.",
          "XGBoost is a famous, powerful version of this."
        ],
        eli5: "It's like writing an essay. You write a draft, see what's wrong, and the next draft only focuses on fixing those specific errors.",
        analogy: {
          title: "The Master Class",
          description: "A teacher watching you practice and only correcting the tiny mistakes you keep making."
        },
        visualType: 'diagram',
        animationPrompt: "Steps getting smaller and more precise",
        takeaway: "Boosting builds models sequentially to fix past errors.",
        quiz: {
          question: "How does Boosting differ from Bagging (Random Forest)?",
          options: [
            { text: "Boosting builds models one by one; Bagging builds them all at once", isCorrect: true },
            { text: "Boosting is only for images", isCorrect: false }
          ],
          explanation: "In Boosting, each new model relies on the previous one's failure."
        }
      },
      {
        id: "stacking",
        title: "Stacking (Meta-Learning)",
        subtitle: "The Master Judge",
        shortDescription: [
          "Combining different types of models (experts).",
          "A 'Meta-Model' (The Judge) learns which expert to trust.",
          "Often provides the highest accuracy in competitions."
        ],
        eli5: "Imagine having a baker, a butcher, and a gardener. You hire a manager who learns that the baker is best for dessert, and the butcher for dinner. The manager is the Meta-Model!",
        analogy: {
          title: "The Grand Council",
          description: "A team of diverse specialists and a final leader who knows each specialist's strengths and weaknesses."
        },
        visualType: 'interactive',
        animationPrompt: "Layers of models feeding into one final model",
        takeaway: "Stacking uses a model to combine other models' predictions.",
        quiz: {
          question: "What makes Stacking different from Bagging or Boosting?",
          options: [
            { text: "It uses a second-layer model to learn from the first layer", isCorrect: true },
            { text: "It only uses one type of model", isCorrect: false }
          ],
          explanation: "Stacking introduces a meta-model that learns how to best weight the predictions of different base models."
        }
      }
    ]
  },
  {
    id: 8,
    title: "Neural Networks & Deep Learning",
    unlocked: true,
    lessons: [
      {
        id: "neural-net-structure",
        title: "The Artificial Brain",
        subtitle: "Layers of simple decisions",
        shortDescription: [
          "Modeled after the human brain (but simpler).",
          "Input Layer receives data.",
          "Hidden Layers process features.",
          "Output Layer makes the final guess."
        ],
        eli5: "Think of it like a corporate hierarchy. Junior employees (Input) see raw data. They report to Managers (Hidden Layers) who look for patterns. The CEO (Output) makes the final decision.",
        analogy: {
          title: "The Assembly Line",
          description: "Raw materials go in. Station 1 cuts. Station 2 welds. Station 3 paints. Final product comes out. If the stations work together perfectly, you get a car."
        },
        visualType: 'interactive',
        animationPrompt: "Signals pulsing through a network of nodes",
        takeaway: "Neural Networks solve complex problems by passing data through layers of 'neurons'.",
        quiz: {
          question: "What is the middle part of a Neural Network called?",
          options: [
            { text: "The Mystery Zone", isCorrect: false },
            { text: "The Hidden Layers", isCorrect: true }
          ],
          explanation: "They are 'hidden' because we don't directly see their inputs or outputs, unlike the first and last layers."
        }
      },
      {
        id: "deep-learning",
        title: "Deep Learning",
        subtitle: "Going Deeper",
        shortDescription: [
          "Deep Learning is a Neural Network with MANY hidden layers.",
          "Early layers see simple edges; deep layers see complex shapes.",
          "It powers modern AI like Face ID, ChatGPT, and Self-Driving Cars."
        ],
        eli5: "Imagine a game of 'Telephone' with 100 people. But instead of the message getting messed up, each person adds a tiny detail to make it clearer. By the end, the message is perfect.",
        analogy: {
          title: "The Recognition Tower",
          description: "Floor 1 checks for straight lines. Floor 10 checks for circles. Floor 50 checks for eyes. Floor 100 checks for 'Is this my Grandma?'"
        },
        visualType: 'interactive',
        animationPrompt: "Layers stacking up deeper and deeper",
        takeaway: "Deep Learning uses many layers to understand extremely complex data.",
        quiz: {
          question: "What makes 'Deep Learning' deep?",
          options: [
            { text: "It uses deep philosophical concepts", isCorrect: false },
            { text: "It has many hidden layers stacked together", isCorrect: true }
          ],
          explanation: "The 'depth' refers to the number of layers in the network."
        }
      },
      {
        id: "forward-prop",
        title: "Forward Propagation",
        subtitle: "The Flow of Logic",
        shortDescription: [
          "Data flowing from input to output.",
          "Each step multiplies inputs by weights.",
          "The 'Guess' appears at the end."
        ],
        eli5: "Think of a bucket brigade. Each person adds their own bit of info before passing the bucket along.",
        analogy: {
          title: "The Water Pipe Flow",
          description: "Data flows like water through valves (weights) to reach the prediction gauge."
        },
        visualType: 'interactive',
        animationPrompt: "Glow moving left to right",
        takeaway: "Forward prop is the 'thinking' phase of a neural network.",
        quiz: {
          question: "What determines the output of a neuron?",
          options: [
            { text: "The weights and inputs", isCorrect: true },
            { text: "The color of the icon", isCorrect: false }
          ],
          explanation: "Inputs are scaled by weights to calculate a signal."
        }
      },
      {
        id: "loss-function",
        title: "Loss Function",
        subtitle: "Measuring the Error",
        shortDescription: [
          "It calculates exactly how wrong the guess was.",
          "High loss means a big mistake; low loss means we're close.",
          "The 'Scoreboard' of the learning process."
        ],
        eli5: "Imagine you're playing darts. The Loss Function is a ruler that measures how many inches you missed the bullseye by. You want that measurement to be zero!",
        analogy: {
          title: "The Archer's Distance",
          description: "An archer looking at where their arrow landed compared to the target center. The distance is the 'Loss'."
        },
        visualType: 'interactive',
        animationPrompt: "Measuring distance to a target",
        takeaway: "The Loss Function turns 'being wrong' into a number we can minimize.",
        quiz: {
          question: "What is the primary goal of the Loss Function?",
          options: [
            { text: "To make the model run faster", isCorrect: false },
            { text: "To quantify how far the prediction is from the actual truth", isCorrect: true },
            { text: "To store the user's password", isCorrect: false }
          ],
          explanation: "The loss value tells the model exactly how much it needs to adjust its weights."
        }
      },
      {
        id: "backward-prop",
        title: "Backward Propagation",
        subtitle: "Assigning Blame",
        shortDescription: [
          "Calculating how much each weight contributed to an error.",
          "Correcting the weights from the end back to the start.",
          "This is how the model 'learns' what to change."
        ],
        eli5: "If your cake tastes bad, you look back at the ingredients. Was it too much salt? Not enough sugar? You fix the specific problem for next time.",
        analogy: {
          title: "The Grumpy Boss",
          description: "Finding exactly who in the office messed up the report and telling them to fix it."
        },
        visualType: 'interactive',
        animationPrompt: "Glow moving right to left",
        takeaway: "Backprop sends error signals back to update the model.",
        quiz: {
          question: "Where does Backprop start?",
          options: [
            { text: "At the error/output", isCorrect: true },
            { text: "At the input", isCorrect: false }
          ],
          explanation: "It works backwards from the mistake to find the cause."
        }
      }
    ]
  },
  {
    id: 9,
    title: "Performance Metrics",
    unlocked: true,
    lessons: [
      {
        id: "gain-lift",
        title: "Gain & Lift Charts",
        subtitle: "Are we doing better than random?",
        shortDescription: [
          "Visualizing how much better our model is than just guessing.",
          "Lift tells you the multiplier of your success.",
          "Crucial for marketing and business decisions."
        ],
        eli5: "If you call 100 people at random, you might sell 2 pizzas. If you use ML, you call 100 people and sell 20. Your 'Lift' is 10x!",
        analogy: {
          title: "The Super Filter",
          description: "Instead of searching the whole beach for shells, you use a map that shows exactly where 90% of them are hidden."
        },
        visualType: 'diagram',
        animationPrompt: "A curve rising high above a diagonal line",
        takeaway: "Gain and Lift measure the 'utility' of your model.",
        quiz: {
          question: "What does 'Lift' tell you?",
          options: [
            { text: "How much better your model is than random guessing", isCorrect: true },
            { text: "How fast the model runs", isCorrect: false }
          ],
          explanation: "It quantifies the improvement provided by the predictive model."
        }
      }
    ]
  },
  {
    id: 10,
    title: "Generative AI",
    unlocked: true,
    lessons: [
      {
        id: "tokenization",
        title: "Tokenization",
        subtitle: "Language into Lego Blocks",
        shortDescription: [
          "Computers can't read text; they only read numbers.",
          "Tokenization breaks sentences into chunks (tokens).",
          "Common words stay whole, rare words get split up."
        ],
        eli5: "Imagine trying to teach a dog English. You wouldn't read a novel; you'd teach simple commands like 'Sit' or 'Stay'. Tokenization chops a book into these simple, bite-sized commands.",
        analogy: {
          title: "The Scrabble Tiles",
          description: "You can't put a whole sentence on the board at once. You have to break it down into individual tiles to form meaning."
        },
        visualType: 'interactive',
        animationPrompt: "Text splitting into colorful blocks with numbers",
        takeaway: "Tokenization turns text into numerical IDs for the model.",
        quiz: {
          question: "What is a 'token' in an LLM?",
          options: [
            { text: "A cryptocurrency coin", isCorrect: false },
            { text: "A chunk of text (word or part of a word)", isCorrect: true }
          ],
          explanation: "Tokens are the fundamental units of text that the model processes, often roughly 0.75 of a word."
        }
      },
      {
        id: "embeddings",
        title: "Embeddings",
        subtitle: "Meaning as Coordinates",
        shortDescription: [
          "Converting tokens into lists of numbers (vectors).",
          "Similar concepts live closer together in space.",
          "Allows math on meaning: King - Man + Woman = Queen."
        ],
        eli5: "Imagine a giant grocery store. Apples are near oranges, but far from shampoo. Embeddings are just the aisle numbers that tell the computer where to find the meaning of a word.",
        analogy: {
          title: "The Library Map",
          description: "Books about 'Space' are on the 5th floor. Books about 'Cooking' are on the 1st floor. The floor number is the embedding that groups similar ideas."
        },
        visualType: 'interactive',
        animationPrompt: "Words floating in 3D space grouping together",
        takeaway: "Embeddings translate semantic meaning into geometric space.",
        quiz: {
          question: "Why are embeddings useful?",
          options: [
            { text: "They encrypt data so no one can read it", isCorrect: false },
            { text: "They place similar concepts close together mathematically", isCorrect: true }
          ],
          explanation: "This geometric closeness allows the model to understand relationships between words."
        }
      },
      {
        id: "llms",
        title: "Large Language Models",
        subtitle: "The Prediction Engine",
        shortDescription: [
          "LLMs don't 'know' facts; they predict probabilities.",
          "They look at previous tokens to guess the next one.",
          "Trained on massive amounts of internet text."
        ],
        eli5: "It's like the autocomplete on your phone, but it read the entire internet and has a really, really big brain.",
        analogy: {
          title: "The Parrot in the Library",
          description: "A parrot lives in a library and has heard every book read aloud. If you say 'Once upon a...', it squawks 'Time!' not because it understands stories, but because it's heard that pattern a million times."
        },
        visualType: 'interactive',
        animationPrompt: "A machine typing and guessing the next word with percentages",
        takeaway: "LLMs generate text by predicting the most likely next token.",
        quiz: {
          question: "What is an LLM fundamentally doing?",
          options: [
            { text: "Thinking like a human brain", isCorrect: false },
            { text: "Predicting the next token based on probability", isCorrect: true }
          ],
          explanation: "It calculates the statistical likelihood of every possible next word and picks one."
        }
      },
      {
        id: "vector-db",
        title: "Vector Databases & RAG",
        subtitle: "The Long-Term Memory",
        shortDescription: [
          "LLMs have limited short-term memory (context window).",
          "Vector DBs store embeddings to retrieve info later.",
          "Enables 'talking to your documents' (RAG)."
        ],
        eli5: "An LLM is a genius with amnesia. A Vector Database is a notebook where it writes things down so it can look them up later when you ask a question.",
        analogy: {
          title: "The Librarian's Index",
          description: "The library (LLM) has millions of books, but the Librarian (Vector DB) knows exactly which specific page has the answer to 'How do I fix my sink?' so you don't have to read every book."
        },
        visualType: 'interactive',
        animationPrompt: "Searching a database for the closest match",
        takeaway: "Vector DBs allow LLMs to access specific, private data efficiently.",
        quiz: {
          question: "What does a Vector Database search for?",
          options: [
            { text: "Exact keyword matches only", isCorrect: false },
            { text: "Concepts that are semantically similar", isCorrect: true }
          ],
          explanation: "It searches for vectors that are close in space, meaning they have similar meaning, even if words differ."
        }
      }
    ]
  }
];
