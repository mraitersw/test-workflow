module.exports = async ({ github, context, envInputString }) => {
  let res = await github.rest.repos.getAllEnvironments({
    owner: context.repo.owner,
    repo: context.repo.repo,
  });

  if (res.data.environments.length > 0) {
    if (!res.data.environments.find((env) => env.name === envInputString)) {
      core.setFailed("The environment does not exits");
    }
  }
};
