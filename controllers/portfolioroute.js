const router = require('express').Router();
const pdfjsLib = require('pdfjs-dist');

// This is the 'get' route 
router.get('/', async (req, res) => {
  // Here, index.html is rendered
 res.render('aboutme');
});

module.exports = router;

router.get('/skills', async (req, res) => {
  // Here, index.html is rendered
 res.render('skills');
});

router.get('/projects', async (req, res) => {
  // Here, index.html is rendered
 res.render('projects');
});

router.get('/resume', async (req, res) => {
  res.render('resume', { pdfUrl: '/assets/Renjith_Rajakumar_Resume_F.pdf' });
});
