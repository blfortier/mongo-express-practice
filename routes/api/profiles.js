const express = require('express');
const router = express.Router();

const Profile = require('../../models/Profile');

//router.get('/', (req, res) => res.json({ message: 'Yes! This is the Profile route'}));

// Read all profiles
router.get('/', (req, res) => {
  Profile.find()
    .then(profile => {
      res.json(profile);
    })
      .catch(err => {
        res.status(500)
          .json({ status: "error",
              message: err
          });
      });
});

// Read one profile using BOTH first and last name params
router.get('/:firstName/:lastName', (req, res) => {
  const { firstName, lastName } = req.params;
  Profile.findOne({ firstName, lastName })
    .then( profile => {
      res.json(profile)
    })
    .catch(err => {
      res.status(500)
        .json({ status: "error",
          message: err
        })
    });
});

// Create a new profile
router.post('/', (req, res) => {
  const { firstName, lastName, aboutMe, age, email } = req.body;
  
  const newProfile = new Profile ({
    firstName: firstName,
    lastName: lastName,
    aboutMe: aboutMe,
    age: age,
    email: email
  });
  
  newProfile.save()
    .then(profile => res.status(201)
      .json(profile))
      .catch(err => {
        res.status(500)
          .json({ status: "error",
              message: err
          });
      });
});

// Update a profiles email address 
router.put('/update/:firstName/:lastName', (req, res) => {
  const { firstName, lastName } = req.params;
  const email = req.body;
  
  Profile.updateOne({firstName: firstName, lastName: lastName}, email, (err, email) =>{
    if(!err) {
      res.status(200).json("profile updated");
    } else {
      res.status(500).json({ status: "error", message: err});
    }
  });
});
  
// Delete a profile
router.delete('/:firstName/:lastName', (req, res) => {
  const { firstName, lastName } = req.params;
  
  Profile.findOne({ firstName, lastName })
    .then(profile => {
      profile.remove()
        .then(() => {
          res.status(204)
            .json({});
        })
          .catch(err => {
            res.status(500)
              .json({ status: "error",
                  message: err
              });
          });
    })
      .catch(err => res.status(500)
        .json({ status: "error",
            message: err
        }));
});








module.exports = router;