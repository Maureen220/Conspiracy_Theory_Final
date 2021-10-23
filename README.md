# Conspiracy_Theory_Final
A machine learning model about conspiracy theory beliefs based upon characterization of the individual.

## Why Conspiracies?
The group was intrigued by conspiracy theories given the rise of conspiracies across the mainstream over the past 5 years. The group decided it would be interesting to dive into data concerning conspiracy theories to gauge and quantify the types of characteristics of a conspiracy theorist.


## Dataset Description
This dataset was derived from the Generic Conspiracist Beliefs Scale (GCBS) which is used for researching conspiracy theories. Through an online application, visitors answered 15 questions with a 5 point scale. These questions were then grouped into the following categories of conspiracies:

|Group Factor|Abbreviation|
|:---|:---:|
|Goverment Malfeasance|GM|
|Extraterrestrial Cover-Up|ET|
|Malevolent Global Conspiracies|MG|
|Personal Wellbeing|PW|
|Control of Information|CI|

Other characteristics of the repondants were also captured:
* **Education**: Less than high school, high school, university degree, graduate degree
* **Childhood Living**: Urban, Rural, Suburban
* **Gender**: Male, Female, Other
* **English as Native Language**: Yes, No
* **Age**: Enter your age
* **Dominant Hand**: Right, Left, Both
* **Religion**: Agnostic, Atheist, Buddhist, Christian (Catholic), Christian (Mormon), Christian (Protestant), Christian (Other), Hindu, Jewish, Muslim, Sikh, Other
* **Sexual Orientation**: Heterosexual, Bisexual, Homosexual, Asexual, Other
* **Race**: Asian, Arab, Black, Indigenous Australian - Native American - White, Other
* **Voted in National Election in Past Year**: Yes, No
* **Married**: Never Married, Currently Married, Previously Married
* **Family Size**: Enter the number of children your mother had, including yourself
* **Major**: If you attended university, enter your major

## Outline of Project
1. Identify the datasource
    - Link: ["Measuring Belief In Conspiracy Theories"](https://www.kaggle.com/yamqwe/measuring-belief-in-conspiracy-theories?select=data)
    - Description: Collected in 2016 using an online verion of the Generic Conspiracists Beliefs Scale. This dataset includes responses from roughly 2,495 individuals. The questionnaire categorizes individuals into types of conspiracy theorists based on their reponses. In addition, features of the individuals are also collected where a machine learning model can be applied to predict whether a person is a conspiracy theorist and what type.

2. Topic Decision
    - We decided this predictive approach to identifying conspiracy theorists based on individual features would be an interesting approach to machine learning, especially given the increased global discussion surrounding conspiracies over the last five years.

3. What Do We Want To Answer?
    - Based on your own personal features, what type of conspiracy theorist are you?

4. Dataset Limitations
    - Data is from 2016 and does not factor additional theories which have emerged since then: i.e. COVID-19.
    
5. Recommendations for expanded analysis
    - Perform this questionnaire with a population and collect where they live at the time of taking the survey.


## Data Exploration
  - The csv file was imported into a Pandas DataFrame
  - Dropped null data from dataset
  - Removed unnecessary data (personality, time elapsed, major, and vocabulary assessment) 


## Analysis 


## Google Slide Presentation Link
[The Lizard People](https://docs.google.com/presentation/d/1Yfqv1jFfF3fEBV6npjox3hcjP84kX47o3FywaWDZ9HI/edit#slide=id.gf9adcef9b2_0_124)

## Our Team Communication Protocols
The Lizard Team has established a collaboration plan to include meetings, communication platforms and in case of an emergency.

### MEETINGS
**SCHEDULED via ZOOM**
* Tuesday/Thursday during regularly scheduled classes
* Saturday during and post office hours

**AD HOC**
* As needed

### COMMUNICATION
* Group chat on Slack for team members only

### EMERGENCY
* Established a group on our own personal cell phones for emergency items



