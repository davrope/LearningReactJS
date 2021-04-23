const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const { text, json } = require('express');

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
      dateCreated: new Date(),
      // todos = [{id: 0, text: "example 1", completed: false}, {id:1, text: "example 2", completed: true}]
      
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

  app.get('/api/projects/:id', requireLogin, async (req, res) =>{
    const fetchedProject = await Project.findById(req.params.id).select({
    });

    if(!fetchedProject) return res.status(404).send("Project not found");

    res.send(fetchedProject);
  });

  app.delete('/api/projects/:id', async (req, res) =>{

    const deletedProject = await Project.findByIdAndDelete(req.params.id);

    res.send(deletedProject);
  });


  app.post('/api/projects/:id', async (req, res)=>{
    const project = await Project.findById(req.params.id).select({
      
    });
    
    project.time = req.body.time;
    project.todos = req.body.todos;

    try{
      project.save();
      res.send(project)
   } catch (err) {
           res.status(422).send(err);
         }


  })

  // app.patch('/api/projects/:id', requireLogin, async (req, res) => {

  //   try{
  //     const project = await Project.findOne({_id:req.params.id});

  //     // const todos = JSON.parse(req.body);
  //     // console.log(todos);

    

  //     project.todos = req.body
     
  //     // const testing = console.log(req.body.todos);
  //     await project.save();
  //     res.send(project);
  //   } catch{
  //     res.status(404)
  //     res.send({error: "Project doesn't exist"})
  //   }

  // });
  
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

