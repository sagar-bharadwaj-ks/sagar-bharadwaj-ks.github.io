# Personal website

Made using [Academic Pages](https://github.com/academicpages/academicpages.github.io). See their [README](https://github.com/academicpages/academicpages.github.io/blob/master/README.md) for more details.

## Running locally

1. Install ruby-dev, bundler, and nodejs.
    
    On most Linux distribution and [Windows Subsystem Linux](https://learn.microsoft.com/en-us/windows/wsl/about) the command is:
    ```bash
    sudo apt install ruby-dev ruby-bundler nodejs
    ```
    On MacOS the commands are:
    ```bash
    brew install ruby
    brew install node
    gem install bundler
    ```
2. Run `bundle install` to install ruby dependencies. If you get errors, delete Gemfile.lock and try again.
3. Run `jekyll serve -l -H localhost` to generate the HTML and serve it from `localhost:4000` the local server will automatically rebuild and refresh the pages on change.

If you are running on Linux it may be necessary to install some additional dependencies prior to being able to run locally: `sudo apt install build-essential gcc make`
