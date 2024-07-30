import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Dummy data for the movie entry
      const movieName = 'Sample Movie';
      const cast = ['Actor 1', 'Actor 2', 'Actor 3'].join(','); // Assuming cast is an array of strings
      const releaseDate = new Date();
      const budget = 100000000; // Example budget
      const coverPhoto = 'https://example.com/cover-photo.jpg';
      const description = 'This is a sample movie description.';
      const rating = 8.5;
      const lifetimeEarning = 500000000; // Example lifetime earning

      // Insert dummy data into the movie table
      const newMovie = await prisma.movie.create({
        data: {
          movieName,
          cast,
          releaseDate,
          budget,
          coverPhoto,
          description,
          rating,
          lifetimeEarning,
        },
      });

      res.status(201).json(newMovie);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error creating movie' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
