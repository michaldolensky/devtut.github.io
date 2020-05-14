(window.webpackJsonp=window.webpackJsonp||[]).push([[1902],{2249:function(e,s,t){"use strict";t.r(s);var a=t(19),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"secure-shell-ssh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#secure-shell-ssh"}},[e._v("#")]),e._v(" Secure Shell (SSH)")]),e._v(" "),t("p",[e._v("A secure "),t("a",{attrs:{href:"https://stackoverflow.com/documentation/linux/2731/shell",target:"_blank",rel:"noopener noreferrer"}},[e._v("shell"),t("OutboundLink")],1),e._v(" is used to remotely access a server from a client over an encrypted connection. OpenSSH is used as an alternative to Telnet connections that achieve remote shell access but are unencrypted. The OpenSSH Client is installed on most GNU/Linux distributions by default and is used to connect to a server. These examples show use how to use the SSH suite to for accept SSH connections and connecting to another host.")]),e._v(" "),t("h2",{attrs:{id:"connecting-to-a-remote-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#connecting-to-a-remote-server"}},[e._v("#")]),e._v(" Connecting to a remote server")]),e._v(" "),t("p",[e._v("To connect to a server we must use SSH on the client as follows,")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ssh -p port user@server-address")]),e._v("\n\n")])])]),t("ul",[t("li",[t("strong",[e._v("port")]),e._v(" - The listening ssh port of the server (default port 22).")]),e._v(" "),t("li",[t("strong",[e._v("user")]),e._v(" - Must be an existing user on the server with SSH privileges.")]),e._v(" "),t("li",[t("strong",[e._v("server address")]),e._v(" - The IP/Domain of the server.")])]),e._v(" "),t("p",[e._v("For a real world example lets pretend that you're making a website. The company you chose to host your site tells you that the server is located at "),t("strong",[e._v("web-servers.com")]),e._v(" on a custom port of "),t("strong",[e._v("2020")]),e._v(" and your account name "),t("strong",[e._v("usr1")]),e._v(" has been chosen to create a user on the server with SSH privileges. In this case the SSH command used would be as such")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ssh -p 2020 usr1@web-servers.com")]),e._v("\n\n")])])]),t("p",[e._v("If account name on the remote system is the same as the one one the local client you may leave the user name off. So if you are "),t("code",[e._v("usr1")]),e._v(" on both systems then you my simply use "),t("code",[e._v("web-servers.com")]),e._v(" instead of "),t("code",[e._v("usr1@web-servers.com")]),e._v(".")]),e._v(" "),t("p",[e._v("When a server you want to connect to is not directly accessible to you, you can try using ProxyJump switch to connect to it through another server which is accessible to you and can connect to the desired server.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ssh -J usr1@10.0.0.1:2020 usr2@10.0.0.2 -p 2222")]),e._v("\n\n")])])]),t("p",[e._v("This will let you connect to the server 10.0.0.2 (running ssh on port 2222) through server at 10.0.0.1 (running ssh on port 2020). You will need to have accounts on both servers of course. Also note that the -J switch is introduced in OpenSSH version 7.3.")]),e._v(" "),t("h2",{attrs:{id:"installing-openssh-suite"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing-openssh-suite"}},[e._v("#")]),e._v(" Installing OpenSSH suite")]),e._v(" "),t("p",[e._v("Both connecting to a remove SSH server and accepting SSH connections require installation of "),t("code",[e._v("openssh")])]),e._v(" "),t("p",[t("strong",[e._v("Debian:")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# apt-get install openssh")]),e._v("\n\n")])])]),t("p",[t("strong",[e._v("Arch Linux:")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# pacman -S openssh")]),e._v("\n\n")])])]),t("p",[t("strong",[e._v("Yum:")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# yum install openssh")]),e._v("\n\n")])])]),t("h2",{attrs:{id:"generate-public-and-private-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generate-public-and-private-key"}},[e._v("#")]),e._v(" Generate public and private key")]),e._v(" "),t("p",[e._v("To generate keys for SSH client:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("ssh-keygen "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("-t rsa "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" rsa1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" dsa "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("-C "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("comment"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("-b bits"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n\n")])])]),t("p",[e._v("For example:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("ssh-keygen -t rsa -b "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("4096")]),e._v(" - C myemail@email.com\n\n")])])]),t("p",[e._v("Default location is "),t("code",[e._v("~/.ssh/id_rsa")]),e._v(" for private and "),t("code",[e._v("~/.ssh/id_rsa.pub")]),e._v(" for public key.")]),e._v(" "),t("p",[e._v("For more info, please visit "),t("a",{attrs:{href:"http://man.openbsd.org/OpenBSD-current/man1/ssh-keygen.1",target:"_blank",rel:"noopener noreferrer"}},[e._v("man.openbsd.org"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"configuring-an-ssh-server-to-accept-connections"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuring-an-ssh-server-to-accept-connections"}},[e._v("#")]),e._v(" Configuring an SSH server to accept connections")]),e._v(" "),t("p",[e._v("First we must edit the SSH daemon config file. Though under different Linux distributions this may be located in different directories, usually it is stored under "),t("code",[e._v("/etc/ssh/sshd_config")])]),e._v(" "),t("p",[e._v("Use your text editor to change the values set in this file, all lines starting with # are commented out and must have this character removed to take any effect. A list of recommendations follow as such.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("Port "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("chose a number between "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" - "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("65535")]),e._v(", normaly greater than four digits"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\nPasswordAuthentication "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("yes")]),e._v("\nAllowUsers    user1 user2 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".etc\n\n")])])]),t("p",[t("strong",[e._v("Note that it is preferable to disable password logins all together and use SSH Keys for improved security as explained in this document.")])]),e._v(" "),t("h2",{attrs:{id:"passwordless-connection-using-a-key-pair"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#passwordless-connection-using-a-key-pair"}},[e._v("#")]),e._v(" Passwordless connection (using a key pair)")]),e._v(" "),t("p",[e._v("First of all you'll need to have a key pair. If you don't have one yet, take a look at the 'Generate public and private key topic'.")]),e._v(" "),t("p",[e._v("Your key pair is composed by a private key (id_rsa) and a public key (id_rsa.pub). All you need to do is to copy the public key to the remote host and add its contents to the "),t("code",[e._v("~/.ssh/authorized_keys")]),e._v(" file.")]),e._v(" "),t("p",[e._v("One simple way to do that is:")]),e._v(" "),t("p",[t("code",[e._v("ssh <user>@<ssh-server> 'cat >> ~/.ssh/authorized_keys' < id_rsa.pub")])]),e._v(" "),t("p",[e._v("Once the public key is properly placed in your user's home directory, you just need to login using the respective private key:")]),e._v(" "),t("p",[t("code",[e._v("ssh <user>@<ssh-server> -i id_rsa")])]),e._v(" "),t("h2",{attrs:{id:"disable-ssh-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#disable-ssh-service"}},[e._v("#")]),e._v(" Disable ssh service")]),e._v(" "),t("p",[e._v("This will disable the SSH server side service, as if needed this will insure that clients cannot connect via ssh")]),e._v(" "),t("p",[t("strong",[e._v("Ubuntu")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("service")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ssh")]),e._v(" stop\n\n")])])]),t("p",[t("strong",[e._v("Debian")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" /etc/init.d/ssh stop\n\n")])])]),t("p",[t("strong",[e._v("Arch Linux")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("killall")]),e._v(" sshd\n\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);