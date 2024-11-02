const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Sample project data
const projects = [
  {
    id: 1,
    title: "Environmental Impact Assessment for TRADCO",
    description: "Comprehensive EIA study for TRADCO's fuel storage and distribution facility",
    pdfUrl: "/pdfs/tradco-eia.pdf"
  },
  {
    id: 2,
    title: "Safety Guidelines for Fuel Handling",
    description: "Best practices for safe handling and storage of petroleum products",
    pdfUrl: "/pdfs/fuel-safety-guidelines.pdf"
  },
  // Add more projects as needed
];

// API endpoint to get all projects
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

// API endpoint to get a specific project by ID
app.get('/api/projects/:id', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) return res.status(404).send('Project not found');
  res.json(project);
});

// Endpoint to download PDF files
app.get('/download/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, 'public', 'pdfs', filename);

  // Check if file exists
  if (fs.existsSync(filePath)) {
    res.download(filePath); // Set disposition and send it.
  } else {
    res.status(404).send('File not found');
  }
});

// Catch-all route to serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});