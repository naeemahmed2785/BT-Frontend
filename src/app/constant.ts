export const data = {
    behaviour: [
        { state: 'good',  description: ' Behaviour was good,' }, 
        { state: 'satisfactory', description: ' Behaviour was satisfactory,'},
        { state: 'unsatisfactory', description: ' Behaviour was unsatisfactory,'}
    ],

    workspace: [
        { state: 'good', description: ' work pace was good'}, 
        { state: 'satisfactory', description: ' workspace was satisfactory'}, 
        { state: 'slow', description: ' workspace was slow'}, 
    ],

    homeWork: [
        { state: 'done', description: ' and homework was done today. '}, 
        { state: 'partially', description: ' and homework was partially done today. '}, 
        { state: 'notDone', description: ' and homework was not done today. '}, 
    ],

    Punctuality: [
        { state: 'onTime', description: ' Also came on time today. '}, 
        { state: 'late', description: ' Also was xxx minutes late today. '},         

    ],

    Understanding: [
        {state: 'good', description: ' Understanding was good. '},
        {state: 'average', description: ' Understanding was average. '},
        {state: 'poor', description: ' Understanding was poor. '},

    ],

    concentrationQuality: [
        {state: 'poor', description: ' Concentration during lesson was poor. '},
        {state: 'poorQuality', description: ' Homework quality was poor. '},
    ]
}

export class CommentsType {
    behavior: any;
    pace: string;
    work: string;
    punctuality: string;
    optional: string;
    teacherName: string;
    understanding: string;
    concenPoor: string;
    homeworkQuality: string;
    updatedBy: string;
}



export class StatusMap {
    good: 'good-behaviour';
    unsatisfactory: 'unsatisfactory-behaviour'

}