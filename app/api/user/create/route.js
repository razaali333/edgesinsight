import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: true,
  },
};

export async function POST(req) {
  const {
     name ,
     email ,
     password ,
     image , 
     status,
     type 
  } = await req.json(); // assuming req.json() to parse the incoming JSON body

  try {
    const newMovie = await prisma.user.create({
      data: {
        name,
        email,
        password,
        image,
        status,
        type
      },
    });
    return new Response(JSON.stringify(newMovie), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Error creating movie' }), { status: 500 });
  }
}

export default async function handler(req) {
  if (req.method === 'POST') {
    return POST(req);
  } else {
    return new Response(JSON.stringify({ error: `Method ${req.method} Not Allowed` }), { status: 405 });
  }
}
