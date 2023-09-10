# PromptLand

PromptLand is a platform to Discover, Create, and Share powerful AI-generated Prompts.

With the fast growth of AI chat models and people interacting with them, there are so many great prompts that are created by people that have amazing results. PromptLand is a platform to share those ideas with the online community or discover amazing imaginative prompts.

---

## Let your imagination run wild with powerful and creative AI prompts

<img src="https://github.com/SadraKian/PromptLand/assets/128605953/dacd5805-4f72-4f23-8497-087414c52214" width="800" height="400" />

( Visit the website using a VPN if you are in Iran )
<br/>
[Visit the PromptLand website](https://prompt-land-mu.vercel.app/)

---

## Technologies Used

 
<img src="https://skillicons.dev/icons?i=next,react,javascript,tailwind,mongodb,googlecloud,html,css,nodejs" />

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
