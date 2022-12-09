function proclaim(status?: string) {
  console.log(`I'm ${status || 'not ready...'}`);
}

proclaim();
proclaim('ready?');
proclaim('ready!');

// when adding a question mark to a parameter in a function definition, the parameter is allowed to be undefined or optional
