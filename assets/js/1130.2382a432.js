(window.webpackJsonp=window.webpackJsonp||[]).push([[1130],{1477:function(e,t,o){"use strict";o.r(t);var s=o(19),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"git-svn"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#git-svn"}},[e._v("#")]),e._v(" git-svn")]),e._v(" "),o("h2",{attrs:{id:"cloning-the-svn-repository"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cloning-the-svn-repository"}},[e._v("#")]),e._v(" Cloning the SVN repository")]),e._v(" "),o("p",[e._v("You need to create a new local copy of the repository with the command")]),e._v(" "),o("p",[o("code",[e._v("git svn clone SVN_REPO_ROOT_URL [DEST_FOLDER_PATH] -T TRUNK_REPO_PATH -t TAGS_REPO_PATH -b BRANCHES_REPO_PATH")])]),e._v(" "),o("p",[e._v("If your SVN repository follows the standard layout (trunk, branches, tags folders) you can save some typing:")]),e._v(" "),o("p",[o("code",[e._v("git svn clone -s SVN_REPO_ROOT_URL [DEST_FOLDER_PATH]")])]),e._v(" "),o("p",[o("code",[e._v("git svn clone")]),e._v(" checks out each SVN revision, one by one, and makes a git commit in your local repository in order to recreate the history. If the SVN repository has a lot of commits this will take a while.")]),e._v(" "),o("p",[e._v("When the command is finished you will have a full fledged git repository with a local branch called master that tracks the trunk branch in the SVN repository.")]),e._v(" "),o("h2",{attrs:{id:"pushing-local-changes-to-svn"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pushing-local-changes-to-svn"}},[e._v("#")]),e._v(" Pushing local changes to SVN")]),e._v(" "),o("p",[e._v("The command")]),e._v(" "),o("div",{staticClass:"language-git extra-class"},[o("pre",{pre:!0,attrs:{class:"language-git"}},[o("code",[e._v("git svn dcommit\n\n")])])]),o("p",[e._v("will create a SVN revision for each of your local git commits. As with SVN, your local git history must be in sync with the latest changes in the SVN repository, so if the command fails, try performing a "),o("code",[e._v("git svn rebase")]),e._v(" first.")]),e._v(" "),o("h2",{attrs:{id:"working-locally"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#working-locally"}},[e._v("#")]),e._v(" Working locally")]),e._v(" "),o("p",[e._v("Just use your local git repository as a normal git repo, with the normal git commands:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("git add FILE")]),e._v(" and "),o("code",[e._v("git checkout -- FILE")]),e._v(" To stage/unstage a file")]),e._v(" "),o("li",[o("code",[e._v("git commit")]),e._v(' To save your changes. Those commits will be local and will not be "pushed" to the SVN repo, just like in a normal git repository')]),e._v(" "),o("li",[o("code",[e._v("git stash")]),e._v(" and "),o("code",[e._v("git stash pop")]),e._v(" Allows using stashes")]),e._v(" "),o("li",[o("code",[e._v("git reset HEAD --hard")]),e._v(" Revert all your local changes")]),e._v(" "),o("li",[o("code",[e._v("git log")]),e._v(" Access all the history in the repository")]),e._v(" "),o("li",[o("code",[e._v("git rebase -i")]),e._v(" so you can rewrite your local history freely")]),e._v(" "),o("li",[o("code",[e._v("git branch")]),e._v(" and "),o("code",[e._v("git checkout")]),e._v(" to create local branches")])]),e._v(" "),o("p",[e._v('As the git-svn documentation states "Subversion is a system that is far less sophisticated than Git" so you can\'t use all the full power of git without messing up the history in the Subversion server. Fortunately the rules are very simple: '),o("strong",[e._v("Keep the history linear")])]),e._v(" "),o("p",[e._v("This means you can make almost any git operation: creating branches, removing/reordering/squashing commits, move the history around, delete commits, etc. Anything "),o("strong",[e._v("but merges")]),e._v(".  If you need to reintegrate the history of local branches use "),o("code",[e._v("git rebase")]),e._v(" instead.")]),e._v(" "),o("p",[e._v('When you perform a merge, a merge commit is created. The particular thing about merge commits is that they have two parents, and that makes the history non-linear. Non-linear history will confuse SVN in the case you "push" a merge commit to the repository.')]),e._v(" "),o("p",[e._v("However do not worry: "),o("strong",[e._v('you won\'t break anything if you "push" a git merge commit to SVN')]),e._v(". If you do so, when the git merge commit is sent to the svn server it will contain all the changes of all commits for that merge, so you will lose the history of those commits, but not the changes in your code.")]),e._v(" "),o("h2",{attrs:{id:"getting-the-latest-changes-from-svn"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#getting-the-latest-changes-from-svn"}},[e._v("#")]),e._v(" Getting the latest changes from SVN")]),e._v(" "),o("p",[e._v("The equivalent to "),o("code",[e._v("git pull")]),e._v(" is the command")]),e._v(" "),o("div",{staticClass:"language-git extra-class"},[o("pre",{pre:!0,attrs:{class:"language-git"}},[o("code",[e._v("git svn rebase\n\n")])])]),o("p",[e._v("This retrieves all the changes from the SVN repository and applies them "),o("strong",[e._v("on top")]),e._v(" of your local commits in your current branch.")]),e._v(" "),o("p",[e._v("You can also use the command")]),e._v(" "),o("div",{staticClass:"language-git extra-class"},[o("pre",{pre:!0,attrs:{class:"language-git"}},[o("code",[e._v("git svn fetch\n\n")])])]),o("p",[e._v("to retrieve the changes from the SVN repository and bring them to your local machine but without applying them to your local branch.")]),e._v(" "),o("h2",{attrs:{id:"handling-empty-folders"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#handling-empty-folders"}},[e._v("#")]),e._v(" Handling empty folders")]),e._v(" "),o("p",[e._v("git does not recognice the concept of folders, it just works with files and their filepaths. This means git does not track empty folders. SVN, however, does. Using git-svn means that, by default,  "),o("strong",[e._v("any change you do involving empty folders with git will not be propagated to SVN")]),e._v(".")]),e._v(" "),o("p",[e._v("Using the "),o("code",[e._v("--rmdir")]),e._v(" flag when issuing a comment corrects this issue, and removes an empty folder in SVN if you locally delete the last file inside it:")]),e._v(" "),o("p",[o("code",[e._v("git svn dcommit --rmdir")])]),e._v(" "),o("p",[e._v("Unfortunately "),o("strong",[e._v("it does not removes existing empty folders")]),e._v(": you need to do it manually.")]),e._v(" "),o("p",[e._v("To avoid adding the flag each time you do a dcommit, or to play it safe if you are using a git GUI tool (like SourceTree) you can set this behaviour as default with the command:")]),e._v(" "),o("p",[o("code",[e._v("git config --global svn.rmdir true")])]),e._v(" "),o("p",[e._v("This changes your .gitconfig file and adds these lines:")]),e._v(" "),o("div",{staticClass:"language-git extra-class"},[o("pre",{pre:!0,attrs:{class:"language-git"}},[o("code",[e._v("[svn]\nrmdir = true\n\n")])])]),o("p",[e._v("To remove all untracked files and folders that should be kept empty for SVN use the git command:")]),e._v(" "),o("p",[o("code",[e._v("git clean -fd")])]),e._v(" "),o("p",[e._v("Please note: the previous command will remove all untracked files and empty folders, even the ones that should be tracked by SVN!\nIf you need to generate againg the empty folders tracked by SVN use the command")]),e._v(" "),o("p",[o("code",[e._v("git svn mkdirs")])]),e._v(" "),o("p",[e._v("In practices this means that if you want to cleanup your workspace from untracked files and folders you should always use both commands to recreate the empty folders tracked by SVN:")]),e._v(" "),o("p",[o("code",[e._v("git clean -fd && git svn mkdirs")])]),e._v(" "),o("h4",{attrs:{id:"remarks"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[e._v("#")]),e._v(" Remarks")]),e._v(" "),o("p",[o("strong",[e._v("Cloning really big SVN repositories")])]),e._v(" "),o("p",[e._v("If you SVN repo history is really really big this operation could take hours, as git-svn needs to rebuild the complete history of the SVN repo.\nFortunately you only need to clone the SVN  repo once; as with any other git repository you can just copy the repo folder to other collaborators. Copying the folder to multiple computers will be quicker that just cloning big SVN repos from scratch.")]),e._v(" "),o("p",[o("strong",[e._v("About commits and SHA1")])]),e._v(" "),o("p",[e._v("Your local git commits will be "),o("strong",[e._v("rewritten")]),e._v(" when using the command "),o("code",[e._v("git svn dcommit")]),e._v(". This command will add a text to the git commit's message referencing the SVN revision created in the SVN server, which is very useful. However, adding a new text requires modifying an existing commit's message which can't actually be done: git commits are inmutable. The solution is create a new commit with the same contents and the new message, but it is technically a new commit anyway (i.e. the git commit's SHA1 will change)")]),e._v(" "),o("p",[e._v("As git commits created for git-svn are local, the SHA1 ids for git commits are different between each git repository! This means that you can't use a SHA1 to reference a commit from another person because the same commit will have a diferent SHA1 in each local git repository.\nYou need to rely in svn revision number appended to the commit message when you push to the SVN server if you want to reference a commit between different copies of the repository.")]),e._v(" "),o("p",[o("strong",[e._v("You can")]),e._v(" use the SHA1 for local operations though (show/diff an specific commit, cherry-picks and resets, etc)")]),e._v(" "),o("h3",{attrs:{id:"troubleshooting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),o("p",[o("strong",[e._v("git svn rebase command issues a checksum mismatch error")])]),e._v(" "),o("p",[e._v("The command git svn rebase throws an error similar to this:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("\n Checksum mismatch: <path_to_file> <some_kind_of_sha1>\n  expected: <checksum_number_1>\n    got: <checksum_number_2>\n\n")])])]),o("p",[e._v("The solution to this problem is reset svn to the revision when the troubled file got modified for the last time, and do a git svn fetch so the SVN history is restored. The commands to perform the SVN reset are:")]),e._v(" "),o("ul",[o("li",[e._v("git log -1 -- "),o("code",[e._v("<path_to_file>")]),e._v(" (copy the SVN revision number that appear in the commit message)")]),e._v(" "),o("li",[e._v("git svn reset "),o("code",[e._v("<revision_number>")])]),e._v(" "),o("li",[e._v("git svn fetch")])]),e._v(" "),o("p",[e._v("You should be able to push/pull data from SVN again")]),e._v(" "),o("p",[o("strong",[e._v("File was not found in commit")]),e._v("\nWhen you try to fetch or pull from SVN you get an error similar to this")]),e._v(" "),o("div",{staticClass:"language-git extra-class"},[o("pre",{pre:!0,attrs:{class:"language-git"}},[o("code",[e._v("<file_path> was not found in commit <hash>\n\n")])])]),o("p",[e._v("This means that a revision in SVN is trying to modify a file that for some reason doesn't exists in your local copy.  The best way to get rid of this error is force a fetch ignoring the path of that file and it will updated to its status in the latest SVN revision:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("git svn fetch --ignore-paths <file_path>")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);