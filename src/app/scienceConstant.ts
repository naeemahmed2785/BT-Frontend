export const data = {
childName : [
        {state: 'name', description:' The parent of xxx attended the meeting to discuss his child progress.'},
    ],
progress: [
    {state: 'done', description:' His homework is usually done.'},
    {state: 'notdone', description: ' His homework is usually not done.'},
    {state: 'incomplete', description: ' His homework is usually incomplete.'}
],
usually: [
    {state: 'good', description: ' His homework quality is good.'},
    {state: 'satisfactory', description:' His homework quality is at a satisfactory level.'},
    {state: 'unsatisfactory', description:' His homework quality is usually unsatisfactory.'}

],

testResults : [
    {state: 'good', description: ' His tests results are generally good.'},
    {state: 'average', description: ' His test results are at an average.'},
    {state: 'belowAverage', description: ' His test results were below average and needs improvement.'},
    {state: 'unsatisfactory', description: ' His test results are unsatisfactory usually according to exam preparation.'}

],
testPace: [
    {state: 'good', description: ' He has been attempting the tests regularly and achieving good grades.'},
    {state: 'satisfactory', description: ' He has been attempting test satisfactory but needs to increase his pace to do more tests.'},
    {state: 'slow', description: ' He has been slow in attemting test as a result he might not finish his course.'}

], 

understandingofKnowledge: [
    {state: 'good', description: ' His understanding is generally good.'},
    {state: 'average', description: ' His understanding of knowledge is average.'},
    {state: 'belowAverage', description: ' His understanding of knowledge is below average.'},
    {state: 'unsatisfactory', description: ' His understanding of knowledge is unsatisfactory.'}
],

applicationofKnowledge: [
    {state: 'good', description: ' His application of knowledge is generally good.'},
    {state: 'average', description: ' His application of knowledge is average.'},
    {state: 'belowAverage', description: ' His application of knowledge is below average.'},
    {state: 'unsatisfactory', description: ' His application of knowledge is unsatisfactory.'}
],

mathSkills: [
    {state: 'good', description: ' His maths skills are generally good.'},
    {state: 'average', description: ' His maths skills are average.'},
    {state: 'belowAverage', description: ' His maths skills are below average.'},
    {state: 'unsatisfactory', description: ' His maths skills are unsatisfactory.'}
],

practicalknowledge: [
    {state: 'good', description: ' His practical knowledge is generally good.'},
    {state: 'average', description: ' His practical knowledge is average.'},
    {state: 'belowAverage', description: ' His practical knowledge is below average.'},
    {state: 'unsatisfactory', description: ' Hispractical knowledge is unsatisfactory.'}

],
workbookMistakes: [
    {state: 'workbook', description: ' He makes mistakes in his workbook without reading the questions which makes his class and test progress slow.'},
    {state: 'structured', description: ' Lacking in structured sentences will affect his class progress, tests results and exam grades.'}
],

calculations: [
    {state: 'moles', description: ' He is weak in calculating the moles.'},
    {state: 'formula', description: ' He is weak in re-arranging the formulas.'},
    {state: 'unit', description: ' He is weak in units conversion.'},
    {state: 'balancing', description: ' He is weak in balancing the chemical equations.'}
],

improvehomework: [
    {state: 'revising', description: ' He should revise through his revision guide.'},
    {state: 'askmore', description: ' He should asks more questions to his teacher during his lesson.'},
    {state: 'reading', description: ' He should read the questions carefully before attempting it.'},
    {state: 'notdoing', description: ' If he does not do homework, it will make his class progress slow.'},
    {state: 'affect', description: ' His class progress will become more slow and will affect on his test progress too.'},
    {state: 'test', description: ' He should do tests regularly, as a result he will not forget the test related topics.'}
],

concentrationBehave: [
    {state: 'good', description:' He has been showing good concentration during his lesson.'},
    {state: 'satisfactory', description: ' He has not been put enough concentration during his lesson as he should.'},
    {state: 'talkative', description: ' He has been very talkative with other students.'},
    {state: 'students', description: ' He has been also very talkative with students on other tables.'},
    {state: 'loudly', description: ' He speaks loudly and it affects the class progress of the other students.'},
    {state: 'laughs', description: ' He laughs during his lesson.'},
    {state: 'tired', description: ' He had been very tired  during his lesson.'},
    {state: 'behavegood', description: ' His behaviour is good in the class.'},
    {state: 'behavesatisfactory', description: 'His behaviour is satisfactory.'},
    {state: 'notlisten', description:' He sometime does not listen to the teacher.'},
    {state: 'language', description: ' He used inappropriate language in the class.'},
    {state: 'misbehave', description: ' He misbehaves during his lesson with teacher.'}
],
overall: [
    {state: 'goodAttendance', description: ' His attendance is very good.'},
    {state: 'satisfyAttendance', description: ' Sometimes he misses the lesson without informing.'},
    {state: 'badAttenadance', description: ' His attendence is unsatisfactory.'},
    {state: 'goodPunctuality', description: ' He has been punctual in the class. '},
    {state: 'satisfyPunctuality', description: 'He has satisfactory puntuality.'},
    {state: 'badPunctuality', description: '  He has not been punctual in the class.'},
    {state: 'goodAbilty', description: ' He has good abilities of learning. '},
    {state: 'satisfyAbility', description: ' His abilities of learning are average.'},
    {state: 'avgAbility', description: ' He is quite weak in learning.'},
    {state: 'slowAbility', description: ' He is slow learner.'}

],

handWriting : [
    {state: 'satisfactory', description: ' His handwriting is illegible.'},
    {state: 'unsatisfactory', description: ' Poor handwriting would make his class and test progress slow.'}
],


Spelling : [
    {state: 'satisfactory', description: ' Good spellings will helping him to use proper scientific termelogies in the tests and exams.'},
    {state: 'unsatisfactory', description: ' Poor spellings will affect the use of Scientific terms in the tests and exams.'}
],



}

export class Comments {
    parent: string;
    topic: string;
    subjects: string;
    progress: string;
    usually: string;
    testResults: string;
    pace: string;
    understanding: string;
    application: string;
    maths: string;
    practical: string;
    workbook: string;
    structured: string;
    moles: string;
    formula: string;
    unit: string;
    balancing: string;

}
export class Show extends Comments {
    improve: string;
    askMore: string;
    reading: string;
    notdoing: string;
    affect: string;
    test: string;
    concentration: string;
    talkative: string;
    talkStudent: string;
    speak: string;
    laugh: string;
    tiredness: string;
    behave: string;
    listen: string;
    inappropriate: string;
    misBehave: string;
    attendance: string;
    punctuality: string;
    ability: string;
    handWriting: string;
    spelling: string;
    additional = "Note:";
    parents = "Parent Remarks:";
}