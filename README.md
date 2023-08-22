# PromptLand

PromptLand is a platform to Discover, Create, and Share powerful AI-generated Prompts.

With the fast growth of AI chat models and people interacting with them, there are so many great prompts that are created by people that have amazing results. PromptLand is a platform to share those ideas with the online community or discover amazing imaginative prompts.

---

## Let your imagination run wild with powerful and creative AI prompts

<img src="https://github.com/SadraKian/PromptLand/assets/128605953/dacd5805-4f72-4f23-8497-087414c52214" width="800" height="400" />


[Visit the PromptLand website](https://prompt-land-mu.vercel.app/)

---

## Technologies Used

 <img src="https://github.com/SadraKian/PromptLand/assets/128605953/6d86fade-454b-4877-89de-4b1dbe15d2a2" title="HTML" alt="HTML"  width="40" height="40" />&nbsp;
    <img src="https://github.com/SadraKian/PromptLand/assets/128605953/ec6a1a00-b0f7-42ce-9b8f-2ceee55bc0b0" title="CSS" alt="CSS" width="40" height="40" />&nbsp;
      <img src="https://github.com/SadraKian/PromptLand/assets/128605953/8d537b82-5b08-410c-833d-7383f575e8b1" title="JavaScript" alt="JavaScript" width="40" height="40" />&nbsp;
      <img src="https://github.com/SadraKian/PromptLand/assets/128605953/7eb79375-8587-43ab-84b8-82a0b63a7899" title="React" alt="React" width="40" height="40" />&nbsp;
       <img src="https://github.com/SadraKian/PromptLand/assets/128605953/2bd7b0f3-7747-4ed0-8b6b-3acbf0031b9b" title="Next JS" alt="Next JS" width="40" height="40" />&nbsp;
        <img src="https://github.com/SadraKian/PromptLand/assets/128605953/b493dc86-491c-4590-9946-3683a26d7ce0" title="TailwindCSS" alt="TailwindCSS" width="40" height="40" />&nbsp;
        <img src="https://github.com/SadraKian/PromptLand/assets/128605953/2be5bcad-9488-4f96-99b1-07f4cde2ae2b" title="MongoDB" alt="MongoDB" width="40" height="40" />&nbsp;
        <img src="https://github.com/SadraKian/PromptLand/assets/128605953/37e833c1-e801-47fd-b69f-603555ebd290" title="Next Auth" alt="Next Auth" width="40" height="40">&nbsp;
        <img src="https://github.com/SadraKian/PromptLand/assets/128605953/7c276d2d-847d-4ad1-9054-22d1beb63d59" title="Node JS" alt="Node JS" width="40" height="40">

---

## How to Run

To run this project on your local system, make sure you have Node.js installed. If not, you can download it from the [Node.js website](https://nodejs.org/en/download).

Follow these steps:

1. Clone the repository and navigate to the project directory in your terminal: `cd /path/to/PromptLand`

2. Install project dependencies: `npm install`

3. MongoDB Setup:
- Create an account on the [MongoDB Website](https://www.mongodb.com/) and create a database.
- Adjust network and user access settings.
- Obtain your MongoDB URI from the MongoDB website and add it to your environment variables file (`.env`) or directly in `/utils/database.js`.

4. Google Cloud Setup:
- Create a project on the [Google Cloud Console](https://console.cloud.google.com/).
- Create an OAuth 2.0 Client with the required information.
- Add your URLs to the Authorized Redirect URIs, including `/api/auth/callback/google`.
- Use your Google ID and Google client secret in the environment variables file (`.env`) or directly in `/app/api/auth/[...nextauth]/route.js`.

5. Start the project locally: `npm run dev`

6. Deploy to Vercel (optional):
- Create an account on [Vercel](https://vercel.com/)( Next JS Dev Team )
- You can Deploy your websites for free to the web!!

For more information, consult the documentation for each technology.

## Additional Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [MongoDB Documentation](https://docs.mongodb.com/manual/core/document/)
- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Google Cloud Documentation](https://cloud.google.com/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

### Acknowledgments

My mentor for building this project: [Adrian Hajdin](https://github.com/adrianhajdin)

#[JavaScript Mastery](https://www.youtube.com/@javascriptmastery).
