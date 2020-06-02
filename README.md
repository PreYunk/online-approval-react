# online-approval-react
Frontend for online approval project LUSIP 20

## Steps to configure your system to contribute
* Install [git](https://git-scm.com/downloads)
* Open git bash (navigate to the directory, right click, open git bash here)
* Setup your git configuration by typing the following commands in git bash
* `git config --global user.name "FIRST_NAME LAST_NAME"`
* `git config --global user.email "youremail"`
* Fork the repository by clicking on fork button at the top of the repo
Forking the repo will create your own copy of the repo, you could push changes to your fork without affecting main repo, more on git push later.
* After forking the repo click on clone or download and copy the link provided, then type 
`git clone copied_link`
* Make sure that you have your git bash navigated to the directory where you want to clone the repo.
* Type `cd online-approval-api` if you have cloned backend repo or `cd online-approval-react` if you have cloned frontend repo.
* Now we need to setup remote repo for your local repo. We forked the original repo, and cloned it to your local system right? but we still haven't connected your repo to main repo.
* Type `git remote add upstream https://github.com/PreYunk/online-approval-react.git` if you cloned frontend repo or `git remote add upstream https://github.com/PreYunk/online-approval-api.git` if you cloned backend repo. What this does is add a remote reference named upstream to main repo.
* We won't cover branches here as it won't be required for this project as of now.
**Your system is ready to use git.**

## Steps to push your code to main repo.
* Now with your local system setup, we need to push the changes to your forked repo and eventually to main repo.
* Make changes to the relevant code.
* Type `git status` you can see files changed are highlighted in red color, this means git is unaware of your changes.
* Now type `git add -A` what this does is it tells git to track all the files which were modified or added or deleted, its like putting all the changes into the container.
* Now type `git commit -m "Short message as what was changed"` what this does is saves all your changes and create a reference, its like bookmarking or creating a checkpoint, or in our analogy packing up our container.
* Now we need to upload the code to your forked repo, type `git push origin master`, now there are 3 new terms

  `push` tells git to upload the code to the provided reference

  `origin` is the reference to your forked repo automatically added, remember we added the reference to main repo named `upstream`, you can check with `git remote -v` command.

  `master` is the name of branch you want to upload.

* After the step navigate to your forked repo in github, you could see the option of pull request available, now what pull request is, it is basically a request sent to the main repo to merge your uploaded changes into the main repo.
* Click it to create a pull request, your changes will be incorporated within 24 hrs.

### Task to check if you have understood basics of git and github.
* Fork and Clone this repo
* Navigate to `README.md` and make changes at the end of this file as described at last.
* Commit the changes push the commit to your forked repo and create a pull request as described above.

## Submission checklist
- [x] **Akshat**

- [x] **Priyank**

- [x] **Mehul**

- [x] **K Sai Rachna**

- [ ] **Aditi**

- [ ] **Priyal**

**Open the file and add x between [] before your name, like [] Akshat to [x] Akshat.**
