# Adventurer's Call - What is your character?
**Adventurer's Call** - is a personality quiz used to determine which character you are from king, knight, sheriff, and wizard. This personality test consists of 12 questions, each of the characters have 4 questions based on.

### Built Using
**Adventurer's Call** is built using these technologies:
<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="30" alt="javascript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="30" alt="html5 logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="30" alt="css3 logo"  />
  <img width="12" />
  <img src="https://www.svgrepo.com/show/374118/tailwind.svg" height="30" alt="tailwind logo"  />
</div>

## Installation
1. Clone the repository
```
git clone https://github.com/Ayessaaa/Adventurers-Call.git
```
2. Go to the directory
```
cd Adventurers-Call
```
3. Install dependencies
```
npm install
```
4. Start the Tailwind CLI build process
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

## Features

- **Home Page**
- **Quiz Page** - this is where the user would take the 12 question test to determine their character
- **Tie Breakers Page** - this page is used when the user's character is more than one (is tie) based on the result so this breaks the tie
- **Character Page** - this page shows which character you are and also the description of that character, adjectives that describes that character, and also the jobs suited for that character

### Charaters
#### King
The **King** is a natural leader, exuding authority, wisdom, and responsibility. They are decisive, organized, and protective, always considering the big picture when making choices. Kings inspire loyalty and respect, balancing strength with compassion to create a sense of stability. They are excellent at motivating others and fostering teamwork but may sometimes feel the weight of their role. Their ability to maintain focus on long-term goals makes them effective in guiding groups or organizations toward success.

#### Knight
The **Knight** is a brave and loyal defender, always ready to leap into action when the situation demands it. They are courageous, determined, and dependable, thriving in high-pressure environments. Knights are motivated by a deep sense of duty and justice, making them fierce protectors of those in need. While their focus on action can sometimes make them impulsive, their steadfast dedication ensures they see their tasks through to completion. They are the champions of any cause they believe in, fighting with honor and resilience.

#### Sheriff
The **Sheriff** is a just and practical peacekeeper, ensuring fairness and balance in all they do. They are reliable, observant, and methodical, excelling in roles where structure and rules are essential. Sheriffs value honesty and integrity, working tirelessly to resolve disputes and maintain order in their community. While their focus on rules can sometimes make them rigid, their steadfastness ensures stability and trust. They are the ones people rely on to mediate conflicts and create a safe environment.

#### Wizard
The **Wizard** is a brilliant and curious thinker, driven by a thirst for knowledge and innovation. They are creative, analytical, and insightful, often finding solutions where others see only obstacles. Wizards excel in situations that require strategy, long-term planning, or inventive problem-solving. While they may prefer to work behind the scenes, their wisdom and intellect are indispensable in shaping outcomes. Sometimes, they can be overly introspective, but their forward-thinking nature ensures they stay ahead of the game.

### Results Calculation
The results are calculated based on which character they got the highest point.

These points are:
- **Strongly Disagree** - 1
- **Disagree** - 2
- **Neutral** - 3
- **Agree** - 4
- **Strongly Agree** - 5

#### Questions
1. **King** = Questions: 2, 6, 10
2. **Knight** = Questions: 3, 7, 11
3. **Sheriff** = Questions: 4, 8, 12
4. **Wizard** = Questions: 1, 5, 9

## Contributing
This repo is open for contributions! Just fork the repository, create a new branch and open a pull request.

## License
This project is licensed under the MIT License.