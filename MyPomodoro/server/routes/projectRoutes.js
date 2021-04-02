const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Project = mongoose.model('projects');

// What is the recipients:false?

// module.exports = app => {
//   app.get('/api/projects', requireLogin, async (req, res) => {
//     const projects = await Project.find({ _user: req.user.id }).select({
//       recipients: false
//     });

//     res.send(projects);
//   });


module.exports = app =>{
  app.post('/api/projects', requireLogin, (req, res)=>{
    const {title, category, objective} = req.body;

    const project = new Project({
      title,
      category,
      objective,
      _user: req.user.id,
      dateSent: Date.now()
    })
    try{
       project.save();
    } catch (err) {
            res.status(422).send(err);
          }
  
  
  });

  app.get('/api/projects', requireLogin, async (req, res) => {
    const projects = await Project.find({ _user: req.user.id }).select({
      
    });

    res.send(projects);
  });

  app.delete('/api/projects/:id', async (req, res) =>{
    const project = await Project.findById(req.params.id);

    if(!project) return res.status(404).send("Project not found");

    const deletedProject = await Project.findByIdAndDelete(req.params.id);


    res.send(deletedProject);
  });

  
  
};


//   // app.post('/api/projects/webhooks', (req, res) => {
//   //   const p = new Path('/api/projects/:projectId/:choice');

//   //   _.chain(req.body)
//   //     .map(({ email, url }) => {
//   //       const match = p.test(new URL(url).pathname);
//   //       if (match) {
//   //         return { email, surveyId: match.surveyId, choice: match.choice };
//   //       }
//   //     })
//   //     .compact()
//   //     .uniqBy('email', 'surveyId')
//   //     .each(({ surveyId, email, choice }) => {
//   //       Survey.updateOne(
//   //         {
//   //           _id: surveyId,
//   //           recipients: {
//   //             $elemMatch: { email: email, responded: false }
//   //           }
//   //         },
//   //         {
//   //           $inc: { [choice]: 1 },
//   //           $set: { 'recipients.$.responded': true },
//   //           lastResponded: new Date()
//   //         }
//   //       ).exec();
//   //     })
//   //     .value();

//   //   res.send({});
//   // });

//   // app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
//   //   const { title, subject, body, recipients } = req.body;

//   //   const survey = new Survey({
//   //     title,
//   //     subject,
//   //     body,
//   //     recipients: recipients.split(',').map(email => ({ email: email.trim() })),
//   //     _user: req.user.id,
//   //     dateSent: Date.now()
//   //   });

//   //   // Great place to send an email!
//   //   const mailer = new Mailer(survey, surveyTemplate(survey));

//   //   try {
//   //     await mailer.send();
//   //     await survey.save();
//   //     req.user.credits -= 1;
//   //     const user = await req.user.save();

//   //     res.send(user);
//   //   } catch (err) {
//   //     res.status(422).send(err);
//   //   }
//   // });

