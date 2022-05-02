module.exports = async ({ github, context, envInputString }) => {
  let res = await github.rest.repos.getAllEnvironments({
    owner: context.repo.owner,
    repo: context.repo.repo,
  });

  if (res.data.environments.length > 0) {
    console.log(
      res.data.environments.find((env) => env.name === envInputString)
    );
    if (!res.data.environments.find((env) => env.name === envInputString)) {
      core.setFailed("The environment does not exits");
    }
  }
};
