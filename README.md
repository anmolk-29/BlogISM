# blogISM. 

blogISM is a mini version of a working blogging website. This project is done by using only HTML, CSS and Vanilla JS. This is a nodeJS application, also using firebase as its database.

<!-- 1. Dynamic Blog pages.
2. Have a dedicated editor for blogs.
3. You can add/make as many blogs you want.
4. You can add Headings, paragraphs, and Images to the blog post. 
5. Have read more blogs section also. -->


<!-- ### Installation Guide.

Once you forked this repo. Make sure to run `npm install` command inside the folder to install all the package.

After installing packages. You must go to your firbase console and make a project. Copy project credentials and paste it to "firebase.js" file. Otherwise you'll not be able to access database. -->

## Visit Online
This website is hosted at [https://blogism.herokuapp.com](https://blogism.herokuapp.com)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Your machine should have Npm(or Yarn) and Node.js installed to use it locally.

## Setup and Installation

### Setting up the repository locally

1. First fork the repo :fork_and_knife: to your account.  
   Go to the forked repo and clone it :busts_in_silhouette: to your local machine:

```sh
git clone https://github.com/Your_Username/blogISM.git
```

This will make a copy of the code to your local machine.

2. Now, move to the `blogISM` directory.

```sh
cd blogISM
```

3. Now, check the remote of your local code by:

```sh
git remote -v
```

The response should look like:

```sh
origin	https://github.com/Your_Username/blogISM.git (fetch)
origin	https://github.com/Your_Username/blogISM.git (push)
```

To add upstream to remote, run:

```sh
git remote add upstream https://github.com/iitiansuyash/blogISM.git
```

Again run `git remote -v`, the response should look like:

```sh
origin	https://github.com/Your_Username/blogISM.git (fetch)
origin	https://github.com/Your_Username/blogISM.git (push)
upstream	https://github.com/iitiansuyash/blogISM (fetch)
upstream	https://github.com/iitiansuyash/blogISM (push)
```

4. Once the remote is set, install all the necessary dependencies by the following command:

```sh
npm run install-all
```
5. After installing packages. You must go to your firbase console and make a project. Copy project credentials and paste it to "firebase.js" file. Otherwise you'll not be able to access database.
### Run locally

Run the below command to start the server:

```sh
npm start
```
Go to: [http://localhost:3000](http://localhost:3000)