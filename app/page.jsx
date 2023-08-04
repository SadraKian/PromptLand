import Feed from "@components/Feed";

function Home() {
  return <section className="w-full flex-center flex-col">
    <h1 className="text-center head_text">
      Discover & Share
      <br />
    <span className="text-center orange_gradient">AI-Powered Prompts</span>
    </h1>
    <p className="desc text-center">
      PromptLand is an open source AI prompting tool for modern world to discover, create and share creative AI-generated prompts
    </p>
    <Feed />
  </section>;
}

export default Home;
